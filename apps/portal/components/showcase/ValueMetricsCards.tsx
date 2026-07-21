"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck } from "lucide-react";

const metrics = [
  {
    id: 1,
    title: "Embarcador de Combustível",
    value: "R$ 95M",
    label: "economizados em perdas",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    id: 2,
    title: "Embarcador de Suco",
    value: "-26%",
    label: "tempo em fazendas",
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    id: 3,
    title: "Operação Varejo",
    value: "99.8%",
    label: "aderência à apólice",
    icon: TrendingUp,
    color: "text-atlas-orange",
    bg: "bg-atlas-orange/10",
  },
];

export default function ValueMetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative"
          >
            {/* Background Glow */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity ${metric.bg.replace('/10', '')}`} />
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${metric.bg}`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <h3 className="text-gray-400 font-medium text-sm">{metric.title}</h3>
            </div>
            
            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white font-secondary tracking-tight">
                  {metric.value}
                </span>
              </div>
              <p className="text-gray-500 mt-1 uppercase tracking-wider text-xs font-semibold">
                {metric.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
