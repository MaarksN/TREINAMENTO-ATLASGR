"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Trophy } from "lucide-react";
import { playUiSound } from "@/lib/soundEngine";
import { useOnboardingStore } from "@/lib/store";

const MESSAGES_BY_ROUTE: Record<string, string[]> = {
  "/": [
    "Olá, Operador! Bem-vindo à Plataforma de Formação AtlasGR! 🚀",
    "Clique no botão 'INICIAR ONBOARDING' para iniciar suas missões corporativas!",
    "Dica: Esta plataforma foi projetada para sua evolução contínua em logística inteligente.",
  ],
  "/trilha": [
    "Aqui estão suas 15 Missões Operacionais dispostas em ordem tática! 📋",
    "Complete os módulos para acumular XP, subir de nível e desbloquear conquistas!",
    "Dica: Cada módulo possui um simulador de fixação ao final.",
  ],
  "/dashboard": [
    "Bem-vindo ao seu Cockpit de Operações! ⚡",
    "Acompanhe suas estatísticas de XP, nível atual e conquistas desbloqueadas!",
  ],
  "/prova-final": [
    "Atenção, Operador! Esta é a Prova Final de Qualificação Profissional! 🎯",
    "Você terá 60 minutos para responder às questões. Nota mínima para aprovação: 80%.",
  ],
  "/certificado": [
    "Parabéns pelo seu empenho! 📜",
    "Este é o seu Certificado Oficial impresso com assinatura digital e QR Code de verificação!",
  ],
};

export function AssistantBalloon() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const registration = useOnboardingStore((s) => s.registration);
  const xp = useOnboardingStore((s) => s.xp);

  const routeKey = Object.keys(MESSAGES_BY_ROUTE).find(r => r === pathname || (r !== "/" && pathname?.startsWith(r))) || "/";
  const messages = MESSAGES_BY_ROUTE[routeKey] || MESSAGES_BY_ROUTE["/"];
  const currentMsg = messages[msgIndex % messages.length];

  useEffect(() => {
    setMsgIndex(0);
    setIsOpen(true);
    playUiSound("pop");
  }, [pathname]);

  function nextMessage() {
    playUiSound("click");
    setMsgIndex((prev) => (prev + 1) % messages.length);
  }

  const userName = registration?.nomeCompleto ? registration.nomeCompleto.split(" ")[0] : "Operador";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-3 max-w-sm rounded-3xl bg-surface/95 border-2 border-atlas-orange/40 p-5 shadow-2xl shadow-atlas-orange/20 backdrop-blur-xl relative"
          >
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b-2 border-r-2 border-atlas-orange/40 bg-surface" />

            <div className="flex items-center justify-between border-b border-border/50 pb-2.5 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-atlas text-white shadow-sm">
                  <Sparkles size={14} className="animate-spin-slow" />
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-gradient-atlas">
                  Assistente Atlas • {userName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-muted hover:text-foreground transition focus-visible-ring"
                title="Minimizar Assistente"
              >
                <X size={14} />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-medium leading-relaxed text-foreground/90 my-2">
              &ldquo;{currentMsg}&rdquo;
            </p>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40">
              <span className="text-[10px] font-bold uppercase text-muted tracking-widest flex items-center gap-1">
                <Trophy size={12} className="text-atlas-orange" /> {xp} XP Acumulados
              </span>
              {messages.length > 1 && (
                <button
                  type="button"
                  onClick={nextMessage}
                  className="text-[11px] font-bold text-atlas-orange hover:underline transition focus-visible-ring"
                >
                  Próxima Dica &rarr;
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          playUiSound("pop");
          setIsOpen((v) => !v);
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-atlas text-white shadow-2xl shadow-atlas-orange/50 border-2 border-white/20 focus-visible-ring group relative"
        title="Assistente de Bordo AtlasGR"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black">
          !
        </span>
      </motion.button>
    </div>
  );
}
