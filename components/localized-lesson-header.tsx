"use client";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import type { Nivel } from "@/lib/cursos-data";

interface LocalizedLessonHeaderProps {
  nivel: Nivel;
  nivelColor: string;
  nivelBg: string;
  nivelLabel: string;
  index: number;
  totalLecciones: number;
  titulo: string;
  tituloEn?: string;
  descripcion: string;
  descripcionEn?: string;
}

export function LocalizedLessonHeader({
  nivelColor,
  nivelBg,
  nivelLabel,
  nivel,
  index,
  totalLecciones,
  titulo,
  tituloEn,
  descripcion,
  descripcionEn,
}: LocalizedLessonHeaderProps) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const displayTitulo = isEn && tituloEn ? tituloEn : titulo;
  const displayDescripcion = isEn && descripcionEn ? descripcionEn : descripcion;
  const levelLabel = t(`levels.${nivel}`, nivelLabel);

  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <Badge
          className="text-sm font-semibold"
          style={{ backgroundColor: nivelBg, color: nivelColor }}
        >
          {levelLabel}
        </Badge>
        <span className="text-base text-muted-foreground">
          {t("lesson.lessonOf", { current: index + 1, total: totalLecciones })}
        </span>
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        {displayTitulo}
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        {displayDescripcion}
      </p>
    </div>
  );
}
