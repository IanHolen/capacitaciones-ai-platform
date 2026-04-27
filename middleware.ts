import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/perfil/:path*", "/cursos/:path*", "/cuenta/:path*", "/onboarding/:path*", "/admin/:path*"],
};
