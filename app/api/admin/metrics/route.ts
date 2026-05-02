import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Try RPC first
  const { data, error: rpcError } = await supabase!.rpc("platform_metrics");

  if (!rpcError && data != null) {
    // RPC may return array or object — normalize to flat object
    const raw = Array.isArray(data) ? data[0] : data;
    // Map RPC field names → frontend-expected names
    return NextResponse.json({
      total_users: raw?.total_users ?? 0,
      active_users_7d: raw?.active_users_7d ?? 0,
      lessons_completed: raw?.total_lessons_completed ?? 0,
      quizzes_approved: raw?.total_quizzes_passed ?? 0,
      quizzes_failed: Math.max(
        0,
        (raw?.total_quizzes_attempted ?? raw?.total_quizzes_passed ?? 0) -
          (raw?.total_quizzes_passed ?? 0),
      ),
      total_comments: raw?.total_comments ?? 0,
      total_courses: raw?.courses_count ?? 0,
    });
  }

  // Fallback: build metrics from direct queries if RPC doesn't exist
  const [usersRes, activeRes, lessonsRes, quizzesPassRes, quizzesFailRes, commentsRes] =
    await Promise.all([
      supabase!.from("users").select("*", { count: "exact", head: true }),
      supabase!
        .from("user_progress")
        .select("user_id", { count: "exact", head: true })
        .gte("updated_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
      supabase!
        .from("user_progress")
        .select("*", { count: "exact", head: true })
        .eq("completed", true),
      supabase!
        .from("user_exercise_results")
        .select("*", { count: "exact", head: true })
        .eq("is_correct", true),
      supabase!
        .from("user_exercise_results")
        .select("*", { count: "exact", head: true })
        .eq("is_correct", false),
      supabase!.from("comments").select("*", { count: "exact", head: true }),
    ]);

  return NextResponse.json({
    total_users: usersRes.count ?? 0,
    active_users_7d: activeRes.count ?? 0,
    lessons_completed: lessonsRes.count ?? 0,
    quizzes_approved: quizzesPassRes.count ?? 0,
    quizzes_failed: quizzesFailRes.count ?? 0,
    total_comments: commentsRes.count ?? 0,
    total_courses: 15,
  });
}
