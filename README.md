# ai-landing

[![Netlify Status](https://api.netlify.com/api/v1/badges/c332a0b5-9b9b-4a9d-9dfe-cd2e6aa5dc16/deploy-status)](https://app.netlify.com/projects/landing-ai-iqbalaqaba/deploys)
[![Cursor](https://img.shields.io/badge/Cursor-000000?logo=cursor)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)


> A production-ready corporate landing page starter — clean, spacious, and neutral-first. Built with **React**, **Vite**, and **Tailwind CSS**, designed to be extended section-by-section without UI library lock-in.

---

## Overview

This project is a modular single-page marketing site with a sticky, theme-aware navbar, full-viewport hero, and fourteen content sections driven by local data files. Layout follows a disciplined 12-column system, `max-w-[1280px]` containers, and Tailwind default tokens for color, spacing, and typography.

**Design direction:** calm, premium, corporate, minimal — no gradients, decorative blobs, or SaaS clichés.

---

## Master prompt

Use this prompt to regenerate or extend the project with the same constraints:

**Click to expand full master prompt**

Build a production-ready corporate landing page using **React**, **Vite**, and **Tailwind CSS**.

**Architecture**

- Scalable folder structure with reusable section components
- Shared layout container, button, and section heading patterns
- Data-driven rendering for nav links, stats, pricing, blog, FAQ, use cases, and value items
- Functional React components; composition over monoliths
- No external UI libraries — Tailwind utility classes only

**Layout system**

- Page background: `gray-50` and white
- Container: `max-w-[1280px]`, `px-4 sm:px-6 lg:px-8`
- 12-column grid; mobile-first stacking
- Section spacing ~80px (`py-16 lg:py-20`)
- Hero: full viewport, dark/image background, single `h1`

**Sections (top to bottom)**

1. Sticky navbar — logo + links left, CTA right
2. Hero — heading, description, image/background
3. Social proof — intro + partner logos
4. Value intro + three alternating value content blocks
5. Statistics — split heading + three stat cards
6. Testimonial
7. Use cases — 6-card grid
8. Pricing — 3 cards, one emphasized
9. Blog — 3 cards + arrow controls
10. CTA
11. FAQ — accordion-ready markup
12. Footer

**Accessibility**

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Correct heading hierarchy; visible `focus-visible` states
- WCAG AA contrast on text and interactive elements

**Content**

- Lorem ipsum placeholder copy and fake company names
- Placeholder images only



---

## Project structure

### Root

```
├── index.html          # App shell + Google Fonts
├── vite.config.js      # Vite + Tailwind plugin
├── package.json
└── public/             # Static assets (favicon, icons)
```

### Source (`src/`)

#### Entry & app


| File        | Purpose                                         |
| ----------- | ----------------------------------------------- |
| `main.jsx`  | React root mount                                |
| `App.jsx`   | Page composition — assembles all sections       |
| `index.css` | Tailwind import, typography tokens, base styles |


#### Layout (`components/layout/`)


| File             | Purpose                                      |
| ---------------- | -------------------------------------------- |
| `Container.jsx`  | Shared `max-w-[1280px]` wrapper              |
| `Navbar.jsx`     | Sticky nav, scroll-aware theme, mobile menu  |
| `navbarTheme.js` | Nav color tokens (`top` / `scrolled` states) |
| `Footer.jsx`     | Corporate footer with link groups            |


#### Sections (`components/sections/`)


| File                    | Section                                  |
| ----------------------- | ---------------------------------------- |
| `Hero.jsx`              | Full-viewport hero + background image    |
| `SocialProof.jsx`       | Trust intro + partner logos              |
| `PartnerLogoTicker.jsx` | Logo marquee/ticker                      |
| `ValueIntro.jsx`        | “Our value” intro block                  |
| `ValueContent.jsx`      | Alternating two-column value blocks (×3) |
| `Statistics.jsx`        | Stats heading + metric cards             |
| `Testimonial.jsx`       | Client quote block                       |
| `UseCases.jsx`          | 6-card use case grid                     |
| `Pricing.jsx`           | 3-tier pricing cards                     |
| `Blog.jsx`              | Editorial blog cards                     |
| `CTA.jsx`               | Contact call-to-action                   |
| `FAQ.jsx`               | Accordion-ready FAQ list                 |


#### UI primitives (`components/ui/`)


| File                   | Purpose                               |
| ---------------------- | ------------------------------------- |
| `Button.jsx`           | Primary/secondary button system       |
| `SectionHeading.jsx`   | Eyebrow + title + description pattern |
| `ImagePlaceholder.jsx` | Accessible image placeholders         |
| `ArrowButtons.jsx`     | Prev/next controls (blog, FAQ)        |


#### Data (`data/`)


| File              | Content                              |
| ----------------- | ------------------------------------ |
| `navigation.js`   | Brand name + nav links               |
| `hero.js`         | Hero copy, actions, background image |
| `socialProof.js`  | Partner logos + intro                |
| `valueContent.js` | Value intro + three content sections |
| `statistics.js`   | Stats copy + metrics                 |
| `testimonial.js`  | Quote, client, company               |
| `useCases.js`     | Six use case cards                   |
| `pricing.js`      | Plans + features                     |
| `blog.js`         | Blog post cards                      |
| `faq.js`          | FAQ items                            |
| `footer.js`       | Footer links + meta                  |


#### Hooks (`hooks/`)


| File               | Purpose                                     |
| ------------------ | ------------------------------------------- |
| `useIsPastHero.js` | Intersection observer — nav theme on scroll |
| `useMobileMenu.js` | Mobile menu open/close + body scroll lock   |


#### Assets (`assets/`)

```
assets/
├── hero.png / hero2.png    # Hero backgrounds
├── logo/                   # Partner logo SVGs
└── …                       # Other static images
```

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

---

## Tech stack


| Layer     | Choice                         |
| --------- | ------------------------------ |
| Framework | React 19                       |
| Bundler   | Vite 6                         |
| Styling   | Tailwind CSS 4                 |
| Animation | Motion                         |
| Deploy    | Netlify-ready (`dist/` output) |


---

## License

Private project — all rights reserved.