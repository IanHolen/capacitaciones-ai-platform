import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

function localize<T extends Record<string, unknown>>(row: T, lang: string, fields: string[]): T {
  if (lang !== 'en') return row;
  const out = { ...row };
  for (const f of fields) {
    const enKey = `${f}_en` as keyof T;
    if (out[enKey]) {
      (out as Record<string, unknown>)[f] = out[enKey];
    }
  }
  return out;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'es';

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: userBadges, error } = await supabase
    .from("user_badges")
    .select("earned_at, badges(id, name, name_en, description, description_en, icon)")
    .eq("user_id", user.id)
    .order("earned_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const localized = (userBadges ?? []).map((ub) => {
    if (ub.badges) {
      return { ...ub, badges: localize(ub.badges as unknown as Record<string, unknown>, lang, ['name', 'description']) };
    }
    return ub;
  });

  return NextResponse.json({ badges: localized });
}
