"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";

const stats = [
  { value: "1+",         label: "Years Experience",       gradient: "from-blue-500 to-cyan-400" },
  { value: "3",          label: "Major Projects",          gradient: "from-violet-500 to-purple-400" },
  { value: "Full Stack", label: "Development Focus",       gradient: "from-emerald-500 to-teal-400" },
  { value: "Real-Time",  label: "Systems Specialty",       gradient: "from-orange-500 to-amber-400" },
];

export default function AboutSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label="About" />
          <h2 className="text-3xl md:text-[40px] font-extrabold text-text-primary leading-tight mb-6">
            Building for scale,<br />
            <span className="gradient-text">one component at a time.</span>
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-4">
            I&apos;m a Full Stack Developer at{" "}
            <span className="gradient-text-accent font-semibold">LiveLike Sports Technologies</span>{" "}
            in Gurgaon, where I build real-time sports engagement platforms for live events — from
            interactive polls and reactions to live leaderboards and synchronized multi-user experiences.
          </p>
          <p className="text-[15px] text-text-muted leading-relaxed mb-4">
            My stack leans frontend-heavy — React.js, Next.js, Lit.js — but I&apos;m deeply involved in
            backend systems too: Redis Pub/Sub for real-time data, Node.js APIs, and PostgreSQL
            for data persistence.
          </p>
          <p className="text-[15px] text-text-muted leading-relaxed">
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
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="gradient-border rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-sm group"
            >
              <div className={`text-2xl font-extrabold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-[13px] text-text-muted group-hover:text-text-primary transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
