"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { KeyRound, UserRound } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { useOnboardingStore } from "@/lib/store";

// O cadastro é feito exclusivamente pelo Administrador (painel /admin).
// Este modal é o "primeiro acesso": o colaborador apenas seleciona o
// próprio nome dentre os já cadastrados pelo admin — sem preencher formulário.
export function AccessModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter();
  const enrolled = useOnboardingStore((s) => s.enrolled);
  const startSessionAs = useOnboardingStore((s) => s.startSessionAs);

  function handleSelect(id: string) {
    if (startSessionAs(id)) {
      onOpenChange(false);
      router.push("/trilha");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogTitle className="font-display text-xl font-bold text-foreground">Primeiro acesso</DialogTitle>
        <DialogDescription className="mt-1 text-sm text-muted">
          Seu cadastro é feito pelo Administrador do onboarding. Selecione seu nome na lista para começar —
          nenhum formulário é necessário.
        </DialogDescription>

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
            {enrolled.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelect(c.id)}
                className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-atlas-orange hover:bg-surface-2"
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
              </button>
            ))}
          </div>
        )}

        <p className="mt-5 text-center text-xs text-muted">
          Protótipo de demonstração — os dados ficam salvos apenas neste navegador (localStorage).
        </p>
      </DialogContent>
    </Dialog>
  );
}

