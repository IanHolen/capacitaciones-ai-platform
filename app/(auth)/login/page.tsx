"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BookOpen, Mail, AlertCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
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
          ? "Correo o contraseña incorrectos"
          : error.message,
      );
      setLoading(false);
    } else {
      window.location.href = redirectTo;
    }
  }

  async function handleMagicLink() {
    if (!email) {
      setError("Ingresa tu correo electrónico primero");
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
            <h1 className="text-2xl font-bold">Revisa tu correo</h1>
            <p className="text-lg text-gray-600">
              Te enviamos un enlace mágico a <strong>{email}</strong>. Haz clic
              en el enlace del correo para iniciar sesión.
            </p>
            <button
              onClick={() => setMagicLinkSent(false)}
              className="mt-4 text-[#1E40AF] underline"
            >
              Volver al inicio de sesion
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
          Bienvenido de vuelta
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Iniciá sesión para continuar aprendiendo
        </p>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-base font-medium"
            >
              Correo electrónico
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
                Contraseña
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-[#1E40AF]"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
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
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>

        {/* Separator */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-500">o</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Magic Link */}
        <button
          onClick={handleMagicLink}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 text-lg text-[#1E40AF] transition-colors hover:underline"
        >
          <Mail className="size-5" />
          Recibir enlace mágico por correo
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-base text-gray-600">
          ¿No tenés cuenta?{" "}
          <Link href="/registro" className="font-semibold text-[#1E40AF]">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
