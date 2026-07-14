# CLAUDE.md — Mateo Jimenez CV Project

This file is the source of truth for generating, updating, or adapting Mateo Jimenez's CVs and LinkedIn content. Read it fully before making any change. Facts here override anything you infer. If information is missing, ASK — never invent.

Last verified by Mateo: July 2026. If a fact has changed, update this file FIRST, then regenerate outputs.

## Core rules (non-negotiable)

- NEVER invent metrics, dates, titles, or technologies. The only verified personal metrics are GootWork's 30% and 40%. The 12M+ figure is Big Health's public number and MUST be phrased as "available to 12M+ people" — never "serving", "active users", or personal attribution.
- ALWAYS output exactly one page. If content overflows, cut in this order: (1) GootWork 3rd bullet, (2) Atom/Connected Parent bullet, (3) second sentences of project descriptions. Never cut Big Health content.
- ALWAYS generate both language versions (EN and ES) as exact content mirrors when either changes.
- ALWAYS verify ATS extraction after generating a PDF: run `pdftotext` (or equivalent) and confirm no dropped characters. Mateo's original CV silently corrupted text ("ull-Stack", "jango") and cost him applications.
- Every claim must survive one interview follow-up question ("where does that number come from?").
- CV content must tell the same story as Mateo's LinkedIn (headline, About, roles, dates). Flag any change that requires a LinkedIn update.

## Prohibited (decided; do not reintroduce)

1. Java — anywhere. His only Java exposure was ~2 days on Red de Amor; not defensible.
2. Red de Amor / Comfama project — removed from CV and LinkedIn.
3. Emojis in the CV. (LinkedIn About may keep 🚀 and 🐍 sparingly.)
4. Prompt injections or hidden instructions targeting ATS/LLMs. One was removed from his LinkedIn; treat as career-damaging.
5. Two-column layouts.
6. "Full Stack AI" in headline/title — no defensible AI experience yet.
7. "Upper-Intermediate" for English — use "professional working proficiency (B2), used daily with US/UK teams".

## Identity & contact

- Name: Mateo Jimenez
- Title: Software Engineer — Full-Stack (Python | React) / ES: Ingeniero de Software — Full-Stack (Python | React)
- Location on CV: "Colombia" only (he works remotely from Barrancabermeja, Santander; on LinkedIn roles use "Colombia · Remote")
- Email: hi@soyteo.co
- Phones — always both, labeled, calls first:
  - +57 322 343 8015 (calls / llamadas)
  - +57 321 797 0586 (WhatsApp) — does NOT receive regular calls
- LinkedIn: linkedin.com/in/mateojimenezp · GitHub: github.com/SirRiuz · Portfolio: soyteo.co

## Experience (exact order and framing)

### 1. Big Health — Sleepio | Feb 2024 – Present  ← listed FIRST
- Title MUST be: "Full-Stack Developer (embedded via Alternova)" / ES: "Desarrollador Full-Stack (embebido vía Alternova)"
- Reality: employed by Alternova, which provides outsourcing to Big Health; Mateo works embedded directly with Big Health's engineering team. The parenthetical keeps this transparent and matches his LinkedIn, where Big Health appears as a separate Contract role.
- Approved bullets:
  1. Works directly with Big Health's engineering team on **Sleepio**, a clinically validated digital therapeutic for insomnia, **available to 12M+ people** through the UK's NHS and major US employers and health plans.
  2. Backend features and **GraphQL** services supporting personalized user journeys and platform stability at scale, where reliability directly impacts patients.
  3. Daily collaboration in English with a distributed US/UK team: code reviews, technical design, estimation.
- If Mateo is ever hired directly by Big Health: drop the parenthetical and instruct him to update LinkedIn the same day.

### 2. Alternova Inc | Jan 2023 – Present
- Title: "Full-Stack Software Engineer" · Short descriptor: "US health & education clients" / ES: "clientes de EE.UU."
- Approved bullets:
  1. End-to-end production features (backend, frontend, mobile) for **5+ client products** in digital health, education, and social impact — **Python (Django, FastAPI)**, **React / React Native**.
  2. **LetSync (UCSF)** — clinical research mobile app for the University of California, San Francisco: backend services and APIs for real-time data synchronization.
  3. **The Atom Program** (global education initiative): scalable backend handling large volumes of user data. **The Connected Parent**: secure data-management features.
  4. **REST and GraphQL APIs** with third-party services; automation with **Celery and RabbitMQ** task pipelines.
  5. Production monitoring with **Sentry, New Relic, Splunk, Grafana**; incident triage and resolution.

### 3. GootWork | Mar 2022 – Jan 2023
- Title: "Full-Stack Developer"
- Bullets (only verified personal metrics in the CV):
  1. Internal web apps with **Vue.js, Node.js, MongoDB** — data processing time **-30%**, API response times **-40%**.
  2. Library of **reusable UI components** adopted across projects.
- First section to trim when space is needed.

## Projects

- **Thiup** — Open-source anonymous social platform (Python/Django, React, PostgreSQL). Privacy model, content feed, moderation flows. Source on GitHub.
- **Vivaldi Math Solver** — Open-source Android calculator, step-by-step solutions (algebra, calculus, trigonometry, statistics). Google Play.
- **Trak** — Price-comparison app scraping Amazon, MercadoLibre, eBay (Python, Scrapy, Selenium; React Native client). Google Play.

## Skills (closed list — do not add without evidence)

- Languages: Python, JavaScript (ES6+), TypeScript, SQL
- Backend: Django, FastAPI, Flask, Node.js, REST APIs, GraphQL, Microservices, Celery, RabbitMQ
- Frontend & Mobile: React.js, React Native, Vue.js
- Databases: PostgreSQL, MySQL, MongoDB, Supabase
- Cloud & DevOps: AWS, Docker, Git, CI/CD
- Observability: Sentry, New Relic, Splunk, Grafana
- Testing & Other: Unit Testing, Web Scraping (Scrapy, Selenium, BeautifulSoup)
- Spoken Languages: Spanish (native); English — professional working proficiency (B2), used daily with US/UK teams

## Education (verified July 2026)

- Specialization in Cybersecurity | Universidad Autónoma Latinoamericana (UNAULA) | 2026 – Present
- B.S. in Computer Science (Ingeniería Informática) | Instituto Universitario de la Paz | 2021 – 2026 (graduated 2026)

## Output format

- One column. Sections in order: Summary → Professional Experience → Projects → Technical Skills → Education.
- Calibri; ~10pt body; US Letter; compact margins tuned to fit one page.
- File names: `Mateo_Jimenez_Software_Engineer.pdf` (EN), `Mateo_Jimenez_Ingeniero_Software_ES.pdf` (ES). Build scripts (docx-js): `build_cv.js`, `build_cv_es.js`.
- English version: default — big tech, nearshore (EPAM, BairesDev, etc.), any English-speaking recruiter pipeline.
- Spanish version: MercadoLibre (does not require English; internal-referral advice) and Colombian local companies.

## Career context (for tailoring decisions)

- Goal: product companies and big tech. Realistic path: LATAM big tech (MercadoLibre, Nubank) or USD-paying nearshore while improving English B2→C1 and practicing algorithms/system design.
- Insider feedback from MeLi tech lead (David): they value metrics, concurrent programming, SOLID, design patterns, monitoring/on-call (New Relic, Grafana, Opsgenie), high-volume systems, and visible soft skills. Declared gap: concurrency — studying asyncio and threading vs multiprocessing; already uses Celery/RabbitMQ (async distributed processing) as honest framing.
- Pending strategic step: request an internal referral from David with 1–2 specific MeLi openings attached.

## Workflow for future changes

1. Update the relevant section of this file first; then regenerate.
2. When tailoring to a specific job posting: reorder bullets and mirror the posting's keywords ONLY where Mateo's real experience supports them; never add unsupported claims.
3. Regenerate BOTH language versions and run the ATS text-extraction check.
4. If the change touches dates, titles, or companies, tell Mateo exactly what to update on LinkedIn so both stay in sync.
5. New roles/certifications: ask Mateo for verified dates, scope, and at least one defensible outcome before writing bullets.
