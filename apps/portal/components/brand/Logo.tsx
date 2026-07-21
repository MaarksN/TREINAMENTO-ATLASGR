import { cn } from "@/lib/utils";
import { BASE_PATH } from "@/lib/basePath";

// Logomarca oficial da ATLASGR, baixada de atlasgr.com.br (public/brand/*.svg).
// Plain <img> (não next/image): no modo unoptimized do static export, o
// next/image não reescreve o src com o basePath do GitHub Pages.
export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  if (!withWordmark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BASE_PATH}/brand/atlas-favicon.svg`} alt="ATLASGR" width={28} height={19} />
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE_PATH}/brand/atlas-logo.svg`}
        alt="ATLASGR"
        width={140}
        height={31}
        className="dark:brightness-0 dark:invert"
      />
    </span>
  );
}
