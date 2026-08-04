const PROMPTS = [
  {
    topic: "Pods & Deployments",
    question: "What's the difference between a Deployment and a StatefulSet?",
  },
  {
    topic: "Services & Networking",
    question: "How does a Kubernetes Service route traffic to Pods?",
  },
  {
    topic: "Scaling",
    question: "How do I configure a Horizontal Pod Autoscaler?",
  },
  {
    topic: "Troubleshooting",
    question: "What causes a CrashLoopBackOff and how do I debug it?",
  },
  {
    topic: "RBAC & Security",
    question: "How do Roles and RoleBindings control access in Kubernetes?",
  },
  {
    topic: "Operators & CRDs",
    question: "What is a Kubernetes Operator and when should I use one?",
  },
];

export function SuggestedPrompts({
  onSelect,
}: {
  onSelect: (question: string) => void;
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
      {PROMPTS.map((p) => (
        <button
          key={p.topic}
          onClick={() => onSelect(p.question)}
          className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-left transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <p className="text-xs font-medium text-[#326CE5]">{p.topic}</p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            {p.question}
          </p>
        </button>
      ))}
    </div>
  );
}
