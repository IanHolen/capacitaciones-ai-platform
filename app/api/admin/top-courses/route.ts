import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { data: courses, error: courseError } = await supabase!
    .from("courses")
    .select("id, title, sort_order, levels(name)")
    .order("sort_order", { ascending: true });

  if (courseError) {
    return NextResponse.json({ error: courseError.message }, { status: 500 });
  }

  const result = [];

  for (const course of courses ?? []) {
    const { count: enrolledCount } = await supabase!
      .from("enrollments")
      .select("*", { count: "exact", head: true })
      .eq("course_id", course.id);

    const { count: completedCount } = await supabase!
      .from("enrollments")
      .select("*", { count: "exact", head: true })
      .eq("course_id", course.id)
      .eq("status", "COMPLETED");

    const enrolled = enrolledCount ?? 0;
    const completed = completedCount ?? 0;

    result.push({
      course_name: course.title,
      level: (course as Record<string, unknown>).levels
        ? ((course as Record<string, unknown>).levels as { name: string }).name
        : "N/A",
      enrolled_count: enrolled,
      completion_rate: enrolled > 0 ? Math.round((completed / enrolled) * 100) : 0,
    });
  }

  result.sort((a, b) => b.enrolled_count - a.enrolled_count);

  return NextResponse.json({ data: result });
}
