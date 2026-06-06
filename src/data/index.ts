export const personal = {
  name: "Shubham Yadav",
  role: "Assistant Software Developer (Web)",
  company: "LiveLike Sports Technologies",
  tagline: "Full Stack Developer",
  summary:
    "Full Stack Developer with 1 year of experience at LiveLike, building real-time sports engagement platforms and scalable web applications with React.js, Next.js, Lit.js, Node.js, PostgreSQL, and Redis.",
  email: "shubham.yadav.inbox@gmail.com",
  phone: "+91-9198929673",
  location: "Gurgaon, Haryana, India",
  github: "https://github.com/y1shubham",
  linkedin: "https://linkedin.com/in/y1shubham",
  resumeFile: "/resume/shubham-yadav-resume.pdf",
};

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  Frontend: [
    "React.js",
    "Next.js",
    "Lit.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "ShadCN UI",
    "HTML5",
    "CSS3",
    "CreateJS",
    "Canvas API",
    "Web Audio API",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Django",
    "REST APIs",
    "JWT Auth",
    "Socket.io",
    "BullMQ",
  ],
  "Database & Cloud": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma ORM",
    "AWS EC2",
    "AWS S3",
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "GitHub",
    "CI/CD",
    "Postman",
    "Vercel",
    "Render",
  ],
  Concepts: [
    "Real-Time Systems",
    "System Design",
    "Caching",
    "API Integrations",
    "SaaS Architecture",
  ],
};

export const experience = [
  {
    company: "LiveLike Sports Technologies",
    companyUrl: "https://livelike.com",
    roles: [
      {
        title: "Assistant Software Developer (Web)",
        period: "Jul 2025 – Present",
        type: "full-time",
      },
      {
        title: "Software Developer Intern",
        period: "Feb 2025 – Jul 2025",
        type: "internship",
      },
    ],
    highlights: [
      "Built and shipped sports widgets - live polls, reactions, and leaderboards - in React.js and Lit.js, used by real audiences during live sports broadcasts.",
      "Built a library of reusable frontend components that powers the core engagement features across the platform.",
      "Cut API overhead by integrating Redis caching and CDN strategies alongside SDAPI/OPTA sports data services, improving platform response times.",
      "Shipped production-ready features end-to-end - from design spec to deployment - across multiple sprint cycles.",
    ],
    tech: [
      "React.js",
      "Lit.js",
      "Node.js",
      "Redis",
      "WebSocket",
      "SDAPI/OPTA",
      "TypeScript",
    ],
    current: true,
  },
  {
    company: "Zeepty",
    companyUrl: "#",
    roles: [
      {
        title: "Full Stack Developer Intern",
        period: "May 2024 – Jul 2024",
        type: "internship",
      },
    ],
    highlights: [
      "Built responsive, pixel-accurate UIs in Next.js and Tailwind CSS for web and mobile.",
      "Integrated REST APIs and JWT auth, built reusable component systems that sped up feature delivery.",
      "Worked closely with design and backend teams on features, UX fixes, and frontend performance.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "REST APIs", "TypeScript"],
    current: false,
  },
];

export const projects = [
  {
    name: "Space Miner",
    tagline: "Browser-Based Arcade Space Survival Game",
    description:
      "Mine resources, dodge asteroids, chain combos, and survive as long as you can. Built with CreateJS on HTML5 Canvas — 3 power-ups, particle effects, procedural sound, and a persistent high score.",
    longDescription: [
      "Built a mobile-first arcade game on HTML5 Canvas using CreateJS (EaselJS, TweenJS, PreloadJS) with a delta-time game loop at 60 FPS.",
      "Custom sound effects via the Web Audio API, combo scoring, screen shake, particle bursts, and localStorage save data — all in vanilla JS, no build tools.",
    ],
    stack: ["CreateJS", "Web Audio API", "HTML5 Canvas", "Vanilla JS"],
    archTags: ["Game Dev", "Canvas", "Procedural"],
    color: "#F97316",
    status: "live" as const,
    github: null,
    demo: "https://space-miner.y1shubham.in",
  },
  {
    name: "StreamSync",
    tagline: "Real-Time Event Engagement Platform",
    description:
      "A real-time platform for live event engagement — synchronized chats, polls, reactions, and leaderboards, built on Redis Pub/Sub and WebSocket.",
    longDescription: [
      "Building a live event engagement platform with chat, polls, reactions, and leaderboards that stay in sync across all connected users.",
      "WebSocket architecture with Redis Pub/Sub handles real-time sync; a live analytics layer tracks engagement as it happens.",
    ],
    stack: ["Next.js", "Socket.io", "Redis Pub/Sub", "PostgreSQL"],
    archTags: ["WebSocket", "Distributed", "Event-Driven"],
    color: "#3B82F6",
    status: "coming-soon" as const,
    github: null,
    demo: null,
  },
  {
    name: "DevFlow AI",
    tagline: "AI-Powered Developer Collaboration Platform",
    description:
      "A SaaS platform for developer teams — AI-assisted sprint planning, Kanban boards, real-time collaboration, and GitHub integration in one place.",
    longDescription: [
      "Building a developer collaboration platform with AI-generated sprint tasks, GitHub-connected Kanban boards, and real-time multi-user editing.",
      "Backend covers Prisma ORM, Redis caching, role-based workspaces, and Socket.io for live collaboration.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Socket.io"],
    archTags: ["AI/ML", "SaaS", "Real-Time"],
    color: "#8B5CF6",
    status: "coming-soon" as const,
    github: null,
    demo: null,
  },
  {
    name: "APIFlow",
    tagline: "Scalable API Monitoring Platform",
    description:
      "An API monitoring platform — distributed workers check your endpoints on a schedule, queue failures with BullMQ, and surface uptime and latency on a live dashboard.",
    longDescription: [
      "Building an API observability platform with distributed monitoring workers, uptime tracking, and automated alerting.",
      "BullMQ handles the monitoring queue; cron workers run checks on schedule; WebSocket pushes analytics updates live to the dashboard.",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "BullMQ", "Socket.io"],
    archTags: ["Distributed", "Queue-Based", "Observability"],
    color: "#10B981",
    status: "coming-soon" as const,
    github: null,
    demo: null,
  },
];

export const education = {
  institution: "Netaji Subhas University of Technology (NSUT), Delhi",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  period: "2021 – 2025",
  cgpa: "7.05",
};

export const leadership = [
  {
    role: "Training & Placement Coordinator",
    organization: "NSUT",
    period: "Aug 2023 – May 2025",
    highlights: [
      "Coordinated student-company engagement, recruitment workflows, placement drives, and communication processes with HR teams and recruiters.",
      "Managed placement operations, student databases, reporting workflows, and portal coordination using Excel, SQL, and collaborative management tools.",
    ],
  },
];
