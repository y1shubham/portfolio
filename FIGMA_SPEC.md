# Figma Implementation Spec — Shubham Portfolio v1

> This document captures the **exact** Figma design details so the Next.js build
> never needs a Figma read call. All values are taken directly from the generated frame.
>
> Figma File: `F1ObQ6hsENjFzrGXcCKlZy`
> Root Frame Node: `6:2` — "🏠 Portfolio Home — Desktop 1440px"
> Frame Dimensions: 1440 × 3724px

---

## 1. Design Tokens

### Colors (use as Tailwind CSS custom tokens or CSS variables)

```css
:root {
  --bg-primary:    #0B0F19;   /* page background, navbar, hero, experience, projects, footer */
  --bg-secondary:  #111827;   /* about, skills, contact, experience cards */
  --bg-elevated:   #1F2937;   /* pill badges, tag chips, CTA secondary, disabled buttons */
  --accent:        #3B82F6;   /* buttons, links, labels, timeline dots, left card border */
  --accent-glow:   rgba(59,130,246,0.07);  /* background glows */
  --text-primary:  #F9FAFB;   /* headings, important text */
  --text-muted:    #9CA3AF;   /* body copy, labels, nav links, tags */
  --green:         #22C55E;   /* available dot, open to work badge */
  --border:        #1F2937;   /* dividers, card borders, footer border */
  --border-subtle: rgba(255,255,255,0.05); /* navbar bottom border */
}
```

### Tailwind Config Extension

```js
// tailwind.config.ts
colors: {
  'bg-primary':   '#0B0F19',
  'bg-secondary': '#111827',
  'bg-elevated':  '#1F2937',
  'accent':       '#3B82F6',
  'text-primary': '#F9FAFB',
  'text-muted':   '#9CA3AF',
}
```

### Typography

```
Font Family:
  Headings  → "Satoshi" (download from Fontshare) | fallback: "Inter"
  Body      → "Inter" (Google Fonts)

Font Weights used:
  Regular   → 400
  Medium    → 500
  Semi Bold → 600
  Bold      → 700 / 800

Scale:
  11px  → tag/badge inner text (text-[11px])
  12px  → section labels, floating badges (text-xs)
  13px  → card role text, muted meta (text-[13px])
  14px  → body copy, nav links, CTA secondary, card desc (text-sm)
  15px  → CTA primary, about body (text-[15px])
  16px  → description paragraphs (text-base)
  18px  → hero role line (text-lg)
  20px  → navbar logo, exp company title (text-xl)
  22px  → project card name (text-[22px])
  24px  → project name large (text-2xl)
  28px  → stat card value (text-[28px])
  36px–38px → section H2 (text-4xl)
  40px–42px → contact H2 (text-[42px])
  68px  → hero H1 (text-[68px] md) / 40px mobile
```

### Spacing

```
Section vertical padding: py-20 (80px) desktop / py-14 mobile
Content max-width: 1440px → container with px-20 (80px) horizontal padding
Card padding: p-6 (24px)
Section label letter-spacing: tracking-[3px]
Gap between CTA buttons: gap-4 (16px)
```

### Border Radius

```
Pill/badge:       rounded-full (9999px)
Card:             rounded-2xl (20px) — project cards
                  rounded-xl  (16px) — stat cards, skill category cards
                  rounded-lg  (12px) — experience cards
Button:           rounded-[10px]
Small tag/chip:   rounded-md  (6px)
Avatar card:      rounded-3xl (24px)
```

---

## 2. Component Specs

### 2.1 Navbar
```
Height:        64px
Background:    #0B0F19 + backdrop-blur-md
Border-bottom: 1px solid rgba(255,255,255,0.05)
Position:      sticky top-0 z-50
Padding:       px-20
Layout:        flex justify-between items-center

Logo:
  Text: "SY"
  Font: Inter Bold 20px #F9FAFB

Nav Links: ["Home", "Projects", "Experience", "Resume", "Contact"]
  Font: Inter Medium 14px
  Color: active → #F9FAFB | rest → #9CA3AF
  Hover: #F9FAFB, transition-colors 200ms
  Gap between links: gap-8 (in desktop)

Mobile:
  Show hamburger icon, hide nav links
  Drawer slides from right
```

### 2.2 Hero Section
```
Height:        min-h-screen (820px in Figma)
Background:    #0B0F19
Layout:        grid grid-cols-2 gap-10 items-center px-20

Background decoration:
  Blue radial ellipse: 700×600px, top-right, opacity 7%, blur
  CSS: position absolute, top: -120px, right: 0

LEFT COLUMN (55%):
  ┌─ Available Badge ──────────────────────────────┐
  │ bg: #1F2937, rounded-full, px-3 py-1           │
  │ • Green dot (9px, #22C55E) + "Available for    │
  │   opportunities" — Inter Medium 12px #9CA3AF   │
  └────────────────────────────────────────────────┘
  
  H1: "SHUBHAM YADAV"
    Font: Inter/Satoshi Bold 68px #F9FAFB
    Margin-top: 24px
  
  Role: "Software Developer, Web @ LiveLike Sports Technologies"
    Font: Inter Regular 18px #9CA3AF
    Margin-top: 16px
  
  Description (4 lines):
    "Frontend-focused Full Stack Developer building scalable web
     applications, interactive user experiences, and real-time
     engagement platforms using React.js, Next.js, Lit.js,
     Node.js, PostgreSQL, and Redis."
    Font: Inter Regular 16px #9CA3AF
    Max-width: 480px, line-height: 1.7
    Margin-top: 20px
  
  CTA Row (flex, gap-4, margin-top: 48px):
    Primary: "View Projects →"
      bg: #3B82F6, text: #F9FAFB
      px-6 py-3, rounded-[10px], Inter Semi Bold 15px
      hover: brightness-110
    
    Secondary: "Download Resume ↓"
      bg: #1F2937, text: #F9FAFB
      px-6 py-3, rounded-[10px], Inter Medium 15px
      hover: bg-[#2D3748]

RIGHT COLUMN (45%):
  Avatar Card:
    380×440px, bg: #111827, rounded-3xl
    Contains:
      • Blue glow ellipse 280×280px opacity 12%
      • Avatar photo placeholder: 200×200px, rounded-full, bg: #1F2937
      • "Your Photo" label below
      • "Open to Work ✦" badge: bg #1F2937, rounded-full, text #22C55E 13px
  
  Floating Tech Badges (absolute positioned around card):
    Each: bg #111827, rounded-full, px-3 py-2, Inter Medium 12px #9CA3AF
    Labels & approx positions:
      "React.js"    → left edge, top
      "Next.js"     → right edge, top
      "Redis"       → left edge, middle
      "Node.js"     → right edge, middle
      "TypeScript"  → bottom center
    Animation: animate-bounce or Framer Motion float y: [0, -8, 0], duration 3s
```

### 2.3 About Section
```
Background:  #111827
Padding:     py-20 px-20
Layout:      grid grid-cols-2 gap-20 items-start

LEFT (60%):
  Section label: "ABOUT"
    Inter Semi Bold 12px #3B82F6, letter-spacing 3px, uppercase
  
  H2: "Building for scale,\none component at a time."
    Inter/Satoshi Bold 38px #F9FAFB, mt-4
  
  Body copy (2 paragraphs):
    Inter Regular 15px #9CA3AF, mt-6, leading-relaxed, max-w-xl

RIGHT (40%) — Stats Grid (2×2):
  Each card:
    bg: #0B0F19, rounded-xl, p-6
    border: 1px solid #1F2937
    hover: border-accent, shadow [0_0_30px_rgba(59,130,246,0.1)]
  
  Card 1: "1+"  → "Years Experience"
  Card 2: "3"   → "Major Projects"
  Card 3: "Full Stack" → "Development Focus"
  Card 4: "Real-Time"  → "Specialty"
  
  Value: Inter Bold 30px #F9FAFB
  Label: Inter Regular 13px #9CA3AF, mt-2
  Grid: grid grid-cols-2 gap-4
```

### 2.4 Experience Section
```
Background:  #0B0F19
Padding:     py-20 px-20

Section label: "EXPERIENCE" — 12px #3B82F6 tracking-[3px]
H2: "Where I've Worked" — Bold 38px #F9FAFB, mt-4

Layout: relative (timeline line is absolute)

Timeline:
  Vertical line: 2px wide, bg #1F2937
  Position: left-40, top of first card to bottom of last
  Blue dot: 14px circle, #3B82F6, on the line at each entry

Experience Card:
  bg: #111827, rounded-xl, p-8
  border-left: 3px solid #3B82F6
  margin-left: ~80px (offset from timeline)
  mb-16

  Card Header (flex justify-between):
    Company:  Inter Semi Bold 20px #F9FAFB
    Period:   Inter Regular 13px #9CA3AF
  
  Role: Inter Medium 14px #3B82F6, mt-2
  
  Description: Inter Regular 14px #9CA3AF, mt-4, leading-relaxed
  
  Tags (flex flex-wrap gap-2, mt-6):
    Each: bg #1F2937, rounded-full, px-3 py-1
    Inter Regular 11px #9CA3AF

ENTRY 1 — LiveLike Sports Technologies
  Role: Software Developer, Web
  Period: 2023 — Present
  Desc: "Building real-time sports engagement platforms for global sports clients.
         Developing interactive experiences using React.js, Lit.js,
         Redis Pub/Sub, and WebSocket architecture."
  Tags: [React.js] [Lit.js] [Redis] [WebSocket] [Node.js]

ENTRY 2 — Zeepty
  Role: Frontend Developer
  Period: 2022 — 2023
  Desc: "Built scalable frontend systems with reusable UI components and
         responsive interfaces. Optimized performance and implemented modern
         UX patterns with Next.js and TypeScript."
  Tags: [Next.js] [TypeScript] [Tailwind CSS] [Frontend]
```

### 2.5 Skills Section
```
Background:  #111827
Padding:     py-20 px-20
Header:      centered

Section label: "SKILLS" — 12px #3B82F6 tracking-[3px]
H2: "My Technical Stack" — Bold 38px #F9FAFB, mt-4

Categories: grid grid-cols-3 gap-8, mt-16

Category Card:
  bg: #0B0F19, rounded-xl, p-7
  Height: ~300px

  Category Title: Inter Semi Bold 16px #F9FAFB
  
  Skills grid (flex flex-wrap gap-3, mt-6):
    Pill: bg #111827, rounded-full, px-3 py-2
    Text: Inter Medium 12px #9CA3AF
    hover: border-accent text-white transition-all 200ms

FRONTEND:  [React.js] [Next.js] [Lit.js] [TypeScript] [Tailwind CSS] [Redux]
BACKEND:   [Node.js] [Express.js] [PostgreSQL] [Redis] [Socket.io] [BullMQ]
TOOLS:     [Docker] [Git] [GitHub] [Prisma] [AWS] [Vercel]
```

### 2.6 Projects Section ⭐
```
Background:  #0B0F19
Padding:     py-20 px-20
Header:      centered

Section label: "PROJECTS" — 12px #3B82F6 tracking-[3px]
H2: "What I'm Building" — Bold 38px #F9FAFB, mt-4
Subtext: "Ambitious systems engineered to production quality."
         Inter Regular 16px #9CA3AF, mt-4

Background: subtle blue glow ellipse center, opacity 5%

Cards: grid grid-cols-3 gap-7, mt-16

PROJECT CARD SPEC (430×460px in Figma):
  bg: #111827, rounded-2xl, p-6
  border: 1px solid #1F2937
  hover: translateY(-4px), border-color rgba(59,130,246,0.25),
         shadow [0_20px_60px_rgba(59,130,246,0.08)]
  transition: all 300ms ease

  Internal layout (top → bottom):
  ┌─────────────────────────────────────────────┐
  │ [Coming Soon]              (glow top-right) │ ← row: badge + glow
  │                                             │
  │ PROJECT NAME                                │ ← Bold 24px #F9FAFB
  │ Tagline                                     │ ← Medium 13px #3B82F6
  │                                             │
  │ Description text 3–4 lines                 │ ← Regular 14px #9CA3AF
  │                                             │
  │ [WebSocket] [Distributed]                   │ ← arch tags
  │ ─────────────────────────────────────────── │ ← divider #1F2937
  │ [Next.js] [Socket.io] [Redis] [PostgreSQL]  │ ← stack tags
  │                                             │
  │ [        Coming Soon        ]               │ ← disabled button
  └─────────────────────────────────────────────┘

  Status Badge "Coming Soon":
    bg: #1F2937, rounded-full, px-3 py-1
    Inter Medium 11px #9CA3AF

  Card Glow: 80×80px blue ellipse, top-right, opacity 8%

  Arch Tags: bg #1F2937, rounded-md px-3 py-1, 11px #9CA3AF
  Stack Tags: same style

  Disabled Button "Coming Soon":
    bg: #1F2937, rounded-[10px], w-full h-[46px]
    Inter Medium 14px #9CA3AF
    cursor-not-allowed, opacity-70

PROJECT 1 — StreamSync
  Tagline: "Real-Time Event Engagement Platform"
  Desc: "A scalable real-time platform enabling synchronized live chats,
         polls, reactions, leaderboards, and multi-user interactions
         powered by Redis Pub/Sub and WebSocket architecture."
  Arch tags: [WebSocket] [Distributed]
  Stack: [Next.js] [Socket.io] [Redis] [PostgreSQL]

PROJECT 2 — DevFlow AI
  Tagline: "AI-Powered Developer Collaboration"
  Desc: "A modern SaaS collaboration platform featuring AI-powered sprint
         planning, Kanban workflows, real-time collaboration, and
         GitHub-integrated productivity systems."
  Arch tags: [AI/ML] [SaaS] [Real-Time]
  Stack: [Next.js] [Node.js] [Redis] [Socket.io]

PROJECT 3 — APIFlow
  Tagline: "Scalable API Monitoring Platform"
  Desc: "A backend-heavy observability platform featuring distributed
         monitoring workers, Redis-backed queues, uptime tracking,
         and real-time analytics dashboards."
  Arch tags: [Distributed] [Queue-Based]
  Stack: [Node.js] [BullMQ] [Redis] [PostgreSQL]
```

### 2.7 Contact Section
```
Background:  #111827
Padding:     py-20 px-20
Layout:      centered, max-w-2xl mx-auto text-center

Section label: "CONTACT" — 12px #3B82F6 tracking-[3px]
H2: "Let's Work Together" — Bold 42px #F9FAFB, mt-4
Subtext: "Open to full-time roles, freelance projects, and collaboration."
         Inter Regular 16px #9CA3AF, mt-4

Email CTA:
  "Send me an email →"
  bg: #3B82F6, text: #F9FAFB
  px-8 py-3.5, rounded-[10px], Inter Semi Bold 15px
  hover: brightness-110
  mt-10

Social Links (flex gap-4, mt-6, justify-center):
  Each: bg #1F2937, rounded-[10px], px-6 py-3.5
  Inter Medium 14px #9CA3AF
  hover: border-accent text-white
  [GitHub] [LinkedIn] [Resume]
```

### 2.8 Footer
```
Background:  #0B0F19
Height:      80px
Border-top:  1px solid #1F2937
Padding:     px-20
Layout:      flex justify-between items-center

Left:  "Built by Shubham Yadav • 2025"
       Inter Regular 14px #9CA3AF

Right: [GitHub] [LinkedIn]
       Inter Medium 14px #9CA3AF, gap-6
       hover: text-white
```

---

## 3. Framer Motion Animations

```tsx
// Section entrance (use on every section)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// Trigger: <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }}>

// Stagger children (cards, pills)
const containerVariants = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

// Hero H1
{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 } }

// Hero subtitle: delay 0.4
// Hero CTA: delay 0.6
// Hero right col: { x: 30, opacity: 0 } → { x: 0, opacity: 1 }, delay 0.3

// Floating tech badges
animate={{ y: [0, -8, 0] }}
transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: i * 0.4 }}

// Project card hover
whileHover={{ y: -4, transition: { duration: 0.2 } }}

// Skill pill hover (CSS only)
transition: border-color 200ms, box-shadow 200ms, color 200ms
```

---

## 4. Responsive Breakpoints

```
sm:  640px  → not heavily used
md:  768px  → hamburger menu, hero stacks
lg:  1024px → 3-col layouts switch to 1-col
xl:  1280px → full desktop layout
2xl: 1440px → max-width container

Key changes at md:
  - Navbar: links hidden, hamburger shown
  - Hero: grid → flex-col, avatar below text, H1 40px
  - About: 2-col → 1-col, stats 2×2 stays
  - Experience cards: full width
  - Skills: 3-col → 1-col
  - Projects: 3-col → 1-col (md: 2-col)
  - Contact: same, narrower max-width
```

---

## 5. File & Component Map

```
app/
  layout.tsx          ← fonts (Inter + Satoshi), metadata, Navbar, Footer
  page.tsx            ← Home: all sections assembled
  projects/page.tsx   ← Full projects listing
  resume/page.tsx     ← Resume viewer + download
  contact/page.tsx    ← Contact form

components/
  Navbar.tsx          ← sticky nav, mobile drawer
  Footer.tsx

sections/
  HeroSection.tsx
  AboutSection.tsx
  ExperienceSection.tsx
  SkillsSection.tsx
  ProjectsSection.tsx
  ContactSection.tsx

components/ui/
  ProjectCard.tsx     ← reusable card (name, tagline, desc, arch, stack, cta)
  SkillPill.tsx       ← rounded badge
  SectionLabel.tsx    ← "SKILLS" / "PROJECTS" uppercase label
  StatCard.tsx        ← stat value + label

data/
  projects.ts         ← project data array
  experience.ts       ← experience data array
  skills.ts           ← skills by category

lib/
  utils.ts            ← cn() helper (clsx + twMerge)
```

---

## 6. Key Tailwind Classes Reference

```tsx
// Section wrapper pattern
<section className="bg-bg-primary py-20 px-20">
  <div className="max-w-[1440px] mx-auto">...</div>
</section>

// Section label
<span className="text-accent text-xs font-semibold tracking-[3px] uppercase">
  PROJECTS
</span>

// Section H2
<h2 className="text-[38px] font-bold text-text-primary mt-4 leading-tight">

// Project card
<div className="bg-bg-secondary rounded-2xl p-6 border border-bg-elevated
  hover:border-accent/25 hover:-translate-y-1 transition-all duration-300
  hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)]">

// Pill / tag badge
<span className="bg-bg-elevated rounded-full px-3 py-1 text-[11px]
  font-medium text-text-muted">

// Coming soon button (disabled)
<button disabled className="w-full bg-bg-elevated rounded-[10px] h-[46px]
  text-sm font-medium text-text-muted cursor-not-allowed opacity-70">

// CTA Primary button
<button className="bg-accent text-white px-6 py-3 rounded-[10px]
  font-semibold text-[15px] hover:brightness-110 transition-all">

// Available badge
<div className="flex items-center gap-2 bg-bg-elevated rounded-full px-4 py-2">
  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
  <span className="text-xs font-medium text-text-muted">Available for opportunities</span>
</div>
```

---

## 7. Figma Node Reference (for any future targeted reads)

```
Root frame:          6:2   — 🏠 Portfolio Home — Desktop 1440px
  Navbar:            6:3
  NavBorder:         6:10
  Hero Section:      6:11
    AvailableBadge:  6:13
    H1 text:         6:16
    Role text:       6:17
    Desc text:       6:18
    CTA-ViewProjects: 6:19
    CTA-DownloadResume: 6:21
    AvatarCard:      6:23
    FloatBadges:     6:29, 6:31, 6:33, 6:35, 6:37
  About Section:     6:39
    StatCards:       6:43, 6:46, 6:49, 6:52
  Experience Section: 6:55
    ExpCard-LiveLike: 6:60
    ExpCard-Zeepty:  6:77
  Skills Section:    6:91
    SkillCat-Frontend: 6:94
    SkillCat-Backend:  6:108
    SkillCat-Tools:    6:122
  Projects Section:  6:136
    ProjectCard-StreamSync:  6:141
    ProjectCard-DevFlowAI:   6:163
    ProjectCard-APIFlow:     6:187
  Contact Section:   6:209
  Footer:            6:221
```
