"use client";

import { useState } from "react";
import { Quiz } from "@/components/quiz";
import { LessonCompleteButton } from "@/components/lesson-complete-button";
import type { QuizQuestion } from "@/lib/cursos-data";

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

  return (
    <>
      <div className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Quiz</h2>
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
          <LessonCompleteButton
            lessonId={lessonId}
            accentColor={accentColor}
          />
        ) : (
          <p className="text-base text-muted-foreground">
            Completa el quiz con al menos 80% para marcar esta lección como
            completada.
          </p>
        )}
      </div>
    </>
  );
}
