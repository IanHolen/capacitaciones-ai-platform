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
  AlertTriangle,
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
} from "recharts";
import { createClient } from "@/lib/supabase/client";
import { cursos, nivelConfig } from "@/lib/cursos-data";

const ADMIN_EMAIL = "holenderian@gmail.com";

type Tab = "overview" | "usuarios" | "cursos" | "contenido" | "errores";

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

interface DbHealth {
  status?: string;
  database?: {
    sizeMb: number | string;
    sizeLimit: string;
    totalRecords: number;
    tableCounts: Record<string, number | string>;
    activeConnections: number | string;
  };
  freeTierLimits?: Record<string, string>;
}

interface ErrorEntry {
  timestamp: string;
  route: string;
  message: string;
  status_code: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const [metrics, setMetrics] = useState<Metrics>({});
  const [signups, setSignups] = useState<ChartPoint[]>([]);
  const [completions, setCompletions] = useState<ChartPoint[]>([]);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [quizStats, setQuizStats] = useState<QuizStat[]>([]);
  const [dbHealth, setDbHealth] = useState<DbHealth>({});
  const [errors, setErrors] = useState<ErrorEntry[]>([]);
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

      const [metricsRes, signupsRes, completionsRes, usersRes, quizRes, dbRes, errorsRes] =
        await Promise.all([
          fetch("/api/admin/metrics").then((r) => (r.ok ? r.json() : {})),
          fetch("/api/admin/signups-chart").then((r) => (r.ok ? r.json() : { data: [] })),
          fetch("/api/admin/completions-chart").then((r) => (r.ok ? r.json() : { data: [] })),
          fetch("/api/admin/users").then((r) => (r.ok ? r.json() : { users: [] })),
          fetch("/api/admin/quiz-stats").then((r) => (r.ok ? r.json() : { data: [] })),
          fetch("/api/admin/db-health").then((r) => (r.ok ? r.json() : {})),
          fetch("/api/admin/errors").then((r) => (r.ok ? r.json() : { errors: [] })),
        ]);

      const mData = metricsRes as Record<string, unknown>;
      setMetrics(
        (mData?.data as Metrics[] | undefined)?.[0] || (mData as Metrics) || {},
      );
      setSignups(signupsRes.data || []);
      setCompletions(completionsRes.data || []);
      setUsers(usersRes.users || []);
      setQuizStats(quizRes.data || []);
      setDbHealth(dbRes as DbHealth || {});
      setErrors(errorsRes.errors || []);

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

  const filteredUsers = users
    .filter(
      (u) =>
        u.email?.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.name?.toLowerCase().includes(userSearch.toLowerCase()),
    )
    .sort((a, b) =>
      userSort === "lessonsCompleted"
        ? b.lessonsCompleted - a.lessonsCompleted
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "usuarios", label: "Usuarios" },
    { id: "cursos", label: "Cursos" },
    { id: "contenido", label: "Contenido" },
    { id: "errores", label: "Errores" },
  ];

  const db = dbHealth.database;
  const dbSizeMb = typeof db?.sizeMb === "number" ? db.sizeMb : 0;
  const tableCounts = db?.tableCounts ? Object.entries(db.tableCounts) : [];
  const activeConns = typeof db?.activeConnections === "number" ? db.activeConnections : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold" style={{ color: "#1E40AF" }}>
          Admin Console
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity className="size-4 text-green-500" />
          Sistema activo
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl bg-muted/50 p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-white text-[#1E40AF] shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {tab.id === "errores" && errors.length > 0 && (
              <span className="ml-1.5 rounded-full bg-red-100 px-1.5 py-0.5 text-xs text-red-600">
                {errors.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content — consistent container */}
      <div className="min-h-[400px] w-full">
      {/* Overview Tab */}
      {activeTab === "overview" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={<Users className="size-5" />} label="Total Usuarios" value={metrics.total_users ?? 0} color="#1E40AF" />
            <StatCard icon={<TrendingUp className="size-5" />} label="Activos (7d)" value={metrics.active_users_7d ?? 0} color="#22c55e" />
            <StatCard icon={<CheckCircle className="size-5" />} label="Lecciones Completadas" value={metrics.lessons_completed ?? 0} color="#7C3AED" />
            <StatCard icon={<BookOpen className="size-5" />} label="Cursos Totales" value={15} color="#f59e0b" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard icon={<CheckCircle className="size-5" />} label="Quizzes Aprobados" value={metrics.quizzes_approved ?? 0} color="#22c55e" />
            <StatCard icon={<XCircle className="size-5" />} label="Quizzes Reprobados" value={metrics.quizzes_failed ?? 0} color="#ef4444" />
            <StatCard icon={<MessageSquare className="size-5" />} label="Comentarios" value={metrics.total_comments ?? 0} color="#06b6d4" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Registros — últimos 7 días" data={signups} color="#1E40AF" />
            <ChartCard title="Lecciones completadas — últimos 30 días" data={completions} color="#22c55e" />
          </div>
        </motion.div>
      )}

      {/* Usuarios Tab */}
      {activeTab === "usuarios" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="rounded-xl border">
            <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative max-w-xs flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  placeholder="Buscar por email o nombre..."
                  className="h-10 w-full rounded-lg border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>
              <div className="flex gap-2 text-xs">
                <button
                  onClick={() => setUserSort("created_at")}
                  className={`rounded-md px-3 py-1.5 font-medium ${
                    userSort === "created_at" ? "bg-[#1E40AF] text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Recientes
                </button>
                <button
                  onClick={() => setUserSort("lessonsCompleted")}
                  className={`rounded-md px-3 py-1.5 font-medium ${
                    userSort === "lessonsCompleted" ? "bg-[#1E40AF] text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Más activos
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Registro</th>
                    <th className="px-4 py-3 text-center">Lecciones</th>
                    <th className="px-4 py-3">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">{u.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{u.name || "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(u.created_at).toLocaleDateString("es-LA")}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="rounded-full bg-[#1E40AF]/10 px-2 py-0.5 text-xs font-medium text-[#1E40AF]">
                          {u.lessonsCompleted}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          u.role === "ADMIN" ? "bg-red-100 text-red-600" : "bg-muted text-muted-foreground"
                        }`}>
                          {u.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <p className="p-6 text-center text-sm text-muted-foreground">No se encontraron usuarios.</p>
              )}
            </div>
            <div className="border-t px-4 py-3 text-xs text-muted-foreground">
              {filteredUsers.length} usuarios
            </div>
          </div>
        </motion.div>
      )}

      {/* Cursos Tab — reads from static cursos-data.ts */}
      {activeTab === "cursos" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="rounded-xl border">
            <div className="border-b p-4">
              <h3 className="text-lg font-semibold">Cursos ({cursos.length})</h3>
            </div>
            <div className="divide-y">
              {cursos.map((curso) => {
                const config = nivelConfig[curso.nivel];
                return (
                  <div key={curso.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <div className="font-medium">{curso.titulo}</div>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: config.bg, color: config.color }}
                        >
                          {config.label}
                        </span>
                        <span>{curso.lecciones.length} lecciones</span>
                        <span>{curso.duracion}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold" style={{ color: config.color }}>
                          {curso.lecciones.length}
                        </div>
                        <div className="text-xs text-muted-foreground">Lecciones</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#1E40AF]">
                          {curso.lecciones.filter((l) => l.tieneQuiz).length}
                        </div>
                        <div className="text-xs text-muted-foreground">Quizzes</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Contenido Tab — DB Health */}
      {activeTab === "contenido" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {/* DB Usage */}
          <div className="rounded-xl border p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Database className="size-5 text-[#1E40AF]" />
              Base de Datos
            </h3>

            {db ? (
              <div className="space-y-4">
                <UsageBar
                  label="Database"
                  used={dbSizeMb}
                  limit={500}
                  unit="MB"
                />
                {activeConns != null && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Conexiones activas</span>
                    <span className="font-bold text-[#1E40AF]">{activeConns}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total registros</span>
                  <span className="font-bold text-[#1E40AF]">{db.totalRecords?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="flex items-center gap-1 font-medium text-green-600">
                    <Activity className="size-3" /> {dbHealth.status || "healthy"}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Cargando datos de la base de datos...
              </p>
            )}

            {/* Table counts */}
            {tableCounts.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                  Registros por tabla
                </h4>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {tableCounts.map(([name, count]) => (
                    <div key={name} className="flex items-center justify-between rounded-lg border p-3">
                      <span className="font-mono text-sm">{name}</span>
                      <span className="font-bold text-[#1E40AF]">
                        {typeof count === "number" ? count.toLocaleString() : count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quiz Stats */}
          {quizStats.length > 0 && (
            <div className="rounded-xl border p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <BarChart3 className="size-5 text-[#7C3AED]" />
                Tasa de Aprobación por Curso
              </h3>
              <div className="space-y-3">
                {quizStats.map((stat) => (
                  <div key={stat.course_name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{stat.course_name}</span>
                      <span className="font-medium">
                        {stat.pass_rate}%
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({stat.passed}/{stat.total_attempts})
                        </span>
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            stat.pass_rate > 70 ? "#22c55e" : stat.pass_rate > 40 ? "#f59e0b" : "#ef4444",
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

      {/* Errores Tab */}
      {activeTab === "errores" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="rounded-xl border">
            <div className="border-b p-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <AlertTriangle className="size-5 text-red-500" />
                Errores recientes ({errors.length})
              </h3>
            </div>
            {errors.length === 0 ? (
              <div className="flex flex-col items-center gap-2 p-8 text-center">
                <CheckCircle className="size-10 text-green-500" />
                <p className="text-base font-medium text-green-700">Sin errores recientes</p>
                <p className="text-sm text-muted-foreground">Todo funciona correctamente.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-4 py-3">Timestamp</th>
                      <th className="px-4 py-3">Ruta</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {errors.map((err, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {new Date(err.timestamp).toLocaleString("es-LA")}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs">{err.route}</td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                            {err.status_code}
                          </span>
                        </td>
                        <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">
                          {err.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
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
      className="rounded-xl border p-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold">{value.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
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
    <div className="rounded-xl border p-6">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground">{title}</h3>
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="label" stroke="#9ca3af" fontSize={11} tickLine={false} />
            <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} allowDecimals={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                fontSize: "12px",
                border: "1px solid #e5e7eb",
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
        <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
          Sin datos disponibles
        </div>
      )}
    </div>
  );
}

function UsageBar({
  label,
  used,
  limit,
  unit,
}: {
  label: string;
  used: number;
  limit: number;
  unit: string;
}) {
  const pct = limit > 0 ? Math.round((used / limit) * 100) : 0;
  const color = pct > 80 ? "#ef4444" : pct > 60 ? "#f59e0b" : "#22c55e";

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">
          {used.toFixed(1)} {unit} / {limit} {unit}
          <span className="ml-1 text-xs" style={{ color }}>
            ({pct}%)
          </span>
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}
