"use client";

import { motion } from "framer-motion";
import { User, Mail, Shield, Target, Award, Clock, Flame, Zap } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { levelProgress } from "@/lib/gamification";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";

export default function ProfilePage() {
  const { ready, registration } = useRequireRegistration();
  const xp = useOnboardingStore((s) => s.xp);
  const progress = useOnboardingStore((s) => s.progress);
  const streakDays = useOnboardingStore((s) => s.streakDays);

  if (!ready || !registration) return null;

  const { current, next, pct } = levelProgress(xp);
  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  
  const studiedMinutes = readyModuleSlugs
    .filter((slug) => progress[slug]?.passed)
    .reduce((sum, slug) => sum + (moduleMetas.find((m) => m.slug === slug)?.durationMinutes ?? 0), 0);
  const studiedHours = (studiedMinutes / 60).toFixed(1);

  const initials = registration.nomeCompleto
    .split(" ")
    .slice(0, 2)
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-atlas-orange">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Esquerda - Perfil Principal */}
          <div className="space-y-6">
            <PremiumCard className="p-8 text-center relative overflow-hidden" withGlow>
              <div className="absolute inset-0 bg-gradient-to-b from-atlas-orange/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-32 h-32 mx-auto bg-surface-2 border-4 border-atlas-orange rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,86,24,0.3)]">
                  <span className="text-4xl font-display font-bold text-atlas-orange">{initials}</span>
                </motion.div>
                
                <h1 className="font-display text-2xl font-bold mb-1">{registration.nomeCompleto}</h1>
                <p className="text-atlas-orange font-bold text-sm tracking-widest uppercase mb-4">{current.title}</p>
                
                <div className="bg-surface-2 rounded-lg p-4 space-y-3 text-left border border-border">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted" />
                    <span className="text-muted">{registration.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-muted" />
                    <span className="text-muted">{registration.cargo}</span>
                  </div>
                </div>
              </div>
            </PremiumCard>

            <PremiumCard className="p-6">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <Target className="text-atlas-orange w-5 h-5" /> Status Atual
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="text-xs text-muted font-bold uppercase tracking-widest">Nível XP</p>
                    <p className="font-bold text-2xl text-foreground">{xp}</p>
                  </div>
                  {next && <p className="text-xs text-muted">Faltam {next.minXp - xp} XP</p>}
                </div>
                <div className="relative h-3 bg-surface-2 rounded-full overflow-hidden border border-border">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-atlas-orange"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:15px_15px] animate-[pulse_2s_linear_infinite]" />
                  </motion.div>
                </div>
              </div>
            </PremiumCard>
          </div>

          {/* Coluna Direita - Estatísticas e Conquistas */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-atlas-orange" /> Desempenho Operacional
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <PremiumCard className="p-6 text-center hover:scale-105 transition-transform cursor-default">
                <div className="w-12 h-12 mx-auto bg-atlas-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-atlas-orange" />
                </div>
                <p className="text-3xl font-display font-bold mb-1">{completedReady}</p>
                <p className="text-xs text-muted font-bold uppercase tracking-widest">Módulos Feitos</p>
              </PremiumCard>
              
              <PremiumCard className="p-6 text-center hover:scale-105 transition-transform cursor-default">
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-3xl font-display font-bold mb-1">{studiedHours}h</p>
                <p className="text-xs text-muted font-bold uppercase tracking-widest">Tempo de Treino</p>
              </PremiumCard>

              <PremiumCard className="p-6 text-center hover:scale-105 transition-transform cursor-default sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-3xl font-display font-bold mb-1">{streakDays.length}</p>
                <p className="text-xs text-muted font-bold uppercase tracking-widest">Dias em Sequência</p>
              </PremiumCard>
            </div>

            <PremiumCard className="p-6 mt-8">
              <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-2">
                <Award className="text-atlas-orange w-5 h-5" /> Distintivos & Conquistas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Primeiro Login", desc: "Acessou o portal", active: true, icon: Zap },
                  { name: "Estudioso", desc: "Completou 1 módulo", active: completedReady >= 1, icon: Target },
                  { name: "Veterano", desc: "Nível Avançado", active: xp >= 1000, icon: Shield },
                  { name: "Invicto", desc: "5 dias seguidos", active: streakDays.length >= 5, icon: Flame },
                ].map((badge, i) => (
                  <div key={i} className={`p-4 rounded-xl border text-center transition-all ${
                    badge.active ? "bg-surface-2 border-atlas-orange/30 shadow-[0_0_15px_rgba(255,86,24,0.1)]" : "bg-surface/50 border-border opacity-50 grayscale"
                  }`}>
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-3 ${
                      badge.active ? "bg-atlas-orange/20 text-atlas-orange" : "bg-surface-3 text-muted"
                    }`}>
                      <badge.icon className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-sm mb-1">{badge.name}</p>
                    <p className="text-[10px] text-muted leading-tight">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>

        </div>
      </main>
    </div>
  );
}
