"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { experience } from "@/data";

export default function ExperienceSection() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel label="Experience" />
          <h2 className="text-3xl md:text-[38px] font-bold text-text-primary">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-[2px] bg-bg-elevated hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-1">
                  <div
                    className={`w-[11px] h-[11px] rounded-full border-2 mt-1 flex-shrink-0 ${
                      exp.current
                        ? "bg-accent border-accent"
                        : "bg-bg-primary border-bg-elevated"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-bg-secondary rounded-xl p-6 md:p-8 border border-bg-elevated
                  border-l-[3px] border-l-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]
                  transition-all duration-300"
                >
                  {/* Company + current badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-semibold text-text-primary">{exp.company}</h3>
                    {exp.current && (
                      <span className="bg-accent/15 text-accent text-xs font-medium px-3 py-0.5 rounded-full">
                        ● Current
                      </span>
                    )}
                  </div>

                  {/* Roles */}
                  <div className="flex flex-col gap-0.5 mb-4">
                    {exp.roles.map((r) => (
                      <div key={r.title} className="flex flex-wrap items-center gap-3">
                        <span className="text-[13px] font-medium text-accent">{r.title}</span>
                        <span className="text-xs text-text-muted">{r.period}</span>
                        <span className="text-xs bg-bg-elevated text-text-muted px-2 py-0.5 rounded-full capitalize">
                          {r.type}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                        <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="bg-bg-elevated text-text-muted text-xs font-medium px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
