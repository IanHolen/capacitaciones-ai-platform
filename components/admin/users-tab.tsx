"use client";

import { useEffect, useState } from "react";
import { Search, Users } from "lucide-react";
import { TabPanel, Section, LoadingState, EmptyState, tableClasses, ADMIN_ACCENT } from "./ui";

interface UserRow {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
  last_sign_in?: string | null;
  lessonsCompleted: number;
}

export function UsersTab() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"created_at" | "lessonsCompleted">("created_at");

  useEffect(() => {
    fetch("/api/admin/users")
      .then((r) => (r.ok ? r.json() : { users: [] }))
      .then((data) => {
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;

  const filtered = users
    .filter(
      (u) =>
        u.email?.toLowerCase().includes(search.toLowerCase()) ||
        u.name?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "lessonsCompleted"
        ? b.lessonsCompleted - a.lessonsCompleted
        : new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  return (
    <TabPanel>
      <Section
        title={`Usuarios registrados (${users.length})`}
        icon={<Users className="size-4" />}
        action={
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setSort("created_at")}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                sort === "created_at"
                  ? "bg-[#1E40AF] text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Recientes
            </button>
            <button
              onClick={() => setSort("lessonsCompleted")}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                sort === "lessonsCompleted"
                  ? "bg-[#1E40AF] text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Más activos
            </button>
          </div>
        }
      >
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por email o nombre..."
            className="h-10 w-full rounded-lg border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Users className="size-8 text-muted-foreground" />}
            title="No se encontraron usuarios"
            sub={search ? `Sin resultados para "${search}"` : undefined}
          />
        ) : (
          <div className={tableClasses.wrapper}>
            <table className={tableClasses.table}>
              <thead>
                <tr className={tableClasses.headRow}>
                  <th className={tableClasses.th}>Email</th>
                  <th className={tableClasses.th}>Nombre</th>
                  <th className={tableClasses.th}>Registro</th>
                  <th className={`${tableClasses.th} text-center`}>Lecciones</th>
                  <th className={tableClasses.th}>Rol</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id} className={tableClasses.row}>
                    <td className={`${tableClasses.td} font-medium`}>{u.email}</td>
                    <td className={`${tableClasses.td} text-muted-foreground`}>
                      {u.name || "—"}
                    </td>
                    <td className={`${tableClasses.td} whitespace-nowrap text-muted-foreground`}>
                      {new Date(u.created_at).toLocaleDateString("es-LA")}
                    </td>
                    <td className={`${tableClasses.td} text-center`}>
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{ backgroundColor: `${ADMIN_ACCENT}10`, color: ADMIN_ACCENT }}
                      >
                        {u.lessonsCompleted}
                      </span>
                    </td>
                    <td className={tableClasses.td}>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          u.role === "ADMIN"
                            ? "bg-red-100 text-red-600"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {u.role || "USER"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={tableClasses.footer}>
              {filtered.length} usuario{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>
        )}
      </Section>
    </TabPanel>
  );
}
