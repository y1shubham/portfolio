"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { experience } from "@/data";

export default function ExperiencePage() {
  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel label="Experience" />
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight mb-4">
            <span className="gradient-text">Where I&apos;ve </span>
            <span className="text-text-primary">Worked</span>
          </h1>
          <p className="text-text-muted text-[15px] max-w-2xl">
            1+ year of professional experience building real-time platforms and scalable web products
            across full-time and internship roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[22px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent hidden md:block" />
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-8"
              >
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div className={`w-3 h-3 rounded-full border-2 mt-1 flex-shrink-0 ${
                    exp.current ? "bg-accent border-accent shadow-glow-sm" : "bg-bg-primary border-bg-elevated"
                  }`} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex-1 gradient-border rounded-2xl p-7 md:p-9 transition-all duration-300 hover:shadow-glow-sm"
                >
                  {/* Company + badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-extrabold text-text-primary">{exp.company}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-400/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Roles */}
                  <div className="flex flex-col gap-1 mb-6">
                    {exp.roles.map((r) => (
                      <div key={r.title} className="flex flex-wrap items-center gap-2">
                        <span className="text-[14px] font-semibold gradient-text-accent">{r.title}</span>
                        <span className="text-xs text-text-muted">{r.period}</span>
                        <span className={`text-[11px] px-2.5 py-0.5 rounded-full capitalize font-semibold border ${
                          r.type === "full-time"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/25"
                            : "bg-violet-500/10 text-violet-400 border-violet-500/25"
                        }`}>
                          {r.type === "full-time" ? "Full-Time" : "Internship"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/5 mb-5" />

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-3 text-[14px] text-text-muted leading-relaxed">
                        <span className="gradient-text-accent mt-0.5 flex-shrink-0 font-bold">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="bg-bg-elevated text-text-muted text-[12px] font-medium px-3 py-1.5 rounded-lg border border-white/5 hover:border-accent/30 hover:text-text-primary transition-all duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/projects" className="inline-flex items-center gap-2 shimmer-btn text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-all">
            View My Projects <ArrowRight size={14} />
          </Link>
          <Link href="/resume" className="inline-flex items-center gap-2 gradient-border text-text-muted hover:text-accent px-6 py-3 rounded-xl text-sm font-medium transition-all">
            Download Resume <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
