const Fuse = require('fuse.js');

const modulosTreinamento = [
  { id: 1, titulo: "Metodologia de Vendas & Prospector B2B", categoria: "Vendas", nivel: "Iniciante" },
  { id: 2, titulo: "Plataforma Total Trac & Telemetria", categoria: "Operações", nivel: "Intermediário" },
  { id: 3, titulo: "Uso Ético de IA no Atendimento", categoria: "Inteligência Artificial", nivel: "Avançado" }
];

const fuseOptions = {
  keys: ['titulo', 'categoria', 'nivel'],
  threshold: 0.3
};

const fuse = new Fuse(modulosTreinamento, fuseOptions);

function buscarAulas(termo) {
  return fuse.search(termo).map(res => res.item);
}

module.exports = { buscarAulas, modulosTreinamento };
