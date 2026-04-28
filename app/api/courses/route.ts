import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

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
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'es';

    const supabase = await createClient();
    const { data: courses, error } = await supabase
      .from('courses')
      .select('*, levels(id, slug, name, name_en, description_en)')
      .eq('published', true)
      .is('deleted_at', null)
      .order('sort_order', { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const localized = (courses ?? []).map((c) => {
      const course = localize(c, lang, ['title', 'description']);
      if (course.levels) {
        course.levels = localize(course.levels as Record<string, unknown>, lang, ['name', 'description']);
      }
      return course;
    });

    return NextResponse.json({ courses: localized });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}
