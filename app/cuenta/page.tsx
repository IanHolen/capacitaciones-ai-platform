"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  LogOut,
  Loader2,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Save,
} from "lucide-react";
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

interface CourseProgress {
  courseId: string;
  completedLessons: number;
  totalLessons: number;
  percentage: number;
}

export default function CuentaPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [goal, setGoal] = useState("");
  const [goalSaved, setGoalSaved] = useState(false);
  const [savingGoal, setSavingGoal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login?redirectTo=/cuenta");
        return;
      }

      setUserName(
        user.user_metadata?.name || user.email?.split("@")[0] || "Estudiante",
      );
      setUserEmail(user.email || "");

      // Load progress
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
              percentage:
                total > 0 ? Math.round((completed / total) * 100) : 0,
            };
          });

          setProgress(courseProgress);
        }
      } catch {
        // Progress API not available
      }

      // Load goal
      try {
        const res = await fetch("/api/goal");
        if (res.ok) {
          const data = await res.json();
          setGoal(data.goal || "");
        }
      } catch {
        // Goal API not available
      }

      setLoading(false);
    }

    loadData();
  }, [router]);

  const handleLogout = useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }, [router]);

  const handleSaveGoal = useCallback(async () => {
    setSavingGoal(true);
    setGoalSaved(false);
    try {
      const res = await fetch("/api/goal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal }),
      });
      if (res.ok) {
        setGoalSaved(true);
        setTimeout(() => setGoalSaved(false), 3000);
      }
    } catch {
      // silently fail
    }
    setSavingGoal(false);
  }, [goal]);

  const totalLessons = cursos.reduce((acc, c) => acc + c.lecciones.length, 0);
  const completedLessons = progress.reduce(
    (acc, p) => acc + p.completedLessons,
    0,
  );
  const overallPercentage =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

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
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold">Mi cuenta</h1>

      {/* Goal Section */}
      <section className="mb-8" aria-labelledby="goal-heading">
        {goal && (
          <Card className="mb-6 rounded-2xl border-2 border-[#1E40AF]/20 bg-gradient-to-r from-blue-50/50 to-white">
            <CardContent className="flex items-start gap-4 p-6">
              <Target className="mt-1 size-6 shrink-0 text-[#1E40AF]" />
              <div>
                <div className="text-sm font-semibold text-[#1E40AF]">
                  Mi meta
                </div>
                <p className="mt-1 text-lg">{goal}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle
              id="goal-heading"
              className="flex items-center gap-2 text-xl"
            >
              <Target className="size-5" />
              {goal ? "Actualizar mi meta" : "Mi meta con la IA"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-base text-muted-foreground">
              Escribí qué querés lograr aprendiendo IA. Tener una meta clara te
              va a ayudar a mantener la motivación.
            </p>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Ejemplo: Quiero aprender a usar IA para hacer crecer mi negocio de pasteles, automatizar los reportes de mi trabajo, o simplemente entender de qué hablan mis nietos..."
              className="min-h-[100px] w-full rounded-xl border-2 border-gray-200 p-4 text-lg leading-relaxed transition-colors placeholder:text-gray-400 focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
              rows={3}
            />
            <div className="mt-3 flex items-center gap-3">
              <Button
                onClick={handleSaveGoal}
                disabled={savingGoal}
                className="h-12 gap-2 px-6 text-base font-semibold"
                style={{ backgroundColor: "#1E40AF" }}
              >
                {savingGoal ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Save className="size-5" />
                )}
                Guardar meta
              </Button>
              {goalSaved && (
                <span className="flex items-center gap-1 text-base text-green-600">
                  <CheckCircle2 className="size-5" />
                  Guardado
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Personal Data */}
      <section className="mb-8" aria-labelledby="profile-heading">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle
              id="profile-heading"
              className="flex items-center gap-2 text-xl"
            >
              <User className="size-5" />
              Datos personales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="size-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Nombre</div>
                <div className="text-lg font-medium">{userName}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">
                  Correo electrónico
                </div>
                <div className="text-lg font-medium">{userEmail}</div>
              </div>
            </div>
            <div className="pt-2">
              <Button
                variant="outline"
                className="h-12 gap-2 px-6 text-base text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="size-5" />
                Cerrar sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Progress Section */}
      <section className="mb-8" aria-labelledby="progress-heading">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle
              id="progress-heading"
              className="flex items-center gap-2 text-xl"
            >
              <BookOpen className="size-5" />
              Mi progreso
            </CardTitle>
          </CardHeader>
          <CardContent>
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

      {/* Continue Section */}
      {continueCurso && (
        <section className="mb-8" aria-labelledby="continue-heading">
          <h2 id="continue-heading" className="mb-4 text-xl font-semibold">
            Continuá donde lo dejaste
          </h2>
          <Card className="rounded-2xl border-2 border-[#1E40AF] bg-gradient-to-r from-blue-50/30 to-white shadow-md">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#1E40AF]/10">
                <BookOpen className="size-8 text-[#1E40AF]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-[#1E40AF]">
                  {nivelConfig[continueCurso.nivel].label}
                </div>
                <div className="text-lg font-semibold">
                  {continueCurso.titulo}
                </div>
              </div>
              <Link href={`/cursos/${continueCurso.id}`}>
                <Button
                  className="h-12 gap-2 px-6 text-base font-semibold"
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

      {/* Courses Grid */}
      <section aria-labelledby="courses-heading">
        <h2 id="courses-heading" className="mb-4 text-xl font-semibold">
          Mis cursos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {cursos.map((curso) => {
            const cp = progress.find((p) => p.courseId === curso.id);
            const config = nivelConfig[curso.nivel];
            return (
              <Link key={curso.id} href={`/cursos/${curso.id}`} className="group">
                <Card className="h-full rounded-2xl transition-shadow group-hover:shadow-md">
                  <CardContent className="p-5">
                    <Badge
                      className="mb-2 text-sm font-semibold"
                      style={{
                        backgroundColor: config.bg,
                        color: config.color,
                      }}
                    >
                      {config.label}
                    </Badge>
                    <h3 className="mb-2 text-base font-semibold">
                      {curso.titulo}
                    </h3>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {cp?.completedLessons || 0} de {curso.lecciones.length}{" "}
                      lecciones
                    </div>
                    <div
                      className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
                      role="progressbar"
                      aria-valuenow={cp?.completedLessons || 0}
                      aria-valuemin={0}
                      aria-valuemax={curso.lecciones.length}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${cp?.percentage || 0}%`,
                          backgroundColor: config.color,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
