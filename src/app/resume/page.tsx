"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, FileText, MapPin, Mail } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import SectionLabel from "@/components/SectionLabel";
import {
  personal,
  experience,
  skills,
  projects,
  education,
  leadership,
} from "@/data";

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
      <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
      <h3 className="text-[11px] font-bold tracking-[3px] uppercase gradient-text-accent">
        {title}
      </h3>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-accent/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <SectionLabel label="Resume" />
            <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight">
              <span className="text-text-primary">My </span>
              <span className="gradient-text">Resume</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <a
              href={personal.resumeFile}
              download="Shubham_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 shimmer-btn text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-all"
            >
              <Download size={14} /> Download PDF
            </a>
            <a
              href={personal.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-border text-text-primary px-5 py-2.5 rounded-xl text-sm font-medium hover:text-accent transition-all"
            >
              <ExternalLink size={14} /> Open
            </a>
          </div>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gradient-border rounded-2xl overflow-hidden"
        >
          {/* Name header */}
          <div className="border-b border-white/5 p-8 md:p-10 bg-bg-secondary/50">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl font-extrabold gradient-text">
                  {personal.name}
                </h2>
                <p className="gradient-text-accent font-semibold mt-1 text-sm">
                  {personal.tagline} · {personal.role}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3">
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin size={11} />
                    {personal.location}
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    <Mail size={11} />
                    {personal.email}
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    <GithubIcon size={11} />
                    github.com/y1shubham
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    <LinkedinIcon size={11} />
                    linkedin.com/in/y1shubham
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl">
                <FileText size={20} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-10 bg-bg-secondary/30">
            {/* Experience */}
            <section>
              <SectionDivider title="Professional Experience" />
              <div className="space-y-7">
                {experience.map((exp) => (
                  <div key={exp.company}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-text-primary">
                        {exp.company}
                      </h4>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 bg-green-400/10 text-green-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-green-400/25">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    {exp.roles.map((r) => (
                      <div
                        key={r.title}
                        className="flex flex-wrap items-center gap-2 mb-0.5"
                      >
                        <span className="text-sm gradient-text-accent font-semibold">
                          {r.title}
                        </span>
                        <span className="text-xs text-text-muted">
                          · {r.period}
                        </span>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full font-medium border ${
                            r.type === "full-time"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/25"
                              : "bg-violet-500/10 text-violet-400 border-violet-500/25"
                          }`}
                        >
                          {r.type === "full-time" ? "Full-Time" : "Internship"}
                        </span>
                      </div>
                    ))}
                    <ul className="mt-2 space-y-1.5">
                      {exp.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex gap-2 text-[13px] text-text-muted"
                        >
                          <span className="gradient-text-accent flex-shrink-0 mt-0.5 font-bold">
                            ·
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-bg-elevated text-text-muted px-2.5 py-1 rounded-lg border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionDivider title="Projects" />
              <div className="space-y-6">
                {projects.map((p) => (
                  <div key={p.name}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-text-primary">{p.name}</h4>
                      <span className="text-xs text-text-muted">
                        - {p.tagline}
                      </span>
                      <span className="text-[11px] bg-bg-elevated text-text-muted px-2.5 py-0.5 rounded-full border border-white/5">
                        In Development
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {p.longDescription.map((l, li) => (
                        <li
                          key={li}
                          className="flex gap-2 text-[13px] text-text-muted"
                        >
                          <span className="gradient-text-accent flex-shrink-0 mt-0.5 font-bold">
                            ·
                          </span>
                          {l}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] bg-bg-elevated text-text-muted px-2.5 py-1 rounded-lg border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <SectionDivider title="Technical Skills" />
              <div className="space-y-2.5">
                {Object.entries(skills).map(([cat, items]) => (
                  <div
                    key={cat}
                    className="flex gap-3 text-[13px] flex-wrap items-baseline"
                  >
                    <span className="text-text-primary font-semibold min-w-[140px] flex-shrink-0">
                      {cat}:
                    </span>
                    <span className="text-text-muted">{items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Leadership */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <SectionDivider title="Education" />
                <h4 className="font-bold text-text-primary">
                  {education.institution}
                </h4>
                <p className="text-sm gradient-text-accent font-semibold mt-0.5">
                  {education.degree}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-[11px] bg-bg-elevated text-text-muted px-2.5 py-1 rounded-lg border border-white/5">
                    {education.period}
                  </span>
                  <span className="text-[11px] bg-bg-elevated text-text-muted px-2.5 py-1 rounded-lg border border-white/5">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </section>
              <section>
                <SectionDivider title="Leadership" />
                {leadership.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-text-primary">{item.role}</h4>
                    <p className="text-sm gradient-text-accent font-semibold mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.period}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/5 p-6 flex items-center justify-between flex-wrap gap-4 bg-bg-elevated/20">
            <p className="text-[13px] text-text-muted">
              Download the full PDF for complete details.
            </p>
            <a
              href={personal.resumeFile}
              download="Shubham_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 shimmer-btn text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-glow-sm transition-all"
            >
              <Download size={13} /> Download PDF
            </a>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-3 justify-center"
        >
          {[
            {
              label: "GitHub",
              href: personal.github,
              icon: <GithubIcon size={13} />,
            },
            {
              label: "LinkedIn",
              href: personal.linkedin,
              icon: <LinkedinIcon size={13} />,
            },
            {
              label: "Email",
              href: `mailto:${personal.email}`,
              icon: <Mail size={13} />,
            },
          ].map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 gradient-border text-text-muted hover:text-accent px-4 py-2 rounded-full text-xs font-medium transition-all"
            >
              {icon} {label}
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
