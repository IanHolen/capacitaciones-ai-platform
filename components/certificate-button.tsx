"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface CertificateProps {
  userName: string;
  levelName: string;
  levelColor: string;
  courses: string[];
  completionDate: Date;
  lang: string;
}

const NAVY = "#1E3A8A";
const GOLD = "#C9A227";
const INK = "#111827";
const GRAY = "#6B7280";
const CREAM = "#FDFCF8";

async function generateCertificate({
  userName,
  levelName,
  levelColor,
  courses,
  completionDate,
  lang,
}: CertificateProps) {
  const isEn = lang === "en";
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const CX = W / 2;
  const certId = `CERT-${Date.now().toString(36).toUpperCase()}`;

  // Fondo crema
  doc.setFillColor(CREAM);
  doc.rect(0, 0, W, H, "F");

  // Marco doble: navy grueso + dorado fino
  doc.setDrawColor(NAVY);
  doc.setLineWidth(1.4);
  doc.rect(9, 9, W - 18, H - 18);
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.4);
  doc.rect(12.5, 12.5, W - 25, H - 25);

  // Esquinas doradas
  doc.setLineWidth(0.9);
  doc.setDrawColor(GOLD);
  const c = 12.5;
  const L = 10;
  doc.line(c, c + L, c, c);
  doc.line(c, c, c + L, c);
  doc.line(W - c - L, c, W - c, c);
  doc.line(W - c, c, W - c, c + L);
  doc.line(c, H - c - L, c, H - c);
  doc.line(c, H - c, c + L, H - c);
  doc.line(W - c - L, H - c, W - c, H - c);
  doc.line(W - c, H - c, W - c, H - c - L);

  // Marca
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(GRAY);
  doc.text("C E R T I F I C A C I O N E S   A I", CX, 28, { align: "center" });

  // Título
  doc.setFont("times", "bold");
  doc.setFontSize(38);
  doc.setTextColor(NAVY);
  doc.text(isEn ? "CERTIFICATE" : "CERTIFICADO", CX, 44, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(GOLD);
  doc.text(isEn ? "O F   C O M P L E T I O N" : "D E   F I N A L I Z A C I Ó N", CX, 52, {
    align: "center",
  });

  // Regla dorada con diamante
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.5);
  doc.line(CX - 45, 58, CX - 4, 58);
  doc.line(CX + 4, 58, CX + 45, 58);
  doc.setFillColor(GOLD);
  doc.triangle(CX - 3, 58, CX, 56.2, CX + 3, 58, "F");
  doc.triangle(CX - 3, 58, CX, 59.8, CX + 3, 58, "F");

  // Otorgado a
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(GRAY);
  doc.text(
    isEn ? "This certificate is proudly presented to" : "Se otorga el presente certificado a",
    CX,
    72,
    { align: "center" }
  );

  // Nombre con subrayado dorado
  doc.setFont("times", "bolditalic");
  doc.setFontSize(34);
  doc.setTextColor(INK);
  doc.text(userName, CX, 87, { align: "center" });
  const nameW = doc.getTextWidth(userName);
  doc.setDrawColor(GOLD);
  doc.setLineWidth(0.4);
  doc.line(CX - nameW / 2 - 6, 91, CX + nameW / 2 + 6, 91);

  // Curso(s)
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(GRAY);
  doc.text(
    courses.length > 1
      ? isEn
        ? "for successfully completing the courses"
        : "por haber completado satisfactoriamente los cursos"
      : isEn
        ? "for successfully completing the course"
        : "por haber completado satisfactoriamente el curso",
    CX,
    102,
    { align: "center" }
  );

  const courseText = courses.join("  ·  ");
  doc.setFont("helvetica", "bold");
  doc.setTextColor(NAVY);
  let courseSize = 17;
  doc.setFontSize(courseSize);
  while (doc.getTextWidth(courseText) > W - 70 && courseSize > 10) {
    courseSize -= 1;
    doc.setFontSize(courseSize);
  }
  doc.text(courseText, CX, 112, { align: "center" });

  // Chip de nivel
  const chipText = `${isEn ? "LEVEL" : "NIVEL"}  ${levelName.toUpperCase()}`;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  const chipW = doc.getTextWidth(chipText) + 14;
  doc.setFillColor(levelColor);
  doc.roundedRect(CX - chipW / 2, 119, chipW, 9, 4.5, 4.5, "F");
  doc.setTextColor("#FFFFFF");
  doc.text(chipText, CX, 125, { align: "center" });

  // Sello rosetón
  const sy = 156;
  const sr = 12;
  doc.setFillColor(GOLD);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    doc.circle(CX + Math.cos(a) * sr, sy + Math.sin(a) * sr, 1.7, "F");
  }
  doc.circle(CX, sy, sr, "F");
  doc.setFillColor(NAVY);
  doc.circle(CX, sy, sr - 2.2, "F");
  doc.setFont("times", "bold");
  doc.setFontSize(15);
  doc.setTextColor("#FFFFFF");
  doc.text("AI", CX, sy + 1.8, { align: "center" });

  // Firmas
  const dateStr = completionDate.toLocaleDateString(isEn ? "en-US" : "es-LA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.setDrawColor(INK);
  doc.setLineWidth(0.3);
  doc.line(45, 162, 105, 162);
  doc.line(W - 105, 162, W - 45, 162);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(INK);
  doc.text(dateStr, 75, 158, { align: "center" });
  doc.setFont("times", "italic");
  doc.setFontSize(12);
  doc.text("Certificaciones AI", W - 75, 158, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(GRAY);
  doc.text(isEn ? "DATE" : "FECHA", 75, 167, { align: "center" });
  doc.text(isEn ? "EDUCATIONAL PLATFORM" : "PLATAFORMA EDUCATIVA", W - 75, 167, {
    align: "center",
  });

  // Verificación
  doc.setFontSize(8);
  doc.setTextColor("#9CA3AF");
  doc.text(
    `${isEn ? "Verification ID" : "ID de verificación"}: ${certId}  ·  certificacionesai.com`,
    CX,
    H - 16,
    { align: "center" }
  );

  doc.save(`certificado-${levelName.toLowerCase()}-${certId}.pdf`);
}

export function CertificateButton({
  userName,
  levelName,
  levelColor,
  courses,
}: {
  userName: string;
  levelName: string;
  levelColor: string;
  courses: string[];
}) {
  const { t, i18n } = useTranslation();
  const [generating, setGenerating] = useState(false);

  async function handleDownload() {
    setGenerating(true);
    try {
      await generateCertificate({
        userName,
        levelName,
        levelColor,
        courses,
        completionDate: new Date(),
        lang: i18n.language,
      });
    } catch {
      // Error generando PDF
    }
    setGenerating(false);
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={generating}
      className="h-12 gap-2 px-6 text-base font-semibold"
      style={{ backgroundColor: levelColor }}
    >
      {generating ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          {t("certificate.generating")}
        </>
      ) : (
        <>
          <Download className="size-5" />
          {t("certificate.download")}
        </>
      )}
    </Button>
  );
}
