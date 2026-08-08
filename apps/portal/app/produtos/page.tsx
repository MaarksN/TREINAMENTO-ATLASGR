"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, LineChart, Radar, ShieldCheck, UserSearch, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProduct = PRODUCTS[activeIndex];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
        <div className="text-center mb-8">
          <Badge variant="orange" className="mb-3">Portfólio Corporativo</Badge>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Soluções ATLASGR</h1>
          <p className="mt-2 text-sm text-muted">
            Exibindo 1 produto por página na estrutura.
          </p>
        </div>

        {/* Navigation Top */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Anterior
          </Button>

          <Badge variant="orange" className="px-3 py-1 font-mono text-xs">
            Produto {activeIndex + 1} de {PRODUCTS.length}
          </Badge>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveIndex((prev) => Math.min(PRODUCTS.length - 1, prev + 1))}
            disabled={activeIndex === PRODUCTS.length - 1}
            rightIcon={<ChevronRight size={16} />}
          >
            Próximo
          </Button>
        </div>

        {/* Single Item Display */}
        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <Link href={`/produtos/${currentProduct.slug}`} className="block h-full">
                <Card variant="interactive" className="flex h-full flex-col gap-6 p-8 shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-atlas-orange/10 text-atlas-orange">
                    <currentProduct.icon size={28} />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">{currentProduct.name}</h2>
                    <p className="mt-3 text-base text-muted leading-relaxed">{currentProduct.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-atlas-orange">
                    Ver showcase completo <ArrowRight size={16} />
                  </span>
                </Card>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {PRODUCTS.map((p, idx) => (
            <button
              key={p.slug}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 focus-visible-ring",
                activeIndex === idx ? "w-8 bg-atlas-orange" : "w-2.5 bg-border hover:bg-atlas-orange/50"
              )}
              title={p.name}
            />
          ))}
        </div>
      </main>

      <div className="sticky bottom-0 z-30 border-t border-border/50 bg-background/90 backdrop-blur-xl py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            leftIcon={<ChevronLeft size={16} />}
          >
            Anterior
          </Button>

          <span className="text-xs font-semibold text-muted">
            Produto <strong className="text-foreground">{activeIndex + 1}</strong> de <strong>{PRODUCTS.length}</strong>
          </span>

          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveIndex((prev) => Math.min(PRODUCTS.length - 1, prev + 1))}
            disabled={activeIndex === PRODUCTS.length - 1}
            rightIcon={<ChevronRight size={16} />}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
