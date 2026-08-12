"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Medal, Award } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";

const LEADERBOARD_SEED = [
  { name: "Carlos Silva", xp: 2450, department: "Logística", avatar: "CS" },
  { name: "Ana Pereira", xp: 1820, department: "Operações", avatar: "AP" },
  { name: "Bruno Costa", xp: 1340, department: "Atendimento", avatar: "BC" },
  { name: "Juliana Alves", xp: 960, department: "Logística", avatar: "JA" },
  { name: "Rafael Nunes", xp: 410, department: "Operações", avatar: "RN" },
  { name: "Mariana Silva", xp: 350, department: "Logística", avatar: "MS" },
  { name: "Lucas Fernandes", xp: 200, department: "TI", avatar: "LF" },
  { name: "Patrícia Gomes", xp: 150, department: "Atendimento", avatar: "PG" },
  { name: "Roberto Souza", xp: 50, department: "Operações", avatar: "RS" },
];

export default function RankingPage() {
  const { ready, registration } = useRequireRegistration();
  const xp = useOnboardingStore((s) => s.xp);

  if (!ready || !registration) return null;

  const firstName = registration.nomeCompleto.split(" ")[0];
  const initials = registration.nomeCompleto
    .split(" ")
    .slice(0, 2)
    .map(n => n[0])
    .join("")
    .toUpperCase();

  const leaderboard = [...LEADERBOARD_SEED, { 
    name: `${firstName} (Você)`, 
    xp, 
    department: registration.cargo, 
    avatar: initials,
    isYou: true 
  }]
    .sort((a, b) => b.xp - a.xp)
    .map((entry, i) => ({ ...entry, rank: i + 1 }));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-atlas-orange">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center justify-center p-3 bg-atlas-orange/20 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-atlas-orange" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl font-bold mb-2">
            Global Ranking
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted max-w-lg mx-auto">
            Os melhores operadores da AtlasGR. Acumule XP completando missões e treinamentos para subir de patente.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <PremiumCard className="p-1 md:p-2" withGlow>
            <div className="bg-surface-2 rounded-xl overflow-hidden">
              <div className="grid grid-cols-[3rem_1fr_1fr_4rem] gap-4 p-4 border-b border-border text-xs font-bold text-muted uppercase tracking-widest">
                <div className="text-center">Pos</div>
                <div>Operador</div>
                <div className="hidden sm:block">Departamento</div>
                <div className="text-right">XP</div>
              </div>
              <div className="divide-y divide-border">
                {leaderboard.map((entry) => {
                  const isYou = "isYou" in entry && entry.isYou;
                  const isTop3 = entry.rank <= 3;
                  
                  return (
                    <div
                      key={entry.name}
                      className={`grid grid-cols-[3rem_1fr_1fr_4rem] gap-4 p-4 items-center transition-colors ${
                        isYou ? "bg-atlas-orange/10 relative" : "hover:bg-surface"
                      }`}
                    >
                      {isYou && <div className="absolute left-0 top-0 bottom-0 w-1 bg-atlas-orange shadow-[0_0_10px_rgba(255,86,24,0.5)]" />}
                      
                      <div className="text-center font-display font-bold">
                        {entry.rank === 1 ? <Medal className="w-6 h-6 mx-auto text-yellow-500" /> :
                         entry.rank === 2 ? <Medal className="w-6 h-6 mx-auto text-gray-400" /> :
                         entry.rank === 3 ? <Medal className="w-6 h-6 mx-auto text-amber-700" /> :
                         <span className={isYou ? "text-atlas-orange" : "text-muted"}>#{entry.rank}</span>}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          isTop3 ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black" :
                          isYou ? "bg-atlas-orange text-black" : "bg-surface-3 text-muted"
                        }`}>
                          {entry.avatar}
                        </div>
                        <span className={`font-bold ${isYou ? "text-atlas-orange" : "text-foreground"}`}>
                          {entry.name}
                        </span>
                      </div>
                      
                      <div className="hidden sm:flex items-center text-sm text-muted">
                        {entry.department}
                      </div>
                      
                      <div className="text-right">
                        <span className={`inline-flex items-center gap-1 text-sm font-bold px-2 py-1 rounded ${
                          isYou ? "text-atlas-orange bg-atlas-orange/20" : "text-foreground bg-surface-3"
                        }`}>
                          {entry.xp} <Star className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </main>
    </div>
  );
}
