import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shubham Yadav — Full Stack Developer",
  description:
    "Full Stack Developer building scalable web applications, real-time platforms, and interactive experiences using React.js, Next.js, Node.js, and Redis.",
  keywords: ["Full Stack Developer", "React.js", "Next.js", "Node.js", "Redis", "Portfolio"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shubham Yadav — Full Stack Developer",
    description: "Full Stack Developer specializing in real-time systems and scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bg-primary text-text-primary font-inter antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
