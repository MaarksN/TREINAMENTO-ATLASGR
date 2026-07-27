import { type HTMLAttributes, forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-2xl border border-border/50 bg-surface transition-all duration-300 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "shadow-sm hover:shadow-md",
        glass: "glass-card",
        elevated: "shadow-premium hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 dark:hover:shadow-[0_20px_40px_-15px_rgba(255,86,24,0.1)]",
        interactive: "hover:border-atlas-orange/50 hover:shadow-md cursor-pointer group hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  withGlow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, withGlow, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        {withGlow && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-atlas-orange/50 to-transparent" />
            <div className="absolute inset-y-0 -left-px w-px h-full bg-gradient-to-b from-transparent via-atlas-orange/20 to-transparent" />
          </div>
        )}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Card variant="glass" className={className} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-4 flex flex-col space-y-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-semibold text-lg leading-none tracking-tight font-display", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0 mt-auto", className)}
      {...props}
    />
  );
}

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: ReactNode;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
}

export function MetricCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  ...props
}: MetricCardProps) {
  return (
    <Card variant="elevated" className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted">{title}</CardTitle>
        {icon && <div className="text-atlas-orange bg-atlas-orange/10 p-2 rounded-lg">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-display font-bold">{value}</div>
        {(description || trend) && (
          <div className="mt-2 flex items-center text-xs font-medium">
            {trend && (
              <span
                className={cn(
                  "mr-2 px-1.5 py-0.5 rounded-full",
                  trend.isPositive
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </span>
            )}
            <span className="text-muted">{description || trend?.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
