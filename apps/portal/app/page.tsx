"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Compass, Heart, Sparkles, Target, Award, Rocket, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks, ContactAddress } from "@/components/brand/SocialLinks";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { InstitutionalVideo } from "@/components/media/InstitutionalVideo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
    <div className="min-h-screen bg-background selection:bg-atlas-orange selection:text-white pb-20">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-atlas opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5" />

          <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-atlas-orange/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-atlas-orange-2/10 blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-4xl text-center px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <Badge variant="premium" className="mb-8 px-4 py-1.5 shadow-xl shadow-atlas-orange/10 gap-2">
                <Award size={14} /> Portal Enterprise AtlasGR
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 font-display text-5xl font-black leading-tight tracking-tight text-foreground sm:text-7xl mb-6"
            >
              Bem-vindo à
              <Logo withWordmark={false} className="h-10 w-auto sm:h-14 mt-1" />
              <span className="text-gradient-atlas bg-clip-text">ATLASGR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto max-w-2xl text-lg font-medium text-muted sm:text-xl leading-relaxed"
            >
              Conectamos pessoas e tecnologia, gerando valor com <strong className="text-foreground">segurança</strong> e <strong className="text-foreground">inovação</strong>.
              Sua evolução na logística inteligente começa agora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" onClick={handleStart} rightIcon={<Rocket className="w-5 h-5" />}>
                {canContinue ? "Retomar minha missão" : "Iniciar Treinamento Corporativo"}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-20 max-w-5xl px-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 ring-1 ring-border/50">
              <InstitutionalVideo />
            </div>
          </motion.div>
        </section>

        {/* Trilha de Conhecimento */}
        <section className="bg-surface-2/50 border-y border-border/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="orange" className="mb-4">Módulos de Formação</Badge>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Estrutura Operacional</h2>
              <p className="text-lg text-muted">
                Domine os pilares da AtlasGR. Do gerenciamento de riscos à tecnologia proprietária, tudo projetado para o seu sucesso na linha de frente.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moduleMetas.slice(0, 6).map((m, i) => (
                <ModuleCard key={m.slug} meta={m} index={i} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" onClick={() => router.push('/trilha')} rightIcon={<ChevronRight size={18} />}>
                Ver todos os {moduleMetas.length} módulos
              </Button>
            </div>
          </div>
        </section>

        {/* Indicadores Institucionais */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Anos de Excelência", value: "20+" },
              { label: "Central de Monitoramento", value: "24/7" },
              { label: "Módulos Técnicos", value: "15" },
            ].map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={s.label}
              >
                <Card variant="elevated" className="p-8 text-center h-full flex flex-col justify-center">
                  <p className="font-display text-5xl font-black text-gradient-atlas mb-2">{s.value}</p>
                  <p className="font-semibold text-muted tracking-wide uppercase text-sm">{s.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Manifesto */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card variant="elevated" className="p-10" withGlow>
              <Badge variant="orange" className="mb-6">Nosso DNA</Badge>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">O Propósito AtlasGR</h2>
              <blockquote className="text-xl font-medium text-muted leading-relaxed border-l-4 border-atlas-orange pl-6 py-2 my-6">
                &quot;Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação constante para a logística.&quot;
              </blockquote>
              <p className="text-sm text-muted/80">
                Uma cultura forjada na linha de frente, onde cada colaborador é fundamental para garantir que o fluxo logístico nacional nunca pare.
              </p>
            </Card>

            <Card variant="elevated" className="p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Nossos Valores Nucleares</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v) => (
                  <li key={v.label} className="flex items-center gap-4 rounded-2xl bg-surface-2/50 border border-border/50 px-4 py-4 transition-colors hover:border-atlas-orange/30 group">
                    <div className="bg-surface p-2 rounded-xl shadow-sm border border-border group-hover:bg-atlas-orange/10 transition-colors">
                      <v.icon size={20} className="text-atlas-orange" />
                    </div>
                    <span className="font-semibold">{v.label}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-8 border-t border-border/50 text-center">
          <Logo className="mx-auto mb-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          <SocialLinks className="justify-center mb-8" />
          <ContactAddress className="text-sm" />
        </section>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
