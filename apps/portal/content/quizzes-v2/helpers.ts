import type { QuizQuestion } from "@/lib/types";

export function question(
  moduleSlug: string,
  number: number,
  prompt: string,
  options: [string, string, string, string],
  correctIndex: number,
  explanation: string,
): QuizQuestion {
  const moduleNumber = moduleSlug.slice(0, 2);
  return {
    id: `v2-q${moduleNumber}-${number}`,
    moduleSlug,
    question: prompt,
    options,
    correctIndex,
    explanation,
    reference: `Academy V2 — Módulo ${Number(moduleNumber)}`,
  };
}
