import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("12-compliance")!;

export const module12: ModuleContentFull = {
  ...meta,
  sources: [
    "Política Organizacional e Ética (v2.1) — seções 9 a 12",
    "LGPD (Lei nº 13.709/2018)",
    "Normas de Segurança da Informação AtlasGR",
  ],
  objectives: [
    "Compreender a gravidade da LGPD na operação logística.",
    "Reconhecer ameaças de engenharia social focadas no roubo de cargas.",
    "Aplicar as regras de ouro sobre compartilhamento de senhas e uso de sistemas corporativos.",
    "Entender as consequências disciplinares e criminais do vazamento de informações.",
  ],
  sections: [
    {
      id: "guia-do-modulo",
      title: "Guia Estratégico do Módulo",
      blocks: [
        {
          type: "text",
          heading: "Visão Geral",
          paragraphs: [
            [
              "Segurança da Informação não é responsabilidade só do time de TI. Em um ambiente onde uma tela de sistema aponta a localização de bilhões de reais em cargas circulando pelo país, você é a principal linha de defesa (e a maior vulnerabilidade).",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Ficha Técnica",
          items: [
            "Nível de dificuldade: Básico (Fundação Obrigatória)",
            "Pré-requisitos: Módulo 01",
            "Tempo estimado: 30 minutos",
            "Competências desenvolvidas: Consciência de Segurança Cibernética, Proteção de Dados, Sigilo Operacional",
            "Gamificação: +300 XP, Badge 'Guardião Digital'",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Assunto Zero Tolerância",
          text: [
            "Violações aos protocolos deste módulo não geram 'advertência verbal'. Geram demissão por justa causa e, dependendo da gravidade, investigação por parte das autoridades policiais.",
          ],
        },
      ],
    },
    {
      id: "lgpd-na-pratica",
      title: "A LGPD e o Nosso Negócio",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nós lidamos diariamente com dados como o CPF do motorista, a foto do seu rosto (Biometria Facial) e o endereço exato para onde uma carga milionária vai ser entregue. Isso torna a AtlasGR um alvo gigante para multas da ANPD (Agência Nacional de Proteção de Dados) caso haja vazamento.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Um despachante liga pedindo para confirmar a placa do caminhão X. Posso falar?", a: "NÃO. Somente as pessoas previamente cadastradas no sistema como 'Contatos Autorizados' daquele cliente podem receber informações. A confirmação de identidade é obrigatória." },
            { q: "Posso mandar dados por WhatsApp?", a: "Apenas se for o WhatsApp Corporativo Oficial da AtlasGR e dentro das automações do sistema. O uso de WhatsApp pessoal para tratar qualquer dado de operação é terminantemente proibido." },
          ],
        },
      ],
    },
    {
      id: "engenharia-social",
      title: "Engenharia Social: O 'Golpe da Ligação'",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Quadrilhas de roubo de carga são extremamente sofisticadas. Elas não precisam hackear os servidores da Atlas se conseguirem hackear a sua mente. Engenharia Social é o uso da persuasão para enganar você a liberar uma senha ou uma informação.",
            ],
          ],
        },
        {
          type: "case",
          title: "Exemplo Real de Ataque",
          text: "Um homem ligou para a Central fingindo ser o 'Diretor Comercial' de um grande cliente, gritando que precisava da senha de liberação de uma carreta presa no posto ou cancelaria o contrato. O operador, sob pressão e com medo do 'diretor', passou a senha sem confirmar o protocolo. A carreta foi roubada 10 minutos depois.",
          source: "Treinamento de Malícia AtlasGR",
        },
      ],
    },
    {
      id: "regras-de-ouro",
      title: "Regras de Ouro: Senhas e Telas",
      blocks: [
        {
          type: "checklist",
          title: "O que nunca fazer",
          items: [
            "Nunca fotografe, grave a tela ou tire print do sistema para mandar em grupos (mesmo que internos/colegas).",
            "Nunca compartilhe sua senha de login com o colega que 'esqueceu a dele e precisa atender uma ligação urgente'.",
            "Sempre bloqueie a tela do computador (Windows + L) ao levantar da mesa.",
            "Não clique em links de e-mails prometendo 'Prêmios', 'Bônus' ou com tons de 'Urgência Financeira'. Reporte à TI.",
          ],
        },
      ],
    },
  ],
  summary: [
    "A proteção dos dados (LGPD) é tão importante quanto a proteção da carga.",
    "Engenharia social usa o medo, a urgência ou a autoridade para enganar você; confie apenas no processo do sistema.",
    "A identidade do chamador precisa ser verificada sempre, independentemente da pressa.",
    "O compartilhamento de senhas e a captura de telas são crimes corporativos com tolerância zero.",
  ],
  finalChecklist: [
    "Sei como agir diante de ligações agressivas pedindo informações fora do padrão.",
    "Nunca tiro fotos da tela do computador, sob hipótese alguma.",
    "Sei que bloquear a tela ao levantar é obrigatório.",
  ],
  mindMap: {
    root: "Compliance e Sigilo",
    branches: [
      { label: "LGPD", items: ["Dados Sensíveis", "Fotos/FaceID", "Sem Compartilhamento"] },
      { label: "Ataques", items: ["Engenharia Social", "Phishing", "Falso Diretor"] },
      { label: "Obrigatório", items: ["Senhas Pessoais", "Bloqueio de Tela", "Autenticação"] },
    ],
  },
  scenario:
    "Alguém liga chorando muito, diz ser esposa do motorista X e que precisa saber exatamente a localização atual do caminhão porque o filho dele sofreu um acidente grave. Qual o procedimento correto (que você não passa a localização)?",
  diagram: {
    title: "Validação de Identidade",
    chart: "graph LR\n  A[Ligação Externa] --> B{Pessoa está no Cadastro?}\n  B -- Não --> C[Negar Informação / Cortar]\n  B -- Sim --> D{Sabe Senha de Contato?}\n  D -- Não --> E[Pedir validação / Não liberar]\n  D -- Sim --> F[Proceder com Cautela]",
  },
};
