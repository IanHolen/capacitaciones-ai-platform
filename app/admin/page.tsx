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
  MessageSquare,
  BarChart3,
  Search,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { createClient } from "@/lib/supabase/client";

const ADMIN_EMAIL = "holenderian@gmail.com";

type Tab = "overview" | "usuarios" | "cursos" | "contenido";

interface Metrics {
  total_users?: number;
  active_users_7d?: number;
  lessons_completed?: number;
  quizzes_approved?: number;
  quizzes_failed?: number;
  total_comments?: number;
  total_courses?: number;
}

interface ChartPoint {
  date: string;
  count: number;
}

interface TopCourse {
  course_name: string;
  level: string;
  enrolled_count: number;
  completion_rate: number;
}

interface UserRow {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
  lessonsCompleted: number;
}

interface QuizStat {
  course_name: string;
  total_attempts: number;
  passed: number;
  failed: number;
  pass_rate: number;
}

interface TableCount {
  table_name: string;
  row_count: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  // Data states
  const [metrics, setMetrics] = useState<Metrics>({});
  const [signups, setSignups] = useState<ChartPoint[]>([]);
  const [completions, setCompletions] = useState<ChartPoint[]>([]);
  const [topCourses, setTopCourses] = useState<TopCourse[]>([]);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [quizStats, setQuizStats] = useState<QuizStat[]>([]);
  const [dbStatus, setDbStatus] = useState<TableCount[]>([]);
  const [userSearch, setUserSearch] = useState("");
  const [userSort, setUserSort] = useState<"created_at" | "lessonsCompleted">("created_at");

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

      // Fetch all data in parallel
      const [
        metricsRes,
        signupsRes,
        completionsRes,
        topCoursesRes,
        usersRes,
        quizRes,
        dbRes,
      ] = await Promise.all([
        fetch("/api/admin/metrics").then((r) => r.ok ? r.json() : {}),
        fetch("/api/admin/signups-chart").then((r) => r.ok ? r.json() : { data: [] }),
        fetch("/api/admin/completions-chart").then((r) => r.ok ? r.json() : { data: [] }),
        fetch("/api/admin/top-courses").then((r) => r.ok ? r.json() : { data: [] }),
        fetch("/api/admin/users").then((r) => r.ok ? r.json() : { users: [] }),
        fetch("/api/admin/quiz-stats").then((r) => r.ok ? r.json() : { data: [] }),
        fetch("/api/admin/db-status").then((r) => r.ok ? r.json() : []),
      ]);

      const mData = metricsRes as Record<string, unknown>;
      setMetrics((mData?.data as Metrics[] | undefined)?.[0] || mData as Metrics || {});
      setSignups(signupsRes.data || []);
      setCompletions(completionsRes.data || []);
      setTopCourses(topCoursesRes.data || []);
      setUsers(usersRes.users || []);
      setQuizStats(quizRes.data || []);
      setDbStatus(Array.isArray(dbRes) ? dbRes : dbRes.data || []);

      setLoading(false);
    }

    load();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f172a]">
        <Loader2 className="size-8 animate-spin text-blue-400" />
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

  const filteredUsers = users
    .filter(
      (u) =>
        u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.name?.toLowerCase().includes(userSearch.toLowerCase())
    )
    .sort((a, b) =>
      userSort === "lessonsCompleted"
        ? b.lessonsCompleted - a.lessonsCompleted
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "usuarios", label: "Usuarios" },
    { id: "cursos", label: "Cursos" },
    { id: "contenido", label: "Contenido" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Admin Console</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Activity className="size-4 text-green-400" />
            Sistema activo
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-lg bg-[#1e293b] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#334155] text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Stat Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={<Users className="size-5" />}
                label="Total Usuarios"
                value={metrics.total_users ?? 0}
                color="#3b82f6"
              />
              <StatCard
                icon={<TrendingUp className="size-5" />}
                label="Activos (7d)"
                value={metrics.active_users_7d ?? 0}
                color="#22c55e"
              />
              <StatCard
                icon={<CheckCircle className="size-5" />}
                label="Lecciones Completadas"
                value={metrics.lessons_completed ?? 0}
                color="#a855f7"
              />
              <StatCard
                icon={<BookOpen className="size-5" />}
                label="Cursos Totales"
                value={metrics.total_courses ?? 15}
                color="#f59e0b"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard
                icon={<CheckCircle className="size-5" />}
                label="Quizzes Aprobados"
                value={metrics.quizzes_approved ?? 0}
                color="#22c55e"
              />
              <StatCard
                icon={<XCircle className="size-5" />}
                label="Quizzes Reprobados"
                value={metrics.quizzes_failed ?? 0}
                color="#ef4444"
              />
              <StatCard
                icon={<MessageSquare className="size-5" />}
                label="Comentarios"
                value={metrics.total_comments ?? 0}
                color="#06b6d4"
              />
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <ChartCard title="Registros — 7d" data={signups} color="#3b82f6" />
              <ChartCard title="Lecciones completadas — 30d" data={completions} color="#22c55e" />
            </div>

            {/* Top Courses */}
            {topCourses.length > 0 && (
              <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Top Cursos
                </h3>
                <div className="space-y-3">
                  {topCourses.slice(0, 8).map((course) => (
                    <div key={course.course_name} className="flex items-center gap-4">
                      <span className="w-48 shrink-0 truncate text-sm text-gray-300">
                        {course.course_name}
                      </span>
                      <div className="flex-1">
                        <div className="h-6 overflow-hidden rounded-full bg-[#334155]">
                          <motion.div
                            className="h-full rounded-full bg-blue-500"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${Math.max(
                                (course.enrolled_count / Math.max(...topCourses.map((c) => c.enrolled_count), 1)) * 100,
                                2
                              )}%`,
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                      <span className="w-16 text-right text-sm font-medium text-gray-300">
                        {course.enrolled_count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Usuarios Tab */}
        {activeTab === "usuarios" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl border border-[#334155] bg-[#1e293b]">
              {/* Search + Sort */}
              <div className="flex flex-col gap-3 border-b border-[#334155] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative max-w-xs flex-1">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    placeholder="Buscar por email o nombre..."
                    className="h-9 w-full rounded-lg border border-[#334155] bg-[#0f172a] pl-9 pr-3 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => setUserSort("created_at")}
                    className={`rounded-md px-3 py-1.5 ${
                      userSort === "created_at"
                        ? "bg-blue-600 text-white"
                        : "bg-[#334155] text-gray-400"
                    }`}
                  >
                    Recientes
                  </button>
                  <button
                    onClick={() => setUserSort("lessonsCompleted")}
                    className={`rounded-md px-3 py-1.5 ${
                      userSort === "lessonsCompleted"
                        ? "bg-blue-600 text-white"
                        : "bg-[#334155] text-gray-400"
                    }`}
                  >
                    Más activos
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#334155] text-left text-xs uppercase tracking-wider text-gray-500">
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Nombre</th>
                      <th className="px-4 py-3">Registro</th>
                      <th className="px-4 py-3 text-center">Lecciones</th>
                      <th className="px-4 py-3">Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((u) => (
                      <tr
                        key={u.id}
                        className="border-b border-[#334155]/50 hover:bg-[#334155]/30"
                      >
                        <td className="px-4 py-3 font-medium text-gray-200">
                          {u.email}
                        </td>
                        <td className="px-4 py-3 text-gray-400">
                          {u.name || "—"}
                        </td>
                        <td className="px-4 py-3 text-gray-400">
                          {new Date(u.created_at).toLocaleDateString("es-LA")}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
                            {u.lessonsCompleted}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              u.role === "ADMIN"
                                ? "bg-red-500/20 text-red-300"
                                : "bg-gray-600/30 text-gray-400"
                            }`}
                          >
                            {u.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredUsers.length === 0 && (
                  <p className="p-6 text-center text-sm text-gray-500">
                    No se encontraron usuarios.
                  </p>
                )}
              </div>
              <div className="border-t border-[#334155] px-4 py-3 text-xs text-gray-500">
                {filteredUsers.length} usuarios
              </div>
            </div>
          </motion.div>
        )}

        {/* Cursos Tab */}
        {activeTab === "cursos" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl border border-[#334155] bg-[#1e293b]">
              <div className="border-b border-[#334155] p-4">
                <h3 className="text-lg font-semibold text-white">
                  Cursos ({topCourses.length})
                </h3>
              </div>
              <div className="divide-y divide-[#334155]/50">
                {topCourses.map((course) => (
                  <div
                    key={course.course_name}
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-200">
                        {course.course_name}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        Nivel: {course.level}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">
                          {course.enrolled_count}
                        </div>
                        <div className="text-xs text-gray-500">Inscritos</div>
                      </div>
                      <div className="w-32">
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="text-gray-500">Completion</span>
                          <span className="font-medium text-gray-300">
                            {course.completion_rate}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[#334155]">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor:
                                course.completion_rate > 60
                                  ? "#22c55e"
                                  : course.completion_rate > 30
                                  ? "#f59e0b"
                                  : "#ef4444",
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${course.completion_rate}%` }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {topCourses.length === 0 && (
                  <p className="p-6 text-center text-sm text-gray-500">
                    No hay datos de cursos disponibles.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Contenido Tab */}
        {activeTab === "contenido" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* DB Status */}
            <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                <Database className="size-5 text-blue-400" />
                Base de Datos
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dbStatus.map((t) => (
                  <div
                    key={t.table_name}
                    className="flex items-center justify-between rounded-lg border border-[#334155] bg-[#0f172a] p-3"
                  >
                    <span className="font-mono text-sm text-gray-400">
                      {t.table_name}
                    </span>
                    <span className="text-sm font-bold text-blue-400">
                      {t.row_count?.toLocaleString() ?? 0}
                    </span>
                  </div>
                ))}
                {dbStatus.length === 0 && (
                  <p className="col-span-full text-sm text-gray-500">
                    No hay datos de DB disponibles.
                  </p>
                )}
              </div>
            </div>

            {/* Quiz Stats */}
            {quizStats.length > 0 && (
              <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
                  <BarChart3 className="size-5 text-purple-400" />
                  Tasa de Aprobación por Curso
                </h3>
                <div className="space-y-3">
                  {quizStats.map((stat) => (
                    <div key={stat.course_name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{stat.course_name}</span>
                        <span className="font-medium text-gray-200">
                          {stat.pass_rate}%
                          <span className="ml-2 text-xs text-gray-500">
                            ({stat.passed}/{stat.total_attempts})
                          </span>
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#334155]">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor:
                              stat.pass_rate > 70
                                ? "#22c55e"
                                : stat.pass_rate > 40
                                ? "#f59e0b"
                                : "#ef4444",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.pass_rate}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function StatCard({
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
    <motion.div
      className="rounded-xl border border-[#334155] bg-[#1e293b] p-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-white">
            {value.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

function ChartCard({
  title,
  data,
  color,
}: {
  title: string;
  data: ChartPoint[];
  color: string;
}) {
  const formattedData = data.map((d) => ({
    ...d,
    label: new Date(d.date).toLocaleDateString("es-LA", {
      day: "numeric",
      month: "short",
    }),
  }));

  return (
    <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6">
      <h3 className="mb-4 text-sm font-semibold text-gray-400">{title}</h3>
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="label"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#e2e8f0",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke={color}
              strokeWidth={2}
              dot={{ fill: color, r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-[200px] items-center justify-center text-sm text-gray-500">
          Sin datos disponibles
        </div>
      )}
    </div>
  );
}
