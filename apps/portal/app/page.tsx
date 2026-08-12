"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { useOnboardingStore } from "@/lib/store";
import { useToastStore } from "@/lib/toastStore";

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const showToast = useToastStore((s) => s.show);

  const registration = useOnboardingStore((state) => state.registration);
  const onboardingCompleted = useOnboardingStore((state) => state.onboardingCompleted);

  const canContinue = Boolean(registration && onboardingCompleted);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("authRequired") === "1") {
      queueMicrotask(() => {
        setReturnTo(params.get("returnTo"));
        setModalOpen(true);
        showToast({

        title: "Faça seu primeiro acesso",
        description: "Selecione seu nome e confirme o código de acesso para continuar.",
        variant: "info",
        });
      });
      window.history.replaceState({}, "", "/");
    }
  }, [showToast]);

  function handleStart() {
    if (canContinue) {
      router.push("/trilha");
      return;
    }
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-atlas-orange selection:text-white overflow-hidden">
      <SiteHeader hideNavLinks />

      {/* A Primeira Página contém APENAS o Boas-Vindas e o Botão INICIAR ONBOARDING com tipografia e alinhamento ajustados */}
      <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-12 text-center my-auto">
        {/* Logo oficial proeminente */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <Logo className="h-16 w-auto sm:h-20 md:h-24" />
        </motion.div>

        {/* Título Principal — Tipografia Fluida */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.08] tracking-tight text-foreground mb-6"
        >
          Bem-vindo à <span className="text-gradient-atlas bg-clip-text">ATLASGR</span>
        </motion.h1>

        {/* Subtítulo — Ajuste de Tamanho e Espaçamento */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl font-medium text-muted leading-relaxed mb-12"
        >
          Conectamos pessoas e tecnologia, gerando valor com <strong className="text-foreground font-bold">segurança</strong> e <strong className="text-foreground font-bold">inovação</strong>.
          Sua evolução na logística inteligente começa agora.
        </motion.p>

        {/* Botão Único Laranja Gradiente: INICIAR ONBOARDING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center gap-4 rounded-2xl bg-gradient-atlas px-10 py-5 sm:px-12 sm:py-6 font-display text-lg sm:text-xl font-black uppercase tracking-wider text-white shadow-2xl shadow-atlas-orange/40 transition-all duration-300 hover:scale-105 hover:shadow-atlas-orange/60 focus-visible-ring"
          >
            <span>{canContinue ? "RETOMAR ONBOARDING" : "INICIAR ONBOARDING"}</span>
            <Rocket className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </main>

      <footer className="border-t border-border/40 py-6 text-center text-xs sm:text-sm font-semibold text-muted">
        © {new Date().getFullYear()} ATLASGR. Todos os direitos reservados.
      </footer>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} returnTo={returnTo} />
    </div>
  );
}
