"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { value: "+ R$ 169 Bilhões", label: "Monitorados" },
    { value: "9,4 Milhões", label: "Alertas Tratados" },
    { value: "1,2 Milhão", label: "Consultas Profile" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <div className="flex min-h-screen w-full bg-atlas-dark text-white font-sans overflow-hidden">
      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 z-10 bg-atlas-dark/95 backdrop-blur-sm relative">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-atlas-orange/20 flex items-center justify-center border border-atlas-orange/50 shadow-glow">
                <Shield className="w-5 h-5 text-atlas-orange" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-secondary">AtlasGR</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Acesso ao Centro de Comando</h1>
            <p className="text-gray-400">Entre com suas credenciais corporativas.</p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Protótipo: não há backend de autenticação por e-mail/senha. O acesso
              // real é feito na Home, selecionando o próprio nome já cadastrado pelo Admin.
              router.push("/");
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="email">
                E-mail Corporativo
              </label>
              <input
                id="email"
                type="email"
                placeholder="nome@empresa.com.br"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-atlas-orange focus:ring-1 focus:ring-atlas-orange outline-none transition-all text-white placeholder-gray-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300" htmlFor="password">
                  Senha
                </label>
                <Link href="#" className="text-xs text-atlas-orange hover:text-atlas-orange/80 transition-colors">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:border-atlas-orange focus:ring-1 focus:ring-atlas-orange outline-none transition-all text-white placeholder-gray-500"
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-atlas-orange hover:bg-[#E04D15] text-white font-medium py-3 px-4 rounded-md transition-all shadow-[0_0_15px_rgba(255,86,24,0.4)] hover:shadow-[0_0_25px_rgba(255,86,24,0.6)] flex items-center justify-center gap-2 group"
            >
              Entrar
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} AtlasGR. Todos os direitos reservados.</p>
            <p className="mt-1">Acesso restrito e monitorado.</p>
          </div>
        </div>
      </div>

      {/* Right Column: Social Proof / Dynamic Background */}
      <div className="hidden lg:flex w-1/2 relative bg-black items-center justify-center">
        {/* Abstract Map/Grid Background overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,86,24,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Animated Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="w-[500px] h-[500px] bg-atlas-orange/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-md text-center">
          <div className="h-32 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h2 className="text-5xl font-bold text-white mb-2 font-secondary drop-shadow-[0_0_10px_rgba(255,86,24,0.5)]">
                  {metrics[activeMetric].value}
                </h2>
                <p className="text-xl text-gray-300 font-light tracking-wide uppercase">
                  {metrics[activeMetric].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Decorator lines */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent" />
      </div>
    </div>
  );
}
