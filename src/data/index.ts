export const personal = {
  name: "Shubham Yadav",
  role: "Assistant Software Developer (Web)",
  company: "LiveLike Sports Technologies",
  tagline: "Full Stack Developer",
  summary:
    "Full Stack Developer with 1 year of professional experience building scalable web applications, interactive user experiences, and real-time engagement platforms using React.js, Next.js, Lit.js, Node.js, PostgreSQL, and Redis.",
  email: "shubham.yadav.inbox@gmail.com",
  phone: "+91-9198929673",
  location: "Gurgaon, Haryana, India",
  github: "https://github.com/y1shubham",
  linkedin: "https://linkedin.com/in/y1shubham",
  resumeFile: "/resume/shubham-yadav-resume.pdf",
};

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  Frontend: ["React.js", "Next.js", "Lit.js", "Tailwind CSS", "Redux", "Zustand", "ShadCN UI", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Auth", "Socket.io", "BullMQ"],
  "Database & Cloud": ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "AWS EC2", "AWS S3"],
  "DevOps & Tools": ["Docker", "Git", "GitHub", "CI/CD", "Postman", "Vercel", "Render"],
  Concepts: ["Real-Time Systems", "System Design", "Caching", "API Integrations", "SaaS Architecture"],
};

export const experience = [
  {
    company: "LiveLike Sports Technologies",
    companyUrl: "https://livelike.com",
    roles: [
      { title: "Assistant Software Developer (Web)", period: "Jul 2025 – Present", type: "full-time" },
      { title: "Software Developer Intern", period: "Feb 2025 – Jul 2025", type: "internship" },
    ],
    highlights: [
      "Engineered interactive sports engagement experiences using React.js and Lit.js supporting real-time audience participation workflows for live events.",
      "Developed reusable frontend components, scalable UI workflows, and platform integrations for sports engagement products and interactive experiences.",
      "Optimized sports data workflows by incorporating SDAPI/OPTA services along with Redis caching and CDN strategies to reduce API load and improve platform performance.",
      "Collaborated with engineering, QA, and product teams in agile development environments to deliver scalable production-ready features.",
    ],
    tech: ["React.js", "Lit.js", "Node.js", "Redis", "WebSocket", "SDAPI/OPTA", "TypeScript"],
    current: true,
  },
  {
    company: "Zeepty",
    companyUrl: "#",
    roles: [
      { title: "Full Stack Developer Intern", period: "May 2024 – Jul 2024", type: "internship" },
    ],
    highlights: [
      "Created responsive and optimized frontend interfaces using Next.js, React.js, and Tailwind CSS for scalable web platform experiences.",
      "Integrated REST APIs, authentication workflows, and reusable UI components while improving frontend responsiveness and performance.",
      "Partnered with cross-functional teams on feature implementation, debugging, UI optimization, and scalable user experience enhancements.",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "REST APIs", "TypeScript"],
    current: false,
  },
];

export const projects = [
  {
    name: "StreamSync",
    tagline: "Real-Time Event Engagement Platform",
    description:
      "A scalable real-time platform enabling synchronized live chats, polls, reactions, leaderboards, and multi-user interactions powered by Redis Pub/Sub and WebSocket architecture.",
    longDescription: [
      "Developed a real-time event engagement platform enabling live chats, polls, reactions, leaderboards, and synchronized multi-user interactions.",
      "Implemented scalable WebSocket architecture, Redis Pub/Sub integration, and real-time analytics systems for high-performance event synchronization workflows.",
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
      "A modern SaaS collaboration platform featuring AI-powered sprint planning, Kanban workflows, real-time collaboration, and GitHub-integrated productivity systems.",
    longDescription: [
      "Built an AI-powered developer collaboration platform featuring real-time sprint management, AI task generation, GitHub-integrated workflows, and collaborative Kanban boards.",
      "Implemented scalable backend APIs, Prisma ORM workflows, Redis caching, role-based workspace management, and real-time collaboration systems using Socket.io.",
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
      "A backend-heavy observability platform featuring distributed monitoring workers, Redis-backed queues, uptime tracking, and real-time analytics dashboards.",
    longDescription: [
      "Architected a scalable API monitoring and observability platform featuring real-time analytics dashboards, distributed monitoring workers, uptime tracking, and automated incident alerting.",
      "Engineered Redis-backed queue systems, cron-based monitoring services, and WebSocket-driven analytics workflows for scalable observability infrastructure.",
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
