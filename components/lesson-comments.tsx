"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Send, Loader2, Reply, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "react-i18next";

interface Comment {
  id: string;
  body: string;
  created_at: string;
  parent_id: string | null;
  users: {
    id: string;
    name: string;
    avatar_url?: string;
  } | null;
}

function CommentItem({
  comment,
  replies,
  currentUserId,
  onReply,
  onDelete,
}: {
  comment: Comment;
  replies: Comment[];
  currentUserId: string | null;
  onReply: (parentId: string) => void;
  onDelete: (id: string) => void;
}) {
  const { t, i18n } = useTranslation();
  const name = comment.users?.name || "Anónimo";
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const isOwner = currentUserId === comment.users?.id;

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1E40AF]/10 text-sm font-bold text-[#1E40AF]"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-xs text-muted-foreground">
              {new Date(comment.created_at).toLocaleDateString(i18n.language === "en" ? "en-US" : "es-LA", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <p className="mt-1 text-base leading-relaxed whitespace-pre-wrap">
            {comment.body}
          </p>
          <div className="mt-1 flex gap-2">
            <button
              onClick={() => onReply(comment.id)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              aria-label={t("comments.reply")}
            >
              <Reply className="size-3.5" />
              {t("comments.reply")}
            </button>
            {isOwner && (
              <button
                onClick={() => onDelete(comment.id)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-red-600"
                aria-label={t("comments.delete")}
              >
                <Trash2 className="size-3.5" />
                {t("comments.delete")}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="ml-12 space-y-3 border-l-2 border-muted pl-4">
          {replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              replies={[]}
              currentUserId={currentUserId}
              onReply={onReply}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function LessonComments({ lessonId }: { lessonId: string }) {
  const { t } = useTranslation();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setCurrentUserId(user.id);

      try {
        const res = await fetch(`/api/comments/${lessonId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data.comments || []);
        }
      } catch {
        // API not available
      }
      setLoading(false);
    }

    load();
  }, [lessonId]);

  async function handleSubmit() {
    if (!input.trim() || submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId,
          content: input.trim(),
          parentId: replyTo,
        }),
      });

      if (res.ok) {
        setInput("");
        setReplyTo(null);
        // Refresh comments
        const refreshRes = await fetch(`/api/comments/${lessonId}`);
        if (refreshRes.ok) {
          const data = await refreshRes.json();
          setComments(data.comments || []);
        }
      }
    } catch {
      // Error submitting
    }
    setSubmitting(false);
  }

  async function handleDelete(commentId: string) {
    try {
      const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setComments((prev) => prev.filter((c) => c.id !== commentId));
      }
    } catch {
      // Error deleting
    }
  }

  const topLevel = comments.filter((c) => !c.parent_id);
  const repliesMap = new Map<string, Comment[]>();
  for (const c of comments) {
    if (c.parent_id) {
      const existing = repliesMap.get(c.parent_id) || [];
      existing.push(c);
      repliesMap.set(c.parent_id, existing);
    }
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <MessageSquare className="size-5" aria-hidden="true" />
          {t("comments.title")} ({comments.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input */}
        {currentUserId ? (
          <div className="space-y-2">
            {replyTo && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Reply className="size-3.5" />
                {t("comments.replyingTo")}
                <button
                  onClick={() => setReplyTo(null)}
                  className="text-[#1E40AF] hover:underline"
                >
                  {t("comments.cancel")}
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("comments.placeholder")}
                className="h-12 flex-1 rounded-xl border bg-background px-4 text-base focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                maxLength={2000}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit();
                }}
                disabled={submitting}
                aria-label={t("comments.placeholder")}
              />
              <Button
                onClick={handleSubmit}
                disabled={!input.trim() || submitting}
                className="size-12 shrink-0"
                style={{ backgroundColor: "#1E40AF" }}
                aria-label={t("comments.send")}
              >
                {submitting ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <Send className="size-5" />
                )}
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-base text-muted-foreground">
            {t("comments.loginRequired")}
          </p>
        )}

        {/* Comments list */}
        {loading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          </div>
        ) : topLevel.length === 0 ? (
          <p className="text-center text-base text-muted-foreground">
            {t("comments.beFirst")}
          </p>
        ) : (
          <div className="space-y-4">
            {topLevel.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                replies={repliesMap.get(comment.id) || []}
                currentUserId={currentUserId}
                onReply={(parentId) => setReplyTo(parentId)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
