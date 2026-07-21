"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "./store";

// Zustand persist rehydrates from localStorage asynchronously, so on a hard
// page load `registration` is briefly null before hydration finishes. This
// hook waits for hydration before deciding to redirect, avoiding a false
// bounce back to "/" on direct links, refreshes, or static hosting.
export function useRequireRegistration() {
  const router = useRouter();
  const hasHydrated = useOnboardingStore((s) => s.hasHydrated);
  const registration = useOnboardingStore((s) => s.registration);

  useEffect(() => {
    if (hasHydrated && !registration) router.replace("/");
  }, [hasHydrated, registration, router]);

  return { ready: hasHydrated && !!registration, registration };
}
