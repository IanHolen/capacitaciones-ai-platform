"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const PROGRESS_KEY = "capacitaciones_progress";

function getLocalProgress(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveLocalProgress(lessonId: string) {
  const progress = getLocalProgress();
  progress[lessonId] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

interface LessonCompleteButtonProps {
  lessonId: string;
  accentColor: string;
}

export function LessonCompleteButton({
  lessonId,
  accentColor,
}: LessonCompleteButtonProps) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const progress = getLocalProgress();
    if (progress[lessonId]) {
      setCompleted(true);
    }
  }, [lessonId]);

  async function handleComplete() {
    setLoading(true);

    // Always save to localStorage (works immediately)
    saveLocalProgress(lessonId);

    // Also try to save to DB (best effort)
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId }),
      });
    } catch {
      // DB save failed — localStorage still has the progress
    }

    setCompleted(true);
    setLoading(false);
  }

  if (completed) {
    return (
      <div className="flex items-center gap-2 text-base font-medium text-green-600">
        <CheckCircle2 className="size-5" />
        Lección completada
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50"
      style={{ backgroundColor: accentColor }}
    >
      {loading ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <CheckCircle2 className="size-5" />
      )}
      Marcar como completada
    </button>
  );
}
