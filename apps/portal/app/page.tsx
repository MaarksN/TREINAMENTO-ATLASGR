"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Compass,
  Heart,
  Sparkles,
  Target,
  Award,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Radar,
  Layers,
  PlayCircle,
  Video,
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

const HOME_PAGES = [
  { id: "hero", title: "Boas-Vindas" },
  { id: "video", title: "Vídeo Institucional" },
  { id: "modulos", title: "Estrutura Operacional" },
  { id: "indicadores", title: "Indicadores Institucionais" },
  { id: "proposito", title: "O Propósito AtlasGR" },
  { id: "valores", title: "Valores Nucleares" },
  { id: "footer", title: "Rodapé & Contato" },
] as const;

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const showToast = useToastStore((s) => s.show);

  const registration = useOnboardingStore((state) => state.registration);
  const onboardingCompleted = useOnboardingStore((state) => state.onboardingCompleted);
  const progress = useOnboardingStore((state) => state.progress);

  const canContinue = Boolean(registration && onboardingCompleted);

  const totalPages = HOME_PAGES.length;
  const currentPage = HOME_PAGES[activePageIndex];

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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setActivePageIndex((prev) => Math.min(totalPages - 1, prev + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setActivePageIndex((prev) => Math.max(0, prev - 1));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalPages]);

  function handleStart() {
    if (canContinue) {
      router.push("/trilha");
      return;
    }
    setModalOpen(true);
  }

  function goNextPage() {
    setActivePageIndex((prev) => Math.min(totalPages - 1, prev + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goPrevPage() {
    setActivePageIndex((prev) => Math.max(0, prev - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-atlas-orange selection:text-white">
      <SiteHeader />

      {/* Top Page Progress Indicator */}
      <div className="border-b border-border/50 bg-background/90 backdrop-blur-md sticky top-16 z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-wider text-atlas-orange">
            Item {activePageIndex + 1} de {totalPages}: {currentPage.title}
          </span>
          <div className="flex flex-1 items-center gap-1.5 max-w-md">
            {HOME_PAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePageIndex(i)}
                className={cn(
                  "h-2 flex-1 rounded-full transition-all duration-300 focus-visible-ring",
                  i === activePageIndex
                    ? "bg-atlas-orange shadow-[0_0_8px_rgba(255,86,24,0.6)]"
                    : i < activePageIndex
                    ? "bg-atlas-orange/40"
                    : "bg-border"
                )}
                title={`Ir para Página ${i + 1}: ${p.title}`}
                aria-label={`Ir para item ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-muted">
            {Math.round(((activePageIndex + 1) / totalPages) * 100)}%
          </span>
        </div>
      </div>

      {/* Main Single Item Container */}
      <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-8 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center items-center w-full min-h-[calc(100vh-220px)]"
          >
            {currentPage.id === "hero" && (
              <section className="w-full text-center py-10">
                <div className="flex justify-center">
                  <Badge variant="premium" className="mb-8 px-4 py-1.5 shadow-xl shadow-atlas-orange/10 gap-2">
                    <Award size={14} /> Portal Enterprise AtlasGR
                  </Badge>
                </div>

                <h1 className="flex flex-wrap items-center justify-center gap-4 font-display text-5xl font-black leading-tight tracking-tight text-foreground sm:text-7xl mb-6">
                  Bem-vindo à
                  <Logo withWordmark={false} className="h-10 w-auto sm:h-14 mt-1" />
                  <span className="text-gradient-atlas bg-clip-text">ATLASGR</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg font-medium text-muted sm:text-xl leading-relaxed">
                  Conectamos pessoas e tecnologia, gerando valor com <strong className="text-foreground">segurança</strong> e <strong className="text-foreground">inovação</strong>.
                  Sua evolução na logística inteligente começa agora.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="xl" onClick={handleStart} rightIcon={<Rocket className="w-5 h-5" />}>
                    {canContinue ? "Retomar minha missão" : "Iniciar Treinamento Corporativo"}
                  </Button>
                  <Button size="xl" variant="outline" onClick={goNextPage} rightIcon={<PlayCircle className="w-5 h-5" />}>
                    Ver Vídeo &amp; Módulos
                  </Button>
                </div>
              </section>
            )}

            {currentPage.id === "video" && (
              <section className="w-full max-w-4xl py-6">
                <SectionHeading
                  kicker="Apresentação Institucional"
                  title="Conheça a AtlasGR"
                  description="Assista ao vídeo e entenda como conectamos segurança e inteligência na logística."
                  className="mb-8"
                />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40 ring-1 ring-border/50">
                  <InstitutionalVideo />
                </div>
              </section>
            )}

            {currentPage.id === "modulos" && (
              <section className="w-full max-w-2xl py-6">
                <SectionHeading
                  kicker="Módulos de Formação"
                  title="Estrutura Operacional"
                  description="Domine os pilares da AtlasGR. Navegue item por item nos 15 módulos corporativos."
                  className="mb-6"
                />

                <div className="flex items-center justify-between gap-4 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveModuleIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeModuleIndex === 0}
                    leftIcon={<ChevronLeft size={16} />}
                  >
                    Anterior
                  </Button>

                  <Badge variant="orange" className="px-3 py-1 font-mono text-xs">
                    Módulo {activeModuleIndex + 1} de {moduleMetas.length}
                  </Badge>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveModuleIndex((prev) => Math.min(moduleMetas.length - 1, prev + 1))}
                    disabled={activeModuleIndex === moduleMetas.length - 1}
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Próximo
                  </Button>
                </div>

                <div className="relative min-h-[340px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModuleIndex}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ModuleCard
                        meta={moduleMetas[activeModuleIndex]}
                        index={activeModuleIndex}
                        isCompleted={!!progress[moduleMetas[activeModuleIndex].slug]?.completed}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex items-center justify-center gap-1.5 flex-wrap">
                  {moduleMetas.map((m, idx) => (
                    <button
                      key={m.slug}
                      onClick={() => setActiveModuleIndex(idx)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 focus-visible-ring",
                        activeModuleIndex === idx ? "w-6 bg-atlas-orange" : "w-2 bg-border hover:bg-atlas-orange/50"
                      )}
                      title={`Ir para Módulo ${idx + 1}`}
                      aria-label={`Módulo ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" size="md" onClick={() => router.push("/trilha")} rightIcon={<ChevronRight size={16} />}>
                    Ver todos os {moduleMetas.length} módulos na Trilha Completa
                  </Button>
                </div>
              </section>
            )}

            {currentPage.id === "indicadores" && (
              <section className="w-full max-w-4xl py-6">
                <SectionHeading
                  kicker="Números &amp; Excelência"
                  title="Indicadores Corporativos"
                  description="Resultados consolidados em mais de duas décadas de liderança operacional."
                  className="mb-10"
                />
                <div className="grid gap-6 sm:grid-cols-3">
                  {stats.map((s, i) => (
                    <Card key={s.label} variant="elevated" className="p-8 text-center h-full flex flex-col items-center justify-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-atlas-orange/10 text-atlas-orange">
                        <s.icon size={24} aria-hidden="true" />
                      </div>
                      <p className="font-display text-5xl font-black text-gradient-atlas mb-2">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </p>
                      <p className="font-semibold text-muted tracking-wide uppercase text-sm">{s.label}</p>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {currentPage.id === "proposito" && (
              <section className="w-full max-w-3xl py-6">
                <Card variant="elevated" className="relative p-10 overflow-hidden" withGlow>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE_PATH}/brand/atlas-mark.png`}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 object-contain opacity-[0.04] dark:opacity-[0.06]"
                  />
                  <div className="relative z-10 text-center sm:text-left">
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
              </section>
            )}

            {currentPage.id === "valores" && (
              <section className="w-full max-w-4xl py-6">
                <SectionHeading
                  kicker="Cultura Corporativa"
                  title="Nossos Valores Nucleares"
                  description="Os 5 princípios inegociáveis que norteiam cada decisão em nossa operação."
                  className="mb-8"
                />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {values.map((v) => (
                    <li key={v.label}>
                      <div className="h-full flex flex-col items-start gap-3 rounded-2xl bg-surface border border-border/60 p-5 transition-all duration-300 hover:border-atlas-orange/40 hover:shadow-md">
                        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border shadow-sm", valueColorClasses[v.color])}>
                          <v.icon size={20} aria-hidden="true" />
                        </div>
                        <div>
                          <span className="block font-semibold text-foreground text-lg">{v.label}</span>
                          <span className="block text-xs text-muted mt-1 leading-relaxed">{v.description}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {currentPage.id === "footer" && (
              <section className="w-full py-6">
                <div className="rounded-3xl border border-border/50 bg-surface-2/40 p-8 sm:p-12">
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
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Page Navigation Controls */}
      <div className="sticky bottom-0 z-40 border-t border-border/50 bg-background/95 backdrop-blur-xl py-3 shadow-2xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <Button
            variant="outline"
            size="md"
            onClick={goPrevPage}
            disabled={activePageIndex === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Página Anterior
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted hidden sm:inline">
              Navegação Geral:
            </span>
            <Badge variant="orange" className="px-3 py-1 font-mono text-xs">
              Página {activePageIndex + 1} de {totalPages}
            </Badge>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={goNextPage}
            disabled={activePageIndex === totalPages - 1}
            rightIcon={<ChevronRight size={16} />}
          >
            Próxima Página
          </Button>
        </div>
      </div>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} returnTo={returnTo} />
    </div>
  );
}
