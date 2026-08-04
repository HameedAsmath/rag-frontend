"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

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
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
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
