"use client";

import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function ContentLanguageNotice() {
  const { i18n, t } = useTranslation();

  if (i18n.language === "es") return null;

  return (
    <div className="mb-6 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-base text-blue-800">
      <Globe className="size-5 shrink-0" aria-hidden="true" />
      <span>{t("contentNotice")}</span>
    </div>
  );
}
