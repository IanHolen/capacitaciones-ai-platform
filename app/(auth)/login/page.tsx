"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BookOpen, Mail, AlertCircle, Loader2, AlertTriangle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/cursos";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(
        error.message === "Invalid login credentials"
          ? t("auth.wrongCredentials")
          : error.message,
      );
      setLoading(false);
    } else {
      window.location.href = redirectTo;
    }
  }

  async function handleMagicLink() {
    if (!email) {
      setError(t("auth.enterEmail"));
      return;
    }
    setError("");
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
    }
    setLoading(false);
  }

  if (magicLinkSent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-4 text-center">
            <Mail className="size-12 text-[#1E40AF]" />
            <h1 className="text-2xl font-bold">{t("auth.checkEmail")}</h1>
            <p className="text-lg text-gray-600">
              {t("auth.magicSent", { email })}
            </p>
            <div className="mt-2 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-left text-base text-amber-800">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" />
              <span>{t("auth.spamNotice")}</span>
            </div>
            <button
              onClick={() => setMagicLinkSent(false)}
              className="mt-4 text-[#1E40AF] underline"
            >
              {t("auth.backToLogin")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        {/* Logo */}
        <Link
          href="/"
          className="mb-6 flex items-center justify-center gap-2 text-xl font-bold"
          style={{ color: "#1E40AF" }}
        >
          <BookOpen className="size-7" aria-hidden="true" />
          Capacitaciones IA
        </Link>

        <h1 className="mb-2 text-center text-2xl font-bold">
          {t("auth.welcomeBack")}
        </h1>
        <p className="mb-6 text-center text-gray-600">
          {t("auth.loginSub")}
        </p>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-base font-medium"
            >
              {t("auth.email")}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg transition-colors focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label htmlFor="password" className="text-base font-medium">
                {t("auth.password")}
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-[#1E40AF]"
              >
                {showPassword ? t("auth.hide") : t("auth.show")}
              </button>
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg transition-colors focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
            />
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-center gap-2 text-base font-medium text-red-600"
            >
              <AlertCircle className="size-5 shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#1E40AF] text-lg font-semibold text-white transition-colors hover:bg-[#1E3A8A] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/30 disabled:opacity-50"
          >
            {loading && <Loader2 className="size-5 animate-spin" />}
            {loading ? t("auth.loading") : t("auth.login")}
          </button>
        </form>

        {/* Separator */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-500">{t("auth.or")}</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Magic Link */}
        <button
          onClick={handleMagicLink}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 text-lg text-[#1E40AF] transition-colors hover:underline"
        >
          <Mail className="size-5" />
          {t("auth.magicLink")}
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-base text-gray-600">
          {t("auth.noAccount")}{" "}
          <Link href="/registro" className="font-semibold text-[#1E40AF]">
            {t("auth.register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
