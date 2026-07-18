"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BookOpen, LogIn, LogOut, HelpCircle, Shield } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslation } from "react-i18next";

export function HeaderNav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isLanding = pathname === "/";

  const [user, setUser] = useState<{
    email?: string;
    name?: string;
  } | null>(null);
  const [checked, setChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({
          email: user.email,
          name: user.user_metadata?.name,
        });
        // Consultar rol de admin en el servidor (tabla admin_users)
        fetch("/api/admin/me")
          .then((r) => (r.ok ? r.json() : { isAdmin: false }))
          .then((data) => setIsAdmin(!!data.isAdmin))
          .catch(() => setIsAdmin(false));
      }
      setChecked(true);
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (!checked) return null;

  // Landing page + not logged in: only show "¿Qué es esto?" + language
  if (isLanding && !user) {
    return (
      <div className="flex items-center gap-2">
        {/* LanguageToggle hidden — Spanish only for now */}
        <Link
          href="/about"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        >
          <HelpCircle className="size-5" aria-hidden="true" />
          {t("nav.whatIsThis")}
        </Link>
      </div>
    );
  }

  // Not logged in (but not on landing): show language + login
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        {/* LanguageToggle hidden — Spanish only for now */}
        <Link
          href="/login"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogIn className="size-5" aria-hidden="true" />
          <span>{t("nav.login")}</span>
        </Link>
      </div>
    );
  }

  // Logged in: full nav
  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-1">
      <LanguageToggle />
      {isAdmin && (
        <Link
          href="/admin"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        >
          <Shield className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">Admin</span>
        </Link>
      )}
      <Link
        href="/cursos"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
      >
        <BookOpen className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">{t("nav.courses")}</span>
      </Link>
      <Link
        href="/cuenta"
        className="flex items-center gap-2 rounded-lg px-2 py-2"
      >
        <div className="flex size-9 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-bold text-white">
          {initials}
        </div>
        <span className="hidden text-base font-semibold sm:inline">
          {user.name || user.email?.split("@")[0]}
        </span>
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        aria-label={t("nav.logoutLabel")}
      >
        <LogOut className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">{t("nav.logout")}</span>
      </button>
    </div>
  );
}
