"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiTutor({ lessonId }: { lessonId?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    // Add placeholder for assistant response
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, lessonId }),
        signal: controller.signal,
      });

      if (!res.ok) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Disculpa, hubo un error. ¿Podés intentar de nuevo?",
          };
          return updated;
        });
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setLoading(false);
        return;
      }

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: text };
          return updated;
        });
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Error de conexión. Intenta de nuevo.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E40AF]"
          style={{ backgroundColor: "#1E40AF" }}
          aria-label="Abrir tutor de IA"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">¿Dudas? Pregúntale al tutor</span>
          <span className="sm:hidden">Tutor IA</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-0 right-0 z-50 flex h-[min(600px,90vh)] w-full flex-col rounded-t-2xl border bg-background shadow-2xl sm:bottom-6 sm:right-6 sm:w-96 sm:rounded-2xl"
          role="dialog"
          aria-label="Tutor de IA"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between rounded-t-2xl px-4 py-3 text-white"
            style={{ backgroundColor: "#1E40AF" }}
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="size-5" aria-hidden="true" />
              <span className="font-semibold">Tutor IA</span>
            </div>
            <button
              onClick={() => {
                abortRef.current?.abort();
                setOpen(false);
              }}
              className="rounded-lg p-1 hover:bg-white/20"
              aria-label="Cerrar tutor"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-base text-muted-foreground py-8">
                <p className="font-medium">¡Hola! Soy tu tutor de IA.</p>
                <p className="mt-1">
                  Pregúntame cualquier duda sobre la lección.
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-base leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#1E40AF] text-white"
                      : "bg-muted"
                  }`}
                >
                  {msg.content || (
                    <Loader2 className="size-4 animate-spin" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="h-12 flex-1 rounded-xl border bg-background px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                maxLength={2000}
                disabled={loading}
                aria-label="Mensaje para el tutor"
              />
              <Button
                type="submit"
                disabled={!input.trim() || loading}
                className="size-12 shrink-0"
                style={{ backgroundColor: "#1E40AF" }}
                aria-label="Enviar mensaje"
              >
                {loading ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Send className="size-5" />
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
