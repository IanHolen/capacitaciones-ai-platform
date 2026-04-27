"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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

  async function handleComplete() {
    setLoading(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId }),
      });
      if (res.ok) {
        setCompleted(true);
      }
    } catch {
      // silently fail if not authenticated
    }
    setLoading(false);
  }

  if (completed) {
    return (
      <div className="flex items-center gap-2 text-base font-medium text-green-600">
        <CheckCircle2 className="size-5" />
        Leccion completada
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
