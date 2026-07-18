"use client";

import { useEffect, useState } from "react";
import { BookOpen, BarChart3, MessageSquare, Loader2, GraduationCap } from "lucide-react";
import {
  TabPanel,
  Section,
  StatCard,
  LoadingState,
  EmptyState,
  ProgressBar,
  tableClasses,
  ADMIN_ACCENT,
} from "./ui";

interface CourseProgressRow {
  course_id: string;
  slug: string;
  title: string;
  level: string;
  total_lessons: number;
  students_started: number;
  students_completed: number;
  avg_completion: number;
  lessons_completed_total: number;
}

interface QuizStat {
  course_slug: string;
  course_name: string;
  total_attempts: number;
  passed: number;
  failed: number;
  pass_rate: number;
}

interface CourseComment {
  id: string;
  body: string;
  created_at: string;
  parent_id: string | null;
  user: { id: string; name: string; email: string };
  lesson: { id: string; title: string; slug: string };
}

export function CoursesTab() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<CourseProgressRow[]>([]);
  const [totals, setTotals] = useState<{ students_with_progress: number; lessons_completed: number }>({
    students_with_progress: 0,
    lessons_completed: 0,
  });
  const [quizStats, setQuizStats] = useState<QuizStat[]>([]);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [comments, setComments] = useState<CourseComment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    async function load() {
      const [progressRes, quizRes] = await Promise.all([
        fetch("/api/admin/course-progress").then((r) =>
          r.ok ? r.json() : { courses: [], totals: {} }
        ),
        fetch("/api/admin/quiz-stats").then((r) => (r.ok ? r.json() : { data: [] })),
      ]);
      setCourses(progressRes.courses || []);
      setTotals({
        students_with_progress: progressRes.totals?.students_with_progress ?? 0,
        lessons_completed: progressRes.totals?.lessons_completed ?? 0,
      });
      setQuizStats(quizRes.data || []);
      setLoading(false);
    }
    load();
  }, []);

  async function toggleComments(slug: string) {
    if (selectedSlug === slug) {
      setSelectedSlug(null);
      setComments([]);
      return;
    }
    setSelectedSlug(slug);
    setLoadingComments(true);
    try {
      const res = await fetch(`/api/admin/course-comments?slug=${slug}`);
      const data = res.ok ? await res.json() : { comments: [] };
      setComments(data.comments ?? []);
    } catch {
      setComments([]);
    }
    setLoadingComments(false);
  }

  if (loading) return <LoadingState />;

  const selectedCourse = courses.find((c) => c.slug === selectedSlug);

  return (
    <TabPanel>
      <Section title="Resumen de aprendizaje">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard
            icon={<GraduationCap className="size-5" />}
            label="Alumnos con progreso"
            value={totals.students_with_progress}
            color={ADMIN_ACCENT}
          />
          <StatCard
            icon={<BookOpen className="size-5" />}
            label="Lecciones completadas (total)"
            value={totals.lessons_completed}
            color="#22c55e"
          />
          <StatCard
            icon={<BarChart3 className="size-5" />}
            label="Intentos de quiz registrados"
            value={quizStats.reduce((s, q) => s + q.total_attempts, 0)}
            color="#7C3AED"
          />
        </div>
      </Section>

      <Section title={`Progreso por curso (${courses.length})`} icon={<BookOpen className="size-4" />}>
        <div className={tableClasses.wrapper}>
          <table className={tableClasses.table}>
            <thead>
              <tr className={tableClasses.headRow}>
                <th className={tableClasses.th}>Curso</th>
                <th className={tableClasses.th}>Nivel</th>
                <th className={`${tableClasses.th} text-center`}>Lecciones</th>
                <th className={`${tableClasses.th} text-center`}>Iniciaron</th>
                <th className={`${tableClasses.th} text-center`}>Completaron</th>
                <th className={tableClasses.th}>Avance promedio</th>
                <th className={`${tableClasses.th} text-center`}>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.course_id} className={tableClasses.row}>
                  <td className={`${tableClasses.td} font-medium`}>{c.title}</td>
                  <td className={`${tableClasses.td} whitespace-nowrap text-muted-foreground`}>
                    {c.level}
                  </td>
                  <td className={`${tableClasses.td} text-center text-muted-foreground`}>
                    {c.total_lessons}
                  </td>
                  <td className={`${tableClasses.td} text-center font-medium`}>
                    {c.students_started}
                  </td>
                  <td className={`${tableClasses.td} text-center`}>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        c.students_completed > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {c.students_completed}
                    </span>
                  </td>
                  <td className={`${tableClasses.td} min-w-[160px]`}>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <ProgressBar percentage={c.avg_completion} color={ADMIN_ACCENT} />
                      </div>
                      <span className="w-10 text-right text-xs font-medium">
                        {c.avg_completion}%
                      </span>
                    </div>
                  </td>
                  <td className={`${tableClasses.td} text-center`}>
                    <button
                      onClick={() => toggleComments(c.slug)}
                      className="rounded-lg p-1.5 transition-colors hover:bg-muted"
                      aria-label={`Ver comentarios de ${c.title}`}
                    >
                      <MessageSquare
                        className="size-4"
                        style={{
                          color: selectedSlug === c.slug ? ADMIN_ACCENT : "#9ca3af",
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {selectedSlug && (
        <Section
          title={`Comentarios — ${selectedCourse?.title ?? selectedSlug}`}
          icon={<MessageSquare className="size-4" />}
        >
          {loadingComments ? (
            <div className="flex justify-center p-8">
              <Loader2 className="size-6 animate-spin text-muted-foreground" />
            </div>
          ) : comments.length === 0 ? (
            <EmptyState
              icon={<MessageSquare className="size-8 text-muted-foreground" />}
              title="No hay comentarios para este curso"
            />
          ) : (
            <div className={tableClasses.wrapper}>
              <table className={tableClasses.table}>
                <thead>
                  <tr className={tableClasses.headRow}>
                    <th className={tableClasses.th}>Usuario</th>
                    <th className={tableClasses.th}>Fecha</th>
                    <th className={tableClasses.th}>Lección</th>
                    <th className={tableClasses.th}>Comentario</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((c) => (
                    <tr key={c.id} className={tableClasses.row}>
                      <td className={tableClasses.td}>
                        <div className="font-medium">{c.user.name}</div>
                        <div className="text-xs text-muted-foreground">{c.user.email}</div>
                      </td>
                      <td className={`${tableClasses.td} whitespace-nowrap text-xs text-muted-foreground`}>
                        {new Date(c.created_at).toLocaleDateString("es-LA", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className={`${tableClasses.td} text-xs`}>
                        <span className="rounded-full bg-muted px-2 py-0.5 font-medium">
                          {c.lesson.title}
                        </span>
                      </td>
                      <td className={`${tableClasses.td} max-w-md`}>
                        <p className="whitespace-pre-wrap">{c.body}</p>
                        {c.parent_id && (
                          <span className="mt-1 inline-block text-xs italic text-muted-foreground">
                            (respuesta)
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={tableClasses.footer}>
                {comments.length} comentario{comments.length !== 1 ? "s" : ""}
              </div>
            </div>
          )}
        </Section>
      )}

      <Section title="Tasa de aprobación de quizzes" icon={<BarChart3 className="size-4" />}>
        {quizStats.length === 0 ? (
          <EmptyState
            icon={<BarChart3 className="size-8 text-muted-foreground" />}
            title="Aún no hay intentos de quiz registrados"
            sub="Los intentos se registran automáticamente cuando un alumno termina un quiz."
          />
        ) : (
          <div className="space-y-3">
            {quizStats.map((stat) => (
              <div key={stat.course_slug} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>{stat.course_name}</span>
                  <span className="font-medium">
                    {stat.pass_rate}%
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({stat.passed}/{stat.total_attempts} aprobados)
                    </span>
                  </span>
                </div>
                <ProgressBar percentage={stat.pass_rate} />
              </div>
            ))}
          </div>
        )}
      </Section>
    </TabPanel>
  );
}
