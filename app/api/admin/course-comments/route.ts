import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId");

  if (!courseId) {
    return NextResponse.json({ error: "courseId is required" }, { status: 400 });
  }

  // Get all lessons for this course
  const { data: lessons, error: lessonsError } = await supabase!
    .from("lessons")
    .select("id, title, slug")
    .eq("course_id", courseId);

  if (lessonsError || !lessons || lessons.length === 0) {
    return NextResponse.json({ comments: [] });
  }

  const lessonIds = lessons.map((l) => l.id);
  const lessonMap = new Map(lessons.map((l) => [l.id, l]));

  // Get all comments for these lessons
  const { data: comments, error: commentsError } = await supabase!
    .from("comments")
    .select("id, body, created_at, lesson_id, user_id, parent_id")
    .in("lesson_id", lessonIds)
    .order("created_at", { ascending: false });

  if (commentsError) {
    return NextResponse.json({ error: commentsError.message }, { status: 500 });
  }

  // Get user info
  const userIds = [...new Set((comments ?? []).map((c) => c.user_id))];
  const { data: users } = userIds.length > 0
    ? await supabase!.from("users").select("id, name, email").in("id", userIds)
    : { data: [] };

  const userMap = new Map((users ?? []).map((u) => [u.id, u]));

  const enriched = (comments ?? []).map((c) => ({
    id: c.id,
    body: c.body,
    created_at: c.created_at,
    parent_id: c.parent_id,
    user: userMap.get(c.user_id) ?? { id: c.user_id, name: "Unknown", email: "" },
    lesson: lessonMap.get(c.lesson_id) ?? { id: c.lesson_id, title: "Unknown", slug: "" },
  }));

  return NextResponse.json({ comments: enriched });
}
