"use client";

import { useState, useEffect } from "react";
import { Terminal, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  { text: "INICIANDO CONSULTA PROFILE V2.4", type: "system", delay: 0 },
  { text: "Lendo CNH: 12345678900", type: "info", delay: 500 },
  { text: "Verificando biometria FaceID...", type: "process", delay: 1500 },
  { text: "FaceID VALIDADO: Match 99.8%", type: "success", delay: 3000 },
  { text: "Consultando processos judiciais...", type: "process", delay: 3500 },
  { text: "Processos encontrados: 0", type: "success", delay: 5500 },
  { text: "Verificando CNH MOPP / Cargas Perigosas", type: "process", delay: 6000 },
  { text: "CNH REGULAR - Categoria E", type: "success", delay: 7500 },
  { text: "APROVAÇÃO CONCEDIDA: SLA 3m12s", type: "success", delay: 8500 },
];

export default function TerminalWindow() {
  const [lines, setLines] = useState<typeof terminalLines>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    terminalLines.forEach((line) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, line.delay);
      timeoutIds.push(id);
    });

    const finishId = setTimeout(() => {
      setIsFinished(true);
    }, 9000);
    timeoutIds.push(finishId);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-lg rounded-lg overflow-hidden border border-white/10 bg-[#0d1117] shadow-2xl font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-gray-400 text-xs">
          <Terminal className="w-3 h-3" />
          <span>atlas-profile-engine</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[300px] overflow-y-auto relative">
        <div className="space-y-2">
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2"
              >
                <span className="text-gray-500 select-none">{`>`}</span>
                <span
                  className={
                    line.type === "system"
                      ? "text-blue-400 font-bold"
                      : line.type === "success"
                      ? "text-green-400 font-semibold"
                      : line.type === "info"
                      ? "text-gray-300"
                      : "text-yellow-400"
                  }
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          {!isFinished && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-gray-400 ml-2 align-middle"
            />
          )}
        </div>

        {/* Overlay on finish */}
        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-green-900/20 backdrop-blur-[2px] flex items-center justify-center border-t-2 border-green-500/50"
            >
              <div className="bg-[#0d1117] border border-green-500/30 px-6 py-4 rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.2)] flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <div>
                  <h4 className="text-green-400 font-bold text-lg">Perfil Aprovado</h4>
                  <p className="text-gray-400 text-xs mt-1">SLA cumprido: Menos de 5 minutos</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
