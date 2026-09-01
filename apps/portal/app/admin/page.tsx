"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Search, Trash2, TrendingDown, TrendingUp, UserCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EnrollColaboradorForm } from "@/components/onboarding/EnrollColaboradorForm";
import { AdminGate } from "@/components/admin/AdminGate";
import { useOnboardingStore } from "@/lib/store";
import { seedCollaborators, demoKpis, type SeedCollaborator } from "@/content/seedDemo";

const statusLabel: Record<SeedCollaborator["status"], { label: string; variant: "success" | "orange" | "warning" | "muted" }> = {
  concluido: { label: "Concluído", variant: "success" },
  andamento: { label: "Em andamento", variant: "orange" },
  reprovado: { label: "Reprovado", variant: "warning" },
  "nao-iniciado": { label: "Não iniciado", variant: "muted" },
};

export default function AdminPage() {
  const router = useRouter();
  const registration = useOnboardingStore((s) => s.registration);
  const examResult = useOnboardingStore((s) => s.examResult);
  const enrolled = useOnboardingStore((s) => s.enrolled);
  const removeColaborador = useOnboardingStore((s) => s.removeColaborador);
  const startSessionAs = useOnboardingStore((s) => s.startSessionAs);
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

  function handleSimulateAccess(id: string) {
    if (startSessionAs(id)) router.push("/trilha");
  }

  return (
    <AdminGate>
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

        {/* Cadastro de colaboradores — único ponto de entrada, feito pelo Admin */}
        <Card className="mt-6 p-5">
          <div className="mb-4 flex items-center gap-2">
            <UserCheck size={18} className="text-atlas-orange" />
            <p className="font-display font-semibold">Cadastrar colaborador</p>
          </div>
          <p className="mb-4 text-xs text-muted">
            O autocadastro foi removido: apenas o Administrador cadastra colaboradores. Após o cadastro, o colaborador
            faz o &ldquo;primeiro acesso&rdquo; na Home selecionando o próprio nome.
          </p>
          <EnrollColaboradorForm />

          {enrolled.length > 0 && (
            <div className="mt-6 space-y-2 border-t border-border pt-5">
              <p className="mb-2 text-xs font-semibold text-muted">Colaboradores cadastrados ({enrolled.length})</p>
              {enrolled.map((c) => (
                <div key={c.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-surface-2 px-3 py-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.nomeCompleto}</p>
                    <p className="text-xs text-muted">
                      {c.cargo} · {c.departamento} · código {c.accessCode}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleSimulateAccess(c.id)}>
                      Simular acesso
                    </Button>
                    <button
                      onClick={() => removeColaborador(c.id)}
                      aria-label={`Remover ${c.nomeCompleto}`}
                      className="rounded-lg p-2 text-muted transition hover:bg-red-500/10 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="mt-4 flex items-center gap-2 border-sky-400/30 bg-sky-400/5 p-3 text-xs text-sky-700 dark:text-sky-300">
          <Users size={14} /> Os KPIs e a tabela analítica abaixo usam dados fictícios (seed de demonstração) para
          ilustrar a visão executiva em escala — este protótipo não possui banco de dados. A seção acima já é
          funcional de verdade, com os colaboradores que você cadastrar.
        </Card>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Colaboradores", value: total },
            { label: "Em andamento", value: andamento },
            { label: "Concluídos", value: concluidos },
            { label: "Reprovados", value: reprovados },
            { label: "Nota média", value: `${notaMedia || 0}%` },
            { label: "Tempo médio", value: `${tempoMedio}min` },
          ].map((k) => (
            <Card key={k.label} className="flex flex-col items-center justify-center p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <p className="font-display text-3xl font-black text-gradient-atlas">{k.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted">{k.label}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="flex flex-col p-6 shadow-sm">
            <p className="mb-4 flex items-center gap-2 font-display font-semibold text-red-500"><TrendingDown size={18} /> Questões mais erradas</p>
            <ul className="flex-1 space-y-4 text-sm">
              {demoKpis.questoesMaisErradas.map((q) => (
                <li key={q.pergunta} className="flex items-start justify-between gap-4 text-muted">
                  <span className="line-clamp-2 leading-relaxed">{q.pergunta}</span>
                  <span className="shrink-0 rounded-md bg-red-500/10 px-2 py-1 font-semibold text-red-500">{q.errosPct}%</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="flex flex-col p-6 shadow-sm">
            <p className="mb-4 flex items-center gap-2 font-display font-semibold text-emerald-500"><TrendingUp size={18} /> Questões mais acertadas</p>
            <ul className="flex-1 space-y-4 text-sm">
              {demoKpis.questoesMaisAcertadas.map((q) => (
                <li key={q.pergunta} className="flex items-start justify-between gap-4 text-muted">
                  <span className="line-clamp-2 leading-relaxed">{q.pergunta}</span>
                  <span className="shrink-0 rounded-md bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-600 dark:text-emerald-400">{q.acertosPct}%</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="flex flex-col p-6 shadow-sm">
            <p className="mb-4 font-display font-semibold text-foreground">Engajamento e abandono</p>
            <div className="flex-1 space-y-6 text-sm">
              <div>
                <div className="mb-2 flex justify-between font-medium text-muted"><span>Taxa de Engajamento</span><span className="text-foreground">{demoKpis.engajamentoPct}%</span></div>
                <div className="h-2.5 overflow-hidden rounded-full bg-surface-2"><div className="h-full rounded-full bg-gradient-atlas transition-all" style={{ width: `${demoKpis.engajamentoPct}%` }} /></div>
              </div>
              <div>
                <div className="mb-2 flex justify-between font-medium text-muted"><span>Taxa de Abandono</span><span className="text-foreground">{demoKpis.abandonoPct}%</span></div>
                <div className="h-2.5 overflow-hidden rounded-full bg-surface-2"><div className="h-full rounded-full bg-red-500/80 transition-all" style={{ width: `${demoKpis.abandonoPct}%` }} /></div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 overflow-hidden shadow-sm">
          <div className="border-b border-border p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-semibold text-foreground">Base analítica (demonstração)</p>
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar colaborador..."
                  className="h-10 w-full rounded-lg border border-border bg-surface-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted outline-none transition focus:border-atlas-orange focus:ring-1 focus:ring-atlas-orange"
                />
              </div>
            </div>
          </div>
          <div className="hidden w-full overflow-x-auto md:block">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead className="bg-surface-2/50 text-xs uppercase text-muted">
                <tr>
                  <th className="px-6 py-4 font-semibold">Colaborador</th>
                  <th className="px-6 py-4 font-semibold">Cargo</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Progresso</th>
                  <th className="px-6 py-4 font-semibold">Nota média</th>
                  <th className="px-6 py-4 font-semibold">Último acesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((r) => (
                  <tr key={r.nome} className="transition-colors hover:bg-surface-2/30">
                    <td className="px-6 py-4 font-medium text-foreground">{r.nome}</td>
                    <td className="px-6 py-4 text-muted">{r.cargo}</td>
                    <td className="px-6 py-4"><Badge variant={statusLabel[r.status].variant}>{statusLabel[r.status].label}</Badge></td>
                    <td className="px-6 py-4 font-medium text-muted">{r.progresso}%</td>
                    <td className="px-6 py-4 font-medium text-muted">{r.notaMedia}%</td>
                    <td className="px-6 py-4 text-muted">{r.ultimoAcesso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            {/* Mobile View - Cards */}
            <div className="md:hidden flex flex-col gap-4 mt-4">
              {filtered.map((r) => (
                <div key={r.nome} className="bg-surface-2 p-4 rounded-lg border border-border flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{r.nome}</div>
                      <div className="text-xs text-muted">{r.cargo} &bull; {r.departamento || ''}</div>
                    </div>
                    <Badge variant={statusLabel[r.status].variant}>{statusLabel[r.status].label}</Badge>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <div className="text-muted">Progresso</div>
                    <div className="font-medium">{r.progresso}%</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-muted">Nota Média</div>
                    <div className="font-medium">{r.notaMedia}%</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-muted">Último Acesso</div>
                    <div className="font-medium">{r.ultimoAcesso}</div>
                  </div>
                </div>
              ))}
            </div>

        </Card>
      </main>
    </div>
    </AdminGate>
  );
}
