"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

const filters = ["All", "Game Dev", "Canvas", "Real-Time", "AI/ML", "SaaS", "Distributed", "Observability"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.archTags.includes(active));

  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel label="Projects" />
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight mb-4">
            <span className="text-text-primary">What I&apos;m </span>
            <span className="gradient-text">Building</span>
          </h1>
          <p className="text-text-muted text-[15px] max-w-2xl">
            Ambitious systems engineered to production quality — real-time, scalable, and built
            with modern full-stack architecture. 3 projects are actively under development and 1 — Space Miner, a browser-based arcade survival game — is already live.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "shimmer-btn text-white shadow-glow-sm"
                  : "gradient-border text-text-muted hover:text-text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-text-muted text-center py-20"
          >
            No projects match this filter.
          </motion.p>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 gradient-border rounded-2xl p-6"
        >
          <p className="text-[13px] text-text-muted leading-relaxed">
            <span className="gradient-text-accent font-semibold">Note: </span>
            Space Miner is live and playable. The remaining three projects — StreamSync, DevFlow AI, and APIFlow — are under active development and not yet publicly available.
            They represent my focus on building production-grade real-time and AI-integrated systems —
            architecture, scalability, and developer experience are the primary design goals.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
