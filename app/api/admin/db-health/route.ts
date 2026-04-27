import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Table record counts
  const tables = [
    "users", "levels", "courses", "lessons", "lesson_contents",
    "exercises", "quiz_options", "enrollments", "user_progress",
    "user_exercise_results", "badges", "user_badges", "comments",
  ];

  const tableCounts: Record<string, number> = {};
  await Promise.all(
    tables.map(async (table) => {
      const { count } = await supabase!
        .from(table)
        .select("*", { count: "exact", head: true });
      tableCounts[table] = count ?? 0;
    })
  );

  const totalRecords = Object.values(tableCounts).reduce((s, c) => s + c, 0);

  // Try to get DB size via RPC (requires a function in Supabase)
  let dbSizeMb: number | null = null;
  let activeConnections: number | null = null;

  const { data: sizeData } = await supabase!.rpc("get_db_size_mb").single();
  if (sizeData && typeof sizeData === "number") {
    dbSizeMb = sizeData;
  }

  const { data: connData } = await supabase!.rpc("get_active_connections").single();
  if (connData && typeof connData === "number") {
    activeConnections = connData;
  }

  return NextResponse.json({
    status: "healthy",
    database: {
      sizeMb: dbSizeMb,
      sizeLimit: "500 MB (free tier)",
      totalRecords,
      tableCounts,
      activeConnections,
    },
    freeTierLimits: {
      database: "500 MB",
      storage: "1 GB",
      egress: "5 GB",
      maus: "50,000",
      edgeFunctions: "500K invocations",
    },
    timestamp: new Date().toISOString(),
  });
}
