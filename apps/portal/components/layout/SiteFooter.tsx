"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LifeBuoy, FileText, ShieldAlert } from "lucide-react";

export function SiteFooter() {
  const pathname = usePathname();
  
  // Ocultar o footer em rotas de foco (módulo da trilha)
  if (pathname?.startsWith("/trilha/") && pathname.split("/").length > 2) {
    return null;
  }

  return (
    <footer className="w-full border-t border-border/50 bg-background/50 py-8 mt-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 opacity-60">
            <span className="text-xs font-bold uppercase tracking-widest text-muted">ATLASGR</span>
            <span className="text-xs font-medium text-muted">© {new Date().getFullYear()}</span>
          </div>
          
          <nav aria-label="Links de Ajuda do Rodapé" className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/ajuda" className="group flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-atlas-orange">
              <LifeBuoy size={14} className="opacity-70 group-hover:opacity-100" /> Suporte Acadêmico
            </Link>
            <Link href="/termos" className="group flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-atlas-orange">
              <FileText size={14} className="opacity-70 group-hover:opacity-100" /> Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="group flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-atlas-orange">
              <ShieldAlert size={14} className="opacity-70 group-hover:opacity-100" /> Política LGPD
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
