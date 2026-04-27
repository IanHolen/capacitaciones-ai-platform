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
