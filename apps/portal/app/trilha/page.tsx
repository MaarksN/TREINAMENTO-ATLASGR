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

  // Agrupamento por categoria (índice superior com scroll suave)
  const categories = Array.from(new Set(moduleMetas.map(m => m.category || "Outros")));

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      {/* Banner "continuar assistindo" / progresso — Estilo SaaS Premium */}
      <section className="relative overflow-hidden bg-surface-2 pt-12 pb-16 border-b border-border/50">
        <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-atlas-orange/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <Badge variant="orange" className="mb-4">Operador: {registration.nomeCompleto.split(" ")[0]}</Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Missões Operacionais
            </h1>
            <p className="max-w-2xl text-lg text-muted font-medium">
              Acesse as trilhas corporativas. Do propósito da empresa aos sistemas avançados. Avance estrategicamente no seu plano de carreira.
            </p>
          </motion.div>

          <Card variant="elevated" className="overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-r from-atlas-orange/5 to-transparent pointer-events-none" />

            <div className="p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-atlas-orange/30 bg-atlas-orange/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-atlas-orange mb-4">
                  <Sparkles size={14} className="animate-pulse" />
                  {allReadyDone ? "Operação Concluída" : "Próxima Missão"}
                </span>

                {allReadyDone ? (
                  <>
                    <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl leading-tight mb-4">
                      Todos os módulos técnicos concluídos! 🎉
                    </h2>
                    <p className="text-lg text-muted">
                      Você demonstrou preparo logístico e tecnológico ímpar.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl leading-tight mb-4">
                      {nextModule?.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-muted mb-6">
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
                  <div className="flex items-center justify-between text-sm mb-4">
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
                  <p className="mt-4 text-xs font-semibold text-muted uppercase tracking-wider text-center">
                    {completedReady} de {readyModuleSlugs.length} módulos superados
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Índice de Navegação (Scroll Suave) */}
        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 pb-4 pt-2 mb-12 -mx-6 px-6 overflow-x-auto no-scrollbar">
           <div className="flex items-center gap-2">
             <span className="text-xs font-bold text-muted uppercase tracking-widest mr-4 shrink-0">Índice:</span>
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => scrollToCategory(cat || "")}
                 className="px-4 py-2 rounded-full bg-surface-2 border border-border/50 text-sm font-semibold hover:border-atlas-orange hover:text-atlas-orange transition-all whitespace-nowrap"
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Grade de módulos agrupados por Categoria: Responsive (1 Mobile, 2 Tablet, 3 Desktop) */}
        <div className="space-y-24">
          {categories.map(cat => {
            const mods = moduleMetas.filter(m => (m.category || "Outros") === cat);
            return (
              <section key={cat} id={`category-${cat.replace(/\s+/g, '-').toLowerCase()}`} className="scroll-mt-40">
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{cat}</h2>
                   <div className="h-px bg-border/50 flex-1" />
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {mods.map((m) => {
                     // Passamos explicitamente as props necessárias para o card redesenhado.
                     const isCompleted = !!progress[m.slug]?.completed;
                     return (
                        <ModuleCard
                          key={m.slug}
                          meta={m}
                          index={moduleMetas.findIndex(meta => meta.slug === m.slug)}
                          isCompleted={isCompleted}
                        />
                     );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
