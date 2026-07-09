# Personal Portfolio

<img width="2547" height="1227" alt="image" src="https://github.com/user-attachments/assets/3ca8932a-82f8-4fb0-9ee8-35d8848582a6" />

My Personal portfolio. Built as a statically-exported [Next.js](https://nextjs.org) site and deployed to GitHub
Pages. Live at **[killianhinard.com](https://killianhinard.com)**.

The project is intentionally simple to fork and adapt: all copy lives in a few
typed data files, and the entire visual language is driven by CSS custom
properties in one stylesheet.

## Tech stack

| Concern    | Choice                                                     |
| ---------- | ---------------------------------------------------------- |
| Framework  | Next.js 16 (App Router), React 19                          |
| Language   | TypeScript                                                 |
| Styling    | CSS Modules + CSS custom properties (design tokens)        |
| Animation  | [Framer Motion](https://motion.dev) (`motion`)             |
| Icons      | [Iconify](https://iconify.design) (`@iconify/react`)       |
| Output     | Static export (`output: 'export'`)                         |
| Hosting    | GitHub Pages via GitHub Actions                            |
| Runtime    | Node.js 26 (see `.nvmrc`)                                  |

## Features

- Four pages — Home, Experience & Education, Projects, Contact.
- Content separated from presentation: edit typed data, not markup.
- A single design-token file controls the whole palette, type scale, and motion.
- Per-page animated SVG motifs and a canvas hero background, all pausing or
  disabling themselves under `prefers-reduced-motion`.
- Filterable project grid with an accessible detail modal.
- Fully static output — no server required at runtime.

## Getting started

Requires Node.js 26 (an `.nvmrc` is provided).

```bash
nvm use            # selects the Node version from .nvmrc
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # static export to ./out
npm run lint       # ESLint
```

## Project structure

```
src/
├─ app/                     # App Router: each folder is a route
│  ├─ layout.tsx            # document shell, metadata, Nav + Footer
│  ├─ page.tsx              # "/"            Home
│  ├─ experience/page.tsx   # "/experience" Experience & Education
│  ├─ projects/page.tsx     # "/projects"   Projects
│  ├─ contact/page.tsx      # "/contact"    Contact
│  └─ globals.css           # reset, base type, and shared utilities
├─ components/              # reusable UI and SVG/canvas motifs
├─ content/                 # site data (edit these to update the site)
│  ├─ profile.ts            #   identity, hero, stats, socials, skills
│  ├─ projects.ts           #   project catalogue
│  └─ resume.ts             #   education, experience, extracurriculars
└─ styles/
   └─ tokens.css            # design tokens: color, type, spacing, motion
```

## Editing content

Day-to-day updates only require editing `src/content/`:

- `profile.ts` — name, role, hero copy, "at a glance" highlights, headline
  stats, social links, and the three skill groups.
- `projects.ts` — the project list. Each entry has a `category` (used by the
  filter), free-form `tags`, and a `links` array (external URLs, GitHub, or PDFs
  served from `public/pdfs/`).
- `resume.ts` — education, professional experience, and extracurricular
  sections rendered as timelines.

Project images live in `public/projects/` and are referenced by path from
`projects.ts`.

## Theming

The visual design is defined entirely by CSS custom properties in
`src/styles/tokens.css` — background and surface colors, the accent palette,
the fluid type scale, spacing, radii, glass surfaces, and motion timing.
Adjusting those variables restyles the whole site.

Two shared utility layers build on the tokens in `src/app/globals.css`:

- Surface and text helpers: `.glass`, `.container`, `.section`, `.eyebrow`,
  `.section-head`, `.section-lead`, `.gradient-text`.
- A button system: `.btn` with `.btn-primary`, `.btn-ghost`, `.btn-sm`, and a
  reveal-on-hover `.btn-arrow`.

## Architecture notes

- **App Router.** Routes are defined by the folder structure under `src/app`.
- **Server vs. Client Components.** Components render on the server by default
  (no client JavaScript). Interactive pieces opt in with `"use client"`:
  `Nav`, `Hero`, `Constellation`, `Reveal`, `ProjectsGrid`, `ProjectModal`,
  `SkillLogos`, and the `Ico` icon wrapper.
- **Static export.** `next.config.ts` sets `output: 'export'`, unoptimized
  images, and trailing slashes so `next build` emits a self-contained `out/`
  directory suitable for any static host.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `out/` to GitHub Pages. The custom domain is set by `public/CNAME`,
and `public/.nojekyll` prevents Pages from ignoring the `_next/` directory.

For a GitHub Pages **user site**, the repository must be named
`<username>.github.io`. In the repository settings, set **Pages → Source** to
**GitHub Actions**.

## Reusing this project

To adapt it for your own portfolio:

1. Replace the content in `src/content/` and the assets in `public/`.
2. Update the domain in `src/app/layout.tsx` (`metadataBase` and `openGraph.url`)
   and in `public/CNAME` — or remove `CNAME` to serve from the default
   `*.github.io` domain.
3. Retheme via `src/styles/tokens.css`.
4. Swap the favicon at `src/app/favicon.ico`.

## License

Released under the [MIT License](LICENSE).
