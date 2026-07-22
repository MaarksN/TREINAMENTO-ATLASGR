"use client";

import { motion } from "framer-motion";

const incidents = [
  { id: 1, x: 20, y: 30, severity: "high", label: "SP-334" },
  { id: 2, x: 50, y: 60, severity: "medium", label: "BR-116" },
  { id: 3, x: 70, y: 20, severity: "high", label: "RJ-104" },
  { id: 4, x: 35, y: 70, severity: "low", label: "PR-323" },
  { id: 5, x: 80, y: 80, severity: "medium", label: "MG-050" },
];

export default function MapaDoCrime() {
  return (
    <div className="w-full h-[400px] bg-[#0d1117] rounded-xl border border-white/10 relative overflow-hidden flex flex-col">
      <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center z-10">
        <h3 className="text-white font-semibold">Risk Heatmap: Principais Rodovias</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="text-gray-400">Alto Risco</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-atlas-orange shadow-[0_0_8px_rgba(255,86,24,0.8)]" />
            <span className="text-gray-400">Médio</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full h-full">
        {/* Abstract grid background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* SVG Map Path (Abstract representation of Brazil/Southeast) */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M 10 90 Q 30 10 50 50 T 90 10" 
            fill="none" 
            stroke="rgba(255, 86, 24, 0.5)" 
            strokeWidth="0.5" 
            strokeDasharray="2 2"
          />
           <path 
            d="M 20 80 Q 40 40 70 80 T 100 40" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.2)" 
            strokeWidth="0.5" 
          />
        </svg>

        {/* Incident Markers */}
        {incidents.map((incident) => {
          const isHigh = incident.severity === "high";
          const isMedium = incident.severity === "medium";
          
          const color = isHigh ? "bg-red-500" : isMedium ? "bg-atlas-orange" : "bg-purple-500";
          const shadowColor = isHigh ? "rgba(239,68,68,0.6)" : isMedium ? "rgba(255,86,24,0.6)" : "rgba(168,85,247,0.6)";

          return (
            <motion.div
              key={incident.id}
              className="absolute flex flex-col items-center group cursor-pointer"
              style={{ left: `${incident.x}%`, top: `${incident.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: incident.id * 0.2 }}
            >
              {/* Pulse effect for high severity */}
              {isHigh && (
                <div 
                  className={`absolute w-8 h-8 rounded-full ${color} animate-ping opacity-20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`} 
                />
              )}
              
              <div 
                className={`w-3 h-3 rounded-full ${color} z-10 transition-transform group-hover:scale-150`}
                style={{ boxShadow: `0 0 10px ${shadowColor}` }}
              />
              
              <div className="absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-xs text-white whitespace-nowrap z-20 pointer-events-none">
                {incident.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
