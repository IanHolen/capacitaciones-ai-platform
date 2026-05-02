import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }), supabase: null, user: null };
  }

  // Check admin_users table, fallback to hardcoded email
  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("id")
    .eq("email", user.email)
    .maybeSingle();

  if (!adminUser && user.email !== "holenderian@gmail.com") {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }), supabase: null, user: null };
  }

  // Use service-role client for data queries (bypasses RLS).
  // Fall back to user session client if service key is unavailable.
  const adminClient = createAdminClient();
  const dataClient = adminClient ?? supabase;

  return { error: null, supabase: dataClient, user };
}
