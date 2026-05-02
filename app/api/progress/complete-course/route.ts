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

  const { courseSlug } = await request.json();

  if (!courseSlug || typeof courseSlug !== "string") {
    return NextResponse.json(
      { error: "courseSlug is required" },
      { status: 400 }
    );
  }

  // Find the course by slug
  const { data: course } = await supabase
    .from("courses")
    .select("id")
    .eq("slug", courseSlug)
    .maybeSingle();

  if (!course) {
    return NextResponse.json({
      completed: false,
      warning: "Course not found in database.",
    });
  }

  // Count total lessons and completed lessons for this course
  const { data: lessons } = await supabase
    .from("lessons")
    .select("id")
    .eq("course_id", course.id);

  const totalLessons = lessons?.length ?? 0;

  if (totalLessons === 0) {
    return NextResponse.json({
      completed: false,
      warning: "No lessons found for course.",
    });
  }

  const lessonIds = lessons!.map((l) => l.id);

  const { count: completedCount } = await supabase
    .from("user_progress")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .in("lesson_id", lessonIds)
    .eq("completed", true);

  const allComplete = (completedCount ?? 0) >= totalLessons;

  if (!allComplete) {
    return NextResponse.json({
      completed: false,
      completedLessons: completedCount ?? 0,
      totalLessons,
    });
  }

  // All lessons complete — upsert enrollment as COMPLETED
  const { error } = await supabase.from("enrollments").upsert(
    {
      user_id: user.id,
      course_id: course.id,
      status: "COMPLETED",
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,course_id" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ completed: true });
}
