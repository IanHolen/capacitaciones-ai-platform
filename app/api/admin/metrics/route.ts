import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const [totalUsers, activeUsers, lessonsCompleted, quizzesApproved] =
    await Promise.all([
      supabase!.from("users").select("*", { count: "exact", head: true }),
      supabase!
        .from("user_progress")
        .select("user_id", { count: "exact", head: true })
        .gte("updated_at", sevenDaysAgo),
      supabase!
        .from("user_progress")
        .select("*", { count: "exact", head: true })
        .eq("completed", true),
      supabase!
        .from("user_exercise_results")
        .select("*", { count: "exact", head: true })
        .eq("is_correct", true),
    ]);

  return NextResponse.json({
    totalUsers: totalUsers.count ?? 0,
    activeUsers7d: activeUsers.count ?? 0,
    lessonsCompleted: lessonsCompleted.count ?? 0,
    quizzesApproved: quizzesApproved.count ?? 0,
  });
}
