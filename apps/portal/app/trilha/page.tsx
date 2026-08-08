"use client";

import { motion } from "framer-motion";
import { PlayCircle, Sparkles, Trophy, BookOpen, Clock, Target } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function TrilhaPage() {
  const isRegistered = useRequireRegistration();
  const { registration, progress } = useOnboardingStore();

  if (!isRegistered || !registration) return null;

  const readyModuleSlugs = moduleMetas.filter(m => m.status === "ready").map(m => m.slug);
  const completedReady = readyModuleSlugs.filter(slug => progress[slug]?.passed).length;
  const pct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const allReadyDone = completedReady === readyModuleSlugs.length;

  const unfinishedModules = moduleMetas.filter((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.completed);
  const nextModule = unfinishedModules.length > 0 ? unfinishedModules[0] : null;

  const categories = Array.from(new Set(moduleMetas.map(m => m.category || "Outros")));

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      {/* Banner de Progresso — Tipografia Ajustada */}
      <section className="relative overflow-hidden bg-surface-2 pt-10 pb-14 border-b border-border/50">
        <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-atlas-orange/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Badge variant="orange" className="mb-3 px-3 py-1 text-xs font-bold">Operador: {registration.nomeCompleto.split(" ")[0]}</Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3">
              Missões Operacionais
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted font-medium leading-relaxed">
              Acesse as trilhas corporativas. Do propósito da empresa aos sistemas avançados. Avance estrategicamente no seu plano de carreira.
            </p>
          </motion.div>

          <Card variant="elevated" className="overflow-hidden bg-background border-border/60 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-atlas-orange/5 to-transparent pointer-events-none" />

            <div className="p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-atlas-orange/30 bg-atlas-orange/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-atlas-orange mb-4">
                  <Sparkles size={14} className="animate-pulse" />
                  {allReadyDone ? "Operação Concluída" : "Próxima Missão"}
                </span>

                {allReadyDone ? (
                  <>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
                      Todos os módulos técnicos concluídos! 🎉
                    </h2>
                    <p className="text-base text-muted leading-relaxed">
                      Você demonstrou preparo logístico e tecnológico ímpar.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
                      {nextModule?.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-muted mb-6">
                       <span className="flex items-center gap-1.5"><BookOpen size={16}/> {nextModule?.category}</span>
                       <span className="flex items-center gap-1.5"><Clock size={16}/> {nextModule?.durationMinutes} min</span>
                       <span className="flex items-center gap-1.5"><Target size={16}/> Dificuldade Média</span>
                    </div>
                  </>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  {allReadyDone ? (
                    <Link href="/certificado">
                      <Button size="lg" variant="primary" leftIcon={<Trophy size={18} />}>
                        Resgatar Certificado Oficial
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/trilha/${nextModule?.slug}`}>
                      <Button size="lg" variant="primary" leftIcon={<PlayCircle size={18} />}>
                        Iniciar Procedimento
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <div className="w-full max-w-md shrink-0">
                <div className="glass-card rounded-2xl p-6 border border-border/50 bg-surface-2/50 backdrop-blur-md">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="font-bold text-foreground">Progresso Global</span>
                    <span className="font-display font-black text-2xl text-gradient-atlas">{pct}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-border shadow-inner">
                    <motion.div
                      className="h-full rounded-full bg-gradient-atlas shadow-[0_0_10px_rgba(255,86,24,0.5)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-muted uppercase tracking-wider text-center">
                    {completedReady} de {readyModuleSlugs.length} módulos superados
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Todos os 15 módulos lado a lado: 3 por fileira (5 fileiras = 15 módulos) */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-16">
          {categories.map((cat) => {
            const mods = moduleMetas.filter((m) => (m.category || "Outros") === cat);
            return (
              <section key={cat} id={`category-${cat.replace(/\s+/g, '-').toLowerCase()}`}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{cat}</h2>
                  <div className="h-px bg-border/50 flex-1" />
                </div>
                {/* Grade de 3 colunas por fileira com alinhamento flexível e fontes proporcionais */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {mods.map((m) => (
                    <ModuleCard
                      key={m.slug}
                      meta={m}
                      index={moduleMetas.findIndex((meta) => meta.slug === m.slug)}
                      isCompleted={!!progress[m.slug]?.completed}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
