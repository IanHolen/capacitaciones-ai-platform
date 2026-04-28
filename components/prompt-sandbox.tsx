"use client";

import { useState, useRef } from "react";
import { Send, Loader2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export function PromptSandbox() {
  const { t, i18n } = useTranslation();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function handleSubmit() {
    if (!prompt.trim() || loading) return;
    setError("");
    setResponse("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/sandbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim(), lang: i18n.language }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || t("sandbox.connectionError"));
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setError(t("sandbox.connectionError"));
        setLoading(false);
        return;
      }

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResponse(text);
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setError(t("sandbox.connectionError"));
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }

  function handleReset() {
    abortRef.current?.abort();
    setPrompt("");
    setResponse("");
    setError("");
    setLoading(false);
  }

  return (
    <Card className="rounded-2xl border-2 border-[#1E40AF]/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl" style={{ color: "#1E40AF" }}>
          <span aria-hidden="true">🧪</span>
          {t("sandbox.title")}
        </CardTitle>
        <p className="text-base text-muted-foreground">
          {t("sandbox.description")}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="sandbox-prompt" className="sr-only">
            {t("sandbox.placeholder")}
          </label>
          <textarea
            id="sandbox-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t("sandbox.placeholder")}
            className="min-h-[120px] w-full resize-y rounded-xl border bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            maxLength={4000}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit();
            }}
            disabled={loading}
          />
          <div className="mt-1 text-right text-sm text-muted-foreground">
            {prompt.length}/4000
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleSubmit}
            disabled={!prompt.trim() || loading}
            className="h-12 flex-1 gap-2 text-base font-semibold"
            style={{ backgroundColor: "#1E40AF" }}
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                {t("sandbox.generating")}
              </>
            ) : (
              <>
                <Send className="size-5" />
                {t("sandbox.send")}
              </>
            )}
          </Button>
          {(response || error) && (
            <Button
              onClick={handleReset}
              variant="outline"
              className="h-12 gap-2 text-base"
              aria-label={t("sandbox.clear")}
            >
              <RotateCcw className="size-4" />
            </Button>
          )}
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-base text-red-700" role="alert">
            {error}
          </div>
        )}

        {response && (
          <div
            className="rounded-xl border bg-muted/30 p-4 text-base leading-relaxed whitespace-pre-wrap"
            aria-live="polite"
            aria-label={t("sandbox.responseLabel")}
          >
            {response}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
