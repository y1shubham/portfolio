"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { experience } from "@/data";

export default function ExperienceSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel label="Experience" />
          <h2 className="text-3xl md:text-[40px] font-extrabold">
            <span className="gradient-text">Where I&apos;ve</span>
            <span className="text-text-primary"> Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
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
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div
                    className={`w-[12px] h-[12px] rounded-full border-2 mt-1 flex-shrink-0 transition-all ${
                      exp.current
                        ? "bg-accent border-accent shadow-glow-sm"
                        : "bg-bg-primary border-bg-elevated"
                    }`}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex-1 gradient-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-glow-sm"
                >
                  {/* Company + badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-400/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Roles */}
                  <div className="flex flex-col gap-0.5 mb-5">
                    {exp.roles.map((r) => (
                      <div key={r.title} className="flex flex-wrap items-center gap-2">
                        <span className="text-[13px] font-semibold gradient-text-accent">{r.title}</span>
                        <span className="text-xs text-text-muted">{r.period}</span>
                        <span className={`text-[11px] px-2.5 py-0.5 rounded-full capitalize font-medium border ${
                          r.type === "full-time"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/25"
                            : "bg-violet-500/10 text-violet-400 border-violet-500/25"
                        }`}>
                          {r.type === "full-time" ? "Full-Time" : "Internship"}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2.5 text-[13px] text-text-muted leading-relaxed">
                        <span className="gradient-text-accent mt-0.5 flex-shrink-0 font-bold">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="bg-bg-elevated text-text-muted text-[11px] font-medium px-3 py-1 rounded-lg border border-white/5 hover:border-accent/30 hover:text-text-primary transition-all duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
