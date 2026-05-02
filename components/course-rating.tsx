"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface RatingData {
  average: number;
  count: number;
  userRating: number | null;
}

interface CourseRatingProps {
  courseId: string;
}

const STAR_COUNT = 5;

export function CourseRating({ courseId }: CourseRatingProps) {
  const { t } = useTranslation();
  const [data, setData] = useState<RatingData | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRating = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/${courseId}/rating`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      // Non-blocking — rating display is optional
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    fetchRating();
  }, [fetchRating]);

  async function handleRate(rating: number) {
    // If clicking the same rating, remove it
    const isRemoving = data?.userRating === rating;

    setSubmitting(true);
    setError(null);

    try {
      if (isRemoving) {
        const res = await fetch(`/api/courses/${courseId}/rating`, {
          method: "DELETE",
        });
        if (!res.ok) {
          const json = await res.json();
          if (res.status === 401) {
            setError(t("rating.loginRequired"));
          } else {
            setError(json.error || t("rating.error"));
          }
          return;
        }
      } else {
        const res = await fetch(`/api/courses/${courseId}/rating`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rating }),
        });
        if (!res.ok) {
          const json = await res.json();
          if (res.status === 401) {
            setError(t("rating.loginRequired"));
          } else {
            setError(json.error || t("rating.error"));
          }
          return;
        }
      }

      // Refetch to get updated average
      await fetchRating();
    } catch {
      setError(t("rating.error"));
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        <span className="text-sm">{t("rating.loading")}</span>
      </div>
    );
  }

  if (!data) return null;

  const displayRating = hoveredStar ?? data.userRating ?? 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        {/* Interactive stars */}
        <div
          className="flex gap-0.5"
          role="radiogroup"
          aria-label={t("rating.rateThisCourse")}
          onMouseLeave={() => setHoveredStar(null)}
        >
          {Array.from({ length: STAR_COUNT }, (_, i) => {
            const value = i + 1;
            const isFilled = value <= displayRating;
            const isUserRated = data.userRating !== null && value <= data.userRating && hoveredStar === null;

            return (
              <button
                key={value}
                type="button"
                disabled={submitting}
                onClick={() => handleRate(value)}
                onMouseEnter={() => setHoveredStar(value)}
                className="rounded-sm p-0.5 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                role="radio"
                aria-checked={data.userRating === value}
                aria-label={t("rating.starLabel", { value })}
              >
                <Star
                  className={`size-6 transition-colors ${
                    isFilled
                      ? isUserRated
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-yellow-300 text-yellow-300"
                      : "fill-none text-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Average and count */}
        <span className="text-sm text-muted-foreground">
          {data.count > 0
            ? t("rating.summary", { average: data.average, count: data.count })
            : t("rating.noRatings")}
        </span>

        {submitting && (
          <Loader2 className="size-4 animate-spin text-muted-foreground" aria-hidden="true" />
        )}
      </div>

      {/* User feedback */}
      {data.userRating !== null && !hoveredStar && (
        <p className="text-sm text-muted-foreground">
          {t("rating.yourRating", { rating: data.userRating })}
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
