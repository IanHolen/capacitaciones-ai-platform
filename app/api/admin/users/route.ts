import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { data: users, error: dbError } = await supabase!
    .from("users")
    .select("id, email, name, role, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  // Get progress counts per user
  const userIds = users?.map((u) => u.id) ?? [];

  const { data: progressCounts } = await supabase!
    .from("user_progress")
    .select("user_id")
    .eq("completed", true)
    .in("user_id", userIds);

  const progressMap = new Map<string, number>();
  for (const p of progressCounts ?? []) {
    progressMap.set(p.user_id, (progressMap.get(p.user_id) ?? 0) + 1);
  }

  const usersWithProgress = users?.map((u) => ({
    ...u,
    lessonsCompleted: progressMap.get(u.id) ?? 0,
  }));

  return NextResponse.json({ users: usersWithProgress });
}
