"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface LocalizedLessonNavProps {
  cursoId: string;
  prevLeccionId: string | null;
  nextLeccionId: string | null;
  accentColor: string;
}

export function LocalizedLessonNav({
  cursoId,
  prevLeccionId,
  nextLeccionId,
  accentColor,
}: LocalizedLessonNavProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
      {prevLeccionId ? (
        <Link href={`/cursos/${cursoId}/leccion/${prevLeccionId}`}>
          <Button variant="outline" className="h-12 gap-2 px-6 text-base">
            <ChevronLeft className="size-5" aria-hidden="true" />
            {t("lesson.previous")}
          </Button>
        </Link>
      ) : (
        <Link href={`/cursos/${cursoId}`}>
          <Button variant="outline" className="h-12 gap-2 px-6 text-base">
            <ChevronLeft className="size-5" aria-hidden="true" />
            {t("lesson.backToCourse")}
          </Button>
        </Link>
      )}

      {nextLeccionId ? (
        <Link href={`/cursos/${cursoId}/leccion/${nextLeccionId}`}>
          <Button
            className="h-12 gap-2 px-6 text-base font-semibold"
            style={{ backgroundColor: accentColor }}
          >
            {t("lesson.next")}
            <ChevronRight className="size-5" aria-hidden="true" />
          </Button>
        </Link>
      ) : (
        <Link href={`/cursos/${cursoId}`}>
          <Button
            className="h-12 gap-2 px-6 text-base font-semibold"
            style={{ backgroundColor: accentColor }}
          >
            <CheckCircle2 className="size-5" aria-hidden="true" />
            {t("lesson.finishCourse")}
          </Button>
        </Link>
      )}
    </div>
  );
}
