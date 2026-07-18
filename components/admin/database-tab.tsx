"use client";

import { useEffect, useState } from "react";
import {
  Database,
  CheckCircle,
  XCircle,
  AlertTriangle,
  HardDrive,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  TabPanel,
  Section,
  StatCard,
  LoadingState,
  UsageBar,
  tableClasses,
  ADMIN_ACCENT,
} from "./ui";

interface TableInfo {
  name: string;
  row_count: number;
  size_kb: number;
}

interface DbHealth {
  db_size_mb?: number;
  db_limit_mb?: number;
  tables?: TableInfo[];
  total_records?: number;
  records_last_30d?: number;
  growth_estimate_mb_month?: number;
  months_until_full?: number | null;
  active_connections?: number;
  error_logs_total?: number;
  error_logs_30d?: number;
}

function formatSize(kb: number): string {
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)} MB`;
  return `${Math.round(kb)} KB`;
}

export function DatabaseTab() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState<DbHealth>({});

  useEffect(() => {
    fetch("/api/admin/db-health")
      .then((r) => (r.ok ? r.json() : {}))
      .then((data) => {
        setHealth(data as DbHealth);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState label="Consultando Supabase..." />;

  const sizeMb = health.db_size_mb ?? 0;
  const limitMb = health.db_limit_mb ?? 500;
  const usagePct = limitMb > 0 ? sizeMb / limitMb : 0;
  const status =
    usagePct > 0.8 ? "critical" : usagePct > 0.6 ? "warning" : "healthy";

  const statusConfig = {
    healthy: {
      icon: <CheckCircle className="size-5 text-green-500" />,
      bg: "#f0fdf4",
      color: "#16a34a",
      label: "Saludable",
      message: "Tu base de datos está en buen estado.",
    },
    warning: {
      icon: <AlertTriangle className="size-5 text-amber-500" />,
      bg: "#fffbeb",
      color: "#d97706",
      label: "Atención",
      message: "Uso moderado — monitorea el crecimiento.",
    },
    critical: {
      icon: <XCircle className="size-5 text-red-500" />,
      bg: "#fef2f2",
      color: "#dc2626",
      label: "Crítico",
      message: "Uso crítico — considera limpiar datos o subir de plan.",
    },
  }[status];

  const tables = (health.tables ?? []).slice().sort((a, b) => b.row_count - a.row_count);
  const maxRows = Math.max(1, ...tables.map((t) => t.row_count));

  return (
    <TabPanel>
      <Section
        title="Uso de la base de datos (Supabase)"
        icon={<Database className="size-4" />}
        action={
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            Refrescar
          </button>
        }
      >
        <div className="rounded-xl border p-6">
          <div className="mb-3 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold" style={{ color: ADMIN_ACCENT }}>
              {sizeMb.toFixed(1)} MB
            </span>
            <span className="text-lg text-muted-foreground">/ {limitMb} MB</span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: statusConfig.bg, color: statusConfig.color }}
            >
              {statusConfig.label}
            </span>
          </div>
          <UsageBar used={sizeMb} limit={limitMb} unit="MB" />
          <div
            className="mt-4 flex items-center gap-3 rounded-xl p-3"
            style={{ backgroundColor: statusConfig.bg }}
          >
            {statusConfig.icon}
            <span className="text-sm font-medium" style={{ color: statusConfig.color }}>
              {statusConfig.message}
            </span>
          </div>
        </div>
      </Section>

      <Section title="Crecimiento y actividad" icon={<TrendingUp className="size-4" />}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<HardDrive className="size-5" />}
            label="Total de registros"
            value={health.total_records ?? 0}
            color={ADMIN_ACCENT}
          />
          <StatCard
            icon={<TrendingUp className="size-5" />}
            label="Registros (30 días)"
            value={health.records_last_30d ?? 0}
            color="#22c55e"
          />
          <StatCard
            icon={<Activity className="size-5" />}
            label="Conexiones activas"
            value={health.active_connections ?? 0}
            color="#7C3AED"
          />
          <StatCard
            icon={<Database className="size-5" />}
            label="Meses hasta llenarse"
            value={
              health.months_until_full != null && health.months_until_full > 0
                ? `~${health.months_until_full}`
                : "∞"
            }
            color="#f59e0b"
            sub={
              health.growth_estimate_mb_month
                ? `~${health.growth_estimate_mb_month} MB/mes`
                : undefined
            }
          />
        </div>
      </Section>

      <Section title={`Tablas (${tables.length})`} icon={<Database className="size-4" />}>
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr className={tableClasses.headRow}>
                <th className={tableClasses.th}>Tabla</th>
                <th className={`${tableClasses.th} text-right`}>Filas</th>
                <th className={`${tableClasses.th} text-right`}>Tamaño</th>
                <th className={`${tableClasses.th} w-[30%]`}>Proporción</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((t) => (
                <tr key={t.name} className={tableClasses.row}>
                  <td className={`${tableClasses.td} font-mono text-xs`}>{t.name}</td>
                  <td className={`${tableClasses.td} text-right font-medium`}>
                    {t.row_count.toLocaleString()}
                  </td>
                  <td className={`${tableClasses.td} text-right text-muted-foreground`}>
                    {t.size_kb > 0 ? formatSize(t.size_kb) : "—"}
                  </td>
                  <td className={tableClasses.td}>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(2, (t.row_count / maxRows) * 100)}%`,
                          backgroundColor: ADMIN_ACCENT,
                          opacity: 0.7,
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={tableClasses.footer}>
            {health.error_logs_total ?? 0} errores registrados en total ·{" "}
            {health.error_logs_30d ?? 0} en los últimos 30 días
          </div>
        </div>
      </Section>
    </TabPanel>
  );
}
