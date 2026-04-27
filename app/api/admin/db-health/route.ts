import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Table record counts — handle errors per table
  const tables = [
    "users", "levels", "courses", "lessons", "lesson_contents",
    "exercises", "quiz_options", "enrollments", "user_progress",
    "user_exercise_results", "badges", "user_badges", "comments",
  ];

  const tableCounts: Record<string, number | string> = {};
  await Promise.all(
    tables.map(async (table) => {
      try {
        const { count, error: tableError } = await supabase!
          .from(table)
          .select("*", { count: "exact", head: true });
        tableCounts[table] = tableError ? `error: ${tableError.message}` : (count ?? 0);
      } catch {
        tableCounts[table] = "error: query failed";
      }
    })
  );

  const totalRecords = Object.values(tableCounts).reduce(
    (s, c) => s + (typeof c === "number" ? c : 0),
    0
  );

  // Try RPCs with error handling
  let dbSizeMb: number | string = "RPC not available";
  let activeConnections: number | string = "RPC not available";

  try {
    const { data: sizeData, error: sizeError } = await supabase!.rpc("get_db_size_mb");
    if (!sizeError && sizeData != null) {
      dbSizeMb = typeof sizeData === "number" ? sizeData : parseFloat(String(sizeData)) || "parse error";
    } else if (sizeError) {
      dbSizeMb = `error: ${sizeError.message}`;
    }
  } catch {
    dbSizeMb = "RPC unavailable";
  }

  try {
    const { data: connData, error: connError } = await supabase!.rpc("get_active_connections");
    if (!connError && connData != null) {
      activeConnections = typeof connData === "number" ? connData : parseInt(String(connData)) || "parse error";
    } else if (connError) {
      activeConnections = `error: ${connError.message}`;
    }
  } catch {
    activeConnections = "RPC unavailable";
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
