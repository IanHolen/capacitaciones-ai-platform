import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { execFile } from "child_process";
import { promisify } from "util";
import { readFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { tmpdir } from "os";

const execFileAsync = promisify(execFile);

const VOICES = {
  es: "es-MX-DaliaNeural",
  en: "en-US-JennyNeural",
} as const;

export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { text, lang = "es" } = await request.json();

  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  if (text.length > 4096) {
    return NextResponse.json(
      { error: "text too long (max 4096 characters)" },
      { status: 400 }
    );
  }

  const voice = VOICES[lang as keyof typeof VOICES] ?? VOICES.es;
  const outputFile = join(tmpdir(), `tts-${randomUUID()}.mp3`);

  try {
    await execFileAsync("edge-tts", [
      "--voice", voice,
      "--rate", "-8%",
      "--text", text.trim(),
      "--write-media", outputFile,
    ], { timeout: 30000 });

    const audioBuffer = await readFile(outputFile);
    await unlink(outputFile).catch(() => {});

    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    await unlink(outputFile).catch(() => {});
    const message = err instanceof Error ? err.message : "TTS error";
    console.error("[tts] edge-tts error:", message);
    return NextResponse.json(
      { error: `Error generando audio: ${message}` },
      { status: 500 }
    );
  }
}
