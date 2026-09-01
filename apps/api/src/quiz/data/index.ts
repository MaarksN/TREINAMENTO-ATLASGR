import type { QuizQuestion } from "@/lib/types";
import { quiz01, quiz02, quiz03, quiz04, quiz05 } from "./fundamentos";
import { quiz06, quiz07, quiz08, quiz09, quiz10 } from "./negocios";
import { quiz11, quiz12, quiz13, quiz14, quiz15 } from "./operacao";

export const quizzesByModule: Record<string, QuizQuestion[]> = {
  "01-bem-vindo-atlasgr": quiz01,
  "02-cultura-valores": quiz02,
  "03-gerenciamento-risco": quiz03,
  "04-seguranca-informacao": quiz04,
  "05-software-logistico": quiz05,
  "06-mercado-logistica": quiz06,
  "07-modelo-negocios": quiz07,
  "08-produtos-servicos": quiz08,
  "09-jornada-cliente": quiz09,
  "10-vendas-b2b": quiz10,
  "11-processos-internos": quiz11,
  "12-ferramentas-trabalho": quiz12,
  "13-metodologias-ageis": quiz13,
  "14-comunicacao-empresarial": quiz14,
  "15-desenvolvimento-carreira": quiz15
};

export function getAllBuiltQuestions(): QuizQuestion[] {
  return Object.values(quizzesByModule).flat();
}

export function buildFinalExam(questionsPerModule: number = 2): QuizQuestion[] {
  const exam: QuizQuestion[] = [];
  for (const slug of Object.keys(quizzesByModule)) {
    const questions = quizzesByModule[slug];
    const selected = [...questions].sort(() => 0.5 - Math.random()).slice(0, questionsPerModule);
    exam.push(...selected);
  }
  return exam.sort(() => 0.5 - Math.random());
}
