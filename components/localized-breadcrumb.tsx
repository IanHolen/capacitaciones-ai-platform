"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BreadcrumbItem {
  label: string;
  labelEn?: string;
  href?: string;
}

export function LocalizedBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { i18n, t } = useTranslation();
  const isEn = i18n.language === "en";

  return (
    <nav aria-label={t("a11y.breadcrumb")} className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-base text-muted-foreground">
        <li>
          <Link href="/cursos" className="hover:text-foreground">
            {t("nav.courses")}
          </Link>
        </li>
        {items.map((item, i) => {
          const displayLabel = isEn && item.labelEn ? item.labelEn : item.label;
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={isLast ? "font-medium text-foreground" : ""}>
              <span className="flex items-center gap-2">
                <ChevronRight className="size-4" aria-hidden="true" />
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-foreground">
                    {displayLabel}
                  </Link>
                ) : (
                  displayLabel
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
