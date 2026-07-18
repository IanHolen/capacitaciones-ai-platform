import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";
import { cursos } from "@/lib/cursos-data";

/**
 * GET /api/admin/quiz-stats
 * Tasa de aprobación por curso, leída de quiz_attempts (intentos reales).
 */
export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { data: attempts, error: dbError } = await supabase!
    .from("quiz_attempts")
    .select("course_slug, passed");

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  if (!attempts || attempts.length === 0) {
    return NextResponse.json({ data: [] });
  }

  const titleBySlug = new Map(cursos.map((c) => [c.id, c.titulo]));

  const stats = new Map<string, { total: number; passed: number }>();
  for (const a of attempts) {
    const s = stats.get(a.course_slug) ?? { total: 0, passed: 0 };
    s.total++;
    if (a.passed) s.passed++;
    stats.set(a.course_slug, s);
  }

  const data = Array.from(stats.entries())
    .map(([slug, s]) => ({
      course_slug: slug,
      course_name: titleBySlug.get(slug) ?? slug,
      total_attempts: s.total,
      passed: s.passed,
      failed: s.total - s.passed,
      pass_rate: s.total > 0 ? Math.round((s.passed / s.total) * 100) : 0,
    }))
    .sort((a, b) => b.total_attempts - a.total_attempts);

  return NextResponse.json({ data });
}
