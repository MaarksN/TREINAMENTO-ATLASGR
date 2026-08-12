"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Lock, ShieldAlert } from "lucide-react";

const SESSION_KEY = "atlasgr-admin-unlocked";

// Protótipo sem backend: este PIN só evita que qualquer visitante que clique
// num link caia direto no painel administrativo. Não é controle de acesso
// real (o PIN fica no bundle do cliente) — numa versão com backend, /admin
// precisa de autenticação de verdade (sessão de servidor, SSO, etc.).
const ADMIN_PIN = "ATLASGR2026";

export function AdminGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setUnlocked(typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1");
      setChecked(true);
    });
  }, []);

  function handleSubmit() {
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) return null;

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 text-center shadow-2xl">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-atlas text-white shadow-glow">
            <Lock size={20} />
          </span>
          <h1 className="mt-4 font-display text-xl font-bold text-foreground">Área restrita</h1>
          <p className="mt-1 text-sm text-muted">Informe o PIN de administrador para continuar.</p>

          <input
            autoFocus
            type="password"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="PIN de administrador"
            className="mt-5 h-11 w-full rounded-lg border border-border bg-surface-2 px-3 text-center text-sm font-semibold outline-none transition focus:border-atlas-orange"
          />
          {error && (
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-red-500">
              <ShieldAlert size={14} /> PIN incorreto.
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="mt-5 w-full rounded-xl bg-gradient-atlas px-4 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            Entrar
          </button>

          <p className="mt-5 text-xs text-muted">
            Protótipo de demonstração — este PIN não substitui autenticação real numa versão em produção.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
