"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Loader2,
  Users,
  BookOpen,
  CheckCircle,
  XCircle,
  Database,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

const ADMIN_EMAIL = "holenderian@gmail.com";

interface Metrics {
  totalUsers: number;
  activeUsers7d: number;
  totalLessonsCompleted: number;
  quizzesApproved: number;
  quizzesFailed: number;
  totalEnrollments: number;
}

interface UserRow {
  id: string;
  email: string;
  created_at: string;
  enrollments: number;
  lessonsCompleted: number;
}

interface TableCount {
  name: string;
  count: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [tableCounts, setTableCounts] = useState<TableCount[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || user.email !== ADMIN_EMAIL) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      setAuthorized(true);

      // Fetch metrics in parallel
      const [
        usersRes,
        progressRes,
        exerciseRes,
        enrollmentsRes,
      ] = await Promise.all([
        supabase.from("users").select("id, email, created_at"),
        supabase.from("user_progress").select("user_id, completed, completed_at"),
        supabase.from("user_exercise_results").select("user_id, is_correct"),
        supabase.from("enrollments").select("user_id, course_id"),
      ]);

      const allUsers = usersRes.data || [];
      const allProgress = progressRes.data || [];
      const allExercises = exerciseRes.data || [];
      const allEnrollments = enrollmentsRes.data || [];

      // Active users (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const activeUserIds = new Set(
        allProgress
          .filter(
            (p) =>
              p.completed_at &&
              new Date(p.completed_at) > sevenDaysAgo,
          )
          .map((p) => p.user_id),
      );

      const totalLessonsCompleted = allProgress.filter((p) => p.completed).length;
      const quizzesApproved = allExercises.filter((e) => e.is_correct).length;
      const quizzesFailed = allExercises.filter((e) => !e.is_correct).length;

      setMetrics({
        totalUsers: allUsers.length,
        activeUsers7d: activeUserIds.size,
        totalLessonsCompleted,
        quizzesApproved,
        quizzesFailed,
        totalEnrollments: allEnrollments.length,
      });

      // User list with stats
      const enrollmentsByUser = new Map<string, number>();
      for (const e of allEnrollments) {
        enrollmentsByUser.set(e.user_id, (enrollmentsByUser.get(e.user_id) || 0) + 1);
      }
      const completedByUser = new Map<string, number>();
      for (const p of allProgress) {
        if (p.completed) {
          completedByUser.set(p.user_id, (completedByUser.get(p.user_id) || 0) + 1);
        }
      }

      setUsers(
        allUsers.map((u) => ({
          id: u.id,
          email: u.email || "N/A",
          created_at: u.created_at,
          enrollments: enrollmentsByUser.get(u.id) || 0,
          lessonsCompleted: completedByUser.get(u.id) || 0,
        })),
      );

      // Table counts
      const tables = [
        "users",
        "courses",
        "lessons",
        "enrollments",
        "user_progress",
        "user_exercise_results",
        "badges",
        "user_badges",
        "comments",
      ];
      const counts: TableCount[] = [];
      for (const table of tables) {
        const { count } = await supabase
          .from(table)
          .select("*", { count: "exact", head: true });
        counts.push({ name: table, count: count ?? 0 });
      }
      setTableCounts(counts);

      setLoading(false);
    }

    load();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-[#1E40AF]" />
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

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <h1
        className="mb-8 text-3xl font-bold tracking-tight"
        style={{ color: "#1E40AF" }}
      >
        Portal de Administrador
      </h1>

      {/* Metrics Grid */}
      {metrics && (
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            icon={<Users className="size-6" />}
            label="Usuarios registrados"
            value={metrics.totalUsers}
            color="#1E40AF"
          />
          <MetricCard
            icon={<TrendingUp className="size-6" />}
            label="Activos (7 días)"
            value={metrics.activeUsers7d}
            color="#16A34A"
          />
          <MetricCard
            icon={<BookOpen className="size-6" />}
            label="Inscripciones totales"
            value={metrics.totalEnrollments}
            color="#7C3AED"
          />
          <MetricCard
            icon={<CheckCircle className="size-6" />}
            label="Lecciones completadas"
            value={metrics.totalLessonsCompleted}
            color="#16A34A"
          />
          <MetricCard
            icon={<CheckCircle className="size-6" />}
            label="Quizzes aprobados"
            value={metrics.quizzesApproved}
            color="#16A34A"
          />
          <MetricCard
            icon={<XCircle className="size-6" />}
            label="Quizzes reprobados"
            value={metrics.quizzesFailed}
            color="#DC2626"
          />
        </div>
      )}

      {/* Users Table */}
      <Card className="mb-8 rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Users className="size-5" />
            Usuarios ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b text-left text-sm font-semibold text-muted-foreground">
                  <th className="pb-3 pr-4">Email</th>
                  <th className="pb-3 pr-4">Registro</th>
                  <th className="pb-3 pr-4 text-center">Cursos</th>
                  <th className="pb-3 text-center">Lecciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-medium">{u.email}</td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      {new Date(u.created_at).toLocaleDateString("es-LA")}
                    </td>
                    <td className="py-3 pr-4 text-center">{u.enrollments}</td>
                    <td className="py-3 text-center">{u.lessonsCompleted}</td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-muted-foreground">
                      No hay usuarios registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* DB Status */}
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Database className="size-5" />
            Status de la Base de Datos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tableCounts.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <span className="font-mono text-sm">{t.name}</span>
                <span className="font-bold text-[#1E40AF]">{t.count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="flex items-center gap-4 p-6">
        <div
          className="flex size-12 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold" style={{ color }}>
            {value.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
