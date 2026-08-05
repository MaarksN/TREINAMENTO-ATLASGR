"use client";

import Link from "next/link";
import { ArrowRight, LineChart, Radar, ShieldCheck, UserSearch } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";

const PRODUCTS = [
  {
    slug: "profile",
    name: "Atlas Profile",
    icon: UserSearch,
    description: "IA que analisa o risco de contratação em minutos, cruzando dados criminais, biometria e histórico profissional.",
  },
  {
    slug: "connect",
    name: "Atlas Connect",
    icon: Radar,
    description: "A Torre de Controle: integra rastreadores e escala eventos críticos automaticamente para a Central e a C.I.A.",
  },
  {
    slug: "gr",
    name: "Atlas GR",
    icon: ShieldCheck,
    description: "Gestão por exceção do Gerenciamento de Risco, do PGR à resposta a incidentes.",
  },
  {
    slug: "analytics",
    name: "Atlas Analytics",
    icon: LineChart,
    description: "Cockpit executivo com visão em tempo real de risco por rodovia, safety e SLA de permanência em alvos.",
  },
];

export default function ProdutosPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-foreground">Portfólio de Produtos ATLASGR</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Conheça as soluções que sustentam a operação AtlasGR — cada uma com um showcase dedicado.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/produtos/${p.slug}`} className="block h-full">
              <Card variant="interactive" className="flex h-full flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-atlas-orange/10 text-atlas-orange">
                  <p.icon size={20} />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-1.5 text-sm text-muted">{p.description}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-atlas-orange">
                  Ver showcase <ArrowRight size={14} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
