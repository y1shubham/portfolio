"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { experience, leadership, education, skills } from "@/data";

export default function ExperiencePage() {
  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel label="Experience" />
          <h1 className="text-4xl md:text-[52px] font-bold text-text-primary leading-tight mb-4">
            Where I&apos;ve Worked
          </h1>
          <p className="text-text-muted text-base max-w-2xl">
            Full stack development with 1+ year of professional experience across real-time sports
            engagement platforms and SaaS products.
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mb-20">
          <div className="relative">
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
                  <div className="hidden md:flex flex-col items-center pt-1">
                    <div
                      className={`w-[11px] h-[11px] rounded-full border-2 mt-1 flex-shrink-0 ${
                        exp.current
                          ? "bg-accent border-accent"
                          : "bg-bg-primary border-bg-elevated"
                      }`}
                    />
                  </div>

                  <div className="flex-1 bg-bg-secondary rounded-xl p-6 md:p-8 border border-bg-elevated border-l-[3px] border-l-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-text-primary">{exp.company}</h3>
                      {exp.current && (
                        <span className="bg-accent/15 text-accent text-xs font-medium px-3 py-0.5 rounded-full">
                          ● Current
                        </span>
                      )}
                    </div>

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

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                          <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

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
        </section>

        {/* Skills section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionLabel label="Skills" />
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Technical Stack</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.07 }}
                className="bg-bg-secondary rounded-xl p-5 border border-bg-elevated"
              >
                <h3 className="text-sm font-semibold text-text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-bg-primary text-text-muted text-xs font-medium px-3 py-1.5 rounded-full border border-bg-elevated hover:border-accent/40 hover:text-text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership + Education */}
        <section className="grid md:grid-cols-2 gap-10">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label="Leadership" />
            <h2 className="text-2xl font-bold text-text-primary mb-6">Leadership & Responsibilities</h2>
            {leadership.map((item, i) => (
              <div key={i} className="bg-bg-secondary rounded-xl p-6 border border-bg-elevated border-l-[3px] border-l-accent">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{item.role}</h3>
                    <p className="text-sm text-accent">{item.organization}</p>
                    <p className="text-xs text-text-muted mt-0.5">{item.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel label="Education" />
            <h2 className="text-2xl font-bold text-text-primary mb-6">Academic Background</h2>
            <div className="bg-bg-secondary rounded-xl p-6 border border-bg-elevated">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs text-text-muted font-medium tracking-wider uppercase">
                  {education.period}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">{education.institution}</h3>
              <p className="text-sm text-accent mb-3">{education.degree}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-bg-elevated text-text-muted text-xs font-medium px-3 py-1 rounded-full">
                  CGPA: {education.cgpa}
                </span>
                <span className="bg-bg-elevated text-text-muted text-xs font-medium px-3 py-1 rounded-full">
                  Computer Science & Engineering
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
