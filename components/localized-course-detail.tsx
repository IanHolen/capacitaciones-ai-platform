"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import type { Curso, Nivel } from "@/lib/cursos-data";
import { CourseRating } from "@/components/course-rating";
import { CertificateButton } from "@/components/certificate-button";
import { createClient } from "@/lib/supabase/client";

const PROGRESS_KEY = "capacitaciones_progress";

interface LocalizedCourseDetailProps {
  curso: Curso;
  nivelColor: string;
  nivelBg: string;
  nivelLabel: string;
}

function useCourseProgress(curso: Curso) {
  const [completadas, setCompletadas] = useState(0);
  const [lessonStatus, setLessonStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const progress = JSON.parse(
        localStorage.getItem(PROGRESS_KEY) || "{}"
      );
      let count = 0;
      const status: Record<string, boolean> = {};
      for (const l of curso.lecciones) {
        if (progress[l.id] === true) {
          count++;
          status[l.id] = true;
        }
      }
      setCompletadas(count);
      setLessonStatus(status);
    } catch {
      // ignore
    }
  }, [curso.lecciones]);

  return { completadas, lessonStatus, isComplete: completadas === curso.lecciones.length };
}

export function LocalizedCourseDetail({
  curso,
  nivelColor,
  nivelBg,
  nivelLabel,
}: LocalizedCourseDetailProps) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const displayTitulo = isEn && curso.tituloEn ? curso.tituloEn : curso.titulo;
  const displayDescripcion =
    isEn && curso.descripcionEn ? curso.descripcionEn : curso.descripcion;
  const displayDuracion =
    isEn && curso.duracionEn ? curso.duracionEn : curso.duracion;
  const levelLabel = t(`levels.${curso.nivel}`, nivelLabel);
  const { completadas, lessonStatus, isComplete } = useCourseProgress(curso);

  const [userName, setUserName] = useState("Estudiante");
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserName(user.user_metadata?.name || user.email?.split("@")[0] || "Estudiante");
      }
    });
  }, []);

  return (
    <>
      {/* Completion Banner */}
      {isComplete && (
        <div className="mb-6 flex flex-col gap-4 rounded-xl border-2 border-green-400 bg-green-50 p-5 shadow-sm sm:flex-row sm:items-center">
          <Trophy className="size-8 shrink-0 text-green-600" />
          <div className="flex-1">
            <p className="text-lg font-bold text-green-800">
              {t("courses.courseCompleted")}
            </p>
            <p className="text-base text-green-700">
              {t("courses.courseCompletedDesc")}
            </p>
          </div>
          <CertificateButton
            userName={userName}
            levelName={levelLabel}
            levelColor={nivelColor}
            courses={[displayTitulo]}
          />
        </div>
      )}

      {/* Course Header */}
      <div className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge
            className="px-3 py-1 text-sm font-semibold"
            style={{ backgroundColor: nivelBg, color: nivelColor }}
          >
            {levelLabel}
          </Badge>
          {isComplete && (
            <Badge className="bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
              <CheckCircle2 className="mr-1 inline size-4" />
              {t("courses.completed")}
            </Badge>
          )}
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {displayTitulo}
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
          {displayDescripcion}
        </p>

        {/* Course Rating */}
        <div className="mb-4">
          <CourseRating courseId={curso.id} />
        </div>

        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-6 text-base text-muted-foreground">
          <span className="flex items-center gap-2">
            <BookOpen className="size-5" aria-hidden="true" />
            {curso.lecciones.length} {t("courses.lessons")}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-5" aria-hidden="true" />
            {displayDuracion}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-base">
            <span className="font-medium">{t("courses.yourProgress")}</span>
            <span className="text-muted-foreground">
              {completadas} {t("courses.lessonsCompleted", { total: curso.lecciones.length })}
            </span>
          </div>
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={completadas}
            aria-valuemin={0}
            aria-valuemax={curso.lecciones.length}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${
                  curso.lecciones.length > 0
                    ? (completadas / curso.lecciones.length) * 100
                    : 0
                }%`,
                backgroundColor: isComplete ? "#16A34A" : nivelColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* Start / Continue Button */}
      <div className="mb-10">
        <Link href={`/cursos/${curso.id}/leccion/${curso.lecciones[0].id}`}>
          <Button
            className="h-14 px-8 text-lg font-semibold"
            style={{ backgroundColor: nivelColor }}
          >
            {isComplete
              ? t("courses.reviewCourse")
              : completadas > 0
                ? t("courses.continueCourse")
                : t("courses.startCourse")}
          </Button>
        </Link>
      </div>

      {/* Lessons List */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">{t("courses.lessonsList")}</h2>
        <div className="flex flex-col gap-3">
          {curso.lecciones.map((leccion, index) => {
            const displayLeccionTitulo =
              isEn && leccion.tituloEn ? leccion.tituloEn : leccion.titulo;
            const displayLeccionDescripcion =
              isEn && leccion.descripcionEn
                ? leccion.descripcionEn
                : leccion.descripcion;
            const displayLeccionDuracion =
              isEn && leccion.duracionEn
                ? leccion.duracionEn
                : leccion.duracion;
            const isDone = lessonStatus[leccion.id];

            return (
              <Link
                key={leccion.id}
                href={`/cursos/${curso.id}/leccion/${leccion.id}`}
                className="group"
              >
                <Card className={`transition-shadow group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ring ${isDone ? "border-green-200 bg-green-50/50" : ""}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          <span className="mr-2 text-muted-foreground">
                            {index + 1}.
                          </span>
                          {displayLeccionTitulo}
                          {isDone && (
                            <CheckCircle2 className="ml-2 inline size-5 text-green-600" />
                          )}
                        </CardTitle>
                        <CardDescription className="mt-1 text-base">
                          {displayLeccionDescripcion}
                        </CardDescription>
                      </div>
                      <ChevronRight
                        className="mt-1 size-5 text-muted-foreground transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" aria-hidden="true" />
                        {displayLeccionDuracion}
                      </span>
                      {leccion.tieneQuiz && (
                        <span className="flex items-center gap-1.5">
                          <HelpCircle className="size-4" aria-hidden="true" />
                          Quiz
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
