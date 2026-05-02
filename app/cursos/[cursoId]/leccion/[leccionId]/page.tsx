import { notFound } from "next/navigation";
import { getLeccion, nivelConfig, cursos, sandboxLessons } from "@/lib/cursos-data";
import { MarkdownContent } from "@/components/markdown-content";
import { LessonQuizSection } from "@/components/lesson-quiz-section";
import { AutoLessonComplete } from "@/components/auto-lesson-complete";
import { PromptSandbox } from "@/components/prompt-sandbox";
import { AiTutor } from "@/components/ai-tutor";
import { LessonComments } from "@/components/lesson-comments";
import { TextToSpeech } from "@/components/text-to-speech";
import { audioMap, audioMapEn } from "@/lib/audio-map";
import { LocalizedLessonHeader } from "@/components/localized-lesson-header";
import { LocalizedBreadcrumb } from "@/components/localized-breadcrumb";
import { LocalizedLessonNav } from "@/components/localized-lesson-nav";
import { LocalizedSectionTitle } from "@/components/localized-section-title";

export function generateStaticParams() {
  return cursos.flatMap((curso) =>
    curso.lecciones.map((leccion) => ({
      cursoId: curso.id,
      leccionId: leccion.id,
    }))
  );
}

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ cursoId: string; leccionId: string }>;
}) {
  const { cursoId, leccionId } = await params;
  const result = getLeccion(cursoId, leccionId);

  if (!result) {
    notFound();
  }

  const { curso, leccion, index } = result;
  const config = nivelConfig[curso.nivel];
  const prevLeccion = index > 0 ? curso.lecciones[index - 1] : null;
  const nextLeccion =
    index < curso.lecciones.length - 1 ? curso.lecciones[index + 1] : null;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <LocalizedBreadcrumb
        items={[
          {
            label: curso.titulo,
            labelEn: curso.tituloEn,
            href: `/cursos/${curso.id}`,
          },
          {
            label: leccion.titulo,
            labelEn: leccion.tituloEn,
          },
        ]}
      />

      {/* Lesson Header */}
      <LocalizedLessonHeader
        nivel={curso.nivel}
        nivelColor={config.color}
        nivelBg={config.bg}
        nivelLabel={config.label}
        index={index}
        totalLecciones={curso.lecciones.length}
        titulo={leccion.titulo}
        tituloEn={leccion.tituloEn}
        descripcion={leccion.descripcion}
        descripcionEn={leccion.descripcionEn}
      />

      {/* Progress indicator */}
      <div className="mb-8">
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={0}
          aria-valuemax={curso.lecciones.length}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${((index + 1) / curso.lecciones.length) * 100}%`,
              backgroundColor: config.color,
            }}
          />
        </div>
      </div>

      {/* Lesson Content — hide for quiz lessons with interactive quiz to avoid showing answer keys */}
      {!(leccion.tieneQuiz && leccion.quizQuestions) && (
        <div className="mb-10">
          {/* Text-to-Speech */}
          <div className="mb-4">
            <TextToSpeech audioUrl={audioMap[leccion.id]} audioUrlEn={audioMapEn[leccion.id]} />
          </div>

          <LocalizedSectionTitle i18nKey="lesson.content" />
          <div className="rounded-xl border bg-card p-6 text-lg leading-relaxed md:p-8">
            <MarkdownContent
              content={leccion.contenido}
              contentEn={leccion.contenidoEn}
            />
          </div>
        </div>
      )}

      {/* Prompt Sandbox (only for eligible lessons) */}
      {sandboxLessons.has(leccion.id) && (
        <div className="mb-10">
          <PromptSandbox />
        </div>
      )}

      {/* Quiz (if lesson has one) */}
      {leccion.tieneQuiz && leccion.quizQuestions && (
        <LessonQuizSection
          questions={leccion.quizQuestions}
          courseId={curso.id}
          lessonId={leccion.id}
          accentColor={config.color}
          allLessonIds={curso.lecciones.map((l) => l.id)}
        />
      )}

      {/* Auto-complete: non-quiz lessons complete when viewed, quiz lessons complete when passed */}
      {!(leccion.tieneQuiz && leccion.quizQuestions) && (
        <AutoLessonComplete lessonId={leccion.id} />
      )}

      {/* Comments */}
      <div className="mb-10">
        <LessonComments lessonId={leccion.id} />
      </div>

      {/* Navigation */}
      <LocalizedLessonNav
        cursoId={curso.id}
        prevLeccionId={prevLeccion?.id ?? null}
        nextLeccionId={nextLeccion?.id ?? null}
        accentColor={config.color}
      />

      {/* AI Tutor floating chatbot */}
      <AiTutor lessonId={leccion.id} />
    </div>
  );
}
