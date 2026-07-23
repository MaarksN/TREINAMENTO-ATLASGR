import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atlas-orange/50 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden relative",
  {
    variants: {
      variant: {
        primary: "bg-gradient-atlas text-white shadow-premium hover:shadow-[0_8px_40px_rgba(255,86,24,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:brightness-95 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        secondary: "bg-surface-2 text-foreground border border-border/50 hover:bg-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        outline: "border border-border/70 bg-transparent text-foreground hover:border-atlas-orange hover:text-atlas-orange hover:bg-atlas-orange/5",
        ghost: "bg-transparent text-foreground hover:bg-surface-2",
        glass: "glass-card text-foreground hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 border border-white/20",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-xl",
        xl: "h-14 px-8 text-lg rounded-xl font-semibold",
      },
      fullWidth: {
        true: "w-full",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {!isLoading && leftIcon && <span aria-hidden="true" className="z-10 relative">{leftIcon}</span>}
        <span className="z-10 relative flex items-center justify-center gap-2">{children}</span>
        {!isLoading && rightIcon && <span aria-hidden="true" className="z-10 relative">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
