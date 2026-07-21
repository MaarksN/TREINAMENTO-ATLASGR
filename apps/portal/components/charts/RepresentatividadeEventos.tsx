"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Distração", value: 43, color: "#FF5618" },
  { name: "Fadiga", value: 20, color: "#8b5cf6" },
  { name: "Uso de Celular", value: 13, color: "#3b82f6" },
  { name: "Bocejo", value: 3, color: "#10b981" },
  { name: "Outros", value: 21, color: "#6b7280" },
];

export default function RepresentatividadeEventos() {
  return (
    <div className="w-full h-[400px] bg-[#0d1117] rounded-xl border border-white/10 p-4 flex flex-col">
      <h3 className="text-white font-semibold mb-2">Representatividade de Eventos (Fadiga/Distração)</h3>
      <div className="flex-1 w-full h-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              formatter={(value) => <span className="text-gray-300 text-xs">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
