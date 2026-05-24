"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { skills } from "@/data";

const categoryColors: Record<string, { dot: string }> = {
  Languages:          { dot: "#F59E0B" },
  Frontend:           { dot: "#3B82F6" },
  Backend:            { dot: "#10B981" },
  "Database & Cloud": { dot: "#8B5CF6" },
  "DevOps & Tools":   { dot: "#06B6D4" },
  Concepts:           { dot: "#EC4899" },
};

const tabs = ["All", ...Object.keys(skills)];

export default function SkillsSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? Object.entries(skills)
      : Object.entries(skills).filter(([cat]) => cat === active);

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
          className="text-center mb-10"
        >
          <SectionLabel label="Skills" />
          <h2 className="text-3xl md:text-[40px] font-extrabold">
            <span className="text-text-primary">My Technical </span>
            <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="relative px-4 py-2 rounded-full text-sm font-semibold focus:outline-none"
            >
              {active === tab && (
                <motion.span
                  layoutId="skillTab"
                  className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  active === tab ? "text-accent" : "text-text-muted hover:text-text-primary"
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map(([category, items], ci) => {
              const col = categoryColors[category] ?? { dot: "#3B82F6" };
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, delay: ci * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group gradient-border rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: col.dot, boxShadow: `0 0 8px ${col.dot}` }}
                    />
                    <h3 className="text-sm font-bold text-text-primary">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-bg-elevated text-text-muted text-[12px] font-medium px-3 py-1.5
                          rounded-lg border border-white/5 hover:text-text-primary transition-all duration-200 cursor-default"
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
