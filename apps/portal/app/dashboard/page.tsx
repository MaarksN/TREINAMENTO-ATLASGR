"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Target, Trophy, Clock, Flame, ChevronRight, Activity, Zap, Compass, Star } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MetricCard } from "../../../../packages/ui/src/MetricCard";
import { PremiumCard } from "../../../../packages/ui/src/PremiumCard";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";
import { levelProgress } from "@/lib/gamification";

export default function DashboardPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);
  const xp = useOnboardingStore((s) => s.xp);
  const streakDays = useOnboardingStore((s) => s.streakDays);

  const [mounted, setMounted] = useState(false);
  const [heatmap, setHeatmap] = useState<boolean[]>([]);

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
            title="Horas de Simulador"
            value="3.5"
            icon={Clock}
            variance={12.5}
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
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[80%] aspect-square rounded-full border border-foreground" />
                    <div className="absolute w-[60%] aspect-square rounded-full border border-foreground" />
                    <div className="absolute w-[40%] aspect-square rounded-full border border-foreground" />
                    <div className="absolute w-full h-[1px] bg-foreground transform rotate-45" />
                    <div className="absolute w-full h-[1px] bg-foreground transform -rotate-45" />
                    <div className="absolute w-[1px] h-full bg-foreground" />
                    <div className="absolute w-full h-[1px] bg-foreground" />
                  </div>
                  <div className="z-10 text-center">
                    <p className="text-muted italic text-sm">(Gráfico Radar Parcial)</p>
                    <p className="text-xs text-muted mt-2">Gestão de Risco: 85% | SLA: 60%</p>
                  </div>
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
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-muted">#1</span>
                    <span className="text-sm font-bold text-foreground">Carlos Silva</span>
                  </div>
                  <span className="text-xs font-bold text-atlas-orange bg-atlas-orange/10 px-2 py-1 rounded">2450 XP</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-atlas-orange/15 border border-atlas-orange/50 relative overflow-hidden shadow-[0_0_15px_rgba(255,86,24,0.15)]">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-atlas-orange" />
                  <div className="flex items-center gap-3 pl-2">
                    <span className="font-display font-bold text-atlas-orange">#2</span>
                    <span className="text-sm font-bold text-foreground">{registration.nomeCompleto.split(" ")[0]} (Você)</span>
                  </div>
                  <span className="text-xs font-bold text-atlas-orange bg-atlas-orange/20 px-2 py-1 rounded">{xp} XP</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-muted">#3</span>
                    <span className="text-sm font-bold text-foreground">Ana Pereira</span>
                  </div>
                  <span className="text-xs font-bold text-muted bg-surface px-2 py-1 rounded">1820 XP</span>
                </div>
              </div>
              <button className="w-full mt-4 text-xs font-bold text-muted uppercase tracking-widest hover:text-foreground transition-colors">Ver ranking completo</button>
            </PremiumCard>
          </div>
        </div>
      </main>
    </div>
  );
}
