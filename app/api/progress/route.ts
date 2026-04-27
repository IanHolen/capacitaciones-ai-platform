import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const progress = await prisma.userProgress.findMany({
    where: { userId: user.id },
    include: {
      lesson: {
        include: { course: { select: { id: true, title: true, slug: true } } },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ progress });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonId } = await request.json();

  if (!lessonId || typeof lessonId !== "string") {
    return NextResponse.json(
      { error: "lessonId is required" },
      { status: 400 }
    );
  }

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
  });

  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  const progress = await prisma.userProgress.upsert({
    where: {
      userId_lessonId: { userId: user.id, lessonId },
    },
    update: {
      completed: true,
      completedAt: new Date(),
      lastAccessedAt: new Date(),
    },
    create: {
      userId: user.id,
      lessonId,
      completed: true,
      completedAt: new Date(),
      lastAccessedAt: new Date(),
    },
  });

  return NextResponse.json({ progress });
}
