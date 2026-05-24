"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

const filters = ["All", "Real-Time", "AI/ML", "SaaS", "Distributed", "Observability"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.archTags.includes(active));

  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel label="Projects" />
          <h1 className="text-4xl md:text-[52px] font-bold text-text-primary leading-tight mb-4">
            What I&apos;m Building
          </h1>
          <p className="text-text-muted text-base max-w-2xl">
            Ambitious systems engineered to production quality — real-time, scalable, and built
            with modern full-stack architecture. All three projects are actively under development.
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "bg-accent text-white"
                  : "bg-bg-secondary text-text-muted border border-bg-elevated hover:border-accent/40 hover:text-text-primary"
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
            transition={{ duration: 0.35 }}
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
            No projects found for this filter.
          </motion.p>
        )}

        {/* Context note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-bg-secondary rounded-xl p-6 border border-bg-elevated"
        >
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="text-accent font-medium">Note:</span> All three projects are under active development and not yet publicly available.
            They represent my focus on building production-grade real-time and AI-integrated systems — architecture, scalability, and developer experience
            are the primary design goals.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
