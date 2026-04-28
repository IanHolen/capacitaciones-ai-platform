import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId");

  if (!courseId) {
    return NextResponse.json(
      { error: "courseId is required" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  // Get average rating and count
  const { data: ratings, error } = await supabase
    .from("course_ratings")
    .select("rating")
    .eq("course_id", courseId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const count = ratings?.length ?? 0;
  const average =
    count > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / count
      : 0;

  // Get current user's rating if authenticated
  let userRating: number | null = null;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: existing } = await supabase
      .from("course_ratings")
      .select("rating")
      .eq("course_id", courseId)
      .eq("user_id", user.id)
      .maybeSingle();

    userRating = existing?.rating ?? null;
  }

  return NextResponse.json({ average, count, userRating });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId, rating } = await request.json();

  if (!courseId || typeof courseId !== "string") {
    return NextResponse.json(
      { error: "courseId is required" },
      { status: 400 }
    );
  }

  if (!rating || typeof rating !== "number" || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "rating must be an integer between 1 and 5" },
      { status: 400 }
    );
  }

  // Upsert: insert or update if the user already rated this course
  const { data: existing } = await supabase
    .from("course_ratings")
    .select("id")
    .eq("course_id", courseId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("course_ratings")
      .update({ rating, updated_at: new Date().toISOString() })
      .eq("id", existing.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } else {
    const { error } = await supabase.from("course_ratings").insert({
      user_id: user.id,
      course_id: courseId,
      rating,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
