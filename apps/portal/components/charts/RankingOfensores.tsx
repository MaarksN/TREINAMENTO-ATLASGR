"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { driver: "João Silva", deviations: 45 },
  { driver: "Carlos Souza", deviations: 38 },
  { driver: "Marcos Lima", deviations: 32 },
  { driver: "André Santos", deviations: 25 },
  { driver: "Felipe Costa", deviations: 19 },
];

export default function RankingOfensores() {
  return (
    <div className="w-full h-[400px] bg-[#0d1117] rounded-xl border border-white/10 p-4 flex flex-col">
      <h3 className="text-white font-semibold mb-6">Ranking de Ofensores (Desvios de Rota/Paradas)</h3>
      <div className="flex-1 w-full h-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
            <XAxis type="number" stroke="#666" tick={{ fill: "#888", fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="driver" 
              stroke="#666" 
              tick={{ fill: "#ccc", fontSize: 12 }} 
              width={100}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              contentStyle={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              itemStyle={{ color: "#FF5618" }}
            />
            <Bar 
              dataKey="deviations" 
              fill="#FF5618" 
              radius={[0, 4, 4, 0]} 
              barSize={24}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
