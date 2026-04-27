import { chatStream } from "@/lib/llm-client";
import { cursos } from "@/lib/cursos-data";
import { NextResponse } from "next/server";

function getLessonContext(lessonId: string): string {
  for (const curso of cursos) {
    const leccion = curso.lecciones.find((l) => l.id === lessonId);
    if (leccion) {
      return `El alumno está en la lección "${leccion.titulo}" del curso "${curso.titulo}" (nivel: ${curso.nivel}). Contexto de la lección: ${leccion.descripcion}`;
    }
  }
  return "El alumno está explorando la plataforma de cursos de IA.";
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: "El tutor no está configurado. Falta la API key de Groq." },
      { status: 503 }
    );
  }

  const { message, lessonId } = await request.json();

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: "message is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (message.length > 2000) {
    return new Response(
      JSON.stringify({ error: "message too long (max 2000 characters)" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const lessonContext = lessonId ? getLessonContext(lessonId) : "";

  const systemPrompt = `Eres un tutor amigable que ayuda a estudiantes a entender la Inteligencia Artificial. Responde en español latinoamericano, con tono cálido y sin tecnicismos innecesarios. Usa analogías y ejemplos de la vida cotidiana. Si no sabes algo, dilo honestamente. Tus respuestas deben ser claras, concisas (máximo 4 párrafos) y motivadoras.

${lessonContext}

Reglas:
- Nunca inventes datos estadísticos específicos
- Si te piden algo fuera del tema educativo, redirige amablemente al tema de la lección
- Felicita al alumno cuando haga buenas preguntas
- Si el alumno parece confundido, ofrece explicar de otra forma`;

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const chunks = chatStream("tutor", [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ]);

        for await (const chunk of chunks) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
      } catch {
        controller.enqueue(
          new TextEncoder().encode(
            "\n[Disculpa, hubo un error. ¿Podés intentar de nuevo?]"
          )
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
