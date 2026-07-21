"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent({ className, children, ...props }: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={8}
        className={cn(
          "popover-fade z-50 w-80 rounded-xl border border-border bg-surface p-4 shadow-xl",
          className
        )}
        {...props}
      >
        <PopoverPrimitive.Arrow className="fill-surface" />
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}
