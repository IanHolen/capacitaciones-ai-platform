"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Search, X } from "lucide-react";
import { cursos, nivelConfig, type Curso, type Nivel } from "@/lib/cursos-data";

const niveles = Object.keys(nivelConfig) as Nivel[];

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="rounded bg-yellow-200 px-0.5">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function CourseCard({ curso, query }: { curso: Curso; query: string }) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const config = nivelConfig[curso.nivel];
  const displayTitulo = isEn && curso.tituloEn ? curso.tituloEn : curso.titulo;
  const displayDescripcion = isEn && curso.descripcionEn ? curso.descripcionEn : curso.descripcion;
  const displayDuracion = isEn && curso.duracionEn ? curso.duracionEn : curso.duracion;
  const levelLabel = t(`levels.${curso.nivel}`, config.label);

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex-1">
        <div className="mb-2">
          <Badge
            className="text-sm font-semibold"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {levelLabel}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-snug">
          {highlightMatch(displayTitulo, query)}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {highlightMatch(displayDescripcion, query)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-base text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookOpen className="size-4" aria-hidden="true" />
          {curso.lecciones.length} {t("courses.lessons")}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          {displayDuracion}
        </span>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/cursos/${curso.id}`} className="w-full">
          <Button
            className="w-full text-base font-semibold"
            style={{ backgroundColor: config.color }}
          >
            {t("courses.viewCourse")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function searchCursos(query: string): Curso[] {
  const q = query.toLowerCase().trim();
  if (!q) return cursos;

  return cursos.filter((curso) => {
    if (curso.titulo.toLowerCase().includes(q)) return true;
    if (curso.tituloEn?.toLowerCase().includes(q)) return true;
    if (curso.descripcion.toLowerCase().includes(q)) return true;
    if (curso.descripcionEn?.toLowerCase().includes(q)) return true;
    if (curso.lecciones.some((l) => l.titulo.toLowerCase().includes(q))) return true;
    if (curso.lecciones.some((l) => l.tituloEn?.toLowerCase().includes(q))) return true;
    if (curso.lecciones.some((l) => l.descripcion.toLowerCase().includes(q))) return true;
    if (curso.lecciones.some((l) => l.descripcionEn?.toLowerCase().includes(q))) return true;
    return false;
  });
}

export default function CursosCatalog() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const activeNivel = searchParams.get("nivel") as Nivel | null;
  const isValidNivel = activeNivel && niveles.includes(activeNivel);

  const searched = searchCursos(query);
  const filteredCursos = isValidNivel
    ? searched.filter((c) => c.nivel === activeNivel)
    : searched;

  function handleFilter(nivel: Nivel | null) {
    if (nivel === null) {
      router.push("/cursos", { scroll: false });
    } else {
      router.push(`/cursos?nivel=${nivel}`, { scroll: false });
    }
  }

  return (
    <>
      {/* Search bar */}
      <div className="relative mx-auto mb-6 max-w-xl">
        <Search
          className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("courses.searchPlaceholder")}
          className="h-12 w-full rounded-xl border bg-background pl-12 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          aria-label={t("courses.searchPlaceholder")}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
            aria-label={t("courses.clearSearch")}
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Level filters */}
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label={t("courses.filterByLevel")}
      >
        <button
          onClick={() => handleFilter(null)}
          className="rounded-full px-4 py-1.5 text-base font-medium transition-opacity"
          style={{
            backgroundColor: !isValidNivel ? "#1E40AF" : "#E5E7EB",
            color: !isValidNivel ? "#FFFFFF" : "#6B7280",
          }}
          aria-pressed={!isValidNivel}
        >
          {t("courses.all")}
        </button>
        {niveles.map((nivel) => {
          const config = nivelConfig[nivel];
          const isActive = activeNivel === nivel;
          return (
            <button
              key={nivel}
              onClick={() => handleFilter(nivel)}
              className="rounded-full px-4 py-1.5 text-base font-medium transition-opacity"
              style={{
                backgroundColor: config.bg,
                color: config.color,
                opacity: isActive ? 1 : 0.5,
                fontWeight: isActive ? 700 : 500,
              }}
              aria-pressed={isActive}
            >
              {t(`levels.${nivel}`, config.label)}
            </button>
          );
        })}
      </div>

      {/* Course Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        key={`${activeNivel}-${query}`}
      >
        {filteredCursos.map((curso) => (
          <motion.div
            key={curso.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <CourseCard curso={curso} query={query} />
          </motion.div>
        ))}
      </motion.div>

      {filteredCursos.length === 0 && (
        <motion.p
          className="mt-8 text-center text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {query
            ? t("courses.noResults", { query })
            : t("courses.noCoursesLevel")}
        </motion.p>
      )}
    </>
  );
}
