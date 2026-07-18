"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Loader2,
  Sparkles,
  Building2,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cursos } from "@/lib/cursos-data";

const ACCENT = "#1E40AF";

interface PlanModule {
  titulo: string;
  descripcion: string;
  acciones: string[];
  prompts: { titulo: string; texto: string }[];
  cursos: { id: string; razon: string }[];
}
interface Plan {
  titulo: string;
  resumen: string;
  modulos: PlanModule[];
}
interface PlanRow {
  plan: Plan;
  completed_modules: number[];
  generated_at: string;
}

const CAMPOS: { key: string; label: string; placeholder: string; rows: number }[] = [
  { key: "actividad", label: "¿A qué te dedicas o a qué se dedica tu negocio?", placeholder: "Ej. Tengo una agencia de viajes especializada en tours a Teotihuacán...", rows: 2 },
  { key: "tamano", label: "¿Qué tamaño tiene tu equipo?", placeholder: "Ej. Somos 5 personas: yo, 2 vendedores y 2 guías", rows: 1 },
  { key: "operacion", label: "¿Cómo opera tu día a día?", placeholder: "Ej. Recibimos consultas por WhatsApp, cotizamos a mano, agendamos en Excel...", rows: 3 },
  { key: "dolores", label: "¿Qué tareas te consumen más tiempo?", placeholder: "Ej. Responder las mismas preguntas, hacer cotizaciones, publicar en redes...", rows: 3 },
  { key: "herramientas", label: "¿Qué herramientas usas hoy?", placeholder: "Ej. WhatsApp, Excel, Instagram, correo de Gmail", rows: 1 },
];

export default function PersonalizadoPage() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [planRow, setPlanRow] = useState<PlanRow | null>(null);
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/personalized")
      .then((r) => (r.ok ? r.json() : { allowed: false }))
      .then((data) => {
        setAllowed(!!data.allowed);
        if (data.profile?.respuestas) setRespuestas(data.profile.respuestas);
        if (data.plan) setPlanRow(data.plan);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleGenerate() {
    setError("");
    setGenerating(true);
    try {
      const res = await fetch("/api/personalized", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ respuestas }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Error generando el plan");
      } else {
        setPlanRow(data.plan);
        setEditing(false);
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    }
    setGenerating(false);
  }

  async function toggleModule(index: number, completed: boolean) {
    if (!planRow) return;
    const prev = planRow.completed_modules;
    const next = completed ? [...prev, index] : prev.filter((i) => i !== index);
    setPlanRow({ ...planRow, completed_modules: next });
    fetch("/api/personalized", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleIndex: index, completed }),
    }).catch(() => {});
  }

  function copyPrompt(key: string, texto: string) {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin" style={{ color: ACCENT }} />
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Sparkles className="mx-auto mb-4 size-12" style={{ color: ACCENT }} />
        <h1 className="text-2xl font-bold">Muy pronto</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Los planes personalizados están en fase piloto. Pronto podrás crear el tuyo.
        </p>
        <Link href="/cursos" className="mt-6 inline-block">
          <Button variant="outline" className="h-12 gap-2 px-6 text-base">
            <ArrowLeft className="size-5" /> Volver a cursos
          </Button>
        </Link>
      </div>
    );
  }

  const showForm = !planRow || editing;
  const completedCount = planRow?.completed_modules.length ?? 0;
  const totalModules = planRow?.plan.modulos.length ?? 0;
  const pct = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
      <Link
        href="/cursos"
        className="mb-6 inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Cursos
      </Link>

      {showForm ? (
        <>
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex size-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <Building2 className="size-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: ACCENT }}>
                IA para tu negocio
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Cuéntanos cómo funciona tu operación y generaremos un plan personalizado con
              casos de uso, prompts listos para copiar y los cursos que más te convienen.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CAMPOS.map((campo) => (
              <div key={campo.key}>
                <label htmlFor={campo.key} className="mb-1.5 block text-base font-medium">
                  {campo.label}
                </label>
                <textarea
                  id={campo.key}
                  value={respuestas[campo.key] ?? ""}
                  onChange={(e) =>
                    setRespuestas((r) => ({ ...r, [campo.key]: e.target.value }))
                  }
                  placeholder={campo.placeholder}
                  rows={campo.rows}
                  maxLength={1000}
                  className="w-full rounded-xl border-2 border-gray-200 p-4 text-lg leading-relaxed transition-colors placeholder:text-gray-400 focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
                />
              </div>
            ))}

            {error && (
              <div className="rounded-xl bg-red-50 p-4 text-base text-red-700" role="alert">
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleGenerate}
                disabled={generating || CAMPOS.some((c) => !(respuestas[c.key] ?? "").trim())}
                className="h-14 gap-2 px-8 text-lg font-semibold"
                style={{ backgroundColor: ACCENT }}
              >
                {generating ? (
                  <>
                    <Loader2 className="size-5 animate-spin" /> Generando tu plan...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-5" /> Generar mi plan personalizado
                  </>
                )}
              </Button>
              {planRow && (
                <Button
                  variant="outline"
                  onClick={() => setEditing(false)}
                  className="h-14 px-6 text-base"
                >
                  Cancelar
                </Button>
              )}
            </div>
            {generating && (
              <p className="text-sm text-muted-foreground">
                Esto toma unos 15-30 segundos — estamos analizando tu negocio...
              </p>
            )}
          </div>
        </>
      ) : (
        planRow && (
          <>
            {/* Encabezado del plan */}
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold" style={{ color: ACCENT }}>
                <Sparkles className="size-4" /> TU PLAN PERSONALIZADO
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{planRow.plan.titulo}</h1>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                {planRow.plan.resumen}
              </p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-base">
                  <span className="font-medium">Tu avance</span>
                  <span className="text-muted-foreground">
                    {completedCount} de {totalModules} módulos · {pct}%
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: pct === 100 ? "#16A34A" : ACCENT }}
                  />
                </div>
              </div>

              <button
                onClick={() => setEditing(true)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="size-3.5" /> Actualizar mi perfil y regenerar
              </button>
            </div>

            {/* Módulos */}
            <div className="flex flex-col gap-5">
              {planRow.plan.modulos.map((mod, i) => {
                const done = planRow.completed_modules.includes(i);
                return (
                  <Card
                    key={i}
                    className={`rounded-2xl transition-colors ${done ? "border-green-200 bg-green-50/40" : ""}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleModule(i, !done)}
                          aria-label={done ? "Marcar como pendiente" : "Marcar como completado"}
                          className="mt-1 shrink-0"
                        >
                          {done ? (
                            <CheckCircle2 className="size-7 text-green-600" />
                          ) : (
                            <Circle className="size-7 text-gray-300 hover:text-gray-400" />
                          )}
                        </button>
                        <div className="min-w-0 flex-1">
                          <h2 className="text-xl font-bold">
                            <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                            {mod.titulo}
                          </h2>
                          <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                            {mod.descripcion}
                          </p>

                          {mod.acciones.length > 0 && (
                            <ul className="mt-4 flex flex-col gap-2">
                              {mod.acciones.map((a, j) => (
                                <li key={j} className="flex items-start gap-2 text-base">
                                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-green-500" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          )}

                          {mod.prompts.map((p, j) => {
                            const key = `${i}-${j}`;
                            return (
                              <div key={j} className="mt-4 rounded-xl border-2 border-[#1E40AF]/15 bg-blue-50/40 p-4">
                                <div className="mb-2 flex items-center justify-between gap-2">
                                  <span className="text-sm font-semibold" style={{ color: ACCENT }}>
                                    🧪 {p.titulo}
                                  </span>
                                  <button
                                    onClick={() => copyPrompt(key, p.texto)}
                                    className="inline-flex items-center gap-1 rounded-lg border bg-white px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                                  >
                                    {copiedKey === key ? (
                                      <>
                                        <Check className="size-3 text-green-600" /> Copiado
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="size-3" /> Copiar
                                      </>
                                    )}
                                  </button>
                                </div>
                                <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                                  {p.texto}
                                </p>
                              </div>
                            );
                          })}

                          {mod.cursos.length > 0 && (
                            <div className="mt-4 flex flex-col gap-2">
                              {mod.cursos.map((c, j) => {
                                const curso = cursos.find((x) => x.id === c.id);
                                if (!curso) return null;
                                return (
                                  <Link
                                    key={j}
                                    href={`/cursos/${c.id}`}
                                    className="group flex items-start gap-3 rounded-xl border p-3 transition-shadow hover:shadow-sm"
                                  >
                                    <BookOpen className="mt-0.5 size-5 shrink-0" style={{ color: ACCENT }} />
                                    <div>
                                      <div className="text-sm font-semibold group-hover:underline">
                                        {curso.titulo}
                                      </div>
                                      <div className="text-xs text-muted-foreground">{c.razon}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </>
        )
      )}
    </div>
  );
}
