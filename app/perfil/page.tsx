"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogOut, Save, User, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { cursos } from "@/lib/cursos-data";
import { createClient } from "@/lib/supabase/client";
import { BadgesDisplay } from "@/components/badges-display";

interface UserProfile {
  email: string;
  name: string;
  avatarUrl?: string;
}

interface Stats {
  coursesCompleted: number;
  lessonsCompleted: number;
  totalLessons: number;
}

export default function PerfilPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<Stats>({
    coursesCompleted: 0,
    lessonsCompleted: 0,
    totalLessons: 0,
  });
  const [editName, setEditName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login?redirectTo=/perfil");
        return;
      }

      const name =
        user.user_metadata?.name || user.email?.split("@")[0] || "Estudiante";
      setProfile({
        email: user.email || "",
        name,
        avatarUrl: user.user_metadata?.avatar_url,
      });
      setEditName(name);

      // Load progress stats from localStorage (primary) + DB (supplement)
      const totalLessons = cursos.reduce(
        (acc, c) => acc + c.lecciones.length,
        0,
      );

      const localProgress: Record<string, boolean> = (() => {
        try {
          return JSON.parse(
            localStorage.getItem("capacitaciones_progress") || "{}"
          );
        } catch {
          return {};
        }
      })();

      const completedLessonIds = new Set(
        Object.entries(localProgress)
          .filter(([, v]) => v)
          .map(([k]) => k)
      );

      // Supplement with DB data
      try {
        const res = await fetch("/api/progress");
        if (res.ok) {
          const data = await res.json();
          for (const p of data.progress || []) {
            if (p.completed) {
              const lessonSlug = p.lesson?.slug;
              if (lessonSlug) completedLessonIds.add(lessonSlug);
            }
          }
        }
      } catch {
        // DB not available
      }

      const lessonsCompleted = cursos.reduce(
        (acc, curso) =>
          acc + curso.lecciones.filter((l) => completedLessonIds.has(l.id)).length,
        0,
      );
      const coursesCompleted = cursos.filter((curso) =>
        curso.lecciones.length > 0 &&
        curso.lecciones.every((l) => completedLessonIds.has(l.id))
      ).length;

      setStats({ coursesCompleted, lessonsCompleted, totalLessons });

      setLoading(false);
    }

    loadProfile();
  }, [router]);

  async function handleSaveName() {
    if (!editName.trim()) return;
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { name: editName.trim() },
    });
    if (!error) {
      setProfile((prev) => (prev ? { ...prev, name: editName.trim() } : prev));
      setIsEditing(false);
    }
    setSaving(false);
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-[#1E40AF]" />
      </div>
    );
  }

  if (!profile) return null;

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 md:py-16">
      <h1
        className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl"
        style={{ color: "#1E40AF" }}
      >
        Mi Perfil
      </h1>

      {/* Avatar + Info */}
      <Card className="mb-6 rounded-2xl">
        <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-start">
          <div
            className="flex size-24 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white"
            style={{ backgroundColor: "#1E40AF" }}
            aria-hidden="true"
          >
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt=""
                className="size-24 rounded-full object-cover"
              />
            ) : (
              initials
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="rounded-lg border px-3 py-2 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                  aria-label="Nombre"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveName();
                    if (e.key === "Escape") setIsEditing(false);
                  }}
                  autoFocus
                />
                <Button
                  onClick={handleSaveName}
                  disabled={saving}
                  size="sm"
                  style={{ backgroundColor: "#1E40AF" }}
                  aria-label="Guardar nombre"
                >
                  {saving ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Save className="size-4" />
                  )}
                </Button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="group text-left"
                aria-label="Editar nombre"
              >
                <h2 className="text-2xl font-bold group-hover:text-[#1E40AF]">
                  {profile.name}
                </h2>
              </button>
            )}
            <p className="mt-1 text-base text-muted-foreground">
              {profile.email}
            </p>
            {!isEditing && (
              <p className="mt-1 text-sm text-muted-foreground">
                Click en tu nombre para editarlo
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <BookOpen className="mb-2 size-8 text-[#1E40AF]" aria-hidden="true" />
            <span className="text-3xl font-bold text-[#1E40AF]">
              {stats.coursesCompleted}
            </span>
            <span className="text-sm text-muted-foreground">
              Cursos completados
            </span>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <CheckCircle className="mb-2 size-8 text-[#16A34A]" aria-hidden="true" />
            <span className="text-3xl font-bold text-[#16A34A]">
              {stats.lessonsCompleted}
            </span>
            <span className="text-sm text-muted-foreground">
              Lecciones completadas
            </span>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center p-6">
            <User className="mb-2 size-8 text-[#7C3AED]" aria-hidden="true" />
            <span className="text-3xl font-bold text-[#7C3AED]">
              {stats.totalLessons > 0
                ? Math.round((stats.lessonsCompleted / stats.totalLessons) * 100)
                : 0}%
            </span>
            <span className="text-sm text-muted-foreground">
              Progreso general
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Badges */}
      <div className="mb-6">
        <BadgesDisplay />
      </div>

      {/* Logout */}
      <div className="text-center">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="h-12 gap-2 px-6 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="size-5" aria-hidden="true" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}
