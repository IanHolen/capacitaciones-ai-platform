import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Level: Introducción
  const level = await prisma.level.upsert({
    where: { slug: "introduccion" },
    update: { nameEn: "Introduction", descriptionEn: "Introductory level for people with no prior AI experience." },
    create: {
      slug: "introduccion",
      name: "Introducción",
      nameEn: "Introduction",
      description:
        "Nivel introductorio para personas sin experiencia previa con IA.",
      descriptionEn: "Introductory level for people with no prior AI experience.",
      sortOrder: 1,
    },
  });

  // Course 1: ¿Qué es la Inteligencia Artificial? (6 lecciones)
  const curso1 = await prisma.course.upsert({
    where: { slug: "que-es-la-ia" },
    update: { titleEn: "What is Artificial Intelligence?", descriptionEn: "A friendly introduction to the world of AI. Learn what it is, how it works, and why it matters in your daily life." },
    create: {
      levelId: level.id,
      title: "¿Qué es la Inteligencia Artificial?",
      titleEn: "What is Artificial Intelligence?",
      slug: "que-es-la-ia",
      description:
        "Una introducción amigable al mundo de la IA. Aprende qué es, cómo funciona y por qué es importante para tu vida diaria.",
      descriptionEn: "A friendly introduction to the world of AI. Learn what it is, how it works, and why it matters in your daily life.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso1Lecciones = [
    { title: "Bienvenida al curso", titleEn: "Welcome to the Course", slug: "bienvenida" },
    { title: "¿Qué es la IA en palabras simples?", titleEn: "What is AI in Simple Words?", slug: "que-es-la-ia-simple" },
    { title: "IA en tu vida diaria", titleEn: "AI in Your Daily Life", slug: "ia-vida-diaria" },
    { title: "Tipos de IA", titleEn: "Types of AI", slug: "tipos-de-ia" },
    { title: "El futuro de la IA", titleEn: "The Future of AI", slug: "futuro-de-la-ia" },
    { title: "Quiz: ¿Qué es la IA?", titleEn: "Quiz: What is AI?", slug: "quiz-que-es-la-ia" },
  ];

  for (let i = 0; i < curso1Lecciones.length; i++) {
    const l = curso1Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso1.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso1.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // Course 2: Tu primera conversación con IA (7 lecciones)
  const curso2 = await prisma.course.upsert({
    where: { slug: "primera-conversacion-ia" },
    update: { titleEn: "Your First Conversation with AI", descriptionEn: "A hands-on course to learn how to use ChatGPT, Claude, and Gemini. From creating your account to having useful conversations." },
    create: {
      levelId: level.id,
      title: "Tu primera conversación con IA",
      titleEn: "Your First Conversation with AI",
      slug: "primera-conversacion-ia",
      description:
        "Curso práctico para aprender a usar ChatGPT, Claude y Gemini. Desde crear tu cuenta hasta tener conversaciones útiles.",
      descriptionEn: "A hands-on course to learn how to use ChatGPT, Claude, and Gemini. From creating your account to having useful conversations.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso2Lecciones = [
    { title: "¿Qué es ChatGPT, Claude, Gemini?", titleEn: "What is ChatGPT, Claude, Gemini?", slug: "que-es-chatgpt-claude-gemini" },
    { title: "Crear tu cuenta paso a paso", titleEn: "Create Your Account Step by Step", slug: "crear-cuenta" },
    { title: "Tu primera pregunta", titleEn: "Your First Question", slug: "primera-pregunta" },
    { title: "Entendiendo las respuestas", titleEn: "Understanding the Responses", slug: "entendiendo-respuestas" },
    { title: "5 cosas útiles que puedes hacer HOY", titleEn: "5 Useful Things You Can Do TODAY", slug: "cinco-cosas-utiles" },
    { title: "Ejercicio práctico: 3 preguntas", titleEn: "Hands-on Exercise: 3 Questions", slug: "ejercicio-tres-preguntas" },
    { title: "Quiz: Tu primera conversación", titleEn: "Quiz: Your First Conversation", slug: "quiz-primera-conversacion" },
  ];

  for (let i = 0; i < curso2Lecciones.length; i++) {
    const l = curso2Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso2.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso2.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // Course 3: IA sin miedo (6 lecciones)
  const curso3 = await prisma.course.upsert({
    where: { slug: "ia-sin-miedo" },
    update: { titleEn: "AI Without Fear", descriptionEn: "Address the most common fears about AI with honesty and calm. Learn to use it safely and responsibly." },
    create: {
      levelId: level.id,
      title: "IA sin miedo",
      titleEn: "AI Without Fear",
      slug: "ia-sin-miedo",
      description:
        "Aborda los miedos más comunes sobre la IA con honestidad y tranquilidad. Aprende a usarla de forma segura y responsable.",
      descriptionEn: "Address the most common fears about AI with honesty and calm. Learn to use it safely and responsibly.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso3Lecciones = [
    { title: "¿La IA me quita el trabajo?", titleEn: "Will AI Take My Job?", slug: "ia-quita-trabajo" },
    { title: "Privacidad: qué compartir y qué no", titleEn: "Privacy: What to Share and What Not To", slug: "privacidad" },
    { title: "¿La IA se equivoca?", titleEn: "Does AI Make Mistakes?", slug: "ia-se-equivoca" },
    { title: "IA como herramienta, no como reemplazo", titleEn: "AI as a Tool, Not a Replacement", slug: "ia-herramienta" },
    { title: "Tu plan personal con IA", titleEn: "Your Personal AI Plan", slug: "plan-personal" },
    { title: "Quiz final: Nivel Introducción", titleEn: "Final Quiz: Introduction Level", slug: "quiz-final-introduccion" },
  ];

  for (let i = 0; i < curso3Lecciones.length; i++) {
    const l = curso3Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso3.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso3.id,
        title: l.title,
        titleEn: l.titleEn,
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
    update: { nameEn: "Basic", descriptionEn: "Learn to use AI practically in your daily life. Effective prompts, popular tools, and real use cases." },
    create: {
      slug: "basico",
      name: "Básico",
      nameEn: "Basic",
      description:
        "Aprende a usar la IA de forma práctica en tu día a día. Prompts efectivos, herramientas populares y casos de uso reales.",
      descriptionEn: "Learn to use AI practically in your daily life. Effective prompts, popular tools, and real use cases.",
      sortOrder: 2,
    },
  });

  const levelIntermedio = await prisma.level.upsert({
    where: { slug: "intermedio" },
    update: { nameEn: "Intermediate", descriptionEn: "Dive deeper into advanced prompting techniques, AI automation, and professional use in your field." },
    create: {
      slug: "intermedio",
      name: "Intermedio",
      nameEn: "Intermediate",
      description:
        "Profundiza en técnicas avanzadas de prompting, automatización con IA y uso profesional en tu área de trabajo.",
      descriptionEn: "Dive deeper into advanced prompting techniques, AI automation, and professional use in your field.",
      sortOrder: 3,
    },
  });

  const levelAvanzado = await prisma.level.upsert({
    where: { slug: "avanzado" },
    update: { nameEn: "Advanced", descriptionEn: "Master generative AI: APIs, project integration, model fine-tuning, and custom solution development." },
    create: {
      slug: "avanzado",
      name: "Avanzado",
      nameEn: "Advanced",
      description:
        "Domina la IA generativa: APIs, integración en proyectos, fine-tuning de modelos y desarrollo de soluciones personalizadas.",
      descriptionEn: "Master generative AI: APIs, project integration, model fine-tuning, and custom solution development.",
      sortOrder: 4,
    },
  });

  const levelPro = await prisma.level.upsert({
    where: { slug: "pro" },
    update: { nameEn: "Pro", descriptionEn: "Expert level: AI system architecture, autonomous agents, RAG, model evaluation, and technical AI leadership." },
    create: {
      slug: "pro",
      name: "Pro",
      nameEn: "Pro",
      description:
        "Nivel experto: arquitectura de sistemas con IA, agentes autónomos, RAG, evaluación de modelos y liderazgo técnico en IA.",
      descriptionEn: "Expert level: AI system architecture, autonomous agents, RAG, model evaluation, and technical AI leadership.",
      sortOrder: 5,
    },
  });

  // ============================================================
  // Level 5 Pro — Course 13: Programación con IA
  // ============================================================

  const curso13 = await prisma.course.upsert({
    where: { slug: "programacion-con-ia" },
    update: { titleEn: "Programming with AI: From Zero to Your First App", descriptionEn: "Learn Python, OpenAI/Anthropic/Gemini APIs, embeddings, vector databases, and build your first chatbot with memory." },
    create: {
      levelId: levelPro.id,
      title: "Programación con IA: de cero a tu primera app",
      titleEn: "Programming with AI: From Zero to Your First App",
      slug: "programacion-con-ia",
      description:
        "Aprende Python, APIs de OpenAI/Anthropic/Gemini, embeddings, bases de datos vectoriales y construye tu primer chatbot con memoria.",
      descriptionEn: "Learn Python, OpenAI/Anthropic/Gemini APIs, embeddings, vector databases, and build your first chatbot with memory.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso13Lecciones = [
    { title: "Python básico para IA", titleEn: "Basic Python for AI", slug: "python-basico-ia" },
    { title: "Instalar tu entorno de desarrollo", titleEn: "Set Up Your Development Environment", slug: "instalar-entorno" },
    { title: "Tu primer script con la API de OpenAI", titleEn: "Your First Script with the OpenAI API", slug: "api-openai" },
    { title: "Tu primer script con la API de Anthropic (Claude)", titleEn: "Your First Script with the Anthropic (Claude) API", slug: "api-anthropic" },
    { title: "Tu primer script con Gemini API", titleEn: "Your First Script with Gemini API", slug: "api-gemini" },
    { title: "Streaming de respuestas", titleEn: "Streaming Responses", slug: "streaming" },
    { title: "Embeddings: qué son y para qué sirven", titleEn: "Embeddings: What They Are and What They're For", slug: "embeddings" },
    { title: "Bases de datos vectoriales (Chroma, pgvector)", titleEn: "Vector Databases (Chroma, pgvector)", slug: "bases-vectoriales" },
    { title: "Proyecto: chatbot con memoria", titleEn: "Project: Chatbot with Memory", slug: "proyecto-chatbot" },
    { title: "Quiz: Programación con IA", titleEn: "Quiz: Programming with AI", slug: "quiz-programacion-ia" },
  ];

  for (let i = 0; i < curso13Lecciones.length; i++) {
    const l = curso13Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso13.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso13.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 5 Pro — Course 14: RAG y búsqueda inteligente
  // ============================================================

  const curso14 = await prisma.course.upsert({
    where: { slug: "rag-busqueda-inteligente" },
    update: { titleEn: "RAG and Intelligent Search", descriptionEn: "Master Retrieval-Augmented Generation: document pipelines, embeddings, LangChain, evaluation, and build your own intelligent search engine." },
    create: {
      levelId: levelPro.id,
      title: "RAG y búsqueda inteligente",
      titleEn: "RAG and Intelligent Search",
      slug: "rag-busqueda-inteligente",
      description:
        "Domina Retrieval-Augmented Generation: pipelines de documentos, embeddings, LangChain, evaluación y construye tu propio buscador inteligente.",
      descriptionEn: "Master Retrieval-Augmented Generation: document pipelines, embeddings, LangChain, evaluation, and build your own intelligent search engine.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso14Lecciones = [
    { title: "Qué es RAG y por qué revolucionó la IA", titleEn: "What is RAG and Why It Revolutionized AI", slug: "que-es-rag" },
    { title: "Pipeline completo: documento→chunks→embeddings→búsqueda", titleEn: "Full Pipeline: Document→Chunks→Embeddings→Search", slug: "pipeline-rag" },
    { title: "Implementar RAG con LangChain", titleEn: "Implement RAG with LangChain", slug: "rag-langchain" },
    { title: "RAG sobre tus propios PDFs", titleEn: "RAG on Your Own PDFs", slug: "rag-pdfs" },
    { title: "Optimizar calidad de respuestas", titleEn: "Optimize Response Quality", slug: "optimizar-rag" },
    { title: "Evaluaciones y métricas de RAG", titleEn: "RAG Evaluations and Metrics", slug: "evaluaciones-rag" },
    { title: "Proyecto: buscador inteligente sobre tus documentos", titleEn: "Project: Intelligent Search Over Your Documents", slug: "proyecto-buscador" },
    { title: "Quiz: RAG y búsqueda inteligente", titleEn: "Quiz: RAG and Intelligent Search", slug: "quiz-rag" },
  ];

  for (let i = 0; i < curso14Lecciones.length; i++) {
    const l = curso14Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso14.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso14.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 5 Pro — Course 15: Agentes de IA y deployment
  // ============================================================

  const curso15 = await prisma.course.upsert({
    where: { slug: "agentes-ia-deployment" },
    update: { titleEn: "AI Agents and Deployment", descriptionEn: "Build autonomous agents with tool use, MCP, and function calling. Deploy on Vercel/HuggingFace. Security and cost optimization." },
    create: {
      levelId: levelPro.id,
      title: "Agentes de IA y deployment",
      titleEn: "AI Agents and Deployment",
      slug: "agentes-ia-deployment",
      description:
        "Construye agentes autónomos con tool use, MCP y function calling. Deploya en Vercel/HuggingFace. Seguridad y optimización de costos.",
      descriptionEn: "Build autonomous agents with tool use, MCP, and function calling. Deploy on Vercel/HuggingFace. Security and cost optimization.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso15Lecciones = [
    { title: "Qué son los agentes de IA", titleEn: "What Are AI Agents", slug: "que-son-agentes" },
    { title: "Tool use y function calling", titleEn: "Tool Use and Function Calling", slug: "tool-use" },
    { title: "MCP (Model Context Protocol)", titleEn: "MCP (Model Context Protocol)", slug: "mcp" },
    { title: "Construir un agente paso a paso", titleEn: "Build an Agent Step by Step", slug: "construir-agente" },
    { title: "Deployment en Vercel/HuggingFace", titleEn: "Deployment on Vercel/HuggingFace", slug: "deployment" },
    { title: "Costos y optimización de latencia", titleEn: "Costs and Latency Optimization", slug: "costos-latencia" },
    { title: "Seguridad: prompt injection y jailbreaks", titleEn: "Security: Prompt Injection and Jailbreaks", slug: "seguridad" },
    { title: "Quiz: Agentes de IA y deployment", titleEn: "Quiz: AI Agents and Deployment", slug: "quiz-agentes" },
  ];

  for (let i = 0; i < curso15Lecciones.length; i++) {
    const l = curso15Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso15.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso15.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // BADGES
  // ============================================================

  const badges = [
    { name: "Primera lección", nameEn: "First Lesson", description: "Completaste tu primera lección", descriptionEn: "You completed your first lesson", icon: "📖", criteria: { type: "lessons_completed", count: 1 } },
    { name: "Primer quiz aprobado", nameEn: "First Quiz Passed", description: "Aprobaste tu primer quiz", descriptionEn: "You passed your first quiz", icon: "✅", criteria: { type: "quizzes_passed", count: 1 } },
    { name: "Nivel Introducción completado", nameEn: "Introduction Level Completed", description: "Completaste todos los cursos del nivel Introducción", descriptionEn: "You completed all courses in the Introduction level", icon: "🌱", criteria: { type: "level_completed", level: "introduccion" } },
    { name: "Nivel Básico completado", nameEn: "Basic Level Completed", description: "Completaste todos los cursos del nivel Básico", descriptionEn: "You completed all courses in the Basic level", icon: "📗", criteria: { type: "level_completed", level: "basico" } },
    { name: "Nivel Intermedio completado", nameEn: "Intermediate Level Completed", description: "Completaste todos los cursos del nivel Intermedio", descriptionEn: "You completed all courses in the Intermediate level", icon: "📘", criteria: { type: "level_completed", level: "intermedio" } },
    { name: "Nivel Avanzado completado", nameEn: "Advanced Level Completed", description: "Completaste todos los cursos del nivel Avanzado", descriptionEn: "You completed all courses in the Advanced level", icon: "📕", criteria: { type: "level_completed", level: "avanzado" } },
    { name: "Nivel Pro completado", nameEn: "Pro Level Completed", description: "Completaste todos los cursos del nivel Pro", descriptionEn: "You completed all courses in the Pro level", icon: "🏆", criteria: { type: "level_completed", level: "pro" } },
    { name: "Racha de 7 días", nameEn: "7-Day Streak", description: "Estudiaste 7 días seguidos", descriptionEn: "You studied 7 days in a row", icon: "🔥", criteria: { type: "streak", days: 7 } },
    { name: "Primer comentario", nameEn: "First Comment", description: "Dejaste tu primer comentario en una lección", descriptionEn: "You left your first comment on a lesson", icon: "💬", criteria: { type: "comments_posted", count: 1 } },
    { name: "Graduado completo", nameEn: "Full Graduate", description: "Completaste los 5 niveles de la plataforma", descriptionEn: "You completed all 5 levels of the platform", icon: "🎓", criteria: { type: "all_levels_completed" } },
  ];

  for (const b of badges) {
    await prisma.badge.upsert({
      where: { name: b.name },
      update: { nameEn: b.nameEn, descriptionEn: b.descriptionEn },
      create: {
        name: b.name,
        nameEn: b.nameEn,
        description: b.description,
        descriptionEn: b.descriptionEn,
        icon: b.icon,
        criteriaJson: b.criteria,
      },
    });
  }

  console.log("Seed complete:");
  console.log(`  Level 1: ${level.name} (${level.id})`);
  console.log(`    Course 1: ${curso1.title} — 6 lessons`);
  console.log(`    Course 2: ${curso2.title} — 7 lessons`);
  console.log(`    Course 3: ${curso3.title} — 6 lessons`);
  console.log(`  Level 2: ${levelBasico.name} (${levelBasico.id})`);
  console.log(`  Level 3: ${levelIntermedio.name} (${levelIntermedio.id})`);
  console.log(`  Level 4: ${levelAvanzado.name} (${levelAvanzado.id})`);
  console.log(`  Level 5: ${levelPro.name} (${levelPro.id})`);
  console.log(`    Course 13: ${curso13.title} — 10 lessons`);
  console.log(`    Course 14: ${curso14.title} — 8 lessons`);
  console.log(`    Course 15: ${curso15.title} — 8 lessons`);
  console.log(`  Badges: ${badges.length} seeded`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
