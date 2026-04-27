"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, AlertCircle, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleGoogleRegister() {
    const supabase = createClient();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?redirectTo=/cursos`,
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function handleEmailRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
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
          <h1 className="mb-4 text-2xl font-bold">Revisa tu correo</h1>
          <p className="text-lg text-gray-600">
            Te enviamos un enlace de verificación a <strong>{email}</strong>.
            Haz clic en el enlace para activar tu cuenta.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-block text-[#1E40AF] underline"
          >
            Ir al inicio de sesión
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
          Crea tu cuenta gratis
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Empieza a aprender IA hoy
        </p>

        {/* Google Register */}
        <button
          onClick={handleGoogleRegister}
          disabled={loading}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-300 text-lg font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/30 disabled:opacity-50"
        >
          <svg className="size-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Registrarse con Google
        </button>

        {/* Separator */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-500">o</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailRegister} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-base font-medium">
              Nombre
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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg transition-colors focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
            />
            <p className="mt-1 text-sm text-gray-500">
              Mínimo 8 caracteres
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
            {loading ? "Cargando..." : "Crear mi cuenta"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-base text-gray-600">
          ¿Ya tenés cuenta?{" "}
          <Link href="/login" className="font-semibold text-[#1E40AF]">
            Iniciá sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
