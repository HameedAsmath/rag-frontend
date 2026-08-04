import { useEffect, useState } from "react";

export function useTypewriter(fullText: string, active: boolean, speedMs = 15) {
  const [text, setText] = useState(active ? "" : fullText);

  useEffect(() => {
    if (!active) {
      setText(fullText);
      return;
    }

    setText("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, speedMs);

    return () => clearInterval(interval);
  }, [fullText, active, speedMs]);

  return text;
}
