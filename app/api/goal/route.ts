import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data } = await supabase
    .from("user_goals")
    .select("goal")
    .eq("user_id", user.id)
    .single();

  return NextResponse.json({ goal: data?.goal || "" });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { goal } = await request.json();

  if (typeof goal !== "string") {
    return NextResponse.json({ error: "goal is required" }, { status: 400 });
  }

  const { error } = await supabase.from("user_goals").upsert(
    { user_id: user.id, goal, updated_at: new Date().toISOString() },
    { onConflict: "user_id" },
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
