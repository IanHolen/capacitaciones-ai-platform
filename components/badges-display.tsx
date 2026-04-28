"use client";

import { useEffect, useState } from "react";
import { Award, Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface BadgeData {
  earned_at: string;
  badges: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
}

const iconMap: Record<string, string> = {
  "🎯": "🎯",
  "📚": "📚",
  "🏆": "🏆",
  "⭐": "⭐",
  "🚀": "🚀",
  "💡": "💡",
  "🔥": "🔥",
  "🎓": "🎓",
};

export function BadgesDisplay() {
  const { t, i18n } = useTranslation();
  const [badges, setBadges] = useState<BadgeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const lang = i18n.language;

  useEffect(() => {
    async function load() {
      try {
        // Fetch earned badges
        const res = await fetch(`/api/badges?lang=${lang}`);
        if (res.ok) {
          const data = await res.json();
          setBadges(data.badges || []);
        }

        // Check for new badges
        const checkRes = await fetch("/api/badges/check", { method: "POST" });
        if (checkRes.ok) {
          const checkData = await checkRes.json();
          if (checkData.newBadges?.length > 0) {
            setToast(`¡Nuevo badge: ${checkData.newBadges[0]}!`);
            // Refresh badges list
            const refreshRes = await fetch(`/api/badges?lang=${lang}`);
            if (refreshRes.ok) {
              const refreshData = await refreshRes.json();
              setBadges(refreshData.badges || []);
            }
            setTimeout(() => setToast(null), 5000);
          }
        }
      } catch {
        // API not available
      }
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <Card className="rounded-2xl">
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="size-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Toast notification */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-[#1E40AF] px-6 py-3 text-base font-semibold text-white shadow-lg"
          role="alert"
        >
          <span className="mr-2">🏆</span>
          {toast}
        </div>
      )}

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Award className="size-5 text-[#CA8A04]" aria-hidden="true" />
            {t("badges.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {badges.length === 0 ? (
            <p className="text-base text-muted-foreground">
              {t("badges.empty")}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {badges.map((b) => (
                <div
                  key={b.badges.id}
                  className="flex flex-col items-center gap-1 rounded-xl border p-3 text-center"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {iconMap[b.badges.icon] || b.badges.icon || "🏅"}
                  </span>
                  <span className="text-sm font-medium">{b.badges.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(b.earned_at).toLocaleDateString(lang === "en" ? "en-US" : "es-LA")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
