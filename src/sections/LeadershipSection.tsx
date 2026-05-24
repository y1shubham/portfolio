"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { leadership, education } from "@/data";

export default function LeadershipSection() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label="Leadership" />
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Leadership & Responsibilities
          </h2>

          {leadership.map((item, i) => (
            <div
              key={i}
              className="bg-bg-secondary rounded-xl p-6 border border-bg-elevated border-l-[3px] border-l-accent"
            >
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
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
            Academic Background
          </h2>

          <div className="bg-bg-secondary rounded-xl p-6 border border-bg-elevated">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs text-text-muted font-medium tracking-wider uppercase">
                {education.period}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {education.institution}
            </h3>
            <p className="text-sm text-accent mb-3">{education.degree}</p>
            <div className="flex items-center gap-2">
              <span className="bg-bg-elevated text-text-muted text-xs font-medium px-3 py-1 rounded-full">
                CGPA: {education.cgpa}
              </span>
              <span className="bg-bg-elevated text-text-muted text-xs font-medium px-3 py-1 rounded-full">
                Computer Science & Engineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
