import type { ModuleContentFull } from "@/lib/types";
import { getModuleMeta } from "./meta";

const meta = getModuleMeta("05-software-logistico")!;

export const module05: ModuleContentFull = {
  ...meta,
  sources: [
    "Manual de Check list — telas do Atlas Connect (cadastro de veículo, checklist, menus)",
    "Cronograma de Treinamentos 2º semestre — treinamentos de Atlas Connect e de tecnologias de rastreamento",
    "Treinamento Connect — Acesso ao Atlas Connect (telas de Dashboard e cadastros gerais)",
  ],
  objectives: [
    "Explicar para que serve o Atlas Connect no dia a dia da Central.",
    "Localizar os principais menus do sistema e o que cada um faz.",
    "Executar mentalmente o fluxo de solicitação e validação de um checklist.",
    "Reconhecer que o Connect precisa se comunicar com diferentes tecnologias de rastreamento de terceiros.",
  ],
  sections: [
    {
      id: "o-que-e-o-connect",
      title: "O que é o Atlas Connect",
      blocks: [
        {
          type: "text",
          heading: "O sistema por trás da Central",
          paragraphs: [
            [
              { term: "connect" },
              " é a plataforma própria da Atlas usada para cadastrar clientes e veículos, configurar o ",
              { term: "pgr" },
              ", solicitar e validar ",
              { term: "checklist" },
              ", acompanhar a ",
              { term: "torre-de-controle" },
              " e registrar eventos e alertas — é a ferramenta que conecta todas as áreas operacionais estudadas no módulo 3.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Por que 'software logístico' e não só 'sistema de rastreamento'",
          text: [
            "O Connect não substitui o rastreador instalado no veículo — ele centraliza cadastros, regras (PGR), checklist, eventos e indicadores de várias tecnologias de rastreamento diferentes em um único fluxo de trabalho para a Central.",
          ],
        },
      ],
    },
    {
      id: "tour-pelo-menu",
      title: "Tour pelo menu principal",
      blocks: [
        {
          type: "checklist",
          title: "Menus de primeiro nível",
          items: [
            "Dashboard — visão geral do que está acontecendo na operação.",
            "Logística — informações relacionadas às operações de transporte cadastradas.",
            "Torre de Controle — visão das viagens em andamento e eventos que exigem atenção.",
            "Usuários do sistema — gestão dos usuários que acessam o Connect.",
            "Cliente — cadastro e dados dos clientes atendidos pela Atlas.",
            "Cadastros Gerais — cadastro de veículos, motoristas e demais objetos monitorados.",
            "Localização — informações de posicionamento dos veículos.",
            "P.G.R. — configuração do Plano de Gerenciamento de Risco de cada cliente.",
          ],
        },
        {
          type: "text",
          heading: "As telas do Dashboard",
          paragraphs: [
            [
              "O menu Dashboard reúne cinco telas: Painel de Viagens ODO (progressão de cada viagem, previsão de chegada e dispersão de quilometragem), BI de Pátio (veículos parados em pátio e o tempo de permanência), Panorâmica (visão geral de frotas, viagens em andamento, em atraso e checklists aprovados/reprovados), Mapa Gerencial (grid em tempo real com placa, frota, código da SM e última macro) e Requisição.",
            ],
          ],
        },
        {
          type: "text",
          heading: "O submenu de Monitoramento",
          paragraphs: [
            [
              "Dentro de Monitoramento ficam as telas usadas todos os dias pela Operação e pela CIA: Evento ATLAS, Evento TECNOL (eventos gerados pela tecnologia do rastreador), Macro, Auditoria, Tela de Alerta, Operador CheckList e Consolidado SM.",
            ],
            [
              "É nessa área que o operador solicita um checklist para uma placa específica, informando responsável e telefone de contato, e depois valida item por item cada sensor e atuador testado.",
            ],
          ],
        },
      ],
    },
    {
      id: "fluxo-checklist-connect",
      title: "Fluxo de checklist no Connect",
      blocks: [
        {
          type: "case",
          title: "Do pedido à validação",
          text:
            "Em Cadastros Gerais → Veículo → Veículo, o operador localiza a placa desejada e clica em \"Solicitar CheckList\", informando responsável e telefone. Em seguida, em Monitoramento → Operador CheckList, a lista de checklists solicitados é exibida com cliente, operação, responsável e status. Ao abrir um registro, cada item testado — bloqueio, botão de pânico, pisca, sensor de desengate, sensor de painel, sensor de porta do carona/motorista, sirene, teclado — pode ser aprovado ou reprovado, com campo de observação para detalhar qualquer problema.",
          source: "Manual de Check list (telas do Atlas Connect)",
        },
        {
          type: "checklist",
          title: "Itens tipicamente testados em um checklist",
          items: [
            "Bloqueio",
            "Botão de Pânico",
            "Pisca",
            "Sensor de Desengate",
            "Sensor de Painel",
            "Sensor de Porta do Carona",
            "Sensor de Porta do Motorista",
            "Sirene",
            "Teclado",
          ],
        },
      ],
    },
    {
      id: "integracao-tecnologias",
      title: "Integração com tecnologias de rastreamento",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Atlas atende veículos equipados com diferentes marcas de rastreador. Por isso, a Central é treinada especificamente em cada tecnologia — o Connect padroniza o fluxo de trabalho, mas o operador precisa saber operar o equipamento de cada fabricante.",
            ],
          ],
        },
        {
          type: "comparison",
          title: "O que é treinado por tecnologia (comum às marcas atendidas)",
          left: {
            label: "Tecnologias cobertas",
            points: ["Sascar e Sighra", "Onix e Omnilink", "Pósitron e Autotrac"],
          },
          right: {
            label: "Competências treinadas em cada uma",
            points: ["Envio de comandos", "Desbloqueio manual", "Análise de relatórios"],
          },
        },
        {
          type: "faq",
          items: [
            { q: "O Connect substitui o sistema do fabricante do rastreador (ex.: Pósitron, Sascar)?", a: "Não. O Connect centraliza cadastro, PGR, checklist e eventos; o operador também acessa o portal do fabricante para ações específicas do equipamento, como a associação de GR." },
            { q: "Onde fica o histórico de um checklist já validado?", a: "Em Monitoramento → Operador CheckList, junto com data, cliente, operação, responsável e status de cada solicitação." },
            { q: "O que é o 'Consolidado SM'?", a: "É a tela que reúne o fechamento das SMs (viagens monitoradas) já concluídas, usada pela liderança para conferência." },
          ],
        },
      ],
    },
  ],
  summary: [
    "O Atlas Connect centraliza cadastros, PGR, checklist, monitoramento e eventos de toda a operação.",
    "Menus principais: Dashboard, Logística, Torre de Controle, Usuários do sistema, Cliente, Cadastros Gerais, Localização e P.G.R.",
    "Monitoramento reúne as telas do dia a dia: Evento ATLAS, Evento TECNOL, Macro, Auditoria, Tela de Alerta, Operador CheckList e Consolidado SM.",
    "O fluxo de checklist vai de 'Solicitar CheckList' no cadastro do veículo até a aprovação/reprovação item a item em Operador CheckList.",
    "A Central é treinada tecnologia por tecnologia (Sascar/Sighra, Onix/Omnilink, Pósitron/Autotrac) em envio de comandos, desbloqueio manual e análise de relatórios.",
  ],
  finalChecklist: [
    "Sei para que serve o Atlas Connect e por que ele não substitui o rastreador.",
    "Consigo nomear pelo menos 5 menus principais do Connect.",
    "Sei descrever o fluxo completo de um checklist, do pedido à validação.",
    "Reconheço as 3 competências treinadas em cada tecnologia de rastreamento.",
  ],
  mindMap: {
    root: "Atlas Connect",
    branches: [
      { label: "Propósito", items: ["Centraliza cadastro, PGR, checklist, eventos"] },
      { label: "Menus principais", items: ["Dashboard", "Torre de Controle", "Cliente", "Cadastros Gerais", "P.G.R."] },
      { label: "Monitoramento", items: ["Evento ATLAS/TECNOL", "Macro", "Auditoria", "Tela de Alerta", "Operador CheckList", "Consolidado SM"] },
      { label: "Tecnologias integradas", items: ["Sascar / Sighra", "Onix / Omnilink", "Pósitron / Autotrac"] },
    ],
  },
};
