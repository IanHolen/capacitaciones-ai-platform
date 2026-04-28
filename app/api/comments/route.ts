import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonId, content, parentId } = await request.json();

  if (!lessonId || typeof lessonId !== "string") {
    return NextResponse.json(
      { error: "lessonId is required" },
      { status: 400 }
    );
  }

  if (!content || typeof content !== "string" || content.trim().length === 0) {
    return NextResponse.json(
      { error: "content is required" },
      { status: 400 }
    );
  }

  if (content.length > 2000) {
    return NextResponse.json(
      { error: "content too long (max 2000 characters)" },
      { status: 400 }
    );
  }

  // The frontend sends a lesson slug (e.g. "que-es-ia-1") — resolve to UUID
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id")
    .eq("slug", lessonId)
    .maybeSingle();

  if (!lesson) {
    return NextResponse.json(
      { error: "Lesson not found" },
      { status: 404 }
    );
  }

  const { data: comment, error } = await supabase
    .from("comments")
    .insert({
      user_id: user.id,
      lesson_id: lesson.id,
      body: content.trim(),
      parent_id: parentId ?? null,
    })
    .select("id, body, created_at, parent_id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ comment }, { status: 201 });
}
