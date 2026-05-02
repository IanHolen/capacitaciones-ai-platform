"use client";

import { useState, useEffect, useRef } from "react";
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
import { BookOpen, Clock, Search, X, CheckCircle2, Loader2 } from "lucide-react";
import { cursos, nivelConfig, type Curso, type Nivel } from "@/lib/cursos-data";

interface SearchResult {
  courseId: string;
  title: string;
  description: string;
  relevanceSnippet: string;
  matchScore: number;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

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

interface CourseProgress {
  completed: number;
  total: number;
}

function CourseCard({ curso, query, progress }: { curso: Curso; query: string; progress?: CourseProgress }) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const config = nivelConfig[curso.nivel];
  const displayTitulo = isEn && curso.tituloEn ? curso.tituloEn : curso.titulo;
  const displayDescripcion = isEn && curso.descripcionEn ? curso.descripcionEn : curso.descripcion;
  const displayDuracion = isEn && curso.duracionEn ? curso.duracionEn : curso.duracion;
  const levelLabel = t(`levels.${curso.nivel}`, config.label);

  const isCompleted = progress && progress.total > 0 && progress.completed === progress.total;
  const hasProgress = progress && progress.completed > 0;
  const percentage = progress && progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  return (
    <Card className="relative flex h-full flex-col transition-shadow hover:shadow-md">
      {isCompleted && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700 shadow-sm">
          <CheckCircle2 className="size-4" />
          {t("courses.completed")}
        </div>
      )}
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
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-4 text-base text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen className="size-4" aria-hidden="true" />
            {curso.lecciones.length} {t("courses.lessons")}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {displayDuracion}
          </span>
        </div>
        {hasProgress && (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{t("courses.progressOf", { completed: progress.completed, total: progress.total })}</span>
              <span className="font-medium">{percentage}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: isCompleted ? "#22c55e" : config.color,
                }}
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/cursos/${curso.id}`} className="w-full">
          <Button
            className="w-full text-base font-semibold"
            style={{ backgroundColor: config.color }}
          >
            {isCompleted
              ? t("courses.reviewCourse")
              : hasProgress
                ? t("courses.continueCourse")
                : t("courses.viewCourse")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


export default function CursosCatalog() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [progressMap, setProgressMap] = useState<Record<string, CourseProgress>>({});
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    async function loadProgress() {
      // Merge localStorage + API progress
      const completedIds = new Set<string>();

      try {
        const raw = localStorage.getItem("capacitaciones_progress");
        if (raw) {
          const local = JSON.parse(raw);
          for (const [k, v] of Object.entries(local)) {
            if (v) completedIds.add(k);
          }
        }
      } catch { /* ignore */ }

      try {
        const res = await fetch("/api/progress");
        if (res.ok) {
          const data = await res.json();
          for (const p of data.progress || []) {
            if (p.completed && p.lesson?.slug) {
              completedIds.add(p.lesson.slug);
            }
          }
        }
      } catch { /* not logged in or DB unavailable */ }

      if (completedIds.size === 0) return;

      const map: Record<string, CourseProgress> = {};
      for (const curso of cursos) {
        const completed = curso.lecciones.filter((l) => completedIds.has(l.id)).length;
        if (completed > 0) {
          map[curso.id] = { completed, total: curso.lecciones.length };
        }
      }
      setProgressMap(map);
    }

    loadProgress();
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults(null);
      setIsSearching(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsSearching(true);
    fetch(`/api/courses/search?q=${encodeURIComponent(debouncedQuery.trim())}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!controller.signal.aborted) {
          setSearchResults(data.results ?? []);
          setIsSearching(false);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsSearching(false);
          setSearchResults(null);
        }
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  const activeNivel = searchParams.get("nivel") as Nivel | null;
  const isValidNivel = activeNivel && niveles.includes(activeNivel);

  const matchedCourseIds = searchResults
    ? new Set(searchResults.map((r) => r.courseId))
    : null;

  const baseCursos = matchedCourseIds
    ? cursos.filter((c) => matchedCourseIds.has(c.id))
    : cursos;

  const filteredCursos = isValidNivel
    ? baseCursos.filter((c) => c.nivel === activeNivel)
    : baseCursos;

  // Sort by API relevance when searching
  if (searchResults) {
    const scoreMap = new Map(searchResults.map((r) => [r.courseId, r.matchScore]));
    filteredCursos.sort((a, b) => (scoreMap.get(b.id) ?? 0) - (scoreMap.get(a.id) ?? 0));
  }

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
        {isSearching && (
          <Loader2
            className="absolute right-10 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground"
            aria-hidden="true"
          />
        )}
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

      {/* Search results count */}
      {searchResults && !isSearching && (
        <p className="mb-4 text-center text-sm text-muted-foreground">
          {filteredCursos.length === 0
            ? t("courses.noResults", { query: debouncedQuery })
            : t("courses.searchResultsCount", {
                count: filteredCursos.length,
                defaultValue: `${filteredCursos.length} resultado${filteredCursos.length !== 1 ? "s" : ""}`,
              })}
        </p>
      )}

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
            <CourseCard curso={curso} query={query} progress={progressMap[curso.id]} />
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
