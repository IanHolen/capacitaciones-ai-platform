import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

async function isAdmin(supabase: Awaited<ReturnType<typeof createClient>>, userId: string, email: string | undefined): Promise<boolean> {
  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();

  return !!adminUser || email === "holenderian@gmail.com";
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { id: lessonSlug } = await params;

  // The frontend sends a lesson slug (e.g. "que-es-ia-1") — resolve to UUID
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id")
    .eq("slug", lessonSlug)
    .maybeSingle();

  if (!lesson) {
    return NextResponse.json({ comments: [] });
  }

  const { data: comments, error } = await supabase
    .from("comments")
    .select("id, body, created_at, parent_id, user_id")
    .eq("lesson_id", lesson.id)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[comments] Error:", error.message);
    return NextResponse.json({ comments: [] });
  }

  // Fetch user info separately to avoid join issues
  const userIds = [...new Set(comments?.map((c) => c.user_id) ?? [])];
  const { data: users } = userIds.length > 0
    ? await supabase.from("users").select("id, name, avatar_url").in("id", userIds)
    : { data: [] };

  const userMap = new Map((users ?? []).map((u) => [u.id, u]));

  const enriched = (comments ?? []).map((c) => ({
    ...c,
    users: userMap.get(c.user_id) ?? { id: c.user_id, name: "User", avatar_url: null },
  }));

  return NextResponse.json({ comments: enriched });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: commentId } = await params;

  // Verify ownership or admin
  const { data: comment } = await supabase
    .from("comments")
    .select("user_id")
    .eq("id", commentId)
    .single();

  if (!comment) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  const admin = await isAdmin(supabase, user.id, user.email ?? undefined);
  if (comment.user_id !== user.id && !admin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}
