"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";

const tableData = [
  { id: 1, type: "Fazenda", name: "Fazenda Rio Grande", mediaHoras: 14.5, sla: 12, status: "breach" },
  { id: 2, type: "Fábrica", name: "Fábrica SP-Capital", mediaHoras: 4.2, sla: 6, status: "ok" },
  { id: 3, type: "Fazenda", name: "Fazenda Boa Vista", mediaHoras: 18.1, sla: 12, status: "breach" },
  { id: 4, type: "Fábrica", name: "Fábrica MG-Sul", mediaHoras: 5.5, sla: 6, status: "ok" },
  { id: 5, type: "Fazenda", name: "Fazenda Alvorada", mediaHoras: 11.2, sla: 12, status: "ok" },
];

export default function TempoEmAlvosTable() {
  return (
    <div className="w-full bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-white/5 bg-white/5">
        <h3 className="text-white font-semibold">Tempo de Permanência em Alvos</h3>
        <p className="text-xs text-gray-500 mt-1">Comparativo de SLA vs Média Realizada (Horas)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs uppercase bg-black/40 text-gray-500 border-b border-white/5">
            <tr>
              <th scope="col" className="px-6 py-4">Alvo</th>
              <th scope="col" className="px-6 py-4">Tipo</th>
              <th scope="col" className="px-6 py-4">Média (h)</th>
              <th scope="col" className="px-6 py-4">SLA (h)</th>
              <th scope="col" className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => {
              const isBreach = row.status === "breach";
              return (
                <tr 
                  key={row.id} 
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${isBreach ? "bg-red-500/5" : ""}`}
                >
                  <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-white/10 px-2 py-1 rounded text-xs">
                      {row.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-bold ${isBreach ? "text-red-400" : "text-white"}`}>
                    {row.mediaHoras.toFixed(1)}h
                  </td>
                  <td className="px-6 py-4 text-gray-500">{row.sla}h</td>
                  <td className="px-6 py-4">
                    {isBreach ? (
                      <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-2 py-1 rounded w-fit">
                        <AlertCircle className="w-4 h-4" />
                        <span>SLA Estourado</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-2 py-1 rounded w-fit">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Dentro do SLA</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
