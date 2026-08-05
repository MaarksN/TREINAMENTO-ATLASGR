"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, KeyRound, ShieldCheck, UserRound } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { useOnboardingStore } from "@/lib/store";
import type { EnrolledColaborador } from "@/lib/types";
import WelcomeWizard from "@/components/onboarding/WelcomeWizard";

// O cadastro é feito exclusivamente pelo Administrador (painel /admin).
// Este modal é o "primeiro acesso": o colaborador seleciona o próprio nome e
// confirma com o código de acesso gerado no cadastro (evita que qualquer
// visitante entre na sessão de outra pessoa só clicando no nome dela).
export function AccessModal({
  open,
  onOpenChange,
  returnTo,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  returnTo?: string | null;
}) {
  const router = useRouter();
  const enrolled = useOnboardingStore((s) => s.enrolled);
  const registration = useOnboardingStore((s) => s.registration);
  const startSessionAs = useOnboardingStore((s) => s.startSessionAs);
  const onboardingCompleted = useOnboardingStore((s) => s.onboardingCompleted);
  const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);
  const [showWizard, setShowWizard] = useState(false);
  const [pendingColaborador, setPendingColaborador] = useState<EnrolledColaborador | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);

  // Se o colaborador já tem sessão iniciada mas abandonou o wizard antes de concluir,
  // reabrir o modal deve retomá-lo direto no wizard, sem pedir a seleção do nome de novo.
  const displayWizard = showWizard || (open && !!registration && !onboardingCompleted);

  function handlePickName(c: EnrolledColaborador) {
    setPendingColaborador(c);
    setCodeInput("");
    setCodeError(null);
  }

  function handleCancelCode() {
    setPendingColaborador(null);
    setCodeInput("");
    setCodeError(null);
  }

  function handleConfirmCode() {
    if (!pendingColaborador) return;
    if (codeInput.trim().toUpperCase() !== pendingColaborador.accessCode) {
      setCodeError("Código incorreto. Confira o código informado pelo Administrador no cadastro.");
      return;
    }
    const id = pendingColaborador.id;
    setPendingColaborador(null);
    setCodeInput("");
    setCodeError(null);
    handleSelect(id);
  }

  function handleSelect(id: string) {
    if (!startSessionAs(id)) return;
    if (onboardingCompleted) {
      onOpenChange(false);
      router.push(returnTo || "/trilha");
    } else {
      setShowWizard(true);
    }
  }

  function handleWizardComplete() {
    completeOnboarding();
    setShowWizard(false);
    onOpenChange(false);
    router.push(returnTo || "/trilha");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={displayWizard ? "max-w-2xl" : "max-w-md"}>
        {displayWizard ? (
          <WelcomeWizard onComplete={handleWizardComplete} />
        ) : pendingColaborador ? (
          <div className="p-6">
            <button
              onClick={handleCancelCode}
              className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Voltar
            </button>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-atlas text-white shadow-glow">
                <KeyRound size={20} />
              </span>
              <div>
                <DialogTitle className="font-display text-xl font-bold text-foreground">Confirme seu código</DialogTitle>
                <DialogDescription className="mt-0.5 text-sm text-muted">
                  {pendingColaborador.nomeCompleto} · digite o código de acesso informado pelo Administrador.
                </DialogDescription>
              </div>
            </div>

            <input
              autoFocus
              value={codeInput}
              onChange={(e) => {
                setCodeInput(e.target.value);
                setCodeError(null);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleConfirmCode()}
              placeholder="Ex.: A1B2C3"
              maxLength={8}
              className="mt-5 h-11 w-full rounded-lg border border-border bg-surface-2 px-3 text-center text-lg font-bold uppercase tracking-[0.3em] text-foreground outline-none transition focus:border-atlas-orange"
            />
            {codeError && <p className="mt-2 text-xs text-red-500">{codeError}</p>}

            <button
              onClick={handleConfirmCode}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-atlas px-4 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Confirmar e entrar
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-atlas text-white shadow-glow">
                <ShieldCheck size={20} />
              </span>
              <div>
                <DialogTitle className="font-display text-xl font-bold text-foreground">Primeiro acesso</DialogTitle>
                <DialogDescription className="mt-0.5 text-sm text-muted">
                  Selecione seu nome e confirme com o código de acesso informado pelo Administrador.
                </DialogDescription>
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-atlas-orange/30 bg-atlas-orange/10 px-3 py-1 text-xs font-semibold text-atlas-orange">
              + R$ 169 Bilhões monitorados pela operação AtlasGR
            </div>

            {enrolled.length === 0 ? (
              <div className="mt-6 rounded-xl border border-dashed border-border p-6 text-center">
                <KeyRound size={28} className="mx-auto mb-3 text-muted" />
                <p className="text-sm text-muted">
                  Nenhum colaborador foi cadastrado ainda. Peça ao Administrador para te cadastrar no{" "}
                  <Link href="/admin" className="font-medium text-atlas-orange hover:underline" onClick={() => onOpenChange(false)}>
                    painel administrativo
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="mt-5 max-h-80 space-y-2 overflow-y-auto">
                {enrolled.map((c, i) => (
                  <motion.button
                    key={c.id}
                    onClick={() => handlePickName(c)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                    className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-atlas-orange hover:bg-surface-2 hover:shadow-glow"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-atlas text-white">
                      <UserRound size={16} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">{c.nomeCompleto}</span>
                      <span className="block text-xs text-muted">
                        {c.cargo} · {c.departamento}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            )}

            <p className="mt-5 text-center text-xs text-muted">
              Protótipo de demonstração — os dados ficam salvos apenas neste navegador (localStorage).
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

