import packageJson from "@/package.json";

export function Footer() {
  return (
    <div className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-2.5 text-[11px] text-zinc-400 dark:text-zinc-600">
        <span>
          Kubernetes RAG Assistant — answers are generated from retrieved
          documentation and may be incomplete.
        </span>
        <span className="font-mono">v{packageJson.version}</span>
      </div>
    </div>
  );
}
