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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId: id } = await params;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'es';

    const supabase = await createClient();

    const { data: course, error } = await supabase
      .from('courses')
      .select('*, levels(id, slug, name, name_en, description_en), lessons(id, title, title_en, slug, description, description_en, sort_order)')
      .eq('id', id)
      .is('deleted_at', null)
      .single();

    if (error || !course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    const localized = localize(course, lang, ['title', 'description']);
    if (localized.levels) {
      localized.levels = localize(localized.levels as Record<string, unknown>, lang, ['name', 'description']);
    }
    if (Array.isArray(localized.lessons)) {
      localized.lessons = (localized.lessons as Record<string, unknown>[]).map(
        (l) => localize(l, lang, ['title', 'description'])
      );
    }

    return NextResponse.json({ course: localized });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}
