"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { personal } from "@/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Compose mailto link as fallback (no backend needed)
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(`Hi Shubham,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  }

  const contactItems = [
    {
      icon: <Mail size={18} className="text-accent" />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <GithubIcon size={18} className="text-accent" />,
      label: "GitHub",
      value: "github.com/y1shubham",
      href: personal.github,
    },
    {
      icon: <LinkedinIcon size={18} className="text-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/y1shubham",
      href: personal.linkedin,
    },
    {
      icon: <MapPin size={18} className="text-accent" />,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel label="Contact" />
          <h1 className="text-4xl md:text-[52px] font-bold text-text-primary leading-tight mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-text-muted text-base max-w-xl">
            Open to new opportunities, collaborations, and interesting conversations. Reach out
            directly or use the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Contact details */}
            <div className="space-y-4 mb-10">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-bg-secondary rounded-xl p-4 border border-bg-elevated">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-text-primary">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div className="bg-bg-secondary rounded-xl p-5 border border-bg-elevated border-l-[3px] border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-text-primary">Available for Opportunities</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Currently open to full-time roles, freelance projects, and exciting collaborations
                in full-stack development and real-time systems.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={52} className="text-green-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-sm">
                    Your email client should have opened. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-bg-secondary border border-bg-elevated rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-bg-secondary border border-bg-elevated rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-bg-secondary border border-bg-elevated rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full bg-bg-secondary border border-bg-elevated rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-text-muted text-center">
                  This opens your email client with the message pre-filled.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
