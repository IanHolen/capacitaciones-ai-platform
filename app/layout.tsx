import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { HeaderNav } from "@/components/header-nav";
import { I18nProvider } from "@/components/i18n-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capacitaciones IA",
  description:
    "Plataforma educativa de cursos de Inteligencia Artificial para todos los niveles. Aprende desde cero, sin conocimientos previos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col text-[18px] leading-relaxed" suppressHydrationWarning>
        <I18nProvider>
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

              <HeaderNav />
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
        </I18nProvider>
      </body>
    </html>
  );
}
