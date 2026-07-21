// Dados fictícios apenas para ilustrar como os dashboards ficariam com uma base
// real de colaboradores (não há backend/BD nesta fase do protótipo). Nomes e
// números são inventados e não representam pessoas reais.
export interface SeedCollaborator {
  nome: string;
  cargo: string;
  departamento: string;
  status: "concluido" | "andamento" | "reprovado" | "nao-iniciado";
  progresso: number;
  notaMedia: number;
  tempoEstudadoMin: number;
  ultimoAcesso: string;
}

export const seedCollaborators: SeedCollaborator[] = [
  { nome: "Ana Beatriz Souza", cargo: "Operador de Rastreamento", departamento: "Operações", status: "concluido", progresso: 100, notaMedia: 92, tempoEstudadoMin: 210, ultimoAcesso: "2026-07-18" },
  { nome: "Bruno Almeida", cargo: "Operador de Rastreamento", departamento: "Operações", status: "andamento", progresso: 60, notaMedia: 78, tempoEstudadoMin: 140, ultimoAcesso: "2026-07-19" },
  { nome: "Carla Nogueira", cargo: "Analista CIA I", departamento: "Operações", status: "concluido", progresso: 100, notaMedia: 96, tempoEstudadoMin: 260, ultimoAcesso: "2026-07-15" },
  { nome: "Diego Martins", cargo: "Analista de Implantação", departamento: "Operações", status: "reprovado", progresso: 100, notaMedia: 58, tempoEstudadoMin: 190, ultimoAcesso: "2026-07-12" },
  { nome: "Elisa Ferreira", cargo: "Supervisora", departamento: "Operações", status: "andamento", progresso: 40, notaMedia: 84, tempoEstudadoMin: 95, ultimoAcesso: "2026-07-20" },
  { nome: "Felipe Rocha", cargo: "Operador de Rastreamento", departamento: "Operações", status: "nao-iniciado", progresso: 0, notaMedia: 0, tempoEstudadoMin: 0, ultimoAcesso: "—" },
  { nome: "Gabriela Lima", cargo: "Analista Perfil Securitário", departamento: "Operações", status: "concluido", progresso: 100, notaMedia: 88, tempoEstudadoMin: 175, ultimoAcesso: "2026-07-17" },
  { nome: "Henrique Barros", cargo: "Analista Comercial", departamento: "Comercial", status: "andamento", progresso: 20, notaMedia: 70, tempoEstudadoMin: 45, ultimoAcesso: "2026-07-20" },
];

export const demoKpis = {
  questoesMaisErradas: [
    { pergunta: "O que é 'sublimite' em uma apólice de seguro?", errosPct: 34 },
    { pergunta: "Quantas permissões uma GR pode ter associada a um veículo?", errosPct: 27 },
    { pergunta: "O que é o 'Consolidado SM' no Atlas Connect?", errosPct: 21 },
  ],
  questoesMaisAcertadas: [
    { pergunta: "Em que ano a Atlas foi fundada?", acertosPct: 97 },
    { pergunta: "O uso de celular pessoal é permitido na sala de operação?", acertosPct: 94 },
  ],
  abandonoPct: 12,
  engajamentoPct: 76,
};
