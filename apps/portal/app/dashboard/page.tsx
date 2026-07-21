"use client";

import Link from "next/link";
import { Award, Clock, Flame, Target, Trophy } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";
import { BADGES, levelProgress } from "@/lib/gamification";
import { seedCollaborators } from "@/content/seedDemo";

export default function DashboardPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const xp = useOnboardingStore((s) => s.xp);
  const badges = useOnboardingStore((s) => s.badges);
  const streakDays = useOnboardingStore((s) => s.streakDays);
  const examResult = useOnboardingStore((s) => s.examResult);
  const certificate = useOnboardingStore((s) => s.certificate);

  if (!ready || !registration) return null;

  const { current, next, pct } = levelProgress(xp);
  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const trailPct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const timeStudied = moduleMetas
    .filter((m) => readyModuleSlugs.includes(m.slug) && progress[m.slug]?.passed)
    .reduce((sum, m) => sum + m.durationMinutes, 0);
  const nextModule = moduleMetas.find((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.passed);

  const ranking = [
    { nome: `${registration.nomeCompleto} (você)`, notaMedia: examResult?.score ?? 0, isYou: true },
    ...seedCollaborators.map((c) => ({ nome: c.nome, notaMedia: c.notaMedia, isYou: false })),
  ]
    .sort((a, b) => b.notaMedia - a.notaMedia)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Painel de {registration.nomeCompleto.split(" ")[0]}
        </h1>
        <p className="mt-1 text-muted">{registration.cargo} · {registration.departamento}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted"><Trophy size={14} /> NÍVEL</div>
            <p className="mt-2 font-display text-xl font-bold">{current.level} · {current.title}</p>
            <ProgressBar value={pct} className="mt-3" />
            <p className="mt-1 text-xs text-muted">{xp} XP {next && `· próximo nível em ${next.minXp - xp} XP`}</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted"><Target size={14} /> TRILHA</div>
            <p className="mt-2 font-display text-xl font-bold">{completedReady}/{readyModuleSlugs.length} módulos</p>
            <ProgressBar value={trailPct} className="mt-3" />
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted"><Clock size={14} /> TEMPO ESTUDADO</div>
            <p className="mt-2 font-display text-xl font-bold">{timeStudied} min</p>
            <p className="mt-1 text-xs text-muted">soma dos módulos concluídos</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted"><Flame size={14} /> STREAK</div>
            <p className="mt-2 font-display text-xl font-bold">{streakDays.length} dia(s)</p>
            <p className="mt-1 text-xs text-muted">dias distintos de estudo</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="font-display font-semibold">Conquistas</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {BADGES.map((b) => {
                const unlocked = badges.includes(b.id);
                return (
                  <div
                    key={b.id}
                    className={`rounded-xl border p-3 text-center transition ${unlocked ? "border-atlas-orange/40 bg-atlas-orange/5" : "border-border opacity-40"}`}
                  >
                    <Award size={20} className={`mx-auto ${unlocked ? "text-atlas-orange" : "text-muted"}`} />
                    <p className="mt-1.5 text-xs font-semibold">{b.label}</p>
                    <p className="mt-0.5 text-[10px] text-muted">{b.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-2 p-4">
              <div>
                <p className="text-sm font-semibold">Próxima atividade</p>
                <p className="text-sm text-muted">
                  {nextModule ? nextModule.title : examResult?.passed ? "Você concluiu tudo — baixe seu certificado!" : "Prova Final disponível"}
                </p>
              </div>
              <Link href={nextModule ? `/trilha/${nextModule.slug}` : certificate ? "/certificado" : "/prova-final"}>
                <Button>{nextModule ? "Continuar" : certificate ? "Ver certificado" : "Fazer prova"}</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <p className="font-display font-semibold">Ranking (demonstração)</p>
            <p className="mt-1 text-xs text-muted">Comparação com colaboradores fictícios — recurso ilustrativo do protótipo.</p>
            <ol className="mt-4 space-y-2">
              {ranking.map((r, i) => (
                <li
                  key={r.nome}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${r.isYou ? "bg-gradient-atlas text-white" : "bg-surface-2"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-display text-xs opacity-70">#{i + 1}</span>
                    {r.nome}
                  </span>
                  <Badge variant={r.isYou ? "default" : "muted"} className={r.isYou ? "bg-white/20 text-white" : ""}>
                    {r.notaMedia}%
                  </Badge>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </main>
    </div>
  );
}
