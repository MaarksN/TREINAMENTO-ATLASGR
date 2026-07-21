import { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

interface MetricCardProps {
  title: string;
  value: ReactNode;
  icon: ReactNode;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
}

export function MetricCard({ title, value, icon, subtitle, trend }: MetricCardProps) {
  return (
    <Card className="p-5 flex flex-col justify-between">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted">
        <span className="text-atlas-orange">{icon}</span>
        {title}
      </div>
      <div className="mt-4">
        <div className="font-display text-2xl font-bold text-foreground">
          {value}
        </div>
        {subtitle && (
          <p className="mt-1 text-xs text-muted">{subtitle}</p>
        )}
        {trend && (
          <p className={`mt-2 text-xs font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}% <span className="text-muted font-normal">{trend.label}</span>
          </p>
        )}
      </div>
    </Card>
  );
}
