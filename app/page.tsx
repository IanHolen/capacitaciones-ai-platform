"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { BookOpen, Dumbbell, Sparkles } from "lucide-react";
import {
  AnimatedHero,
  AnimatedCTA,
  AnimatedStep,
  AnimatedSection,
} from "@/components/animated-landing";

export default function Home() {
  const { t } = useTranslation();

  const steps = [
    { icon: BookOpen, titleKey: "home.step1Title", descKey: "home.step1Desc" },
    { icon: Dumbbell, titleKey: "home.step2Title", descKey: "home.step2Desc" },
    { icon: Sparkles, titleKey: "home.step3Title", descKey: "home.step3Desc" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-background" />
        <AnimatedHero>
          <h1
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#1E40AF" }}
          >
            {t("home.hero")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            {t("home.heroSub")}
          </p>
        </AnimatedHero>
        <div className="mt-10">
          <AnimatedCTA>
            <Link href="/login">
              <Button
                className="h-14 px-8 text-lg font-semibold"
                style={{ backgroundColor: "#1E40AF" }}
              >
                {t("home.exploreCourses")}
              </Button>
            </Link>
          </AnimatedCTA>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
        <AnimatedSection>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {t("home.threeSteps")}
          </h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedStep key={step.titleKey} index={index}>
              <div className="flex flex-col items-center rounded-2xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                <div
                  className="mb-4 flex size-16 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#1E40AF" }}
                  aria-hidden="true"
                >
                  <step.icon className="size-8" />
                </div>
                <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("home.step")} {index + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold">{t(step.titleKey)}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t(step.descKey)}
                </p>
              </div>
            </AnimatedStep>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section
          className="flex flex-col items-center px-4 py-16 text-center text-white md:py-24"
          style={{ backgroundColor: "#1E40AF" }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("home.ctaTitle")}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-blue-100">
            {t("home.ctaSub")}
          </p>
          <div className="mt-8">
            <AnimatedCTA>
              <Link href="/login">
                <Button className="h-14 border-2 border-white bg-white/20 px-8 text-lg font-semibold text-white hover:bg-white hover:text-blue-900">
                  {t("home.viewAll")}
                </Button>
              </Link>
            </AnimatedCTA>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
