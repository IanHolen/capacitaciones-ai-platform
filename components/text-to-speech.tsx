"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";

interface TextToSpeechProps {
  text: string;
}

function findBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const esVoices = voices.filter((v) => v.lang.startsWith("es"));
  // Prefer Google voices (most natural)
  const googleVoice = esVoices.find((v) => v.name.includes("Google"));
  if (googleVoice) return googleVoice;
  // Then Natural/Enhanced voices
  const naturalVoice = esVoices.find(
    (v) => v.name.includes("Natural") || v.name.includes("Enhanced"),
  );
  if (naturalVoice) return naturalVoice;
  // Then any es-MX
  const mxVoice = esVoices.find((v) => v.lang.startsWith("es-MX"));
  if (mxVoice) return mxVoice;
  // Fallback to any Spanish
  return esVoices[0];
}

export function TextToSpeech({ text }: TextToSpeechProps) {
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(0.9);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Clean markdown to plain text for speech
  const plainText = text
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\|[^|]*\|/g, "")
    .replace(/---+/g, "")
    .replace(/>/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ")
    .trim();

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      setPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.lang = "es-MX";
    utterance.rate = speed;
    utterance.pitch = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const bestVoice = findBestVoice(voices);
    if (bestVoice) utterance.voice = bestVoice;

    utterance.onend = () => {
      setPlaying(false);
      setPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setPlaying(true);
    setPaused(false);
  }, [plainText, speed, paused]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    setPaused(true);
    setPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  }, []);

  const handleSpeedChange = useCallback(
    (newSpeed: number) => {
      setSpeed(newSpeed);
      if (playing || paused) {
        window.speechSynthesis.cancel();
        setPlaying(false);
        setPaused(false);
      }
    },
    [playing, paused],
  );

  if (!mounted || typeof window === "undefined" || !("speechSynthesis" in window)) {
    // Placeholder while loading
    return (
      <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-[#EFF6FF] p-5">
        <div className="flex items-center gap-3">
          <Volume2 className="size-7 shrink-0 text-[#1E40AF]" aria-hidden="true" />
          <div className="text-lg font-bold text-[#1E40AF]">Cargando audio...</div>
        </div>
      </div>
    );
  }

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

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          {playing ? (
            <button
              onClick={handlePause}
              className="flex size-12 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md"
              aria-label="Pausar"
            >
              <Pause className="size-6" />
            </button>
          ) : (
            <button
              onClick={handlePlay}
              className="flex size-12 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md"
              aria-label={paused ? "Continuar" : "Reproducir"}
            >
              <Play className="size-6" />
            </button>
          )}

          {(playing || paused) && (
            <button
              onClick={handleStop}
              className="flex size-10 items-center justify-center rounded-full border bg-white text-gray-600"
              aria-label="Detener"
            >
              <Square className="size-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#1E40AF]/70">
            Velocidad:
          </span>
          {[0.75, 0.9, 1, 1.25].map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                speed === s
                  ? "bg-[#1E40AF] text-white shadow-sm"
                  : "bg-white text-[#1E40AF]/70"
              }`}
              aria-label={`Velocidad ${s}x`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
