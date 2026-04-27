import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

const TABLES = [
  "users",
  "levels",
  "courses",
  "lessons",
  "lesson_contents",
  "exercises",
  "quiz_options",
  "enrollments",
  "user_progress",
  "user_exercise_results",
  "badges",
  "user_badges",
  "comments",
] as const;

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const counts: Record<string, number> = {};

  const results = await Promise.all(
    TABLES.map(async (table) => {
      const { count, error } = await supabase!
        .from(table)
        .select("*", { count: "exact", head: true });
      return { table, count: error ? -1 : (count ?? 0) };
    })
  );

  for (const { table, count } of results) {
    counts[table] = count;
  }

  return NextResponse.json({
    tables: counts,
    totalRecords: Object.values(counts).reduce(
      (sum, c) => sum + (c >= 0 ? c : 0),
      0
    ),
  });
}
