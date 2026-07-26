"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  Compass,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks, ContactAddress } from "@/components/brand/SocialLinks";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { InstitutionalVideo } from "@/components/media/InstitutionalVideo";
import { Button } from "@/components/ui/Button";
import { moduleMetas } from "@/content/modules";
import { useOnboardingStore } from "@/lib/store";

const pages = [
  { number: "01", label: "Boas-vindas" },
  { number: "02", label: "Central ATLAS" },
  { number: "03", label: "Nossa história" },
  { number: "04", label: "Sua trilha" },
];

const values = [
  { icon: Target, label: "Perseverança" },
  { icon: Sparkles, label: "Transparência" },
  { icon: Compass, label: "Simplicidade" },
  { icon: Building2, label: "Atitude de Dono" },
  { icon: Heart, label: "Inovação" },
];

const moduleIcons = [ShieldCheck, Compass, BookOpen, Sparkles, GraduationCap];

const commandCards = [
  {
    eyebrow: "Cultura e propósito",
    title: "Nossa identidade",
    description: "Conheça a história, os valores e a forma ATLASGR de conectar pessoas, tecnologia e segurança.",
    action: "Conhecer a ATLASGR",
    icon: Building2,
    page: 2,
  },
  {
    eyebrow: "Formação guiada",
    title: "Mapa de aprendizagem",
    description: "Visualize os 15 módulos na ordem certa e entenda como cada etapa prepara você para a operação.",
    action: "Explorar a trilha",
    icon: GraduationCap,
    page: 3,
  },
  {
    eyebrow: "Consulta rápida",
    title: "Base de conhecimento",
    description: "Acesse conceitos e termos essenciais do gerenciamento de risco e da logística.",
    action: "Abrir o glossário",
    icon: BookOpen,
    href: "/glossario",
  },
];

function getModuleCategory(number: number) {
  if (number <= 3) return "Fundamentos";
  if (number <= 7) return "Soluções ATLASGR";
  if (number <= 9) return "Mercado e clientes";
  if (number <= 14) return "Excelência operacional";
  return "Conclusão";
}

export default function HomePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const registration = useOnboardingStore((state) => state.registration);
  const onboardingCompleted = useOnboardingStore((state) => state.onboardingCompleted);
  const canContinue = Boolean(registration && onboardingCompleted);

  function handleStart() {
    if (canContinue) {
      router.push("/trilha");
      return;
    }

    setModalOpen(true);
  }

  function handleModuleOpen(slug: string) {
    if (canContinue) {
      router.push(`/trilha/${slug}`);
      return;
    }

    setModalOpen(true);
  }

  function goToPage(page: number) {
    setActivePage(Math.max(0, Math.min(page, pages.length - 1)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="relative">
        <div className="page-switcher-shell">
          <nav className="page-switcher" aria-label="Etapas da página inicial">
            {pages.map((page, index) => {
              const isActive = activePage === index;
              const isPast = activePage > index;

              return (
                <button
                  key={page.number}
                  type="button"
                  onClick={() => goToPage(index)}
                  className={`page-switcher-item ${isActive ? "is-active" : ""} ${isPast ? "is-past" : ""}`}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`${page.number} · ${page.label}`}
                >
                  <span className="page-switcher-number">
                    {isPast ? <CheckCircle2 size={15} aria-hidden="true" /> : page.number}
                  </span>
                  <span className="hidden sm:inline">{page.label}</span>
                </button>
              );
            })}
          </nav>

          <span className="page-count" aria-label={`Página ${activePage + 1} de ${pages.length}`}>
            {String(activePage + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {activePage === 0 && (
            <motion.section
              key="welcome"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="atlas-page atlas-hero-page"
            >
              <div className="atlas-orb atlas-orb-one" />
              <div className="atlas-orb atlas-orb-two" />

              <div className="atlas-container relative z-10 grid items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
                <div className="max-w-2xl">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="atlas-eyebrow"
                  >
                    <Sparkles size={15} aria-hidden="true" />
                    Portal de onboarding e treinamento
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 }}
                    className="mt-7 font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] text-foreground sm:text-5xl xl:text-7xl"
                  >
                    Comece sua jornada com
                    <span className="mt-2 flex items-center gap-3 text-gradient-atlas">
                      <Logo withWordmark={false} className="h-9 w-auto sm:h-12 xl:h-14" />
                      ATLASGR
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-7 max-w-xl text-base font-medium leading-8 text-muted sm:text-lg"
                  >
                    Uma experiência guiada para conhecer nossa cultura, nossos processos e as ferramentas que farão
                    parte da sua rotina.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.26 }}
                    className="mt-9 flex flex-wrap items-center gap-4"
                  >
                    <button type="button" onClick={() => goToPage(1)} className="atlas-primary-button">
                      Acessar a Central ATLAS
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
                      <ShieldCheck size={18} className="text-atlas-orange" aria-hidden="true" />
                      Conteúdo em quatro etapas
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.42 }}
                  className="atlas-video-shell"
                >
                  <div className="atlas-video-heading">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-atlas-orange">Boas-vindas</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Conheça a essência da ATLASGR</p>
                    </div>
                    <span className="atlas-live-dot">Institucional</span>
                  </div>

                  <InstitutionalVideo />
                </motion.div>
              </div>

              <div className="atlas-page-footer">
                <span className="text-sm font-medium text-muted">01 · Boas-vindas</span>
                <button type="button" onClick={() => goToPage(1)} className="atlas-round-button" aria-label="Ir para a Central ATLAS">
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </motion.section>
          )}

          {activePage === 1 && (
            <motion.section
              key="command"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="atlas-page atlas-command-page"
            >
              <div className="atlas-container py-12 lg:py-16">
                <div className="mx-auto max-w-3xl text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="atlas-eyebrow"
                  >
                    <Compass size={16} aria-hidden="true" />
                    Seu ponto de partida
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 }}
                    className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-[-0.045em] text-foreground sm:text-5xl"
                  >
                    Central de integração <span className="text-atlas-orange">ATLASGR</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg"
                  >
                    Escolha por onde começar. Cada rota foi organizada para transformar informação em prática,
                    confiança e autonomia.
                  </motion.p>
                </div>

                <div className="atlas-command-grid">
                  {commandCards.map((card, index) => (
                    <motion.button
                      key={card.title}
                      type="button"
                      onClick={() => (card.href ? router.push(card.href) : goToPage(card.page ?? 1))}
                      initial={{ opacity: 0, y: 24, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.16 + index * 0.1, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -8, scale: 1.015 }}
                      className="atlas-command-card group"
                    >
                      <span className="atlas-command-card-number">0{index + 1}</span>
                      <span className="atlas-command-card-icon">
                        <card.icon size={28} aria-hidden="true" />
                      </span>
                      <span className="atlas-command-card-eyebrow">{card.eyebrow}</span>
                      <span className="atlas-command-card-title">{card.title}</span>
                      <span className="atlas-command-card-description">{card.description}</span>
                      <span className="atlas-command-card-action">
                        {card.action}
                        <ArrowRight size={17} aria-hidden="true" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="atlas-page-footer">
                <button type="button" onClick={() => goToPage(0)} className="atlas-text-button">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Boas-vindas
                </button>

                <span className="text-sm font-medium text-muted">02 · Central ATLAS</span>
              </div>
            </motion.section>
          )}

          {activePage === 2 && (
            <motion.section
              key="history"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="atlas-page atlas-history-page"
            >
              <div className="atlas-container py-12 lg:py-16">
                <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="lg:sticky lg:top-28">
                    <span className="atlas-eyebrow">
                      <Clock3 size={15} aria-hidden="true" />
                      Nossa história
                    </span>

                    <h2 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-5xl xl:text-6xl">
                      Tudo começou em
                      <span className="block text-atlas-orange">2004.</span>
                    </h2>

                    <p className="mt-6 max-w-xl text-base font-medium leading-8 text-muted sm:text-lg">
                      Desde então, conectamos pessoas e tecnologia para gerar valor com segurança, simplicidade e
                      inovação. Essa história agora também passa por você.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      {values.map((value) => (
                        <span key={value.label} className="atlas-value-pill">
                          <value.icon size={16} aria-hidden="true" />
                          {value.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <article className="atlas-history-card sm:col-span-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="atlas-history-icon">
                          <Building2 size={22} aria-hidden="true" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Marco zero</span>
                      </div>

                      <p className="mt-10 font-display text-7xl font-extrabold tracking-[-0.07em] text-foreground sm:text-8xl">
                        2004
                      </p>
                      <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                        O início de uma trajetória construída sobre confiança, tecnologia e inteligência aplicada à
                        segurança.
                      </p>
                    </article>

                    {[
                      { value: "24h", label: "Central de monitoramento", icon: ShieldCheck },
                      { value: "5", label: "Áreas na diretoria", icon: Compass },
                    ].map((item) => (
                      <article key={item.label} className="atlas-history-card atlas-history-card-small">
                        <span className="atlas-history-icon">
                          <item.icon size={21} aria-hidden="true" />
                        </span>
                        <p className="mt-8 font-display text-5xl font-extrabold tracking-[-0.05em] text-foreground">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-muted">{item.label}</p>
                      </article>
                    ))}

                    <article className="atlas-purpose-card sm:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-atlas-orange">Nosso propósito</p>
                      <blockquote className="mt-4 font-display text-2xl font-bold leading-snug tracking-[-0.025em] text-foreground sm:text-3xl">
                        “Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação.”
                      </blockquote>
                    </article>
                  </div>
                </div>
              </div>

              <div className="atlas-page-footer">
                <button type="button" onClick={() => goToPage(1)} className="atlas-text-button">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Central ATLAS
                </button>

                <button type="button" onClick={() => goToPage(3)} className="atlas-primary-button">
                  Ver minha trilha
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.section>
          )}

          {activePage === 3 && (
            <motion.section
              key="trail"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="atlas-page atlas-trail-page"
            >
              <div className="atlas-container py-12 lg:py-16">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <span className="atlas-eyebrow">
                      <GraduationCap size={16} aria-hidden="true" />
                      Sua jornada de aprendizagem
                    </span>

                    <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                      15 módulos para você chegar preparado.
                    </h2>

                    <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg">
                      Uma trilha clara, visual e progressiva. Comece pelo primeiro módulo e avance no seu ritmo.
                    </p>
                  </div>

                  <div className="atlas-start-panel">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.17em] text-muted">
                        {canContinue ? "Trilha disponível" : "Primeiro acesso"}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        {canContinue ? "Continue de onde parou" : "Identifique-se para iniciar"}
                      </p>
                    </div>

                    <Button size="lg" onClick={handleStart}>
                      {canContinue ? "Continuar minha trilha" : "Iniciar onboarding"}
                    </Button>
                  </div>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {moduleMetas.map((module, index) => {
                    const ModuleIcon = moduleIcons[index % moduleIcons.length];

                    return (
                      <motion.button
                        key={module.slug}
                        type="button"
                        onClick={() => handleModuleOpen(module.slug)}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(index * 0.035, 0.35) }}
                        whileHover={{ y: -5 }}
                        className="atlas-module-card group"
                      >
                        <span className="atlas-module-glow" />

                        <div className="relative z-10 flex h-full flex-col">
                          <div className="flex items-start justify-between gap-4">
                            <span className="atlas-module-icon">
                              <ModuleIcon size={22} aria-hidden="true" />
                            </span>

                            <div className="flex items-center gap-2.5">
                              <Logo withWordmark={false} className="opacity-70" />
                              <span className="atlas-module-number">{String(index + 1).padStart(2, "0")}</span>
                            </div>
                          </div>

                          <div className="mt-8">
                            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-atlas-orange">
                              {getModuleCategory(module.number)} · Módulo {String(module.number).padStart(2, "0")}
                            </p>
                            <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-[-0.02em] text-foreground">
                              {module.title}
                            </h3>
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{module.shortDescription}</p>
                          </div>

                          <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted">
                              <Clock3 size={14} aria-hidden="true" />
                              {module.durationMinutes} min
                            </span>

                            <span className="atlas-card-action">
                              {canContinue ? "Abrir" : "Ver prévia"}
                              <ArrowRight size={15} aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="atlas-trail-bottom">
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">Pronto para começar?</p>
                    <p className="mt-1 text-sm text-muted">Sua jornada ATLASGR começa pelo primeiro passo.</p>
                  </div>

                  <Button size="lg" onClick={handleStart}>
                    {canContinue ? "Continuar trilha" : "Iniciar onboarding"}
                  </Button>
                </div>

                <div className="mt-12 border-t border-border pt-8 text-center">
                  <SocialLinks className="justify-center text-muted" />
                  <ContactAddress className="mt-4 text-muted" />
                </div>
              </div>

              <div className="atlas-page-footer">
                <button type="button" onClick={() => goToPage(2)} className="atlas-text-button">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Nossa história
                </button>

                <span className="text-sm font-medium text-muted">04 · Sua trilha</span>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
