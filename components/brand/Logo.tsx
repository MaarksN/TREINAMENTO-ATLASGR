import Image from "next/image";
import { cn } from "@/lib/utils";

// Logomarca oficial da ATLASGR, baixada de atlasgr.com.br (public/brand/*.svg).
export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  if (!withWordmark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image src="/brand/atlas-favicon.svg" alt="ATLASGR" width={28} height={19} priority />
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image src="/brand/atlas-logo.svg" alt="ATLASGR" width={140} height={31} priority className="dark:brightness-0 dark:invert" />
    </span>
  );
}
