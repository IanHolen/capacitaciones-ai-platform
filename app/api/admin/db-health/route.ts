import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

const DB_LIMIT_MB = 500; // Supabase free tier

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Table record counts
  const tableNames = [
    "users", "levels", "courses", "lessons", "lesson_contents",
    "exercises", "quiz_options", "enrollments", "user_progress",
    "user_exercise_results", "badges", "user_badges", "comments",
    "user_goals", "errors",
  ];

  const tableCounts: Record<string, number> = {};
  await Promise.all(
    tableNames.map(async (table) => {
      const { count } = await supabase!
        .from(table)
        .select("*", { count: "exact", head: true });
      tableCounts[table] = count ?? 0;
    })
  );

  const totalRecords = Object.values(tableCounts).reduce((s, c) => s + c, 0);

  // DB size
  let dbSizeMb = 0;
  try {
    const { data } = await supabase!.rpc("get_db_size_mb");
    dbSizeMb = typeof data === "number" ? data : parseFloat(String(data)) || 0;
  } catch { /* RPC not available */ }

  // Table sizes
  let tableSizes: { name: string; size_kb: number }[] = [];
  try {
    const { data } = await supabase!.rpc("get_table_sizes");
    if (Array.isArray(data)) tableSizes = data;
  } catch { /* RPC not available */ }

  // Active connections
  let activeConnections = 0;
  try {
    const { data } = await supabase!.rpc("get_active_connections");
    activeConnections = typeof data === "number" ? data : parseInt(String(data)) || 0;
  } catch { /* RPC not available */ }

  // Records last 30 days
  let recordsLast30d = 0;
  try {
    const { data } = await supabase!.rpc("get_records_last_30d");
    if (data && typeof data === "object") {
      recordsLast30d = Object.values(data as Record<string, number>).reduce(
        (s, v) => s + (typeof v === "number" ? v : 0), 0
      );
    }
  } catch { /* RPC not available */ }

  // Error logs
  const { count: errorLogsTotal } = await supabase!
    .from("errors")
    .select("*", { count: "exact", head: true });

  const { count: errorLogs30d } = await supabase!
    .from("errors")
    .select("*", { count: "exact", head: true })
    .gte("created_at", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

  // Build tables array with sizes
  const sizeMap = new Map(tableSizes.map((t) => [t.name, t.size_kb]));
  const tables = tableNames.map((name) => ({
    name,
    row_count: tableCounts[name] ?? 0,
    size_kb: sizeMap.get(name) ?? 0,
  }));

  // Growth estimate
  const growthEstimateMbMonth = recordsLast30d > 0 && dbSizeMb > 0
    ? Math.round((dbSizeMb / Math.max(totalRecords, 1)) * recordsLast30d * 100) / 100
    : 0;

  const monthsUntilFull = growthEstimateMbMonth > 0
    ? Math.round((DB_LIMIT_MB - dbSizeMb) / growthEstimateMbMonth)
    : null;

  return NextResponse.json({
    db_size_mb: dbSizeMb,
    db_limit_mb: DB_LIMIT_MB,
    tables,
    total_tables: tables.length,
    total_records: totalRecords,
    growth_estimate_mb_month: growthEstimateMbMonth,
    months_until_full: monthsUntilFull,
    records_last_30d: recordsLast30d,
    error_logs_total: errorLogsTotal ?? 0,
    error_logs_30d: errorLogs30d ?? 0,
    active_connections: activeConnections,
    timestamp: new Date().toISOString(),
  });
}
