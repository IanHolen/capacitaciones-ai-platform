"use client";

import { useEffect, useState } from "react";
import {
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
  BookOpen,
  MessageSquare,
  Award,
  UserPlus,
} from "lucide-react";
import {
  TabPanel,
  Section,
  StatCard,
  ChartCard,
  LoadingState,
  ADMIN_ACCENT,
  type StatDelta,
} from "./ui";

interface Metrics {
  total_users?: number;
  active_users_7d?: number;
  total_lessons_completed?: number;
  total_quizzes_passed?: number;
  total_quizzes_failed?: number;
  total_quizzes_attempted?: number;
  total_comments?: number;
  total_badges_earned?: number;
  courses_count?: number;
}

interface ChartPoint {
  date: string;
  count: number;
}

interface UserRow {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

/** Suma la última semana y la anterior de una serie diaria ordenada asc. */
function weekDelta(points: ChartPoint[]): { current: number; delta: StatDelta } {
  const lastWeek = points.slice(-7).reduce((s, p) => s + p.count, 0);
  const prevWeek = points.slice(-14, -7).reduce((s, p) => s + p.count, 0);
  return {
    current: lastWeek,
    delta: { diff: lastWeek - prevWeek, label: "vs sem. anterior" },
  };
}

function relativeDate(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return "hoy";
  if (days === 1) return "ayer";
  if (days < 30) return `hace ${days} días`;
  const months = Math.floor(days / 30);
  return `hace ${months} mes${months > 1 ? "es" : ""}`;
}

export function OverviewTab() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<Metrics>({});
  const [signups, setSignups] = useState<ChartPoint[]>([]);
  const [completions, setCompletions] = useState<ChartPoint[]>([]);
  const [recentUsers, setRecentUsers] = useState<UserRow[]>([]);

  useEffect(() => {
    async function load() {
      const [metricsRes, signupsRes, completionsRes, usersRes] = await Promise.all([
        fetch("/api/admin/metrics").then((r) => (r.ok ? r.json() : {})),
        fetch("/api/admin/signups-chart").then((r) => (r.ok ? r.json() : { data: [] })),
        fetch("/api/admin/completions-chart").then((r) => (r.ok ? r.json() : { data: [] })),
        fetch("/api/admin/users").then((r) => (r.ok ? r.json() : { users: [] })),
      ]);
      setMetrics((metricsRes as Metrics) || {});
      setSignups(signupsRes.data || []);
      setCompletions(completionsRes.data || []);
      const users: UserRow[] = usersRes.users || [];
      setRecentUsers(
        users
          .slice()
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          .slice(0, 6)
      );
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <LoadingState />;

  const signupsWeek = weekDelta(signups);
  const completionsWeek = weekDelta(completions);

  const quizzesFailed =
    metrics.total_quizzes_failed ??
    Math.max(
      0,
      (metrics.total_quizzes_attempted ?? 0) - (metrics.total_quizzes_passed ?? 0)
    );

  return (
    <TabPanel>
      <Section title="Métricas generales">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Users className="size-5" />}
            label="Total Usuarios"
            value={metrics.total_users ?? 0}
            color={ADMIN_ACCENT}
            delta={signupsWeek.delta}
          />
          <StatCard
            icon={<TrendingUp className="size-5" />}
            label="Activos (7 días)"
            value={metrics.active_users_7d ?? 0}
            color="#22c55e"
          />
          <StatCard
            icon={<CheckCircle className="size-5" />}
            label="Lecciones Completadas"
            value={metrics.total_lessons_completed ?? 0}
            color="#7C3AED"
            delta={completionsWeek.delta}
          />
          <StatCard
            icon={<BookOpen className="size-5" />}
            label="Cursos Totales"
            value={metrics.courses_count ?? 0}
            color="#f59e0b"
          />
        </div>
      </Section>

      <Section title="Actividad">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<CheckCircle className="size-5" />}
            label="Quizzes Aprobados"
            value={metrics.total_quizzes_passed ?? 0}
            color="#22c55e"
          />
          <StatCard
            icon={<XCircle className="size-5" />}
            label="Quizzes Reprobados"
            value={quizzesFailed}
            color="#ef4444"
          />
          <StatCard
            icon={<MessageSquare className="size-5" />}
            label="Comentarios"
            value={metrics.total_comments ?? 0}
            color="#06b6d4"
          />
          <StatCard
            icon={<Award className="size-5" />}
            label="Badges Otorgados"
            value={metrics.total_badges_earned ?? 0}
            color="#CA8A04"
          />
        </div>
      </Section>

      <Section title="Tendencias">
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Registros — últimos 14 días"
            data={signups}
            color={ADMIN_ACCENT}
          />
          <ChartCard
            title="Lecciones completadas — últimos 30 días"
            data={completions}
            color="#22c55e"
          />
        </div>
      </Section>

      <Section title="Registros recientes" icon={<UserPlus className="size-4" />}>
        {recentUsers.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aún no hay usuarios registrados.</p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recentUsers.map((u) => {
              const name = u.name || u.email?.split("@")[0] || "Usuario";
              const initials = name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 2);
              return (
                <div
                  key={u.id}
                  className="flex items-center gap-3 rounded-xl border p-3 transition-shadow hover:shadow-sm"
                >
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: ADMIN_ACCENT }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{name}</div>
                    <div className="truncate text-xs text-muted-foreground">
                      {u.email} · {relativeDate(u.created_at)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </TabPanel>
  );
}
