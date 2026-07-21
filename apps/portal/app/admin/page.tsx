"use client";

import { useMemo, useState } from "react";
import { Download, Search, TrendingDown, TrendingUp, Users } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useOnboardingStore } from "@/lib/store";
import { seedCollaborators, demoKpis, type SeedCollaborator } from "@/content/seedDemo";

const statusLabel: Record<SeedCollaborator["status"], { label: string; variant: "success" | "orange" | "warning" | "muted" }> = {
  concluido: { label: "Concluído", variant: "success" },
  andamento: { label: "Em andamento", variant: "orange" },
  reprovado: { label: "Reprovado", variant: "warning" },
  "nao-iniciado": { label: "Não iniciado", variant: "muted" },
};

export default function AdminPage() {
  const registration = useOnboardingStore((s) => s.registration);
  const examResult = useOnboardingStore((s) => s.examResult);
  const [query, setQuery] = useState("");

  const rows: SeedCollaborator[] = useMemo(() => {
    const you: SeedCollaborator[] = registration
      ? [
          {
            nome: `${registration.nomeCompleto} (sessão atual)`,
            cargo: registration.cargo,
            departamento: registration.departamento,
            status: examResult?.passed ? "concluido" : "andamento",
            progresso: examResult?.passed ? 100 : 40,
            notaMedia: examResult?.score ?? 0,
            tempoEstudadoMin: 0,
            ultimoAcesso: new Date().toISOString().slice(0, 10),
          },
        ]
      : [];
    return [...you, ...seedCollaborators];
  }, [registration, examResult]);

  const filtered = rows.filter((r) => r.nome.toLowerCase().includes(query.toLowerCase()));

  const total = rows.length;
  const concluidos = rows.filter((r) => r.status === "concluido").length;
  const andamento = rows.filter((r) => r.status === "andamento").length;
  const reprovados = rows.filter((r) => r.status === "reprovado").length;
  const notaMedia = Math.round(rows.filter((r) => r.notaMedia > 0).reduce((s, r) => s + r.notaMedia, 0) / Math.max(1, rows.filter((r) => r.notaMedia > 0).length));
  const tempoMedio = Math.round(rows.reduce((s, r) => s + r.tempoEstudadoMin, 0) / Math.max(1, total));

  function exportCsv() {
    const header = ["Nome", "Cargo", "Departamento", "Status", "Progresso (%)", "Nota média", "Tempo estudado (min)", "Último acesso"];
    const lines = rows.map((r) => [r.nome, r.cargo, r.departamento, statusLabel[r.status].label, r.progresso, r.notaMedia, r.tempoEstudadoMin, r.ultimoAcesso]);
    const csv = [header, ...lines].map((l) => l.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "colaboradores-onboarding-atlasgr.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Painel Administrativo</h1>
            <p className="mt-1 text-muted">Visão executiva do onboarding corporativo.</p>
          </div>
          <Button variant="outline" onClick={exportCsv}>
            <Download size={16} /> Exportar CSV
          </Button>
        </div>

        <Card className="mt-4 flex items-center gap-2 border-sky-400/30 bg-sky-400/5 p-3 text-xs text-sky-700 dark:text-sky-300">
          <Users size={14} /> Dados de colaboradores abaixo são fictícios (seed de demonstração) — a única linha real é a sua sessão atual, já que este protótipo não possui banco de dados.
        </Card>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Colaboradores", value: total },
            { label: "Em andamento", value: andamento },
            { label: "Concluídos", value: concluidos },
            { label: "Reprovados", value: reprovados },
            { label: "Nota média", value: `${notaMedia || 0}%` },
            { label: "Tempo médio", value: `${tempoMedio}min` },
          ].map((k) => (
            <Card key={k.label} className="p-4 text-center">
              <p className="font-display text-2xl font-bold text-gradient-atlas">{k.value}</p>
              <p className="mt-1 text-xs text-muted">{k.label}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Card className="p-5">
            <p className="mb-3 flex items-center gap-2 font-display font-semibold text-red-500"><TrendingDown size={16} /> Questões mais erradas</p>
            <ul className="space-y-2 text-sm">
              {demoKpis.questoesMaisErradas.map((q) => (
                <li key={q.pergunta} className="flex justify-between gap-2 text-muted">
                  <span className="line-clamp-2">{q.pergunta}</span>
                  <span className="shrink-0 font-semibold text-red-500">{q.errosPct}%</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <p className="mb-3 flex items-center gap-2 font-display font-semibold text-emerald-500"><TrendingUp size={16} /> Questões mais acertadas</p>
            <ul className="space-y-2 text-sm">
              {demoKpis.questoesMaisAcertadas.map((q) => (
                <li key={q.pergunta} className="flex justify-between gap-2 text-muted">
                  <span className="line-clamp-2">{q.pergunta}</span>
                  <span className="shrink-0 font-semibold text-emerald-500">{q.acertosPct}%</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <p className="mb-3 font-display font-semibold">Engajamento e abandono</p>
            <div className="space-y-3 text-sm">
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted"><span>Engajamento</span><span>{demoKpis.engajamentoPct}%</span></div>
                <div className="h-2 rounded-full bg-surface-2"><div className="h-full rounded-full bg-gradient-atlas" style={{ width: `${demoKpis.engajamentoPct}%` }} /></div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted"><span>Abandono</span><span>{demoKpis.abandonoPct}%</span></div>
                <div className="h-2 rounded-full bg-surface-2"><div className="h-full rounded-full bg-red-400" style={{ width: `${demoKpis.abandonoPct}%` }} /></div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-display font-semibold">Colaboradores</p>
            <div className="relative w-56">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nome..."
                className="h-9 w-full rounded-full border border-border bg-surface-2 pl-9 pr-3 text-sm outline-none focus:border-atlas-orange"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted">
                  <th className="pb-2 pr-4">Nome</th>
                  <th className="pb-2 pr-4">Cargo</th>
                  <th className="pb-2 pr-4">Status</th>
                  <th className="pb-2 pr-4">Progresso</th>
                  <th className="pb-2 pr-4">Nota média</th>
                  <th className="pb-2">Último acesso</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.nome} className="border-b border-border/60 last:border-none">
                    <td className="py-2.5 pr-4 font-medium">{r.nome}</td>
                    <td className="py-2.5 pr-4 text-muted">{r.cargo}</td>
                    <td className="py-2.5 pr-4"><Badge variant={statusLabel[r.status].variant}>{statusLabel[r.status].label}</Badge></td>
                    <td className="py-2.5 pr-4 text-muted">{r.progresso}%</td>
                    <td className="py-2.5 pr-4 text-muted">{r.notaMedia}%</td>
                    <td className="py-2.5 text-muted">{r.ultimoAcesso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
