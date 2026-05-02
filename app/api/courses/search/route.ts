import { NextResponse } from "next/server";
import { cursos } from "@/lib/cursos-data";
import { chat } from "@/lib/llm-client";

// ── Per-course semantic tags ────────────────────────────────────────────────
// These cover concepts, use cases, and common user questions that map to each course.
const COURSE_TAGS: Record<string, string[]> = {
  "que-es-ia": [
    "que es ia", "inteligencia artificial", "como funciona", "machine learning",
    "redes neuronales", "historia ia", "tipos de ia", "para que sirve",
    "explicar ia", "entender ia", "principiante", "empezar", "basico",
    "no se nada", "nunca use ia", "curiosidad", "ia explicada",
  ],
  "primera-conversacion-ia": [
    "chatgpt", "claude", "gemini", "primera vez", "como usar",
    "crear cuenta", "registrarse", "gratis", "preguntar", "conversar",
    "empezar a usar", "tutorial", "paso a paso", "correos", "recetas",
    "resumir", "traducir", "viaje", "practicar", "ejercicio",
    "como hablar con ia", "que preguntar", "alucinaciones",
  ],
  "ia-sin-miedo": [
    "miedo", "trabajo", "empleo", "reemplazar", "quitar trabajo",
    "privacidad", "seguridad", "datos personales", "peligro", "riesgo",
    "etica", "confianza", "alucinacion", "error", "equivoca",
    "proteger", "preocupacion", "temor", "ansiedad", "plan personal",
    "por donde empezar", "no se si usar ia",
  ],
  "domina-chatgpt-claude-gemini": [
    "chatgpt vs claude", "cual es mejor", "diferencias", "comparar",
    "interfaz", "funciones", "perplexity", "voz", "movil", "celular",
    "app", "cuando usar cual", "herramienta", "bard",
  ],
  "prompts-efectivos": [
    "prompt", "escribir prompts", "mejorar respuestas", "contexto",
    "especifico", "formula", "rol tarea contexto formato", "iterar",
    "corregir", "plantilla", "template", "como preguntar mejor",
    "respuestas genericas", "respuestas malas",
  ],
  "ia-vida-cotidiana": [
    "email", "correo", "cocinar", "receta", "viaje", "itinerario",
    "tarea escolar", "estudiar", "resumir", "documento", "traducir",
    "idioma", "presupuesto", "vida diaria", "cotidiano", "practico",
    "uso personal", "dia a dia",
  ],
  "prompt-engineering": [
    "prompt engineering", "few-shot", "chain of thought", "rol",
    "persona", "xml", "markdown", "json", "system prompt",
    "tecnicas avanzadas", "profesional", "iteracion", "refinamiento",
  ],
  "documentos-imagenes": [
    "pdf", "documento", "imagen", "foto", "tabla", "factura",
    "analizar", "subir archivo", "vision", "ocr", "extraer datos",
    "excel", "csv", "multiples archivos",
  ],
  "flujos-trabajo-ia": [
    "flujo", "workflow", "prompt chaining", "memoria", "proyecto",
    "token", "ventana de contexto", "biblioteca", "organizar prompts",
    "evaluar", "proceso", "pipeline",
  ],
  "asistente-ia-propio": [
    "custom gpt", "asistente", "personalizar", "crear bot",
    "base de conocimiento", "rag basico", "compartir", "publicar",
    "mi propio chatbot", "configurar ia",
  ],
  "automatiza-con-ia": [
    "automatizar", "automatizacion", "zapier", "make", "n8n",
    "flujo automatizado", "email automatico", "reporte",
    "vibe coding", "crear app", "sin programar", "negocio",
    "productividad", "eficiencia", "repetitivo",
  ],
  "apis-ia": [
    "api", "api key", "llamada api", "gemini api", "groq",
    "costo", "precio", "token", "chatbot web", "integrar",
    "embeber", "programar", "desarrollo",
  ],
  "programacion-con-ia": [
    "python", "programar", "codigo", "streamlit", "app",
    "nlp", "csv", "pandas", "scraping", "git", "github",
    "deploy", "vercel", "huggingface", "primera app",
    "aprender a programar", "desde cero",
  ],
  "rag-busqueda-inteligente": [
    "rag", "retrieval", "embeddings", "vector", "langchain",
    "busqueda semantica", "base de datos vectorial", "chunks",
    "buscar en documentos", "busqueda inteligente",
  ],
  "agentes-ia-deployment": [
    "agente", "autonomo", "tool use", "function calling", "mcp",
    "model context protocol", "deploy", "produccion", "latencia",
    "costo", "seguridad", "prompt injection", "jailbreak",
    "multi herramienta",
  ],
};

// ── Synonym groups ──────────────────────────────────────────────────────────
const SYNONYM_GROUPS: string[][] = [
  ["chatgpt", "chat gpt", "openai", "gpt"],
  ["claude", "anthropic"],
  ["gemini", "google ai", "bard"],
  ["ia", "inteligencia artificial", "ai", "artificial intelligence"],
  ["prompt", "prompts", "prompting", "preguntar", "pregunta"],
  ["automatizar", "automatización", "automatiza", "automate", "automation", "zapier", "make", "n8n"],
  ["programar", "programación", "código", "code", "coding", "python", "programacion"],
  ["api", "apis", "endpoint", "endpoints"],
  ["imagen", "imágenes", "imagenes", "fotos", "photo", "image", "images", "vision"],
  ["documento", "documentos", "pdf", "pdfs", "archivo", "archivos", "document", "documents"],
  ["rag", "retrieval", "búsqueda", "busqueda", "search"],
  ["agente", "agentes", "agent", "agents", "autonomo", "autónomo"],
  ["mcp", "model context protocol", "herramientas", "tools", "tool use"],
  ["deploy", "deployment", "desplegar", "publicar", "vercel", "huggingface"],
  ["quiz", "quizzes", "examen", "test", "evaluación", "evaluacion"],
  ["correo", "email", "emails", "correos", "mail"],
  ["receta", "recetas", "cocinar", "cocina", "recipe", "cook"],
  ["viaje", "viajes", "itinerario", "travel", "trip"],
  ["seguridad", "privacidad", "security", "privacy", "injection"],
  ["trabajo", "empleo", "job", "work", "profesional"],
  ["miedo", "miedos", "fear", "fears", "preocupación", "preocupacion"],
  ["voz", "audio", "vos", "voice", "hablar", "speak"],
  ["video", "videos", "youtube"],
  ["embedding", "embeddings", "vectores", "vector", "vectorial"],
  ["resumen", "resumir", "summary", "summarize", "resumenes"],
  ["traducir", "traducción", "traduccion", "translate", "translation"],
  ["negocio", "negocios", "empresa", "business", "company"],
  ["principiante", "básico", "basico", "beginner", "intro", "introducción", "introduccion", "empezar", "comenzar", "start"],
  ["avanzado", "experto", "pro", "advanced", "expert"],
  ["flujo", "flujos", "workflow", "workflows", "pipeline"],
  ["memoria", "historial", "contexto", "memory", "context"],
  ["token", "tokens", "ventana de contexto", "context window"],
];

// Build synonym lookup
const synonymMap = new Map<string, Set<string>>();
for (const group of SYNONYM_GROUPS) {
  const groupSet = new Set(group);
  for (const word of group) {
    const existing = synonymMap.get(word);
    if (existing) {
      for (const w of group) existing.add(w);
    } else {
      synonymMap.set(word, new Set(groupSet));
    }
  }
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractKeywords(query: string): string[] {
  const normalized = normalize(query);
  const stopWords = new Set([
    "como", "que", "es", "el", "la", "los", "las", "un", "una", "de", "del",
    "en", "con", "para", "por", "al", "se", "no", "si", "yo", "mi", "me",
    "te", "tu", "su", "nos", "les", "lo", "le", "hay", "son", "ser", "a",
    "y", "o", "e", "u", "mas", "pero", "sin", "sobre", "este", "esta",
    "esto", "eso", "ese", "esa", "muy", "tan", "que", "como", "donde",
    "cuando", "porque", "puede", "puedo", "quiero", "necesito", "busco",
    "how", "what", "is", "the", "a", "an", "to", "and", "or", "in", "on",
    "for", "with", "from", "about", "can", "i", "my", "do", "does",
    "want", "need", "learn", "use", "using",
  ]);

  const words = normalized.split(" ").filter((w) => w.length > 1 && !stopWords.has(w));

  // Check for multi-word synonym matches
  const multiWordMatches: string[] = [];
  for (const group of SYNONYM_GROUPS) {
    for (const term of group) {
      if (term.includes(" ") && normalized.includes(term)) {
        multiWordMatches.push(term);
      }
    }
  }

  return [...new Set([...words, ...multiWordMatches])];
}

function expandWithSynonyms(keywords: string[]): Set<string> {
  const expanded = new Set<string>();
  for (const kw of keywords) {
    expanded.add(kw);
    const syns = synonymMap.get(kw);
    if (syns) {
      for (const s of syns) expanded.add(s);
    }
  }
  return expanded;
}

function scoreMatch(text: string, expandedKeywords: Set<string>, originalKeywords: string[]): { score: number; snippet: string } {
  const normalizedText = normalize(text);
  let score = 0;
  let bestSnippet = "";
  let bestSnippetScore = 0;

  for (const kw of expandedKeywords) {
    if (normalizedText.includes(kw)) {
      const isOriginal = originalKeywords.includes(kw);
      score += isOriginal ? 3 : 1;

      const idx = normalizedText.indexOf(kw);
      const start = Math.max(0, idx - 40);
      const end = Math.min(text.length, idx + kw.length + 60);
      const snippetScore = isOriginal ? 3 : 1;
      if (snippetScore > bestSnippetScore) {
        bestSnippetScore = snippetScore;
        bestSnippet = text.substring(start, end).replace(/\n/g, " ").trim();
        if (start > 0) bestSnippet = "..." + bestSnippet;
        if (end < text.length) bestSnippet = bestSnippet + "...";
      }
    }
  }

  return { score, snippet: bestSnippet };
}

// Score course semantic tags against expanded keywords
function scoreCourseTags(courseId: string, expandedKeywords: Set<string>, originalKeywords: string[]): number {
  const tags = COURSE_TAGS[courseId];
  if (!tags) return 0;

  let score = 0;
  for (const tag of tags) {
    const normalizedTag = normalize(tag);
    for (const kw of expandedKeywords) {
      if (normalizedTag.includes(kw) || kw.includes(normalizedTag)) {
        const isOriginal = originalKeywords.includes(kw);
        score += isOriginal ? 4 : 2;
      }
    }
  }
  return score;
}

// ── LLM semantic search (Gemini Flash) ──────────────────────────────────────
// Used as a fallback/supplement when keyword matching is weak.
const COURSE_CATALOG = cursos.map((c) => `- ${c.id}: ${c.titulo} — ${c.descripcion}`).join("\n");

async function semanticSearch(query: string): Promise<{ courseId: string; score: number; reason: string }[]> {
  const prompt = `You are a search engine for an AI education platform. Given a user's search query, return the most relevant courses from this catalog:

${COURSE_CATALOG}

User query: "${query}"

Return a JSON array of the top 3-5 most relevant courses. Each item should have:
- "courseId": the course id
- "score": relevance score from 1-10 (10 = perfect match)
- "reason": one short sentence explaining why this course matches (in the same language as the query)

Only include courses with score >= 4. Return ONLY the JSON array, no other text.`;

  try {
    const response = await chat("exercise", [
      { role: "user", content: prompt },
    ]);

    // Parse the JSON response
    const cleaned = response.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const results = JSON.parse(cleaned);

    if (!Array.isArray(results)) return [];
    return results
      .filter((r: { courseId?: string; score?: number }) =>
        r.courseId && typeof r.score === "number" && cursos.some((c) => c.id === r.courseId)
      )
      .map((r: { courseId: string; score: number; reason?: string }) => ({
        courseId: r.courseId,
        score: r.score,
        reason: r.reason ?? "",
      }));
  } catch {
    return [];
  }
}

// ── Detect if query looks like a natural language question ──────────────────
function isNaturalLanguageQuery(query: string): boolean {
  const normalized = normalize(query);
  const questionWords = ["como", "que", "cual", "por que", "donde", "cuando", "puedo", "quiero", "necesito", "tengo", "hay", "deberia", "how", "what", "which", "where", "can", "should", "want"];
  return normalized.split(" ").length >= 3 || questionWords.some((w) => normalized.startsWith(w) || normalized.includes(` ${w} `));
}

interface SearchResult {
  courseId: string;
  title: string;
  description: string;
  relevanceSnippet: string;
  matchScore: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [] });
  }

  if (query.length > 200) {
    return NextResponse.json({ error: "Query too long" }, { status: 400 });
  }

  const keywords = extractKeywords(query);
  const expandedKeywords = keywords.length > 0 ? expandWithSynonyms(keywords) : new Set<string>();

  // ── Keyword matching (fast path) ──────────────────────────────────────────
  const keywordResults = new Map<string, { score: number; snippet: string }>();

  for (const curso of cursos) {
    let totalScore = 0;
    let bestSnippet = "";

    // Score course tags (highest weight for semantic matching)
    totalScore += scoreCourseTags(curso.id, expandedKeywords, keywords);

    // Score course title
    const titleMatch = scoreMatch(curso.titulo, expandedKeywords, keywords);
    totalScore += titleMatch.score * 5;
    if (titleMatch.snippet && !bestSnippet) bestSnippet = titleMatch.snippet;

    // Score course description
    const descMatch = scoreMatch(curso.descripcion, expandedKeywords, keywords);
    totalScore += descMatch.score * 3;
    if (descMatch.snippet && !bestSnippet) bestSnippet = descMatch.snippet;

    // Score lesson titles and content
    for (const leccion of curso.lecciones) {
      const lessonTitleMatch = scoreMatch(leccion.titulo, expandedKeywords, keywords);
      totalScore += lessonTitleMatch.score * 2;

      const lessonDescMatch = scoreMatch(leccion.descripcion, expandedKeywords, keywords);
      totalScore += lessonDescMatch.score;

      const contentPreview = leccion.contenido.substring(0, 500);
      const contentMatch = scoreMatch(contentPreview, expandedKeywords, keywords);
      totalScore += contentMatch.score;

      if (!bestSnippet) {
        bestSnippet = lessonTitleMatch.snippet || lessonDescMatch.snippet || contentMatch.snippet;
      }
    }

    if (totalScore > 0) {
      keywordResults.set(curso.id, {
        score: totalScore,
        snippet: bestSnippet || curso.descripcion.substring(0, 100) + "...",
      });
    }
  }

  // ── Decide if LLM semantic search is needed ───────────────────────────────
  const topKeywordScore = Math.max(0, ...[...keywordResults.values()].map((r) => r.score));
  const useSemanticSearch = isNaturalLanguageQuery(query) || topKeywordScore < 5;

  // Run semantic search in parallel (non-blocking) if needed
  let semanticResults: { courseId: string; score: number; reason: string }[] = [];
  if (useSemanticSearch) {
    semanticResults = await semanticSearch(query);
  }

  // ── Merge results ─────────────────────────────────────────────────────────
  const mergedScores = new Map<string, { score: number; snippet: string }>();

  // Add keyword results
  for (const [courseId, data] of keywordResults) {
    mergedScores.set(courseId, { ...data });
  }

  // Blend in semantic results
  for (const sr of semanticResults) {
    const existing = mergedScores.get(sr.courseId);
    const semanticBonus = sr.score * 3; // Scale LLM scores (1-10) to be comparable
    if (existing) {
      existing.score += semanticBonus;
      // Use the LLM reason as snippet if it's more informative
      if (sr.reason && sr.reason.length > existing.snippet.length) {
        existing.snippet = sr.reason;
      }
    } else {
      const curso = cursos.find((c) => c.id === sr.courseId);
      mergedScores.set(sr.courseId, {
        score: semanticBonus,
        snippet: sr.reason || curso?.descripcion.substring(0, 100) + "..." || "",
      });
    }
  }

  // Build final results
  const results: SearchResult[] = [];
  for (const [courseId, data] of mergedScores) {
    const curso = cursos.find((c) => c.id === courseId);
    if (!curso) continue;
    results.push({
      courseId: curso.id,
      title: curso.titulo,
      description: curso.descripcion,
      relevanceSnippet: data.snippet,
      matchScore: data.score,
    });
  }

  results.sort((a, b) => b.matchScore - a.matchScore);
  const topResults = results.slice(0, 5);

  return NextResponse.json({ results: topResults });
}
