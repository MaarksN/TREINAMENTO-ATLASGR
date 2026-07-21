"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, AlertCircle, Target, CheckCircle2 } from "lucide-react";

// Define the steps required by the storytelling narrative
const STEPS = [
  { id: "context", label: "Contexto", icon: BookOpen },
  { id: "problem", label: "Problema", icon: AlertCircle },
  { id: "solution", label: "Solução Atlas", icon: Target },
  { id: "quiz", label: "Quiz", icon: CheckCircle2 },
] as const;

export type StorytellingStep = typeof STEPS[number]["id"];

export interface StorytellingWrapperProps {
  children: React.ReactNode;
  /** Initial step, defaults to "context" */
  defaultStep?: StorytellingStep;
  /** Callback fired when step changes */
  onStepChange?: (step: StorytellingStep) => void;
  className?: string;
}

/**
 * StorytellingWrapper
 *
 * Força a estrutura narrativa: Contexto -> Problema -> Solução Atlas -> Quiz.
 * Utiliza o componente Tabs do Radix UI para acessibilidade e navegação com suporte a teclado.
 * Anima a transição das abas usando framer-motion.
 */
export function StorytellingWrapper({
  children,
  defaultStep = "context",
  onStepChange,
  className,
}: StorytellingWrapperProps) {
  const [activeStep, setActiveStep] = useState<StorytellingStep>(defaultStep);

  const handleStepChange = (value: string) => {
    const step = value as StorytellingStep;
    setActiveStep(step);
    if (onStepChange) {
      onStepChange(step);
    }
  };

  const currentIndex = STEPS.findIndex(s => s.id === activeStep);

  const goToNextStep = () => {
    if (currentIndex < STEPS.length - 1) {
      handleStepChange(STEPS[currentIndex + 1].id);
    }
  };

  return (
    <Tabs.Root
      value={activeStep}
      onValueChange={handleStepChange}
      className={`flex flex-col w-full max-w-5xl mx-auto ${className || ""}`}
    >
      <Tabs.List className="flex overflow-x-auto border-b border-border mb-8 scrollbar-hide" aria-label="Passos da Narrativa">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <Tabs.Trigger
              key={step.id}
              value={step.id}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap focus-visible-ring
                ${isActive
                  ? "border-atlas-orange text-foreground"
                  : "border-transparent text-muted hover:text-foreground hover:border-border"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {step.label}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      <div className="relative min-h-[400px]">
        {/* We map children and match them to the steps.
            Expected usage is to pass StorytellingContent components as children.
            For simplicity in a wrapper, we can assume children contain Tabs.Content matching the values,
            OR we inject Tabs.Content around specific typed children.
            Here we assume the children itself contains Tabs.Content or we can render children directly
            inside AnimatePresence if we manage it manually.
            However, since Tabs handles accessibility better by connecting Trigger to Content,
            the caller should provide Tabs.Content or we should wrap them.
            We will assume children are standard elements and we inject Tabs.Content dynamically for demonstration.
        */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full focus-visible-ring focus:outline-none"
            tabIndex={0}
          >
            {/* The actual content should be provided by the consumer matching the active tab.
                For a robust strict structure, the consumer provides an object of contents or
                we use Context to register contents.
                Let's assume `children` handles rendering the correct content based on `activeStep` (e.g. passing it via context)
                or we just render children which contain all Tabs.Content.
                We will render children as is, expecting the consumer to use `StorytellingContent`.
            */}
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {currentIndex < STEPS.length - 1 && (
        <div className="flex justify-end mt-8">
          <button
            onClick={goToNextStep}
            className="flex items-center gap-2 px-6 py-3 bg-atlas-graphite text-white font-medium rounded-md hover:bg-black transition-colors focus-visible-ring"
          >
            Próximo: {STEPS[currentIndex + 1].label}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </Tabs.Root>
  );
}

export interface StorytellingContentProps {
  value: StorytellingStep;
  children: React.ReactNode;
  className?: string;
}

export function StorytellingContent({ value, children, className }: StorytellingContentProps) {
  return (
    <Tabs.Content value={value} className={`outline-none ${className || ""}`}>
      {children}
    </Tabs.Content>
  );
}
