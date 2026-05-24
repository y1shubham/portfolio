"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { leadership, education } from "@/data";

export default function LeadershipSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent-cyan/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 relative z-10">
        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <SectionLabel label="Leadership" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            <span className="text-text-primary">Leadership &amp; </span>
            <span className="gradient-text">Responsibilities</span>
          </h2>

          {leadership.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="gradient-border rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-sm flex-1"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">{item.role}</h3>
                  <p className="text-sm gradient-text-accent font-semibold">{item.organization}</p>
                  <p className="text-xs text-text-muted mt-0.5">{item.period}</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {item.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2.5 text-[13px] text-text-muted leading-relaxed">
                    <span className="gradient-text-accent mt-0.5 flex-shrink-0 font-bold">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <SectionLabel label="Education" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            <span className="text-text-primary">Academic </span>
            <span className="gradient-text">Background</span>
          </h2>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="gradient-border rounded-2xl p-6 transition-all duration-300 hover:shadow-glow-sm flex-1"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} className="text-accent-cyan" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  <span className="text-[11px] text-text-muted font-semibold tracking-wider uppercase">
                    {education.period}
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary">{education.institution}</h3>
                <p className="text-sm gradient-text-accent font-semibold mt-0.5">{education.degree}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
              <span className="bg-bg-elevated text-text-muted text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5">
                CGPA: {education.cgpa}
              </span>
              <span className="bg-bg-elevated text-text-muted text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5">
                Computer Science & Engineering
              </span>
              <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-lg border border-accent/20">
                B.Tech
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
