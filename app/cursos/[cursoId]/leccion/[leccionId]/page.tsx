import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";
import { getLeccion, nivelConfig, cursos } from "@/lib/cursos-data";
import { MarkdownContent } from "@/components/markdown-content";
import { Quiz } from "@/components/quiz";
import { LessonCompleteButton } from "@/components/lesson-complete-button";

export function generateStaticParams() {
  return cursos.flatMap((curso) =>
    curso.lecciones.map((leccion) => ({
      cursoId: curso.id,
      leccionId: leccion.id,
    }))
  );
}

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ cursoId: string; leccionId: string }>;
}) {
  const { cursoId, leccionId } = await params;
  const result = getLeccion(cursoId, leccionId);

  if (!result) {
    notFound();
  }

  const { curso, leccion, index } = result;
  const config = nivelConfig[curso.nivel];
  const prevLeccion = index > 0 ? curso.lecciones[index - 1] : null;
  const nextLeccion =
    index < curso.lecciones.length - 1 ? curso.lecciones[index + 1] : null;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-base text-muted-foreground">
          <li>
            <Link href="/cursos" className="hover:text-foreground">
              Cursos
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-4" />
          </li>
          <li>
            <Link
              href={`/cursos/${curso.id}`}
              className="hover:text-foreground"
            >
              {curso.titulo}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-4" />
          </li>
          <li className="font-medium text-foreground">{leccion.titulo}</li>
        </ol>
      </nav>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <Badge
            className="text-sm font-semibold"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </Badge>
          <span className="text-base text-muted-foreground">
            Lección {index + 1} de {curso.lecciones.length}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {leccion.titulo}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {leccion.descripcion}
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={0}
          aria-valuemax={curso.lecciones.length}
          aria-label={`Leccion ${index + 1} de ${curso.lecciones.length}`}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${((index + 1) / curso.lecciones.length) * 100}%`,
              backgroundColor: config.color,
            }}
          />
        </div>
      </div>

      {/* Video Section */}
      {leccion.tieneVideo && (
        <div className="mb-10">
          <div className="flex aspect-video w-full items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/50">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <PlayCircle className="size-16" aria-hidden="true" />
              <span className="text-lg font-medium">
                Video de la leccion
              </span>
              <span className="text-base">Proximamente</span>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Content */}
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Contenido</h2>
        <div className="rounded-xl border bg-card p-6 text-lg leading-relaxed md:p-8">
          <MarkdownContent content={leccion.contenido} />
        </div>
      </div>

      {/* Quiz Section */}
      {leccion.tieneQuiz && leccion.quizQuestions && (
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Quiz</h2>
          <div className="rounded-xl border bg-card p-6 md:p-8">
            <Quiz
              questions={leccion.quizQuestions}
              courseId={curso.id}
              accentColor={config.color}
            />
          </div>
        </div>
      )}

      {/* Mark Complete */}
      <div className="mb-10 flex justify-center">
        <LessonCompleteButton
          lessonId={leccion.id}
          accentColor={config.color}
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
        {prevLeccion ? (
          <Link href={`/cursos/${curso.id}/leccion/${prevLeccion.id}`}>
            <Button
              variant="outline"
              className="h-12 gap-2 px-6 text-base"
              nativeButton={false}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
              Anterior: {prevLeccion.titulo}
            </Button>
          </Link>
        ) : (
          <Link href={`/cursos/${curso.id}`}>
            <Button
              variant="outline"
              className="h-12 gap-2 px-6 text-base"
              nativeButton={false}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
              Volver al curso
            </Button>
          </Link>
        )}

        {nextLeccion ? (
          <Link href={`/cursos/${curso.id}/leccion/${nextLeccion.id}`}>
            <Button
              className="h-12 gap-2 px-6 text-base font-semibold"
              style={{ backgroundColor: config.color }}
              nativeButton={false}
            >
              Siguiente: {nextLeccion.titulo}
              <ChevronRight className="size-5" aria-hidden="true" />
            </Button>
          </Link>
        ) : (
          <Link href={`/cursos/${curso.id}`}>
            <Button
              className="h-12 gap-2 px-6 text-base font-semibold"
              style={{ backgroundColor: config.color }}
              nativeButton={false}
            >
              <CheckCircle2 className="size-5" aria-hidden="true" />
              Finalizar curso
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
