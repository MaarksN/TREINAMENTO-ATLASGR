"use client";

import Link from "next/link";
import { Award, Clock, Flame, Target, Trophy } from "lucide-react";
import { ColaboradorLayout } from "@/components/layout/ColaboradorLayout";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/dashboard/MetricCard";
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
    <ColaboradorLayout>
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Painel de {registration.nomeCompleto.split(" ")[0]}
          </h1>
          <p className="mt-1 text-muted">{registration.cargo} · {registration.departamento}</p>
        </div>

        {/* 12-column Grid for MetricCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricCard
            title="NÍVEL"
            icon={<Trophy size={16} />}
            value={`${current.level} · ${current.title}`}
            subtitle={`${xp} XP ${next ? `· próximo nível em ${next.minXp - xp} XP` : ''}`}
            trend={{ value: pct, label: "progresso atual", isPositive: true }}
          />
          <MetricCard
            title="TRILHA"
            icon={<Target size={16} />}
            value={`${completedReady}/${readyModuleSlugs.length} módulos`}
            subtitle="concluídos"
            trend={{ value: trailPct, label: "progresso geral", isPositive: true }}
          />
          <MetricCard
            title="TEMPO ESTUDADO"
            icon={<Clock size={16} />}
            value={`${timeStudied} min`}
            subtitle="soma dos módulos concluídos"
          />
          <MetricCard
            title="STREAK"
            icon={<Flame size={16} />}
            value={`${streakDays.length} dia(s)`}
            subtitle="dias distintos de estudo"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
      </div>
    </ColaboradorLayout>
  );
}
