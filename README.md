# Bennies

An Astro + TypeScript static site — an AI guide that connects people with personalized benefits, grants, scholarships, healthcare, jobs, and community support.

Built from the two provided design screenshots (landing page + Step 1 onboarding). Content is stored in Astro Content Collections so the categories, opportunities, trust pillars, and intake fields can be edited without touching the components.

## Getting started

Requires **Node 18.14+** (Astro 5 requires Node 18.14 or higher).

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & preview

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## Deployment

The build output in `dist/` is a fully static site — deploy it anywhere that serves static files:

- **DigitalOcean App Platform**: create a new App, choose "Static Site", connect this repo, set the build command to `npm run build` and the output directory to `dist`.
- **Netlify / Vercel / Cloudflare Pages**: connect the repo, framework auto-detects Astro.
- **Any S3 / GCS / static host**: upload `dist/`.

## Project structure

```
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── content.config.ts        # Content Collections schema
    ├── data/                    # JSON data for the collections
    │   ├── categories.json
    │   ├── opportunities.json
    │   ├── trust-pillars.json
    │   └── form-fields.json
    ├── styles/
    │   ├── tokens.css           # Design tokens (colors, radii, shadows)
    │   └── global.css           # Reset, base type, buttons, a11y helpers
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Header.astro
    │   ├── Logo.astro
    │   ├── ProgressIndicator.astro
    │   ├── Hero.astro
    │   ├── HeroVisual.astro
    │   ├── CategoryChip.astro
    │   ├── EligibleCard.astro
    │   ├── AssistantBubble.astro
    │   ├── RecommendedList.astro
    │   ├── TrustPills.astro
    │   ├── FormField.astro
    │   ├── PillToggle.astro
    │   ├── RangeField.astro
    │   ├── MascotCard.astro
    │   └── SiteFooter.astro
    └── pages/
        ├── index.astro          # Landing page (screenshot 1)
        └── onboarding.astro     # Step 1 of onboarding (screenshot 2)
```

## Content editing

Edit any of the JSON files in `src/data/` to change the copy or the number of items — no code changes required. Each file is typed via `src/content.config.ts` using Zod.

## Accessibility

- Skip-to-content link on every page.
- Visible focus rings on all interactive elements.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<aside>`).
- ARIA labels for radio groups, progress bar, and live-updating regions.
- Reduced-motion support via `prefers-reduced-motion`.
- Colors chosen to meet WCAG AA contrast for body text.

## Notes on placeholder assets

The hero portrait in the landing page is an inline SVG illustration, not a stock photo (to avoid shipping unlicensed imagery). Swap it in `src/components/HeroVisual.astro` for a real photo when you have licensed art.
