"use client";

import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { Target, Compass, Award, Clock, Star, Zap, Activity, Shield, ChevronRight, Flame, Trophy } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { levelProgress } from "@/lib/gamification";
import { moduleMetas as modules } from "@/content/modules";
import { MetricCard, Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { GamificationDashboard } from "@/components/gamification/GamificationDashboard";

export default function DashboardPage() {
  const isRegistered = useRequireRegistration();
  const { registration, progress, xp, streakDays } = useOnboardingStore();

  if (!isRegistered || !registration) return null;

  const readyModuleSlugs = modules.filter(m => m.status === "ready").map(m => m.slug);
  const completedReady = readyModuleSlugs.filter(slug => progress[slug]?.passed).length;

  const unfinishedModules = modules.filter(m => m.status === "ready" && !progress[m.slug]?.completed);
  const nextModule = unfinishedModules.length > 0 ? unfinishedModules[0] : null;
  const { current, next, pct } = levelProgress(xp);

  const mockHeatmap = Array(28).fill(false);
  const today = new Date();
  for (let i = 0; i < 28; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (27 - i));
    const dStr = d.toISOString().split("T")[0];
    if (streakDays.includes(dStr)) {
      mockHeatmap[i] = true;
    }
  }

  // Artificial metrics
  const heatmap = mockHeatmap.length ? mockHeatmap : Array(28).fill(false).map(() => false);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Dynamic Header Banner */}
      <div className="relative overflow-hidden bg-gradient-atlas pb-24 pt-12 text-white">
        <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">
                Painel do Operador
              </h1>
              <p className="text-white/80 font-medium text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
                Agente Logístico: {registration.nomeCompleto.split(" ")[0]} ({registration.cargo})
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-4 border border-white/20 shadow-lg">
              <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">Patente Atual</span>
              <span className="text-white font-bold font-display text-xl">{current.title}</span>
              <div className="w-1 h-8 bg-white/20" />
              <span className="text-sm font-bold">{xp} XP</span>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-16 space-y-8 relative z-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Módulos Concluídos"
            value={`${completedReady}/${readyModuleSlugs.length}`}
            icon={<Target />}
            trend={{ value: Math.round((completedReady / readyModuleSlugs.length) * 100), label: "concluído", isPositive: true }}
          />
          <MetricCard
            title="Sequência Tática (Streak)"
            value={streakDays.length}
            icon={<Flame />}
            trend={{ value: streakDays.length > 0 ? 10 : 0, label: "dias mantidos", isPositive: true }}
          />
          <MetricCard
            title="Pontuação Global"
            value={xp}
            icon={<Trophy />}
            trend={{ value: 5.2, label: "vs média empresa", isPositive: true }}
          />
          <MetricCard
            title="Horas de Simulador"
            value="3.5"
            icon={<Clock />}
            trend={{ value: 12.5, label: "esta semana", isPositive: true }}
          />
        </div>

        {/* Gamification Dashboard Block */}
        <GamificationDashboard />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="elevated" className="min-h-[300px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="text-atlas-orange w-5 h-5" /> Radar de Conhecimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center relative pb-6">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-[80%] aspect-square rounded-full border border-border" />
                    <div className="absolute w-[60%] aspect-square rounded-full border border-border" />
                    <div className="absolute w-[40%] aspect-square rounded-full border border-border" />
                    <div className="absolute w-full h-[1px] bg-border transform rotate-45" />
                    <div className="absolute w-full h-[1px] bg-border transform -rotate-45" />
                    <div className="absolute w-[1px] h-full bg-border" />
                    <div className="absolute w-full h-[1px] bg-border" />
                  </div>
                  <div className="z-10 text-center">
                    <p className="text-muted italic text-sm">(Gráfico Radar Parcial)</p>
                    <p className="text-xs text-muted mt-2 font-medium">Gestão de Risco: 85% | SLA: 60%</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="elevated" className="min-h-[300px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="text-atlas-orange w-5 h-5" /> Heatmap de Acesso
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center pb-6">
                  <div className="grid grid-cols-7 gap-2">
                    {heatmap.map((isActive, i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-md transition-colors ${isActive ? 'bg-atlas-orange shadow-[0_0_10px_rgba(255,86,24,0.4)]' : 'bg-surface-2 border border-border/50'}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card variant="elevated" withGlow>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="text-atlas-orange w-5 h-5" /> Missões Ativas
                </CardTitle>
              </CardHeader>
              <CardContent>
              {nextModule ? (
                <div className="bg-surface-2 border border-border/50 rounded-xl p-5 group relative overflow-hidden transition-all hover:border-atlas-orange/50 hover:shadow-md">
                  <div className="absolute top-0 left-0 w-1 h-full bg-atlas-orange" />
                  <p className="text-xs text-atlas-orange font-bold uppercase tracking-widest mb-2">Próxima Triagem</p>
                  <h4 className="font-bold font-display text-lg mb-1">{nextModule.title}</h4>
                  <p className="text-sm text-muted mb-6">{nextModule.durationMinutes} min est. · Prioridade Alta</p>
                  <Link href={`/trilha/${nextModule.slug}`} className="inline-flex items-center justify-between w-full bg-background border border-border/50 hover:bg-surface hover:border-atlas-orange/50 transition-colors px-4 py-3 rounded-lg text-sm font-bold group-hover:text-atlas-orange">
                    <span>Iniciar Missão</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ) : (
                 <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
                   <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-2">Todas as missões concluídas!</p>
                   <Link href="/certificado" className="inline-block mt-2 px-4 py-2 bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-lg text-sm font-bold hover:bg-emerald-500/30 transition-colors">
                     Acessar Certificado Oficial
                   </Link>
                 </div>
              )}
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="text-atlas-orange w-5 h-5" /> Leaderboard Corporativo
                </CardTitle>
              </CardHeader>
              <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-muted">#1</span>
                    <span className="text-sm font-bold">Carlos Silva</span>
                  </div>
                  <span className="text-xs font-bold text-atlas-orange bg-atlas-orange/10 px-2 py-1 rounded-md">2450 XP</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-atlas-orange/10 border border-atlas-orange/30 relative overflow-hidden shadow-sm shadow-atlas-orange/10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-atlas-orange" />
                  <div className="flex items-center gap-3 pl-2">
                    <span className="font-display font-bold text-atlas-orange">#2</span>
                    <span className="text-sm font-bold">{registration.nomeCompleto.split(" ")[0]} (Você)</span>
                  </div>
                  <span className="text-xs font-bold text-atlas-orange bg-atlas-orange/20 px-2 py-1 rounded-md">{xp} XP</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-muted">#3</span>
                    <span className="text-sm font-bold">Ana Pereira</span>
                  </div>
                  <span className="text-xs font-bold text-muted bg-surface px-2 py-1 rounded-md shadow-sm border border-border/50">1820 XP</span>
                </div>
              </div>
              <button className="w-full mt-6 text-xs font-bold text-muted uppercase tracking-widest hover:text-foreground transition-colors">Ver ranking completo</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
