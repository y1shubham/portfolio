"use client";

import { motion } from "framer-motion";

const row1 = ["React.js", "Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Socket.io", "Docker", "Tailwind CSS", "Prisma ORM", "BullMQ", "Lit.js", "CreateJS"];
const row2 = ["AWS EC2", "AWS S3", "Express.js", "REST APIs", "WebSocket", "Git", "GitHub", "CI/CD", "Vercel", "Django", "MongoDB", "Redux", "Web Audio API"];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 bg-bg-secondary border border-white/6
              text-text-muted text-[12px] font-semibold px-4 py-2 rounded-full whitespace-nowrap
              hover:border-accent/30 hover:text-text-primary transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="bg-bg-secondary py-14 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
