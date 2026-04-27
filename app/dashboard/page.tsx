"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { cursos, nivelConfig, type Curso } from "@/lib/cursos-data";
import { createClient } from "@/lib/supabase/client";
import { BadgesDisplay } from "@/components/badges-display";

interface CourseProgress {
  courseId: string;
  completedLessons: number;
  totalLessons: number;
  percentage: number;
}

export default function DashboardPage() {
  const [userName, setUserName] = useState("");
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserName(
          user.user_metadata?.name || user.email?.split("@")[0] || "Estudiante",
        );
      }

      try {
        const res = await fetch("/api/progress");
        if (res.ok) {
          const data = await res.json();
          const progressMap = new Map<
            string,
            { completed: number; total: number }
          >();

          for (const p of data.progress || []) {
            const courseSlug = p.lesson?.course?.slug;
            if (courseSlug) {
              const existing = progressMap.get(courseSlug) || {
                completed: 0,
                total: 0,
              };
              existing.total++;
              if (p.completed) existing.completed++;
              progressMap.set(courseSlug, existing);
            }
          }

          const courseProgress: CourseProgress[] = cursos.map((curso) => {
            const p = progressMap.get(curso.id);
            const total = curso.lecciones.length;
            const completed = p?.completed || 0;
            return {
              courseId: curso.id,
              completedLessons: completed,
              totalLessons: total,
              percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
            };
          });

          setProgress(courseProgress);
        }
      } catch {
        // Progress API not available — show empty state
      }

      setLoading(false);
    }

    loadData();
  }, []);

  const totalLessons = cursos.reduce(
    (acc, c) => acc + c.lecciones.length,
    0,
  );
  const completedLessons = progress.reduce(
    (acc, p) => acc + p.completedLessons,
    0,
  );
  const overallPercentage =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Find last accessed course for "continue" section
  const lastCourse = progress.find(
    (p) => p.completedLessons > 0 && p.completedLessons < p.totalLessons,
  );
  const continueCurso = lastCourse
    ? cursos.find((c) => c.id === lastCourse.courseId)
    : cursos[0];

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-[#1E40AF]" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      {/* Section 1: Greeting + Overall Progress */}
      <section aria-labelledby="greeting-heading">
        <h1 id="greeting-heading" className="mb-6 text-2xl font-bold">
          Hola, {userName}!
        </h1>
        <Card className="mb-8 rounded-2xl p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-lg">Tu progreso general</CardTitle>
          </CardHeader>
          <CardContent className="mt-4 p-0">
            <div
              className="h-4 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow={overallPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progreso general"
            >
              <div
                className="h-full rounded-full bg-[#1E40AF] transition-all"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-base">
              <span className="text-muted-foreground">
                {completedLessons} de {totalLessons} lecciones
              </span>
              <span className="font-bold text-[#1E40AF]">
                {overallPercentage}%
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Continue where you left off */}
      {continueCurso && (
        <section aria-labelledby="continue-heading" className="mb-8">
          <h2 id="continue-heading" className="mb-4 text-xl font-semibold">
            Continuá donde lo dejaste
          </h2>
          <Card className="rounded-2xl border-2 border-[#1E40AF] bg-gradient-to-r from-blue-50/30 to-white shadow-md">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-[#1E40AF]/10">
                <BookOpen className="size-10 text-[#1E40AF]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1E40AF]">
                  {nivelConfig[continueCurso.nivel].label}
                </div>
                <div className="text-lg font-semibold">
                  {continueCurso.titulo}
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#1E40AF] transition-all"
                    style={{
                      width: `${
                        progress.find(
                          (p) => p.courseId === continueCurso.id,
                        )?.percentage || 0
                      }%`,
                    }}
                  />
                </div>
              </div>
              <Link
                href={`/cursos/${continueCurso.id}`}
                aria-label={`Continuar curso ${continueCurso.titulo}`}
              >
                <Button
                  className="h-12 w-full gap-2 px-6 text-lg font-semibold sm:w-auto"
                  style={{ backgroundColor: "#1E40AF" }}
                >
                  Continuar
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Badges */}
      <section className="mb-8">
        <BadgesDisplay />
      </section>

      {/* Section 3: My Courses Grid */}
      <section aria-labelledby="courses-heading">
        <h2 id="courses-heading" className="mb-4 text-xl font-semibold">
          Mis Cursos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {cursos.map((curso) => {
            const courseProgress = progress.find(
              (p) => p.courseId === curso.id,
            );
            const config = nivelConfig[curso.nivel];

            return (
              <CourseCard
                key={curso.id}
                curso={curso}
                config={config}
                completedLessons={courseProgress?.completedLessons || 0}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function CourseCard({
  curso,
  config,
  completedLessons,
}: {
  curso: Curso;
  config: { label: string; color: string; bg: string };
  completedLessons: number;
}) {
  return (
    <article>
      <Link href={`/cursos/${curso.id}`} className="group block">
        <Card className="h-full rounded-2xl transition-shadow group-hover:shadow-md">
          <CardContent className="p-6">
            <Badge
              className="mb-3 text-sm font-semibold"
              style={{ backgroundColor: config.bg, color: config.color }}
            >
              {config.label}
            </Badge>
            <h3 className="mb-3 text-lg font-semibold">{curso.titulo}</h3>
            <div className="mb-2 text-sm text-muted-foreground">
              {completedLessons} de {curso.lecciones.length} lecciones
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
              role="progressbar"
              aria-valuenow={completedLessons}
              aria-valuemin={0}
              aria-valuemax={curso.lecciones.length}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${
                    curso.lecciones.length > 0
                      ? (completedLessons / curso.lecciones.length) * 100
                      : 0
                  }%`,
                  backgroundColor: config.color,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
}
