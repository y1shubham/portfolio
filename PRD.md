# Shubham Portfolio v1 — Product Requirements Document & Design Plan

## 1. Vision

Build a modern, recruiter-focused portfolio website showcasing:
- Professional experience
- Frontend engineering expertise
- Real-time systems exposure
- Full stack capabilities
- Engineering mindset
- Upcoming projects
- GitHub presence
- Resume
- Personal brand

**Feel:** Premium · Modern · Minimal · Scalable · Engineering-focused · Startup/Product-company quality

---

## 2. Personal Brand Positioning

**Frontend-Focused Full Stack Developer** with:
- Scalable frontend experience
- Real-time systems exposure
- Product engineering experience
- Growing backend/system expertise

---

## 3. Website Goals

- Impress recruiters
- Improve professional credibility
- Centralize projects and experience
- Showcase engineering direction
- Support future backend transition

### Core Philosophy
> "This developer already works on modern scalable product engineering systems and understands frontend-focused full stack development with real-time systems exposure."

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | ShadCN UI |
| Animations | Framer Motion |
| Deployment | Vercel |
| Optional | GitHub API, EmailJS, Resend |

---

## 5. Design Direction

### Visual Style
- Modern SaaS
- Premium
- Minimal
- Engineering-oriented
- Clean and responsive

### Avoid
- Template-like portfolios
- Excessive particles
- Hacker aesthetic overload
- Too many colors
- Too much text
- Cluttered sections

### Color Palette

| Token | Value |
|---|---|
| Primary Background | `#0B0F19` |
| Secondary Background | `#111827` |
| Accent | `#3B82F6` |
| Primary Text | `#F9FAFB` |
| Muted Text | `#9CA3AF` |

### Typography
- **Headings:** Satoshi
- **Body:** Inter

---

## 6. Website Structure

| Page | Purpose |
|---|---|
| `/` | Main portfolio landing |
| `/projects` | Dedicated projects showcase |
| `/resume` | Resume viewer/download |
| `/contact` | Recruiter contact page |

---

## 7. Section Breakdown

### Navbar
- Desktop: Home · Projects · Experience · Resume · Contact
- Mobile: Hamburger menu with smooth animation

### Hero Section
**Left:**
- Name: SHUBHAM YADAV
- Role: Software Developer, Web @ LiveLike Sports Technologies
- Description: Frontend-focused Full Stack Developer building scalable web applications, interactive user experiences, and real-time engagement platforms using React.js, Next.js, Lit.js, Node.js, PostgreSQL, and Redis.
- CTA Primary: View Projects
- CTA Secondary: Download Resume

**Right:**
- Developer illustration/photo
- Floating tech icons
- Subtle animations

### About Section
Content: LiveLike experience, frontend engineering, interactive systems, sports-tech exposure, scalable frontend systems, backend learning journey, real-time systems interest.

**Stats Cards:**
| Stat | Value |
|---|---|
| Experience | 1+ Years |
| Projects | 3 Major Projects |
| Focus | Full Stack Development |
| Specialty | Real-Time Experiences |

### Experience Section
Timeline-based modern cards.

**LiveLike**
- React.js, Lit.js
- Interactive experiences, sports engagement
- Redis caching, real-time participation
- real-time participation at scale

**Zeepty**
- Scalable frontend systems
- Reusable UI components
- Responsive interfaces
- Next.js, frontend optimization

### Skills Section

| Category | Technologies |
|---|---|
| Frontend | React.js, Next.js, Lit.js, Tailwind CSS, Redux, TypeScript |
| Backend | Node.js, Express.js, PostgreSQL, Redis, Socket.io, BullMQ |
| Tools | Docker, Git, GitHub, Prisma, AWS, Vercel |

Design: Pill badges · Categorized cards · Hover transitions · Subtle glow effects

### Projects Section ⭐ MOST IMPORTANT

Each card contains: title · short description · architecture tags · tech stack · status badge · CTA button

**Project 1 — StreamSync**
- Status: Coming Soon
- Tagline: Real-Time Event Engagement Platform
- Description: A scalable real-time platform enabling synchronized live chats, polls, reactions, leaderboards, and multi-user interactions powered by Redis Pub/Sub and WebSocket architecture.
- Stack: Next.js · Socket.io · Redis Pub/Sub · PostgreSQL

**Project 2 — DevFlow AI**
- Status: Coming Soon
- Tagline: AI-Powered Developer Collaboration Platform
- Description: A modern SaaS collaboration platform featuring AI-powered sprint planning, Kanban workflows, real-time collaboration, and GitHub-integrated productivity systems.
- Stack: Next.js · Node.js · Redis · PostgreSQL · Socket.io

**Project 3 — APIFlow**
- Status: Coming Soon
- Tagline: Scalable API Monitoring Platform
- Description: A backend-heavy observability platform featuring distributed monitoring workers, Redis-backed queues, uptime tracking, and real-time analytics dashboards.
- Stack: Node.js · BullMQ · Redis · PostgreSQL · Socket.io

**Coming Soon Button Logic:**
- Current: Disabled button → "Coming Soon"
- Future: Replace with "Live Demo" · "GitHub" · "Case Study"

### GitHub Section
- GitHub contribution graph
- Pinned repositories
- Engineering interests
- Top technologies

### Resume Section
- Embedded resume viewer
- ATS-friendly PDF download
- Clean modern design

### Contact Section
- Email
- GitHub
- LinkedIn
- Resume CTA

---

## 8. Animation Guidelines (Framer Motion)

Use for: section fade-ins · hover effects · smooth transitions · hero floating effects · card interactions

**Feel:** Subtle · Premium · Smooth — NOT distracting.

---

## 9. Mobile Responsiveness

Must support: Mobile · Tablet · Desktop

Critical sections: Navbar · Hero · Projects grid · Skills layout

---

## 10. Folder Structure

```
portfolio/
├── app/
├── components/
├── sections/
├── public/
│   ├── images/
│   ├── resume/
│   └── icons/
├── data/
├── lib/
├── styles/
└── utils/
```

---

## 11. Component List

- `Navbar`
- `HeroSection`
- `AboutSection`
- `ExperienceSection`
- `SkillsSection`
- `ProjectsSection`
- `ProjectCard`
- `ContactSection`
- `Footer`

---

## 12. Development Phases

### Phase 1 — Foundation
- [ ] Next.js 15 + TypeScript setup
- [ ] Tailwind CSS + ShadCN setup
- [ ] Layout + Navbar
- [ ] Hero Section

### Phase 2 — Core Sections
- [ ] About Section
- [ ] Experience Section
- [ ] Skills Section
- [ ] Projects Section

### Phase 3 — Polish
- [ ] Framer Motion animations
- [ ] Full responsiveness
- [ ] SEO metadata
- [ ] Performance optimization

### Phase 4 — Deployment
- [ ] Deploy on Vercel
- [ ] Custom domain setup

---

## 13. Suggested Domains

- shubhamyadav.dev
- y1shubham.dev
- shubhamfolio.dev

---

## 14. Final Goal

> The portfolio should make recruiters feel: **"This developer already works on modern scalable product engineering systems, understands frontend-focused full stack development, and is growing toward backend and real-time systems engineering."**
