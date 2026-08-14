"use client";

import Link from "next/link";
import { Award, BookOpen, Clock, Flame, Mail, Shield, Target, Zap } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { levelProgress } from "@/lib/gamification";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";

export default function ProfilePage() {
  const { ready, registration } = useRequireRegistration();
  const xp = useOnboardingStore((state) => state.xp);
  const progress = useOnboardingStore((state) => state.progress);
  const streakDays = useOnboardingStore((state) => state.streakDays);

  if (!ready || !registration) return null;

  const { current, next, pct } = levelProgress(xp);
  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const evaluated = readyModuleSlugs.filter((slug) => typeof progress[slug]?.bestScore === "number");
  const averageScore = evaluated.length
    ? Math.round(evaluated.reduce((sum, slug) => sum + (progress[slug]?.bestScore ?? 0), 0) / evaluated.length)
    : 0;
  const studiedMinutes = readyModuleSlugs
    .filter((slug) => progress[slug]?.passed)
    .reduce((sum, slug) => sum + (moduleMetas.find((courseModule) => courseModule.slug === slug)?.durationMinutes ?? 0), 0);
  const studiedHours = (studiedMinutes / 60).toFixed(1);
  const nextModule = moduleMetas.find((courseModule) => courseModule.status === "ready" && !progress[courseModule.slug]?.passed);

  const initials = registration.nomeCompleto
    .split(" ")
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-atlas-orange selection:text-white">
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <PremiumCard className="relative overflow-hidden p-8 text-center" withGlow>
              <div className="absolute inset-0 bg-gradient-to-b from-atlas-orange/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-atlas-orange bg-surface-2 shadow-[0_0_30px_rgba(255,86,24,0.25)]">
                  <span className="font-display text-4xl font-black text-atlas-orange">{initials}</span>
                </div>
                <h1 className="font-display text-2xl font-black">{registration.nomeCompleto}</h1>
                <p className="mt-1 text-sm font-bold text-atlas-orange">{registration.cargo}</p>
                <p className="mt-1 text-xs font-semibold text-muted">{registration.departamento}</p>

                <div className="mt-6 space-y-3 rounded-2xl border border-border bg-background p-4 text-left">
                  <div className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-muted" aria-hidden="true" /><span className="break-all text-muted">{registration.email}</span></div>
                  <div className="flex items-center gap-3 text-sm"><Shield className="h-4 w-4 text-muted" aria-hidden="true" /><span className="text-muted">Nível de aprendizagem: {current.title}</span></div>
                </div>
              </div>
            </PremiumCard>

            <PremiumCard className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-muted">Progressão de aprendizagem</p>
                  <p className="mt-1 font-display text-2xl font-black text-foreground">{xp} XP</p>
                </div>
                <Target className="h-6 w-6 text-atlas-orange" aria-hidden="true" />
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-atlas-orange" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-3 text-xs font-semibold text-muted">
                {next ? `${next.minXp - xp} XP para ${next.title}` : "Maior nível de XP alcançado"}
              </p>
            </PremiumCard>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-atlas-orange">Seu aprendizado</p>
              <h2 className="mt-2 font-display text-3xl font-black">Progresso que representa domínio</h2>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted">
                As métricas abaixo usam módulos aprovados e resultados registrados. Elas não simulam desempenho de colegas nem substituem avaliação profissional da liderança.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <PremiumCard className="p-5 text-center">
                <Award className="mx-auto h-6 w-6 text-atlas-orange" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-black">{completedReady}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-muted">módulos validados</p>
              </PremiumCard>
              <PremiumCard className="p-5 text-center">
                <Target className="mx-auto h-6 w-6 text-atlas-orange" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-black">{averageScore || "–"}{averageScore ? "%" : ""}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-muted">média avaliada</p>
              </PremiumCard>
              <PremiumCard className="p-5 text-center">
                <Clock className="mx-auto h-6 w-6 text-atlas-orange" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-black">{studiedHours}h</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-muted">carga validada</p>
              </PremiumCard>
              <PremiumCard className="p-5 text-center">
                <Flame className="mx-auto h-6 w-6 text-atlas-orange" aria-hidden="true" />
                <p className="mt-3 font-display text-3xl font-black">{streakDays.length}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-muted">dias em sequência</p>
              </PremiumCard>
            </div>

            <PremiumCard className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-atlas-orange/10 text-atlas-orange"><Zap size={22} aria-hidden="true" /></span>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-atlas-orange">Melhor próxima ação</p>
                  {nextModule ? (
                    <>
                      <h3 className="mt-2 font-display text-xl font-black">{nextModule.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-muted">Conclua a microaula, execute o laboratório prático e valide o módulo no simulador.</p>
                      <Link href={`/trilha/${nextModule.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-5 py-3 text-sm font-black text-white">
                        <BookOpen size={16} aria-hidden="true" /> Continuar formação
                      </Link>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-2 font-display text-xl font-black">Currículo validado</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-muted">Todos os módulos foram aprovados. Use a prova final para integrar os conhecimentos.</p>
                      <Link href="/prova-final" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-5 py-3 text-sm font-black text-white">
                        <Award size={16} aria-hidden="true" /> Ir para a prova final
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}
