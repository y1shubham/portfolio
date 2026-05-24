"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "1+",          label: "Years Experience" },
  { value: "3",           label: "Major Projects" },
  { value: "Full Stack",  label: "Development Focus" },
  { value: "Real-Time",   label: "Systems Specialty" },
];

export default function AboutSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label="About" />
          <h2 className="text-3xl md:text-[38px] font-bold text-text-primary leading-tight mb-6">
            Building for scale,<br />one component at a time.
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            I&apos;m a Full Stack Developer at <span className="text-accent font-medium">LiveLike Sports Technologies</span> in
            Gurgaon, where I build real-time sports engagement platforms for live events — from
            interactive polls and reactions to live leaderboards and synchronized multi-user experiences.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            My stack leans frontend-heavy — React.js, Next.js, Lit.js — but I&apos;m deeply involved in
            backend systems too: Redis Pub/Sub for real-time data, Node.js APIs, and PostgreSQL
            for data persistence.
          </p>
          <p className="text-text-muted leading-relaxed">
            Outside of work, I&apos;m building three projects — StreamSync, DevFlow AI, and APIFlow —
            all focused on real-time systems and scalable architecture. I graduated from NSUT Delhi
            with a B.Tech in Computer Science (2025) and also served as Training &amp; Placement
            Coordinator, coordinating placements for my entire batch.
          </p>
        </motion.div>

        {/* Right — Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ borderColor: "rgba(59,130,246,0.4)" }}
              className="bg-bg-primary rounded-xl p-6 border border-bg-elevated transition-all
                hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
            >
              <p className="text-3xl font-bold text-text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
