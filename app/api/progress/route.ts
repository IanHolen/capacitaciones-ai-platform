import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Join with lessons and courses to get slugs for frontend mapping
  const { data: progress, error } = await supabase
    .from("user_progress")
    .select(
      "id, user_id, lesson_id, completed, completed_at, last_accessed_at, lesson:lessons(slug, course:courses(slug))"
    )
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: progress ?? [] });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonId } = await request.json();

  if (!lessonId || typeof lessonId !== "string") {
    return NextResponse.json(
      { error: "lessonId is required" },
      { status: 400 }
    );
  }

  // The frontend sends a lesson slug (e.g. "que-es-ia-1").
  // We need to resolve it to the DB UUID.
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id")
    .eq("slug", lessonId)
    .maybeSingle();

  if (!lesson) {
    // Lesson not found in DB — likely not seeded yet.
    // Return success to avoid blocking the user experience.
    return NextResponse.json({
      progress: null,
      warning: "Lesson not found in database — progress not persisted.",
    });
  }

  const { data: progress, error } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: user.id,
        lesson_id: lesson.id,
        completed: true,
        completed_at: new Date().toISOString(),
        last_accessed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lesson_id" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress });
}
