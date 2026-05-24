"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-bg-primary min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 */}
          <div className="text-[130px] md:text-[180px] font-extrabold leading-none gradient-text opacity-20 select-none mb-2">
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-3 -mt-4">
            Page not found
          </h1>
          <p className="text-text-muted text-[15px] max-w-sm mx-auto mb-10">
            Looks like this page doesn&apos;t exist. It may have been moved or the URL is wrong.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 shimmer-btn text-white px-6 py-3 rounded-xl
                text-sm font-semibold shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              <Home size={15} /> Back to Home
            </Link>
            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 bg-bg-elevated text-text-primary px-6 py-3 rounded-xl
                text-sm font-medium border border-white/8 hover:border-accent/40 hover:shadow-glow-sm
                transition-all duration-300"
            >
              <ArrowLeft size={15} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
