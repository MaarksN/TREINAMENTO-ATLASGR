"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Trophy } from "lucide-react";
import { playUiSound } from "@/lib/soundEngine";
import { useOnboardingStore } from "@/lib/store";

const MESSAGES_BY_ROUTE: Record<string, string[]> = {
  "/": [
    "Bem-vindo à Academia ATLASGR. Aqui o objetivo é entender, praticar e validar o que você consegue aplicar no trabalho. 🎓",
    "Comece pelo onboarding e siga a trilha. Você poderá ouvir as aulas, usar legendas e abrir o intérprete de LIBRAS.",
    "Dica: não tente apenas memorizar. Explique os conceitos com suas palavras e use os laboratórios práticos para testar seu raciocínio.",
  ],
  "/trilha": [
    "A trilha reúne 15 módulos, com microaulas multimídia, prática, revisão e avaliação.",
    "Use sua rota personalizada para priorizar os conteúdos mais próximos da sua função, sem pular o currículo completo.",
    "Dica: o mapa de domínio mostra onde seu resultado já é consistente e onde vale revisar primeiro.",
  ],
  "/dashboard": [
    "Este painel usa apenas o seu progresso registrado: módulos validados, resultados e próxima ação recomendada.",
    "Se uma categoria estiver mais fraca, volte ao módulo, refaça a prática e depois teste novamente o domínio.",
  ],
  "/prova-final": [
    "A prova final integra os 15 módulos e só é liberada depois que todos eles forem validados. 🎯",
    "Você terá 45 minutos para responder a 30 questões balanceadas, com duas questões de cada módulo. A aprovação exige 80%.",
  ],
  "/certificado": [
    "Parabéns pela conclusão da etapa de formação. 📜",
    "O certificado registra sua conclusão no portal. Ele não substitui alçada, treinamento prático supervisionado ou autorizações específicas da função.",
  ],
};

export function AssistantBalloon() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const registration = useOnboardingStore((s) => s.registration);
  const xp = useOnboardingStore((s) => s.xp);

  const routeKey = Object.keys(MESSAGES_BY_ROUTE).find((route) => route === pathname || (route !== "/" && pathname?.startsWith(route))) || "/";
  const messages = MESSAGES_BY_ROUTE[routeKey] || MESSAGES_BY_ROUTE["/"];
  const currentMsg = messages[msgIndex % messages.length];

  useEffect(() => {
    setTimeout(() => {
      setMsgIndex(0);
      setIsOpen(true);
      playUiSound("pop");
    }, 0);
  }, [pathname]);

  function nextMessage() {
    playUiSound("click");
    setMsgIndex((previous) => (previous + 1) % messages.length);
  }

  const userName = registration?.nomeCompleto ? registration.nomeCompleto.split(" ")[0] : "Aluno";

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
                  Mentor da Academia • {userName}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-muted hover:text-foreground transition focus-visible-ring"
                title="Minimizar mentor"
              >
                <X size={14} />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-medium leading-relaxed text-foreground/90 my-2">
              &ldquo;{currentMsg}&rdquo;
            </p>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40">
              <span className="text-[10px] font-bold uppercase text-muted tracking-widest flex items-center gap-1">
                <Trophy size={12} className="text-atlas-orange" /> {xp} XP de aprendizagem
              </span>
              {messages.length > 1 && (
                <button
                  type="button"
                  onClick={nextMessage}
                  className="text-[11px] font-bold text-atlas-orange hover:underline transition focus-visible-ring"
                >
                  Próxima dica &rarr;
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
          setIsOpen((value) => !value);
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-atlas text-white shadow-2xl shadow-atlas-orange/50 border-2 border-white/20 focus-visible-ring group relative"
        title="Mentor da Academia ATLASGR"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black">
          !
        </span>
      </motion.button>
    </div>
  );
}
