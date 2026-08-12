"use client";

import { Printer, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface CertificateActionsProps {
  moduleTitle: string;
  moduleNumber: number | string;
}

export function CertificateActions({ moduleTitle, moduleNumber }: CertificateActionsProps) {
  const handlePrint = () => {
    window.print();
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Acabei de concluir o Módulo ${moduleNumber}: ${moduleTitle} na AtlasGR!`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}&summary=${encodeURIComponent(shareText)}`;

  return (
    <div className="mt-6 flex flex-wrap gap-4 justify-center print:hidden">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrint}
        className="inline-flex items-center gap-2 rounded-xl bg-atlas-orange px-6 py-3 font-bold text-white shadow-glow transition-all hover:bg-atlas-orange-2"
      >
        <Printer size={18} /> Download PDF (Certificado)
      </motion.button>
      
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-[#0077b5] px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#005582]"
      >
        <Share2 size={18} /> Compartilhar no LinkedIn
      </motion.a>
    </div>
  );
}
