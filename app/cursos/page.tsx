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
import { BookOpen, Clock } from "lucide-react";
import { cursos, nivelConfig, type Curso } from "@/lib/cursos-data";

function CourseCard({ curso }: { curso: Curso }) {
  const config = nivelConfig[curso.nivel];

  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="mb-2">
          <Badge
            className="text-sm font-semibold"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-snug">{curso.titulo}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {curso.descripcion}
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
      <CardFooter>
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

export default function CursosPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E40AF" }}
        >
          Catalogo de cursos
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Elige el curso que mejor se adapte a tu nivel y objetivos.
        </p>
      </div>

      {/* Level filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {Object.entries(nivelConfig).map(([key, config]) => (
          <Badge
            key={key}
            className="cursor-pointer px-4 py-1.5 text-base font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: config.bg, color: config.color }}
          >
            {config.label}
          </Badge>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso) => (
          <CourseCard key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
}
