"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Compass, Heart, Sparkles, Target } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks, ContactAddress } from "@/components/brand/SocialLinks";
import { AccessModal } from "@/components/onboarding/AccessModal";
import { InstitutionalVideo } from "@/components/media/InstitutionalVideo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useOnboardingStore } from "@/lib/store";
import { CinematicHero } from "@/components/home/CinematicHero";

const values = [
  { icon: Target, label: "Perseverança" },
  { icon: Sparkles, label: "Transparência" },
  { icon: Compass, label: "Simplicidade" },
  { icon: Building2, label: "Atitude de Dono" },
  { icon: Heart, label: "Inovação" },
];

export default function HomePage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const registration = useOnboardingStore((s) => s.registration);

  function handleStart() {
    if (registration) router.push("/trilha");
    else setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#131417]">
      <SiteHeader />

      <main>
        {/* Cinematic Hero directly integrates into Home */}
        <div onClick={handleStart}>
           <CinematicHero />
        </div>

        {/* Indicadores */}
        <section className="mx-auto max-w-5xl px-4 py-10 relative z-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Desde", value: "2004" },
              { label: "Central de monitoramento", value: "24 horas" },
              { label: "Áreas na Diretoria", value: "5" },
            ].map((s) => (
              <Card key={s.label} className="reveal-up p-6 text-center glass border border-white/10">
                <p className="font-display text-3xl font-bold text-gradient-atlas">{s.value}</p>
                <p className="mt-1 text-sm text-gray-400">{s.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Propósito e Valores */}
        <section className="mx-auto max-w-5xl px-4 py-14 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8 glass border border-white/10">
              <h2 className="font-display text-xl font-semibold text-white">Propósito</h2>
              <p className="mt-3 text-gray-300">
                &ldquo;Nós conectamos pessoas e tecnologia gerando valores com segurança e inovação.&rdquo;
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Missão e visão formais em texto público serão incorporadas ao portal assim que o material institucional
                oficial for disponibilizado — este protótipo usa apenas conteúdo confirmado nos documentos internos.
              </p>
            </Card>
            <Card className="p-8 glass border border-white/10">
              <h2 className="font-display text-xl font-semibold text-white">Valores</h2>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {values.map((v) => (
                  <li key={v.label} className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-300">
                    <v.icon size={16} className="text-atlas-orange" />
                    {v.label}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 pb-24 text-center relative z-10">
          <Button size="lg" onClick={handleStart} className="shadow-glow hover:scale-105 transition-transform bg-atlas-orange text-white">
            {registration ? "Continuar minha trilha" : "Iniciar Onboarding"}
          </Button>
        </section>
      </main>

      <AccessModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
