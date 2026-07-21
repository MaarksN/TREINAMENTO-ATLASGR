"use client";

import { motion } from "framer-motion";
import { LiveBackground } from "../ui/LiveBackground";

export function CinematicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LiveBackground />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Centro de Comando <br className="hidden md:block" />
          <span className="text-gradient-atlas bg-clip-text text-transparent bg-gradient-to-r from-atlas-orange to-atlas-orange-2">
            ATLASGR
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Monitoramento, inteligência e alta performance logística.
          Onde cada decisão vale milhões.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-atlas-orange text-white rounded-md font-semibold tracking-wide transition-all hover:bg-atlas-orange-2 hover:shadow-glow hover:scale-105">
            Acessar Cockpit
          </button>
          <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-md font-semibold tracking-wide backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105">
            Ver Casos de Sucesso
          </button>
        </motion.div>

        {/* Floating Stats Bar */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-xl flex gap-12 w-max"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">1.400.000+</span>
            <span className="text-sm text-atlas-orange uppercase tracking-wider font-semibold">Viagens Monitoradas</span>
          </div>
          <div className="w-px bg-white/20 h-12" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">R$ 210 Bi</span>
            <span className="text-sm text-atlas-orange uppercase tracking-wider font-semibold">Carga Protegida</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
