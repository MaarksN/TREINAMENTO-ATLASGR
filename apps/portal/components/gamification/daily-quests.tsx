"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, CheckCircle2, Zap, Flame, Clock } from "lucide-react";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { useOnboardingStore } from "@/lib/store";

const INITIAL_QUESTS = [
  { id: 1, title: "Login Diário", description: "Acesse o portal hoje.", xpReward: 50, completed: false, icon: Zap },
  { id: 2, title: "Estudioso", description: "Conclua um módulo de treinamento.", xpReward: 100, completed: false, icon: Target },
  { id: 3, title: "Veterano", description: "Mantenha uma sequência de 3 dias.", xpReward: 150, completed: false, icon: Flame },
];

export function DailyQuests() {
  const [quests, setQuests] = useState(INITIAL_QUESTS);
  const addXP = useOnboardingStore((s) => s.addXP);

  const handleComplete = (id: number, xpReward: number) => {
    setQuests((prev) =>
      prev.map((q) => (q.id === id ? { ...q, completed: true } : q))
    );
    addXP(xpReward);
  };

  const allCompleted = quests.every(q => q.completed);

  return (
    <PremiumCard className="p-6" withGlow>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display font-bold text-lg flex items-center gap-2">
          <Clock className="text-atlas-orange w-5 h-5" /> Missões Diárias
        </h3>
        <span className="text-xs font-bold text-muted uppercase tracking-widest bg-surface-2 px-2 py-1 rounded">Reseta em 14h 23m</span>
      </div>
      
      <div className="space-y-3">
        {quests.map((quest) => {
          const Icon = quest.icon;
          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                quest.completed
                  ? "bg-emerald-500/10 border-emerald-500/30"
                  : "bg-surface-2 border-border hover:border-atlas-orange/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${quest.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-atlas-orange/20 text-atlas-orange"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${quest.completed ? "text-muted line-through" : "text-foreground"}`}>
                    {quest.title}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">{quest.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  quest.completed ? "text-emerald-400 bg-emerald-500/20" : "text-atlas-orange bg-atlas-orange/20"
                }`}>
                  +{quest.xpReward} XP
                </span>
                
                <AnimatePresence mode="wait">
                  {quest.completed ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-emerald-400"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => handleComplete(quest.id, quest.xpReward)}
                      className="w-5 h-5 rounded-full border-2 border-muted hover:border-atlas-orange transition-colors"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {allCompleted && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-center"
        >
          <p className="text-sm text-emerald-400 font-bold">Todas as missões concluídas! Excelente trabalho.</p>
        </motion.div>
      )}
    </PremiumCard>
  );
}
