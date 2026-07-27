import React from "react";
import { cn } from "./utils";
import { PremiumCard } from "./PremiumCard";
import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  variance?: number; // percentage change
  icon?: LucideIcon;
  sparklineData?: number[];
  className?: string;
}

export function MetricCard({ title, value, variance, icon: Icon, sparklineData, className }: MetricCardProps) {
  const isPositive = variance && variance > 0;
  const isNegative = variance && variance < 0;

  return (
    <PremiumCard className={cn("p-5 flex flex-col justify-between min-h-[140px]", className)}>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-sm font-semibold text-muted uppercase tracking-wider">{title}</h4>
        {Icon && (
          <div className="p-2 rounded-lg bg-atlas-orange/10 border border-atlas-orange/20 shadow-[0_0_10px_rgba(255,86,24,0.2)]">
            <Icon className="w-4 h-4 text-atlas-orange" />
          </div>
        )}
      </div>

      <div>
        <div className="flex items-end gap-3">
          <span className="text-3xl font-display font-bold text-foreground">{value}</span>

          {variance !== undefined && (
            <div className={cn(
              "flex items-center text-sm font-semibold mb-1",
              isPositive ? "text-emerald-600 dark:text-emerald-400" : isNegative ? "text-red-600 dark:text-red-400" : "text-muted"
            )}>
              {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : isNegative ? <TrendingDown className="w-4 h-4 mr-1" /> : <Minus className="w-4 h-4 mr-1" />}
              {Math.abs(variance)}%
            </div>
          )}
        </div>

        {/* Sparkline placeholder for corporate aesthetic */}
        {sparklineData && sparklineData.length > 0 && (
          <div className="mt-4 h-8 w-full flex items-end gap-1 opacity-50">
            {sparklineData.map((val, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-atlas-orange rounded-t-sm"
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>
        )}
      </div>
    </PremiumCard>
  );
}
