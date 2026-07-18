import { createClient } from "@/lib/supabase/server";
import { chat } from "@/lib/llm-client";
import { cursos } from "@/lib/cursos-data";
import { NextResponse } from "next/server";

// ── PILOTO: mientras sea true, solo admins pueden usar la sección ──
const PILOT_ADMIN_ONLY = true;
const MAX_GENERATIONS_PER_DAY = 3;

async function getAuthorizedUser(supabase: Awaited<ReturnType<typeof createClient>>) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { user: null, allowed: false };

  if (!PILOT_ADMIN_ONLY) return { user, allowed: true };

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("id")
    .eq("email", user.email)
    .maybeSingle();
  return { user, allowed: !!adminUser || user.email === "holenderian@gmail.com" };
}

const CATALOGO = cursos
  .map((c) => `- ${c.id}: ${c.titulo} (nivel ${c.nivel}) — ${c.descripcion}`)
  .join("\n");

function buildPrompt(r: Record<string, string>): string {
  return `Eres un consultor experto en adopción de Inteligencia Artificial para negocios en Latinoamérica. Un dueño de negocio describió su operación:

- A qué se dedica: ${r.actividad}
- Tamaño del equipo: ${r.tamano}
- Cómo opera su día a día: ${r.operacion}
- Qué tareas le consumen más tiempo: ${r.dolores}
- Herramientas que usa hoy: ${r.herramientas}

Genera un PLAN PERSONALIZADO de adopción de IA para ESTE negocio específico. Catálogo de cursos disponible en la plataforma (usa los ids exactos):
${CATALOGO}

Responde SOLO con JSON válido (sin markdown, sin texto extra) con esta estructura exacta:
{
  "titulo": "título del plan personalizado al negocio",
  "resumen": "2-3 frases de cómo la IA puede transformar este negocio en concreto",
  "modulos": [
    {
      "titulo": "nombre del caso de uso",
      "descripcion": "2-3 frases de qué es y por qué le sirve a ESTE negocio",
      "acciones": ["paso concreto 1", "paso concreto 2", "paso concreto 3"],
      "prompts": [{ "titulo": "para qué sirve", "texto": "prompt listo para copiar, adaptado con detalles del negocio" }],
      "cursos": [{ "id": "id-exacto-del-catalogo", "razon": "por qué este curso le ayuda con este módulo" }]
    }
  ]
}

Reglas: 4 a 6 módulos, del más fácil/impactante al más avanzado. Los prompts deben mencionar detalles reales del negocio descrito. Español latinoamericano, tono práctico, cero tecnicismos innecesarios.`;
}

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

function parsePlan(raw: string): Plan | null {
  try {
    const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    const plan = JSON.parse(cleaned.slice(start, end + 1)) as Plan;
    if (!plan.titulo || !Array.isArray(plan.modulos) || plan.modulos.length === 0) return null;
    const validIds = new Set(cursos.map((c) => c.id));
    for (const m of plan.modulos) {
      m.acciones = Array.isArray(m.acciones) ? m.acciones : [];
      m.prompts = Array.isArray(m.prompts) ? m.prompts : [];
      m.cursos = (Array.isArray(m.cursos) ? m.cursos : []).filter((c) => validIds.has(c.id));
    }
    return plan;
  } catch {
    return null;
  }
}

/** GET: perfil + plan del usuario (y si está autorizado al piloto) */
export async function GET() {
  const supabase = await createClient();
  const { user, allowed } = await getAuthorizedUser(supabase);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!allowed) return NextResponse.json({ allowed: false });

  const [{ data: profile }, { data: planRow }] = await Promise.all([
    supabase.from("business_profiles").select("respuestas, updated_at").eq("user_id", user.id).maybeSingle(),
    supabase
      .from("personalized_plans")
      .select("plan, completed_modules, generated_at")
      .eq("user_id", user.id)
      .maybeSingle(),
  ]);

  return NextResponse.json({ allowed: true, profile, plan: planRow });
}

/** POST: guarda el perfil y genera el plan con IA */
export async function POST(request: Request) {
  const supabase = await createClient();
  const { user, allowed } = await getAuthorizedUser(supabase);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!allowed) return NextResponse.json({ error: "Forbidden (piloto)" }, { status: 403 });

  const body = await request.json().catch(() => null);
  const respuestas = body?.respuestas as Record<string, string> | undefined;
  const campos = ["actividad", "tamano", "operacion", "dolores", "herramientas"];
  if (!respuestas || campos.some((c) => !respuestas[c] || typeof respuestas[c] !== "string")) {
    return NextResponse.json({ error: "Faltan respuestas del perfil" }, { status: 400 });
  }
  for (const c of campos) respuestas[c] = respuestas[c].slice(0, 1000);

  // Límite de generaciones por día
  const { data: existing } = await supabase
    .from("personalized_plans")
    .select("generations_today, last_generated_date")
    .eq("user_id", user.id)
    .maybeSingle();

  const today = new Date().toISOString().slice(0, 10);
  const usedToday = existing && existing.last_generated_date === today ? existing.generations_today : 0;
  if (usedToday >= MAX_GENERATIONS_PER_DAY) {
    return NextResponse.json(
      { error: `Límite de ${MAX_GENERATIONS_PER_DAY} generaciones por día alcanzado. Intenta mañana.` },
      { status: 429 }
    );
  }

  // Generar con IA (Gemini primario, Groq fallback)
  let plan: Plan | null = null;
  try {
    const raw = await chat("exercise", [{ role: "user", content: buildPrompt(respuestas) }]);
    plan = parsePlan(raw);
    if (!plan) {
      // Un reintento: los LLM a veces devuelven JSON malformado
      const retry = await chat("exercise", [
        { role: "user", content: buildPrompt(respuestas) + "\n\nIMPORTANTE: responde ÚNICAMENTE el objeto JSON." },
      ]);
      plan = parsePlan(retry);
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Error del modelo";
    return NextResponse.json({ error: `No se pudo generar el plan: ${msg}` }, { status: 502 });
  }
  if (!plan) {
    return NextResponse.json({ error: "La IA no devolvió un plan válido. Intenta de nuevo." }, { status: 502 });
  }

  // Guardar perfil + plan
  await supabase
    .from("business_profiles")
    .upsert({ user_id: user.id, respuestas, updated_at: new Date().toISOString() }, { onConflict: "user_id" });

  const { error: planError } = await supabase.from("personalized_plans").upsert(
    {
      user_id: user.id,
      plan,
      completed_modules: [],
      generated_at: new Date().toISOString(),
      generations_today: usedToday + 1,
      last_generated_date: today,
    },
    { onConflict: "user_id" }
  );
  if (planError) return NextResponse.json({ error: planError.message }, { status: 500 });

  return NextResponse.json({ plan: { plan, completed_modules: [], generated_at: new Date().toISOString() } });
}

/** PATCH: marca/desmarca un módulo como completado */
export async function PATCH(request: Request) {
  const supabase = await createClient();
  const { user, allowed } = await getAuthorizedUser(supabase);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!allowed) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await request.json().catch(() => null);
  const moduleIndex = body?.moduleIndex;
  const completed = body?.completed;
  if (typeof moduleIndex !== "number" || typeof completed !== "boolean") {
    return NextResponse.json({ error: "moduleIndex y completed son requeridos" }, { status: 400 });
  }

  const { data: row } = await supabase
    .from("personalized_plans")
    .select("completed_modules")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!row) return NextResponse.json({ error: "No hay plan" }, { status: 404 });

  const set = new Set<number>((row.completed_modules as number[]) ?? []);
  if (completed) set.add(moduleIndex);
  else set.delete(moduleIndex);

  const { error } = await supabase
    .from("personalized_plans")
    .update({ completed_modules: Array.from(set) })
    .eq("user_id", user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ completed_modules: Array.from(set) });
}
