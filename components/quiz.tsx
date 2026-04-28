"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface QuizQuestion {
  question: string;
  questionEn?: string;
  options: string[];
  optionsEn?: string[];
  correctIndex: number;
  explanation: string;
  explanationEn?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  courseId: string;
  accentColor: string;
  onPass?: () => void;
  maxQuestions?: number;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Quiz({ questions, courseId, accentColor, onPass, maxQuestions = 10 }: QuizProps) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  const [pool] = useState(() => {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, Math.min(maxQuestions, shuffled.length));
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = pool[currentIndex];
  const isCorrect = selectedIndex === current?.correctIndex;

  const getQuestion = (q: QuizQuestion) =>
    isEn && q.questionEn ? q.questionEn : q.question;
  const getOptions = (q: QuizQuestion) =>
    isEn && q.optionsEn ? q.optionsEn : q.options;
  const getExplanation = (q: QuizQuestion) =>
    isEn && q.explanationEn ? q.explanationEn : q.explanation;

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
    if (currentIndex < pool.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  }, [currentIndex, pool.length]);

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
      const opts = getOptions(current);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = (index + 1) % opts.length;
        (
          document.querySelector(
            `[data-quiz-option="${next}"]`,
          ) as HTMLElement
        )?.focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = (index - 1 + opts.length) % opts.length;
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
    const percentage = Math.round((correctCount / pool.length) * 100);
    const passed = percentage >= 80;
    const message = passed
      ? t("quiz.excellent")
      : percentage >= 50
        ? t("quiz.needMore")
        : t("quiz.tryAgain");

    if (passed && onPass) {
      onPass();
    }

    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="text-5xl font-bold" style={{ color: accentColor }}>
          {correctCount} de {pool.length}
        </div>
        <div className="text-xl font-medium">{t("quiz.correctAnswers")}</div>
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
              {t("quiz.backToCourse")}
            </Button>
          </Link>
          <Button
            className="h-12 gap-2 px-6 text-base font-semibold"
            style={{ backgroundColor: accentColor }}
            onClick={handleRestart}
          >
            <RotateCcw className="size-5" aria-hidden="true" />
            {t("quiz.retryQuiz")}
          </Button>
        </div>
      </div>
    );
  }

  const displayOptions = getOptions(current);

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <div>
        <div className="mb-2 text-base text-gray-600">
          {t("quiz.questionOf", { current: currentIndex + 1, total: pool.length })}
        </div>
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={0}
          aria-valuemax={pool.length}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / pool.length) * 100}%`,
              backgroundColor: accentColor,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold">{getQuestion(current)}</h3>

      {/* Options */}
      <div className="flex flex-col gap-3" role="radiogroup" aria-label={t("a11y.options")}>
        {displayOptions.map((option, index) => {
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
                {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
              </div>
              <div className="mt-1 text-base">{getExplanation(current)}</div>
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
          {currentIndex < pool.length - 1
            ? t("quiz.nextQuestion")
            : t("quiz.viewResults")}
        </Button>
      )}
    </div>
  );
}
