import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Level: Introducción
  const level = await prisma.level.upsert({
    where: { slug: "introduccion" },
    update: {},
    create: {
      slug: "introduccion",
      name: "Introducción",
      description:
        "Nivel introductorio para personas sin experiencia previa con IA.",
      sortOrder: 1,
    },
  });

  // Course 1: ¿Qué es la Inteligencia Artificial? (6 lecciones)
  const curso1 = await prisma.course.upsert({
    where: { slug: "que-es-la-ia" },
    update: {},
    create: {
      levelId: level.id,
      title: "¿Qué es la Inteligencia Artificial?",
      slug: "que-es-la-ia",
      description:
        "Una introducción amigable al mundo de la IA. Aprende qué es, cómo funciona y por qué es importante para tu vida diaria.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso1Lecciones = [
    { title: "Bienvenida al curso", slug: "bienvenida" },
    { title: "¿Qué es la IA en palabras simples?", slug: "que-es-la-ia-simple" },
    { title: "IA en tu vida diaria", slug: "ia-vida-diaria" },
    { title: "Tipos de IA", slug: "tipos-de-ia" },
    { title: "El futuro de la IA", slug: "futuro-de-la-ia" },
    { title: "Quiz: ¿Qué es la IA?", slug: "quiz-que-es-la-ia" },
  ];

  for (let i = 0; i < curso1Lecciones.length; i++) {
    const l = curso1Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso1.id, slug: l.slug } },
      update: {},
      create: {
        courseId: curso1.id,
        title: l.title,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // Course 2: Tu primera conversación con IA (7 lecciones)
  const curso2 = await prisma.course.upsert({
    where: { slug: "primera-conversacion-ia" },
    update: {},
    create: {
      levelId: level.id,
      title: "Tu primera conversación con IA",
      slug: "primera-conversacion-ia",
      description:
        "Curso práctico para aprender a usar ChatGPT, Claude y Gemini. Desde crear tu cuenta hasta tener conversaciones útiles.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso2Lecciones = [
    { title: "¿Qué es ChatGPT, Claude, Gemini?", slug: "que-es-chatgpt-claude-gemini" },
    { title: "Crear tu cuenta paso a paso", slug: "crear-cuenta" },
    { title: "Tu primera pregunta", slug: "primera-pregunta" },
    { title: "Entendiendo las respuestas", slug: "entendiendo-respuestas" },
    { title: "5 cosas útiles que puedes hacer HOY", slug: "cinco-cosas-utiles" },
    { title: "Ejercicio práctico: 3 preguntas", slug: "ejercicio-tres-preguntas" },
    { title: "Quiz: Tu primera conversación", slug: "quiz-primera-conversacion" },
  ];

  for (let i = 0; i < curso2Lecciones.length; i++) {
    const l = curso2Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso2.id, slug: l.slug } },
      update: {},
      create: {
        courseId: curso2.id,
        title: l.title,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // Course 3: IA sin miedo (6 lecciones)
  const curso3 = await prisma.course.upsert({
    where: { slug: "ia-sin-miedo" },
    update: {},
    create: {
      levelId: level.id,
      title: "IA sin miedo",
      slug: "ia-sin-miedo",
      description:
        "Aborda los miedos más comunes sobre la IA con honestidad y tranquilidad. Aprende a usarla de forma segura y responsable.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso3Lecciones = [
    { title: "¿La IA me quita el trabajo?", slug: "ia-quita-trabajo" },
    { title: "Privacidad: qué compartir y qué no", slug: "privacidad" },
    { title: "¿La IA se equivoca?", slug: "ia-se-equivoca" },
    { title: "IA como herramienta, no como reemplazo", slug: "ia-herramienta" },
    { title: "Tu plan personal con IA", slug: "plan-personal" },
    { title: "Quiz final: Nivel Introducción", slug: "quiz-final-introduccion" },
  ];

  for (let i = 0; i < curso3Lecciones.length; i++) {
    const l = curso3Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso3.id, slug: l.slug } },
      update: {},
      create: {
        courseId: curso3.id,
        title: l.title,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Remaining Levels (2–5)
  // ============================================================

  const levelBasico = await prisma.level.upsert({
    where: { slug: "basico" },
    update: {},
    create: {
      slug: "basico",
      name: "Básico",
      description:
        "Aprende a usar la IA de forma práctica en tu día a día. Prompts efectivos, herramientas populares y casos de uso reales.",
      sortOrder: 2,
    },
  });

  const levelIntermedio = await prisma.level.upsert({
    where: { slug: "intermedio" },
    update: {},
    create: {
      slug: "intermedio",
      name: "Intermedio",
      description:
        "Profundiza en técnicas avanzadas de prompting, automatización con IA y uso profesional en tu área de trabajo.",
      sortOrder: 3,
    },
  });

  const levelAvanzado = await prisma.level.upsert({
    where: { slug: "avanzado" },
    update: {},
    create: {
      slug: "avanzado",
      name: "Avanzado",
      description:
        "Domina la IA generativa: APIs, integración en proyectos, fine-tuning de modelos y desarrollo de soluciones personalizadas.",
      sortOrder: 4,
    },
  });

  const levelPro = await prisma.level.upsert({
    where: { slug: "pro" },
    update: {},
    create: {
      slug: "pro",
      name: "Pro",
      description:
        "Nivel experto: arquitectura de sistemas con IA, agentes autónomos, RAG, evaluación de modelos y liderazgo técnico en IA.",
      sortOrder: 5,
    },
  });

  console.log("Seed complete:");
  console.log(`  Level 1: ${level.name} (${level.id})`);
  console.log(`    Course 1: ${curso1.title} — 6 lessons`);
  console.log(`    Course 2: ${curso2.title} — 7 lessons`);
  console.log(`    Course 3: ${curso3.title} — 6 lessons`);
  console.log(`  Level 2: ${levelBasico.name} (${levelBasico.id})`);
  console.log(`  Level 3: ${levelIntermedio.name} (${levelIntermedio.id})`);
  console.log(`  Level 4: ${levelAvanzado.name} (${levelAvanzado.id})`);
  console.log(`  Level 5: ${levelPro.name} (${levelPro.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
