import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId } = await params;

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("id, title, slug, sort_order")
    .eq("course_id", courseId)
    .order("sort_order", { ascending: true });

  if (lessonsError || !lessons) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const lessonIds = lessons.map((l) => l.id);

  const { data: progress } = await supabase
    .from("user_progress")
    .select("lesson_id, completed")
    .eq("user_id", user.id)
    .in("lesson_id", lessonIds);

  const completedMap = new Map(
    (progress ?? []).map((p) => [p.lesson_id, p.completed])
  );

  const totalLessons = lessons.length;
  const completedLessons = (progress ?? []).filter((p) => p.completed).length;

  return NextResponse.json({
    courseId,
    totalLessons,
    completedLessons,
    percentage:
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    lessons: lessons.map((lesson) => ({
      ...lesson,
      completed: completedMap.get(lesson.id) ?? false,
    })),
  });
}
