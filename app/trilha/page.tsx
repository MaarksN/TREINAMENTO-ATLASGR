"use client";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { moduleMetas } from "@/content/modules";
import { readyModuleSlugs } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useRequireRegistration } from "@/lib/useRequireRegistration";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function TrilhaPage() {
  const { ready, registration } = useRequireRegistration();
  const progress = useOnboardingStore((s) => s.progress);

  if (!ready || !registration) return null;

  const completedReady = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const pct = Math.round((completedReady / readyModuleSlugs.length) * 100);
  const allReadyDone = completedReady === readyModuleSlugs.length;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="reveal-up">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-atlas-orange">
            Olá, {registration.nomeCompleto.split(" ")[0]}
          </p>
          <h1 className="mt-1 font-display text-3xl font-bold text-foreground">Trilha de Onboarding</h1>
          <p className="mt-2 max-w-2xl text-muted">
            15 módulos compõem a trilha completa. Nesta versão de protótipo, 3 módulos têm conteúdo, quiz e
            certificação totalmente funcionais — os demais mostram o outline já estruturado.
          </p>
        </div>

        <Card className="reveal-up mt-6 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium">Progresso dos módulos disponíveis ({completedReady}/{readyModuleSlugs.length})</p>
            <ProgressBar value={pct} className="mt-2" />
          </div>
          {allReadyDone && (
            <Link href="/prova-final">
              <Button>Ir para a Prova Final</Button>
            </Link>
          )}
        </Card>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moduleMetas.map((m, i) => (
            <ModuleCard key={m.slug} meta={m} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
