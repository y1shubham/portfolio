# Shubham Yadav — Portfolio

Personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Multipage, fully dark-themed, and data-driven from a single source file.

**Live at:** [y1shubham.github.io/portfolio](https://y1shubham.github.io/portfolio) *(or your deployed URL)*

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Framework   | Next.js 15 (App Router)                         |
| Language    | TypeScript                                      |
| Styling     | Tailwind CSS v4 + custom design tokens          |
| Animations  | Framer Motion                                   |
| Font        | Inter (via `next/font/google`)                  |
| Icons       | lucide-react + custom SVG (GitHub, LinkedIn)    |
| Images      | `next/image` with local assets                  |

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                  # Custom SY monogram favicon
│   ├── images/
│   │   └── shubham.jpg              # Profile photo
│   └── resume/
│       └── shubham-yadav-resume.pdf # Downloadable resume
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout — Navbar + Footer + metadata
│   │   ├── globals.css              # Design tokens, gradient/glow utilities
│   │   ├── page.tsx                 # Home (/)
│   │   ├── projects/page.tsx        # Projects (/projects)
│   │   ├── experience/page.tsx      # Experience (/experience)
│   │   ├── resume/page.tsx          # Resume (/resume)
│   │   └── contact/page.tsx         # Contact (/contact)
│   │
│   ├── sections/                    # Home page section components
│   │   ├── HeroSection.tsx          # Full-screen hero with avatar + tech badges
│   │   ├── AboutSection.tsx         # Bio + 4-stat grid
│   │   ├── ExperienceSection.tsx    # Timeline with role cards
│   │   ├── SkillsSection.tsx        # Tech stack grid by category
│   │   ├── ProjectsPreviewSection.tsx  # 3-column project card grid
│   │   └── LeadershipSection.tsx    # Leadership + Education side by side
│   │
│   ├── components/                  # Shared UI components
│   │   ├── Navbar.tsx               # Sticky, scroll-aware, mobile drawer
│   │   ├── Footer.tsx               # Social links + copyright
│   │   ├── ProjectCard.tsx          # Project card with colored glow + status badge
│   │   ├── SectionLabel.tsx         # Gradient section label (e.g. "— EXPERIENCE")
│   │   ├── GithubIcon.tsx           # Inline SVG (lucide-react dropped brand icons)
│   │   └── LinkedinIcon.tsx         # Inline SVG
│   │
│   ├── data/
│   │   └── index.ts                 # Single source of truth for all content
│   │
│   └── lib/
│       └── utils.ts                 # cn() helper (clsx + tailwind-merge)
│
├── tailwind.config.ts               # Custom colors, shadows, animations
├── next.config.ts
└── tsconfig.json
```

---

## Architecture Decisions

### Single Data Source
All content (personal info, experience, projects, skills, education, leadership) lives in `src/data/index.ts`. Every section and page imports from there — updating content means editing one file only.

### App Router Pages vs Sections
- **`src/sections/`** — components used exclusively on the Home page. Each section is a self-contained animated block.
- **`src/app/*/page.tsx`** — standalone pages for Projects, Experience, Resume, and Contact. These are their own full layouts, not assembled from section components, to allow page-specific layout and content treatment.

### Design System
Custom tokens are defined in both `globals.css` (CSS variables) and `tailwind.config.ts` (Tailwind utilities):

```
bg-primary   #0B0F19   — page background
bg-secondary #111827   — card/section background
bg-elevated  #1F2937   — chip/tag background
accent       #3B82F6   — primary blue
accent-cyan  #06B6D4   — gradient complement
text-primary #F9FAFB
text-muted   #9CA3AF
```

Key utility classes (defined in `globals.css`):
- `.gradient-text` — white → blue → cyan text gradient
- `.gradient-text-accent` — blue → cyan text gradient
- `.gradient-border` — transparent border with blue gradient via `padding-box` trick
- `.dot-grid` — radial-gradient dot pattern background
- `.shimmer-btn` — animated shimmer gradient for CTA buttons
- `.glow-blue-*` — box-shadow glow variants

### No External UI Library
All components are hand-built. No component library dependencies — keeps bundle lean and gives full control over every visual detail.

### Brand Icons as Inline SVG
`lucide-react` v1.x removed GitHub and LinkedIn icons. Rather than downgrading or adding a separate icon library, both are implemented as tiny inline SVG components (`GithubIcon.tsx`, `LinkedinIcon.tsx`).

---

## Pages

| Route         | Description                                              |
|---------------|----------------------------------------------------------|
| `/`           | Home — Hero, About, Experience, Skills, Projects, Leadership |
| `/projects`   | Full projects page with filter tabs by architecture tag  |
| `/experience` | Work timeline only — focused, no duplicate sections      |
| `/resume`     | Inline resume card + PDF download                        |
| `/contact`    | Contact form (opens email client pre-filled via `mailto`)|

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Resume PDF

Drop your resume at `public/resume/shubham-yadav-resume.pdf` — the Download button on `/resume` points there automatically via `personal.resumeFile` in `src/data/index.ts`.
