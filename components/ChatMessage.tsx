"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { KubernetesIcon } from "@/components/icons/KubernetesIcon";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatMessage({
  message,
  animate,
}: {
  message: Message;
  animate: boolean;
}) {
  const isUser = message.role === "user";
  const displayed = useTypewriter(message.content, animate && !isUser);

  return (
    <div className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
            : "bg-[#326CE5]/10 text-[#326CE5]"
        }`}
      >
        {isUser ? (
          <span className="text-xs font-semibold">U</span>
        ) : (
          <KubernetesIcon className="h-4 w-4" />
        )}
      </div>
      <div
        className={`max-w-[75%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
          isUser
            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
            : "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
        }`}
      >
        {isUser ? message.content : displayed}
      </div>
    </div>
  );
}
