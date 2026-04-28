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

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const certId = `CERT-${Date.now().toString(36).toUpperCase()}`;

  // Border
  doc.setDrawColor(levelColor);
  doc.setLineWidth(2);
  doc.rect(8, 8, width - 16, height - 16);
  doc.setLineWidth(0.5);
  doc.rect(12, 12, width - 24, height - 24);

  // Header
  doc.setFontSize(14);
  doc.setTextColor("#6B7280");
  doc.text("Certificaciones AI", width / 2, 30, { align: "center" });

  // Title
  doc.setFontSize(32);
  doc.setTextColor("#1E40AF");
  doc.text(isEn ? "CERTIFICATE OF COMPLETION" : "CERTIFICADO DE COMPLETACIÓN", width / 2, 50, { align: "center" });

  // Divider line
  doc.setDrawColor(levelColor);
  doc.setLineWidth(1);
  doc.line(width / 2 - 60, 56, width / 2 + 60, 56);

  // "Otorgado a"
  doc.setFontSize(14);
  doc.setTextColor("#6B7280");
  doc.text(isEn ? "Awarded to" : "Otorgado a", width / 2, 70, { align: "center" });

  // User name
  doc.setFontSize(28);
  doc.setTextColor("#111827");
  doc.text(userName, width / 2, 85, { align: "center" });

  // Level
  doc.setFontSize(16);
  doc.setTextColor(levelColor);
  doc.text(`${isEn ? "Level" : "Nivel"}: ${levelName}`, width / 2, 100, { align: "center" });

  // Courses completed
  doc.setFontSize(11);
  doc.setTextColor("#6B7280");
  doc.text(isEn ? "Courses completed:" : "Cursos completados:", width / 2, 115, { align: "center" });

  let y = 122;
  doc.setFontSize(10);
  doc.setTextColor("#374151");
  for (const course of courses) {
    doc.text(`• ${course}`, width / 2, y, { align: "center" });
    y += 6;
  }

  // Date
  y = Math.max(y + 8, 155);
  doc.setFontSize(12);
  doc.setTextColor("#6B7280");
  const dateStr = completionDate.toLocaleDateString(isEn ? "en-US" : "es-LA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.text(`${isEn ? "Date" : "Fecha"}: ${dateStr}`, width / 2, y, { align: "center" });

  // Cert ID
  doc.setFontSize(8);
  doc.setTextColor("#9CA3AF");
  doc.text(`${isEn ? "Verification ID" : "ID de verificación"}: ${certId}`, width / 2, height - 18, {
    align: "center",
  });

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
      // Error generating PDF
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
