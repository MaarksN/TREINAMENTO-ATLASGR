"use client";

import { motion } from "framer-motion";
import { Truck, Signal, ShieldAlert, Users, Navigation } from "lucide-react";

const nodes = [
  { id: "event", title: "Evento", subtitle: "Rastreador Perde Sinal", icon: Truck, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
  { id: "connect", title: "Atlas Connect", subtitle: "Regra Acionada", icon: Signal, color: "text-atlas-orange", bg: "bg-atlas-orange/10", border: "border-atlas-orange/50" },
  { id: "torre", title: "Torre de Controle", subtitle: "Tratativa Inicial", icon: Navigation, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
  { id: "cia", title: "C.I.A", subtitle: "Escalada de Risco", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/50" },
  { id: "police", title: "Ação Rápida", subtitle: "Escolta / Polícia", icon: Users, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
];

export default function ArchitectureFlow() {
  return (
    <div className="w-full py-12 px-4 overflow-x-auto">
      <div className="min-w-[800px] flex items-center justify-between relative">
        {/* Animated Connecting Line */}
        <div className="absolute top-1/2 left-10 right-10 h-1 -translate-y-1/2 bg-white/5 z-0" />
        <motion.div
          className="absolute top-1/2 left-10 h-1 -translate-y-1/2 bg-atlas-orange z-0 shadow-glow"
          initial={{ width: "0%" }}
          animate={{ width: "calc(100% - 80px)" }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
        />

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center border backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2
                  ${node.bg} ${node.border}`}
              >
                <Icon className={`w-10 h-10 ${node.color}`} />
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-white font-bold whitespace-nowrap">{node.title}</h4>
                <p className="text-gray-400 text-sm whitespace-nowrap">{node.subtitle}</p>
              </div>

              {/* Pulse effect for the active node logic */}
              {index === 1 && (
                <div className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-atlas-orange/20 animate-ping -z-10" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
