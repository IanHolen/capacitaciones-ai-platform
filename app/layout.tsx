import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BookOpen, LayoutDashboard } from "lucide-react";
import { UserNav } from "@/components/user-nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capacitaciones IA — Aprende Inteligencia Artificial",
  description:
    "Plataforma educativa de cursos de Inteligencia Artificial para todos los niveles. Aprende desde cero, sin conocimientos previos.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-lg font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-[18px] leading-relaxed">
        <>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Ir al contenido principal
          </a>

          <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav
              className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
              aria-label="Navegación principal"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                style={{ color: "#1E40AF" }}
              >
                <BookOpen className="size-7" aria-hidden="true" />
                <span>Capacitaciones IA</span>
              </Link>

              <div className="hidden items-center gap-1 md:flex">
                <NavLink href="/cursos">
                  <BookOpen className="size-5" aria-hidden="true" />
                  Cursos
                </NavLink>
                <NavLink href="/cuenta">
                  <LayoutDashboard className="size-5" aria-hidden="true" />
                  Mi Progreso
                </NavLink>

                <UserNav />
              </div>

              {/* Mobile */}
              <div className="flex items-center gap-2 md:hidden">
                <NavLink href="/cursos">
                  <BookOpen className="size-5" aria-hidden="true" />
                  <span className="sr-only">Cursos</span>
                </NavLink>

                <UserNav />
              </div>
            </nav>
          </header>

          <main id="main-content" className="flex flex-1 flex-col">
            {children}
          </main>

          <footer className="border-t bg-muted/30 py-8">
            <div className="mx-auto max-w-6xl px-4 text-center text-base text-muted-foreground">
              <p>&copy; 2026 Capacitaciones IA. Todos los derechos reservados.</p>
            </div>
          </footer>
        </>
      </body>
    </html>
  );
}
