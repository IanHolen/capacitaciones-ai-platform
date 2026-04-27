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

  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-bold text-white">
          {initials}
        </div>
        <span className="hidden text-base font-semibold sm:inline">
          {user.name || user.email?.split("@")[0]}
        </span>
      </div>
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
