"use client";

import { useState } from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, Book, FileText, Briefcase, Award, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHotkeys } from "@/lib/useHotkeys";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useHotkeys({
    "ctrl+k": () => setOpen((v) => !v),
    "meta+k": () => setOpen((v) => !v),
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="fixed top-[20%] left-[50%] z-50 w-full max-w-[640px] -translate-x-[50%] overflow-hidden rounded-xl glass border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              >
                <Command className="w-full bg-transparent flex flex-col">
                  <div className="flex items-center border-b border-white/10 px-4">
                    <Search className="h-5 w-5 text-gray-400" />
                    <Command.Input
                      placeholder="Busque por produtos, glossário, treinamentos..."
                      className="flex-1 bg-transparent px-4 py-4 text-lg text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                  <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/20">
                    <Command.Empty className="p-4 text-center text-gray-400">Nenhum resultado encontrado.</Command.Empty>

                    <Command.Group heading="Ações Rápidas" className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                      <Command.Item className="flex items-center gap-2 px-2 py-3 rounded-md text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                        <Zap className="h-4 w-4 text-atlas-orange" />
                        Acessar Cockpit
                      </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Treinamentos" className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1 mt-2">
                      <Command.Item className="flex items-center gap-2 px-2 py-3 rounded-md text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                        <Award className="h-4 w-4" />
                        Gerenciamento de Risco
                      </Command.Item>
                      <Command.Item className="flex items-center gap-2 px-2 py-3 rounded-md text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                        <Book className="h-4 w-4" />
                        Software Logístico
                      </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Base de Conhecimento" className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1 mt-2">
                      <Command.Item className="flex items-center gap-2 px-2 py-3 rounded-md text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                        <FileText className="h-4 w-4" />
                        Glossário: SLA
                      </Command.Item>
                      <Command.Item className="flex items-center gap-2 px-2 py-3 rounded-md text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                        <Briefcase className="h-4 w-4" />
                        Cases de Sucesso
                      </Command.Item>
                    </Command.Group>
                  </Command.List>
                </Command>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
