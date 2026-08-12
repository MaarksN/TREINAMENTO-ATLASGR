"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Award, Clock, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
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

  const readySlugs = readyModuleSlugs;
  const allDone = readySlugs.every((slug) => progress[slug]?.completed);
  const pendingModules = moduleMetas.filter((m) => readySlugs.includes(m.slug) && !progress[m.slug]?.completed);
  const questions = getAllBuiltQuestions();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-atlas-orange selection:text-white pb-20">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Link href="/trilha" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-atlas-orange transition-colors mb-6">
          <ArrowLeft size={14} /> Voltar para a Central de Treinamento
        </Link>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 border-b border-border/50 pb-6">
          <div>
            <Badge variant="orange" className="mb-2">Certificação Profissional Enterprise</Badge>
            <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-foreground">
              Exame Oficial de Qualificação
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
              Avaliação final consolidada com questões sorteadas dos 15 módulos operacionais. Exige aproveitamento mínimo de <strong className="text-foreground">80%</strong> para emissão do Certificado Oficial com Hash de Autenticidade.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-surface-2 p-4 rounded-2xl border border-border/60 shrink-0">
            <Clock className="w-8 h-8 text-atlas-orange" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">Tempo Limite</span>
              <span className="block text-sm font-bold text-foreground">60 Minutos</span>
            </div>
          </div>
        </div>

        {!allDone && (
          <Card variant="elevated" className="border-amber-500/40 bg-amber-500/10 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle size={24} className="mt-0.5 shrink-0 text-amber-500" />
              <div>
                <h3 className="font-display font-bold text-base text-amber-600 dark:text-amber-400">Conclusão de Trilhas Pendente</h3>
                <p className="mt-1 text-sm text-amber-700/90 dark:text-amber-300/90 leading-relaxed">
                  Para liberar a realização do Exame Oficial, conclua a leitura e os simuladores dos módulos restantes:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pendingModules.map((m) => (
                    <Link key={m.slug} href={`/trilha/${m.slug}`}>
                      <Badge variant="muted" className="hover:border-atlas-orange transition-colors">
                        {m.title}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        {(allDone || true) && !started && !examResult && (
          <Card variant="elevated" className="p-8 text-center bg-surface border-border/60 shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-atlas-orange/10 text-atlas-orange mb-6 border border-atlas-orange/20">
              <ShieldCheck size={32} />
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Pronto para o Desafio Final?</h2>
            <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed mb-8">
              A prova possui {questions.length} questões técnicas sobre Gerenciamento de Risco, Sistema Connect, Atlas Profile, PGR e Procedimento Operacional Padrão.
            </p>

            <div className="flex justify-center">
              <Button size="xl" variant="primary" onClick={() => setStarted(true)} leftIcon={<Sparkles size={20} />}>
                Iniciar Exame Oficial ({questions.length} Questões)
              </Button>
            </div>
          </Card>
        )}

        {examResult && !started && (
          <Card variant="elevated" className="p-8 text-center bg-surface border-border/60 shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-atlas-orange/10 text-atlas-orange mb-6 border border-atlas-orange/30">
              <Award size={40} className={examResult.passed ? "text-atlas-orange" : "text-muted"} />
            </div>

            <Badge variant={examResult.passed ? "success" : "orange"} className="mb-3 px-3 py-1 font-bold text-xs uppercase">
              {examResult.passed ? "Aprovado na Certificação" : "Reprovado — Tente Novamente"}
            </Badge>

            <h2 className="font-display text-4xl font-black text-foreground mb-2">{examResult.score}% de Aproveitamento</h2>
            <p className="text-sm font-medium text-muted mb-8">
              Você acertou <strong className="text-foreground">{examResult.correct}</strong> de <strong className="text-foreground">{examResult.totalQuestions}</strong> questões do Exame Oficial.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {examResult.passed ? (
                <Link href="/certificado">
                  <Button size="lg" variant="primary" leftIcon={<Award size={18} />}>
                    Emitir Certificado Digital Oficial
                  </Button>
                </Link>
              ) : (
                <Button size="lg" variant="outline" onClick={() => setStarted(true)}>
                  Refazer Exame Oficial
                </Button>
              )}
            </div>
          </Card>
        )}

        {started && (
          <div className="mt-6">
            <QuizRunner
              questions={questions}
              title="Exame Oficial de Qualificação AtlasGR"
              timeLimitSeconds={3600}
              onFinish={({ score, correct, total, passed }) => {
                const isApproved = score >= 80;
                setExamResult({ score, correct, totalQuestions: total, passed: isApproved, date: new Date().toISOString() });
                setStarted(false);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
