"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Loader2,
  ShieldAlert,
  Shield,
  Activity,
  LayoutDashboard,
  Users,
  BookOpen,
  Database,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { OverviewTab } from "@/components/admin/overview-tab";
import { UsersTab } from "@/components/admin/users-tab";
import { CoursesTab } from "@/components/admin/courses-tab";
import { DatabaseTab } from "@/components/admin/database-tab";
import { ErrorsTab } from "@/components/admin/errors-tab";
import { ADMIN_ACCENT } from "@/components/admin/ui";

type Section = "overview" | "usuarios" | "cursos" | "database" | "errores";

const SECTIONS: {
  id: Section;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "overview", label: "Overview", description: "Resumen general de la plataforma", icon: LayoutDashboard },
  { id: "usuarios", label: "Usuarios", description: "Actividad de los usuarios registrados", icon: Users },
  { id: "cursos", label: "Cursos", description: "Progreso real de aprendizaje por curso", icon: BookOpen },
  { id: "database", label: "Base de Datos", description: "Estado de tu proyecto en Supabase", icon: Database },
  { id: "errores", label: "Errores", description: "Log de errores de la API", icon: AlertTriangle },
];

// Altura del header global del sitio (sticky)
const HEADER_H = "61px";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [active, setActive] = useState<Section>("overview");

  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => (r.ok ? r.json() : { isAdmin: false }))
      .then((data) => setAuthorized(!!data.isAdmin))
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin" style={{ color: ADMIN_ACCENT }} />
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <ShieldAlert className="size-16 text-red-500" />
        <h1 className="text-2xl font-bold">403 — Acceso denegado</h1>
        <p className="text-base text-muted-foreground">
          No tienes permisos para acceder a esta página.
        </p>
      </div>
    );
  }

  const current = SECTIONS.find((s) => s.id === active)!;

  return (
    <div className="flex w-full flex-1 bg-muted/30">
      {/* ── Sidebar de altura completa, pegado al borde ───── */}
      <aside
        className="sticky hidden w-60 shrink-0 flex-col justify-between border-r bg-background px-3 py-5 md:flex"
        style={{ top: HEADER_H, height: `calc(100vh - ${HEADER_H})` }}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5 px-2">
            <div
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: ADMIN_ACCENT }}
            >
              <Shield className="size-5" />
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">Admin Console</div>
              <div className="text-xs text-muted-foreground">Certificaciones AI</div>
            </div>
          </div>

          <nav className="flex flex-col gap-1" aria-label="Secciones de administración">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#1E40AF]/10 text-[#1E40AF]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="size-4 shrink-0" />
                  {s.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t pt-3">
          <div className="mb-2 flex items-center gap-2 px-3 text-xs text-muted-foreground">
            <Activity className="size-3.5 text-green-500" />
            Sistema activo
          </div>
          <Link
            href="/cursos"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver al sitio
          </Link>
        </div>
      </aside>

      {/* ── Contenido sobre fondo gris de consola ─────────── */}
      <div className="min-w-0 flex-1 px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Nav móvil */}
          <div className="mb-4 flex gap-1 overflow-x-auto rounded-xl bg-background p-1 shadow-sm md:hidden">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  active === s.id ? "bg-muted" : "text-muted-foreground hover:text-foreground"
                }`}
                style={active === s.id ? { color: ADMIN_ACCENT } : undefined}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight">{current.label}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{current.description}</p>
          </div>

          <div className="min-h-[60vh] w-full rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            {active === "overview" && <OverviewTab />}
            {active === "usuarios" && <UsersTab />}
            {active === "cursos" && <CoursesTab />}
            {active === "database" && <DatabaseTab />}
            {active === "errores" && <ErrorsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
