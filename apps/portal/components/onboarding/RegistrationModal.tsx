"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { useOnboardingStore } from "@/lib/store";
import type { RegistrationData } from "@/lib/types";

const fields: { key: keyof typeof emptyForm; label: string; required?: boolean; type?: string }[] = [
  { key: "nomeCompleto", label: "Nome completo", required: true },
  { key: "cpf", label: "CPF", required: true },
  { key: "cargo", label: "Cargo", required: true },
  { key: "departamento", label: "Departamento", required: true },
  { key: "gestor", label: "Gestor(a) responsável" },
  { key: "email", label: "E-mail", required: true, type: "email" },
  { key: "telefone", label: "Telefone" },
  { key: "empresa", label: "Empresa", required: true },
  { key: "cidade", label: "Cidade" },
  { key: "estado", label: "Estado" },
];

const emptyForm = {
  nomeCompleto: "",
  cpf: "",
  cargo: "",
  departamento: "",
  gestor: "",
  email: "",
  telefone: "",
  empresa: "ATLASGR",
  cidade: "",
  estado: "",
};

export function RegistrationModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter();
  const register = useOnboardingStore((s) => s.register);
  const [form, setForm] = useState(emptyForm);
  const [consentLGPD, setConsentLGPD] = useState(false);
  const [aceiteTermos, setAceiteTermos] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const missingRequired = fields.filter((f) => f.required && !form[f.key].trim());
  const canSubmit = missingRequired.length === 0 && consentLGPD && aceiteTermos;

  function handleSubmit() {
    setSubmitted(true);
    if (!canSubmit) return;

    const now = new Date();
    const data: RegistrationData = {
      ...form,
      dataHora: now.toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      consentimentoLGPD: consentLGPD,
      aceiteTermos,
    };
    register(data);
    onOpenChange(false);
    router.push("/trilha");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogTitle className="font-display text-xl font-bold text-foreground">
          Cadastro obrigatório de onboarding
        </DialogTitle>
        <DialogDescription className="mt-1 text-sm text-muted">
          Antes de iniciar a trilha, precisamos confirmar alguns dados. Este é um protótipo de demonstração — os
          dados abaixo ficam salvos apenas no seu navegador (localStorage) e não são enviados a nenhum servidor.
        </DialogDescription>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.key} className="flex flex-col gap-1 text-xs font-medium text-muted">
              {f.label}
              {f.required && <span className="text-atlas-orange"> *</span>}
              <input
                type={f.type ?? "text"}
                value={form[f.key]}
                onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                className="h-10 rounded-lg border border-border bg-surface-2 px-3 text-sm text-foreground outline-none transition focus:border-atlas-orange"
              />
            </label>
          ))}
        </div>

        {submitted && missingRequired.length > 0 && (
          <p className="mt-3 text-xs text-red-500">Preencha os campos obrigatórios: {missingRequired.map((f) => f.label).join(", ")}.</p>
        )}

        <div className="mt-5 space-y-3 rounded-xl border border-border bg-surface-2 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <ShieldCheck size={16} className="text-atlas-orange" /> LGPD e Termos
          </div>
          <label className="flex items-start gap-2 text-xs text-muted">
            <input type="checkbox" checked={consentLGPD} onChange={(e) => setConsentLGPD(e.target.checked)} className="mt-0.5" />
            Autorizo o uso dos meus dados exclusivamente para fins de registro deste treinamento de onboarding, conforme a
            LGPD (Lei nº 13.709/2018). Endereço IP não é coletado nesta demonstração.
          </label>
          <label className="flex items-start gap-2 text-xs text-muted">
            <input type="checkbox" checked={aceiteTermos} onChange={(e) => setAceiteTermos(e.target.checked)} className="mt-0.5" />
            Li e aceito os termos de participação do treinamento e me comprometo a concluir a trilha com dedicação.
          </label>
        </div>

        <Button className="mt-5 w-full" size="lg" onClick={handleSubmit}>
          Confirmar e iniciar onboarding
        </Button>
      </DialogContent>
    </Dialog>
  );
}
