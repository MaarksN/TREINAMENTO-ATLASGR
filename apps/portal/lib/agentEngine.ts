export type AgentArea =
  | "Central e Operações"
  | "Gerenciamento de Risco"
  | "Comercial"
  | "Implantação"
  | "Tecnologia e Dados"
  | "Pessoas e Liderança";

export interface AgentBlueprint {
  id: string;
  name: string;
  area: AgentArea;
  role: string;
  mission: string;
  createdAt: string;
  originalPrompt: string;
  instructions: string[];
  requiredInputs: string[];
  expectedOutputs: string[];
  guardrails: string[];
  starterPrompt: string;
}

export interface AgentBuilderInput {
  prompt: string;
  area: AgentArea;
  role: string;
}

const areaProfiles: Record<
  AgentArea,
  {
    defaultName: string;
    inputs: string[];
    outputs: string[];
    instructions: string[];
    guardrails: string[];
  }
> = {
  "Central e Operações": {
    defaultName: "Sentinela Operacional",
    inputs: ["Descrição da ocorrência", "Status do veículo e da viagem", "Regras aplicáveis do PGR"],
    outputs: ["Resumo executivo", "Checklist de validação", "Próximos passos priorizados"],
    instructions: [
      "Organize fatos, hipóteses e pendências em blocos separados.",
      "Priorize riscos que exigem confirmação humana imediata.",
      "Conclua com um registro pronto para passagem de turno.",
    ],
    guardrails: [
      "Nunca autorizar bloqueio, desengate ou liberação sem validação humana.",
      "Não inventar localização, contato ou condição do veículo.",
      "Sinalizar qualquer informação ausente como pendência.",
    ],
  },
  "Gerenciamento de Risco": {
    defaultName: "Guardião de Risco",
    inputs: ["Perfil da operação", "Regras do PGR", "Coberturas, limites e exceções"],
    outputs: ["Mapa de exposição", "Alertas de aderência", "Plano de mitigação"],
    instructions: [
      "Compare cada condição operacional com a regra correspondente.",
      "Classifique achados por impacto e urgência.",
      "Explique o motivo de cada recomendação em linguagem simples.",
    ],
    guardrails: [
      "Não substituir parecer securitário, jurídico ou do gestor de risco.",
      "Não afirmar cobertura sem fonte documental válida.",
      "Manter rastreabilidade entre recomendação e regra consultada.",
    ],
  },
  Comercial: {
    defaultName: "Estrategista de Propostas",
    inputs: ["Perfil do prospect", "Dores e objetivos", "Escopo desejado"],
    outputs: ["Diagnóstico consultivo", "Estrutura de proposta", "Perguntas para próxima conversa"],
    instructions: [
      "Transforme necessidades em problemas de negócio mensuráveis.",
      "Relacione cada solução a uma dor validada.",
      "Use linguagem consultiva, objetiva e sem promessas absolutas.",
    ],
    guardrails: [
      "Não inventar preços, SLAs ou funcionalidades.",
      "Não expor dados de outros clientes.",
      "Marcar informações comerciais que precisam de aprovação.",
    ],
  },
  Implantação: {
    defaultName: "Navegador de Implantação",
    inputs: ["Escopo contratado", "Responsáveis e prazos", "Dependências técnicas e operacionais"],
    outputs: ["Plano por marcos", "Matriz de responsabilidades", "Checklist de entrada em produção"],
    instructions: [
      "Quebre o escopo em entregas verificáveis.",
      "Aponte dependências, riscos e critérios de aceite.",
      "Converta pendências em ações com dono e prazo.",
    ],
    guardrails: [
      "Não alterar escopo contratado sem aprovação.",
      "Não considerar uma etapa concluída sem evidência.",
      "Proteger dados de acesso e informações sensíveis do cliente.",
    ],
  },
  "Tecnologia e Dados": {
    defaultName: "Arquiteto de Integrações",
    inputs: ["Objetivo da integração", "Sistemas envolvidos", "Amostra ou dicionário de dados"],
    outputs: ["Mapa de integração", "Requisitos e validações", "Plano inicial de testes"],
    instructions: [
      "Explique o fluxo de dados de origem a destino.",
      "Destaque campos obrigatórios, exceções e falhas esperadas.",
      "Produza uma lista de testes funcionais e de segurança.",
    ],
    guardrails: [
      "Nunca solicitar ou reproduzir senhas e tokens reais.",
      "Mascarar dados pessoais e credenciais.",
      "Sinalizar hipóteses técnicas que dependem de validação.",
    ],
  },
  "Pessoas e Liderança": {
    defaultName: "Tutor de Desenvolvimento",
    inputs: ["Cargo e momento profissional", "Competências desejadas", "Prazo e disponibilidade"],
    outputs: ["Plano de desenvolvimento", "Práticas orientadas", "Critérios de evolução"],
    instructions: [
      "Adaptar o plano ao cargo e à rotina informada.",
      "Equilibrar conteúdo, prática e reflexão.",
      "Definir evidências objetivas de aprendizagem.",
    ],
    guardrails: [
      "Não inferir atributos sensíveis nem emitir avaliações profissionais sobre pessoas.",
      "Não registrar informação sensível desnecessária.",
      "Tratar recomendações como apoio, nunca como decisão automática.",
    ],
  },
};

function compactPrompt(prompt: string) {
  return prompt.replace(/\s+/g, " ").trim();
}

function inferName(prompt: string, fallback: string) {
  const normalized = prompt.toLocaleLowerCase("pt-BR");
  if (normalized.includes("ocorrência") || normalized.includes("alerta")) return "Sentinela de Ocorrências";
  if (normalized.includes("pgr") || normalized.includes("risco")) return "Guardião do PGR";
  if (normalized.includes("proposta") || normalized.includes("cliente")) return "Copiloto Consultivo";
  if (normalized.includes("implantação") || normalized.includes("projeto")) return "Navegador de Implantação";
  if (normalized.includes("integração") || normalized.includes("dados")) return "Arquiteto de Dados";
  if (normalized.includes("treinamento") || normalized.includes("aprender")) return "Tutor de Aprendizagem";
  return fallback;
}

export function buildAgentBlueprint(input: AgentBuilderInput): AgentBlueprint {
  const prompt = compactPrompt(input.prompt);
  const profile = areaProfiles[input.area];
  const role = input.role.trim() || "Equipe ATLASGR";
  const focus = prompt.length > 180 ? `${prompt.slice(0, 177)}...` : prompt;
  const name = inferName(prompt, profile.defaultName);

  return {
    id: `AGT-${Date.now().toString(36).toUpperCase()}`,
    name,
    area: input.area,
    role,
    mission: `Apoiar ${role} em ${focus.charAt(0).toLocaleLowerCase("pt-BR")}${focus.slice(1)}, mantendo clareza, rastreabilidade e decisão humana.`,
    createdAt: new Date().toISOString(),
    originalPrompt: prompt,
    instructions: profile.instructions,
    requiredInputs: profile.inputs,
    expectedOutputs: profile.outputs,
    guardrails: profile.guardrails,
    starterPrompt: `Você é o ${name}, um agente da área de ${input.area}. Sua missão é apoiar ${role}. Solicitação principal: ${prompt}. Antes de responder, confirme o contexto, identifique dados ausentes e organize a entrega em: análise, riscos, ações recomendadas e validações humanas necessárias.`,
  };
}

export const agentAreas = Object.keys(areaProfiles) as AgentArea[];
