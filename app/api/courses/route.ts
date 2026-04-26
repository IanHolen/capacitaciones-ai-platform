import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      where: {
        published: true,
        deletedAt: null,
      },
      include: {
        level: {
          select: {
            id: true,
            slug: true,
            name: true,
          },
        },
        _count: {
          select: { lessons: true },
        },
      },
      orderBy: [
        { level: { sortOrder: 'asc' } },
        { sortOrder: 'asc' },
      ],
    });

    return NextResponse.json({ courses });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}
