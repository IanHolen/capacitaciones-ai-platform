import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error: dbError } = await supabase!
    .from("users")
    .select("created_at")
    .gte("created_at", sevenDaysAgo)
    .order("created_at", { ascending: true });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  const countByDate = new Map<string, number>();
  for (const row of data ?? []) {
    const date = new Date(row.created_at).toISOString().split("T")[0];
    countByDate.set(date, (countByDate.get(date) ?? 0) + 1);
  }

  // Fill in missing days
  const result = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    const date = d.toISOString().split("T")[0];
    result.push({ date, count: countByDate.get(date) ?? 0 });
  }

  return NextResponse.json({ data: result });
}
