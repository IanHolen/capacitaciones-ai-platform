"use client";

import { useState, useEffect } from "react";
import { Sparkles, Loader2, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "react-i18next";

export function OnboardingModal() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [goal, setGoal] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function check() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      try {
        const res = await fetch("/api/goal");
        if (res.ok) {
          const data = await res.json();
          if (!data.goal) {
            setShow(true);
          }
        }
      } catch {
        // API not available
      }
    }

    check();
  }, []);

  async function handleSubmit() {
    setSaving(true);
    try {
      await fetch("/api/goal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: goal || t("onboarding.defaultGoal") }),
      });
    } catch {
      // Best effort
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div
            className="flex size-12 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: "#1E40AF" }}
          >
            <Sparkles className="size-6" />
          </div>
          <button
            onClick={() => setShow(false)}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label={t("tutor.close")}
          >
            <X className="size-5" />
          </button>
        </div>

        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "#1E40AF" }}
        >
          {t("onboarding.title")}
        </h2>
        <p className="mb-6 text-base text-muted-foreground">
          {t("onboarding.subtitle")}
        </p>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder={t("onboarding.placeholder")}
          className="min-h-[120px] w-full rounded-xl border-2 border-gray-200 p-4 text-lg leading-relaxed placeholder:text-gray-400 focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
          rows={3}
        />

        <p className="mt-2 text-sm text-muted-foreground">
          {t("onboarding.hint")}
        </p>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-lg font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "#1E40AF" }}
        >
          {saving ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Sparkles className="size-5" />
          )}
          {saving ? t("onboarding.saving") : t("onboarding.submit")}
        </button>
      </div>
    </div>
  );
}
