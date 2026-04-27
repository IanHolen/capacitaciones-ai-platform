import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  const { data, error: rpcError } = await supabase!.rpc("db_table_counts");

  if (rpcError) {
    return NextResponse.json({ error: rpcError.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
