import OpenAI from "openai";

type UseCase = "exercise" | "tutor";

interface LLMProvider {
  client: OpenAI;
  model: string;
  dailyLimit: number;
}

const providers: Record<UseCase, LLMProvider> = {
  exercise: {
    client: new OpenAI({
      apiKey: process.env.GEMINI_API_KEY,
      baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    }),
    model: "gemini-2.0-flash",
    dailyLimit: 1000,
  },
  tutor: {
    client: new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    }),
    model: "llama-3.1-8b-instant",
    dailyLimit: 14400,
  },
};

async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3
): Promise<T> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      const status =
        error instanceof OpenAI.APIError ? error.status : undefined;
      if (status === 429 && attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 16000);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function chat(
  useCase: UseCase,
  messages: ChatMessage[]
): Promise<string> {
  const { client, model } = providers[useCase];

  const response = await withRetry(() =>
    client.chat.completions.create({ model, messages })
  );

  return response.choices[0]?.message?.content ?? "";
}

export async function* chatStream(
  useCase: UseCase,
  messages: ChatMessage[]
): AsyncGenerator<string> {
  const { client, model } = providers[useCase];

  const stream = await withRetry(() =>
    client.chat.completions.create({ model, messages, stream: true })
  );

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) yield content;
  }
}
