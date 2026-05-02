import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Resolve a course slug or UUID to a verified course UUID.
 * Returns the UUID if found, or null if the course doesn't exist.
 */
async function resolveCourseId(
  supabase: Awaited<ReturnType<typeof createClient>>,
  courseId: string
): Promise<string | null> {
  // Try slug first
  const { data: bySlug } = await supabase
    .from("courses")
    .select("id")
    .eq("slug", courseId)
    .maybeSingle();

  if (bySlug) return bySlug.id;

  // Try as UUID directly
  const { data: byId } = await supabase
    .from("courses")
    .select("id")
    .eq("id", courseId)
    .maybeSingle();

  return byId?.id ?? null;
}

/**
 * GET /api/courses/[courseId]/rating
 * Returns average rating + count for a course, and the current user's rating if authenticated.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;

    if (!courseId || typeof courseId !== "string") {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const resolvedCourseId = await resolveCourseId(supabase, courseId);
    if (!resolvedCourseId) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Get aggregate rating for the course
    const { data: ratings, error: ratingsError } = await supabase
      .from("course_ratings")
      .select("rating")
      .eq("course_id", resolvedCourseId);

    if (ratingsError) {
      return NextResponse.json(
        { error: "Failed to fetch ratings" },
        { status: 500 }
      );
    }

    const count = ratings?.length ?? 0;
    const average =
      count > 0
        ? Math.round(
            (ratings.reduce((sum, r) => sum + r.rating, 0) / count) * 10
          ) / 10
        : 0;

    // Check if user is authenticated and get their rating
    let userRating: number | null = null;
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data: existing } = await supabase
        .from("course_ratings")
        .select("rating")
        .eq("course_id", resolvedCourseId)
        .eq("user_id", user.id)
        .maybeSingle();

      userRating = existing?.rating ?? null;
    }

    return NextResponse.json({ average, count, userRating });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch rating" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/courses/[courseId]/rating
 * Upsert user's rating for a course (1-5 stars).
 * Body: { rating: number }
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const supabase = await createClient();

    // Auth check
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!courseId || typeof courseId !== "string") {
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const { rating } = body;

    if (typeof rating !== "number" || !Number.isInteger(rating)) {
      return NextResponse.json(
        { error: "rating must be an integer" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const resolvedCourseId = await resolveCourseId(supabase, courseId);
    if (!resolvedCourseId) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Upsert: insert or update if user already rated this course
    const { data: result, error } = await supabase
      .from("course_ratings")
      .upsert(
        {
          user_id: user.id,
          course_id: resolvedCourseId,
          rating,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,course_id" }
      )
      .select("id, rating, created_at, updated_at")
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to save rating" },
        { status: 500 }
      );
    }

    return NextResponse.json({ rating: result }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to save rating" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/courses/[courseId]/rating
 * Remove user's rating for a course.
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const resolvedCourseId = await resolveCourseId(supabase, courseId);
    if (!resolvedCourseId) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    const { error } = await supabase
      .from("course_ratings")
      .delete()
      .eq("course_id", resolvedCourseId)
      .eq("user_id", user.id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to delete rating" },
        { status: 500 }
      );
    }

    return NextResponse.json({ deleted: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete rating" },
      { status: 500 }
    );
  }
}
