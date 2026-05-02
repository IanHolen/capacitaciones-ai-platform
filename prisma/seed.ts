import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // ============================================================
  // Fix legacy slug mismatch: course 1 was seeded as "que-es-la-ia"
  // but the frontend uses "que-es-ia". Update if the old slug exists.
  // ============================================================
  const oldCourse1 = await prisma.course.findUnique({ where: { slug: "que-es-la-ia" } });
  if (oldCourse1) {
    await prisma.course.update({
      where: { slug: "que-es-la-ia" },
      data: { slug: "que-es-ia" },
    });
    // Also update the old lesson slugs to match frontend IDs
    const oldLessons = await prisma.lesson.findMany({
      where: { courseId: oldCourse1.id },
      orderBy: { sortOrder: "asc" },
    });
    const newSlugs = ["que-es-ia-1", "que-es-ia-2", "que-es-ia-3", "que-es-ia-4", "que-es-ia-5", "que-es-ia-6"];
    for (let i = 0; i < oldLessons.length && i < newSlugs.length; i++) {
      await prisma.lesson.update({
        where: { id: oldLessons[i].id },
        data: { slug: newSlugs[i] },
      });
    }
  }

  // Fix legacy lesson slugs for courses 2-3 and 13-15
  const slugMigrations: Record<string, Record<string, string>> = {
    "primera-conversacion-ia": {
      "que-es-chatgpt-claude-gemini": "conv-ia-1", "crear-cuenta": "conv-ia-2",
      "primera-pregunta": "conv-ia-3", "entendiendo-respuestas": "conv-ia-4",
      "cinco-cosas-utiles": "conv-ia-5", "ejercicio-tres-preguntas": "conv-ia-6",
      "quiz-primera-conversacion": "conv-ia-7",
    },
    "ia-sin-miedo": {
      "ia-quita-trabajo": "sin-miedo-1", "privacidad": "sin-miedo-2",
      "ia-se-equivoca": "sin-miedo-3", "ia-herramienta": "sin-miedo-4",
      "plan-personal": "sin-miedo-5", "quiz-final-introduccion": "sin-miedo-6",
    },
    "programacion-con-ia": {
      "python-basico-ia": "prog-1", "instalar-entorno": "prog-2",
      "api-openai": "prog-3", "api-anthropic": "prog-4",
      "api-gemini": "prog-5", "streaming": "prog-6",
      "embeddings": "prog-7", "bases-vectoriales": "prog-8",
      "proyecto-chatbot": "prog-9", "quiz-programacion-ia": "prog-10",
    },
    "rag-busqueda-inteligente": {
      "que-es-rag": "rag-1", "pipeline-rag": "rag-2",
      "rag-langchain": "rag-3", "rag-pdfs": "rag-4",
      "optimizar-rag": "rag-5", "evaluaciones-rag": "rag-6",
      "proyecto-buscador": "rag-7", "quiz-rag": "rag-8",
    },
    "agentes-ia-deployment": {
      "que-son-agentes": "ag-1", "tool-use": "ag-2",
      "mcp": "ag-3", "construir-agente": "ag-4",
      "deployment": "ag-5", "costos-latencia": "ag-6",
      "seguridad": "ag-7", "quiz-agentes": "ag-8",
    },
  };

  for (const [courseSlug, lessonMap] of Object.entries(slugMigrations)) {
    const course = await prisma.course.findUnique({ where: { slug: courseSlug } });
    if (!course) continue;
    for (const [oldSlug, newSlug] of Object.entries(lessonMap)) {
      const lesson = await prisma.lesson.findUnique({
        where: { courseId_slug: { courseId: course.id, slug: oldSlug } },
      });
      if (lesson) {
        await prisma.lesson.update({ where: { id: lesson.id }, data: { slug: newSlug } });
      }
    }
  }

  // ============================================================
  // Level 1: Introducción
  // ============================================================
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
    where: { slug: "que-es-ia" },
    update: { titleEn: "What is Artificial Intelligence?", descriptionEn: "A friendly introduction to the world of AI. Learn what it is, how it works, and why it matters in your daily life." },
    create: {
      levelId: level.id,
      title: "¿Qué es la Inteligencia Artificial?",
      titleEn: "What is Artificial Intelligence?",
      slug: "que-es-ia",
      description:
        "Una introducción amigable al mundo de la IA. Aprende qué es, cómo funciona y por qué es importante para tu vida diaria.",
      descriptionEn: "A friendly introduction to the world of AI. Learn what it is, how it works, and why it matters in your daily life.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso1Lecciones = [
    { title: "Qué es la Inteligencia Artificial", titleEn: "What is Artificial Intelligence", slug: "que-es-ia-1" },
    { title: "Cómo funciona la IA", titleEn: "How AI Works", slug: "que-es-ia-2" },
    { title: "IA en tu vida diaria", titleEn: "AI in Your Daily Life", slug: "que-es-ia-3" },
    { title: "Tipos de IA", titleEn: "Types of AI", slug: "que-es-ia-4" },
    { title: "El futuro de la IA", titleEn: "The Future of AI", slug: "que-es-ia-5" },
    { title: "Quiz: ¿Qué es la IA?", titleEn: "Quiz: What is AI?", slug: "que-es-ia-6" },
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
    { title: "¿Qué es ChatGPT, Claude, Gemini?", titleEn: "What is ChatGPT, Claude, Gemini?", slug: "conv-ia-1" },
    { title: "Crear tu cuenta paso a paso", titleEn: "Create Your Account Step by Step", slug: "conv-ia-2" },
    { title: "Tu primera pregunta", titleEn: "Your First Question", slug: "conv-ia-3" },
    { title: "Entendiendo las respuestas", titleEn: "Understanding the Responses", slug: "conv-ia-4" },
    { title: "5 cosas útiles que puedes hacer HOY", titleEn: "5 Useful Things You Can Do TODAY", slug: "conv-ia-5" },
    { title: "Ejercicio práctico: 3 preguntas", titleEn: "Hands-on Exercise: 3 Questions", slug: "conv-ia-6" },
    { title: "Quiz: Tu primera conversación", titleEn: "Quiz: Your First Conversation", slug: "conv-ia-7" },
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
    { title: "¿La IA me quita el trabajo?", titleEn: "Will AI Take My Job?", slug: "sin-miedo-1" },
    { title: "Privacidad: qué compartir y qué no", titleEn: "Privacy: What to Share and What Not To", slug: "sin-miedo-2" },
    { title: "¿La IA se equivoca?", titleEn: "Does AI Make Mistakes?", slug: "sin-miedo-3" },
    { title: "IA como herramienta, no como reemplazo", titleEn: "AI as a Tool, Not a Replacement", slug: "sin-miedo-4" },
    { title: "Tu plan personal con IA", titleEn: "Your Personal AI Plan", slug: "sin-miedo-5" },
    { title: "Quiz final: Nivel Introducción", titleEn: "Final Quiz: Introduction Level", slug: "sin-miedo-6" },
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
  // Level 2 Básico — Course 4: Domina ChatGPT, Claude y Gemini
  // ============================================================

  const curso4 = await prisma.course.upsert({
    where: { slug: "domina-chatgpt-claude-gemini" },
    update: { titleEn: "Master ChatGPT, Claude and Gemini", descriptionEn: "Learn the differences, interfaces, and features of the three most popular AI assistants." },
    create: {
      levelId: levelBasico.id,
      title: "Domina ChatGPT, Claude y Gemini",
      titleEn: "Master ChatGPT, Claude and Gemini",
      slug: "domina-chatgpt-claude-gemini",
      description: "Conoce a fondo las diferencias, interfaces y funciones de los tres asistentes de IA más populares.",
      descriptionEn: "Learn the differences, interfaces, and features of the three most popular AI assistants.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso4Lecciones = [
    { title: "Diferencias reales entre ChatGPT, Claude y Gemini", titleEn: "Real Differences Between ChatGPT, Claude and Gemini", slug: "dcg-1" },
    { title: "Interfaz y funciones de ChatGPT", titleEn: "ChatGPT Interface and Features", slug: "dcg-2" },
    { title: "Interfaz y funciones de Claude", titleEn: "Claude Interface and Features", slug: "dcg-3" },
    { title: "Interfaz y funciones de Gemini", titleEn: "Gemini Interface and Features", slug: "dcg-4" },
    { title: "Apps móviles y modo voz", titleEn: "Mobile Apps and Voice Mode", slug: "dcg-5" },
    { title: "Perplexity: buscador con IA", titleEn: "Perplexity: AI-Powered Search", slug: "dcg-6" },
    { title: "Cuándo usar cuál herramienta", titleEn: "When to Use Which Tool", slug: "dcg-7" },
    { title: "Quiz: Domina las herramientas", titleEn: "Quiz: Master the Tools", slug: "dcg-8" },
  ];

  for (let i = 0; i < curso4Lecciones.length; i++) {
    const l = curso4Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso4.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso4.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 2 Básico — Course 5: Prompts efectivos
  // ============================================================

  const curso5 = await prisma.course.upsert({
    where: { slug: "prompts-efectivos" },
    update: { titleEn: "Effective Prompts", descriptionEn: "Master the art of writing prompts that get exactly the results you need." },
    create: {
      levelId: levelBasico.id,
      title: "Prompts efectivos",
      titleEn: "Effective Prompts",
      slug: "prompts-efectivos",
      description: "Domina el arte de escribir prompts que obtienen exactamente los resultados que necesitas.",
      descriptionEn: "Master the art of writing prompts that get exactly the results you need.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso5Lecciones = [
    { title: "Anatomía de un buen prompt", titleEn: "Anatomy of a Good Prompt", slug: "pef-1" },
    { title: "Dar contexto: la clave", titleEn: "Providing Context: The Key", slug: "pef-2" },
    { title: "Ser específico vs. ser vago", titleEn: "Being Specific vs. Being Vague", slug: "pef-3" },
    { title: "Pedir correcciones y mejoras", titleEn: "Asking for Corrections and Improvements", slug: "pef-4" },
    { title: "Prompts para diferentes situaciones", titleEn: "Prompts for Different Situations", slug: "pef-5" },
    { title: "Ejercicio: transforma 5 prompts", titleEn: "Exercise: Transform 5 Prompts", slug: "pef-6" },
    { title: "Quiz: Prompts efectivos", titleEn: "Quiz: Effective Prompts", slug: "pef-7" },
  ];

  for (let i = 0; i < curso5Lecciones.length; i++) {
    const l = curso5Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso5.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso5.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 2 Básico — Course 6: IA en tu vida cotidiana
  // ============================================================

  const curso6 = await prisma.course.upsert({
    where: { slug: "ia-vida-cotidiana" },
    update: { titleEn: "AI in Your Daily Life", descriptionEn: "Use AI to write emails, cook, travel, help with homework, and much more." },
    create: {
      levelId: levelBasico.id,
      title: "IA en tu vida cotidiana",
      titleEn: "AI in Your Daily Life",
      slug: "ia-vida-cotidiana",
      description: "Usa IA para escribir correos, cocinar, viajar, ayudar con tareas escolares y mucho más.",
      descriptionEn: "Use AI to write emails, cook, travel, help with homework, and much more.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso6Lecciones = [
    { title: "Escribir emails y mensajes", titleEn: "Writing Emails and Messages", slug: "ivc-1" },
    { title: "Recetas y planificación de comidas", titleEn: "Recipes and Meal Planning", slug: "ivc-2" },
    { title: "Planear viajes e itinerarios", titleEn: "Planning Trips and Itineraries", slug: "ivc-3" },
    { title: "Ayudar con tareas escolares", titleEn: "Helping with Homework", slug: "ivc-4" },
    { title: "Resumir artículos y documentos", titleEn: "Summarizing Articles and Documents", slug: "ivc-5" },
    { title: "Traducir entre idiomas", titleEn: "Translating Between Languages", slug: "ivc-6" },
    { title: "Quiz: IA en la vida cotidiana", titleEn: "Quiz: AI in Daily Life", slug: "ivc-7" },
  ];

  for (let i = 0; i < curso6Lecciones.length; i++) {
    const l = curso6Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso6.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso6.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 3 Intermedio — Course 7: Prompt Engineering
  // ============================================================

  const curso7 = await prisma.course.upsert({
    where: { slug: "prompt-engineering" },
    update: { titleEn: "Prompt Engineering: The Art of Asking", descriptionEn: "Master advanced prompting techniques for professional AI results." },
    create: {
      levelId: levelIntermedio.id,
      title: "Prompt Engineering: el arte de preguntar",
      titleEn: "Prompt Engineering: The Art of Asking",
      slug: "prompt-engineering",
      description: "Domina las técnicas avanzadas de prompting para obtener resultados profesionales de la IA.",
      descriptionEn: "Master advanced prompting techniques for professional AI results.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso7Lecciones = [
    { title: "Las 5 técnicas core de prompting", titleEn: "The 5 Core Prompting Techniques", slug: "pe-1" },
    { title: "Few-shot learning: enseñar con ejemplos", titleEn: "Few-shot Learning: Teaching with Examples", slug: "pe-2" },
    { title: "Chain-of-thought: pensar paso a paso", titleEn: "Chain-of-Thought: Thinking Step by Step", slug: "pe-3" },
    { title: "Asignar roles y personas", titleEn: "Assigning Roles and Personas", slug: "pe-4" },
    { title: "Usar estructura: XML, markdown y JSON", titleEn: "Using Structure: XML, Markdown, and JSON", slug: "pe-5" },
    { title: "System prompts vs user prompts", titleEn: "System Prompts vs User Prompts", slug: "pe-6" },
    { title: "Iteración y refinamiento", titleEn: "Iteration and Refinement", slug: "pe-7" },
    { title: "Quiz: Prompt Engineering", titleEn: "Quiz: Prompt Engineering", slug: "pe-8" },
  ];

  for (let i = 0; i < curso7Lecciones.length; i++) {
    const l = curso7Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso7.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso7.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 3 Intermedio — Course 8: Documentos e imágenes
  // ============================================================

  const curso8 = await prisma.course.upsert({
    where: { slug: "documentos-imagenes" },
    update: { titleEn: "Working with Documents and Images", descriptionEn: "Learn to analyze PDFs, images, and tables with AI tools." },
    create: {
      levelId: levelIntermedio.id,
      title: "Trabaja con documentos e imágenes",
      titleEn: "Working with Documents and Images",
      slug: "documentos-imagenes",
      description: "Aprende a analizar PDFs, imágenes y tablas con herramientas de IA.",
      descriptionEn: "Learn to analyze PDFs, images, and tables with AI tools.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso8Lecciones = [
    { title: "Subir PDFs y analizarlos con IA", titleEn: "Upload PDFs and Analyze with AI", slug: "di-1" },
    { title: "Resumir documentos largos", titleEn: "Summarizing Long Documents", slug: "di-2" },
    { title: "Analizar imágenes con IA", titleEn: "Analyzing Images with AI", slug: "di-3" },
    { title: "Extraer datos de tablas y facturas", titleEn: "Extracting Data from Tables and Invoices", slug: "di-4" },
    { title: "Proyectos con múltiples archivos", titleEn: "Projects with Multiple Files", slug: "di-5" },
    { title: "Quiz: Documentos e imágenes", titleEn: "Quiz: Documents and Images", slug: "di-6" },
  ];

  for (let i = 0; i < curso8Lecciones.length; i++) {
    const l = curso8Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso8.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso8.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 3 Intermedio — Course 9: Flujos de trabajo con IA
  // ============================================================

  const curso9 = await prisma.course.upsert({
    where: { slug: "flujos-trabajo-ia" },
    update: { titleEn: "AI Workflows", descriptionEn: "Create complete workflows combining multiple AI techniques for real projects." },
    create: {
      levelId: levelIntermedio.id,
      title: "Flujos de trabajo con IA",
      titleEn: "AI Workflows",
      slug: "flujos-trabajo-ia",
      description: "Crea flujos completos combinando múltiples técnicas de IA para proyectos reales.",
      descriptionEn: "Create complete workflows combining multiple AI techniques for real projects.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso9Lecciones = [
    { title: "Prompt chaining: dividir en pasos", titleEn: "Prompt Chaining: Breaking Into Steps", slug: "ft-1" },
    { title: "Memoria y proyectos en ChatGPT/Claude", titleEn: "Memory and Projects in ChatGPT/Claude", slug: "ft-2" },
    { title: "Tokens y ventanas de contexto", titleEn: "Tokens and Context Windows", slug: "ft-3" },
    { title: "Evaluaciones de prompts", titleEn: "Prompt Evaluations", slug: "ft-4" },
    { title: "Tu biblioteca personal de prompts", titleEn: "Your Personal Prompt Library", slug: "ft-5" },
    { title: "Proyecto: flujo de trabajo completo", titleEn: "Project: Complete Workflow", slug: "ft-6" },
    { title: "Quiz final: Flujos de trabajo", titleEn: "Final Quiz: Workflows", slug: "ft-7" },
  ];

  for (let i = 0; i < curso9Lecciones.length; i++) {
    const l = curso9Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso9.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso9.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 4 Avanzado — Course 10: Crea tu propio asistente de IA
  // ============================================================

  const curso10 = await prisma.course.upsert({
    where: { slug: "asistente-ia-propio" },
    update: { titleEn: "Create Your Own AI Assistant", descriptionEn: "Build custom assistants with Custom GPTs, Claude Projects, and knowledge bases." },
    create: {
      levelId: levelAvanzado.id,
      title: "Crea tu propio asistente de IA",
      titleEn: "Create Your Own AI Assistant",
      slug: "asistente-ia-propio",
      description: "Construye asistentes personalizados con Custom GPTs, Claude Projects y bases de conocimiento.",
      descriptionEn: "Build custom assistants with Custom GPTs, Claude Projects, and knowledge bases.",
      sortOrder: 1,
      published: true,
    },
  });

  const curso10Lecciones = [
    { title: "Custom GPTs y Claude Projects", titleEn: "Custom GPTs and Claude Projects", slug: "ap-1" },
    { title: "Crear tu primer Custom GPT", titleEn: "Create Your First Custom GPT", slug: "ap-2" },
    { title: "Instrucciones personalizadas", titleEn: "Custom Instructions", slug: "ap-3" },
    { title: "Base de conocimiento con documentos", titleEn: "Knowledge Base with Documents", slug: "ap-4" },
    { title: "Conectar a datos reales (RAG básico)", titleEn: "Connect to Real Data (Basic RAG)", slug: "ap-5" },
    { title: "Probar y mejorar tu asistente", titleEn: "Test and Improve Your Assistant", slug: "ap-6" },
    { title: "Compartir tu asistente", titleEn: "Share Your Assistant", slug: "ap-7" },
    { title: "Quiz: Asistentes de IA", titleEn: "Quiz: AI Assistants", slug: "ap-8" },
  ];

  for (let i = 0; i < curso10Lecciones.length; i++) {
    const l = curso10Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso10.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso10.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 4 Avanzado — Course 11: Automatiza con IA
  // ============================================================

  const curso11 = await prisma.course.upsert({
    where: { slug: "automatiza-con-ia" },
    update: { titleEn: "Automate with AI", descriptionEn: "Create automated flows with Zapier, Make, n8n, and vibe coding." },
    create: {
      levelId: levelAvanzado.id,
      title: "Automatiza con IA",
      titleEn: "Automate with AI",
      slug: "automatiza-con-ia",
      description: "Crea flujos automatizados con Zapier, Make, n8n y vibe coding.",
      descriptionEn: "Create automated flows with Zapier, Make, n8n, and vibe coding.",
      sortOrder: 2,
      published: true,
    },
  });

  const curso11Lecciones = [
    { title: "Qué es la automatización", titleEn: "What is Automation", slug: "aut-1" },
    { title: "Zapier + IA: tu primer flujo", titleEn: "Zapier + AI: Your First Flow", slug: "aut-2" },
    { title: "Make/n8n: alternativas potentes", titleEn: "Make/n8n: Powerful Alternatives", slug: "aut-3" },
    { title: "Automatizar emails y respuestas", titleEn: "Automating Emails and Responses", slug: "aut-4" },
    { title: "Automatizar resúmenes y reportes", titleEn: "Automating Summaries and Reports", slug: "aut-5" },
    { title: "Vibe coding: describir apps en español", titleEn: "Vibe Coding: Describing Apps in Spanish", slug: "aut-6" },
    { title: "Quiz: Automatización con IA", titleEn: "Quiz: Automation with AI", slug: "aut-7" },
  ];

  for (let i = 0; i < curso11Lecciones.length; i++) {
    const l = curso11Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso11.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso11.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

  // ============================================================
  // Level 4 Avanzado — Course 12: Introducción a las APIs de IA
  // ============================================================

  const curso12 = await prisma.course.upsert({
    where: { slug: "apis-ia" },
    update: { titleEn: "Introduction to AI APIs", descriptionEn: "Understand what APIs are, how to use them, and how to embed AI in your projects." },
    create: {
      levelId: levelAvanzado.id,
      title: "Introducción a las APIs de IA",
      titleEn: "Introduction to AI APIs",
      slug: "apis-ia",
      description: "Entiende qué son las APIs, cómo usarlas y cómo embeber IA en tus proyectos.",
      descriptionEn: "Understand what APIs are, how to use them, and how to embed AI in your projects.",
      sortOrder: 3,
      published: true,
    },
  });

  const curso12Lecciones = [
    { title: "Qué es una API (explicado simple)", titleEn: "What is an API (Simply Explained)", slug: "api-1" },
    { title: "API Keys: qué son y cómo protegerlas", titleEn: "API Keys: What They Are and How to Protect Them", slug: "api-2" },
    { title: "Tu primera llamada a la API de Gemini", titleEn: "Your First Gemini API Call", slug: "api-3" },
    { title: "API de Groq para respuestas rápidas", titleEn: "Groq API for Fast Responses", slug: "api-4" },
    { title: "Costos: cuánto cuesta usar APIs", titleEn: "Costs: How Much Does Using APIs Cost", slug: "api-5" },
    { title: "Embeber un chatbot en una web", titleEn: "Embed a Chatbot in a Website", slug: "api-6" },
    { title: "Quiz: APIs de IA", titleEn: "Quiz: AI APIs", slug: "api-7" },
  ];

  for (let i = 0; i < curso12Lecciones.length; i++) {
    const l = curso12Lecciones[i];
    await prisma.lesson.upsert({
      where: { courseId_slug: { courseId: curso12.id, slug: l.slug } },
      update: { titleEn: l.titleEn },
      create: {
        courseId: curso12.id,
        title: l.title,
        titleEn: l.titleEn,
        slug: l.slug,
        sortOrder: i + 1,
        published: true,
      },
    });
  }

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
    { title: "Python básico para IA", titleEn: "Basic Python for AI", slug: "prog-1" },
    { title: "Variables, listas y funciones", titleEn: "Variables, Lists, and Functions", slug: "prog-2" },
    { title: "Tu primera app con Streamlit", titleEn: "Your First Streamlit App", slug: "prog-3" },
    { title: "Conectar Python a ChatGPT/Claude", titleEn: "Connect Python to ChatGPT/Claude", slug: "prog-4" },
    { title: "Procesamiento de texto con Python", titleEn: "Text Processing with Python", slug: "prog-5" },
    { title: "Leer y procesar archivos CSV/Excel", titleEn: "Read and Process CSV/Excel Files", slug: "prog-6" },
    { title: "Web scraping básico con IA", titleEn: "Basic Web Scraping with AI", slug: "prog-7" },
    { title: "Git y GitHub para tus proyectos", titleEn: "Git and GitHub for Your Projects", slug: "prog-8" },
    { title: "Deploy: publicar tu app gratis", titleEn: "Deploy: Publish Your App for Free", slug: "prog-9" },
    { title: "Proyecto final: app completa", titleEn: "Final Project: Complete App", slug: "prog-10" },
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
    { title: "Qué es RAG y por qué revolucionó la IA", titleEn: "What is RAG and Why It Revolutionized AI", slug: "rag-1" },
    { title: "Pipeline: documento → embeddings → búsqueda", titleEn: "Pipeline: Document → Embeddings → Search", slug: "rag-2" },
    { title: "Implementar RAG con LangChain", titleEn: "Implement RAG with LangChain", slug: "rag-3" },
    { title: "RAG sobre tus propios PDFs", titleEn: "RAG on Your Own PDFs", slug: "rag-4" },
    { title: "Optimizar calidad de respuestas", titleEn: "Optimize Response Quality", slug: "rag-5" },
    { title: "Evaluaciones y métricas de RAG", titleEn: "RAG Evaluations and Metrics", slug: "rag-6" },
    { title: "Proyecto: buscador inteligente", titleEn: "Project: Intelligent Search Engine", slug: "rag-7" },
    { title: "Quiz: RAG y búsqueda inteligente", titleEn: "Quiz: RAG and Intelligent Search", slug: "rag-8" },
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
    { title: "Qué son los agentes de IA", titleEn: "What Are AI Agents", slug: "ag-1" },
    { title: "Tool use y function calling", titleEn: "Tool Use and Function Calling", slug: "ag-2" },
    { title: "MCP (Model Context Protocol)", titleEn: "MCP (Model Context Protocol)", slug: "ag-3" },
    { title: "Construir un agente paso a paso", titleEn: "Build an Agent Step by Step", slug: "ag-4" },
    { title: "Deployment en Vercel/HuggingFace", titleEn: "Deployment on Vercel/HuggingFace", slug: "ag-5" },
    { title: "Costos y optimización de latencia", titleEn: "Costs and Latency Optimization", slug: "ag-6" },
    { title: "Seguridad: prompt injection y jailbreaks", titleEn: "Security: Prompt Injection and Jailbreaks", slug: "ag-7" },
    { title: "Quiz: Agentes de IA y deployment", titleEn: "Quiz: AI Agents and Deployment", slug: "ag-8" },
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
  console.log(`    Course 4: ${curso4.title} — 8 lessons`);
  console.log(`    Course 5: ${curso5.title} — 7 lessons`);
  console.log(`    Course 6: ${curso6.title} — 7 lessons`);
  console.log(`  Level 3: ${levelIntermedio.name} (${levelIntermedio.id})`);
  console.log(`    Course 7: ${curso7.title} — 8 lessons`);
  console.log(`    Course 8: ${curso8.title} — 6 lessons`);
  console.log(`    Course 9: ${curso9.title} — 7 lessons`);
  console.log(`  Level 4: ${levelAvanzado.name} (${levelAvanzado.id})`);
  console.log(`    Course 10: ${curso10.title} — 8 lessons`);
  console.log(`    Course 11: ${curso11.title} — 7 lessons`);
  console.log(`    Course 12: ${curso12.title} — 7 lessons`);
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
