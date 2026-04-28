"use client";

import { useEffect, useRef } from "react";

const PROGRESS_KEY = "capacitaciones_progress";

export function AutoLessonComplete({ lessonId }: { lessonId: string }) {
  const saved = useRef(false);

  useEffect(() => {
    if (saved.current) return;
    saved.current = true;

    // Save to localStorage
    try {
      const progress = JSON.parse(
        localStorage.getItem(PROGRESS_KEY) || "{}"
      );
      if (!progress[lessonId]) {
        progress[lessonId] = true;
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
      }
    } catch {
      // localStorage not available
    }

    // Also save to DB (best effort)
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
    }).catch(() => {});
  }, [lessonId]);

  return null;
}
