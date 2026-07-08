# killianhinard.com

Personal portfolio of Killian Hinard — Computer Vision & AI engineer.
Built with **Next.js (App Router) + TypeScript**, statically exported, and
deployed to **GitHub Pages** at [killianhinard.com](https://killianhinard.com).

## Tech stack

| Concern    | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router), React 19                 |
| Language   | TypeScript                                        |
| Styling    | CSS Modules + CSS custom properties (design tokens) |
| Animation  | Framer Motion (`motion`)                          |
| Output     | Static export (`output: 'export'` → `out/`)       |
| Hosting    | GitHub Pages via GitHub Actions                   |
| Node       | 26.4.0 (see `.nvmrc`)                             |

## Local development

```bash
nvm use            # picks 26.4.0 from .nvmrc
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
```

## Project structure

```
src/
├─ app/                    # routes (App Router): each folder = a URL
│  ├─ layout.tsx           # shell: <html>, metadata, Nav + Footer
│  ├─ page.tsx             # "/"            Home (hero + skills)
│  ├─ experience/page.tsx  # "/experience" Experience & education
│  ├─ projects/page.tsx    # "/projects"   Filterable project grid
│  ├─ contact/page.tsx     # "/contact"    Contact
│  └─ globals.css          # reset + shared utilities (.glass, .container…)
├─ components/             # reusable UI (Nav, Hero, ProjectCard, Timeline…)
├─ content/                # ← EDIT HERE to update the site
│  ├─ profile.ts           #   identity, hero, skills, socials
│  ├─ projects.ts          #   the 15 projects
│  └─ resume.ts            #   education / experience / extracurricular
└─ styles/tokens.css       # the design system (colors, type, spacing, motion)
```

**To update content**, edit the files in `src/content/` — you rarely touch
components. **To retheme**, edit `src/styles/tokens.css` (Nord "Polar Night"
palette lives there).

### Server vs. Client Components

Most components are **Server Components** (render to HTML at build, ship no JS).
Interactive ones are marked `"use client"`: `Nav`, `Hero`, `Constellation`,
`Reveal`, `ProjectsGrid`, `CopyEmail`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm run build` and publishes `out/` to GitHub Pages. The custom domain is set
via `public/CNAME`; `public/.nojekyll` stops Pages from ignoring `_next/`.
