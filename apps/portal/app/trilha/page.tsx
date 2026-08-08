"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Sparkles, Trophy, BookOpen, Clock, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TrilhaPage() {
  const isRegistered = useRequireRegistration();
  const { registration, progress } = useOnboardingStore();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isRegistered || !registration) return null;

  const readyModuleSlugs = moduleMetas.filter(m => m.status === "ready").map(m => m.slug);
  const completedReady = readyModuleSlugs.filter(slug => progress[slug]?.passed).length;
  const pct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const allReadyDone = completedReady === readyModuleSlugs.length;

  const unfinishedModules = moduleMetas.filter((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.completed);
  const nextModule = unfinishedModules.length > 0 ? unfinishedModules[0] : null;

  const currentModule = moduleMetas[activeIndex];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-surface-2 pt-8 pb-8 border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Badge variant="orange" className="mb-2">Operador: {registration.nomeCompleto.split(" ")[0]}</Badge>
              <h1 className="font-display text-3xl font-black tracking-tight">
                Missões Operacionais
              </h1>
            </div>

            <div className="flex items-center gap-4 bg-background/80 p-3 rounded-2xl border border-border/50">
              <div className="text-right">
                <span className="block text-xs text-muted uppercase font-semibold">Progresso Global</span>
                <span className="block text-sm font-bold text-foreground">{completedReady} de {readyModuleSlugs.length} concluídos ({pct}%)</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-atlas-orange/10 flex items-center justify-center text-atlas-orange font-bold text-sm">
                {pct}%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 Item Por Página View */}
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Módulo Anterior
          </Button>

          <Badge variant="orange" className="px-3 py-1 font-mono text-xs">
            Página {activeIndex + 1} de {moduleMetas.length}
          </Badge>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((prev) => Math.min(moduleMetas.length - 1, prev + 1))}
            disabled={activeIndex === moduleMetas.length - 1}
            rightIcon={<ChevronRight size={16} />}
          >
            Próximo Módulo
          </Button>
        </div>

        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <ModuleCard
                meta={currentModule}
                index={activeIndex}
                isCompleted={!!progress[currentModule.slug]?.completed}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex items-center justify-center gap-1.5 flex-wrap">
          {moduleMetas.map((m, idx) => (
            <button
              key={m.slug}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 focus-visible-ring",
                activeIndex === idx ? "w-7 bg-atlas-orange" : "w-2.5 bg-border hover:bg-atlas-orange/50"
              )}
              title={`Ir para Página ${idx + 1}: ${m.title}`}
            />
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Anterior
          </Button>

          <span className="text-xs font-semibold text-muted">
            Exibindo <strong className="text-foreground">1 item por página</strong> ({activeIndex + 1}/{moduleMetas.length})
          </span>

          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.min(moduleMetas.length - 1, prev + 1))}
            disabled={activeIndex === moduleMetas.length - 1}
            rightIcon={<ChevronRight size={16} />}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
