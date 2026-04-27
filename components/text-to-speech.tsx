"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";

interface TextToSpeechProps {
  text: string;
}

export function TextToSpeech({ text }: TextToSpeechProps) {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(0.9);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

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

    // Try to find a Spanish voice
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(
      (v) => v.lang.startsWith("es-MX") || v.lang.startsWith("es"),
    );
    if (esVoice) utterance.voice = esVoice;

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

  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-muted/30 p-4">
      <Volume2
        className="size-5 shrink-0 text-muted-foreground"
        aria-hidden="true"
      />
      <span className="text-base font-medium">Escuchar lección</span>

      <div className="flex items-center gap-2">
        {playing ? (
          <button
            onClick={handlePause}
            className="flex size-10 items-center justify-center rounded-full bg-[#1E40AF] text-white"
            aria-label="Pausar"
          >
            <Pause className="size-5" />
          </button>
        ) : (
          <button
            onClick={handlePlay}
            className="flex size-10 items-center justify-center rounded-full bg-[#1E40AF] text-white"
            aria-label={paused ? "Continuar" : "Reproducir"}
          >
            <Play className="size-5" />
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
        <span className="text-sm text-muted-foreground">Velocidad:</span>
        {[0.75, 0.9, 1, 1.25].map((s) => (
          <button
            key={s}
            onClick={() => handleSpeedChange(s)}
            className={`rounded-full px-2.5 py-1 text-sm font-medium ${
              speed === s
                ? "bg-[#1E40AF] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            aria-label={`Velocidad ${s}x`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
