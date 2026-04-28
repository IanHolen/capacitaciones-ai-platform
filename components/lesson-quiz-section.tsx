"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { Quiz } from "@/components/quiz";
import type { QuizQuestion } from "@/lib/cursos-data";

const PROGRESS_KEY = "capacitaciones_progress";

interface LessonQuizSectionProps {
  questions: QuizQuestion[];
  courseId: string;
  lessonId: string;
  accentColor: string;
}

export function LessonQuizSection({
  questions,
  courseId,
  lessonId,
  accentColor,
}: LessonQuizSectionProps) {
  const [passed, setPassed] = useState(false);
  const { t } = useTranslation();
  const autoSaved = useRef(false);

  // Auto-complete lesson when quiz is passed
  useEffect(() => {
    if (!passed || autoSaved.current) return;
    autoSaved.current = true;

    // Save to localStorage
    try {
      const progress = JSON.parse(
        localStorage.getItem(PROGRESS_KEY) || "{}"
      );
      progress[lessonId] = true;
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // localStorage not available
    }

    // Save to DB (best effort)
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
    }).catch(() => {});
  }, [passed, lessonId]);

  return (
    <>
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">{t("lesson.quiz")}</h2>
        <div className="rounded-xl border bg-card p-6 md:p-8">
          <Quiz
            questions={questions}
            courseId={courseId}
            accentColor={accentColor}
            onPass={() => setPassed(true)}
          />
        </div>
      </div>

      <div className="mb-10 flex justify-center">
        {passed ? (
          <div className="flex items-center gap-2 text-base font-medium text-green-600">
            <CheckCircle2 className="size-5" />
            {t("lesson.completed")}
          </div>
        ) : (
          <p className="text-base text-muted-foreground">
            {t("lesson.quizRequired")}
          </p>
        )}
      </div>
    </>
  );
}
