"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  Loader2,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Save,
  Calendar,
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
import { BadgesDisplay } from "@/components/badges-display";

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
  const [createdAt, setCreatedAt] = useState("");
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [goal, setGoal] = useState("");
  const [goalSaved, setGoalSaved] = useState(false);
  const [savingGoal, setSavingGoal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"progreso" | "datos">("progreso");

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
      setCreatedAt(
        user.created_at
          ? new Date(user.created_at).toLocaleDateString("es-LA", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "",
      );

      // Load progress from localStorage (primary) + DB (supplement)
      const localProgress: Record<string, boolean> = (() => {
        try {
          return JSON.parse(
            localStorage.getItem("capacitaciones_progress") || "{}"
          );
        } catch {
          return {};
        }
      })();

      const completedLessonIds = new Set(
        Object.entries(localProgress)
          .filter(([, v]) => v)
          .map(([k]) => k)
      );

      try {
        const res = await fetch("/api/progress");
        if (res.ok) {
          const data = await res.json();
          for (const p of data.progress || []) {
            if (p.completed) {
              const lessonSlug = p.lesson?.slug;
              if (lessonSlug) completedLessonIds.add(lessonSlug);
            }
          }
        }
      } catch {
        // DB not available
      }

      const courseProgress: CourseProgress[] = cursos.map((curso) => {
        const total = curso.lecciones.length;
        const completed = curso.lecciones.filter((l) =>
          completedLessonIds.has(l.id)
        ).length;
        return {
          courseId: curso.id,
          completedLessons: completed,
          totalLessons: total,
          percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        };
      });

      setProgress(courseProgress);

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
  const coursesCompleted = progress.filter(
    (p) => p.totalLessons > 0 && p.completedLessons >= p.totalLessons
  ).length;

  const lastCourse = progress.find(
    (p) => p.completedLessons > 0 && p.completedLessons < p.totalLessons,
  );
  const continueCurso = lastCourse
    ? cursos.find((c) => c.id === lastCourse.courseId)
    : cursos[0];

  const initials = userName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-[#1E40AF]" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Profile Header */}
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div
          className="flex size-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white shadow-md"
          style={{ backgroundColor: "#1E40AF" }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">{userName}</h1>
          <p className="mt-1 text-base text-muted-foreground">{userEmail}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3 sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <BookOpen className="size-4" aria-hidden="true" />
              {coursesCompleted} cursos completados
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              {completedLessons} lecciones
            </span>
          </div>
        </div>
      </div>

      {/* Goal Section — prominent at top */}
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

      {/* Continue Section */}
      {continueCurso && lastCourse && (
        <Card className="mb-8 rounded-2xl border-2 border-[#1E40AF] bg-gradient-to-r from-blue-50/30 to-white shadow-md">
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#1E40AF]/10">
              <BookOpen className="size-7 text-[#1E40AF]" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-[#1E40AF]">
                Continuá donde lo dejaste
              </div>
              <div className="text-lg font-semibold">{continueCurso.titulo}</div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#1E40AF] transition-all"
                  style={{ width: `${lastCourse.percentage}%` }}
                />
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
      )}

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-xl bg-muted/50 p-1">
        <button
          onClick={() => setActiveTab("progreso")}
          className={`flex-1 rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
            activeTab === "progreso"
              ? "bg-white text-[#1E40AF] shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Progreso
        </button>
        <button
          onClick={() => setActiveTab("datos")}
          className={`flex-1 rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
            activeTab === "datos"
              ? "bg-white text-[#1E40AF] shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Datos personales
        </button>
      </div>

      {/* Progreso Tab */}
      {activeTab === "progreso" && (
        <div className="space-y-6">
          {/* Overall Progress */}
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-base font-medium">Progreso general</span>
                <span className="text-2xl font-bold text-[#1E40AF]">
                  {overallPercentage}%
                </span>
              </div>
              <div
                className="h-3 w-full overflow-hidden rounded-full bg-gray-200"
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
              <div className="mt-2 text-sm text-muted-foreground">
                {completedLessons} de {totalLessons} lecciones completadas
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <BadgesDisplay />

          {/* Courses Grid */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Mis cursos</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {cursos.map((curso) => {
                const cp = progress.find((p) => p.courseId === curso.id);
                const config = nivelConfig[curso.nivel];
                const pct = cp?.percentage || 0;
                return (
                  <Link
                    key={curso.id}
                    href={`/cursos/${curso.id}`}
                    className="group"
                  >
                    <Card className="h-full rounded-2xl transition-shadow group-hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <Badge
                            className="text-sm font-semibold"
                            style={{
                              backgroundColor: config.bg,
                              color: config.color,
                            }}
                          >
                            {config.label}
                          </Badge>
                          {pct === 100 && (
                            <CheckCircle2
                              className="size-5 text-green-500"
                              aria-label="Completado"
                            />
                          )}
                        </div>
                        <h3 className="mb-3 text-base font-semibold leading-snug">
                          {curso.titulo}
                        </h3>
                        <div className="mb-1 flex items-center justify-between text-sm text-muted-foreground">
                          <span>
                            {cp?.completedLessons || 0}/{curso.lecciones.length}{" "}
                            lecciones
                          </span>
                          <span className="font-medium" style={{ color: config.color }}>
                            {pct}%
                          </span>
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
                              width: `${pct}%`,
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
          </div>
        </div>
      )}

      {/* Datos Tab */}
      {activeTab === "datos" && (
        <div className="space-y-6">
          {/* Personal Info */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <User className="size-5" />
                Información personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center gap-4 rounded-xl bg-muted/30 p-4">
                <User className="size-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Nombre</div>
                  <div className="text-lg font-medium">{userName}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-muted/30 p-4">
                <Mail className="size-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">
                    Correo electrónico
                  </div>
                  <div className="text-lg font-medium">{userEmail}</div>
                </div>
              </div>
              {createdAt && (
                <div className="flex items-center gap-4 rounded-xl bg-muted/30 p-4">
                  <Calendar className="size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Miembro desde
                    </div>
                    <div className="text-lg font-medium">{createdAt}</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Goal Editor */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Target className="size-5" />
                {goal ? "Actualizar mi meta" : "Mi meta con la IA"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base text-muted-foreground">
                Escribí qué querés lograr aprendiendo IA. Tener una meta clara
                te va a ayudar a mantener la motivación.
              </p>
              <textarea
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Ejemplo: Quiero aprender a usar IA para hacer crecer mi negocio, automatizar reportes, o simplemente entender de qué hablan mis nietos..."
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
        </div>
      )}
    </div>
  );
}
