"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Award } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { getAllBuiltQuestions } from "@/content/quizzes";
import { readyModuleSlugs, moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";

export default function ProvaFinalPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const examResult = useOnboardingStore((s) => s.examResult);
  const setExamResult = useOnboardingStore((s) => s.setExamResult);
  const [started, setStarted] = useState(false);

  if (!ready || !registration) return null;

  const allDone = readyModuleSlugs.every((slug) => progress[slug]?.passed);
  const pendingModules = moduleMetas.filter((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.passed);
  const questions = getAllBuiltQuestions();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/trilha" className="inline-flex items-center gap-1 text-sm text-muted hover:text-atlas-orange">
          <ArrowLeft size={14} /> Voltar para a trilha
        </Link>

        <h1 className="mt-4 font-display text-3xl font-bold text-foreground">Prova Final</h1>
        <p className="mt-2 text-muted">
          Esta versão de protótipo reúne as {questions.length} perguntas dos módulos com conteúdo completo, embaralhadas,
          com tempo limite. A aprovação exige 70% de acerto — em caso de reprovação, você pode refazer apenas a prova.
        </p>

        {!allDone && (
          <Card className="mt-6 flex gap-3 border-amber-400/40 bg-amber-400/10 p-5">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="font-semibold text-amber-700 dark:text-amber-300">Conclua os módulos disponíveis primeiro</p>
              <p className="mt-1 text-sm text-amber-700/80 dark:text-amber-300/80">
                Faltam: {pendingModules.map((m) => m.title).join(", ")}.
              </p>
            </div>
          </Card>
        )}

        {allDone && !started && !examResult && (
          <div className="mt-8 text-center">
            <Button size="lg" onClick={() => setStarted(true)}>
              Iniciar Prova Final ({questions.length} perguntas · 10 min)
            </Button>
          </div>
        )}

        {allDone && examResult && !started && (
          <Card className="mt-8 p-8 text-center">
            <Award size={36} className={`mx-auto mb-3 ${examResult.passed ? "text-atlas-orange" : "text-muted"}`} />
            <p className="font-display text-2xl font-bold">{examResult.score}%</p>
            <p className="mt-1 text-muted">
              {examResult.correct} de {examResult.totalQuestions} corretas — {examResult.passed ? "aprovado" : "não aprovado"}
            </p>
            <div className="mt-5 flex justify-center gap-3">
              {examResult.passed ? (
                <Link href="/certificado">
                  <Button>Emitir certificado</Button>
                </Link>
              ) : (
                <Button onClick={() => setStarted(true)}>Refazer a prova</Button>
              )}
            </div>
          </Card>
        )}

        {allDone && started && (
          <div className="mt-8">
            <QuizRunner
              questions={questions}
              title="Prova Final"
              timeLimitSeconds={600}
              onFinish={({ score, correct, total, passed }) => {
                setExamResult({ score, correct, totalQuestions: total, passed, date: new Date().toISOString() });
                setStarted(false);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
