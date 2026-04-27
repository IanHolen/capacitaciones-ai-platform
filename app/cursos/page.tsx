"use client";

import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import CursosCatalog from "@/components/cursos-catalog";
import { OnboardingModal } from "@/components/onboarding-modal";

export default function CursosPage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E40AF" }}
        >
          {t("courses.catalog")}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t("courses.catalogSub")}
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-muted-foreground">...</div>}>
        <CursosCatalog />
      </Suspense>
      <OnboardingModal />
    </div>
  );
}
