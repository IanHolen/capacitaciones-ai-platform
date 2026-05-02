import { NextResponse } from "next/server";
import { cursos } from "@/lib/cursos-data";

// Synonym groups — words that should match each other
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
  ["miedo", "miedos", "fear", "fears", "preocupación"],
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

// Build a lookup: word → set of synonyms
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
    .replace(/[\u0300-\u036f]/g, "") // strip accents
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

  // Also check for multi-word synonym matches (e.g., "chat gpt", "context window")
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
      // Direct keyword hit
      const isOriginal = originalKeywords.includes(kw);
      score += isOriginal ? 3 : 1; // Original keywords score higher than synonyms

      // Extract snippet around the match
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
  if (keywords.length === 0) {
    return NextResponse.json({ results: [] });
  }

  const expandedKeywords = expandWithSynonyms(keywords);
  const results: SearchResult[] = [];

  for (const curso of cursos) {
    let totalScore = 0;
    let bestSnippet = "";

    // Score course title (high weight)
    const titleMatch = scoreMatch(curso.titulo, expandedKeywords, keywords);
    totalScore += titleMatch.score * 5;
    if (titleMatch.snippet && !bestSnippet) bestSnippet = titleMatch.snippet;

    // Score course description (medium weight)
    const descMatch = scoreMatch(curso.descripcion, expandedKeywords, keywords);
    totalScore += descMatch.score * 3;
    if (descMatch.snippet && !bestSnippet) bestSnippet = descMatch.snippet;

    // Score lesson titles and content (lower weight each, but cumulative)
    for (const leccion of curso.lecciones) {
      const lessonTitleMatch = scoreMatch(leccion.titulo, expandedKeywords, keywords);
      totalScore += lessonTitleMatch.score * 2;

      const lessonDescMatch = scoreMatch(leccion.descripcion, expandedKeywords, keywords);
      totalScore += lessonDescMatch.score;

      // Search within lesson content (first 500 chars for performance)
      const contentPreview = leccion.contenido.substring(0, 500);
      const contentMatch = scoreMatch(contentPreview, expandedKeywords, keywords);
      totalScore += contentMatch.score;

      // Keep best snippet from lessons if we don't have one yet
      if (!bestSnippet) {
        bestSnippet = lessonTitleMatch.snippet || lessonDescMatch.snippet || contentMatch.snippet;
      }
    }

    if (totalScore > 0) {
      results.push({
        courseId: curso.id,
        title: curso.titulo,
        description: curso.descripcion,
        relevanceSnippet: bestSnippet || curso.descripcion.substring(0, 100) + "...",
        matchScore: totalScore,
      });
    }
  }

  // Sort by score descending, limit to 5
  results.sort((a, b) => b.matchScore - a.matchScore);
  const topResults = results.slice(0, 5);

  return NextResponse.json({ results: topResults });
}
