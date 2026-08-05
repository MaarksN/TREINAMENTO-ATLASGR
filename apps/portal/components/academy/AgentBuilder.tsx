"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Clipboard,
  FileInput,
  ListChecks,
  LoaderCircle,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import {
  agentAreas,
  buildAgentBlueprint,
  type AgentArea,
  type AgentBlueprint,
} from "@/lib/agentEngine";
import { useOnboardingStore } from "@/lib/store";

const promptIdeas = [
  "Analisar uma ocorrência e montar um checklist de resposta sem tomar decisões pelo operador.",
  "Conferir as regras de um PGR e destacar riscos, exceções e validações pendentes.",
  "Transformar o escopo de um cliente em plano de implantação com responsáveis e prazos.",
];

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function AgentBuilder() {
  const [area, setArea] = useState<AgentArea>("Gerenciamento de Risco");
  const [role, setRole] = useState("");
  const [prompt, setPrompt] = useState("");
  const [blueprint, setBlueprint] = useState<AgentBlueprint | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);
  const [copied, setCopied] = useState(false);
  const createdAgents = useOnboardingStore((state) => state.createdAgents);
  const saveCreatedAgent = useOnboardingStore((state) => state.saveCreatedAgent);

  function createAgent() {
    if (prompt.trim().length < 20 || isBuilding) return;
    setIsBuilding(true);
    setBlueprint(null);

    window.setTimeout(() => {
      const nextBlueprint = buildAgentBlueprint({ prompt, area, role });
      setBlueprint(nextBlueprint);
      saveCreatedAgent(nextBlueprint);
      setIsBuilding(false);
    }, 1050);
  }

  async function copyStarterPrompt() {
    if (!blueprint) return;
    await navigator.clipboard.writeText(blueprint.starterPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="agent-builder-shell" id="criador-de-agentes">
      <div className="agent-builder-heading">
        <span className="agent-builder-mark">
          <WandSparkles size={25} aria-hidden="true" />
        </span>
        <div>
          <p>Motor orientador · beta funcional</p>
          <h2>Arquiteto de Agentes IA</h2>
          <span>Descreva a necessidade. O motor transforma seu pedido em um agente seguro e pronto para evoluir.</span>
        </div>
        <div className="agent-builder-counter">
          <strong>{createdAgents.length}</strong>
          <span>agentes criados</span>
        </div>
      </div>

      <div className="agent-builder-grid">
        <div className="agent-builder-form">
          <div className="agent-builder-guide">
            {[
              "Diga quem será ajudado",
              "Explique a tarefa e o resultado",
              "Informe limites e validações",
            ].map((item, index) => (
              <span key={item}>
                <small>{index + 1}</small>
                {item}
              </span>
            ))}
          </div>

          <label>
            <span>Área de atuação</span>
            <select value={area} onChange={(event) => setArea(event.target.value as AgentArea)}>
              {agentAreas.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Cargo ou equipe que usará o agente</span>
            <input
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Ex.: Operador da Central, Analista de GR..."
            />
          </label>

          <label>
            <span>O que o agente precisa fazer?</span>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ex.: Quero um agente que leia o contexto de uma ocorrência, identifique informações ausentes e gere um checklist para o operador validar..."
              rows={6}
            />
            <small className={prompt.trim().length >= 20 ? "is-ready" : ""}>
              {prompt.trim().length}/20 caracteres mínimos
            </small>
          </label>

          <div className="agent-prompt-ideas">
            <p>Comece com um exemplo</p>
            {promptIdeas.map((idea) => (
              <button key={idea} type="button" onClick={() => setPrompt(idea)}>
                <Sparkles size={14} aria-hidden="true" />
                {idea}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={createAgent}
            disabled={prompt.trim().length < 20 || isBuilding}
            className="agent-builder-submit"
          >
            {isBuilding ? (
              <>
                <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                Modelando missão e guardrails...
              </>
            ) : (
              <>
                Criar meu agente
                <ArrowRight size={18} aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        <div className="agent-builder-output" aria-live="polite">
          <AnimatePresence>
            {isBuilding ? (
              <motion.div
                key="building"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="agent-engine-running"
              >
                <span className="agent-engine-orbit">
                  <Bot size={34} aria-hidden="true" />
                </span>
                <h3>Construindo o agente</h3>
                {["Interpretando o objetivo", "Aplicando regras da área", "Criando limites de segurança"].map(
                  (item, index) => (
                    <motion.p
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.25 }}
                    >
                      <Check size={15} aria-hidden="true" />
                      {item}
                    </motion.p>
                  )
                )}
              </motion.div>
            ) : blueprint ? (
              <motion.article
                key={blueprint.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="agent-blueprint"
              >
                <div className="agent-blueprint-title">
                  <span>
                    <Bot size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <p>Agente criado · +80 XP</p>
                    <h3>{blueprint.name}</h3>
                  </div>
                </div>

                <p className="agent-blueprint-mission">{blueprint.mission}</p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
                  className="agent-blueprint-sections"
                >
                  {[
                    { title: "Entradas necessárias", icon: FileInput, items: blueprint.requiredInputs },
                    { title: "Entregas esperadas", icon: ListChecks, items: blueprint.expectedOutputs },
                    { title: "Guardrails", icon: ShieldCheck, items: blueprint.guardrails },
                  ].map((section) => (
                    <motion.div key={section.title} variants={reveal}>
                      <h4>
                        <section.icon size={16} aria-hidden="true" />
                        {section.title}
                      </h4>
                      {section.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>

                <button type="button" onClick={copyStarterPrompt} className="agent-copy-button">
                  {copied ? <Check size={16} aria-hidden="true" /> : <Clipboard size={16} aria-hidden="true" />}
                  {copied ? "Prompt copiado" : "Copiar prompt-base do agente"}
                </button>
              </motion.article>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="agent-output-empty">
                <span>
                  <Bot size={35} aria-hidden="true" />
                </span>
                <p>Seu agente aparecerá aqui</p>
                <small>
                  O projeto incluirá missão, entradas, entregas, instruções e limites de segurança específicos da área.
                </small>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
