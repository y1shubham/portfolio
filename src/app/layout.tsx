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
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PersonJsonLd, WebSiteJsonLd, SpaceMinerJsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://y1shubham.in"),
  title: {
    default: "Shubham Yadav | Software Developer | Portfolio",
    template: "%s | Shubham Yadav",
  },
  description:
    "Shubham Yadav — Software Developer at LiveLike Sports Technologies. Building scalable web applications, real-time sports engagement platforms, and interactive experiences. Play Space Miner — a free browser arcade game built with HTML5 Canvas.",
  keywords: [
    "Shubham Yadav",
    "Shubham Yadav portfolio",
    "Shubham Yadav software developer",
    "Shubham Yadav developer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "React.js developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "LiveLike",
    "NSUT",
    "Gurgaon developer",
    "India software developer",
    "Real-time systems",
    "Redis",
    "PostgreSQL",
    "Socket.io",
    "portfolio website",
    "Space Miner",
    "Space Miner game",
    "browser arcade game",
    "HTML5 Canvas game",
  ],
  authors: [{ name: "Shubham Yadav", url: "https://y1shubham.in" }],
  creator: "Shubham Yadav",
  publisher: "Shubham Yadav",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://y1shubham.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://y1shubham.in",
    siteName: "Shubham Yadav — Portfolio",
    title: "Shubham Yadav | Software Developer | Portfolio",
    description:
      "Software Developer at LiveLike Sports Technologies. Play Space Miner — a free browser arcade game. Building real-time sports platforms, scalable web apps, and interactive experiences.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shubham Yadav — Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Yadav | Software Developer",
    description:
      "Software Developer at LiveLike. Play Space Miner — a free browser arcade game. Building real-time systems and scalable web applications.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bg-primary text-text-primary font-inter antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
        <PersonJsonLd />
        <WebSiteJsonLd />
        <SpaceMinerJsonLd />
      </body>
    </html>
  );
}
