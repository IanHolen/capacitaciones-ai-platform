"use client";

import { useTranslation } from "react-i18next";

export function LocalizedSectionTitle({ i18nKey }: { i18nKey: string }) {
  const { t } = useTranslation();
  return <h2 className="mb-4 text-2xl font-bold">{t(i18nKey)}</h2>;
}
