import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * POST /api/quiz-attempts
 * Registra un intento de quiz (aprobado o reprobado).
 * Body: { courseId: string (slug), lessonId: string (slug), score: number, total: number, passed: boolean }
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { courseId, lessonId, score, total, passed } = (body ?? {}) as {
    courseId?: unknown;
    lessonId?: unknown;
    score?: unknown;
    total?: unknown;
    passed?: unknown;
  };

  if (!courseId || typeof courseId !== "string") {
    return NextResponse.json({ error: "courseId is required" }, { status: 400 });
  }
  if (!lessonId || typeof lessonId !== "string") {
    return NextResponse.json({ error: "lessonId is required" }, { status: 400 });
  }
  if (
    typeof score !== "number" ||
    typeof total !== "number" ||
    !Number.isInteger(score) ||
    !Number.isInteger(total) ||
    total <= 0 ||
    score < 0 ||
    score > total
  ) {
    return NextResponse.json(
      { error: "score/total must be valid integers (0 <= score <= total)" },
      { status: 400 }
    );
  }
  if (typeof passed !== "boolean") {
    return NextResponse.json({ error: "passed must be a boolean" }, { status: 400 });
  }

  const { data: attempt, error } = await supabase
    .from("quiz_attempts")
    .insert({
      user_id: user.id,
      course_slug: courseId,
      lesson_slug: lessonId,
      score,
      total,
      passed,
    })
    .select("id, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ attempt }, { status: 201 });
}
