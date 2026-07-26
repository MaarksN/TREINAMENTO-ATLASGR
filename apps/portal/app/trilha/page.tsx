"use client";

import { motion } from "framer-motion";
import { PlayCircle, Sparkles, Trophy } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { moduleMetas } from "@/content/modules";
import { readyModuleSlugs } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { Button } from "@/components/ui/Button";
import { moduleIcons } from "@/lib/moduleIcons";
import Link from "next/link";

export default function TrilhaPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);

  if (!ready || !registration) return null;

  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const pct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const allReadyDone = completedReady === readyModuleSlugs.length;
  const nextModule = moduleMetas.find((m) => readyModuleSlugs.includes(m.slug) && !progress[m.slug]?.passed);
  const NextIcon = nextModule ? moduleIcons[nextModule.slug] : undefined;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-atlas-orange">
            Olá, {registration.nomeCompleto.split(" ")[0]}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trilha de Onboarding
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            15 módulos compõem a trilha completa, todos com conteúdo, quiz e certificação totalmente funcionais.
          </p>
        </motion.div>

        {/* Banner "continuar assistindo" / progresso — estilo Netflix */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-2 via-surface-2 to-[color-mix(in_srgb,var(--atlas-orange)_16%,var(--surface-2))] p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-atlas-orange/20 blur-3xl" />
          {NextIcon && (
            <NextIcon className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-foreground/5" aria-hidden />
          )}

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted">
                <Sparkles size={12} className="text-atlas-orange" />
                {allReadyDone ? "Trilha concluída" : "Continue de onde parou"}
              </span>

              {allReadyDone ? (
                <>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Todos os módulos disponíveis foram concluídos 🎉
                  </h2>
                  <p className="mt-2 text-muted">
                    Você está pronto para a avaliação final e emissão do certificado oficial ATLASGR.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {nextModule?.title}
                  </h2>
                  <p className="mt-2 text-muted">{nextModule?.shortDescription}</p>
                </>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {allReadyDone ? (
                  <Link href="/prova-final">
                    <Button size="lg" leftIcon={<Trophy size={18} />}>
                      Ir para a Prova Final
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/trilha/${nextModule?.slug}`}>
                    <Button size="lg" leftIcon={<PlayCircle size={18} />}>
                      Continuar módulo
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full max-w-sm shrink-0 rounded-2xl border border-border bg-surface p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-muted">Progresso da trilha</span>
                <span className="font-display font-bold text-atlas-orange">{pct}%</span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-atlas-orange to-atlas-orange-2"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <p className="mt-2 text-xs text-muted">
                {completedReady} de {readyModuleSlugs.length} módulos disponíveis concluídos
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grade de módulos */}
        <div className="mt-12">
          <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">Todos os módulos</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {moduleMetas.map((m, i) => (
              <ModuleCard key={m.slug} meta={m} index={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
