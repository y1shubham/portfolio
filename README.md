# Shubham Yadav — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Multipage, fully dark-themed, and driven from a single data source file.

**Live:** [https://y1shubham.in](https://y1shubham.in)

---

## Tech Stack

| Layer         | Technology                                             |
|---------------|--------------------------------------------------------|
| Framework     | Next.js 16 (App Router)                                |
| Language      | TypeScript                                             |
| Styling       | Tailwind CSS v4 + custom design tokens                 |
| Animations    | Framer Motion                                          |
| Email         | Resend (contact form → inbox via API route)            |
| Analytics     | Vercel Analytics                                       |
| Font          | Inter (`next/font/google`)                             |
| Icons         | lucide-react + custom SVG (GitHub, LinkedIn)           |
| Images        | `next/image`                                           |

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg                    # SY monogram favicon
│   ├── images/shubham.jpg             # Profile photo
│   └── resume/shubham-yadav-resume.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout — Navbar, Footer, PageTransition, BackToTop, Analytics
│   │   ├── globals.css                # Design tokens + utility classes
│   │   ├── opengraph-image.tsx        # Dynamic OG image (1200×630) via next/og
│   │   ├── not-found.tsx              # Custom 404 page
│   │   ├── page.tsx                   # Home (/)
│   │   ├── projects/page.tsx          # /projects
│   │   ├── experience/page.tsx        # /experience
│   │   ├── resume/page.tsx            # /resume
│   │   ├── contact/page.tsx           # /contact
│   │   └── api/contact/route.ts       # POST handler — sends email via Resend
│   │
│   ├── sections/                      # Home page sections (assembled in page.tsx)
│   │   ├── HeroSection.tsx            # Full-screen hero — TextScramble name, typewriter, avatar, scroll hint
│   │   ├── AboutSection.tsx           # Bio + animated CountUp stat cards
│   │   ├── TechMarquee.tsx            # Infinite scrolling tech rows (Framer Motion)
│   │   ├── ExperienceSection.tsx      # Timeline with staggered role cards
│   │   ├── SkillsSection.tsx          # Tabbed skill grid with animated pill indicator
│   │   ├── ProjectsPreviewSection.tsx # 3-column project cards
│   │   └── LeadershipSection.tsx      # Leadership + Education side by side
│   │
│   ├── components/
│   │   ├── Navbar.tsx                 # Scroll-aware sticky nav + full-screen mobile overlay
│   │   ├── Footer.tsx                 # Social links + branding
│   │   ├── ProjectCard.tsx            # Project card with colored glow + status badge
│   │   ├── ContactCTA.tsx             # "Let's build something" section before footer
│   │   ├── PageTransition.tsx         # Fade+slide on every route change
│   │   ├── BackToTop.tsx              # Fixed button — appears after 400px scroll
│   │   ├── ScrollProgress.tsx         # Thin gradient progress bar at top of viewport
│   │   ├── CustomCursor.tsx           # Blue dot + trailing ring cursor (desktop)
│   │   ├── TextScramble.tsx           # Character scramble reveal animation
│   │   ├── SectionLabel.tsx           # Gradient section label pill
│   │   ├── GithubIcon.tsx             # Inline SVG (lucide dropped brand icons)
│   │   └── LinkedinIcon.tsx           # Inline SVG
│   │
│   ├── data/index.ts                  # Single source of truth for all content
│   └── lib/utils.ts                   # cn() helper (clsx + tailwind-merge)
│
├── tailwind.config.ts                 # Custom colors, shadows, keyframes
├── .env.local                         # RESEND_API_KEY (gitignored)
└── next.config.ts
```

---

## Architecture

### Single Data Source
All content — personal info, experience, projects, skills, education, leadership — lives in `src/data/index.ts`. Every section and page imports from there. Updating content means editing one file.

### Design System
Tokens defined in `globals.css` (CSS vars) and `tailwind.config.ts` (utilities):

```
bg-primary   #0B0F19   page background
bg-secondary #111827   card / section background
bg-elevated  #1F2937   chip / tag background
accent       #3B82F6   primary blue
accent-cyan  #06B6D4   gradient complement
text-primary #F9FAFB
text-muted   #9CA3AF
```

Key utility classes in `globals.css`:

| Class | Effect |
|-------|--------|
| `.gradient-text` | White → blue → cyan background-clip text |
| `.gradient-text-accent` | Blue → cyan background-clip text |
| `.gradient-border` | Transparent border with blue gradient (padding-box trick) |
| `.dot-grid` | Radial-gradient dot pattern background |
| `.shimmer-btn` | Animated shimmer gradient for CTA buttons |
| `.glass-card` | Backdrop-blur glassmorphism card |

### Contact Form
`/contact` POSTs to `/api/contact` which sends a formatted HTML email via **Resend** (`hello@y1shubham.in → shubham.yadav.inbox@gmail.com`). The visitor's email is set as Reply-To so replies go straight back to them.

Requires `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

---

## Pages

| Route         | Description |
|---------------|-------------|
| `/`           | Home — Hero, About, Tech Marquee, Experience, Skills, Projects, Leadership, Contact CTA |
| `/projects`   | Full projects page with architecture tag filter |
| `/experience` | Work timeline — focused, no duplicate sections |
| `/resume`     | Inline resume card + PDF download |
| `/contact`    | Contact form with live email delivery via Resend |

---

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # add your RESEND_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — required for contact form |

When deploying to Vercel, add `RESEND_API_KEY` under **Settings → Environment Variables**.
