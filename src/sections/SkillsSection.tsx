"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { skills } from "@/data";

const categoryColors: Record<string, { dot: string; glow: string }> = {
  Languages:          { dot: "#F59E0B", glow: "rgba(245,158,11,0.15)" },
  Frontend:           { dot: "#3B82F6", glow: "rgba(59,130,246,0.15)" },
  Backend:            { dot: "#10B981", glow: "rgba(16,185,129,0.15)" },
  "Database & Cloud": { dot: "#8B5CF6", glow: "rgba(139,92,246,0.15)" },
  "DevOps & Tools":   { dot: "#06B6D4", glow: "rgba(6,182,212,0.15)" },
  Concepts:           { dot: "#EC4899", glow: "rgba(236,72,153,0.15)" },
};

export default function SkillsSection() {
  return (
    <section className="bg-bg-primary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel label="Skills" />
          <h2 className="text-3xl md:text-[40px] font-extrabold">
            <span className="text-text-primary">My Technical </span>
            <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], ci) => {
            const col = categoryColors[category] ?? { dot: "#3B82F6", glow: "rgba(59,130,246,0.12)" };
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group gradient-border rounded-2xl p-6 transition-all duration-300"
                style={{ "--hover-glow": col.glow } as React.CSSProperties}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: col.dot, boxShadow: `0 0 8px ${col.dot}` }} />
                  <h3 className="text-sm font-bold text-text-primary">{category}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-bg-elevated text-text-muted text-[12px] font-medium px-3 py-1.5
                        rounded-lg border border-white/5 hover:border-opacity-40 hover:text-text-primary
                        transition-all duration-200 cursor-default"
                      style={{ "--tw-border-opacity": 1 } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.borderColor = col.dot + "55";
                        (e.currentTarget as HTMLSpanElement).style.color = "#F9FAFB";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLSpanElement).style.borderColor = "";
                        (e.currentTarget as HTMLSpanElement).style.color = "";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
