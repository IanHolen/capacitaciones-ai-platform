import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Dumbbell, Sparkles } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Elige tu nivel",
    description:
      "Desde introduccion hasta avanzado. Hay un curso perfecto para ti, sin importar tu experiencia.",
  },
  {
    icon: Dumbbell,
    title: "Aprende con ejercicios",
    description:
      "Practica con ejercicios interactivos y quizzes que refuerzan lo que aprendes en cada leccion.",
  },
  {
    icon: Sparkles,
    title: "Domina la IA",
    description:
      "Aplica lo aprendido con proyectos reales y obtene tu certificado de completacion.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-background" />
        <h1
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: "#1E40AF" }}
        >
          Aprende Inteligencia Artificial desde cero
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          Cursos disenados para personas que no son tecnicas. Paso a paso,
          a tu ritmo, con ejercicios practicos.
        </p>
        <div className="mt-10">
          <Link href="/cursos">
            <Button
              className="h-14 px-8 text-lg font-semibold"
              style={{ backgroundColor: "#1E40AF" }}
              nativeButton={false}
            >
              Explorar cursos
            </Button>
          </Link>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Tres pasos para aprender IA
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center rounded-2xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="mb-4 flex size-16 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "#1E40AF" }}
                aria-hidden="true"
              >
                <step.icon className="size-8" />
              </div>
              <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Paso {index + 1}
              </span>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="flex flex-col items-center px-4 py-16 text-center text-white md:py-24"
        style={{ backgroundColor: "#1E40AF" }}
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Comenza hoy, es gratis
        </h2>
        <p className="mt-4 max-w-lg text-lg text-blue-100">
          No necesitas experiencia previa. Nuestros cursos te guian desde lo
          mas basico hasta niveles profesionales.
        </p>
        <div className="mt-8">
          <Link href="/cursos">
            <Button
              variant="outline"
              className="h-14 border-white px-8 text-lg font-semibold text-white hover:bg-white hover:text-blue-900"
              nativeButton={false}
            >
              Ver todos los cursos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
