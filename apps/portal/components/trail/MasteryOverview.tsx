"use client";

import Link from "next/link";
import { BarChart3, CheckCircle2, Compass, Route, ShieldCheck, Target } from "lucide-react";
import { getRoleTrack } from "@/content/learning-blueprint";
import type { ModuleMeta, ModuleProgress, RegistrationData } from "@/lib/types";

interface MasteryOverviewProps {
  registration: RegistrationData;
  progress: Record<string, ModuleProgress>;
  modules: ModuleMeta[];
}

function masteryLabel(score: number) {
  if (score >= 90) return "Domínio avançado";
  if (score >= 80) return "Domínio consistente";
  if (score >= 70) return "Base validada";
  if (score > 0) return "Precisa reforço";
  return "Ainda não avaliado";
}

export function MasteryOverview({ registration, progress, modules }: MasteryOverviewProps) {
  const track = getRoleTrack(registration.cargo, registration.departamento);
  const readyModules = modules.filter((module) => module.status === "ready");
  const priorityModules = track.prioritySlugs
    .map((slug) => readyModules.find((module) => module.slug === slug))
    .filter((module): module is ModuleMeta => Boolean(module));

  const nextPriority = priorityModules.find((module) => !progress[module.slug]?.passed);
  const scored = readyModules.filter((module) => typeof progress[module.slug]?.bestScore === "number");
  const average = scored.length
    ? Math.round(scored.reduce((sum, module) => sum + (progress[module.slug]?.bestScore || 0), 0) / scored.length)
    : 0;
  const passed = readyModules.filter((module) => progress[module.slug]?.passed).length;
  const categories = Array.from(new Set(readyModules.map((module) => module.category || "Outros")));

  const categoryMastery = categories.map((category) => {
    const categoryModules = readyModules.filter((module) => (module.category || "Outros") === category);
    const categoryScores = categoryModules
      .map((module) => progress[module.slug]?.bestScore)
      .filter((score): score is number => typeof score === "number");
    const score = categoryScores.length
      ? Math.round(categoryScores.reduce((sum, item) => sum + item, 0) / categoryScores.length)
      : 0;
    return { category, score, completed: categoryModules.filter((module) => progress[module.slug]?.passed).length, total: categoryModules.length };
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-10" aria-labelledby="mastery-title">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-lg sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-atlas-orange/25 bg-atlas-orange/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-atlas-orange">
                <Route size={14} aria-hidden="true" /> Rota personalizada
              </div>
              <h2 id="mastery-title" className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {track.label}
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted sm:text-base">{track.description}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background px-5 py-4 text-right">
              <p className="text-[11px] font-black uppercase tracking-widest text-muted">Domínio médio validado</p>
              <p className="mt-1 font-display text-4xl font-black text-atlas-orange">{average || "–"}{average ? "%" : ""}</p>
              <p className="mt-1 text-xs font-bold text-muted">{masteryLabel(average)}</p>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {priorityModules.map((module, index) => {
              const moduleProgress = progress[module.slug];
              const isPassed = Boolean(moduleProgress?.passed);
              return (
                <Link
                  key={module.slug}
                  href={`/trilha/${module.slug}`}
                  className={`group rounded-2xl border p-4 transition-all hover:-translate-y-0.5 ${
                    isPassed ? "border-emerald-500/25 bg-emerald-500/5" : index === 0 || module.slug === nextPriority?.slug ? "border-atlas-orange/35 bg-atlas-orange/5" : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-black uppercase tracking-widest text-muted">Prioridade {index + 1}</span>
                    {isPassed ? <CheckCircle2 size={17} className="text-emerald-500" aria-hidden="true" /> : <Compass size={17} className="text-atlas-orange" aria-hidden="true" />}
                  </div>
                  <p className="mt-2 text-sm font-extrabold leading-snug text-foreground group-hover:text-atlas-orange">{module.title}</p>
                  <p className="mt-2 text-xs font-semibold text-muted">
                    {typeof moduleProgress?.bestScore === "number" ? `Melhor resultado: ${moduleProgress.bestScore}%` : `${module.durationMinutes} min · ainda não avaliado`}
                  </p>
                </Link>
              );
            })}
          </div>

          {nextPriority && (
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-atlas-orange/25 bg-atlas-orange/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Melhor próxima ação</p>
                <p className="mt-1 text-base font-extrabold text-foreground">{nextPriority.title}</p>
                <p className="mt-1 text-sm text-muted">Conclua o conteúdo, execute o laboratório prático e valide o domínio no simulador.</p>
              </div>
              <Link href={`/trilha/${nextPriority.slug}`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-atlas-orange px-5 py-3 text-sm font-black text-white shadow-glow transition-transform hover:scale-[1.02]">
                <Target size={16} aria-hidden="true" /> Continuar rota
              </Link>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-surface p-6 shadow-lg sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-atlas-orange">
                <BarChart3 size={19} aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-widest">Mapa de competência</p>
              </div>
              <h3 className="mt-2 font-display text-2xl font-black text-foreground">Você sabe ou você domina?</h3>
            </div>
            <div className="rounded-xl bg-background px-3 py-2 text-center">
              <p className="font-display text-2xl font-black text-foreground">{passed}/{readyModules.length}</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-muted">validados</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {categoryMastery.map((item) => (
              <div key={item.category}>
                <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                  <span className="font-bold text-foreground">{item.category}</span>
                  <span className="font-bold tabular-nums text-muted">{item.score ? `${item.score}%` : `${item.completed}/${item.total}`}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-atlas-orange transition-[width] duration-500"
                    style={{ width: `${item.score || Math.round((item.completed / item.total) * 100)}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-atlas-orange" aria-hidden="true" />
            <p className="text-xs font-semibold leading-relaxed text-muted">
              O score usa o melhor resultado registrado nos simuladores. Ele não substitui avaliação de desempenho, mas deixa visível onde revisar antes de aplicar o conhecimento no trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
