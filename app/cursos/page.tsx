import { Suspense } from "react";
import CursosCatalog from "@/components/cursos-catalog";

export default function CursosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E40AF" }}
        >
          Catálogo de cursos
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Elige el curso que mejor se adapte a tu nivel y objetivos.
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-muted-foreground">Cargando cursos...</div>}>
        <CursosCatalog />
      </Suspense>
    </div>
  );
}
