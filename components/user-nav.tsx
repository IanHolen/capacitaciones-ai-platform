"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, LogIn } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function UserNav() {
  const [user, setUser] = useState<{
    email?: string;
    name?: string;
  } | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUser({
          email: user.email,
          name: user.user_metadata?.name,
        });
      }
      setChecked(true);
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (!checked) return null;

  if (!user) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
      >
        <LogIn className="size-5" aria-hidden="true" />
        <span>Iniciar sesión</span>
      </Link>
    );
  }

  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <Link href="/cuenta" className="flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-bold text-white">
          {initials}
        </div>
        <span className="hidden text-base font-semibold sm:inline">
          {user.name || user.email?.split("@")[0]}
        </span>
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Cerrar sesión"
      >
        <LogOut className="size-4" aria-hidden="true" />
        <span className="hidden sm:inline">Salir</span>
      </button>
    </div>
  );
}
