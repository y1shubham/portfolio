"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, Download } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { personal } from "@/data";

const techBadges = ["React.js", "Next.js", "Node.js", "Redis", "TypeScript", "Socket.io"];

const floatDelays = [0, 0.6, 1.2, 1.8, 2.4, 0.9];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute top-[-100px] right-0 w-[600px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* LEFT */}
        <div className="flex flex-col">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-bg-elevated px-4 py-2 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-text-muted">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-[68px] font-bold text-text-primary leading-none tracking-tight mb-4"
          >
            {personal.name.toUpperCase()}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-text-muted mb-4"
          >
            {personal.role} @{" "}
            <span className="text-accent">{personal.company}</span>
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base text-text-muted leading-relaxed max-w-lg mb-8"
          >
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-[10px]
                text-[15px] font-semibold hover:brightness-110 transition-all"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-bg-elevated text-text-primary px-6 py-3 rounded-[10px]
                text-[15px] font-medium hover:bg-bg-elevated/80 transition-all border border-white/10"
            >
              Download Resume <Download size={16} />
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5"
          >
            <Link href={personal.github} target="_blank" rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors">
              <GithubIcon size={20} />
            </Link>
            <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors">
              <LinkedinIcon size={20} />
            </Link>
            <Link href={`mailto:${personal.email}`}
              className="text-text-muted hover:text-text-primary transition-colors">
              <Mail size={20} />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Avatar + floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Avatar card */}
          <div className="relative w-72 h-80 md:w-80 md:h-96 bg-bg-secondary rounded-3xl flex flex-col items-center justify-center border border-bg-elevated">
            <div className="absolute inset-0 rounded-3xl bg-accent/5 blur-xl" />
            {/* Avatar */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-bg-elevated relative z-10">
              <Image
                src="/images/shubham.jpg"
                alt="Shubham Yadav"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="mt-4 text-sm font-medium text-text-muted relative z-10">{personal.name}</span>
            <div className="mt-3 flex items-center gap-2 bg-bg-elevated px-4 py-1.5 rounded-full relative z-10">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-medium text-green-400">Open to Work</span>
            </div>
          </div>

          {/* Floating tech badges */}
          {techBadges.map((tech, i) => {
            const positions = [
              "-left-14 top-8",
              "-right-14 top-8",
              "-left-16 top-1/2 -translate-y-1/2",
              "-right-16 top-1/2 -translate-y-1/2",
              "-left-12 bottom-12",
              "-right-12 bottom-12",
            ];
            return (
              <motion.div
                key={tech}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: floatDelays[i] }}
                className={`absolute ${positions[i]} hidden lg:flex bg-bg-secondary border border-bg-elevated px-3 py-1.5 rounded-full text-xs font-medium text-text-muted shadow-lg`}
              >
                {tech}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
