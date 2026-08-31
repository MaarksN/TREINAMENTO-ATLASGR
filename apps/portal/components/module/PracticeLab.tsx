"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clipboard, Crosshair, RotateCcw, Sparkles, Target } from "lucide-react";
import type { PracticeLab as PracticeLabDefinition } from "@/content/learning-blueprint";

interface PracticeLabProps {
  lab: PracticeLabDefinition;
  moduleTitle: string;
}

export function PracticeLab({ lab, moduleTitle }: PracticeLabProps) {
  const [checked, setChecked] = useState<boolean[]>(() => lab.rubric.map(() => false));
  const [confidence, setConfidence] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const readyToAdvance = checked.every(Boolean) && confidence !== null;

  const practiceBrief = useMemo(
    () => [
      `LABORATÓRIO PRÁTICO — ${moduleTitle}`,
      "",
      `MISSÃO: ${lab.mission}`,
      "",
      `CENÁRIO: ${lab.scenario}`,
      "",
      `ENTREGA: ${lab.deliverable}`,
      "",
      "CRITÉRIOS DE EXCELÊNCIA:",
      ...lab.rubric.map((item, index) => `${index + 1}. ${item}`),
      "",
      `TRANSFERÊNCIA PARA O TRABALHO: ${lab.transferQuestion}`,
    ].join("\n"),
    [lab, moduleTitle],
  );

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(practiceBrief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function resetPractice() {
    setChecked(lab.rubric.map(() => false));
    setConfidence(null);
  }

  return (
    <section className="mx-auto max-w-4xl space-y-6" aria-labelledby="practice-lab-title">
      <div className="relative overflow-hidden rounded-3xl border-2 border-atlas-orange/25 bg-surface p-6 shadow-xl sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-atlas-orange/10 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-atlas-orange/30 bg-atlas-orange/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-atlas-orange">
              <Crosshair size={15} aria-hidden="true" /> Laboratório de aplicação
            </span>
            <button
              type="button"
              onClick={copyBrief}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-muted transition-colors hover:border-atlas-orange/40 hover:text-atlas-orange"
            >
              <Clipboard size={14} aria-hidden="true" /> {copied ? "Brief copiado" : "Copiar missão"}
            </button>
          </div>

          <h2 id="practice-lab-title" className="font-display text-3xl font-black leading-tight text-foreground sm:text-4xl">
            Agora prove que consegue usar o conhecimento.
          </h2>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-muted sm:text-lg">
            Este bloco não testa memória. Ele testa julgamento, clareza e transferência para uma situação real de trabalho.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2 text-atlas-orange">
                <Target size={19} aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-widest">Missão</p>
              </div>
              <p className="text-lg font-extrabold leading-snug text-foreground">{lab.mission}</p>
            </article>
            <article className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-3 flex items-center gap-2 text-atlas-orange">
                <Sparkles size={19} aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-widest">Entrega esperada</p>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground">{lab.deliverable}</p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">Cenário</p>
            <p className="mt-2 text-base font-semibold leading-relaxed text-foreground">{lab.scenario}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Recuperação ativa</p>
          <h3 className="mt-2 font-display text-2xl font-black text-foreground">Responda sem consultar o conteúdo</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Tentar lembrar antes de reler fortalece retenção e deixa claro o que ainda precisa de revisão.
          </p>
          <ol className="mt-5 space-y-3">
            {lab.recallPrompts.map((prompt, index) => (
              <li key={prompt} className="flex gap-3 rounded-2xl border border-border bg-background p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-atlas-orange/10 text-xs font-black text-atlas-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold leading-relaxed text-foreground">{prompt}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
          <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Critério de domínio</p>
          <h3 className="mt-2 font-display text-2xl font-black text-foreground">Faça sua autochecagem</h3>
          <div className="mt-5 space-y-3">
            {lab.rubric.map((item, index) => (
              <label key={item} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-atlas-orange/35">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => setChecked((current) => current.map((value, i) => (i === index ? !value : value)))}
                  className="mt-1 h-4 w-4 accent-[var(--atlas-orange)]"
                />
                <span className="text-sm font-semibold leading-relaxed text-foreground">{item}</span>
              </label>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <p className="text-xs font-black uppercase tracking-widest text-muted">Confiança para aplicar sem ajuda</p>
            <div className="mt-3 grid grid-cols-5 gap-2" role="group" aria-label="Nível de confiança para aplicar o conteúdo">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setConfidence(level)}
                  aria-pressed={confidence === level}
                  className={`rounded-xl border px-2 py-2.5 text-sm font-black transition-all ${
                    confidence === level
                      ? "border-atlas-orange bg-atlas-orange text-white shadow-glow"
                      : "border-border bg-background text-muted hover:border-atlas-orange/40 hover:text-foreground"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-semibold text-muted">
              <span>Preciso revisar</span>
              <span>Aplico sozinho</span>
            </div>
          </div>
        </section>
      </div>

      <section className={`rounded-3xl border p-6 transition-colors ${readyToAdvance ? "border-emerald-500/35 bg-emerald-500/5" : "border-border bg-surface"}`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className={readyToAdvance ? "text-emerald-500" : "text-muted"} aria-hidden="true" />
              <h3 className="font-display text-xl font-black text-foreground">
                {readyToAdvance ? "Pronto para avançar" : "Feche o ciclo de aprendizagem"}
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              <strong className="text-foreground">Transferência:</strong> {lab.transferQuestion}
            </p>
          </div>
          <button
            type="button"
            onClick={resetPractice}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-muted transition-colors hover:text-foreground"
          >
            <RotateCcw size={14} aria-hidden="true" /> Refazer autochecagem
          </button>
        </div>
      </section>
    </section>
  );
}
