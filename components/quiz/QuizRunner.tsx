"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PartyPopper, RotateCcw, Timer, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { shuffle } from "@/content/quizzes";

export function QuizRunner({
  questions,
  passThreshold = 70,
  onFinish,
  title = "Quiz do módulo",
  timeLimitSeconds,
}: {
  questions: QuizQuestion[];
  passThreshold?: number;
  onFinish: (result: { score: number; correct: number; total: number; passed: boolean }) => void;
  title?: string;
  timeLimitSeconds?: number;
}) {
  const ordered = useMemo(() => shuffle(questions), [questions]);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSeconds ?? 0);

  const q = ordered[step];
  const isLast = step === ordered.length - 1;
  const score = Math.round((correctCount / ordered.length) * 100);
  const passed = score >= passThreshold;

  useEffect(() => {
    if (!timeLimitSeconds || done) return;
    const t = setTimeout(() => {
      if (secondsLeft <= 1) {
        setDone(true);
        onFinish({ score, correct: correctCount, total: ordered.length, passed });
      } else {
        setSecondsLeft((s) => s - 1);
      }
    }, 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, timeLimitSeconds, done]);

  function selectOption(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correctIndex) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (isLast) {
      setDone(true);
      onFinish({ score, correct: correctCount, total: ordered.length, passed });
      return;
    }
    setStep((s) => s + 1);
    setSelected(null);
    setAnswered(false);
  }

  function retry() {
    setStep(0);
    setSelected(null);
    setAnswered(false);
    setCorrectCount(0);
    setDone(false);
  }

  if (done) {
    return (
      <Card className="p-8 text-center">
        {passed ? (
          <PartyPopper className="mx-auto mb-3 text-atlas-orange" size={40} />
        ) : (
          <XCircle className="mx-auto mb-3 text-red-500" size={40} />
        )}
        <h3 className="font-display text-2xl font-bold">{score}%</h3>
        <p className="mt-1 text-muted">
          {correctCount} de {ordered.length} corretas — {passed ? "aprovado!" : `é necessário pelo menos ${passThreshold}%`}
        </p>
        {!passed && (
          <Button variant="outline" className="mt-5" onClick={retry}>
            <RotateCcw size={16} /> Tentar novamente
          </Button>
        )}
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-muted">{title}</p>
        <div className="flex items-center gap-3">
          {!!timeLimitSeconds && (
            <span className={`flex items-center gap-1 text-xs font-medium ${secondsLeft < 60 ? "text-red-500" : "text-muted"}`}>
              <Timer size={13} />
              {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:{String(secondsLeft % 60).padStart(2, "0")}
            </span>
          )}
          <p className="text-xs text-muted">
            {step + 1} / {ordered.length}
          </p>
        </div>
      </div>
      <ProgressBar value={((step + (answered ? 1 : 0)) / ordered.length) * 100} className="mb-6" />

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.25 }}>
          <p className="font-display text-lg font-semibold leading-snug text-foreground">{q.question}</p>

          <div className="mt-5 space-y-2.5">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctIndex;
              const isSelected = i === selected;
              let style = "border-border hover:border-atlas-orange/50";
              if (answered && isCorrect) style = "border-emerald-500 bg-emerald-500/10";
              else if (answered && isSelected && !isCorrect) style = "border-red-500 bg-red-500/10";

              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  disabled={answered}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${style}`}
                >
                  <span>{opt}</span>
                  {answered && isCorrect && <CheckCircle2 size={16} className="text-emerald-500" />}
                  {answered && isSelected && !isCorrect && <XCircle size={16} className="text-red-500" />}
                </button>
              );
            })}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 rounded-xl bg-surface-2 p-4 text-sm"
            >
              <p className="text-foreground/90">{q.explanation}</p>
              <p className="mt-2 text-xs text-muted">Revise: {q.reference}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex justify-end">
        <Button onClick={next} disabled={!answered}>
          {isLast ? "Finalizar" : "Próxima pergunta"}
        </Button>
      </div>
    </Card>
  );
}
