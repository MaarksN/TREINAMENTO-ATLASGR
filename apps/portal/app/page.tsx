"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Sparkles, ListChecks, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { useOnboardingStore } from "@/lib/store";
import { useToastStore } from "@/lib/toastStore";

const FEATURES = [
  { icon: Building2, text: 'Desenvolvimento corporativo contínuo e integrado' },
  { icon: Sparkles, text: 'Trilhas de capacitação guiadas e especializadas' },
  { icon: ListChecks, text: 'Gestão de conhecimento com avaliação prática' },
];

export default function HomePage() {
  const router = useRouter();
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const showToast = useToastStore((s) => s.show);
  const registration = useOnboardingStore((state) => state.registration);

  useEffect(() => {
    if (registration) {
      router.push("/trilha");
    }
  }, [registration, router]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("authRequired") === "1") {
      queueMicrotask(() => {
        setReturnTo(params.get("returnTo"));
        showToast({
          title: "Faça seu primeiro acesso",
          description: "Insira seu email e senha para continuar.",
          variant: "info",
        });
      });
      window.history.replaceState({}, "", "/");
    }
  }, [showToast]);

  // handleStart removed

  return (
    <div className="min-h-screen flex bg-surface">
      <SiteHeader hideNavLinks />

      {/* Painel Visual (Left Side) */}
      <div
        className="hidden lg:flex lg:w-[46%] relative overflow-hidden items-center justify-center px-14 py-16"
        style={{
          background: `linear-gradient(150deg, rgba(0,0,0,0.32), rgba(0,0,0,0.04)), linear-gradient(150deg, #FF5618, #FF8020)`
        }}
      >
        <div className="pointer-events-none absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-16 w-[30rem] h-[30rem] rounded-full bg-black/20 blur-3xl" />
        <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="login-dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-dot-grid)" />
        </svg>

        <div className="relative z-10 w-full max-w-sm mt-12">
          <Logo className="h-14 w-auto brightness-0 invert" />

          <h2 className="mt-10 text-3xl font-black leading-tight text-white text-balance">
            Capacitação e Inteligência Logística
          </h2>
          <p className="mt-3 text-sm text-white/80">
            A central de desenvolvimento corporativo da AtlasGR.
          </p>

          <ul className="mt-10 space-y-4">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-8 h-8 rounded-lg bg-white/15 shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <span className="text-sm text-white/90 leading-snug pt-1.5">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Painel Interativo (Right Side) */}
      <div className="flex-1 min-w-0 flex items-center justify-center p-4 sm:p-8 mt-12 lg:mt-0">
        <div className="w-full min-w-0 max-w-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
          
          <div className="flex flex-col items-center lg:items-start mb-8">
            <div className="mb-6 lg:hidden">
              <Logo className="h-12 w-auto" />
            </div>
            <h1 className="text-3xl font-black text-center lg:text-left text-foreground">
              Acesso à Plataforma
            </h1>
            <p className="text-sm mt-3 text-center lg:text-left text-muted leading-relaxed">
              Insira suas credenciais para continuar.
            </p>
          </div>

          <div className="w-full p-6 sm:p-7 rounded-2xl shadow-xl shadow-black/[0.03] bg-surface border border-border">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const email = fd.get('email');
                const password = fd.get('password');
                try {
                  const res = await fetch('http://localhost:3001/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                  });
                  if (!res.ok) throw new Error('Credenciais inválidas');
                  const data = await res.json();
                  
                  // Temporary hook into the old store
                  useOnboardingStore.setState({
                    registration: {
                      id: data.user.id,
                      nomeCompleto: data.user.name,
                      cargo: data.user.cargo || '',
                      departamento: data.user.departamento || '',
                      email: data.user.email,
                      userId: data.user.id
                    } as any,
                    onboardingCompleted: true,
                    hasHydrated: true
                  });
                  
                  router.push(returnTo || "/trilha");
                } catch (err) {
                  showToast({
                    title: "Erro no login",
                    description: "Email ou senha incorretos.",
                    variant: "error"
                  });
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-muted mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu.email@atlasgr.com.br"
                  className="w-full h-11 px-3 rounded-lg border border-border bg-surface-2 text-sm outline-none focus:border-atlas-orange focus:ring-1 focus:ring-atlas-orange"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted mb-1">Senha</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full h-11 px-3 rounded-lg border border-border bg-surface-2 text-sm outline-none focus:border-atlas-orange focus:ring-1 focus:ring-atlas-orange"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg mt-2"
                style={{
                  background: `linear-gradient(to right, #FF5618, #FF8020)`,
                  boxShadow: `0 8px 20px -8px rgba(255,86,24,0.5)`
                }}
                onMouseEnter={e => (e.currentTarget.style.background = `linear-gradient(to right, #FF4500, #FF6510)`)}
                onMouseLeave={e => (e.currentTarget.style.background = `linear-gradient(to right, #FF5618, #FF8020)`)}
              >
                ENTRAR
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <p className="mt-8 text-center text-xs font-semibold text-muted">
            © {new Date().getFullYear()} ATLASGR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
