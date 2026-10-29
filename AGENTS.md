# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + build for production (output: dist/)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
npm run deploy     # Build and push to GitHub Pages via gh-pages
```

There are no tests configured in this project.

## Architecture

React 19 + TypeScript single-page application built with Vite, deployed to GitHub Pages.

**Single-page layout.** The whole portfolio is one vertically scrolling page — there is **no router**. `src/App.tsx` simply stacks every section in order inside a single `<main>`: `Home → About → Projects → Pricing → Contact`. Navigating between sections never changes the URL path or reloads the page.

Each top-level page/section component renders a `<section>` with:
- a unique `id` (`home`, `about`, `projects`, `pricing`, `contact`) used as the anchor target;
- the shared `.section` class, which applies `scroll-margin-top` so anchored headings clear the fixed navbar.

**Navbar behavior.** `Navbar` (`src/components/layout/Navbar/`) is the in-page menu. Its links are **not** route changes: clicking one calls `scrollToSection(id)` to perform an animated smooth scroll to the matching `<section>`. A scroll-spy built with `IntersectionObserver` highlights the link of the section currently in view (`.active`). The list of sections is defined once in `src/utils/scroll.ts` (`sections`) and shared by the navbar and `App.tsx` ordering.

**Anchor navigation convention.** Any in-page CTA that should jump to a section (e.g. the Home hero button, the Pricing cards' "Richiedi un preventivo" button) imports `scrollToSection` from `src/utils/scroll.ts`. Never use `react-router` navigation — smooth scroll is the only navigation mechanism. (`react-router-dom` is still in `package.json` but is no longer used and can be removed.)

**Pricing section.** `src/components/ui/Pricing/` holds the reusable "Listino Prezzi" feature:
- `Pricing.tsx` — the `<section id="pricing">` wrapper that renders the plan grid.
- `PricingCard.tsx` — a self-contained, reusable card for a single plan (`base` / `business` / `premium`); the `featured` plan gets a highlighted style + "Più scelto" badge.
- `Pricing.scss` — styles for both the section and the card.
Plan data lives in `src/data/pricing.ts` as a `PricingPlan[]` (type in `src/types/index.ts`).

**Pages** live in `src/pages/<PageName>/` with co-located SCSS files. **UI components** live in `src/components/ui/` and layout components (Navbar, Footer) in `src/components/layout/`. The `Footer` is statically positioned at the end of the page (not fixed).

**Data** is in `src/data/` — `projects.ts` and `pricing.ts`, static arrays of typed objects. Types are defined in `src/types/index.ts`.

**Styling** uses SCSS modules co-located with each component/page. Global styles are in `src/index.css`, which also enables CSS `scroll-behavior: smooth` (disabled under `prefers-reduced-motion`) and defines the `.section` scroll offset.

## Contact Form

`Contact.tsx` uses Formspree (`https://formspree.io/f/TUO_ID`). The placeholder endpoint `TUO_ID` needs to be replaced with the real Formspree form ID before the form works.

## Deployment

`deploy.sh` prompts for a commit message, runs the build, then pushes the `dist/` folder to the `gh-pages` branch via `npx gh-pages`. The live site is at `https://LucaAlmas.github.io`.
