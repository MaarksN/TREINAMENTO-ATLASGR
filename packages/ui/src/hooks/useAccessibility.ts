"use client";

import { useEffect, useCallback } from "react";

/**
 * Hook to manage aria-live announcements for screen readers.
 * It creates a visually hidden element in the DOM to broadcast messages.
 */
export function useAccessibility() {
  const announce = useCallback((message: string, politeness: "polite" | "assertive" = "polite") => {
    // Check if we already have an announcer element
    let announcer = document.getElementById("atlas-a11y-announcer");

    if (!announcer) {
      announcer = document.createElement("div");
      announcer.id = "atlas-a11y-announcer";
      // Visually hidden styles to ensure it's not seen but read by screen readers
      announcer.style.position = "absolute";
      announcer.style.width = "1px";
      announcer.style.height = "1px";
      announcer.style.padding = "0";
      announcer.style.margin = "-1px";
      announcer.style.overflow = "hidden";
      announcer.style.clip = "rect(0, 0, 0, 0)";
      announcer.style.whiteSpace = "nowrap";
      announcer.style.border = "0";
      document.body.appendChild(announcer);
    }

    // Set aria-live attributes based on politeness level
    announcer.setAttribute("aria-live", politeness);
    announcer.setAttribute("aria-atomic", "true");

    // Clear the text first to force screen readers to read the new text even if it's identical
    announcer.textContent = "";

    // Use a tiny timeout to ensure the clear registers before adding new text
    setTimeout(() => {
      if (announcer) {
        announcer.textContent = message;
      }
    }, 50);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const announcer = document.getElementById("atlas-a11y-announcer");
      if (announcer && announcer.parentNode) {
        announcer.parentNode.removeChild(announcer);
      }
    };
  }, []);

  return { announce };
}
