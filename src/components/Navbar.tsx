"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume",     href: "/resume" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500",
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group z-50">
            <span className="text-xl font-extrabold gradient-text-accent tracking-tight">SY</span>
            <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-accent to-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-text-primary bg-accent/10"
                    : "text-text-muted hover:text-text-primary hover:bg-white/5"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-px rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-bg-secondary border border-white/8 text-text-muted hover:text-text-primary transition-colors z-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — outside header so it truly covers the page */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 md:hidden bg-bg-primary flex flex-col"
          >
            {/* Top gradient line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <nav className="flex flex-col gap-1 px-6 pt-6 pb-10 flex-1 overflow-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-5 py-4 rounded-xl text-base font-semibold transition-all",
                      pathname === link.href
                        ? "text-accent bg-accent/10 border border-accent/20"
                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
