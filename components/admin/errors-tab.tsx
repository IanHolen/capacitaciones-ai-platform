"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { TabPanel, Section, LoadingState, tableClasses } from "./ui";

interface ErrorEntry {
  timestamp: string;
  route: string;
  message: string;
  status_code: number;
}

export function ErrorsTab() {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<ErrorEntry[]>([]);

  useEffect(() => {
    fetch("/api/admin/errors")
      .then((r) => (r.ok ? r.json() : { errors: [] }))
      .then((data) => {
        setErrors(data.errors || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;

  return (
    <TabPanel>
      <Section
        title={`Errores recientes (${errors.length})`}
        icon={<AlertTriangle className="size-4 text-red-500" />}
      >
        {errors.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-2 text-center">
            <CheckCircle className="size-10 text-green-500" />
            <p className="text-base font-medium text-green-700">Sin errores recientes</p>
            <p className="text-sm text-muted-foreground">Todo funciona correctamente.</p>
          </div>
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr className={tableClasses.headRow}>
                  <th className={tableClasses.th}>Timestamp</th>
                  <th className={tableClasses.th}>Ruta</th>
                  <th className={tableClasses.th}>Status</th>
                  <th className={tableClasses.th}>Mensaje</th>
                </tr>
              </thead>
              <tbody>
                {errors.map((err, i) => (
                  <tr key={i} className={tableClasses.row}>
                    <td className={`${tableClasses.td} whitespace-nowrap text-xs text-muted-foreground`}>
                      {new Date(err.timestamp).toLocaleString("es-LA")}
                    </td>
                    <td className={`${tableClasses.td} font-mono text-xs`}>{err.route}</td>
                    <td className={tableClasses.td}>
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
                        {err.status_code}
                      </span>
                    </td>
                    <td className={`${tableClasses.td} text-muted-foreground`}>{err.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </TabPanel>
  );
}
