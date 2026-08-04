"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { askQuestion } from "@/lib/api";
import { ChatMessage, type Message } from "@/components/ChatMessage";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SuggestedPrompts } from "@/components/SuggestedPrompts";
import { KubernetesIcon } from "@/components/icons/KubernetesIcon";

function getThreadId() {
  if (typeof window === "undefined") return "default";
  const existing = window.localStorage.getItem("rag-thread-id");
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem("rag-thread-id", id);
  return id;
}

function newThreadId() {
  const id = crypto.randomUUID();
  window.localStorage.setItem("rag-thread-id", id);
  return id;
}

export default function Home() {
  const [threadId, setThreadId] = useState(getThreadId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(question: string) {
    if (!question || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const answer = await askQuestion(question, threadId);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input.trim());
  }

  function handleNewChat() {
    setThreadId(newThreadId());
    setMessages([]);
    setInput("");
    setError(null);
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Navbar onNewChat={handleNewChat} />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#326CE5]/10 text-[#326CE5]">
                <KubernetesIcon className="h-9 w-9" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Ask me anything about Kubernetes
                </h2>
                <p className="mt-1.5 max-w-md text-sm text-zinc-500 dark:text-zinc-500">
                  Answers are retrieved from your Kubernetes knowledge base —
                  pods, services, scaling, security, and more.
                </p>
              </div>
            </div>
            <SuggestedPrompts onSelect={sendMessage} />
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {messages.map((message, i) => (
              <ChatMessage
                key={i}
                message={message}
                animate={i === messages.length - 1}
              />
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#326CE5]/10 text-[#326CE5]">
                  <KubernetesIcon className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3 dark:bg-zinc-800">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </main>

      <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-black">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-4xl items-end gap-2"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask a question about Kubernetes..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-[15px] text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-600"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="h-10 cursor-pointer rounded-xl bg-zinc-900 px-4 text-sm font-medium text-zinc-50 transition-colors disabled:cursor-not-allowed disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900"
          >
            Send
          </button>
        </form>
        {error && (
          <p className="mx-auto mt-2 w-full max-w-4xl text-sm text-red-500">
            {error}
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
