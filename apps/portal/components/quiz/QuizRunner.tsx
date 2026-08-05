"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, Clock, PartyPopper, RotateCcw, TerminalSquare, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { shuffle } from "@/content/quizzes";
import { useHotkeys } from "@/lib/useHotkeys";

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
  const isCorrect = answered && selected !== null && selected === q.correctIndex;
  const urgent = !!timeLimitSeconds && secondsLeft < 60 && !done;

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

  // Atalhos de operador: teclas 1-9 selecionam a opção correspondente rapidamente.
  useHotkeys(
    done || answered
      ? {}
      : Object.fromEntries(q.options.map((_, i) => [String(i + 1), () => selectOption(i)]))
  );

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
    setSecondsLeft(timeLimitSeconds ?? 0);
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
    <div className="w-full rounded-2xl overflow-hidden border border-red-500/25 bg-surface shadow-[0_0_50px_rgba(239,68,68,0.08)] relative">
      {/* Pulso de fundo para transmitir urgência quando o tempo está acabando */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${urgent ? "bg-red-500/10 animate-pulse" : ""}`} />

      {/* Header / Timer */}
      <div className="bg-surface-2 p-4 flex justify-between items-center border-b border-border relative z-10">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span className="text-foreground font-bold tracking-widest uppercase text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted">
            {step + 1} / {ordered.length}
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
        <ProgressBar value={((step + (answered ? 1 : 0)) / ordered.length) * 100} className="mb-6" />

        {/* Sem mode="wait": ele atrasa a montagem da próxima pergunta/feedback até
            a animação de saída da anterior terminar — se isso nunca dispara
            (aba em segundo plano, reduced motion) o quiz trava sem avançar. */}
        <AnimatePresence>
          {!answered ? (
            <motion.div key={q.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-foreground">{q.question}</p>

              <div className="mt-6 space-y-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl border border-border bg-surface-2 hover:border-atlas-orange/50 transition-all group flex gap-4 items-center"
                  >
                    <div className="w-8 h-8 shrink-0 rounded bg-surface flex items-center justify-center text-muted font-mono text-sm group-hover:text-atlas-orange border border-border group-hover:border-atlas-orange/50">
                      {i + 1}
                    </div>
                    <span className="text-foreground">{opt}</span>
                  </button>
                ))}
              </div>
              <p className="text-center text-muted text-xs mt-6">
                Pressione as teclas numéricas para selecionar rapidamente.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 sm:p-8 rounded-xl border ${isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  {isCorrect ? <CheckCircle className="w-10 h-10 text-green-500" /> : <XCircle className="w-10 h-10 text-red-500" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TerminalSquare className="w-4 h-4 text-muted" />
                    <span className="text-muted text-xs font-mono font-bold uppercase">Atlas Mentor AI</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                    {isCorrect ? "Protocolo Executado com Sucesso" : "Falha Crítica na Operação"}
                  </h3>
                  <p className="text-foreground leading-relaxed">{q.explanation}</p>
                  <p className="mt-3 text-xs text-muted">Revise: {q.reference}</p>
                  <Button className="mt-6" onClick={next}>
                    {isLast ? "Finalizar Simulação" : "Próximo Cenário"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default QuizRunner;
