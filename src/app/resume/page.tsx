"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, FileText } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { personal, experience, skills, projects, education, leadership } from "@/data";

export default function ResumePage() {
  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <SectionLabel label="Resume" />
            <h1 className="text-4xl md:text-[52px] font-bold text-text-primary leading-tight">
              My Resume
            </h1>
          </div>
          <div className="flex gap-3">
            <a
              href={personal.resumeFile}
              download="Shubham_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-[10px] text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Download size={15} /> Download PDF
            </a>
            <a
              href={personal.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bg-elevated text-text-primary border border-white/10 px-5 py-2.5 rounded-[10px] text-sm font-medium hover:bg-bg-elevated/80 transition-all"
            >
              <ExternalLink size={15} /> Open
            </a>
          </div>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-bg-secondary border border-bg-elevated rounded-2xl overflow-hidden"
        >
          {/* Name header */}
          <div className="border-b border-bg-elevated p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold text-text-primary">{personal.name}</h2>
                <p className="text-accent font-medium mt-1">{personal.tagline} · {personal.role}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-text-muted">
                  <span>{personal.location}</span>
                  <a href={`mailto:${personal.email}`} className="hover:text-accent transition-colors">{personal.email}</a>
                  <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">github.com/y1shubham</a>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">linkedin.com/in/y1shubham</a>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-bg-elevated rounded-xl">
                <FileText size={22} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-10">
            {/* Experience */}
            <section>
              <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-5 pb-2 border-b border-bg-elevated">
                Professional Experience
              </h3>
              <div className="space-y-7">
                {experience.map((exp) => (
                  <div key={exp.company}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-text-primary">{exp.company}</h4>
                      {exp.current && (
                        <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full">Current</span>
                      )}
                    </div>
                    {exp.roles.map((r) => (
                      <div key={r.title} className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className="text-sm text-accent font-medium">{r.title}</span>
                        <span className="text-xs text-text-muted">· {r.period}</span>
                        <span className="text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-full capitalize">{r.type}</span>
                      </div>
                    ))}
                    <ul className="mt-2 space-y-1.5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-sm text-text-muted">
                          <span className="text-accent flex-shrink-0 mt-0.5">·</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs bg-bg-elevated text-text-muted px-2.5 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-5 pb-2 border-b border-bg-elevated">
                Projects
              </h3>
              <div className="space-y-6">
                {projects.map((p) => (
                  <div key={p.name}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-semibold text-text-primary">{p.name}</h4>
                      <span className="text-xs text-text-muted">— {p.tagline}</span>
                      <span className="text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-full">In Development</span>
                    </div>
                    <ul className="space-y-1.5">
                      {p.longDescription.map((l, li) => (
                        <li key={li} className="flex gap-2 text-sm text-text-muted">
                          <span className="text-accent flex-shrink-0 mt-0.5">·</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.stack.map((t) => (
                        <span key={t} className="text-xs bg-bg-elevated text-text-muted px-2.5 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-5 pb-2 border-b border-bg-elevated">
                Technical Skills
              </h3>
              <div className="space-y-3">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat} className="flex gap-3 text-sm flex-wrap items-baseline">
                    <span className="text-text-primary font-medium min-w-[140px] flex-shrink-0">{cat}:</span>
                    <span className="text-text-muted">{items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Leadership */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-5 pb-2 border-b border-bg-elevated">
                  Education
                </h3>
                <div>
                  <h4 className="font-semibold text-text-primary">{education.institution}</h4>
                  <p className="text-sm text-accent mt-0.5">{education.degree}</p>
                  <div className="flex gap-3 mt-2 text-xs text-text-muted">
                    <span>{education.period}</span>
                    <span>·</span>
                    <span>CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xs font-semibold text-accent tracking-widest uppercase mb-5 pb-2 border-b border-bg-elevated">
                  Leadership
                </h3>
                {leadership.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-text-primary">{item.role}</h4>
                    <p className="text-sm text-accent mt-0.5">{item.organization}</p>
                    <p className="text-xs text-text-muted mt-0.5">{item.period}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* Download footer */}
          <div className="border-t border-bg-elevated p-6 flex items-center justify-between flex-wrap gap-4 bg-bg-elevated/30">
            <p className="text-sm text-text-muted">Download the full PDF version for complete details.</p>
            <a
              href={personal.resumeFile}
              download="Shubham_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
