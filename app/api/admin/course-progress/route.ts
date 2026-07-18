import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

interface CourseProgressRow {
  course_id: string;
  slug: string;
  title: string;
  level: string;
  total_lessons: number;
  students_started: number;
  students_completed: number;
  avg_completion: number; // % promedio de avance entre quienes empezaron
  lessons_completed_total: number;
}

/**
 * GET /api/admin/course-progress
 * Progreso real por curso calculado desde user_progress (fuente de verdad en BD).
 */
export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Cursos + lecciones (para saber cuántas lecciones tiene cada curso)
  const { data: courses, error: coursesError } = await supabase!
    .from("courses")
    .select("id, slug, title, sort_order, levels(name), lessons(id)")
    .is("deleted_at", null)
    .order("sort_order", { ascending: true });

  if (coursesError) {
    return NextResponse.json({ error: coursesError.message }, { status: 500 });
  }

  // Todo el progreso completado (35 usuarios x 110 lecciones máx — pequeño)
  const { data: progress, error: progressError } = await supabase!
    .from("user_progress")
    .select("user_id, lesson_id")
    .eq("completed", true);

  if (progressError) {
    return NextResponse.json({ error: progressError.message }, { status: 500 });
  }

  // lesson_id -> course_id
  const lessonToCourse = new Map<string, string>();
  const lessonsPerCourse = new Map<string, number>();
  for (const course of courses ?? []) {
    const lessons = Array.isArray(course.lessons) ? course.lessons : [];
    lessonsPerCourse.set(course.id, lessons.length);
    for (const l of lessons) lessonToCourse.set(l.id, course.id);
  }

  // course_id -> (user_id -> lecciones completadas)
  const byCourse = new Map<string, Map<string, number>>();
  for (const p of progress ?? []) {
    const courseId = lessonToCourse.get(p.lesson_id);
    if (!courseId) continue;
    let users = byCourse.get(courseId);
    if (!users) {
      users = new Map();
      byCourse.set(courseId, users);
    }
    users.set(p.user_id, (users.get(p.user_id) ?? 0) + 1);
  }

  const rows: CourseProgressRow[] = (courses ?? []).map((course) => {
    const totalLessons = lessonsPerCourse.get(course.id) ?? 0;
    const users = byCourse.get(course.id) ?? new Map<string, number>();
    const started = users.size;
    let completed = 0;
    let sumPct = 0;
    let lessonsCompletedTotal = 0;
    for (const count of users.values()) {
      lessonsCompletedTotal += count;
      if (totalLessons > 0) {
        sumPct += Math.min(100, (count / totalLessons) * 100);
        if (count >= totalLessons) completed++;
      }
    }
    const level = (course as { levels?: { name?: string } | null }).levels?.name ?? "—";
    return {
      course_id: course.id,
      slug: course.slug,
      title: course.title,
      level,
      total_lessons: totalLessons,
      students_started: started,
      students_completed: completed,
      avg_completion: started > 0 ? Math.round(sumPct / started) : 0,
      lessons_completed_total: lessonsCompletedTotal,
    };
  });

  // Totales globales
  const allUsers = new Set((progress ?? []).map((p) => p.user_id));

  return NextResponse.json({
    courses: rows,
    totals: {
      students_with_progress: allUsers.size,
      lessons_completed: (progress ?? []).length,
    },
  });
}
