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

type Nivel = "intro" | "basico" | "intermedio" | "avanzado" | "pro";

const nivelConfig: Record<
  Nivel,
  { label: string; color: string; bg: string }
> = {
  intro: { label: "Introduccion", color: "#16A34A", bg: "#F0FDF4" },
  basico: { label: "Basico", color: "#1E40AF", bg: "#EFF6FF" },
  intermedio: { label: "Intermedio", color: "#7C3AED", bg: "#F5F3FF" },
  avanzado: { label: "Avanzado", color: "#EA580C", bg: "#FFF7ED" },
  pro: { label: "Pro", color: "#CA8A04", bg: "#FEFCE8" },
};

interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: Nivel;
  lecciones: number;
  duracion: string;
}

const cursos: Curso[] = [
  {
    id: "que-es-ia",
    titulo: "Que es la Inteligencia Artificial",
    descripcion:
      "Una introduccion amigable al mundo de la IA. Aprende que es, como funciona y por que es importante para tu vida diaria.",
    nivel: "intro",
    lecciones: 5,
    duracion: "2 horas",
  },
  {
    id: "chatgpt-desde-cero",
    titulo: "ChatGPT desde cero",
    descripcion:
      "Aprende a usar ChatGPT de forma efectiva. Desde tu primera conversacion hasta prompts avanzados.",
    nivel: "basico",
    lecciones: 8,
    duracion: "4 horas",
  },
  {
    id: "prompts-efectivos",
    titulo: "Prompts efectivos",
    descripcion:
      "Domina el arte de escribir prompts que obtienen los resultados que necesitas. Tecnicas y patrones probados.",
    nivel: "basico",
    lecciones: 10,
    duracion: "5 horas",
  },
  {
    id: "ia-para-negocios",
    titulo: "IA para tu negocio",
    descripcion:
      "Como aplicar herramientas de IA para mejorar la productividad de tu empresa o emprendimiento.",
    nivel: "intermedio",
    lecciones: 12,
    duracion: "6 horas",
  },
  {
    id: "automatizacion-ia",
    titulo: "Automatizacion con IA",
    descripcion:
      "Crea flujos de trabajo automatizados usando herramientas de IA. Ahorra horas de trabajo repetitivo.",
    nivel: "avanzado",
    lecciones: 15,
    duracion: "8 horas",
  },
  {
    id: "agentes-ia",
    titulo: "Agentes de IA",
    descripcion:
      "Construi tus propios agentes de IA. Aprende a disenar, implementar y desplegar agentes autonomos.",
    nivel: "pro",
    lecciones: 20,
    duracion: "12 horas",
  },
];

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
          {curso.lecciones} lecciones
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-4" aria-hidden="true" />
          {curso.duracion}
        </span>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full text-base font-semibold"
          style={{ backgroundColor: config.color }}
          render={<Link href={`/cursos/${curso.id}`} />}
        >
          Ver curso
        </Button>
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
