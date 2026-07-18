"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ============================================================
// Piezas compartidas del panel de admin.
// Todas las pestañas usan estos mismos componentes para que el
// layout sea consistente (mismos paddings, tablas, cards).
// ============================================================

export const ADMIN_ACCENT = "#1E40AF";

// Clases compartidas para TODAS las tablas del admin
export const tableClasses = {
  wrapper: "overflow-x-auto rounded-xl border",
  table: "w-full text-sm",
  headRow:
    "border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground",
  th: "px-4 py-3 font-semibold",
  row: "border-b last:border-0 hover:bg-muted/30",
  td: "px-4 py-3",
  footer: "border-t px-4 py-3 text-xs text-muted-foreground",
};

export function TabPanel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  );
}

export function Section({
  title,
  icon,
  action,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {icon}
          {title}
        </h3>
        {action}
      </div>
      {children}
    </section>
  );
}

export interface StatDelta {
  diff: number; // diferencia absoluta vs el periodo anterior
  label: string; // ej. "vs sem. anterior"
}

export function StatCard({
  icon,
  label,
  value,
  color,
  sub,
  delta,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  color: string;
  sub?: string;
  delta?: StatDelta;
}) {
  const deltaUp = delta && delta.diff > 0;
  const deltaDown = delta && delta.diff < 0;

  return (
    <div className="rounded-xl border p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
        {delta && (
          <span
            className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              deltaUp
                ? "bg-green-50 text-green-700"
                : deltaDown
                  ? "bg-red-50 text-red-600"
                  : "bg-muted text-muted-foreground"
            }`}
            title={delta.label}
          >
            {deltaUp ? (
              <ArrowUpRight className="size-3" />
            ) : deltaDown ? (
              <ArrowDownRight className="size-3" />
            ) : (
              <Minus className="size-3" />
            )}
            {delta.diff > 0 ? `+${delta.diff}` : delta.diff}
          </span>
        )}
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tight">
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
      {(sub || delta) && (
        <div className="text-[11px] text-muted-foreground/70">
          {sub ?? delta?.label}
        </div>
      )}
    </div>
  );
}

interface ChartPoint {
  date: string;
  count: number;
}

export function ChartCard({
  title,
  data,
  color,
  total,
}: {
  title: string;
  data: ChartPoint[];
  color: string;
  total?: number;
}) {
  const gradientId = useId();
  const formattedData = data.map((d) => ({
    ...d,
    label: new Date(d.date).toLocaleDateString("es-LA", {
      day: "numeric",
      month: "short",
    }),
  }));

  const sum = total ?? data.reduce((s, d) => s + d.count, 0);

  return (
    <div className="rounded-xl border p-6">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-muted-foreground">{title}</h4>
        <span className="text-lg font-bold">{sum.toLocaleString()}</span>
      </div>
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={formattedData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.22} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
            <XAxis
              dataKey="label"
              stroke="#9ca3af"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#9ca3af"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              width={46}
            />
            <Tooltip
              cursor={{ stroke: "#cbd5e1", strokeDasharray: "3 3" }}
              contentStyle={{
                borderRadius: "10px",
                fontSize: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke={color}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
          Sin datos disponibles
        </div>
      )}
    </div>
  );
}

export function UsageBar({
  used,
  limit,
  unit,
}: {
  used: number;
  limit: number;
  unit: string;
}) {
  const pct = limit > 0 ? Math.round((used / limit) * 100) : 0;
  const color = pct > 80 ? "#ef4444" : pct > 60 ? "#f59e0b" : "#22c55e";

  return (
    <div>
      <div className="mb-1 flex items-center justify-end text-sm">
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
          animate={{ width: `${Math.min(100, pct)}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}

export function ProgressBar({
  percentage,
  color,
}: {
  percentage: number;
  color?: string;
}) {
  const resolved =
    color ?? (percentage > 70 ? "#22c55e" : percentage > 40 ? "#f59e0b" : "#ef4444");
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: resolved }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, percentage)}%` }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

export function LoadingState({ label = "Cargando datos..." }: { label?: string }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-muted-foreground">
      <Loader2 className="size-7 animate-spin" style={{ color: ADMIN_ACCENT }} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  sub,
}: {
  icon?: React.ReactNode;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-8 text-center">
      {icon}
      <p className="text-base font-medium">{title}</p>
      {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}
