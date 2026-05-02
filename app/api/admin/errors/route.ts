import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get("limit") ?? "50"), 200);
  const since = searchParams.get("since");

  let query = supabase!
    .from("errors")
    .select("id, created_at, route, method, status_code, error_message, stack")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (since) {
    query = query.gte("created_at", since);
  }

  const { data: errors, error: dbError } = await query;

  if (dbError) {
    return NextResponse.json(
      { error: dbError.message, errors: [] },
      { status: 200 }
    );
  }

  // Map DB column names to frontend-expected field names
  const mapped = (errors ?? []).map((e) => ({
    timestamp: e.created_at,
    route: e.route,
    message: e.error_message,
    status_code: e.status_code,
  }));

  return NextResponse.json({
    errors: mapped,
    count: mapped.length,
  });
}
