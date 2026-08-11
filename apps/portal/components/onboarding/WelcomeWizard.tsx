"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ShieldAlert, BarChart3, Clock, CheckCircle2 } from "lucide-react";

const STEPS = [
  { id: 1, title: "Boas-vindas" },
  { id: 2, title: "Perfil de Acesso" },
  { id: 3, title: "Configuração de KPIs" },
];

const PROFILES = [
  { id: "gestor_operacoes", label: "Gestor de Operações", description: "Foco em eficiência logística, SLAs e tempo de trânsito." },
  { id: "gerente_risco", label: "Gerente de Risco / Compliance", description: "Foco na aderência à apólice, segurança e prevenção de perdas." },
  { id: "analista_monitoramento", label: "Analista de Monitoramento", description: "Visão tática de acompanhamento de viagens e alertas da CIA." },
];

const KPIS = [
  { id: "eta", label: "ETA & Transit Time", icon: Clock },
  { id: "safety", label: "Safety & Prevenção", icon: ShieldAlert },
  { id: "sinistros", label: "Gestão de Sinistros", icon: BarChart3 },
];

export default function WelcomeWizard({ onComplete }: { onComplete?: () => void } = {}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedKPIs, setSelectedKPIs] = useState<string[]>([]);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
    else handleComplete();
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const toggleKPI = (id: string) => {
    setSelectedKPIs((prev) =>
      prev.includes(id) ? prev.filter((kpi) => kpi !== id) : [...prev, id]
    );
  };

  const handleComplete = () => {
    // Em produção, selectedProfile/selectedKPIs seriam persistidos no perfil do colaborador.
    onComplete?.();
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-atlas-dark/80 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-atlas-orange/20 rounded-full blur-[80px]" />

      <div className="relative z-10">
        {/* Stepper Header */}
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500
                  ${
                    currentStep === step.id
                      ? "bg-atlas-orange text-white shadow-glow"
                      : currentStep > step.id
                      ? "bg-white/20 text-white"
                      : "bg-white/5 text-gray-500 border border-white/10"
                  }`}
              >
                {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
              </div>
              <span
                className={`text-xs font-medium ${
                  currentStep >= step.id ? "text-white" : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
          {/* Connecting lines */}
          <div className="absolute top-5 left-0 w-full h-[2px] bg-white/5 -z-10" />
          <motion.div
            className="absolute top-5 left-0 h-[2px] bg-atlas-orange -z-10"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content Area */}
        <div className="min-h-[300px] py-4">
          {/* mode="wait" atrasa a montagem do próximo passo até a animação de
              saída do anterior terminar; se essa animação nunca dispara (aba
              em segundo plano, reduced motion, etc.) o usuário fica travado
              vendo o passo antigo mesmo com o estado já avançado. */}
          <AnimatePresence>
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-atlas-orange/10 border border-atlas-orange/30 mb-4 shadow-glow">
                  <ShieldAlert className="w-10 h-10 text-atlas-orange" />
                </div>
                <h2 className="text-3xl font-bold text-white font-secondary">
                  A gestão por exceção começa aqui.
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto text-lg">
                  Bem-vindo à nova plataforma da AtlasGR. Configure seu cockpit corporativo
                  para obter a melhor experiência em gestão de risco e logística.
                </p>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Escolha seu Perfil</h2>
                  <p className="text-gray-400">Baseado no Playbook AtlasGR, como você atua na operação?</p>
                </div>
                <div className="grid gap-4">
                  {PROFILES.map((profile) => (
                    <button
                      key={profile.id}
                      onClick={() => setSelectedProfile(profile.id)}
                      className={`text-left p-4 rounded-lg border transition-all duration-300 group
                        ${
                          selectedProfile === profile.id
                            ? "bg-atlas-orange/10 border-atlas-orange shadow-[0_0_15px_rgba(255,86,24,0.2)]"
                            : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                        }`}
                    >
                      <h3 className={`font-semibold text-lg mb-1 ${selectedProfile === profile.id ? "text-white" : "text-gray-200"}`}>
                        {profile.label}
                      </h3>
                      <p className="text-sm text-gray-500">{profile.description}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Configure seu Dashboard</h2>
                  <p className="text-gray-400">Quais KPIs importam mais para sua gestão diária?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {KPIS.map((kpi) => {
                    const Icon = kpi.icon;
                    const isSelected = selectedKPIs.includes(kpi.id);
                    return (
                      <button
                        key={kpi.id}
                        onClick={() => toggleKPI(kpi.id)}
                        className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all duration-300 gap-4
                          ${
                            isSelected
                              ? "bg-atlas-orange/10 border-atlas-orange shadow-glow scale-105"
                              : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                          }`}
                      >
                        <Icon className={`w-8 h-8 ${isSelected ? "text-atlas-orange" : "text-gray-400"}`} />
                        <span className={`text-sm font-medium text-center ${isSelected ? "text-white" : "text-gray-300"}`}>
                          {kpi.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors
              ${
                currentStep === 1
                  ? "opacity-50 cursor-not-allowed text-gray-600"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </button>
          
          <button
            onClick={handleNext}
            disabled={(currentStep === 2 && !selectedProfile) || (currentStep === 3 && selectedKPIs.length === 0)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all
              ${
                (currentStep === 2 && !selectedProfile) || (currentStep === 3 && selectedKPIs.length === 0)
                  ? "bg-white/10 text-gray-500 cursor-not-allowed"
                  : "bg-atlas-orange text-white hover:bg-[#E04D15] shadow-glow"
              }`}
          >
            {currentStep === 3 ? "Acessar Plataforma" : "Continuar"}
            {currentStep !== 3 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
