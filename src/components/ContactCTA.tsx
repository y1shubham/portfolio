"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { personal } from "@/data";

export default function ContactCTA() {
  return (
    <section className="bg-bg-primary relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wide">Open to opportunities</span>
          </div>

          <h2 className="text-4xl md:text-[52px] font-extrabold leading-tight mb-5">
            <span className="text-text-primary">Let&apos;s build</span>
            <br />
            <span className="gradient-text">something great</span>
          </h2>

          <p className="text-[15px] text-text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            I&apos;m always open to discussing new roles, interesting projects, or just a good
            conversation about real-time systems and scalable architecture.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 shimmer-btn text-white px-7 py-3.5 rounded-xl
                text-[14px] font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              <Mail size={15} /> Say Hello
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bg-elevated text-text-primary px-7 py-3.5 rounded-xl
                text-[14px] font-medium border border-white/8 hover:border-accent/40 hover:shadow-glow-sm
                transition-all duration-300 group"
            >
              Contact Page
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-text-muted">Find me on</span>
            {[
              { href: personal.github,   icon: <GithubIcon size={17} />,   label: "GitHub" },
              { href: personal.linkedin, icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 bg-bg-secondary border border-bg-elevated rounded-xl flex items-center justify-center
                  text-text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow-sm transition-all duration-200"
              >
                {icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
