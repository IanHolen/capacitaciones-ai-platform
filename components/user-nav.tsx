"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function UserNav() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(
    null,
  );

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({
          email: user.email,
          name: user.user_metadata?.name,
        });
      }
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm text-muted-foreground sm:inline">
        {user.name || user.email}
      </span>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Cerrar sesion"
      >
        <LogOut className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">Salir</span>
      </button>
    </div>
  );
}
