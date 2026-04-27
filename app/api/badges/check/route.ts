import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

interface BadgeRule {
  id: string;
  name: string;
  check: (stats: UserStats) => boolean;
}

interface UserStats {
  lessonsCompleted: number;
  quizzesCompleted: number;
  coursesCompleted: number;
}

const BADGE_RULES: BadgeRule[] = [
  {
    id: "first-lesson",
    name: "Primera lección",
    check: (s) => s.lessonsCompleted >= 1,
  },
  {
    id: "five-lessons",
    name: "5 lecciones completadas",
    check: (s) => s.lessonsCompleted >= 5,
  },
  {
    id: "ten-lessons",
    name: "10 lecciones completadas",
    check: (s) => s.lessonsCompleted >= 10,
  },
  {
    id: "first-quiz",
    name: "Primer quiz aprobado",
    check: (s) => s.quizzesCompleted >= 1,
  },
  {
    id: "first-course",
    name: "Primer curso completado",
    check: (s) => s.coursesCompleted >= 1,
  },
  {
    id: "three-courses",
    name: "3 cursos completados",
    check: (s) => s.coursesCompleted >= 3,
  },
];

export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
  // Get user stats
  const { count: lessonsCompleted } = await supabase
    .from("user_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("completed", true);

  const { count: quizzesCompleted } = await supabase
    .from("user_exercise_results")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("is_correct", true);

  // Count completed courses (all lessons in a course completed)
  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("status", "COMPLETED");

  const stats: UserStats = {
    lessonsCompleted: lessonsCompleted ?? 0,
    quizzesCompleted: quizzesCompleted ?? 0,
    coursesCompleted: enrollments?.length ?? 0,
  };

  // Get existing badges
  const { data: existingBadges } = await supabase
    .from("user_badges")
    .select("badge_id")
    .eq("user_id", user.id);

  const existingIds = new Set(existingBadges?.map((b) => b.badge_id) ?? []);

  // Check for new badges
  const newBadges: string[] = [];
  for (const rule of BADGE_RULES) {
    if (!existingIds.has(rule.id) && rule.check(stats)) {
      // Get the badge record
      const { data: badge } = await supabase
        .from("badges")
        .select("id")
        .eq("name", rule.name)
        .single();

      if (badge) {
        await supabase.from("user_badges").insert({
          user_id: user.id,
          badge_id: badge.id,
        });
        newBadges.push(rule.name);
      }
    }
  }

  return NextResponse.json({
    newBadges,
    stats,
  });
  } catch (err) {
    console.error("[badges/check] Error:", err);
    return NextResponse.json(
      { error: "Failed to check badges" },
      { status: 500 }
    );
  }
}
