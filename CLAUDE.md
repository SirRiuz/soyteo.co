# CLAUDE.md — soyteo.co

Personal portfolio of **Mateo Jiménez (SirRiuz)** — full-stack software
engineer. The site's goal is recruiter visibility (big tech: Google, Meta,
Amazon) and LLM/search discoverability. Live at **https://soyteo.co**.

## Repo layout

```
frontend/          React 19 + TypeScript + Vite SPA (the actual site)
  brand/           Brand source assets + generate.sh (see Brand section)
  public/          favicons, og-image.png, manifest, robots, sitemap, llms.txt
  src/screens/     Home, Projects, CV, Github/Linkedin (redirect screens)
  src/components/  NavBar, Cursor, Background, buttons, AnimatedTitle, ...
api/               FastAPI service (healthcheck module) + nginx config
```

## Commands

```bash
cd frontend
npm run dev      # Vite dev server, port 3000 (falls back to 3001 if busy)
npm run build    # tsc + vite build → dist/  (use this as the type check)
```

Docker: `docker-compose.yml` at root builds api + frontend. Deploy branch
flow: feature branches → PRs into `develop`.

## Design system (unified across the whole site)

### Palette

| Token | Value | Use |
|---|---|---|
| Cream (bg) | `#F4ECE1` | page background (+ gradient in App.css), theme-color |
| Surface | `#FBF7F0` | modals, terminal window, GitHub button |
| Translucent surface | `rgba(255,255,255,.45–.55)` | cards, chips, nav dock, inputs |
| Ink | `#2F2F2F` | text, primary CTAs, active nav pill |
| Terracotta (accent) | `#E76F51` | brand dot, cursor, links focus, "Hi", keywords |
| Thiup terracotta | `#A85432` | Thiup card/icon only |
| Warm gray | `#8A7A68` / `#909090` | secondary text |
| State green | `#10B981` | "in production", availability dot |

### Brand motif — the dot

The trailing terracotta dot is THE brand element. It appears in: the "t."
monogram (favicon), typewriter titles ("Mateo ."), nav active tab
("Home**.**"), contact modal title ("Say hello**.**"), cursor dot, and the
terminal card caret. Keep it when adding anything new.

### Recurring surface recipe

Cards/modals: radius **16px**, `border: 1px solid rgba(47,47,47,0.06–0.12)`,
shadow `0 30px 80px rgba(47,47,47,0.16–0.18)` (soft ink, never pure black).
Pills (chips, buttons, nav, scrollbar thumb): radius **999px**.
Primary CTA: ink pill, cream text, hover `translateY(-2px)` + softer shadow.
Secondary CTA: transparent pill, 1.5px ink border.

### Typography

Poppins everywhere (loaded in index.html with `display=swap`). Terminal
card uses SF Mono/Menlo stack.

### Motion language (framer-motion)

- Shared-element open animation: grid card → fullscreen card uses
  `layoutId` on the **container AND the inner icon/title**
  (`icon-${id}`, `title-${id}`), all driven by `LAYOUT_SPRING`
  (stiffness 320, damping 32, no overshoot) exported from
  `src/screens/Projects/types.ts`.
- Modal-only content (description, CTAs, header) fades up AFTER the morph
  (`FADE_IN_PROPS`, delay 0.12s) and fades out fast on exit (0.15s).
- Overlay (`AnimatedScreen`): static `backdrop-filter: blur(14px)`, animate
  **opacity only** (never animate filter/backdrop-filter — jank on mobile).
- Hero content staggers in with `FadeUp` (80ms per block).
- Hovers: scale 1.03–1.05 or translateY(-2px); taps: scale ~0.96.

### Z-index scale

| Layer | z-index |
|---|---|
| Page content | auto |
| Overlay (AnimatedScreen) | 1200 |
| Modals (ContactModal, ModalCard) | 1210 |
| Cursor ring / dot | 9998 / 9999 |

Transformed elements (framer float animations) create stacking contexts —
any new fixed overlay MUST get a z-index from this scale or the terminal
card will paint over it (that bug already happened once).

## Key components

- **NavBar** — pill dock, sliding ink `ActivePill` (`layoutId="nav-pill"`),
  active label gets the terracotta dot. Container is 130px tall (92px
  ≤900px) — page spacing depends on it.
- **Cursor** — brand dot + trailing ring. Renders ONLY when
  `(hover: hover) and (pointer: fine)` matches (never on touch; reactive
  via matchMedia listener). `App.css` scopes `cursor: none` to the same
  query. Non-semantic clickables must opt in with `data-cursor="pointer"`;
  `a`, `button`, `[role=button]` are auto-detected.
- **TerminalCard** (Home right column, md+ only) — the `mateo.ts` code
  window. Pure CSS/JSX, fluid width `min(480px, 100%)`, floating badge
  `/favicon.svg`. Syntax colors come from the palette.
- **Projects cards** — title + state visible on the card. Archived projects
  always go LAST in `src/screens/Projects/constants.tsx`. Each project has
  `links` (first one renders as the primary CTA in the fullscreen card).
- **ContactModal** — Formspree (`xgorpeep`) + Cloudflare Turnstile
  (`theme: "light"`, animated in via `captchaReady` state). Escape closes.

## SEO / LLM visibility (critical — keep in sync)

The SPA ships **static crawlable content inside `#root`** in
`frontend/index.html` (hidden with `display:none`, replaced by React on
mount). LLM crawlers don't run JS — this block plus `public/llms.txt` is
what they see. There is also a JSON-LD `@graph` (Person, WebSite,
ProfilePage, ItemList of projects) in index.html, per-route
title/description/canonical via the `RouteMeta` component in `App.tsx`,
`robots.txt` (AI crawlers explicitly allowed) and `sitemap.xml`.

**When adding/changing a project you must update ALL of:**
1. `src/screens/Projects/constants.tsx`
2. JSON-LD ItemList in `index.html`
3. Static block inside `#root` in `index.html`
4. `public/llms.txt`

Pages keep an `sr-only` `<h1>` (Home, Projects) — don't remove them.

## Brand assets

Source of truth: `frontend/brand/` — "t." monogram SVGs + `og-image.html`
(1200×630 template) + `generate.sh` (renders every favicon/og PNG into
`public/` with headless Chrome). Full docs in `frontend/brand/README.md`.
If the brand or tagline changes, edit the SVGs/template and re-run
`bash frontend/brand/generate.sh`. After deploying og-image changes,
re-scrape in Facebook Sharing Debugger / LinkedIn Post Inspector.

## Gotchas (learned the hard way)

- **No `@emotion/babel-plugin`**: component selectors in emotion
  (`${Item}:hover &`) crash at runtime with a blank page. Use props on the
  parent instead.
- **Vite inlines small SVGs as data URIs** → always quote CSS urls built
  from imports: `url("${icon}")`, never `url(${icon})`.
- **AnimatePresence children need explicit keys** — unkeyed siblings get
  duplicate `""` keys (React warning).
- SVGs used as `background-image` should carry explicit `width`/`height`
  attributes besides `viewBox`.
- `html/body` need an explicit `background-color` (cream) — the gradient
  alone leaves the iOS/macOS rubber-band overscroll white.
- Old `public/icon.png` (memoji) is intentionally kept so stale crawler
  caches don't 404.

## Verification workflow used in this repo

`npm run build` (type check) + headless-Chrome/puppeteer-core screenshots
from the session scratchpad (desktop 1440×1000, phone 390×844, tablet
768×1024), a console-error sweep (goal: zero warnings), and CDP screencast
frames for animation work. Framer animations freeze under
`--virtual-time-budget` screenshots — use puppeteer with real waits.
