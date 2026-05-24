# Shubham Portfolio v1 — Design Document

## 1. Design Philosophy

**Core Feeling:** Premium dark SaaS — like Linear, Vercel, or Raycast's marketing site.
**Mood:** Confident, engineering-focused, minimal, recruiter-safe.
**Anti-patterns:** No matrix rain, no excessive particles, no neon overload, no bloated copy.

---

## 2. Design Tokens

### Colors

```
--color-bg-primary:     #0B0F19   /* page background */
--color-bg-secondary:   #111827   /* cards, sections */
--color-bg-elevated:    #1F2937   /* hover states, code blocks */
--color-accent:         #3B82F6   /* buttons, links, highlights */
--color-accent-glow:    #3B82F620 /* subtle glow behind accent elements */
--color-text-primary:   #F9FAFB   /* headings, important text */
--color-text-muted:     #9CA3AF   /* body copy, labels */
--color-border:         #1F2937   /* card borders, dividers */
--color-border-subtle:  #ffffff08 /* ghost borders */
```

### Typography

```
Font Heading:  Satoshi — weights 700, 800
Font Body:     Inter — weights 400, 500, 600

Scale:
  --text-xs:   12px / 1.5
  --text-sm:   14px / 1.5
  --text-base: 16px / 1.6
  --text-lg:   18px / 1.5
  --text-xl:   20px / 1.4
  --text-2xl:  24px / 1.3
  --text-3xl:  30px / 1.2
  --text-4xl:  36px / 1.1
  --text-5xl:  48px / 1.05
  --text-6xl:  60px / 1.0
  --text-7xl:  72px / 0.95
```

### Spacing System (8px base)
```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160px
```

### Border Radius
```
--radius-sm:  6px
--radius-md:  10px
--radius-lg:  16px
--radius-xl:  24px
--radius-pill: 9999px
```

### Shadows & Glows
```
--shadow-card:    0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)
--shadow-accent:  0 0 40px rgba(59,130,246,0.15)
--glow-blue:      0 0 60px rgba(59,130,246,0.08)
```

---

## 3. Layout Grid

- Max content width: **1200px**
- Horizontal padding: `24px` mobile / `48px` tablet / `80px` desktop
- Section vertical padding: `80px` mobile / `120px` desktop
- Column grid: 12-column, 24px gutter

---

## 4. Component Specs

### 4.1 Navbar

```
Height: 64px
Background: #0B0F19 with backdrop-blur(12px) + border-bottom: 1px solid #ffffff08
Position: sticky top-0, z-index: 50

Desktop layout:
  [Logo/Name]  ←————————————→  [Home] [Projects] [Experience] [Resume] [Contact]

Logo: "SY" monogram or "Shubham Yadav" in Satoshi 600, #F9FAFB
Nav links: Inter 500, 14px, #9CA3AF → hover: #F9FAFB, transition 200ms
Active link: #F9FAFB with 2px accent underline

Mobile:
  [Logo]  ←————————————→  [☰ Hamburger]
  Drawer: slides from right, full height, links stacked 24px apart
```

### 4.2 Hero Section

```
Height: 100vh minimum
Layout: 2-column on desktop (55% left / 45% right), stacked on mobile

LEFT COLUMN:
  - Tag chip: "Available for opportunities" — pill, #3B82F620 bg, #3B82F6 text, 12px, dot indicator
  - H1: "SHUBHAM YADAV" — Satoshi 800, 64px desktop / 40px mobile, #F9FAFB
  - Role line: "Software Developer, Web @ LiveLike" — Inter 500, 18px, #9CA3AF
  - Description paragraph: Inter 400, 16px, #9CA3AF, max-width 480px, line-height 1.7
  - CTA row (gap 16px):
      Primary: "View Projects" — #3B82F6 bg, white text, px-24 py-12, radius-md, hover: brightness(1.1)
      Secondary: "Download Resume" — transparent bg, #9CA3AF border, white text, same padding, hover: bg #1F2937

RIGHT COLUMN:
  - Developer avatar/illustration — circular or rounded square, 320px
  - Floating tech icon badges (React, Next.js, Node, Redis, TypeScript) — animated float
  - Subtle radial blue glow behind avatar

Background elements:
  - Very subtle grid pattern (SVG, opacity 0.03)
  - One large radial gradient: blue at top-right, opacity 10%
```

### 4.3 About Section

```
Background: #111827 (secondary)
Layout: 2-column (60% text / 40% stats), stacked mobile

LEFT:
  Section label: "ABOUT" — Inter 600, 12px, #3B82F6, letter-spacing 3px
  H2: "Building for scale, one component at a time" — Satoshi 700, 36px
  Body paragraphs: Inter 400, 16px, #9CA3AF, 3-4 lines each

RIGHT (Stats Grid — 2x2):
  Each stat card:
    Background: #0B0F19
    Border: 1px solid #1F2937
    Radius: 16px
    Padding: 24px
    Number: Satoshi 700, 36px, #F9FAFB
    Label: Inter 500, 14px, #9CA3AF
    Hover: border-color #3B82F6, shadow-accent
```

### 4.4 Experience Section

```
Background: #0B0F19
Layout: Left timeline line + right content cards

Timeline line: 1px, #1F2937, with blue dot at each entry

Experience Card:
  Background: #111827
  Border: 1px solid #1F2937
  Border-left: 3px solid #3B82F6
  Radius: 12px
  Padding: 28px 32px

  Header row:
    Company name: Satoshi 700, 20px, #F9FAFB
    Date range: Inter 500, 14px, #9CA3AF — right aligned
  Role: Inter 600, 15px, #3B82F6
  Description bullets: Inter 400, 15px, #9CA3AF, 4-5 points
  Tech tags: pill badges, #1F2937 bg, #9CA3AF text, 12px, radius-pill
```

### 4.5 Skills Section

```
Background: #111827
Layout: 3 category columns on desktop, stacked mobile

Section header: centered
  Label: "SKILLS" — 12px, #3B82F6, tracking wide
  H2: "My Technical Stack" — Satoshi 700, 36px

Category Card:
  Background: #0B0F19
  Border: 1px solid #1F2937
  Radius: 16px
  Padding: 28px

  Category title: Satoshi 600, 16px, #F9FAFB, with icon (💻/⚙️/🛠)
  Skills grid: 2-3 per row
  
  Skill Badge:
    Background: #111827
    Border: 1px solid #1F2937
    Padding: 8px 14px
    Radius: 9999px
    Text: Inter 500, 13px, #9CA3AF
    Icon: 16px colored tech icon (left)
    Hover: border-color #3B82F6, text #F9FAFB, glow-accent
    Transition: all 200ms ease
```

### 4.6 Projects Section (HERO OF THE PAGE)

```
Background: #0B0F19
Layout: 3-column grid on desktop, 2-col tablet, 1-col mobile

Section header: centered
  Label: "PROJECTS"
  H2: "What I'm Building"
  Subtext: "Ambitious systems being engineered to production quality."

Project Card:
  Background: #111827
  Border: 1px solid #1F2937
  Radius: 20px
  Padding: 28px 24px
  Min-height: 380px
  Hover: translateY(-4px), border-color #3B82F640, shadow-accent
  Transition: all 300ms ease

  CARD STRUCTURE (top to bottom):
  
  1. Top row:
     Status badge: "Coming Soon" — #1F2937 bg, #9CA3AF text, 11px, radius-pill, px-10 py-4
     
  2. Project icon/visual area (optional): 
     Abstract gradient shape, 48x48, top-right corner

  3. Project name: Satoshi 700, 22px, #F9FAFB
  
  4. Tagline: Inter 500, 14px, #3B82F6
  
  5. Description: Inter 400, 14px, #9CA3AF, line-height 1.6, 3-4 lines, clamp
  
  6. Architecture tags (small, 2-3 key concepts):
     "Redis Pub/Sub" "WebSocket" "Distributed" — smaller pills, #0B0F19 bg, 11px
  
  7. Divider: 1px, #1F2937
  
  8. Bottom row:
     Tech stack: icon row (16px each, opacity 70%)
     CTA button: "Coming Soon" — disabled, #1F2937 bg, #6B7280 text, cursor-not-allowed
```

### 4.7 GitHub Section

```
Background: #111827
Layout: centered content, max-width 800px

GitHub contribution graph: embedded / API-fetched
Pinned repo cards: 2-column grid, same card style as skills
Stats row: stars, commits, PRs — horizontal pill display
```

### 4.8 Contact Section

```
Background: #0B0F19
Layout: centered, max-width 600px

H2: "Let's Work Together"
Subtext: Inter 400, 16px, #9CA3AF

Social links row (horizontal, gap 24px):
  Each: icon + label, #111827 bg, border, radius-md, px-20 py-12
  Hover: border-color #3B82F6

Email CTA: large accent button "Send me an email"
```

### 4.9 Footer

```
Height: 80px
Background: #0B0F19
Border-top: 1px solid #1F2937
Layout: "Built by Shubham Yadav" ←——→ [GitHub] [LinkedIn]
Text: Inter 400, 14px, #9CA3AF
```

---

## 5. Animation Specs (Framer Motion)

### Entrance Animations
```
Section fade-in:
  initial: { opacity: 0, y: 30 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.6, ease: "easeOut" }
  trigger: when section enters viewport (IntersectionObserver / whileInView)

Stagger children (cards, badges):
  staggerChildren: 0.08
  delayChildren: 0.1
```

### Hover Animations
```
Project card lift:
  whileHover: { y: -4, transition: { duration: 0.2 } }

Skill badge glow:
  CSS transition (not Framer) — border-color + box-shadow, 200ms ease

Nav link underline:
  CSS scaleX from 0→1, transform-origin left, 200ms
```

### Hero Floating Icons
```
Floating tech badges around avatar:
  animate: { y: [0, -8, 0] }
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: staggered per icon }
```

### Page Load
```
Hero H1 reveal:
  initial: { opacity: 0, y: 20 }
  animate: { opacity: 1, y: 0 }
  transition: { duration: 0.8, delay: 0.2 }

Hero subtitle: delay 0.4
Hero CTA: delay 0.6
Hero right column: delay 0.3, x: 30→0
```

---

## 6. Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px – 1024px
Desktop: > 1024px

Key responsive changes:
- Navbar: links → hamburger drawer at < 768px
- Hero: 2-col → stacked, avatar moves below text
- Projects: 3-col → 2-col (tablet) → 1-col (mobile)
- Skills: 3-col → 1-col (mobile)
- Experience: timeline → simple card stack
- About: 2-col → stacked
```

---

## 7. Page-Specific Design

### /projects (full page)
- Hero header: "My Projects" — full width banner
- Filter tabs: All / Frontend / Backend / Full Stack
- 3-col grid with all projects
- Same ProjectCard component

### /resume
- Split layout: embedded PDF viewer (left) + download panel (right)
- Download button: prominent accent CTA
- Mobile: download button only, no embed

### /contact
- Full-page centered layout
- Contact form (Name, Email, Message) + social sidebar
- Form inputs: #111827 bg, #1F2937 border, focus: #3B82F6 border
- Submit: accent button

---

## 8. Assets Required

```
public/
├── images/
│   ├── avatar.jpg          ← professional photo or illustration
│   └── og-image.png        ← 1200x630 Open Graph image
├── icons/
│   ├── react.svg
│   ├── nextjs.svg
│   ├── nodejs.svg
│   ├── typescript.svg
│   ├── redis.svg
│   ├── postgresql.svg
│   ├── tailwind.svg
│   ├── docker.svg
│   └── ...
└── resume/
    └── shubham-yadav-resume.pdf
```

---

## 9. SEO & Meta

```
Title: "Shubham Yadav — Frontend-Focused Full Stack Developer"
Description: "Portfolio of Shubham Yadav, Software Developer at LiveLike Sports Technologies. Building scalable web apps, real-time systems, and interactive experiences."
OG Image: 1200x630, dark themed with name and role
Canonical: shubhamyadav.dev (or chosen domain)
```

---

## 10. Figma File Structure

```
Pages:
  1. Design System    ← colors, typography, components
  2. Home             ← full page desktop + mobile
  3. Projects Page    ← full page
  4. Resume Page      ← full page
  5. Contact Page     ← full page
  6. Components       ← all reusable components isolated

Frames per page:
  - Desktop: 1440px wide
  - Mobile:  390px wide (iPhone 14)
```
