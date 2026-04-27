import Link from "next/link";
import { notFound } from "next/navigation";
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
  PlayCircle,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { getCurso, nivelConfig, cursos } from "@/lib/cursos-data";

export function generateStaticParams() {
  return cursos.map((curso) => ({ cursoId: curso.id }));
}

export default async function CursoDetallePage({
  params,
}: {
  params: Promise<{ cursoId: string }>;
}) {
  const { cursoId } = await params;
  const curso = getCurso(cursoId);

  if (!curso) {
    notFound();
  }

  const config = nivelConfig[curso.nivel];
  const completadas = 0; // placeholder — will come from user progress

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-base text-muted-foreground">
          <li>
            <Link href="/cursos" className="hover:text-foreground">
              Cursos
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-4" />
          </li>
          <li className="font-medium text-foreground">{curso.titulo}</li>
        </ol>
      </nav>

      {/* Course Header */}
      <div className="mb-10">
        <div className="mb-4">
          <Badge
            className="px-3 py-1 text-sm font-semibold"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </Badge>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {curso.titulo}
        </h1>
        <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
          {curso.descripcion}
        </p>

        {/* Course Stats */}
        <div className="flex flex-wrap items-center gap-6 text-base text-muted-foreground">
          <span className="flex items-center gap-2">
            <BookOpen className="size-5" aria-hidden="true" />
            {curso.lecciones.length} lecciones
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-5" aria-hidden="true" />
            {curso.duracion}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-base">
            <span className="font-medium">Tu progreso</span>
            <span className="text-muted-foreground">
              {completadas} de {curso.lecciones.length} lecciones completadas
            </span>
          </div>
          <div
            className="h-3 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={completadas}
            aria-valuemin={0}
            aria-valuemax={curso.lecciones.length}
            aria-label={`Progreso del curso: ${completadas} de ${curso.lecciones.length} lecciones completadas`}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${curso.lecciones.length > 0 ? (completadas / curso.lecciones.length) * 100 : 0}%`,
                backgroundColor: config.color,
              }}
            />
          </div>
        </div>
      </div>

      {/* Start / Continue Button */}
      <div className="mb-10">
        <Button
          className="h-14 px-8 text-lg font-semibold"
          style={{ backgroundColor: config.color }}
          render={
            <Link
              href={`/cursos/${curso.id}/leccion/${curso.lecciones[0].id}`}
            />
          }
        >
          {completadas > 0 ? "Continuar curso" : "Comenzar curso"}
        </Button>
      </div>

      {/* Lessons List */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Lecciones</h2>
        <div className="flex flex-col gap-3">
          {curso.lecciones.map((leccion, index) => (
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
                        {leccion.titulo}
                      </CardTitle>
                      <CardDescription className="mt-1 text-base">
                        {leccion.descripcion}
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
                      {leccion.duracion}
                    </span>
                    {leccion.tieneVideo && (
                      <span className="flex items-center gap-1.5">
                        <PlayCircle className="size-4" aria-hidden="true" />
                        Video
                      </span>
                    )}
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
          ))}
        </div>
      </div>
    </div>
  );
}
