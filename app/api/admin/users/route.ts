import { requireAdmin } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function GET() {
  const { error, supabase } = await requireAdmin();
  if (error) return error;

  // Try auth.admin.listUsers with service role key
  const adminClient = createAdminClient();

  if (adminClient) {
    const { data: authData, error: authError } =
      await adminClient.auth.admin.listUsers({ perPage: 100 });

    if (!authError && authData?.users) {
      // Get progress counts
      const userIds = authData.users.map((u) => u.id);

      const { data: progressCounts } = await supabase!
        .from("user_progress")
        .select("user_id")
        .eq("completed", true)
        .in("user_id", userIds.length > 0 ? userIds : ["none"]);

      const progressMap = new Map<string, number>();
      for (const p of progressCounts ?? []) {
        progressMap.set(p.user_id, (progressMap.get(p.user_id) ?? 0) + 1);
      }

      const users = authData.users.map((u) => ({
        id: u.id,
        email: u.email ?? "N/A",
        name: u.user_metadata?.name ?? u.user_metadata?.full_name ?? "Sin nombre",
        created_at: u.created_at,
        last_sign_in: u.last_sign_in_at,
        lessonsCompleted: progressMap.get(u.id) ?? 0,
      }));

      return NextResponse.json({ users, source: "auth.admin" });
    }
  }

  // Fallback: try public.users table
  const { data: users, error: dbError } = await supabase!
    .from("users")
    .select("id, email, name, role, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (dbError) {
    return NextResponse.json(
      { error: dbError.message, users: [], source: "error" },
      { status: 200 }
    );
  }

  return NextResponse.json({ users: users ?? [], source: "public.users" });
}
