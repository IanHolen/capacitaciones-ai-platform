"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export function AuthLink({
  href,
  loginRedirect = "/login",
  children,
  ...props
}: {
  href: string;
  loginRedirect?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href">) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setLoggedIn(!!user);
    });
  }, []);

  const target = loggedIn === false ? loginRedirect : href;

  return (
    <Link href={target} {...props}>
      {children}
    </Link>
  );
}
