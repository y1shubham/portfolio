"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";

export default function ProjectsPreviewSection() {
  return (
    <section className="bg-bg-primary py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] bg-accent/5 rounded-full blur-[130px]" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <SectionLabel label="Projects" />
          <h2 className="text-3xl md:text-[40px] font-extrabold mb-3">
            <span className="text-text-primary">What I&apos;m </span>
            <span className="gradient-text">Building</span>
          </h2>
          <p className="text-text-muted text-[15px] max-w-xl mx-auto mb-14">
            Ambitious systems engineered to production quality — real-time, scalable, and built
            with modern full-stack architecture.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent
              font-medium text-sm transition-colors group border border-white/8 hover:border-accent/30
              px-5 py-2.5 rounded-full hover:shadow-glow-sm"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
