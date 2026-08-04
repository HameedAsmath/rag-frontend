"use client";

import { KubernetesIcon } from "@/components/icons/KubernetesIcon";

export function Navbar({ onNewChat }: { onNewChat: () => void }) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#326CE5]/10 text-[#326CE5]">
            <KubernetesIcon className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <h1 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50">
                Kubernetes RAG
              </h1>
              <span className="rounded-full bg-zinc-200 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Beta
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Retrieval-augmented answers from your K8s docs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 text-xs text-zinc-500 sm:flex dark:text-zinc-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Connected
          </span>
          <button
            onClick={onNewChat}
            className="cursor-pointer rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            New chat
          </button>
        </div>
      </div>
    </header>
  );
}
