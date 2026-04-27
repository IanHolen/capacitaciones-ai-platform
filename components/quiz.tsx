"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  courseId: string;
  accentColor: string;
  onPass?: () => void;
}

export function Quiz({ questions, courseId, accentColor, onPass }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[currentIndex];
  const isCorrect = selectedIndex === current?.correctIndex;

  const handleSelect = useCallback(
    (index: number) => {
      if (answered) return;
      setSelectedIndex(index);
      setAnswered(true);
      if (index === current.correctIndex) {
        setCorrectCount((c) => c + 1);
      }
    },
    [answered, current],
  );

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswered(false);
    setCorrectCount(0);
    setFinished(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (answered) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = (index + 1) % current.options.length;
        (
          document.querySelector(
            `[data-quiz-option="${next}"]`,
          ) as HTMLElement
        )?.focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev =
          (index - 1 + current.options.length) % current.options.length;
        (
          document.querySelector(
            `[data-quiz-option="${prev}"]`,
          ) as HTMLElement
        )?.focus();
      }
    },
    [answered, current],
  );

  if (finished) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const passed = percentage >= 80;
    const message = passed
      ? "¡Excelente! Tenés una base sólida."
      : percentage >= 50
        ? "Necesitás al menos 80% para completar esta lección. ¡Intentalo de nuevo!"
        : "No te desanimes. Volvé a leer las lecciones con calma e intentá de nuevo.";

    if (passed && onPass) {
      onPass();
    }

    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="text-5xl font-bold" style={{ color: accentColor }}>
          {correctCount} de {questions.length}
        </div>
        <div className="text-xl font-medium">correctas</div>
        <div
          className="h-4 w-full max-w-xs overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${percentage}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
        <p className="text-lg text-muted-foreground">{message}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={`/cursos/${courseId}`}>
            <Button
              variant="outline"
              className="h-12 gap-2 px-6 text-base"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
              Volver al curso
            </Button>
          </Link>
          <Button
            className="h-12 gap-2 px-6 text-base font-semibold"
            style={{ backgroundColor: accentColor }}
            onClick={handleRestart}
          >
            <RotateCcw className="size-5" aria-hidden="true" />
            Repetir Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div>
        <div className="mb-2 text-base text-gray-600">
          Pregunta {currentIndex + 1} de {questions.length}
        </div>
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={0}
          aria-valuemax={questions.length}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold">{current.question}</h3>

      {/* Options */}
      <div className="flex flex-col gap-3" role="radiogroup" aria-label="Opciones">
        {current.options.map((option, index) => {
          let classes =
            "w-full cursor-pointer text-left p-4 rounded-xl border-2 border-gray-200 bg-white text-lg min-h-[56px] transition-all focus:outline-none";
          let icon = null;

          if (answered) {
            if (index === current.correctIndex) {
              classes =
                "w-full text-left p-4 rounded-xl border-2 border-green-500 bg-green-50 text-green-900 text-lg min-h-[56px] transition-all";
              icon = (
                <CheckCircle2
                  className="size-6 shrink-0 text-green-600"
                  aria-hidden="true"
                />
              );
            } else if (index === selectedIndex) {
              classes =
                "w-full text-left p-4 rounded-xl border-2 border-red-500 bg-red-50 text-red-900 text-lg min-h-[56px] transition-all";
              icon = (
                <XCircle
                  className="size-6 shrink-0 text-red-600"
                  aria-hidden="true"
                />
              );
            }
          } else {
            if (index === selectedIndex) {
              classes +=
                " border-[#1E40AF] bg-blue-50 ring-2 ring-[#1E40AF]/20";
            } else {
              classes += " hover:border-[#1E40AF] hover:bg-blue-50";
            }
          }

          return (
            <button
              key={index}
              data-quiz-option={index}
              role="radio"
              aria-checked={selectedIndex === index}
              className={classes}
              onClick={() => handleSelect(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={answered}
            >
              <div className="flex items-center gap-3">
                <span className="flex-1">{option}</span>
                {icon}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          aria-live="polite"
          className={`rounded-xl border-l-4 p-4 ${
            isCorrect
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2
                className="mt-0.5 size-6 shrink-0 text-green-600"
                aria-hidden="true"
              />
            ) : (
              <XCircle
                className="mt-0.5 size-6 shrink-0 text-red-600"
                aria-hidden="true"
              />
            )}
            <div>
              <div className="font-semibold">
                {isCorrect ? "Correcto!" : "Incorrecto"}
              </div>
              <div className="mt-1 text-base">{current.explanation}</div>
            </div>
          </div>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <Button
          className="h-12 self-end px-6 text-base font-semibold"
          style={{ backgroundColor: accentColor }}
          onClick={handleNext}
        >
          {currentIndex < questions.length - 1
            ? "Siguiente pregunta"
            : "Ver resultados"}
        </Button>
      )}
    </div>
  );
}
