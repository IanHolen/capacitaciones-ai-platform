"use client";

import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);

  const switchLang = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      setLocale(lang);
      localStorage.setItem("lang", lang);
    },
    [i18n],
  );

  return (
    <div
      role="radiogroup"
      aria-label={t("nav.siteLanguage")}
      className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1"
    >
      <button
        role="radio"
        aria-checked={locale === "es"}
        onClick={() => switchLang("es")}
        className={cn(
          "min-h-[36px] min-w-[44px] rounded-full px-3 py-1.5 text-sm font-semibold transition-all",
          "focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2",
          locale === "es"
            ? "bg-white text-[#1E40AF] shadow-sm"
            : "text-gray-500 hover:text-gray-700",
        )}
      >
        ES
      </button>
      <button
        role="radio"
        aria-checked={locale === "en"}
        onClick={() => switchLang("en")}
        className={cn(
          "min-h-[36px] min-w-[44px] rounded-full px-3 py-1.5 text-sm font-semibold transition-all",
          "focus-visible:ring-2 focus-visible:ring-[#1E40AF]/30 focus-visible:ring-offset-2",
          locale === "en"
            ? "bg-white text-[#1E40AF] shadow-sm"
            : "text-gray-500 hover:text-gray-700",
        )}
      >
        EN
      </button>
    </div>
  );
}
