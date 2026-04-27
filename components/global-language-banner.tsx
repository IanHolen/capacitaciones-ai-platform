"use client";

import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";

export function GlobalLanguageBanner() {
  const { i18n } = useTranslation();

  if (i18n.language === "es") return null;

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-sm text-amber-800">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <AlertTriangle className="size-4 shrink-0" aria-hidden="true" />
        <span>
          English translation is currently in progress. Some content may still
          appear in Spanish.
        </span>
      </div>
    </div>
  );
}
