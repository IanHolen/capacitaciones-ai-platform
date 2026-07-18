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
    const metrics = raw ?? {};
    // Derive total_quizzes_attempted from passed + failed for the frontend
    if (metrics.total_quizzes_passed != null || metrics.total_quizzes_failed != null) {
      metrics.total_quizzes_attempted =
        (metrics.total_quizzes_passed ?? 0) + (metrics.total_quizzes_failed ?? 0);
    }
    return NextResponse.json(metrics);
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
        .from("quiz_attempts")
        .select("*", { count: "exact", head: true })
        .eq("passed", true),
      supabase!
        .from("quiz_attempts")
        .select("*", { count: "exact", head: true })
        .eq("passed", false),
      supabase!.from("comments").select("*", { count: "exact", head: true }),
    ]);

  return NextResponse.json({
    total_users: usersRes.count ?? 0,
    active_users_7d: activeRes.count ?? 0,
    total_lessons_completed: lessonsRes.count ?? 0,
    total_quizzes_passed: quizzesPassRes.count ?? 0,
    total_quizzes_attempted: (quizzesPassRes.count ?? 0) + (quizzesFailRes.count ?? 0),
    total_comments: commentsRes.count ?? 0,
    courses_count: 15,
  });
}
