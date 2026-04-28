"use client";

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
} from "lucide-react";
import type { Curso, Nivel } from "@/lib/cursos-data";

interface LocalizedCourseDetailProps {
  curso: Curso;
  nivelColor: string;
  nivelBg: string;
  nivelLabel: string;
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
  const completadas = 0; // placeholder

  return (
    <>
      {/* Course Header */}
      <div className="mb-10">
        <div className="mb-4">
          <Badge
            className="px-3 py-1 text-sm font-semibold"
            style={{ backgroundColor: nivelBg, color: nivelColor }}
          >
            {levelLabel}
          </Badge>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {displayTitulo}
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
          {displayDescripcion}
        </p>

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
                backgroundColor: nivelColor,
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
            {completadas > 0
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

            return (
              <Link
                key={leccion.id}
                href={`/cursos/${curso.id}/leccion/${leccion.id}`}
                className="group"
              >
                <Card className="transition-shadow group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ring">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          <span className="mr-2 text-muted-foreground">
                            {index + 1}.
                          </span>
                          {displayLeccionTitulo}
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
