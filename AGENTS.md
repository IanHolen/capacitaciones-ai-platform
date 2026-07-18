<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Contexto del proyecto — Certificaciones AI

Plataforma educativa de cursos de IA en español LATAM (público no técnico). Producción: certificacionesai.com (Vercel, repo IanHolen/capacitaciones-ai-platform, main). Supabase proyecto `nqgvngqxslwlbenszgdf` (Certificaciones-AI).

## Arquitectura
- Next.js 16 App Router + React 19 + Tailwind 4 + shadcn/ui. Supabase para auth/datos (RLS en todo). Prisma solo schema/seed.
- CONTENIDO ESTÁTICO: los 15 cursos/110 lecciones/quizzes viven en `lib/cursos-data.ts`, `lib/cursoN-content(-en).ts`, `lib/quiz-data*.ts` (no en BD todavía). Páginas de curso con generateStaticParams.
- LLM: `lib/llm-client.ts` con fallback Gemini (primario, gemini-2.0-flash) → Groq. Usos: tutor, sandbox, búsqueda semántica, planes personalizados.
- Progreso: localStorage (`capacitaciones_progress`, key = slug de lección) + BD best-effort (`user_progress`, resuelve slug→UUID). Quizzes se registran en `quiz_attempts`. Enrollment se upserta al completar lección.
- Admin: `/admin` con sidebar (componentes en `components/admin/`), gate por `admin_users` + fallback holenderian@gmail.com vía `/api/admin/me` y `lib/admin-auth.ts` (service role).
- Personalizados: `/cursos/personalizado` + `/api/personalized` (tablas `business_profiles`, `personalized_plans`). PILOTO: `PILOT_ADMIN_ONLY = true` en el route.
- Certificados: `components/certificate-button.tsx` (jsPDF, diseño navy/dorado), se muestra al completar curso en `localized-course-detail.tsx`.

## Estado / decisiones recientes (jul 2026)
- Fase 0 hecha: admin reconstruido, quiz_attempts, métricas reales, RPCs cerradas a anon/authenticated (solo service_role).
- .env.local se baja con `vercel env pull .env.local --environment production` (6 vars: SUPABASE_URL/ANON/SERVICE_ROLE, DATABASE_URL, GEMINI, GROQ).
- Producción está en commit de mayo; todo lo nuevo está solo en local, SIN pushear.

## Roadmap pendiente (en orden)
1. **Fábrica de cursos (Etapa A→C)**: A) script que vuelca contenido estático a BD (`lesson_contents`, `exercises`, `quiz_options` existen vacías); B) páginas leen de BD como fallback si el slug no está en estático; C) admin "Generar curso" con Gemini → borrador en BD → revisar → publicar.
2. Audio (300MB en `public/audio/`) → Supabase Storage; regenerar `c14-leccion8` y `c15-leccion8` EN (truncados) y faltan `c1-leccion6`, `c3-c3leccion6` ES y varios *-quiz.
3. Progreso BD-first completo, rachas/XP, SEO en páginas de curso, quitar columna `password` de `users`, tests.
4. Activar "Leaked password protection" en Supabase Auth (dashboard, manual).
5. Abrir planes personalizados a todos (PILOT_ADMIN_ONLY = false) cuando la calidad convenza.
