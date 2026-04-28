"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Square, Volume2, VolumeX } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TextToSpeechProps {
  audioUrl?: string;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function TextToSpeech({ audioUrl }: TextToSpeechProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioUrl]);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }, [playing]);

  const handleStop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  }, []);

  const handleSeek = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = Number(e.target.value);
      setCurrentTime(audio.currentTime);
    },
    [],
  );

  const handleSpeedChange = useCallback((newSpeed: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = newSpeed;
    setSpeed(newSpeed);
  }, []);

  const handleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(!muted);
  }, [muted]);

  const { t } = useTranslation();

  if (!audioUrl) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-[#EFF6FF] p-5">
      <audio ref={audioRef} preload="metadata" src={audioUrl} />

      <div className="mb-4 flex items-center gap-3">
        <Volume2
          className="size-7 shrink-0 text-[#1E40AF]"
          aria-hidden="true"
        />
        <div>
          <div className="text-lg font-bold text-[#1E40AF]">
            {t("tts.title")}
          </div>
          <div className="text-sm text-[#1E40AF]/70">
            {t("tts.subtitle")}
          </div>
        </div>
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={handlePlayPause}
          className="flex size-12 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md"
          aria-label={playing ? "Pausar" : "Reproducir"}
        >
          {playing ? (
            <Pause className="size-6" />
          ) : (
            <Play className="size-6" />
          )}
        </button>

        {/* Stop */}
        <button
          onClick={handleStop}
          className="flex size-10 items-center justify-center rounded-full border bg-white text-gray-600"
          aria-label="Detener"
        >
          <Square className="size-4" />
        </button>

        {/* Mute */}
        <button
          onClick={handleMute}
          className="flex size-10 items-center justify-center rounded-full border bg-white text-gray-600"
          aria-label={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? (
            <VolumeX className="size-4" />
          ) : (
            <Volume2 className="size-4" />
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#1E40AF]/20 accent-[#1E40AF]"
          aria-label="Progreso del audio"
        />
        <div className="mt-1 flex justify-between text-sm text-[#1E40AF]/70">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Speed Controls */}
      <div className="mt-3 flex items-center gap-1.5">
        <span className="text-sm font-medium text-[#1E40AF]/70">
          {t("tts.speed")}:
        </span>
        {[0.9, 1, 1.5, 2].map((s) => (
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
  );
}
