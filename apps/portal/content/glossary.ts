import type { GlossaryTerm } from "@/lib/types";

// Núcleo de termos reais, extraídos dos materiais internos da ATLASGR já lidos
// (organograma, política organizacional, manual de checklist, cronograma de
// treinamentos, manual do portal de Gerenciamento de Risco da Pósitron) mais um
// pequeno grupo de termos de mercado/regulatórios de conhecimento público,
// claramente identificados como tal. Nada aqui foi inventado: onde a fonte não
// detalhava uma sigla (ex.: "LGM"), o termo foi deixado de fora em vez de arriscar
// uma definição incorreta.
export const glossary: GlossaryTerm[] = [
  {
    id: "pgr",
    term: "PGR (Plano de Gerenciamento de Risco)",
    definition:
      "Documento que define as regras de segurança de uma operação de transporte: rotas permitidas, pontos de parada autorizados, horários de risco, procedimentos em caso de alerta e critérios de acionamento de autoridades ou pronta resposta.",
    importance:
      "É o documento que orienta toda a atuação da Central: cada alerta é tratado conforme o que está definido no PGR daquele cliente.",
    atlasUsage:
      "Elaborado pelo setor de Implantação no momento da configuração de um novo cliente, e usado diariamente pelos Operadores e pela CIA na tratativa de alertas.",
  },
  {
    id: "sublimite",
    term: "Sublimite",
    definition:
      "Valor máximo de indenização previsto na apólice de seguro para uma cobertura específica (por exemplo, roubo de carga em determinada região), dentro do limite máximo de indenização (LMI) geral do contrato.",
    example: "Uma apólice pode ter um LMI de R$ 1.000.000, mas um sublimite de R$ 300.000 para cargas paradas em pátio não vigiado.",
    atlasUsage: "Tema do treinamento interno de apólice e regras de seguro, ministrado a operadores, supervisão, liderança e CIA.",
  },
  {
    id: "rcf-dc",
    term: "RCF-DC",
    definition:
      "Responsabilidade Civil Facultativa – Desvio de Carga: modalidade de seguro do mercado brasileiro (regulada pela SUSEP) que cobre o transportador contra prejuízos por roubo, furto ou desaparecimento de carga durante o transporte.",
    importance: "Complementa a cobertura básica de transporte e costuma trazer exigências operacionais (rastreamento, checklist, PGR) que a Central precisa cumprir.",
    atlasUsage: "Assunto de treinamento formal na Atlas (\"Treinamento Apólice RCF-DC\"), incluído no cronograma de capacitação da Central.",
  },
  {
    id: "sinistro",
    term: "Sinistro",
    definition:
      "Evento coberto pela apólice de seguro — como roubo, furto, acidente ou avaria — que pode gerar acionamento da seguradora e abertura de um relatório de ocorrência.",
    atlasUsage: "Ao suspeitar de sinistro, o Operador aciona a CIA, que registra o evento e monta o relatório dentro do prazo de 48 horas.",
  },
  {
    id: "gr",
    term: "GR (Gerenciadora de Risco)",
    definition:
      "Empresa especializada — como a ATLASGR — contratada para monitorar, em tempo real, veículos e cargas de um cliente, seguindo as regras definidas no PGR e na apólice de seguro.",
    atlasUsage:
      "No portal de rastreamento do fabricante do equipamento (ex.: Pósitron), cada veículo é associado a uma GR com permissões próprias: GR Principal, Comando Disponível, Ação Embarcada Disponível e Alerta Compartilhado.",
  },
  {
    id: "gr-principal",
    term: "GR Principal",
    definition:
      "Permissão que identifica qual Gerenciadora de Risco é responsável pela configuração e gestão do equipamento de rastreamento de um veículo. Apenas uma GR pode ser a principal por veículo.",
    atlasUsage: "Configurada no momento da associação do veículo à Atlas no portal do fabricante do rastreador.",
  },
  {
    id: "connect",
    term: "Atlas Connect",
    definition:
      "Sistema próprio da ATLASGR usado pela Central para cadastrar clientes e veículos, criar e consolidar SMs, configurar o PGR, solicitar e validar checklists, acompanhar a Torre de Controle e registrar eventos e alertas.",
    importance: "É a principal ferramenta de trabalho de operadores, supervisão e CIA no dia a dia da Central.",
  },
  {
    id: "torre-de-controle",
    term: "Torre de Controle",
    definition:
      "Módulo do sistema Atlas Connect que reúne, em uma visão única, as viagens em andamento e os eventos que exigem atenção da Central.",
  },
  {
    id: "sm",
    term: "SM",
    definition:
      "Sigla usada internamente pela Atlas para identificar o registro de uma viagem sob monitoramento ativo dentro do Connect — criada no início da viagem (\"Início de SM\") e encerrada ao final (\"Fim de SM\"), com um consolidado gerado ao término.",
    atlasUsage: "Aparece nos treinamentos do sistema Connect (\"Criação de SM\", \"Consolidado de SM\") e nas rotinas diárias da liderança operacional.",
  },
  {
    id: "checklist",
    term: "Checklist (teste de sensores e atuadores)",
    definition:
      "Procedimento de verificação remota, feito com o motorista ao telefone ou via macro do equipamento, que testa se todos os sensores e atuadores do veículo (bloqueio, sirene, sensores de porta, botão de pânico etc.) estão funcionando corretamente antes ou durante uma viagem.",
    example:
      "O operador pede a macro de início de viagem, aciona o botão de pânico por 5 segundos, abre as portas para testar os sensores e confirma no Connect se bloqueio e sirene responderam.",
    atlasUsage: "Validado e registrado no Atlas Connect, na tela de Checklist, aprovando ou reprovando cada item testado.",
  },
  {
    id: "sensores-atuadores",
    term: "Sensores e atuadores",
    definition:
      "Componentes do equipamento de rastreamento instalado no veículo. Sensores identificam eventos (ex.: Sensor de Porta do Motorista, Sensor de Desengate, Sensor de Painel); atuadores executam ações (ex.: Bloqueio, Sirene, Pisca).",
    atlasUsage: "Cada item é testado item a item no checklist e aparece listado no Atlas Connect com status Aprovado/Reprovado.",
  },
  {
    id: "botao-de-panico",
    term: "Botão de Pânico",
    definition: "Botão instalado no veículo que o motorista aciona (mantendo pressionado por alguns segundos) para gerar um alerta imediato de emergência para a Central.",
  },
  {
    id: "macro",
    term: "Macro",
    definition:
      "Comando pré-configurado que o motorista envia pelo equipamento de rastreamento para informar um evento padronizado à Central, como \"Início de Viagem\" ou \"Fim de Checklist\".",
  },
  {
    id: "malicia",
    term: "Malícia (Treinamento de Malícia)",
    definition:
      "Conjunto de técnicas usadas pela Central para identificar se um motorista está sendo coagido durante uma ligação — como mudanças no tom de voz e uso da senha de coação — mesmo quando ele não pode falar abertamente sobre a situação.",
    importance: "É uma das competências mais sensíveis do operador: identificar rapidamente uma coação pode ser decisivo para a segurança do motorista.",
    atlasUsage: "Tema de treinamento periódico obrigatório para operação, supervisão e liderança, incluindo reciclagens.",
  },
  {
    id: "senha-de-voz",
    term: "Senha de Voz",
    definition:
      "Palavra de confirmação usada em toda ligação com a Central — diferente da senha de coação — que garante que só pessoas autorizadas (administrativo do cliente ou motorista) têm acesso às informações da operação por telefone. Sem a confirmação da senha de voz, o atendimento é encerrado.",
    example:
      "Empresas costumam usar uma senha combinada (ex.: 'TRANSPORTADORA@ATLASGR'); motoristas costumam usar o nome de uma cidade combinada, para facilitar a memorização.",
    importance: "Evita que uma pessoa não autorizada, se passando por motorista ou responsável da transportadora, obtenha informações sensíveis da viagem por telefone.",
    atlasUsage: "Solicitada pelo operador logo no início de qualquer atendimento por telefone — antes mesmo de tratar o motivo da ligação.",
  },
  {
    id: "senha-de-coacao",
    term: "Senha de Coação",
    definition:
      "Palavra ou frase combinada previamente entre motorista e Central que, se dita durante uma ligação, indica discretamente que ele está sendo forçado a agir contra sua vontade (por exemplo, em uma tentativa de assalto).",
    atlasUsage: "Ensinada no treinamento de Malícia, junto com a leitura do tom de voz do motorista.",
  },
  {
    id: "cia",
    term: "CIA (Central de Inteligência Atlas)",
    definition:
      "Setor de inteligência de risco da Central, dividido em CIA I e CIA II, responsável por tratar os alertas mais críticos, acionar autoridades policiais e empresas de pronta resposta, e apurar sinistros.",
  },
  {
    id: "cia-i",
    term: "Analista CIA I",
    definition:
      "Trata alertas de nível mais alto, apoia os Operadores de Risco em dúvidas e cobre a CIA II em caso de sobrecarga ou ausência.",
  },
  {
    id: "cia-ii",
    term: "Analista CIA II",
    definition:
      "Aciona autoridades policiais e empresas de pronta resposta conforme o PGR do cliente, trata veículos com perda de sinal superior a 2 horas, audita operadores e monta os relatórios de sinistro em até 48 horas após o evento.",
  },
  {
    id: "pronta-resposta",
    term: "Pronta Resposta",
    definition:
      "Empresa parceira especializada, acionada pela CIA em situações de sinistro confirmado ou suspeito, para atuar rapidamente no local da ocorrência.",
  },
  {
    id: "safety",
    term: "Safety (sensor de fadiga)",
    definition:
      "Tecnologia embarcada que analisa o comportamento do motorista ao volante (bocejo, olhos fechados, uso de celular, ausência de cinto de segurança, entre outros) para identificar sinais de fadiga, distração ou risco de colisão.",
    example: "Alertas típicos: bocejo, câmera coberta, uso de celular, colisão frontal, distância insegura, sem cinto de segurança.",
    atlasUsage: "Monitorado por um setor operacional dedicado dentro da estrutura da Central.",
  },
  {
    id: "sla",
    term: "SLA (Service Level Agreement)",
    definition:
      "Acordo de nível de serviço: tempo ou padrão de atendimento que a Central se compromete a cumprir — por exemplo, o tempo máximo para tratar um alerta.",
    atlasUsage: "Os Operadores têm meta de SLA no atendimento de alertas, e a Supervisão acompanha esse indicador diariamente.",
  },
  {
    id: "dho",
    term: "DHO (Desenvolvimento Humano Organizacional)",
    definition:
      "Área responsável pelo capital humano da empresa: desde rotinas de departamento pessoal até treinamento, avaliação de desempenho e desenvolvimento dos colaboradores.",
  },
  {
    id: "reciclagem",
    term: "Treinamento de Reciclagem",
    definition:
      "Treinamento obrigatório de atualização, realizado a cada 3 anos (ou antes, se houver mudança relevante em processos, sistemas ou legislação), para manter todos os colaboradores atualizados quanto a normas e boas práticas.",
  },
  {
    id: "implantacao",
    term: "Analista de Implantação",
    definition:
      "Profissional responsável por configurar um cliente novo: contatar o responsável, orientar sobre a operação, analisar a apólice de seguro, criar o PGR, montar macros e regras, e treinar o cliente no uso do sistema.",
  },
  {
    id: "perfil-securitario",
    term: "Perfil Securitário",
    definition:
      "Setor que analisa a documentação de motoristas, veículos e demais pesquisados, tratando pendências classificadas como \"Requer Atenção\" antes de liberar (ou não) a operação.",
  },
  {
    id: "geofencing",
    term: "Geofencing (cerca eletrônica)",
    definition:
      "Tecnologia que cria um perímetro virtual em um mapa; quando o veículo entra ou sai dessa área, o sistema gera automaticamente um alerta.",
  },
  {
    id: "tms",
    term: "TMS (Transportation Management System)",
    definition:
      "Sistema de gestão de transporte usado por embarcadores e transportadoras para planejar rotas, controlar fretes e acompanhar entregas — geralmente integrado a sistemas de rastreamento como o da Atlas.",
  },
  {
    id: "erp",
    term: "ERP (Enterprise Resource Planning)",
    definition: "Sistema integrado de gestão empresarial (financeiro, estoque, compras, etc.) que pode trocar dados com plataformas de rastreamento via API.",
  },
  {
    id: "eta",
    term: "ETA (Estimated Time of Arrival)",
    definition: "Previsão de horário de chegada de um veículo ao destino, calculada a partir da posição atual, rota e condições de tráfego.",
  },
  {
    id: "api",
    term: "API",
    definition: "Interface que permite que dois sistemas diferentes troquem dados automaticamente — por exemplo, o sistema de rastreamento enviando eventos para o TMS do cliente.",
  },
  {
    id: "kpi",
    term: "KPI (Key Performance Indicator)",
    definition: "Indicador-chave de desempenho usado para medir o resultado de um processo — por exemplo, percentual de cumprimento de SLA na tratativa de alertas.",
  },
  {
    id: "lgpd",
    term: "LGPD (Lei Geral de Proteção de Dados)",
    definition:
      "Lei brasileira (13.709/2018) que regula a coleta, o uso e o armazenamento de dados pessoais, exigindo consentimento do titular e finalidade clara para o tratamento das informações.",
    atlasUsage: "Toda operação de monitoramento envolve dados pessoais de motoristas e colaboradores, por isso o cadastro deste portal solicita consentimento explícito.",
  },
  {
    id: "iso-31000",
    term: "ISO 31000",
    definition: "Norma internacional que estabelece princípios e diretrizes genéricas para gestão de riscos, aplicável a qualquer tipo de organização.",
  },
  {
    id: "antt",
    term: "ANTT",
    definition: "Agência Nacional de Transportes Terrestres — órgão federal que regula e fiscaliza o transporte rodoviário e ferroviário de cargas e passageiros no Brasil.",
  },
  {
    id: "cnt",
    term: "CNT",
    definition: "Confederação Nacional do Transporte — entidade que representa o setor de transporte no Brasil e produz pesquisas e estatísticas do setor.",
  },
  {
    id: "rntrc",
    term: "RNTRC (Registro Nacional de Transportadores Rodoviários de Cargas)",
    definition:
      "Cadastro obrigatório da ANTT para transportadoras rodoviárias de carga. As apólices de RCTR-C e RC-DC exigidas pela Lei nº 14.599/2023 são vinculadas ao RNTRC da transportadora.",
    atlasUsage: "Referenciado no treinamento sobre a Lei nº 14.599/2023, que trata das mudanças em seguros de carga obrigatórios.",
  },
  {
    id: "rctr-c",
    term: "RCTR-C",
    definition:
      "Responsabilidade Civil do Transportador Rodoviário de Cargas: seguro obrigatório (Lei nº 14.599/2023) que cobre perdas ou danos à carga causados por acidente do veículo transportador — colisão, tombamento, capotagem, incêndio ou explosão.",
    importance: "É um dos três seguros que todo transportador rodoviário de cargas passou a ser obrigado a contratar desde a Medida Provisória nº 1.153 (dez/2022).",
    atlasUsage: "Tema do treinamento interno sobre a Nova Lei de Seguros, vinculado ao PGR de cada cliente.",
  },
  {
    id: "rc-dc",
    term: "RC-DC (Responsabilidade Civil do Transportador Rodoviário por Desaparecimento de Carga)",
    definition:
      "Seguro obrigatório desde a Lei nº 14.599/2023 que cobre roubo, furto, apropriação indébita, estelionato ou extorsão sofridos pela carga durante o transporte. É o sucessor, agora obrigatório, do que o mercado já chamava de RCF-DC quando essa cobertura ainda era facultativa.",
    atlasUsage: "Vinculado ao PGR de cada cliente, conforme exigido pela Nova Lei de Seguros.",
  },
  {
    id: "rc-v",
    term: "RC-V (Responsabilidade Civil de Veículos)",
    definition:
      "Seguro obrigatório, novidade trazida pela Lei nº 14.599/2023, que cobre danos corporais e materiais causados a terceiros pelo veículo usado no transporte de cargas. Pode ser contratado para a frota toda, com cobertura mínima de 35.000 DES para danos corporais e 20.000 DES para danos materiais.",
    atlasUsage: "Um dos três seguros obrigatórios tratados no treinamento interno sobre a Nova Lei de Seguros.",
  },
  {
    id: "susep",
    term: "SUSEP",
    definition: "Superintendência de Seguros Privados — autarquia federal que regula e fiscaliza o mercado de seguros no Brasil, incluindo apólices de transporte como a RCF-DC.",
  },
  {
    id: "faceid",
    term: "FaceID (biometria facial)",
    definition:
      "Validação biométrica facial usada para confirmar que a pessoa realizando um cadastro ou embarque é de fato o motorista documentado — comparando uma foto capturada no momento com a foto de referência do cadastro.",
    importance: "Reduz o risco de um motorista diferente do cadastrado assumir a viagem sem o conhecimento da transportadora ou do embarcador.",
    atlasUsage: "Usado pelo Atlas Profile na etapa de aprovação de motoristas, junto com a checagem documental e de antecedentes.",
  },
  {
    id: "icp",
    term: "ICP (Ideal Customer Profile)",
    definition:
      "Perfil de cliente ideal: conjunto de características (porte, segmento, tipo de carga, maturidade em gestão de risco) que descrevem o cliente que mais se beneficia da solução e tem maior chance de fechar negócio.",
    atlasUsage: "Usado pelo processo comercial para priorizar prospecção e adaptar o discurso de vendas conforme o perfil do cliente (transportadora, embarcador ou operador logístico).",
  },
];

export function findGlossaryTerm(id: string): GlossaryTerm | undefined {
  return glossary.find((g) => g.id === id);
}
glossary.push({
  id: "analytics",
  term: "Atlas Analytics",
  definition: "Produto do portfólio da AtlasGR focado em consolidar dados históricos e gerar dashboards executivos para tomada de decisão estratégica.",
  atlasUsage: "Usado para descobrir padrões e gargalos de eficiência, diferentemente do Connect que foca no tempo real.",
});
