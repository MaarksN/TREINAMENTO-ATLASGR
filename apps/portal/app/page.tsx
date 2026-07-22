"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Compass, Heart, Sparkles, Target } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks, ContactAddress } from "@/components/brand/SocialLinks";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { InstitutionalVideo } from "@/components/media/InstitutionalVideo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";

const values = [
  { icon: Target, label: "Perseverança" },
  { icon: Sparkles, label: "Transparência" },
  { icon: Compass, label: "Simplicidade" },
  { icon: Building2, label: "Atitude de Dono" },
  { icon: Heart, label: "Inovação" },
];

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const registration = useOnboardingStore((s) => s.registration);
  const onboardingCompleted = useOnboardingStore((s) => s.onboardingCompleted);
  const canContinue = !!registration && onboardingCompleted;

  function handleStart() {
    if (canContinue) router.push("/trilha");
    else setModalOpen(true);
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero (capa) */}
        <section className="relative overflow-hidden px-4 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-atlas-orange/20 via-atlas-orange/[0.04] to-atlas-orange-2/15" />
          <div className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-96 w-96 rounded-full bg-atlas-orange/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-[-10%] -z-10 h-80 w-80 rounded-full bg-atlas-orange-2/20 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted"
            >
              Portal de Onboarding e Treinamento Corporativo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl"
            >
              Bem-vindo à
              <Logo withWordmark={false} className="h-9 w-auto sm:h-12" />
              <span className="text-gradient-atlas">ATLASGR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-xl text-lg font-medium text-foreground/80 sm:text-xl"
            >
              Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação. Sua trilha de onboarding
              começa aqui — do propósito da empresa aos sistemas que você vai usar todos os dias.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
              <Button size="lg" onClick={handleStart}>
                {canContinue ? "Continuar minha trilha" : "Iniciar Onboarding"}
              </Button>
            </motion.div>
          </div>

          {/* Vídeo institucional real da ATLASGR */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-14 max-w-3xl"
          >
            <InstitutionalVideo />
          </motion.div>
        </section>

        {/* Índice da Trilha — 15 módulos, em faixa escura estilo catálogo */}
        <section className="bg-[#0b0c0e] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal-up text-center">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-atlas-orange">Índice da trilha</p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">15 módulos de onboarding</h2>
              <p className="mx-auto mt-2 max-w-2xl text-gray-400">
                Do propósito da empresa aos sistemas usados todos os dias. Clique em qualquer módulo para abrir o
                conteúdo completo.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {moduleMetas.map((m, i) => (
                <ModuleCard key={m.slug} meta={m} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Indicadores */}
        <section className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Desde", value: "2004" },
              { label: "Central de monitoramento", value: "24 horas" },
              { label: "Áreas na Diretoria", value: "5" },
            ].map((s) => (
              <Card key={s.label} className="reveal-up p-6 text-center">
                <p className="font-display text-3xl font-bold text-gradient-atlas">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Propósito e Valores */}
        <section className="mx-auto max-w-5xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">Propósito</h2>
              <p className="mt-3 text-muted">
                &ldquo;Nós conectamos pessoas e tecnologia gerando valores com segurança e inovação.&rdquo;
              </p>
              <p className="mt-4 text-xs text-muted/70">
                Missão e visão formais em texto público serão incorporadas ao portal assim que o material institucional
                oficial for disponibilizado — este protótipo usa apenas conteúdo confirmado nos documentos internos.
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="font-display text-xl font-semibold text-foreground">Valores</h2>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {values.map((v) => (
                  <li key={v.label} className="flex items-center gap-2 rounded-xl bg-surface-2 px-3 py-2 text-sm">
                    <v.icon size={16} className="text-atlas-orange" />
                    {v.label}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-12 text-center">
          <Button size="lg" onClick={handleStart}>
            {canContinue ? "Continuar minha trilha" : "Iniciar Onboarding"}
          </Button>
        </section>

        {/* Contato e redes sociais */}
        <section className="mx-auto max-w-3xl px-4 pb-24 text-center">
          <SocialLinks className="justify-center" />
          <ContactAddress className="mt-4" />
        </section>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
