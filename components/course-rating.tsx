"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

interface CourseRatingProps {
  courseId: string;
}

export function CourseRating({ courseId }: CourseRatingProps) {
  const { t } = useTranslation();
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(0);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch(`/api/course-ratings?courseId=${encodeURIComponent(courseId)}`)
      .then((res) => res.json())
      .then((data) => {
        setAverage(data.average ?? 0);
        setCount(data.count ?? 0);
        setUserRating(data.userRating ?? null);
      })
      .catch(() => {});
  }, [courseId]);

  async function handleRate(rating: number) {
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/course-ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, rating }),
      });
      if (res.ok) {
        setUserRating(rating);
        // Refetch to get updated average
        const updated = await fetch(
          `/api/course-ratings?courseId=${encodeURIComponent(courseId)}`
        ).then((r) => r.json());
        setAverage(updated.average ?? 0);
        setCount(updated.count ?? 0);
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
  }

  const displayRating = hoveredStar ?? userRating ?? 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="cursor-pointer p-0.5 transition-transform hover:scale-110 disabled:cursor-default disabled:opacity-50"
            disabled={submitting}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(null)}
            aria-label={t("courses.rateStar", { star })}
          >
            <Star
              className={`size-5 ${
                star <= displayRating
                  ? "fill-yellow-400 text-yellow-400"
                  : star <= Math.round(average)
                    ? "fill-yellow-200 text-yellow-300"
                    : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {count > 0
          ? t("courses.ratingAverage", {
              average: average.toFixed(1),
              count,
            })
          : t("courses.noRatings")}
      </span>
    </div>
  );
}
