"use client";

import { Volume2 } from "lucide-react";

interface TextToSpeechProps {
  audioUrl?: string;
}

export function TextToSpeech({ audioUrl }: TextToSpeechProps) {
  if (!audioUrl) return null;

  return (
    <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-[#EFF6FF] p-5">
      <div className="mb-3 flex items-center gap-3">
        <Volume2
          className="size-7 shrink-0 text-[#1E40AF]"
          aria-hidden="true"
        />
        <div>
          <div className="text-lg font-bold text-[#1E40AF]">
            Escuchá esta lección en audio
          </div>
          <div className="text-sm text-[#1E40AF]/70">
            Ideal para aprender mientras hacés otras cosas
          </div>
        </div>
      </div>
      <audio controls preload="none" className="w-full" src={audioUrl}>
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
}
