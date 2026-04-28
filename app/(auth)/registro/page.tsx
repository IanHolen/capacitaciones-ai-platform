"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, AlertCircle, Loader2, AlertTriangle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  async function handleEmailRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError(t("auth.passwordMin"));
      return;
    }

    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/auth/callback?redirectTo=/cursos`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm text-center">
          <h1 className="mb-4 text-2xl font-bold">{t("auth.checkEmail")}</h1>
          <p className="text-lg text-gray-600">
            {t("auth.verificationSent", { email })}
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-left text-base text-amber-800">
            <AlertTriangle className="mt-0.5 size-5 shrink-0" />
            <span>{t("auth.spamNotice")}</span>
          </div>
          <Link
            href="/login"
            className="mt-6 inline-block text-[#1E40AF] underline"
          >
            {t("auth.backToLogin")}
          </Link>
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
          {t("auth.createAccount")}
        </h1>
        <p className="mb-6 text-center text-gray-600">
          {t("auth.createSub")}
        </p>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailRegister} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-base font-medium">
              {t("auth.name")}
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg transition-colors focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
            />
          </div>
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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg transition-colors focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
            />
            <p className="mt-1 text-sm text-gray-500">
              {t("auth.minChars")}
            </p>
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
            {loading ? t("auth.loading") : t("auth.createButton")}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-base text-gray-600">
          {t("auth.hasAccount")}{" "}
          <Link href="/login" className="font-semibold text-[#1E40AF]">
            {t("auth.loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
