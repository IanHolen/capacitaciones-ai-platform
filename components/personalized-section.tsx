"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACCENT = "#1E40AF";

/**
 * Sección "Mis cursos personalizados" en /cursos.
 * Durante el piloto solo aparece para usuarios autorizados (el API decide).
 */
export function PersonalizedSection() {
  const [state, setState] = useState<{
    allowed: boolean;
    hasPlan: boolean;
    titulo?: string;
    pct?: number;
  } | null>(null);

  useEffect(() => {
    fetch("/api/personalized")
      .then((r) => (r.ok ? r.json() : { allowed: false }))
      .then((data) => {
        if (!data.allowed) {
          setState({ allowed: false, hasPlan: false });
          return;
        }
        const total = data.plan?.plan?.modulos?.length ?? 0;
        const done = data.plan?.completed_modules?.length ?? 0;
        setState({
          allowed: true,
          hasPlan: !!data.plan,
          titulo: data.plan?.plan?.titulo,
          pct: total > 0 ? Math.round((done / total) * 100) : 0,
        });
      })
      .catch(() => setState({ allowed: false, hasPlan: false }));
  }, []);

  if (!state?.allowed) return null;

  return (
    <section className="mb-12">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
        <Sparkles className="size-5" style={{ color: ACCENT }} />
        Mis cursos personalizados
      </h2>
      <div
        className="flex flex-col gap-4 rounded-2xl border-2 p-6 sm:flex-row sm:items-center md:p-8"
        style={{ borderColor: `${ACCENT}30`, background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 60%)" }}
      >
        <div
          className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-white"
          style={{ backgroundColor: ACCENT }}
        >
          <Building2 className="size-7" />
        </div>
        <div className="flex-1">
          {state.hasPlan ? (
            <>
              <div className="text-lg font-bold">{state.titulo}</div>
              <div className="mt-1 text-base text-muted-foreground">
                Tu plan de IA hecho a la medida de tu negocio — {state.pct}% completado
              </div>
              <div className="mt-2 h-2 w-full max-w-sm overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${state.pct}%`, backgroundColor: ACCENT }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="text-lg font-bold">Crea tu plan de IA personalizado</div>
              <div className="mt-1 text-base text-muted-foreground">
                Descríbenos tu negocio y te generamos un plan con casos de uso, prompts
                listos para usar y los cursos que más te convienen.
              </div>
            </>
          )}
        </div>
        <Link href="/cursos/personalizado" className="shrink-0">
          <Button className="h-12 gap-2 px-6 text-base font-semibold" style={{ backgroundColor: ACCENT }}>
            {state.hasPlan ? "Continuar mi plan" : "Crear mi plan"}
            <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
