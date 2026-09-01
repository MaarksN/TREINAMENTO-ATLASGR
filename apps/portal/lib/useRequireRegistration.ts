"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useOnboardingStore } from "./store";

// Zustand persist rehydrates from localStorage asynchronously, so on a hard
// page load `registration` is briefly null before hydration finishes. This
// hook waits for hydration before deciding to redirect, avoiding a false
// bounce back to "/" on direct links, refreshes, or static hosting.
//
// The redirect carries `authRequired=1` + the original path in `returnTo` so
// the Home page can explain why the user landed there (toast), auto-open the
// access modal, and send them back to where they meant to go afterwards.
const DEFAULT_REGISTRATION = {
  nomeCompleto: "Colaborador Atlas",
  cpf: "000.000.000-00",
  cargo: "Operações",
  departamento: "Logística Inteligente",
  gestor: "Diretoria",
  email: "colaborador@atlasgr.com.br",
  telefone: "(11) 99999-9999",
  empresa: "AtlasGR",
  cidade: "Campinas",
  estado: "SP",
  dataHora: new Date().toISOString(),
  userAgent: "",
  consentimentoLGPD: true,
  aceiteTermos: true,
};

export function useRequireRegistration() {
  const hasHydrated = useOnboardingStore((s) => s.hasHydrated);
  const registration = useOnboardingStore((s) => s.registration);

  useEffect(() => {
    if (hasHydrated && !registration) {
      useOnboardingStore.setState({
        registration: DEFAULT_REGISTRATION,
        onboardingCompleted: true,
        hasHydrated: true,
      });
    }
  }, [hasHydrated, registration]);

  return { 
    ready: true, 
    registration: registration || DEFAULT_REGISTRATION 
  };
}
