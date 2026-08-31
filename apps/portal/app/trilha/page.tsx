"use client";

import { motion } from "framer-motion";
import { PlayCircle, Sparkles, Trophy, BookOpen, Clock, Target, GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { MasteryOverview } from "@/components/trail/MasteryOverview";
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

  const readyModuleSlugs = moduleMetas.filter((m) => m.status === "ready").map((m) => m.slug);
  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const pct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const allReadyDone = completedReady === readyModuleSlugs.length;
  const totalMinutes = moduleMetas.filter((m) => m.status === "ready").reduce((sum, module) => sum + module.durationMinutes, 0);

  const unfinishedModules = moduleMetas.filter((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.passed);
  const nextModule = unfinishedModules.length > 0 ? unfinishedModules[0] : null;
  const categories = Array.from(new Set(moduleMetas.map((m) => m.category || "Outros")));

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      <section className="relative overflow-hidden bg-surface-2 pt-10 pb-14 border-b border-border/50">
        <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-atlas-orange/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Badge variant="orange" className="mb-3 px-3 py-1 text-xs font-bold">Aluno: {registration.nomeCompleto.split(" ")[0]}</Badge>
            <div className="flex items-center gap-3 text-atlas-orange mb-3">
              <GraduationCap size={24} aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Academia ATLASGR</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gradient-title mb-3">
              Aprenda. Aplique. Prove que domina.
            </h1>
            <p className="max-w-3xl text-base sm:text-lg text-muted font-medium leading-relaxed">
              Uma jornada de formação que combina conhecimento técnico, cenários reais, prática deliberada e validação de domínio. O objetivo não é terminar módulos. É tomar decisões melhores no trabalho.
            </p>
          </motion.div>

          <Card variant="elevated" className="overflow-hidden bg-background border-border/60 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-atlas-orange/5 to-transparent pointer-events-none" />

            <div className="p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-atlas-orange/30 bg-atlas-orange/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-atlas-orange mb-4">
                  <Sparkles size={14} aria-hidden="true" />
                  {allReadyDone ? "Formação concluída" : "Próximo passo"}
                </span>

                {allReadyDone ? (
                  <>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
                      Formação técnica concluída 🎓
                    </h2>
                    <p className="text-base text-muted leading-relaxed">
                      Todos os módulos foram validados. Agora consolide o aprendizado na prova final e no certificado.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3">
                      {nextModule?.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-muted mb-6">
                      <span className="flex items-center gap-1.5"><BookOpen size={16} aria-hidden="true" /> {nextModule?.category}</span>
                      <span className="flex items-center gap-1.5"><Clock size={16} aria-hidden="true" /> {nextModule?.durationMinutes} min</span>
                      <span className="flex items-center gap-1.5"><Target size={16} aria-hidden="true" /> Conteúdo + prática + avaliação</span>
                    </div>
                  </>
                )}

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  {allReadyDone ? (
                    <Link href="/certificado">
                      <Button size="lg" variant="primary" leftIcon={<Trophy size={18} />}>
                        Acessar Certificado
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/trilha/${nextModule?.slug}`}>
                      <Button size="lg" variant="primary" leftIcon={<PlayCircle size={18} />}>
                        Começar módulo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <div className="w-full max-w-md shrink-0">
                <div className="glass-card rounded-2xl p-6 border border-border/50 bg-surface-2/50 backdrop-blur-md">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="font-bold text-foreground">Progresso validado</span>
                    <span className="font-display font-black text-2xl text-gradient-atlas">{pct}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-border shadow-inner">
                    <motion.div
                      className="h-full rounded-full bg-gradient-atlas"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-background p-3 text-center border border-border/60">
                      <p className="font-display text-xl font-black text-foreground">{completedReady}/{readyModuleSlugs.length}</p>
                      <p className="text-[10px] font-black uppercase tracking-wider text-muted">módulos validados</p>
                    </div>
                    <div className="rounded-xl bg-background p-3 text-center border border-border/60">
                      <p className="font-display text-xl font-black text-foreground">{Math.round(totalMinutes / 60)}h</p>
                      <p className="text-[10px] font-black uppercase tracking-wider text-muted">carga estimada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <MasteryOverview registration={registration} progress={progress} modules={moduleMetas} />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-atlas-orange">Currículo completo</p>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">15 módulos para construir visão de ponta a ponta</h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-muted sm:text-base">
            Siga a ordem completa para formação institucional ou use a rota personalizada acima para reforçar primeiro as competências mais críticas para sua função.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => {
            const modules = moduleMetas.filter((module) => (module.category || "Outros") === category);
            const completedInCategory = modules.filter((module) => progress[module.slug]?.passed).length;
            return (
              <section key={category} id={`category-${category.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-muted">{completedInCategory}/{modules.length} validados</p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{category}</h3>
                  </div>
                  <div className="h-px bg-border/50 flex-1 min-w-16" />
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {modules.map((module) => (
                    <ModuleCard
                      key={module.slug}
                      meta={module}
                      index={moduleMetas.findIndex((meta) => meta.slug === module.slug)}
                      isCompleted={Boolean(progress[module.slug]?.passed)}
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
