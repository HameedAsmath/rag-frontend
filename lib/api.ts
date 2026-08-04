const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export async function askQuestion(
  question: string,
  threadId: string
): Promise<string> {
  const url = new URL("/chat", BASE_URL);
  url.searchParams.set("question", question);
  url.searchParams.set("thread_id", threadId);

  const res = await fetch(url.toString(), { method: "POST" });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  const data: { answer: string } = await res.json();
  return data.answer;
}
