"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
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

function isValidCpf(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false; // todos os dígitos iguais
  return true;
}

// Cadastro exclusivo do Administrador — o colaborador nunca preenche este
// formulário; ele só faz o "primeiro acesso" (ver AccessModal).
export function EnrollColaboradorForm({ onEnrolled }: { onEnrolled?: (accessCode: string) => void }) {
  const enrollColaborador = useOnboardingStore((s) => s.enrollColaborador);
  const enrolled = useOnboardingStore((s) => s.enrolled);
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [lastCode, setLastCode] = useState<string | null>(null);

  const missingRequired = fields.filter((f) => f.required && !form[f.key].trim());
  const cpfInvalid = !!form.cpf.trim() && !isValidCpf(form.cpf);
  const isDuplicateName =
    !!form.nomeCompleto.trim() &&
    enrolled.some((c) => c.nomeCompleto.trim().toLowerCase() === form.nomeCompleto.trim().toLowerCase());

  function handleSubmit() {
    setSubmitted(true);
    if (missingRequired.length > 0 || cpfInvalid || isDuplicateName) return;

    const data: RegistrationData = {
      ...form,
      dataHora: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      consentimentoLGPD: true,
      aceiteTermos: true,
    };
    const record = enrollColaborador(data);
    setLastCode(record.accessCode);
    onEnrolled?.(record.accessCode);
    setForm(emptyForm);
    setSubmitted(false);
  }

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
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
      {submitted && cpfInvalid && (
        <p className="mt-3 text-xs text-red-500">CPF inválido — informe os 11 dígitos (com ou sem pontuação).</p>
      )}
      {submitted && isDuplicateName && (
        <p className="mt-3 text-xs text-red-500">
          Já existe um colaborador cadastrado com esse nome. Use o nome completo para diferenciar (ex.: sobrenome do meio) —
          a seleção de &ldquo;primeiro acesso&rdquo; é feita só pelo nome.
        </p>
      )}

      {lastCode && (
        <p className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs text-emerald-600 dark:text-emerald-400">
          Colaborador cadastrado! Código de acesso: <strong>{lastCode}</strong>
        </p>
      )}

      <Button className="mt-4" onClick={handleSubmit}>
        <UserPlus size={16} /> Cadastrar colaborador
      </Button>
    </div>
  );
}
