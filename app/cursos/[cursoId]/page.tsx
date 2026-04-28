import { notFound } from "next/navigation";
import { getCurso, nivelConfig, cursos } from "@/lib/cursos-data";
import { LocalizedBreadcrumb } from "@/components/localized-breadcrumb";
import { LocalizedCourseDetail } from "@/components/localized-course-detail";

export function generateStaticParams() {
  return cursos.map((curso) => ({ cursoId: curso.id }));
}

export default async function CursoDetallePage({
  params,
}: {
  params: Promise<{ cursoId: string }>;
}) {
  const { cursoId } = await params;
  const curso = getCurso(cursoId);

  if (!curso) {
    notFound();
  }

  const config = nivelConfig[curso.nivel];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:py-16">
      <LocalizedBreadcrumb
        items={[
          {
            label: curso.titulo,
            labelEn: curso.tituloEn,
          },
        ]}
      />

      <LocalizedCourseDetail
        curso={curso}
        nivelColor={config.color}
        nivelBg={config.bg}
        nivelLabel={config.label}
      />
    </div>
  );
}
