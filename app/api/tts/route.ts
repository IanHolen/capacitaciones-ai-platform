import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: "TTS no configurado. Falta GROQ_API_KEY." },
      { status: 503 }
    );
  }

  // Optional auth check — allow unauthenticated for now
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { text, lang } = await request.json();

  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return NextResponse.json(
      { error: "text is required" },
      { status: 400 }
    );
  }

  if (text.length > 4096) {
    return NextResponse.json(
      { error: "text too long (max 4096 characters)" },
      { status: 400 }
    );
  }

  try {
    const response = await groq.audio.speech.create({
      model: "playai-tts",
      voice: lang === "en" ? "Arista-PlayAI" : "Lucia-PlayAI",
      input: text,
      response_format: "mp3",
    });

    const audioBuffer = Buffer.from(await response.arrayBuffer());

    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "TTS error";
    console.error("[tts] Error:", message);
    return NextResponse.json(
      { error: `Error generando audio: ${message}` },
      { status: 500 }
    );
  }
}
