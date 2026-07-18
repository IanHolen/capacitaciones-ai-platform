import { requireAdmin } from "@/lib/admin-auth";
import { NextResponse } from "next/server";

/**
 * GET /api/admin/me
 * Devuelve si el usuario actual es admin (200 siempre, sin ruido de 401/403).
 * Sustituye los checks de email hardcodeado en el cliente.
 */
export async function GET() {
  const { error, user } = await requireAdmin();

  if (error) {
    return NextResponse.json({ isAdmin: false });
  }

  return NextResponse.json({ isAdmin: true, email: user!.email });
}
