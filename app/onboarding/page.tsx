"use client";

import { useState, useEffect } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function OnboardingPage() {
  const [goal, setGoal] = useState("");
  const [saving, setSaving] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if user already has a goal — if so, skip onboarding
    async function check() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch("/api/goal");
        if (res.ok) {
          const data = await res.json();
          if (data.goal) {
            window.location.href = "/cursos";
            return;
          }
        }
      } catch {
        // Goal API not available — show onboarding anyway
      }

      setChecking(false);
    }

    check();
  }, []);

  async function handleSubmit() {
    setSaving(true);
    try {
      await fetch("/api/goal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: goal || "Aprender a usar IA" }),
      });
    } catch {
      // Best effort save
    }
    window.location.href = "/cursos";
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="size-8 animate-spin text-[#1E40AF]" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-lg text-center">
        <div
          className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: "#1E40AF" }}
        >
          <Sparkles className="size-8" />
        </div>

        <h1 className="mb-3 text-3xl font-bold" style={{ color: "#1E40AF" }}>
          ¡Bienvenido/a a Capacitaciones IA!
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Antes de empezar, contanos: ¿qué te gustaría lograr con la
          Inteligencia Artificial?
        </p>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Ejemplo: Quiero aprender a usar IA para mi negocio de pasteles, automatizar tareas del trabajo, ayudar a mis hijos con la tarea..."
          className="min-h-[140px] w-full rounded-2xl border-2 border-gray-200 p-5 text-lg leading-relaxed placeholder:text-gray-400 focus:border-[#1E40AF] focus:outline-none focus:ring-4 focus:ring-[#1E40AF]/20"
          rows={4}
        />

        <p className="mt-3 text-sm text-muted-foreground">
          Podés cambiar esto cuando quieras desde tu perfil en Mi Cuenta
        </p>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl text-lg font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "#1E40AF" }}
        >
          {saving ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Sparkles className="size-5" />
          )}
          {saving ? "Guardando..." : "Comenzar mi viaje"}
        </button>
      </div>
    </div>
  );
}
