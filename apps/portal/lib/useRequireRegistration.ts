"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useOnboardingStore } from "./store";

// Zustand persist rehydrates from localStorage asynchronously, so on a hard
// page load `registration` is briefly null before hydration finishes. This
// hook waits for hydration before deciding to redirect, avoiding a false
// bounce back to "/" on direct links, refreshes, or static hosting.
//
// The redirect carries `authRequired=1` + the original path in `returnTo` so
// the Home page can explain why the user landed there (toast), auto-open the
// access modal, and send them back to where they meant to go afterwards.
export function useRequireRegistration() {
  const router = useRouter();
  const pathname = usePathname();
  const hasHydrated = useOnboardingStore((s) => s.hasHydrated);
  const registration = useOnboardingStore((s) => s.registration);

  useEffect(() => {
    if (hasHydrated && !registration) {
      router.replace(`/?authRequired=1&returnTo=${encodeURIComponent(pathname)}`);
    }
  }, [hasHydrated, registration, router, pathname]);

  return { ready: hasHydrated && !!registration, registration };
}
