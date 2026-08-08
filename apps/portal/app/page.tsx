"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Compass,
  Heart,
  Sparkles,
  Target,
  Trophy,
  Radar,
  Layers,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks, ContactAddress } from "@/components/brand/SocialLinks";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { InstitutionalVideo } from "@/components/media/InstitutionalVideo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ModuleCard } from "@/components/trail/ModuleCard";
import { moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";
import { useToastStore } from "@/lib/toastStore";
import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/basePath";

const values = [
  { label: "Perseverança", description: "Persistimos diante dos desafios da linha de frente, sem abrir mão do padrão de excelência.", icon: Building2, color: "orange" },
  { label: "Transparência", description: "Comunicação direta e dados confiáveis em cada etapa da operação logística.", icon: Compass, color: "blue" },
  { label: "Simplicidade", description: "Processos claros e ferramentas intuitivas para decisões rápidas e seguras.", icon: Heart, color: "emerald" },
  { label: "Atitude de Dono", description: "Cada colaborador responde pelo resultado como se a operação fosse sua.", icon: Sparkles, color: "violet" },
  { label: "Inovação", description: "Tecnologia proprietária aplicada continuamente para elevar segurança e eficiência.", icon: Target, color: "amber" },
] as const;

const valueColorClasses: Record<(typeof values)[number]["color"], string> = {
  orange: "bg-atlas-orange/10 text-atlas-orange group-hover:bg-atlas-orange group-hover:text-white",
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500 group-hover:text-white",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white",
};

const stats = [
  { label: "Anos de Excelência", value: 20, suffix: "+", icon: Trophy },
  { label: "Central de Monitoramento", value: 24, suffix: "/7", icon: Radar },
  { label: "Módulos Técnicos", value: moduleMetas.length, suffix: "", icon: Layers },
];

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const showToast = useToastStore((s) => s.show);

  const registration = useOnboardingStore((state) => state.registration);
  const onboardingCompleted = useOnboardingStore((state) => state.onboardingCompleted);
  const progress = useOnboardingStore((state) => state.progress);

  const canContinue = Boolean(registration && onboardingCompleted);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("authRequired") === "1") {
      setReturnTo(params.get("returnTo"));
      setModalOpen(true);
      showToast({
        title: "Faça seu primeiro acesso",
        description: "Selecione seu nome e confirme o código de acesso para continuar.",
        variant: "info",
      });
      window.history.replaceState({}, "", "/");
    }
  }, []);

  function handleStart() {
    if (canContinue) {
      router.push("/trilha");
      return;
    }
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-background selection:bg-atlas-orange selection:text-white pb-20">
      <SiteHeader hideNavLinks />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-atlas opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/brand/grid-pattern.svg')] opacity-5" />

          <div className="absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-atlas-orange/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-atlas-orange-2/10 blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-4xl text-center px-6 relative z-10">
            {/* Logo oficial proeminente */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mb-6"
            >
              <Logo className="h-16 w-auto sm:h-20" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-5xl font-black leading-tight tracking-tight text-foreground sm:text-7xl mb-6"
            >
              Bem-vindo à <span className="text-gradient-atlas bg-clip-text">ATLASGR</span>
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

            {/* Botão Único em Gradiente Laranja: INICIAR ONBOARDING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 flex justify-center"
            >
              <button
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-atlas px-10 py-5 font-display text-lg font-extrabold uppercase tracking-wider text-white shadow-2xl shadow-atlas-orange/40 transition-all duration-300 hover:scale-105 hover:shadow-atlas-orange/60 focus-visible-ring"
              >
                <span>{canContinue ? "RETOMAR ONBOARDING" : "INICIAR ONBOARDING"}</span>
                <Rocket className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-16 max-w-5xl px-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 ring-1 ring-border/50">
              <InstitutionalVideo />
            </div>
          </motion.div>
        </section>

        {/* Trilha de Conhecimento — 15 Módulos Lado a Lado (3 por fileira = 5 fileiras) */}
        <section id="modulos" className="scroll-mt-20 bg-surface-2/50 border-y border-border/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              kicker="Módulos de Formação"
              title="Estrutura Operacional"
              description="Domine os pilares da AtlasGR. Do gerenciamento de riscos à tecnologia proprietária, tudo projetado para o seu sucesso na linha de frente."
              className="mb-16"
            />

            {/* Grade dos 15 Módulos: 3 por fileira (5 fileiras) */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {moduleMetas.map((m, i) => (
                <ModuleCard
                  key={m.slug}
                  meta={m}
                  index={i}
                  isCompleted={!!progress[m.slug]?.completed}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Indicadores Institucionais */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={s.label}
              >
                <Card variant="elevated" className="p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-atlas-orange/10 text-atlas-orange">
                    <s.icon size={24} aria-hidden="true" />
                  </div>
                  <p className="font-display text-5xl font-black text-gradient-atlas mb-2">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="font-semibold text-muted tracking-wide uppercase text-sm">{s.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Manifesto */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card variant="elevated" className="relative p-10 overflow-hidden" withGlow>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/brand/atlas-mark.png`}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 object-contain opacity-[0.04] dark:opacity-[0.06]"
              />
              <div className="relative z-10">
                <Badge variant="orange" className="mb-6">Nosso DNA</Badge>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">O Propósito AtlasGR</h2>
                <blockquote className="text-xl font-medium text-muted leading-relaxed border-l-4 border-atlas-orange pl-6 py-2 my-6">
                  &quot;Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação constante para a logística.&quot;
                </blockquote>
                <p className="text-sm text-muted/80">
                  Uma cultura forjada na linha de frente, onde cada colaborador é fundamental para garantir que o fluxo logístico nacional nunca pare.
                </p>
              </div>
            </Card>

            <Card variant="elevated" className="p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">Nossos Valores Nucleares</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v) => (
                  <li key={v.label}>
                    <button
                      type="button"
                      className="w-full h-full flex items-start gap-4 rounded-2xl bg-surface-2/50 border border-border/50 px-4 py-4 text-left transition-all duration-300 hover:border-atlas-orange/30 hover:-translate-y-0.5 hover:shadow-md focus-visible-ring group"
                    >
                      <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border shadow-sm transition-colors duration-300", valueColorClasses[v.color])}>
                        <v.icon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="block font-semibold text-foreground">{v.label}</span>
                        <span className="block text-xs text-muted mt-1 leading-relaxed">{v.description}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Rodapé institucional */}
        <footer className="border-t border-border/50">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <Logo className="mb-4" />
                <p className="max-w-xs text-sm text-muted leading-relaxed mb-6">
                  Conectamos pessoas e tecnologia, gerando valor com segurança e inovação constante para a logística nacional.
                </p>
                <SocialLinks />
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Plataforma</h3>
                <nav aria-label="Links da plataforma">
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/trilha" className="text-muted hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">Missões &amp; Módulos</Link></li>
                    <li><Link href="/produtos" className="text-muted hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">Produtos</Link></li>
                    <li><Link href="/glossario" className="text-muted hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">Glossário</Link></li>
                    <li><Link href="/dashboard" className="text-muted hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">Cockpit</Link></li>
                    <li><Link href="/certificado" className="text-muted hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">Certificado</Link></li>
                  </ul>
                </nav>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Suporte &amp; Contato</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li><a href="mailto:comercial@atlasgr.com.br" className="hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">comercial@atlasgr.com.br</a></li>
                  <li><a href="https://api.whatsapp.com/send?phone=5516991839108" target="_blank" rel="noopener noreferrer" className="hover:text-atlas-orange transition-colors focus-visible-ring rounded-sm">WhatsApp: (16) 99183-9108</a></li>
                  <li><ContactAddress /></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
              <p className="text-xs text-muted">
                © {new Date().getFullYear()} ATLASGR. Todos os direitos reservados.
              </p>
              <Badge variant="muted" className="text-[10px]">Portal v0.1.0</Badge>
            </div>
          </div>
        </footer>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} returnTo={returnTo} />
    </div>
  );
}
