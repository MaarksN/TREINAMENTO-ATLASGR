"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Sparkles, ListChecks, Calendar, Clock } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Logo } from "@/components/brand/Logo";
import { useOnboardingStore } from "@/lib/store";
import { useToastStore } from "@/lib/toastStore";

const FEATURES = [
  { icon: Building2, text: "Desenvolvimento corporativo contínuo e integrado" },
  { icon: Sparkles, text: "Trilhas de capacitação guiadas e especializadas" },
  { icon: ListChecks, text: "Gestão de conhecimento com avaliação prática" },
];

export default function HomePage() {
  const router = useRouter();
  const [returnTo, setReturnTo] = useState<string | null>(null);
  const [email, setEmail] = useState("marcelo.nascimento@atlasgr.com.br");
  const [password, setPassword] = useState("••••••••");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const showToast = useToastStore((s) => s.show);
  const registration = useOnboardingStore((state) => state.registration);
  const enrolled = useOnboardingStore((state) => state.enrolled);
  const startSessionAs = useOnboardingStore((state) => state.startSessionAs);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "2-digit", month: "long" };
      let dateStr = now.toLocaleDateString("pt-BR", options);
      // Capitalize first letter
      dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
      setCurrentDate(dateStr);
      setCurrentTime(now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!registration) {
      useOnboardingStore.setState({
        registration: {
          nomeCompleto: "Colaborador Atlas",
          cargo: "Operações",
          departamento: "Logística Inteligente",
          email: "colaborador@atlasgr.com.br",
          cpf: "000.000.000-00",
          gestor: "Diretoria",
          telefone: "(11) 99999-9999",
          empresa: "AtlasGR",
          cidade: "Campinas",
          estado: "SP",
          dataHora: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          consentimentoLGPD: true,
          aceiteTermos: true,
        },
        onboardingCompleted: true,
        hasHydrated: true,
      });
    }
    router.replace("/trilha");
  }, [registration, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find matching enrolled user or use first enrolled or create session
    const matched = enrolled.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (matched) {
      startSessionAs(matched.id);
    } else if (enrolled.length > 0) {
      startSessionAs(enrolled[0].id);
    } else {
      // Fallback direct session
      const nameFromEmail = email.split("@")[0].replace(".", " ");
      const formattedName = nameFromEmail
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

      useOnboardingStore.setState({
        registration: {
          nomeCompleto: formattedName || "Marcelo Nascimento",
          cargo: "Colaborador Atlas",
          departamento: "Operações",
          email: email,
          cpf: "000.000.000-00",
          gestor: "Diretoria",
          telefone: "(11) 99999-9999",
          empresa: "AtlasGR",
          cidade: "Campinas",
          estado: "SP",
          dataHora: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          consentimentoLGPD: true,
          aceiteTermos: true,
        },
        onboardingCompleted: true,
        hasHydrated: true,
      });
    }

    showToast({
      title: "Login realizado",
      description: "Bem-vindo à plataforma de treinamento AtlasGR!",
      variant: "success",
    });

    router.push(returnTo || "/trilha");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC]">
      <SiteHeader hideNavLinks />

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Painel Visual Esquerdo */}
        <div
          className="hidden lg:flex lg:w-[48%] relative overflow-hidden items-center justify-center px-12 py-16"
          style={{
            background: "linear-gradient(135deg, #B23B0E 0%, #D84814 45%, #C2410C 100%)",
          }}
        >
          {/* Subtle dot pattern */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="login-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#login-dot-grid)" />
          </svg>

          <div className="relative z-10 w-full max-w-lg space-y-8">
            {/* Top Logo */}
            <div className="flex items-center gap-3">
              <Logo className="h-12 w-auto brightness-0 invert" />
            </div>

            {/* Glass Card Container */}
            <div className="rounded-2xl bg-black/15 backdrop-blur-md p-8 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-black leading-tight text-white font-display">
                Capacitação e Inteligência Logística
              </h2>
              <p className="mt-2 text-sm text-white/80 font-normal">
                A central de desenvolvimento corporativo da AtlasGR.
              </p>

              <ul className="mt-8 space-y-5">
                {FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3.5">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#E65100]/90 text-white shadow-md shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm font-medium text-white/95 leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Painel de Formulário Direito */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 relative">
          {/* Top Date & Time */}
          <div className="flex items-center justify-end gap-3 text-xs font-bold text-[#7C2D12] tracking-wide pt-2 pr-2">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#7C2D12]" />
              <span>{currentDate || "Carregando data..."}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#7C2D12]" />
              <span>{currentTime || "10:00:00"}</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="my-auto mx-auto w-full max-w-[420px] py-10">
            <h1 className="text-4xl font-extrabold text-[#7C2D12] text-center mb-8 tracking-tight font-display">
              Bem-vindo
            </h1>

            <div className="bg-white rounded-[28px] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-black tracking-wider text-[#7C2D12] uppercase mb-2">
                    E-MAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcelo.nascimento@atlasgr.com.br"
                    className="w-full bg-[#EEF4FF] text-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition focus:ring-2 focus:ring-[#FF8C5A] border-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-black tracking-wider text-[#7C2D12] uppercase">
                      SENHA:
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        showToast({
                          title: "Redefinição de senha",
                          description: "Solicite a redefinição diretamente ao administrador.",
                          variant: "info",
                        })
                      }
                      className="text-xs font-bold text-[#7C2D12] hover:underline"
                    >
                      Esqueci minha senha
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#EEF4FF] text-slate-800 rounded-xl px-4 py-3.5 text-sm font-medium outline-none transition focus:ring-2 focus:ring-[#FF8C5A] border-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#FFA278] to-[#FF8C5A] hover:brightness-95 active:scale-[0.99] shadow-md shadow-[#FFA278]/40 flex items-center justify-center gap-2 transition text-sm cursor-pointer"
                >
                  <span>Entrar</span>
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center text-xs text-muted/60 py-2">
            © {new Date().getFullYear()} ATLASGR. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}
