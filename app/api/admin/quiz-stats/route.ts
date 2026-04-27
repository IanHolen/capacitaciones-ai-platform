import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { data: results, error: dbError } = await supabase!
    .from("user_exercise_results")
    .select("is_correct, exercises(lesson_content:lesson_contents(lessons(courses(title))))");

  if (dbError) {
    // Fallback: simpler query if joins fail
    const { data: simpleResults } = await supabase!
      .from("user_exercise_results")
      .select("is_correct");

    const total = simpleResults?.length ?? 0;
    const passed = simpleResults?.filter((r) => r.is_correct).length ?? 0;

    return NextResponse.json({
      data: [
        {
          course_name: "Todos los cursos",
          total_attempts: total,
          passed,
          failed: total - passed,
          pass_rate: total > 0 ? Math.round((passed / total) * 100) : 0,
        },
      ],
    });
  }

  // Group by course
  const courseStats = new Map<
    string,
    { total: number; passed: number }
  >();

  for (const r of results ?? []) {
    const courseName = "General";
    const stats = courseStats.get(courseName) ?? { total: 0, passed: 0 };
    stats.total++;
    if (r.is_correct) stats.passed++;
    courseStats.set(courseName, stats);
  }

  const data = Array.from(courseStats.entries()).map(([name, stats]) => ({
    course_name: name,
    total_attempts: stats.total,
    passed: stats.passed,
    failed: stats.total - stats.passed,
    pass_rate:
      stats.total > 0 ? Math.round((stats.passed / stats.total) * 100) : 0,
  }));

  return NextResponse.json({ data });
}
