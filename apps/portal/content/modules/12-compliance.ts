import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("12-compliance")!;

export const module12: ModuleContentFull = {
  ...meta,
  sources: [
    "Outline consolidado para este módulo (content/modules/meta.ts)",
    "Política Organizacional e Ética (sigilo, uso de e-mail/internet, redes sociais)",
    "LGPD (Lei nº 13.709/2018)",
    "Módulo 1 — Cultura, ética e conduta",
  ],
  objectives: [
    "Explicar por que compliance é responsabilidade de todo colaborador, não só de um setor.",
    "Reconhecer os principais tipos de dado sensível tratados pela Atlas no dia a dia.",
    "Aplicar boas práticas de sigilo, uso de e-mail/internet e redes sociais.",
    "Relacionar falhas de compliance a riscos jurídicos e reputacionais concretos.",
  ],
  sections: [
    {
      id: "por-que-importa",
      title: "Por que compliance importa na Atlas",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas lida diariamente com dados sensíveis: localização de veículos e cargas, documentos e biometria de motoristas, informações de clientes e, em casos de sinistro, detalhes de investigações em andamento. Uma falha de compliance aqui não é um detalhe administrativo — é risco jurídico e reputacional real, tanto para a Atlas quanto para o cliente.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Compliance é de todos, não só de um setor",
          text: [
            "Um operador que comenta detalhes de um sinistro fora do ambiente de trabalho, ou que compartilha uma tela do Connect em uma rede social, gera o mesmo tipo de risco que uma falha técnica de segurança da informação.",
          ],
        },
      ],
    },
    {
      id: "lgpd-na-pratica",
      title: "LGPD no dia a dia da operação",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A ",
              { term: "lgpd" },
              " exige finalidade clara e, em muitos casos, consentimento para o tratamento de dados pessoais. Na prática da Atlas, isso aparece em situações como: o cadastro de um colaborador (que pede consentimento explícito de LGPD, como neste próprio portal), a validação biométrica do Atlas Profile, e o armazenamento de dados de motoristas para o gerenciamento de risco.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "Boas práticas de proteção de dados no dia a dia",
          items: [
            "Acessar apenas os dados necessários para a própria função — nunca por curiosidade.",
            "Nunca compartilhar telas de sistemas internos (Connect, Profile) fora do ambiente de trabalho.",
            "Reportar imediatamente qualquer suspeita de vazamento ou acesso indevido.",
            "Usar apenas os canais oficiais para tratar dados de clientes e motoristas.",
          ],
        },
      ],
    },
    {
      id: "sigilo-e-conduta",
      title: "Sigilo, e-mail, internet e redes sociais",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Além da LGPD, a Política Organizacional e Ética da Atlas trata do sigilo profissional: informações de clientes, sinistros e operações não devem ser comentadas fora do ambiente de trabalho — nem mesmo de forma genérica ou \"anônima\".",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "Posso comentar em redes sociais sobre um caso interessante que atendi, sem citar nomes?", a: "Não. Mesmo sem nomes, detalhes de localização, data ou tipo de carga podem identificar o cliente ou o caso — a orientação é não comentar casos reais fora do ambiente de trabalho." },
            { q: "Posso usar o e-mail corporativo para assuntos pessoais?", a: "O uso de e-mail e internet corporativos deve seguir a Política Organizacional e Ética da empresa, que orienta o uso profissional desses recursos." },
            { q: "O que fazer se um cliente pedir informações de outro cliente?", a: "Recusar educadamente e escalar para a liderança — informações de um cliente nunca devem ser compartilhadas com outro." },
          ],
        },
        {
          type: "case",
          title: "O custo de uma falha de compliance",
          text:
            "Falhas de compliance — como um vazamento de dados de cliente ou o compartilhamento indevido de informações de um sinistro — podem gerar desde notificação à ANPD até rescisão contratual com o cliente afetado, além do dano à reputação da Atlas no mercado.",
          source: "Contexto de mercado sobre consequências de falhas de compliance em operações de dados sensíveis",
        },
      ],
    },
  ],
  summary: [
    "Compliance na Atlas envolve dados de localização, documentos, biometria e informações de sinistro — e é responsabilidade de todo colaborador.",
    "A LGPD exige finalidade clara e, em muitos casos, consentimento para tratamento de dados pessoais.",
    "Boas práticas incluem acessar só o necessário, nunca compartilhar telas de sistemas internos e reportar suspeitas de vazamento.",
    "A Política Organizacional e Ética trata de sigilo, uso de e-mail/internet e redes sociais — casos reais não devem ser comentados fora do ambiente de trabalho, mesmo sem nomes.",
    "Falhas de compliance geram risco jurídico (LGPD/ANPD) e reputacional real, não são um detalhe administrativo.",
  ],
  finalChecklist: [
    "Sei por que compliance é responsabilidade de todo colaborador.",
    "Reconheço os principais tipos de dado sensível tratados pela Atlas.",
    "Sei aplicar boas práticas de sigilo, e-mail/internet e redes sociais.",
    "Entendo as consequências possíveis de uma falha de compliance.",
  ],
  mindMap: {
    root: "Compliance",
    branches: [
      { label: "Dados sensíveis", items: ["Localização", "Documentos e biometria", "Dados de sinistro"] },
      { label: "LGPD", items: ["Finalidade clara", "Consentimento", "Boas práticas de acesso"] },
      { label: "Conduta", items: ["Sigilo profissional", "E-mail e internet", "Redes sociais"] },
      { label: "Consequências", items: ["Risco jurídico (ANPD)", "Risco reputacional"] },
    ],
  },
};
