"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, Layers } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";

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
  const isComingSoon = project.status === "coming-soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.13 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-2xl overflow-hidden
        bg-bg-secondary border border-white/6
        hover:border-white/12 hover:shadow-glow-card transition-all duration-300"
    >
      {/* Gradient top bar */}
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />

      {/* Card glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 60px ${project.color}12` }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Top row */}
        <div className="flex items-center justify-between mb-5">
          <span className="flex items-center gap-1.5 bg-bg-elevated text-text-muted text-[11px] font-medium px-3 py-1 rounded-full">
            <Clock size={10} />
            {isComingSoon ? "In Development" : "Live"}
          </span>

          {/* Colored dot */}
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${project.color}18` }}>
            <Layers size={14} style={{ color: project.color }} />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
          {project.name}
        </h3>

        {/* Tagline */}
        <p className="text-[12px] font-semibold mb-4" style={{ color: project.color }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-[13px] text-text-muted leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Arch tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.archTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md font-medium"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-white/5 mb-4" />

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-bg-elevated text-text-muted text-[11px] font-medium px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        {isComingSoon ? (
          <div className="w-full h-10 rounded-xl flex items-center justify-center gap-2
            bg-bg-elevated text-text-muted text-[13px] font-medium cursor-not-allowed opacity-60
            border border-white/5">
            <Clock size={13} /> Coming Soon
          </div>
        ) : (
          <div className="flex gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 rounded-xl flex items-center justify-center gap-1.5
                  text-white text-[13px] font-semibold transition-all"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)` }}
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-3 rounded-xl flex items-center justify-center
                  bg-bg-elevated text-text-muted hover:text-text-primary border border-white/8
                  hover:border-white/20 transition-all"
              >
                <GithubIcon size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
