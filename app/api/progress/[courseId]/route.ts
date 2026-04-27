import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseId } = await params;

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      lessons: {
        orderBy: { sortOrder: "asc" },
        select: { id: true, title: true, slug: true, sortOrder: true },
      },
    },
  });

  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const progress = await prisma.userProgress.findMany({
    where: {
      userId: user.id,
      lessonId: { in: course.lessons.map((l) => l.id) },
    },
  });

  const completedMap = new Map(
    progress.map((p) => [p.lessonId, p.completed])
  );

  const totalLessons = course.lessons.length;
  const completedLessons = progress.filter((p) => p.completed).length;

  return NextResponse.json({
    courseId,
    courseTitle: course.title,
    totalLessons,
    completedLessons,
    percentage:
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    lessons: course.lessons.map((lesson) => ({
      ...lesson,
      completed: completedMap.get(lesson.id) ?? false,
    })),
  });
}
