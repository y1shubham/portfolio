"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  archTags: string[];
  color: string;
  status: "coming-soon" | "live";
  github: string | null;
  demo: string | null;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-bg-secondary rounded-2xl p-6 border border-bg-elevated
        hover:border-accent/20 hover:shadow-[0_20px_60px_rgba(59,130,246,0.07)]
        transition-all duration-300 flex flex-col"
    >
      {/* Color top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: project.color }}
      />

      {/* Top row */}
      <div className="flex items-center justify-between mb-5 mt-1">
        <span className="bg-bg-elevated text-text-muted text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
          <Clock size={10} />
          Coming Soon
        </span>
        <div
          className="w-8 h-8 rounded-full opacity-20"
          style={{ background: project.color, filter: "blur(8px)" }}
        />
      </div>

      {/* Name */}
      <h3 className="text-[22px] font-bold text-text-primary mb-1">{project.name}</h3>

      {/* Tagline */}
      <p className="text-[13px] font-medium mb-4" style={{ color: project.color }}>
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Arch tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.archTags.map((tag) => (
          <span key={tag} className="bg-bg-elevated text-text-muted text-[11px] px-2.5 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-bg-elevated mb-4" />

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span key={tech} className="bg-bg-elevated text-text-muted text-[11px] font-medium px-2.5 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        className={cn(
          "w-full h-11 rounded-[10px] flex items-center justify-center gap-2 text-sm font-medium transition-all",
          project.status === "coming-soon"
            ? "bg-bg-elevated text-text-muted cursor-not-allowed opacity-70"
            : "text-white hover:brightness-110"
        )}
        style={project.status === "live" ? { background: project.color } : {}}
      >
        {project.status === "coming-soon" ? (
          "Coming Soon"
        ) : (
          <>
            {project.demo && <ExternalLink size={14} />}
            {project.github && <GithubIcon size={14} />}
            View Project
          </>
        )}
      </div>
    </motion.div>
  );
}
