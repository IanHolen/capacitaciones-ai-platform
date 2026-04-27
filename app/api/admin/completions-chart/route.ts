import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error: dbError } = await supabase!
    .from("user_progress")
    .select("completed_at")
    .eq("completed", true)
    .gte("completed_at", thirtyDaysAgo)
    .order("completed_at", { ascending: true });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  const countByDate = new Map<string, number>();
  for (const row of data ?? []) {
    if (row.completed_at) {
      const date = new Date(row.completed_at).toISOString().split("T")[0];
      countByDate.set(date, (countByDate.get(date) ?? 0) + 1);
    }
  }

  const result = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    const date = d.toISOString().split("T")[0];
    result.push({ date, count: countByDate.get(date) ?? 0 });
  }

  return NextResponse.json({ data: result });
}
