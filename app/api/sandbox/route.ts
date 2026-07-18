import { chatStream, hasLLMProvider } from "@/lib/llm-client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  if (!hasLLMProvider()) {
    return NextResponse.json(
      { error: "El sandbox no está configurado. Falta una API key (GEMINI o GROQ)." },
      { status: 503 }
    );
  }

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Max 10 requests per minute." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  const { prompt, lang } = await request.json();
  const userLang = lang === 'en' ? 'en' : 'es';

  if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: "prompt is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (prompt.length > 4000) {
    return new Response(
      JSON.stringify({ error: "prompt too long (max 4000 characters)" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const systemContent = userLang === 'en'
    ? "You are an educational AI assistant. Always respond in English in a clear and concise manner. If the user asks for something inappropriate, politely decline."
    : "Eres un asistente de IA educativo. Responde siempre en español latinoamericano de forma clara y concisa. Si el usuario pide algo inapropiado, rechaza educadamente.";

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const chunks = chatStream("tutor", [
          {
            role: "system",
            content: systemContent,
          },
          { role: "user", content: prompt },
        ]);

        for await (const chunk of chunks) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Error desconocido";
        console.error("[sandbox] LLM error:", message);
        controller.enqueue(
          new TextEncoder().encode(`\n[Error: ${message}]`)
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
    },
  });
}
