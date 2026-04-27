"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
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
  const config = nivelConfig[curso.nivel];

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex-1">
        <div className="mb-2">
          <Badge
            className="text-sm font-semibold"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-snug">
          {highlightMatch(curso.titulo, query)}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {highlightMatch(curso.descripcion, query)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-base text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookOpen className="size-4" aria-hidden="true" />
          {curso.lecciones.length} lecciones
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          {curso.duracion}
        </span>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/cursos/${curso.id}`} className="w-full">
          <Button
            className="w-full text-base font-semibold"
            style={{ backgroundColor: config.color }}
          >
            Ver curso
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
    if (curso.descripcion.toLowerCase().includes(q)) return true;
    if (curso.lecciones.some((l) => l.titulo.toLowerCase().includes(q))) return true;
    if (curso.lecciones.some((l) => l.descripcion.toLowerCase().includes(q))) return true;
    return false;
  });
}

export default function CursosCatalog() {
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
          placeholder="Buscar cursos o lecciones..."
          className="h-12 w-full rounded-xl border bg-background pl-12 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          aria-label="Buscar cursos o lecciones"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
            aria-label="Limpiar búsqueda"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Level filters */}
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filtrar cursos por nivel"
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
          Todos
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
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Course Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCursos.map((curso) => (
          <CourseCard key={curso.id} curso={curso} query={query} />
        ))}
      </div>

      {filteredCursos.length === 0 && (
        <p className="mt-8 text-center text-lg text-muted-foreground">
          {query
            ? `No se encontraron cursos para "${query}".`
            : "No hay cursos disponibles para este nivel todavía."}
        </p>
      )}
    </>
  );
}
