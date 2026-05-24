"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import { skills } from "@/data";

export default function SkillsSection() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel label="Skills" />
          <h2 className="text-3xl md:text-[38px] font-bold text-text-primary">My Technical Stack</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="bg-bg-primary rounded-xl p-6 border border-bg-elevated"
            >
              <h3 className="text-base font-semibold text-text-primary mb-5">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-bg-secondary text-text-muted text-xs font-medium px-3 py-1.5
                      rounded-full border border-bg-elevated hover:border-accent/40
                      hover:text-text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
