import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shubham Yadav — Full Stack Developer",
  description:
    "Full Stack Developer building scalable web applications, real-time platforms, and interactive experiences using React.js, Next.js, Node.js, and Redis.",
  keywords: ["Full Stack Developer", "React.js", "Next.js", "Node.js", "Redis", "Portfolio"],
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
