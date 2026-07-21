# Contribution Guide

How to contribute to the repository.

## Design System Governance

To maintain the **ATLASGR TRAINING PLATFORM ENTERPRISE DESIGN SYSTEM 2026** as a premium, unified "modern corporate command center":

1. **Reusability First**:
   - Before building any new component or applying custom Tailwind utility combinations, you **must** check `packages/ui` for an existing primitive or `apps/portal/components` for an existing pattern.
   - Do not create isolated "local" UI components that duplicate Design System functionality.

2. **Requesting a New Component**:
   If a needed component or visual pattern truly does not exist in the Design System:
   - **Step 1:** Do not write it locally in your feature branch.
   - **Step 2:** Open a formal "Design System Component Request" Issue in the repository. Provide the context, use case, and verify it aligns with the institutional palette (Orange #FF5618 / Dark Gray #333333) and typography (Mont / Montserrat).
   - **Step 3:** Wait for an Architect/Design Systems Engineer to approve the proposal.
   - **Step 4:** Once approved, the component must be developed inside `packages/ui`, strictly typed with TypeScript, tested, and inherently compliant with WCAG 2.2 AA (e.g., using `useAccessibility` or `.focus-visible-ring`).

3. **Performance and Accessibility**:
   - All contributions must preserve the `< 3s` render time goal.
   - All interactive elements must support keyboard navigation and screen reader announcements.
