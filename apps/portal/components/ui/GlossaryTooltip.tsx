"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GLOSSARY: Record<string, string> = {
  SLA: "Service Level Agreement. Acordo de Nível de Serviço. Na Atlas, o tempo máximo aceitável para tratativa de um evento.",
  ETA: "Estimated Time of Arrival. Tempo Estimado de Chegada. Calculado dinamicamente via Atlas Connect.",
  PGR: "Plano de Gerenciamento de Risco. Documento que define as regras de segurança e operação aprovadas pela seguradora.",
  "Transit Time": "Tempo total de trânsito de uma mercadoria da origem ao destino.",
  CIA: "Célula de Inteligência Atlas. Central especializada em resposta a eventos críticos e crises de segurança.",
  FaceID: "Validação biométrica facial para garantir a identidade real do motorista durante o onboarding no Atlas Profile.",
  "C.I.A": "Célula de Inteligência Atlas. Central especializada em resposta a eventos críticos e crises de segurança.",
};

export default function GlossaryTooltip({ children }: { children: React.ReactNode }) {
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent, term: string) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPosition({ x: rect.left + rect.width / 2, y: rect.top });
    setHoveredTerm(term);
  };

  const handleMouseLeave = () => {
    setHoveredTerm(null);
  };

  // Helper function to replace text with hoverable spans
  const parseText = (text: string) => {
    let result: (string | React.ReactNode)[] = [text];

    Object.keys(GLOSSARY).forEach((term) => {
      const regex = new RegExp(`\\b(${term})\\b`, "gi");
      
      result = result.flatMap((part) => {
        if (typeof part === "string") {
          const split = part.split(regex);
          return split.map((s) => {
            if (s.toLowerCase() === term.toLowerCase()) {
              return (
                <span
                  key={s + Math.random()}
                  className="border-b border-dotted border-atlas-orange text-atlas-orange cursor-help relative inline-block"
                  onMouseEnter={(e) => handleMouseEnter(e, term)}
                  onMouseLeave={handleMouseLeave}
                >
                  {s}
                </span>
              );
            }
            return s;
          });
        }
        return part;
      });
    });

    return result;
  };

  // Process children recursively (simplified for this context)
  const processChildren = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return parseText(node);
    }
    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
      if (node.props.children) {
        return React.cloneElement(node, {
          ...node.props,
          children: React.Children.map(node.props.children, processChildren),
        });
      }
    }
    return node;
  };

  return (
    <>
      {React.Children.map(children, processChildren)}
      <AnimatePresence>
        {hoveredTerm && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ 
                position: 'fixed', 
                left: position.x, 
                top: position.y - 10, 
                transform: 'translate(-50%, -100%)',
                zIndex: 9999
            }}
            className="pointer-events-none"
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-2xl max-w-xs text-center w-[250px]">
              <p className="text-white font-bold text-sm mb-1">{hoveredTerm}</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                {GLOSSARY[hoveredTerm]}
              </p>
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/80 border-b border-r border-white/10 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
