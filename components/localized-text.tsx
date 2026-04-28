"use client";

import { useTranslation } from "react-i18next";

interface LocalizedTextProps {
  es: string;
  en?: string;
}

export function LocalizedText({ es, en }: LocalizedTextProps) {
  const { i18n } = useTranslation();
  return <>{i18n.language === "en" && en ? en : es}</>;
}

export function useLocalizedValue<T>(es: T, en?: T): T {
  const { i18n } = useTranslation();
  return i18n.language === "en" && en !== undefined ? en : es;
}
