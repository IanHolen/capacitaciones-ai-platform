"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Layers,
  HeadphonesIcon,
  Brain,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  AnimatedHero,
  AnimatedCTA,
  AnimatedStep,
  AnimatedSection,
} from "@/components/animated-landing";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  const audienceItems = [
    {
      icon: Users,
      title: t("about.audience1Title"),
      description: t("about.audience1Desc"),
    },
    {
      icon: Brain,
      title: t("about.audience2Title"),
      description: t("about.audience2Desc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("about.audience3Title"),
      description: t("about.audience3Desc"),
    },
    {
      icon: BookOpen,
      title: t("about.audience4Title"),
      description: t("about.audience4Desc"),
    },
  ];

  const features = [
    t("about.feature1"),
    t("about.feature2"),
    t("about.feature3"),
    t("about.feature4"),
    t("about.feature5"),
    t("about.feature6"),
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-4 py-16 text-center md:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-background" />
        <AnimatedHero>
          <h1
            className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1E40AF" }}
          >
            {t("about.heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            {t("about.heroSub")}
          </p>
        </AnimatedHero>
      </section>

      {/* For whom */}
      <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16">
        <AnimatedSection>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            {t("about.forWho")}
          </h2>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2">
          {audienceItems.map((item, index) => (
            <AnimatedStep key={item.title} index={index}>
              <div className="flex gap-4 rounded-2xl border bg-card p-6 shadow-sm">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#1E40AF" }}
                >
                  <item.icon className="size-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedStep>
          ))}
        </div>
      </section>

      {/* How it works */}
      <AnimatedSection>
        <section className="bg-muted/30 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
              {t("about.howItWorks")}
            </h2>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <AnimatedStep key={feature} index={index}>
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <CheckCircle2
                      className="mt-0.5 size-6 shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="text-lg">{feature}</span>
                  </div>
                </AnimatedStep>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tech required? */}
      <AnimatedSection>
        <section className="mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
          <div className="rounded-2xl border-2 border-[#1E40AF]/20 bg-blue-50/50 p-8 md:p-12">
            <Layers
              className="mx-auto mb-4 size-12 text-[#1E40AF]"
              aria-hidden="true"
            />
            <h2 className="mb-4 text-2xl font-bold">
              {t("about.techRequired")}
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              <strong>No.</strong> {t("about.techAnswer")}
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section
          className="flex flex-col items-center px-4 py-12 text-center text-white md:py-16"
          style={{ backgroundColor: "#1E40AF" }}
        >
          <Sparkles className="mb-4 size-12" aria-hidden="true" />
          <h2 className="text-3xl font-bold">{t("about.ctaTitle")}</h2>
          <p className="mt-4 max-w-lg text-lg text-blue-100">
            {t("about.ctaSub")}
          </p>
          <div className="mt-8">
            <AnimatedCTA>
              <Link href="/registro">
                <Button className="h-14 gap-2 border-2 border-white bg-white px-8 text-lg font-semibold text-[#1E40AF] hover:bg-blue-50">
                  {t("about.ctaButton")}
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
            </AnimatedCTA>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
