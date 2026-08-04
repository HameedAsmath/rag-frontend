export function KubernetesIcon({ className }: { className?: string }) {
  const spokes = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return {
      x: 50 + 34 * Math.cos(angle),
      y: 50 + 34 * Math.sin(angle),
    };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {spokes.map((p, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={p.x}
          y2={p.y}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      <polygon
        points={spokes.map((p) => `${p.x},${p.y}`).join(" ")}
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {spokes.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="6" fill="currentColor" />
      ))}
      <circle cx="50" cy="50" r="13" fill="currentColor" />
    </svg>
  );
}
