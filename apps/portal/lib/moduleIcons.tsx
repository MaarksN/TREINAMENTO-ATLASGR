import {
  Handshake,
  Truck,
  ShieldAlert,
  Package,
  LayoutDashboard,
  ScanFace,
  Plug,
  Users,
  TrendingUp,
  BookOpen,
  Radar,
  ShieldCheck,
  Cpu,
  Trophy,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

// Ícone temático por módulo da trilha — usado para dar identidade visual
// rápida a cada um dos 15 tópicos no índice da home e na página /trilha.
export const moduleIcons: Record<string, LucideIcon> = {
  "01-bem-vindo-atlasgr": Handshake,
  "02-mercado-logistica": Truck,
  "03-gerenciamento-risco": ShieldAlert,
  "04-produtos-atlasgr": Package,
  "05-software-logistico": LayoutDashboard,
  "06-atlas-profile": ScanFace,
  "07-integracoes": Plug,
  "08-clientes": Users,
  "09-processo-comercial": TrendingUp,
  "10-termos-tecnicos": BookOpen,
  "11-operacao": Radar,
  "12-compliance": ShieldCheck,
  "13-tecnologia": Cpu,
  "14-casos-reais": Trophy,
  "15-preparacao-final": ClipboardCheck,
};
