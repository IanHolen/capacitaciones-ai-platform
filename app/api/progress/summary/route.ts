import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * GET /api/progress/summary
 * Returns a summary of the authenticated user's progress across all courses:
 * - Total courses, completed courses, overall percentage
 * - Per-course breakdown with lesson counts and completion percentage
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "es";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch all courses with their lessons
  const { data: courses, error: coursesError } = await supabase
    .from("courses")
    .select(
      "id, slug, title, title_en, level:levels(slug, name, name_en), lessons(id)"
    )
    .is("deleted_at", null)
    .order("sort_order", { ascending: true });

  if (coursesError) {
    return NextResponse.json(
      { error: coursesError.message },
      { status: 500 }
    );
  }

  // Fetch all completed progress for this user in one query
  const { data: progress } = await supabase
    .from("user_progress")
    .select("lesson_id, completed")
    .eq("user_id", user.id)
    .eq("completed", true);

  const completedLessonIds = new Set(
    (progress ?? []).map((p) => p.lesson_id)
  );

  // Build per-course summary
  const courseSummaries = (courses ?? []).map((course) => {
    const lessons = Array.isArray(course.lessons) ? course.lessons : [];
    const totalLessons = lessons.length;
    const completedLessons = lessons.filter((l) =>
      completedLessonIds.has(l.id)
    ).length;
    const percentage =
      totalLessons > 0
        ? Math.round((completedLessons / totalLessons) * 100)
        : 0;

    const title =
      lang === "en" && (course as Record<string, unknown>).title_en
        ? (course as Record<string, unknown>).title_en
        : course.title;

    return {
      courseId: course.id,
      slug: course.slug,
      title,
      level: course.level,
      totalLessons,
      completedLessons,
      percentage,
      completed: totalLessons > 0 && completedLessons === totalLessons,
    };
  });

  const totalCourses = courseSummaries.length;
  const completedCourses = courseSummaries.filter((c) => c.completed).length;
  const totalLessonsAll = courseSummaries.reduce(
    (sum, c) => sum + c.totalLessons,
    0
  );
  const completedLessonsAll = courseSummaries.reduce(
    (sum, c) => sum + c.completedLessons,
    0
  );

  return NextResponse.json({
    totalCourses,
    completedCourses,
    overallPercentage:
      totalLessonsAll > 0
        ? Math.round((completedLessonsAll / totalLessonsAll) * 100)
        : 0,
    totalLessons: totalLessonsAll,
    completedLessons: completedLessonsAll,
    courses: courseSummaries,
  });
}
