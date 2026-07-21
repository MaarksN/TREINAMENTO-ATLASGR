# Content Standard

Guidelines for structuring Markdown modules and JSON knowledge files without hardcoded UI logic.

## UX and Governance (Modules)

1. **Strict Narrative Structure**: All content modules must follow the Storytelling sequence implemented by `StorytellingWrapper`.
   - **Contexto** (Context): What is the scenario or situation?
   - **Problema** (Problem): What is the challenge being faced?
   - **Solução Atlas** (Atlas Solution): How does Atlas solve this challenge?
   - **Quiz**: Assessment of the knowledge acquired.
   Modules should not invent new structural flows that break this mental model.

2. **No Inline or Local Styles**: Do not use inline styles (`style={{...}}`) or create custom CSS files for modules.
   - Rely solely on the AtlasGR Design System components (e.g., `StorytellingWrapper`, `ContentBlockView`, `Button`).
   - Use global utility classes defined in the Design System (like `focus-visible-ring` or `text-gradient-atlas`) via Tailwind CSS.

3. **Accessibility (WCAG 2.2 AA)**: All content must remain accessible.
   - Ensure dynamic content changes use `useAccessibility` to announce updates to screen readers.
   - Maintain keyboard focus visibility globally using `.focus-visible-ring`.
