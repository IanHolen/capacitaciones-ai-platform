"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Play, Pause, Square, Volume2, Loader2 } from "lucide-react";

interface TextToSpeechProps {
  text: string;
  audioUrl?: string;
}

function findBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const esVoices = voices.filter((v) => v.lang.startsWith("es"));
  const googleVoice = esVoices.find((v) => v.name.includes("Google"));
  if (googleVoice) return googleVoice;
  const naturalVoice = esVoices.find(
    (v) => v.name.includes("Natural") || v.name.includes("Enhanced"),
  );
  if (naturalVoice) return naturalVoice;
  const mxVoice = esVoices.find((v) => v.lang.startsWith("es-MX"));
  if (mxVoice) return mxVoice;
  return esVoices[0];
}

function cleanMarkdown(text: string): string {
  return text
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
}

export function TextToSpeech({ text, audioUrl }: TextToSpeechProps) {
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [speed, setSpeed] = useState(0.9);
  const [useServer, setUseServer] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const plainText = cleanMarkdown(text);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  const playServerTTS = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: plainText, lang: "es" }),
      });

      if (!res.ok) throw new Error("Server TTS failed");

      const blob = await res.blob();
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      const url = URL.createObjectURL(blob);
      audioUrlRef.current = url;

      const audio = new Audio(url);
      audio.playbackRate = speed;
      audioRef.current = audio;

      audio.onended = () => {
        setPlaying(false);
        setPaused(false);
      };

      await audio.play();
      setPlaying(true);
      setPaused(false);
      setLoading(false);
    } catch {
      setLoading(false);
      // Fallback to browser TTS
      setUseServer(false);
      playBrowserTTS();
    }
  }, [plainText, speed]);

  const playBrowserTTS = useCallback(() => {
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

  const handlePlay = useCallback(() => {
    if (paused && audioRef.current && useServer) {
      audioRef.current.play();
      setPaused(false);
      setPlaying(true);
      return;
    }
    if (paused && !useServer) {
      playBrowserTTS();
      return;
    }

    if (useServer) {
      playServerTTS();
    } else {
      playBrowserTTS();
    }
  }, [useServer, paused, playServerTTS, playBrowserTTS]);

  const handlePause = useCallback(() => {
    if (audioRef.current && useServer) {
      audioRef.current.pause();
    } else {
      window.speechSynthesis.pause();
    }
    setPaused(true);
    setPlaying(false);
  }, [useServer]);

  const handleStop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  }, []);

  const handleSpeedChange = useCallback(
    (newSpeed: number) => {
      setSpeed(newSpeed);
      if (audioRef.current) {
        audioRef.current.playbackRate = newSpeed;
      }
      if (!useServer && (playing || paused)) {
        window.speechSynthesis.cancel();
        setPlaying(false);
        setPaused(false);
      }
    },
    [playing, paused, useServer],
  );

  if (!mounted || typeof window === "undefined") {
    return (
      <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-[#EFF6FF] p-5">
        <div className="flex items-center gap-3">
          <Volume2 className="size-7 shrink-0 text-[#1E40AF]" aria-hidden="true" />
          <div className="text-lg font-bold text-[#1E40AF]">Cargando audio...</div>
        </div>
      </div>
    );
  }

  // If we have a pre-generated MP3, use native audio player
  if (audioUrl) {
    return (
      <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-[#EFF6FF] p-5">
        <div className="mb-3 flex items-center gap-3">
          <Volume2 className="size-7 shrink-0 text-[#1E40AF]" aria-hidden="true" />
          <div>
            <div className="text-lg font-bold text-[#1E40AF]">
              Escuchá esta lección en audio
            </div>
            <div className="text-sm text-[#1E40AF]/70">
              Ideal para aprender mientras hacés otras cosas
            </div>
          </div>
        </div>
        <audio
          controls
          preload="none"
          className="w-full"
          src={audioUrl}
        >
          Tu navegador no soporta audio.
        </audio>
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
          {loading ? (
            <div className="flex size-12 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md">
              <Loader2 className="size-6 animate-spin" />
            </div>
          ) : playing ? (
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
