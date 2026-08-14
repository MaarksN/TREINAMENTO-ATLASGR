import type { QuizQuestion } from "@/lib/types";
import { quiz01, quiz02, quiz03, quiz04, quiz05 } from "@/content/quizzes-v2/fundamentos";
import { quiz06, quiz07, quiz08, quiz09, quiz10 } from "@/content/quizzes-v2/negocios";
import { quiz11, quiz12, quiz13, quiz14, quiz15 } from "@/content/quizzes-v2/operacao";

export const quizzesByModule: Record<string, QuizQuestion[]> = {
  "01-bem-vindo-atlasgr": quiz01,
  "02-mercado-logistica": quiz02,
  "03-gerenciamento-risco": quiz03,
  "04-produtos-atlasgr": quiz04,
  "05-software-logistico": quiz05,
  "06-atlas-profile": quiz06,
  "07-integracoes": quiz07,
  "08-clientes": quiz08,
  "09-processo-comercial": quiz09,
  "10-termos-tecnicos": quiz10,
  "11-operacao": quiz11,
  "12-compliance": quiz12,
  "13-tecnologia": quiz13,
  "14-casos-reais": quiz14,
  "15-preparacao-final": quiz15,
};

export function getQuizForModule(slug: string): QuizQuestion[] {
  return quizzesByModule[slug] ?? [];
}

export function getAllBuiltQuestions(): QuizQuestion[] {
  return Object.values(quizzesByModule).flat();
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Cria uma prova equilibrada em vez de sortear de um pool único e correr o
 * risco de super-representar alguns módulos. O padrão usa duas questões de
 * cada um dos 15 módulos: 30 itens no total.
 */
export function buildFinalExam(questionsPerModule = 2): QuizQuestion[] {
  const selected = Object.values(quizzesByModule).flatMap((questions) =>
    shuffle(questions).slice(0, Math.max(1, Math.min(questionsPerModule, questions.length))),
  );
  return shuffle(selected);
}
