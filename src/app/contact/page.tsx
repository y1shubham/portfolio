"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Copy, Check } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { personal } from "@/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try emailing me directly.");
    } finally {
      setLoading(false);
    }
  }

  const contactItems = [
    {
      icon: <Mail size={18} className="text-accent" />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "#3B82F6",
    },
    {
      icon: <GithubIcon size={18} className="text-text-muted" />,
      label: "GitHub",
      value: "github.com/y1shubham",
      href: personal.github,
      color: "#9CA3AF",
    },
    {
      icon: <LinkedinIcon size={18} className="text-blue-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/y1shubham",
      href: personal.linkedin,
      color: "#60A5FA",
    },
    {
      icon: <MapPin size={18} className="text-accent-cyan" />,
      label: "Location",
      value: personal.location,
      href: null,
      color: "#06B6D4",
    },
  ];

  return (
    <main className="bg-bg-primary min-h-screen pt-28 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel label="Contact" />
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight mb-4">
            <span className="text-text-primary">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-text-muted text-[15px] max-w-xl">
            Open to new opportunities, collaborations, and interesting
            conversations. Reach out directly or use the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-3 mb-8">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 gradient-border rounded-2xl p-4 transition-all duration-200 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.color + "18",
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-text-muted font-semibold tracking-wider uppercase mb-0.5">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium text-text-primary hover:text-accent transition-colors truncate"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <span className="text-sm font-medium text-text-primary truncate">
                          {item.value}
                        </span>
                      )}
                      {item.label === "Email" && (
                        <button
                          onClick={copyEmail}
                          aria-label="Copy email"
                          className="flex-shrink-0 text-text-muted hover:text-accent transition-colors"
                        >
                          {copied ? (
                            <Check size={13} className="text-green-400" />
                          ) : (
                            <Copy size={13} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="gradient-border rounded-2xl p-5 transition-all duration-300 hover:shadow-glow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-text-primary">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-[13px] text-text-muted leading-relaxed">
                Currently open to full-time roles, freelance projects, and
                exciting collaborations in full-stack development and real-time
                systems.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div className="h-full gradient-border rounded-2xl flex flex-col items-center justify-center text-center py-16 px-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle
                    size={52}
                    className="text-green-400 mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-muted text-[13px]">
                    Got it - I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      type: "text",
                      label: "Name",
                      placeholder: "Your name",
                    },
                    {
                      name: "email",
                      type: "email",
                      label: "Email",
                      placeholder: "you@example.com",
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[11px] font-bold text-text-muted tracking-wider uppercase mb-1.5">
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        required={f.name !== "subject"}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full bg-bg-secondary border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary
                          placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-text-muted tracking-wider uppercase mb-1.5">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-bg-secondary border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary
                      placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-text-muted tracking-wider uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    className="w-full bg-bg-secondary border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary
                      placeholder:text-text-muted/40 focus:outline-none focus:border-accent/50 focus:shadow-glow-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 shimmer-btn text-white px-6 py-3.5
                    rounded-xl text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} /> Send Message
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-xs text-red-400 text-center">{error}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
