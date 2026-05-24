"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, ArrowRight, Download, MapPin } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { personal } from "@/data";

const phrases = ["Full Stack Developer", "Real-Time Systems Engineer", "Building @ LiveLike"];

const techBadges = [
  { label: "React.js",   color: "#61DAFB", pos: "-left-20 top-10" },
  { label: "Next.js",    color: "#F9FAFB", pos: "-right-20 top-10" },
  { label: "Node.js",    color: "#84CC16", pos: "-left-24 top-1/2 -translate-y-1/2" },
  { label: "Redis",      color: "#EF4444", pos: "-right-24 top-1/2 -translate-y-1/2" },
  { label: "TypeScript", color: "#3B82F6", pos: "-left-20 bottom-14" },
  { label: "Socket.io",  color: "#A78BFA", pos: "-right-20 bottom-14" },
];

function Typewriter() {
  const [text, setText]       = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink]     = useState(true);

  useEffect(() => {
    const word = phrases[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 38 : 72
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="gradient-text-accent font-semibold">
      {text}
      <span className={`ml-0.5 inline-block w-[2px] h-[1em] bg-accent align-middle transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-12 items-center py-20 relative z-10">
        {/* ── LEFT ── */}
        <div className="flex flex-col">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full w-fit mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wide">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-[72px] font-extrabold leading-[0.95] tracking-tighter mb-5"
          >
            <span className="gradient-text">{personal.name.split(" ")[0]}</span>
            <br />
            <span className="text-text-primary">{personal.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-base md:text-lg font-medium text-text-muted mb-2 h-7"
          >
            <Typewriter />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center gap-1.5 text-text-muted text-sm mb-7"
          >
            <MapPin size={13} className="text-accent" />
            {personal.location}
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-[14px] text-text-muted leading-relaxed max-w-lg mb-9 border-l-2 border-accent/30 pl-4"
          >
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 shimmer-btn text-white px-6 py-3 rounded-xl
                text-[14px] font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              View Projects <ArrowRight size={15} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 bg-bg-elevated text-text-primary px-6 py-3 rounded-xl
                text-[14px] font-medium border border-white/8 hover:border-accent/40 hover:bg-bg-elevated/80
                hover:shadow-glow-sm transition-all duration-300"
            >
              <Download size={15} /> Download Resume
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.56 }}
            className="flex items-center gap-3"
          >
            {[
              { href: personal.github,            icon: <GithubIcon size={17} />,   label: "GitHub" },
              { href: personal.linkedin,           icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
              { href: `mailto:${personal.email}`,  icon: <Mail size={17} />,         label: "Email" },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-10 h-10 bg-bg-secondary border border-bg-elevated rounded-xl flex items-center justify-center
                  text-text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow-sm transition-all duration-200"
              >
                {icon}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative flex items-center justify-center"
        >
          {/* Spinning gradient ring */}
          <div className="absolute w-[340px] h-[420px] md:w-[380px] md:h-[460px] rounded-3xl pointer-events-none">
            <div className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, #3B82F6 30%, #06B6D4 50%, transparent 70%)",
                animation: "spin-slow 6s linear infinite",
                filter: "blur(1px)",
              }}
            />
          </div>

          {/* Avatar card */}
          <div className="relative w-72 h-80 md:w-80 md:h-96 gradient-border rounded-3xl flex flex-col items-center justify-center shadow-glow-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-accent/30 shadow-glow-sm relative z-10">
              <Image
                src="/images/shubham.jpg"
                alt="Shubham Yadav"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <span className="mt-4 text-sm font-semibold text-text-primary relative z-10 tracking-wide">
              {personal.name}
            </span>
            <p className="text-xs text-text-muted relative z-10 mt-0.5">{personal.tagline}</p>

            <div className="mt-3 flex items-center gap-2 bg-green-400/10 border border-green-400/20 px-4 py-1.5 rounded-full relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-green-400">Open to Work</span>
            </div>
          </div>

          {/* Floating tech badges */}
          {techBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.5 }}
              className={`absolute ${badge.pos} hidden lg:flex items-center gap-1.5
                glass-card px-3.5 py-2 rounded-full text-xs font-semibold shadow-glow-sm`}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: badge.color }} />
              <span className="text-text-primary">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-secondary to-transparent pointer-events-none" />
    </section>
  );
}
