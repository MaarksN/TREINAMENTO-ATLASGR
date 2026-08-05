"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Target, Trophy, Clock, Flame, ChevronRight, Activity, Zap, Compass, Star } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MetricCard } from "@/components/ui/MetricCard";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";
import { levelProgress } from "@/lib/gamification";

// Demo/seed apenas para ilustrar como o ranking ficaria com uma base maior de
// colaboradores (não há backend nesta fase do protótipo). O usuário real é
// inserido na posição correta por XP, não fixado num lugar.
const LEADERBOARD_SEED = [
  { name: "Carlos Silva", xp: 2450 },
  { name: "Ana Pereira", xp: 1820 },
  { name: "Bruno Costa", xp: 1340 },
  { name: "Juliana Alves", xp: 960 },
  { name: "Rafael Nunes", xp: 410 },
];

export default function DashboardPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const xp = useOnboardingStore((s) => s.xp);
  const streakDays = useOnboardingStore((s) => s.streakDays);

  const [mounted, setMounted] = useState(false);
  const [heatmap, setHeatmap] = useState<boolean[]>([]);
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);

  useEffect(() => {
    let isActive = true;
    setTimeout(() => {
      if (!isActive) return;
      setHeatmap(Array.from({ length: 49 }).map(() => Math.random() > 0.7));
      setMounted(true);
    }, 0);
    return () => { isActive = false; };
  }, []);

  if (!ready || !registration || !mounted) return null;

  const { current, next, pct } = levelProgress(xp);
  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const nextModule = moduleMetas.find((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.passed);

  const firstName = registration.nomeCompleto.split(" ")[0];
  const leaderboard = [...LEADERBOARD_SEED, { name: `${firstName} (Você)`, xp, isYou: true }]
    .sort((a, b) => b.xp - a.xp)
    .map((entry, i) => ({ ...entry, rank: i + 1 }));
  const visibleLeaderboard = showFullLeaderboard ? leaderboard : leaderboard.slice(0, 3);
  const youEntry = leaderboard.find((e) => "isYou" in e && e.isYou);
  const youVisible = visibleLeaderboard.some((e) => "isYou" in e && e.isYou);

  const studiedMinutes = readyModuleSlugs
    .filter((slug) => progress[slug]?.passed)
    .reduce((sum, slug) => sum + (moduleMetas.find((m) => m.slug === slug)?.durationMinutes ?? 0), 0);
  const totalMinutes = readyModuleSlugs.reduce((sum, slug) => sum + (moduleMetas.find((m) => m.slug === slug)?.durationMinutes ?? 0), 0);
  const studiedHours = (studiedMinutes / 60).toFixed(1);
  const studiedPct = totalMinutes > 0 ? Math.round((studiedMinutes / totalMinutes) * 100) : 0;

  const knowledgeCategories = Array.from(new Set(moduleMetas.map((m) => m.category || "Outros"))).map((cat) => {
    const modsInCat = moduleMetas.filter((m) => (m.category || "Outros") === cat && readyModuleSlugs.includes(m.slug));
    const doneInCat = modsInCat.filter((m) => progress[m.slug]?.passed).length;
    const pctCat = modsInCat.length > 0 ? Math.round((doneInCat / modsInCat.length) * 100) : 0;
    return { cat, pctCat };
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-atlas-orange">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="font-display text-4xl font-bold mb-2">Cockpit Operacional</h1>
            <p className="text-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              Agente Logístico: {registration.nomeCompleto.split(" ")[0]} ({registration.cargo})
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass px-6 py-3 rounded-full flex items-center gap-4">
            <span className="text-sm font-semibold text-muted uppercase tracking-widest">Patente Atual</span>
            <span className="text-atlas-orange font-bold font-display text-xl">{current.title}</span>
            <div className="w-1 h-8 bg-border" />
            <span className="text-sm font-bold">{xp} XP</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Módulos Concluídos"
            value={`${completedReady}/${readyModuleSlugs.length}`}
            icon={Target}
            variance={Math.round((completedReady / readyModuleSlugs.length) * 100)}
            sparklineData={[20, 30, 25, 40, 60, 55, 70, 80, 100]}
          />
          <MetricCard
            title="Sequência Tática (Streak)"
            value={streakDays.length}
            icon={Flame}
            variance={streakDays.length > 0 ? 10 : 0}
            sparklineData={[10, 10, 30, 20, 50, 40, 60, 80, 70]}
          />
          <MetricCard
            title="Pontuação Global"
            value={xp}
            icon={Trophy}
            variance={5.2}
            sparklineData={[10, 20, 30, 45, 60, 70, 75, 80, 95]}
          />
          <MetricCard
            title="Horas de Estudo"
            value={`${studiedHours}h`}
            icon={Clock}
            variance={studiedPct}
            sparklineData={[5, 15, 25, 45, 50, 45, 65, 85, 90]}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <PremiumCard className="p-6 md:p-8" withGlow>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-xl flex items-center gap-3">
                  <Award className="text-atlas-orange" /> Progressão de Carreira
                </h3>
                {next && <span className="text-xs font-bold text-muted uppercase tracking-widest">{next.minXp - xp} XP para o próximo nível</span>}
              </div>
              <div className="relative h-4 bg-surface-2 rounded-full overflow-hidden border border-border mb-4">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-atlas-orange to-atlas-orange-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px] animate-[pulse_2s_linear_infinite]" />
                </motion.div>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span className="text-foreground">{current.title}</span>
                {next ? <span className="text-atlas-orange">{next.title}</span> : <span className="text-emerald-600 dark:text-emerald-400">Patente Máxima Alcançada</span>}
              </div>
            </PremiumCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumCard className="p-6 min-h-[300px] flex flex-col">
                <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                  <Activity className="text-atlas-orange w-5 h-5" /> Radar de Conhecimento
                </h3>
                <div className="flex-1 flex flex-col justify-center gap-4">
                  {knowledgeCategories.map(({ cat, pctCat }) => (
                    <div key={cat}>
                      <div className="mb-1 flex justify-between text-xs font-semibold text-muted">
                        <span>{cat}</span>
                        <span>{pctCat}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-atlas" style={{ width: `${pctCat}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </PremiumCard>

              <PremiumCard className="p-6 min-h-[300px] flex flex-col">
                <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                  <Zap className="text-atlas-orange w-5 h-5" /> Heatmap de Acesso
                </h3>
                <div className="flex-1 flex items-center justify-center">
                  <div className="grid grid-cols-7 gap-1.5 opacity-80">
                    {heatmap.map((isActive, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${isActive ? 'bg-atlas-orange' : 'bg-surface-2 border border-border'}`}
                      />
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </div>
          </div>

          <div className="space-y-6">
            <PremiumCard className="p-6" withGlow>
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <Compass className="text-atlas-orange w-5 h-5" /> Missões Ativas
              </h3>
              {nextModule ? (
                <div className="bg-surface-2 border border-border rounded-xl p-5 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-atlas-orange" />
                  <p className="text-xs text-atlas-orange font-bold uppercase tracking-widest mb-2">Próxima Triagem</p>
                  <h4 className="font-bold text-lg mb-1 text-foreground">{nextModule.title}</h4>
                  <p className="text-sm text-muted mb-6">{nextModule.durationMinutes} min est. · Prioridade Alta</p>
                  <Link href={`/trilha/${nextModule.slug}`} className="inline-flex items-center justify-between w-full bg-atlas-orange/10 hover:bg-atlas-orange/20 transition-colors px-4 py-3 rounded-lg text-sm font-bold text-foreground">
                    <span>Iniciar Missão</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ) : (
                 <div className="bg-surface-2 border border-emerald-500/30 rounded-xl p-5 text-center">
                   <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-2">Todas as missões concluídas!</p>
                   <Link href="/certificado" className="inline-block mt-2 px-4 py-2 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-bold hover:bg-emerald-500/25 transition-colors">
                     Acessar Certificado Oficial
                   </Link>
                 </div>
              )}
            </PremiumCard>

            <PremiumCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-lg flex items-center gap-2">
                  <Star className="text-atlas-orange w-5 h-5" /> Leaderboard Corporativo
                </h3>
              </div>
              <div className="space-y-3">
                {visibleLeaderboard.map((entry) => {
                  const isYou = "isYou" in entry && entry.isYou;
                  return (
                    <div
                      key={entry.name}
                      className={
                        isYou
                          ? "flex items-center justify-between p-3 rounded-lg bg-atlas-orange/15 border border-atlas-orange/50 relative overflow-hidden shadow-[0_0_15px_rgba(255,86,24,0.15)]"
                          : "flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border"
                      }
                    >
                      {isYou && <div className="absolute left-0 top-0 bottom-0 w-1 bg-atlas-orange" />}
                      <div className={`flex items-center gap-3 ${isYou ? "pl-2" : ""}`}>
                        <span className={`font-display font-bold ${isYou ? "text-atlas-orange" : "text-muted"}`}>#{entry.rank}</span>
                        <span className="text-sm font-bold text-foreground">{entry.name}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${isYou ? "text-atlas-orange bg-atlas-orange/20" : "text-muted bg-surface"}`}>{entry.xp} XP</span>
                    </div>
                  );
                })}
                {!youVisible && youEntry && (
                  <>
                    <p className="text-center text-xs text-muted">•••</p>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-atlas-orange/15 border border-atlas-orange/50 relative overflow-hidden shadow-[0_0_15px_rgba(255,86,24,0.15)]">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-atlas-orange" />
                      <div className="flex items-center gap-3 pl-2">
                        <span className="font-display font-bold text-atlas-orange">#{youEntry.rank}</span>
                        <span className="text-sm font-bold text-foreground">{youEntry.name}</span>
                      </div>
                      <span className="text-xs font-bold text-atlas-orange bg-atlas-orange/20 px-2 py-1 rounded">{youEntry.xp} XP</span>
                    </div>
                  </>
                )}
              </div>
              <p className="mt-3 text-center text-[11px] text-muted">Ranking com colegas de demonstração — apenas você é uma conta real.</p>
              <button
                onClick={() => setShowFullLeaderboard((v) => !v)}
                className="w-full mt-2 text-xs font-bold text-muted uppercase tracking-widest hover:text-foreground transition-colors"
              >
                {showFullLeaderboard ? "Ver menos" : "Ver ranking completo"}
              </button>
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}
