"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock, PartyPopper, RotateCcw, TerminalSquare, XCircle } from "lucide-react";
import type { QuizQuestionClient } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useHotkeys } from "@/lib/useHotkeys";

export interface QuizSubmissionResult {
  score: number;
  correctCount: number;
  total: number;
  passed: boolean;
  results: {
    questionId: string;
    isCorrect: boolean;
    explanation: string;
    selectedOption: number;
    correctIndex: number;
  }[];
}

export function QuizRunner({
  questions,
  passThreshold = 70,
  onSubmit,
  title = "Quiz do módulo",
  timeLimitSeconds,
}: {
  questions: QuizQuestionClient[];
  passThreshold?: number;
  onSubmit: (answers: { questionId: string; selectedOption: number }[]) => Promise<QuizSubmissionResult>;
  title?: string;
  timeLimitSeconds?: number;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; selectedOption: number }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<QuizSubmissionResult | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSeconds ?? 0);
  const [reviewStep, setReviewStep] = useState(0);

  const q = questions[step];
  const isLast = step === questions.length - 1;
  const done = result !== null;
  const urgent = !!timeLimitSeconds && secondsLeft < 60 && !done;

  useEffect(() => {
    if (!timeLimitSeconds || done || isSubmitting) return;
    const t = setTimeout(() => {
      if (secondsLeft <= 1) {
        submitQuiz();
      } else {
        setSecondsLeft((s) => s - 1);
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, timeLimitSeconds, done, isSubmitting]);

  async function submitQuiz(forcedAnswers = answers) {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await onSubmit(forcedAnswers);
      setResult(res);
      setReviewStep(0);
    } catch (e) {
      console.error(e);
      // fallback error handling
    } finally {
      setIsSubmitting(false);
    }
  }

  function selectOption(idx: number) {
    if (done || isSubmitting) return;
    setSelected(idx);
  }

  useHotkeys(
    done || isSubmitting || !q
      ? {}
      : Object.fromEntries(q.options.map((_, i) => [String(i + 1), () => selectOption(i)]))
  );

  function next() {
    if (selected === null) return;
    
    const newAnswers = [...answers];
    newAnswers[step] = { questionId: q.id, selectedOption: selected };
    setAnswers(newAnswers);

    if (isLast) {
      submitQuiz(newAnswers);
    } else {
      setStep((s) => s + 1);
      setSelected(answers[step + 1]?.selectedOption ?? null);
    }
  }

  function retry() {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
    setSecondsLeft(timeLimitSeconds ?? 0);
  }

  if (done && result) {
    if (reviewStep === 0) {
      return (
        <motion.div
          initial={result.passed ? { scale: 0.8, opacity: 0 } : { x: 0 }}
          animate={result.passed ? { scale: 1, opacity: 1 } : { x: [0, -12, 12, -8, 8, -4, 4, 0] }}
          transition={result.passed ? { type: "spring", stiffness: 200, damping: 15 } : { duration: 0.5 }}
        >
          <Card className="p-8 text-center">
            {result.passed ? (
              <motion.div
                initial={{ rotate: -20, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.15 }}
              >
                <PartyPopper className="mx-auto mb-3 text-atlas-orange" size={48} />
              </motion.div>
            ) : (
              <XCircle className="mx-auto mb-3 text-red-500" size={48} />
            )}
            <h3 className="font-display text-4xl font-black">{result.score}%</h3>
            <p className="mt-2 text-muted">
              {result.correctCount} de {result.total} corretas — {result.passed ? "aprovado! 🎉" : `é necessário pelo menos ${passThreshold}%`}
            </p>
            {result.passed && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-3 text-sm font-bold text-emerald-500"
              >
                +{100} XP depositados na sua conta
              </motion.p>
            )}
            <div className="mt-6 flex justify-center gap-4">
              <Button onClick={() => setReviewStep(1)}>Ver Correção</Button>
              {!result.passed && (
                <Button variant="outline" onClick={retry}>
                  <RotateCcw size={16} /> Tentar novamente
                </Button>
              )}
            </div>
          </Card>
        </motion.div>
      );
    }

    const reviewQ = questions[reviewStep - 1];
    const reviewRes = result.results.find((r) => r.questionId === reviewQ.id);
    const isCorrect = reviewRes?.isCorrect;

    return (
      <div className="w-full rounded-2xl overflow-hidden border border-border bg-surface relative">
        <div className="bg-surface-2 p-4 flex justify-between items-center border-b border-border">
          <div className="flex items-center gap-3">
            <TerminalSquare className="w-5 h-5 text-muted" />
            <span className="text-foreground font-bold tracking-widest uppercase text-sm">Correção</span>
          </div>
          <span className="text-xs text-muted">
            {reviewStep} / {questions.length}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-foreground">{reviewQ.question}</p>
          
          <div className="mt-6 space-y-3">
            {reviewQ.options.map((opt, i) => {
              const isSelected = reviewRes?.selectedOption === i;
              const isActuallyCorrect = reviewRes?.correctIndex === i;
              
              let borderClass = "border-border";
              let bgClass = "bg-surface-2";
              
              if (isActuallyCorrect) {
                borderClass = "border-green-500/50";
                bgClass = "bg-green-500/10";
              } else if (isSelected && !isActuallyCorrect) {
                borderClass = "border-red-500/50";
                bgClass = "bg-red-500/10";
              }

              return (
                <div key={i} className={`w-full text-left p-4 sm:p-5 rounded-xl border ${borderClass} ${bgClass} flex gap-4 items-center`}>
                  <div className="w-8 h-8 shrink-0 rounded bg-surface flex items-center justify-center text-muted font-mono text-sm border border-border">
                    {i + 1}
                  </div>
                  <span className="text-foreground">{opt}</span>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-6 rounded-xl border ${isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 shrink-0">
                {isCorrect ? <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
              </div>
              <div>
                <h3 className={`text-lg font-bold mb-2 ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                  {isCorrect ? "Correto" : "Incorreto"}
                </h3>
                <p className="text-foreground leading-relaxed">{reviewRes?.explanation}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-end gap-4">
            <Button onClick={() => setReviewStep(s => s === questions.length ? 0 : s + 1)}>
              {reviewStep === questions.length ? "Voltar ao Resumo" : "Próxima Questão"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-red-500/25 bg-surface shadow-[0_0_50px_rgba(239,68,68,0.08)] relative">
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${urgent ? "bg-red-500/10 animate-pulse" : ""}`} />

      <div className="bg-surface-2 p-4 flex justify-between items-center border-b border-border relative z-10">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span className="text-foreground font-bold tracking-widest uppercase text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted">
            {step + 1} / {questions.length}
          </span>
          {!!timeLimitSeconds && (
            <div className={`flex items-center gap-2 font-mono text-lg ${urgent ? "text-red-500" : "text-atlas-orange"}`}>
              <Clock className="w-4 h-4" />
              <span>
                {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:{String(secondsLeft % 60).padStart(2, "0")}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8 relative z-10">
        <ProgressBar value={(step / questions.length) * 100} className="mb-6" />

        <AnimatePresence mode="wait">
          <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
            <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-foreground">{q.question}</p>

            <div className="mt-6 space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all group flex gap-4 items-center ${
                    selected === i
                      ? "border-atlas-orange bg-atlas-orange/10"
                      : "border-border bg-surface-2 hover:border-atlas-orange/50"
                  }`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded flex items-center justify-center font-mono text-sm border ${
                    selected === i
                      ? "bg-atlas-orange text-white border-atlas-orange"
                      : "bg-surface text-muted border-border group-hover:border-atlas-orange/50 group-hover:text-atlas-orange"
                  }`}>
                    {i + 1}
                  </div>
                  <span className="text-foreground">{opt}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <p className="text-muted text-xs">Pressione as teclas numéricas para selecionar.</p>
              <Button onClick={next} disabled={selected === null || isSubmitting}>
                {isSubmitting ? "Enviando..." : (isLast ? "Finalizar Simulação" : "Próxima Questão")}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default QuizRunner;
