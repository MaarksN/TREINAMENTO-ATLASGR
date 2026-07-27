"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Compass,
  Database,
  Flame,
  Gamepad2,
  GraduationCap,
  Headphones,
  Layers3,
  LockKeyhole,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { AgentBuilder } from "@/components/academy/AgentBuilder";
import { Logo } from "@/components/brand/Logo";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { moduleMetas, readyModuleSlugs } from "@/content/modules";
import { BADGES, levelProgress } from "@/lib/gamification";
import { moduleIcons } from "@/lib/moduleIcons";
import { useOnboardingStore } from "@/lib/store";

const indexes = [
  {
    number: "01",
    eyebrow: "Formação e cultura",
    title: "Trilha de Aprendizado ATLASGR",
    shortTitle: "Trilha de Aprendizado",
    description: "Cultura, base de conhecimento e 15 módulos em uma jornada progressiva.",
    icon: GraduationCap,
  },
  {
    number: "02",
    eyebrow: "Inteligência aplicada",
    title: "Academia de Gerenciamento de Risco ATLASGR",
    shortTitle: "Academia de GR + IA",
    description: "Ferramentas, motores e agentes de IA organizados por área e função.",
    icon: Bot,
  },
];

const values = ["Perseverança", "Transparência", "Simplicidade", "Atitude de Dono", "Inovação"];

const academyTools = [
  {
    id: "sentinela-ocorrencias",
    area: "Central e Operações",
    title: "Sentinela de Ocorrências",
    description: "Estrutura alertas, separa fatos de hipóteses e prepara o checklist de resposta do operador.",
    icon: Headphones,
    features: ["Resumo da ocorrência", "Pendências críticas", "Passagem de turno"],
    prompt: "Analise esta ocorrência, destaque dados ausentes e monte um checklist para validação humana.",
  },
  {
    id: "guardiao-pgr",
    area: "Gerenciamento de Risco",
    title: "Guardião do PGR",
    description: "Compara a operação com regras, limites e exceções e mostra onde existe exposição.",
    icon: ShieldCheck,
    features: ["Leitura orientada do PGR", "Mapa de exposição", "Plano de mitigação"],
    prompt: "Compare este cenário operacional com as regras do PGR e identifique riscos e validações.",
  },
  {
    id: "copiloto-comercial",
    area: "Comercial",
    title: "Copiloto Consultivo",
    description: "Transforma informações de descoberta em diagnóstico, perguntas e estrutura de proposta.",
    icon: BriefcaseBusiness,
    features: ["Diagnóstico do cliente", "Roteiro de descoberta", "Estrutura de proposta"],
    prompt: "Organize estas necessidades do prospect e prepare perguntas para a próxima reunião.",
  },
  {
    id: "navegador-implantacao",
    area: "Implantação",
    title: "Navegador de Implantação",
    description: "Converte escopo em marcos, responsáveis, riscos e critérios claros de aceite.",
    icon: Rocket,
    features: ["Plano por marcos", "Matriz de responsáveis", "Checklist de ativação"],
    prompt: "Transforme este escopo em um plano de implantação com marcos, responsáveis e riscos.",
  },
  {
    id: "arquiteto-dados",
    area: "Tecnologia e Dados",
    title: "Arquiteto de Integrações",
    description: "Organiza requisitos, fluxo de dados, exceções e testes para integrações mais seguras.",
    icon: Database,
    features: ["Mapa de integração", "Requisitos técnicos", "Plano de testes"],
    prompt: "Mapeie esta integração, liste os campos necessários, exceções e testes prioritários.",
  },
  {
    id: "tutor-desenvolvimento",
    area: "Pessoas e Liderança",
    title: "Tutor de Desenvolvimento",
    description: "Cria planos de aprendizagem e práticas orientadas de acordo com cargo e momento.",
    icon: Users,
    features: ["Plano por competência", "Práticas guiadas", "Critérios de evolução"],
    prompt: "Crie um plano de desenvolvimento para este cargo com prática, prazo e evidências.",
  },
];

const engines = [
  {
    title: "Motor de Contexto",
    description: "Interpreta área, cargo, objetivo e dados ausentes antes de sugerir qualquer saída.",
    icon: BrainCircuit,
  },
  {
    title: "Motor de Guardrails",
    description: "Aplica limites de segurança, LGPD, rastreabilidade e validação humana.",
    icon: LockKeyhole,
  },
  {
    title: "Motor de Aprendizagem",
    description: "Transforma cada uso em orientação prática, checklist e próximo passo.",
    icon: Layers3,
  },
];

function getModuleCategory(number: number) {
  if (number <= 3) return "Fundamentos";
  if (number <= 7) return "Soluções ATLASGR";
  if (number <= 9) return "Mercado e clientes";
  if (number <= 14) return "Excelência operacional";
  return "Conclusão";
}

const moduleCategories = ["Todos", "Fundamentos", "Soluções ATLASGR", "Mercado e clientes", "Excelência operacional", "Conclusão"];

export default function HomePage() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [moduleSearch, setModuleSearch] = useState("");
  const [moduleCategory, setModuleCategory] = useState("Todos");
  const [identityOpen, setIdentityOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState(academyTools[0].id);

  const registration = useOnboardingStore((state) => state.registration);
  const onboardingCompleted = useOnboardingStore((state) => state.onboardingCompleted);
  const progress = useOnboardingStore((state) => state.progress);
  const xp = useOnboardingStore((state) => state.xp);
  const badges = useOnboardingStore((state) => state.badges);
  const streakDays = useOnboardingStore((state) => state.streakDays);
  const exploredTools = useOnboardingStore((state) => state.exploredAcademyTools);
  const createdAgents = useOnboardingStore((state) => state.createdAgents);
  const exploreAcademyTool = useOnboardingStore((state) => state.exploreAcademyTool);

  const canContinue = Boolean(registration && onboardingCompleted);
  const completedModules = readyModuleSlugs.filter((slug) => progress[slug]?.passed).length;
  const trailProgress = Math.round((completedModules / readyModuleSlugs.length) * 100);
  const level = levelProgress(xp);
  const selectedTool = academyTools.find((tool) => tool.id === selectedToolId) ?? academyTools[0];

  const filteredModules = useMemo(() => {
    const term = moduleSearch.trim().toLocaleLowerCase("pt-BR");
    return moduleMetas.filter((module) => {
      const categoryMatches = moduleCategory === "Todos" || getModuleCategory(module.number) === moduleCategory;
      const searchMatches =
        !term ||
        module.title.toLocaleLowerCase("pt-BR").includes(term) ||
        module.shortDescription.toLocaleLowerCase("pt-BR").includes(term);
      return categoryMatches && searchMatches;
    });
  }, [moduleCategory, moduleSearch]);

  const missions = [
    {
      label: "Concluir o primeiro módulo",
      reward: "+150 XP",
      done: Boolean(progress["01-bem-vindo-atlasgr"]?.passed),
    },
    {
      label: "Explorar três ferramentas de IA",
      reward: "+60 XP",
      done: exploredTools.length >= 3,
    },
    {
      label: "Criar o primeiro agente",
      reward: "+80 XP",
      done: createdAgents.length > 0,
    },
  ];

  function changeIndex(index: number) {
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleStart() {
    if (canContinue) {
      router.push("/trilha");
      return;
    }
    setModalOpen(true);
  }

  function openModule(slug: string) {
    if (canContinue) {
      router.push(`/trilha/${slug}`);
      return;
    }
    setModalOpen(true);
  }

  function selectTool(id: string) {
    setSelectedToolId(id);
    exploreAcademyTool(id);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="portal-dynamic-home">
        <nav className="portal-index-switcher" aria-label="Índices principais do portal">
          <div className="atlas-container portal-index-switcher-inner">
            {indexes.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => changeIndex(index)}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="portal-index-number">{item.number}</span>
                  <Icon size={18} aria-hidden="true" />
                  <span>
                    <small>{item.eyebrow}</small>
                    <strong>{item.shortTitle}</strong>
                  </span>
                  <ArrowRight size={17} className="portal-index-arrow" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </nav>

        <section className="atlas-container portal-gamebar" aria-label="Sua progressão no portal">
          <div className="portal-level-card">
            <span className="portal-level-icon">
              <Trophy size={21} aria-hidden="true" />
            </span>
            <div>
              <p>Nível {level.current.level}</p>
              <strong>{level.current.title}</strong>
            </div>
            <div className="portal-level-progress">
              <span style={{ width: `${level.pct}%` }} />
            </div>
            <small>{xp} XP</small>
          </div>

          <div className="portal-game-stat">
            <Flame size={18} aria-hidden="true" />
            <span>
              <strong>{streakDays.length}</strong>
              dias ativos
            </span>
          </div>
          <div className="portal-game-stat">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>
              <strong>{badges.length}</strong>
              conquistas
            </span>
          </div>
          <div className="portal-game-stat">
            <Gamepad2 size={18} aria-hidden="true" />
            <span>
              <strong>{missions.filter((mission) => mission.done).length}/3</strong>
              missões
            </span>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {activeIndex === 0 ? (
            <motion.section
              key="learning-index"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="portal-index-page"
            >
              <div className="atlas-container">
                <div className="portal-index-hero portal-trail-hero">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="atlas-eyebrow"
                    >
                      <GraduationCap size={16} aria-hidden="true" />
                      Índice 01 · Formação ATLASGR
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 }}
                    >
                      Trilha de Aprendizado
                      <Logo className="portal-hero-logo" />
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 }}
                    >
                      Uma jornada dinâmica que conecta cultura, linguagem operacional, prática e certificação.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      className="portal-hero-actions"
                    >
                      <button type="button" onClick={handleStart} className="atlas-primary-button">
                        {canContinue ? "Continuar minha jornada" : "Iniciar minha jornada"}
                        <ArrowRight size={18} aria-hidden="true" />
                      </button>
                      <span>
                        <CheckCircle2 size={18} aria-hidden="true" />
                        {completedModules} de {readyModuleSlugs.length} módulos concluídos
                      </span>
                    </motion.div>
                  </div>

                  <motion.aside
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.12 }}
                    className="portal-progress-orbit"
                  >
                    <div className="portal-progress-ring" style={{ "--progress": `${trailProgress * 3.6}deg` } as React.CSSProperties}>
                      <span>
                        <strong>{trailProgress}%</strong>
                        da trilha
                      </span>
                    </div>
                    <div>
                      <p>Próxima conquista</p>
                      <strong>{completedModules === 0 ? "Operador de Base" : "Especialista Homologado"}</strong>
                      <small>{completedModules === 0 ? "Conclua o primeiro módulo" : "Complete a trilha e a prova final"}</small>
                    </div>
                  </motion.aside>
                </div>

                <div className="portal-foundation-grid">
                  <motion.button
                    type="button"
                    onClick={() => setIdentityOpen((current) => !current)}
                    whileHover={{ y: -5 }}
                    className={`portal-foundation-card ${identityOpen ? "is-open" : ""}`}
                    aria-expanded={identityOpen}
                  >
                    <span className="portal-foundation-icon">
                      <Compass size={23} aria-hidden="true" />
                    </span>
                    <p>Cultura e propósito</p>
                    <h2>Nossa identidade</h2>
                    <span>Desde 2004, pessoas e tecnologia conectadas para gerar valor com segurança e inovação.</span>
                    <div className="portal-values">
                      {values.map((value, index) => (
                        <motion.em
                          key={value}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: identityOpen ? 1 : 0.58, x: 0 }}
                          transition={{ delay: index * 0.06 }}
                        >
                          {value}
                        </motion.em>
                      ))}
                    </div>
                    <strong className="portal-foundation-action">
                      {identityOpen ? "Recolher identidade" : "Explorar identidade"}
                      <ArrowRight size={16} aria-hidden="true" />
                    </strong>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => router.push("/glossario")}
                    whileHover={{ y: -5 }}
                    className="portal-foundation-card"
                  >
                    <span className="portal-foundation-icon">
                      <BookOpen size={23} aria-hidden="true" />
                    </span>
                    <p>Consulta durante a jornada</p>
                    <h2>Base de conhecimento</h2>
                    <span>Pesquise siglas, termos técnicos e conceitos sem perder o ponto da aprendizagem.</span>
                    <div className="portal-terms-cloud">
                      {["PGR", "SLA", "SM", "RCF-DC", "Connect", "LGPD"].map((term) => (
                        <em key={term}>{term}</em>
                      ))}
                    </div>
                    <strong className="portal-foundation-action">
                      Abrir glossário
                      <ArrowRight size={16} aria-hidden="true" />
                    </strong>
                  </motion.button>
                </div>

                <section className="portal-module-index">
                  <div className="portal-section-heading">
                    <div>
                      <p>Mapa dinâmico da formação</p>
                      <h2>Módulos de aprendizado</h2>
                    </div>
                    <span>{filteredModules.length} módulos visíveis</span>
                  </div>

                  <div className="portal-module-controls">
                    <label>
                      <Search size={17} aria-hidden="true" />
                      <input
                        value={moduleSearch}
                        onChange={(event) => setModuleSearch(event.target.value)}
                        placeholder="Buscar módulo ou assunto..."
                      />
                    </label>
                    <div role="group" aria-label="Filtrar módulos por categoria">
                      {moduleCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setModuleCategory(category)}
                          className={moduleCategory === category ? "is-active" : ""}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.div layout className="portal-module-grid">
                    <AnimatePresence mode="popLayout">
                      {filteredModules.map((module, index) => {
                        const ModuleIcon = moduleIcons[module.slug] ?? GraduationCap;
                        const completed = Boolean(progress[module.slug]?.passed);

                        return (
                          <motion.button
                            layout
                            key={module.slug}
                            type="button"
                            onClick={() => openModule(module.slug)}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: Math.min(index * 0.035, 0.28) }}
                            whileHover={{ y: -6 }}
                            className={`portal-module-card ${completed ? "is-complete" : ""}`}
                          >
                            <div className="portal-module-card-top">
                              <span>
                                <ModuleIcon size={22} aria-hidden="true" />
                              </span>
                              <strong>{String(module.number).padStart(2, "0")}</strong>
                            </div>
                            <p>{getModuleCategory(module.number)}</p>
                            <h3>{module.title}</h3>
                            <span>{module.shortDescription}</span>
                            <div className="portal-module-meta">
                              <em>
                                <Clock3 size={14} aria-hidden="true" />
                                {module.durationMinutes} min
                              </em>
                              <strong>
                                {completed ? "Concluído" : "Abrir módulo"}
                                {completed ? <CheckCircle2 size={15} aria-hidden="true" /> : <ArrowRight size={15} aria-hidden="true" />}
                              </strong>
                            </div>
                          </motion.button>
                        );
                      })}
                    </AnimatePresence>
                  </motion.div>
                </section>

                <section className="portal-missions-panel">
                  <div>
                    <p>Missões da jornada</p>
                    <h2>Aprenda, avance e desbloqueie conquistas</h2>
                  </div>
                  <div className="portal-mission-list">
                    {missions.map((mission, index) => (
                      <motion.article
                        key={mission.label}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className={mission.done ? "is-done" : ""}
                      >
                        <span>{mission.done ? <CheckCircle2 size={18} /> : index + 1}</span>
                        <p>{mission.label}</p>
                        <strong>{mission.reward}</strong>
                      </motion.article>
                    ))}
                  </div>
                </section>

                <div className="portal-index-footer">
                  <span>Índice 01 · Trilha de Aprendizado ATLASGR</span>
                  <button type="button" onClick={() => changeIndex(1)}>
                    Academia de GR + IA
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="academy-index"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="portal-index-page portal-academy-index"
            >
              <div className="atlas-container">
                <div className="portal-index-hero portal-academy-hero">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="atlas-eyebrow"
                    >
                      <Bot size={16} aria-hidden="true" />
                      Índice 02 · Inteligência aplicada
                    </motion.span>
                    <motion.h1
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 }}
                    >
                      Academia de Gerenciamento de Risco <span>ATLASGR</span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 }}
                    >
                      Aprenda a trabalhar com IA, explore ferramentas por área e transforme uma necessidade em um
                      agente orientado, seguro e reutilizável.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      className="portal-hero-actions"
                    >
                      <a href="#criador-de-agentes" className="atlas-primary-button">
                        Criar um agente
                        <Sparkles size={18} aria-hidden="true" />
                      </a>
                      <span>
                        <ShieldCheck size={18} aria-hidden="true" />
                        Decisão humana sempre no controle
                      </span>
                    </motion.div>
                  </div>

                  <motion.aside
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.12 }}
                    className="portal-academy-score"
                  >
                    <span>
                      <Bot size={30} aria-hidden="true" />
                    </span>
                    <p>Seu laboratório</p>
                    <strong>{exploredTools.length}/{academyTools.length} ferramentas exploradas</strong>
                    <small>{createdAgents.length} agentes criados e salvos neste dispositivo</small>
                  </motion.aside>
                </div>

                <section className="portal-engine-grid" aria-label="Motores da Academia ATLASGR">
                  {engines.map((engine, index) => (
                    <motion.article
                      key={engine.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16 + index * 0.1 }}
                    >
                      <span className="portal-engine-icon">
                        <engine.icon size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <p>
                          <span /> Motor ativo
                        </p>
                        <h2>{engine.title}</h2>
                        <small>{engine.description}</small>
                      </div>
                    </motion.article>
                  ))}
                </section>

                <section className="portal-tools-section">
                  <div className="portal-section-heading">
                    <div>
                      <p>Ferramentas por área e cargo</p>
                      <h2>Escolha um copiloto para explorar</h2>
                    </div>
                    <span>+20 XP por nova ferramenta</span>
                  </div>

                  <div className="portal-tool-grid">
                    {academyTools.map((tool, index) => {
                      const isSelected = selectedTool.id === tool.id;
                      const isExplored = exploredTools.includes(tool.id);

                      return (
                        <motion.button
                          key={tool.id}
                          type="button"
                          onClick={() => selectTool(tool.id)}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: Math.min(index * 0.07, 0.28) }}
                          whileHover={{ y: -6 }}
                          className={`${isSelected ? "is-selected" : ""} ${isExplored ? "is-explored" : ""}`}
                        >
                          <span className="portal-tool-icon">
                            <tool.icon size={22} aria-hidden="true" />
                          </span>
                          <em>{tool.area}</em>
                          <h3>{tool.title}</h3>
                          <p>{tool.description}</p>
                          <strong>
                            {isExplored ? "Explorado" : "Explorar ferramenta"}
                            {isExplored ? <CheckCircle2 size={15} /> : <ArrowRight size={15} />}
                          </strong>
                        </motion.button>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.article
                      key={selectedTool.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="portal-tool-workbench"
                    >
                      <div className="portal-tool-workbench-heading">
                        <span>
                          <selectedTool.icon size={25} aria-hidden="true" />
                        </span>
                        <div>
                          <p>Ferramenta selecionada · {selectedTool.area}</p>
                          <h2>{selectedTool.title}</h2>
                        </div>
                      </div>
                      <div className="portal-tool-capabilities">
                        {selectedTool.features.map((feature, index) => (
                          <span key={feature}>
                            <small>{String(index + 1).padStart(2, "0")}</small>
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="portal-tool-prompt">
                        <p>Prompt de experimentação</p>
                        <strong>“{selectedTool.prompt}”</strong>
                        <button
                          type="button"
                          onClick={() => {
                            const builder = document.querySelector<HTMLTextAreaElement>("#criador-de-agentes textarea");
                            builder?.focus();
                            builder?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                        >
                          Adaptar no criador de agentes
                          <ArrowRight size={16} aria-hidden="true" />
                        </button>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </section>

                <AgentBuilder />

                {createdAgents.length > 0 && (
                  <section className="portal-agent-library">
                    <div className="portal-section-heading">
                      <div>
                        <p>Biblioteca pessoal</p>
                        <h2>Agentes que você criou</h2>
                      </div>
                      <span>Salvos neste dispositivo</span>
                    </div>
                    <div>
                      {createdAgents.slice(0, 4).map((agent, index) => (
                        <motion.article
                          key={agent.id}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <span>
                            <Bot size={19} aria-hidden="true" />
                          </span>
                          <p>{agent.area}</p>
                          <h3>{agent.name}</h3>
                          <small>{agent.role}</small>
                        </motion.article>
                      ))}
                    </div>
                  </section>
                )}

                <section className="portal-badges-showcase">
                  <div>
                    <p>Conquistas da Academia</p>
                    <h2>Domine as ferramentas e evolua seu nível</h2>
                  </div>
                  <div>
                    {BADGES.filter((badge) => ["explorador-ia", "arquiteto-agentes", "guardiao-risco"].includes(badge.id)).map(
                      (badge) => {
                        const unlocked = badges.includes(badge.id);
                        return (
                          <article key={badge.id} className={unlocked ? "is-unlocked" : ""}>
                            <span>{unlocked ? <Trophy size={20} /> : <LockKeyhole size={20} />}</span>
                            <div>
                              <strong>{badge.label}</strong>
                              <small>{badge.description}</small>
                            </div>
                          </article>
                        );
                      }
                    )}
                  </div>
                </section>

                <div className="portal-index-footer">
                  <button type="button" onClick={() => changeIndex(0)}>
                    <ArrowLeft size={18} aria-hidden="true" />
                    Trilha de Aprendizado
                  </button>
                  <span>Índice 02 · Academia de Gerenciamento de Risco ATLASGR</span>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
