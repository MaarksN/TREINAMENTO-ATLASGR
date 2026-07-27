import React, { HTMLAttributes } from "react";
import { cn } from "./utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
}

export const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ children, className, withGlow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative group overflow-hidden rounded-2xl glass transition-all duration-300",
          withGlow && "hover:shadow-[0_0_20px_rgba(255,86,24,0.3)]",
          className
        )}
        {...props}
      >
        {/* Subtle top border gradient */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

        {/* Reflection effect that follows mouse (simulated here via CSS hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--atlas-orange)_8%,transparent)_0%,transparent_60%)] transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);
PremiumCard.displayName = "PremiumCard";
