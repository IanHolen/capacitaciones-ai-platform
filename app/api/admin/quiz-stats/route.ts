import { requireAdmin } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  // Use service role client to bypass RLS for admin queries
  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: "Service role key not configured" }, { status: 500 });
  }

  // 1. Get all quiz results with exercise_id
  const { data: results, error: resultsError } = await admin
    .from("user_exercise_results")
    .select("exercise_id, is_correct");

  if (resultsError || !results || results.length === 0) {
    return NextResponse.json({ data: [] });
  }

  // 2. Build exercise → course mapping via lesson_contents → lessons → courses
  const exerciseIds = [...new Set(results.map((r) => r.exercise_id))];

  const { data: contentRows } = await admin
    .from("lesson_contents")
    .select("exercise_id, lessons(courses(title))")
    .in("exercise_id", exerciseIds);

  const exerciseToCourse = new Map<string, string>();
  for (const row of contentRows ?? []) {
    const lesson = row.lessons as unknown as { courses: { title: string } } | null;
    const courseTitle = lesson?.courses?.title;
    if (row.exercise_id && courseTitle) {
      exerciseToCourse.set(row.exercise_id, courseTitle);
    }
  }

  // 3. Group results by course
  const courseStats = new Map<string, { total: number; passed: number }>();

  for (const r of results) {
    const courseName = exerciseToCourse.get(r.exercise_id) ?? "Sin curso";
    const stats = courseStats.get(courseName) ?? { total: 0, passed: 0 };
    stats.total++;
    if (r.is_correct) stats.passed++;
    courseStats.set(courseName, stats);
  }

  const data = Array.from(courseStats.entries())
    .map(([name, stats]) => ({
      course_name: name,
      total_attempts: stats.total,
      passed: stats.passed,
      failed: stats.total - stats.passed,
      pass_rate: stats.total > 0 ? Math.round((stats.passed / stats.total) * 100) : 0,
    }))
    .sort((a, b) => b.total_attempts - a.total_attempts);

  return NextResponse.json({ data });
}
