"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Compass,
  Database,
  GraduationCap,
  Heart,
  Headphones,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
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
  { number: "03", label: "Trilha de aprendizagem" },
  { number: "04", label: "Academia ATLAS IA" },
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
    eyebrow: "Formação guiada",
    title: "Trilha de aprendizagem",
    description: "Cultura, propósito, base de conhecimento e os 15 módulos reunidos em uma jornada clara e progressiva.",
    action: "Explorar a trilha",
    icon: GraduationCap,
    page: 2,
  },
  {
    eyebrow: "IA aplicada ao trabalho",
    title: "Academia ATLAS IA",
    description: "Descubra agentes e ferramentas de IA pensados para acelerar a rotina de cada área e função.",
    action: "Conhecer a academia",
    icon: Bot,
    page: 3,
  },
];

const academyAreas = [
  {
    area: "Central e Operações",
    tool: "Copiloto de Ocorrências",
    description: "Organiza alertas, sugere checklists e ajuda a transformar registros em próximos passos claros.",
    icon: Headphones,
    capabilities: ["Resumo de ocorrências", "Checklist orientado", "Passagem de turno"],
  },
  {
    area: "Comercial",
    tool: "Assistente de Propostas",
    description: "Apoia o diagnóstico do cliente e estrutura propostas com linguagem objetiva e aderente ao contexto.",
    icon: BriefcaseBusiness,
    capabilities: ["Roteiro de descoberta", "Síntese de necessidades", "Primeira versão da proposta"],
  },
  {
    area: "Implantação",
    tool: "Guia de Implantação",
    description: "Converte escopos em planos de ação, marcos, riscos e listas de validação para cada implantação.",
    icon: Rocket,
    capabilities: ["Plano por etapas", "Mapa de riscos", "Checklist de ativação"],
  },
  {
    area: "Tecnologia e Dados",
    tool: "Assistente de Integrações",
    description: "Ajuda a documentar requisitos, investigar dados e explicar integrações com mais velocidade.",
    icon: Database,
    capabilities: ["Leitura de requisitos", "Documentação assistida", "Análise inicial de dados"],
  },
  {
    area: "Pessoas e Liderança",
    tool: "Tutor de Desenvolvimento",
    description: "Cria rotas de estudo, planos de evolução e materiais adaptados ao momento de cada pessoa.",
    icon: Users,
    capabilities: ["Plano de aprendizagem", "Feedback estruturado", "Materiais por função"],
  },
  {
    area: "Qualidade e Processos",
    tool: "Analista de Processos",
    description: "Mapeia fluxos, identifica gargalos e transforma conhecimento operacional em padrões reutilizáveis.",
    icon: Wrench,
    capabilities: ["Mapeamento de fluxo", "Análise de gargalos", "Padronização de rotinas"],
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
                    <span className="mt-3 flex items-center">
                      <Logo className="atlas-title-logo" />
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
                <button type="button" className="atlas-text-button is-disabled" disabled aria-label="Não há etapa anterior">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Voltar
                </button>
                <span className="text-sm font-medium text-muted">01 · Boas-vindas</span>
                <button type="button" onClick={() => goToPage(1)} className="atlas-text-button">
                  Central ATLAS
                  <ArrowRight size={18} aria-hidden="true" />
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
                    <span>Central de integração</span>
                    <Logo className="atlas-central-logo" />
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
                      onClick={() => goToPage(card.page)}
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

                <button type="button" onClick={() => goToPage(2)} className="atlas-text-button">
                  Trilha
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.section>
          )}

          {activePage === 2 && (
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
                      Trilha de aprendizagem
                    </h2>

                    <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg">
                      Primeiro você entende quem somos e domina a linguagem da operação. Depois, avança pelos 15
                      módulos na ordem certa.
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

                <div className="atlas-trail-foundations">
                  <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="atlas-foundation-card atlas-foundation-identity"
                  >
                    <div className="atlas-foundation-heading">
                      <span className="atlas-history-icon">
                        <Building2 size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <p>Cultura e propósito</p>
                        <h3>Nossa identidade</h3>
                      </div>
                      <span className="atlas-foundation-order">01</span>
                    </div>

                    <p className="atlas-foundation-year">2004</p>
                    <p className="atlas-foundation-copy">
                      O início de uma trajetória que conecta pessoas e tecnologia para gerar valor com segurança,
                      simplicidade e inovação.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {values.map((value) => (
                        <span key={value.label} className="atlas-value-pill">
                          <value.icon size={15} aria-hidden="true" />
                          {value.label}
                        </span>
                      ))}
                    </div>

                    <blockquote className="atlas-foundation-quote">
                      “Nós conectamos pessoas e tecnologia gerando valor com segurança e inovação.”
                    </blockquote>
                  </motion.article>

                  <motion.button
                    type="button"
                    onClick={() => router.push("/glossario")}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    whileHover={{ y: -6 }}
                    className="atlas-foundation-card atlas-foundation-knowledge group"
                  >
                    <div className="atlas-foundation-heading">
                      <span className="atlas-history-icon">
                        <BookOpen size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <p>Consulta rápida</p>
                        <h3>Base de conhecimento</h3>
                      </div>
                      <span className="atlas-foundation-order">02</span>
                    </div>

                    <p className="atlas-foundation-copy">
                      Consulte siglas, termos técnicos e conceitos essenciais sempre que precisar, sem interromper a
                      aprendizagem.
                    </p>

                    <div className="atlas-knowledge-tags">
                      {["PGR", "SLA", "SM", "Checklist", "Torre de Controle", "LGPD"].map((term, index) => (
                        <motion.span
                          key={term}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.32 + index * 0.07 }}
                        >
                          {term}
                        </motion.span>
                      ))}
                    </div>

                    <div className="atlas-knowledge-groups">
                      {[
                        { number: "01", label: "Operação", text: "Rotinas e códigos" },
                        { number: "02", label: "Risco", text: "Conceitos e regras" },
                        { number: "03", label: "Tecnologia", text: "Sistemas e siglas" },
                      ].map((group, index) => (
                        <motion.span
                          key={group.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.08 }}
                        >
                          <small>{group.number}</small>
                          <strong>{group.label}</strong>
                          <em>{group.text}</em>
                        </motion.span>
                      ))}
                    </div>

                    <span className="atlas-command-card-action">
                      Abrir glossário
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </motion.button>
                </div>

                <div className="atlas-section-divider">
                  <div>
                    <p>Formação principal</p>
                    <h3>15 módulos para você chegar preparado.</h3>
                  </div>
                  <span>Avance no seu ritmo</span>
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
                <button type="button" onClick={() => goToPage(1)} className="atlas-text-button">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Central ATLAS
                </button>

                <span className="text-sm font-medium text-muted">03 · Trilha de aprendizagem</span>

                <button type="button" onClick={() => goToPage(3)} className="atlas-text-button">
                  Academia IA
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.section>
          )}

          {activePage === 3 && (
            <motion.section
              key="academy"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="atlas-page atlas-academy-page"
            >
              <div className="atlas-container py-12 lg:py-16">
                <div className="atlas-academy-hero">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                  >
                    <span className="atlas-eyebrow">
                      <Bot size={16} aria-hidden="true" />
                      Inteligência aplicada por função
                    </span>

                    <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                      Academia <span className="text-atlas-orange">ATLAS IA</span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-muted sm:text-lg">
                      Uma coleção em evolução de agentes, ferramentas e práticas para ajudar cada pessoa a aprender
                      mais rápido e produzir melhor no dia a dia.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.14 }}
                    className="atlas-academy-signal"
                  >
                    <span>
                      <Sparkles size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <p>Biblioteca viva</p>
                      <strong>IA por área e cargo</strong>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } } }}
                  className="atlas-academy-grid"
                >
                  {academyAreas.map((item, index) => (
                    <motion.article
                      key={item.tool}
                      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -7 }}
                      className="atlas-academy-card"
                    >
                      <div className="atlas-academy-card-top">
                        <span className="atlas-academy-icon">
                          <item.icon size={23} aria-hidden="true" />
                        </span>
                        <span className="atlas-academy-number">{String(index + 1).padStart(2, "0")}</span>
                      </div>

                      <p className="atlas-academy-area">{item.area}</p>
                      <h3>{item.tool}</h3>
                      <p className="atlas-academy-description">{item.description}</p>

                      <div className="atlas-academy-capabilities">
                        {item.capabilities.map((capability, capabilityIndex) => (
                          <motion.span
                            key={capability}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 + index * 0.07 + capabilityIndex * 0.06 }}
                          >
                            <CheckCircle2 size={14} aria-hidden="true" />
                            {capability}
                          </motion.span>
                        ))}
                      </div>

                      <span className="atlas-academy-status">
                        <span />
                        Em preparação
                      </span>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="atlas-academy-roadmap"
                >
                  <span>
                    <Target size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <p>Próximo passo da academia</p>
                    <h3>Agentes específicos por cargo, com orientação e exemplos da própria ATLASGR.</h3>
                  </div>
                </motion.aside>

                <div className="mt-12 border-t border-border pt-8 text-center">
                  <SocialLinks className="justify-center text-muted" />
                  <ContactAddress className="mt-4 text-muted" />
                </div>
              </div>

              <div className="atlas-page-footer">
                <button type="button" onClick={() => goToPage(2)} className="atlas-text-button">
                  <ArrowLeft size={18} aria-hidden="true" />
                  Trilha
                </button>

                <span className="text-sm font-medium text-muted">04 · Academia ATLAS IA</span>

                <button type="button" onClick={handleStart} className="atlas-text-button">
                  Começar
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
