import OpenAI from "openai";

// ============================================================
// Cliente LLM con FALLBACK entre proveedores.
// Orden: Gemini (primario, más estable) -> Groq (respaldo).
// Si un proveedor falla (rate limit, caída, timeout), se intenta
// el siguiente automáticamente. Con que UNA de las dos API keys
// esté configurada, la app funciona.
// ============================================================

type UseCase = "exercise" | "tutor";

interface LLMProvider {
  name: string;
  client: OpenAI;
  model: string;
}

function getProviders(): LLMProvider[] {
  const providers: LLMProvider[] = [];

  if (process.env.GEMINI_API_KEY) {
    providers.push({
      name: "gemini",
      client: new OpenAI({
        apiKey: process.env.GEMINI_API_KEY,
        baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
        timeout: 25_000,
        maxRetries: 0, // los reintentos los manejamos nosotros
      }),
      model: "gemini-2.0-flash",
    });
  }

  if (process.env.GROQ_API_KEY) {
    providers.push({
      name: "groq",
      client: new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
        timeout: 25_000,
        maxRetries: 0,
      }),
      model: "llama-3.1-8b-instant",
    });
  }

  return providers;
}

export function hasLLMProvider(): boolean {
  return Boolean(process.env.GEMINI_API_KEY || process.env.GROQ_API_KEY);
}

function isRetryable(error: unknown): boolean {
  if (error instanceof OpenAI.APIError) {
    const status = error.status;
    return status === 429 || (status != null && status >= 500);
  }
  // Errores de red / timeout — vale la pena reintentar o hacer fallback
  return true;
}

async function withRetry<T>(fn: () => Promise<T>, maxRetries = 1): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error;
      if (!isRetryable(error) || attempt === maxRetries) throw error;
      const delay = Math.min(1000 * Math.pow(2, attempt), 4000);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

/**
 * Respuesta completa (no streaming). Intenta cada proveedor en orden.
 */
export async function chat(
  _useCase: UseCase,
  messages: ChatMessage[]
): Promise<string> {
  const providers = getProviders();
  if (providers.length === 0) {
    throw new Error("No hay proveedores LLM configurados (GEMINI_API_KEY o GROQ_API_KEY)");
  }

  let lastError: unknown;
  for (const provider of providers) {
    try {
      const response = await withRetry(() =>
        provider.client.chat.completions.create({
          model: provider.model,
          messages,
        })
      );
      return response.choices[0]?.message?.content ?? "";
    } catch (error) {
      lastError = error;
      const msg = error instanceof Error ? error.message : String(error);
      console.warn(`[llm] ${provider.name} falló, probando siguiente proveedor:`, msg);
    }
  }
  throw lastError ?? new Error("Todos los proveedores LLM fallaron");
}

/**
 * Respuesta en streaming. Intenta cada proveedor en orden.
 * Si un proveedor falla ANTES de emitir contenido, se hace fallback al
 * siguiente. Si falla a media transmisión, se corta (para no duplicar texto).
 */
export async function* chatStream(
  _useCase: UseCase,
  messages: ChatMessage[]
): AsyncGenerator<string> {
  const providers = getProviders();
  if (providers.length === 0) {
    throw new Error("No hay proveedores LLM configurados (GEMINI_API_KEY o GROQ_API_KEY)");
  }

  let lastError: unknown;
  for (const provider of providers) {
    let yieldedAny = false;
    try {
      const stream = await withRetry(() =>
        provider.client.chat.completions.create({
          model: provider.model,
          messages,
          stream: true,
        })
      );

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          yieldedAny = true;
          yield content;
        }
      }
      return; // stream terminó bien
    } catch (error) {
      lastError = error;
      const msg = error instanceof Error ? error.message : String(error);
      if (yieldedAny) {
        // Ya se envió texto al usuario — no hacer fallback (duplicaría contenido)
        console.error(`[llm] ${provider.name} falló a media transmisión:`, msg);
        throw error;
      }
      console.warn(`[llm] ${provider.name} falló, probando siguiente proveedor:`, msg);
    }
  }
  throw lastError ?? new Error("Todos los proveedores LLM fallaron");
}
