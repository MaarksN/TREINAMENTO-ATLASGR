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
    "Dominar as regras da LGPD e sua aplicação prática no dia a dia da Torre.",
    "Identificar ataques de Engenharia Social (Falso Cliente / Ameaças).",
    "Assumir a postura de tolerância zero com o vazamento de informações operacionais.",
    "Compreender o uso restrito e monitorado dos ativos da empresa.",
    "Executar corretamente o protocolo de resposta a incidentes nas primeiras horas após a suspeita de um vazamento de dados.",
  ],
  sections: [
    {
      id: "introducao",
      title: "Introdução: O Fator Humano",
      blocks: [
        {
          type: "text",
          heading: "A Maior Vulnerabilidade do Sistema",
          paragraphs: [
            [
              "Os servidores da AtlasGR são protegidos por criptografia militar. Mas de nada adianta um cofre de titânio se o guarda da porta entrega a senha para o primeiro que liga gritando. Na segurança cibernética corporativa, o humano é sempre o elo mais fraco.",
            ],
            [
              "Este módulo foca na sua blindagem mental. O vazamento de dados não resulta apenas em cargas roubadas; resulta em multas milionárias da Agência Nacional de Proteção de Dados (ANPD) e demissão imediata por justa causa.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tolerância Zero",
          text: [
            "Não existe advertência verbal para quem compartilha a própria senha ou tira foto da tela da Torre de Controle. A resposta da empresa é a rescisão e, dependendo do caso, a abertura de inquérito policial.",
          ],
        },
      ],
    },
    {
      id: "capitulo-1-lgpd",
      title: "Capítulo 1: A Lei Geral de Proteção de Dados",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "Nós não monitoramos caminhões; nós tratamos dados. O CPF do motorista, a biometria facial, as rotas que ele faz. Tudo isso pertence a ELE, não à AtlasGR.",
            ],
          ],
        },
        {
          type: "checklist",
          title: "A Regra da Necessidade",
          items: [
            "Você só pode acessar a ficha de um motorista se estiver ativamente gerenciando um alerta dele.",
            "Você NUNCA deve repassar o histórico criminal de um motorista (dado sensível) para o dono da transportadora por WhatsApp.",
            "O cliente recebe apenas o Status: 'Aprovado' ou 'Não Recomendado'. O motivo fica em sigilo no banco de dados.",
          ],
        },
      ],
    },
    {
      id: "capitulo-2-engenharia-social",
      title: "Capítulo 2: Hackeando a Mente (Engenharia Social)",
      blocks: [
        {
          type: "text",
          paragraphs: [
            [
              "A Engenharia Social é o uso do convencimento, do medo ou da urgência para fazer você quebrar as regras de segurança.",
            ],
          ],
        },
        {
          type: "faq",
          items: [
            { q: "O Falso Diretor: 'Sou diretor do embarcador, a carga está parada, libere a senha agora ou cancelo o contrato!'", a: "Resposta: O protocolo exige dupla verificação com contatos previamente cadastrados. Nenhum diretor real pede para burlar regras de segurança. Negue a informação e reporte ao DHO." },
            { q: "O Falso TI: 'Oi, sou da TI da Atlas, precisamos da sua senha para resetar o sistema'.", a: "A TI NUNCA pede a sua senha. Desligue imediatamente." },
          ],
        },
      ],
    },
    {
      id: "capitulo-3-senhas-telas",
      title: "Capítulo 3: Bloqueio de Telas e Ativos",
      blocks: [
        {
          type: "comparison",
          title: "Boas Práticas de Hardware",
          left: {
            label: "O Inaceitável",
            points: ["Deixar o monitor destravado ao ir ao banheiro.", "Usar o PC da empresa para acessar e-mails pessoais e baixar arquivos.", "Emprestar a sua credencial do Connect para um colega 'ajudar na fila'."],
          },
          right: {
            label: "O Padrão Ouro",
            points: ["Atalho Windows + L sempre que levantar da cadeira.", "Ciente de que 100% da navegação web é auditada.", "O que você faz com o seu login é de sua exclusiva responsabilidade (Accountability)."],
          },
        },
      ],
    },
    {
      id: "estudo-de-caso",
      title: "Estudo de Caso: A Foto Inocente que Custou Milhões",
      blocks: [
        {
          type: "case",
          title: "O Grupo de WhatsApp",
          text: "Um operador da torre achou engraçado o formato da rota que um caminhão fez no mapa do sistema e tirou uma foto da tela com o celular para mandar no grupo de WhatsApp da equipe. Sem perceber, a foto mostrava também a placa do veículo, o nome do cliente e a lista dos 3 próximos locais de entrega na região de Campinas. Alguém do grupo encaminhou para fora. Dois dias depois, uma das cargas listadas foi abordada com precisão militar, pois a quadrilha sabia exatamente a sequência de paradas. O operador foi demitido, indiciado e a Atlas assumiu um prejuízo civil colossal.",
          source: "Manual de Incidentes de Segurança da Informação",
        },
      ],
    },
    {
      id: "capitulo-4-resposta-a-incidentes",
      title: "Capítulo 4: Resposta a um Incidente de Vazamento de Dados",
      blocks: [
        {
          type: "text",
          heading: "As Primeiras Horas Decidem o Tamanho do Estrago",
          paragraphs: [
            [
              "Suspeitou que um dado vazou? A partir desse segundo, você não é mais só operador: é a primeira linha de resposta. O que você faz (ou deixa de fazer) nas próximas horas define se o incidente vira um alerta controlado ou uma multa da ANPD estampada no jornal.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Regra de Ouro: Não Apague Nada",
          text: [
            "Pânico faz gente apagar print, fechar chat, desinstalar programa 'pra não sobrar rastro'. Isso é o pior erro possível: destruir evidência dificulta a investigação, agrava a sua responsabilidade pessoal e pode ser interpretado como obstrução. Preserve tudo exatamente como está e acione o protocolo.",
          ],
        },
        {
          type: "timeline",
          title: "Protocolo das Primeiras Horas",
          items: [
            { label: "Minuto 0", text: "Pare a ação que está causando ou expondo o vazamento, mas NÃO feche janelas, não apague logs, não desligue a máquina. Isole, não destrua." },
            { label: "Até 15 min", text: "Acione simultaneamente o seu líder direto e a C.I.A (Célula de Inteligência Atlas) pelo canal de emergência. Descreva o que viu, quando e em que sistema." },
            { label: "Até 1 hora", text: "O time de Segurança da Informação e o Encarregado de Dados (DPO) da AtlasGR precisam ser formalmente comunicados para abrir o registro interno de incidente e iniciar a contenção." },
            { label: "Próximos dias", text: "Cabe ao DPO, junto à Jurídico, avaliar o risco ao titular dos dados e decidir se e quando a ANPD e os titulares afetados serão notificados, conforme exige a LGPD. Essa decisão não é sua — mas o seu relato preciso é o que a embasa." },
          ],
        },
        {
          type: "checklist",
          title: "Enquanto o Protocolo Roda, Você Deve",
          items: [
            "Anotar (em papel ou bloco de notas, sem printar telas sensíveis) o horário exato em que percebeu o problema.",
            "Guardar prints e evidências apenas se solicitado formalmente pela Segurança da Informação, nunca por iniciativa própria enviando para grupos.",
            "Não comentar o incidente com clientes, fornecedores ou nas redes sociais antes do time de Compliance liberar uma posição oficial.",
            "Continuar disponível para esclarecimentos até o encerramento do registro de incidente.",
          ],
        },
      ],
    },
    {
      id: "materiais-complementares",
      title: "Materiais Complementares e Fechamento",
      blocks: [
        {
          type: "checklist",
          title: "Próximos Passos",
          items: [
            "Assine digitalmente o Termo de Sigilo e Confidencialidade (NDA) no seu portal de RH.",
            "Prepare-se para o Módulo 13: Onde veremos como a Inteligência Artificial defende os nossos sistemas contra fraudes.",
          ],
        },
      ],
    },
  ],
  summary: [
    "Você é a principal barreira contra invasões. Hackers atacam pessoas antes de atacar servidores.",
    "A LGPD exige sigilo extremo sobre dados de motoristas, especialmente biometria e crimes (Dados Sensíveis).",
    "Engenharia Social usa pressão e urgência para fazer você burlar o protocolo. Não ceda.",
    "Fotografar a tela da operação é motivo para rescisão do contrato de trabalho.",
  ],
  finalChecklist: [
    "Entendo o risco da Engenharia Social e como reagir a ameaças telefônicas.",
    "Sei que a minha senha é pessoal e o bloqueio da tela é obrigatório.",
    "Sei que fotografar a tela é o maior pecado de compliance da empresa.",
  ],
  mindMap: {
    root: "Compliance e Sigilo",
    branches: [
      { label: "LGPD", items: ["Dados Sensíveis", "Status vs Ficha Criminal", "Privacidade", "Resposta a Incidentes"] },
      { label: "Engenharia Social", items: ["Falso Diretor", "Pressão Urgente", "Negação Positiva"] },
      { label: "Regras Físicas", items: ["Zero Fotos", "Windows+L", "Senha Pessoal"] },
    ],
  },
  scenario:
    "Cenário Prático: Um colega entra correndo e diz que esqueceu a senha e precisa que você logue na máquina dele rapidamente para ele não estourar o SLA de um alerta. O que você faz?",
  diagram: {
    title: "O Firewall Humano",
    chart: "graph LR\n  Ataque[Ligação: 'Sou o Diretor'] --> Operador{Operador Validou no Sistema?}\n  Operador -- Sim --> Sucesso[Acesso Liberado]\n  Operador -- Não Validou --> Falha[Engenharia Social Bem Sucedida / Vazamento]",
  },
};
