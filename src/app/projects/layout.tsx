import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Shubham Yadav — StreamSync (real-time engagement), DevFlow AI (developer collaboration), APIFlow (API monitoring), and Space Miner (browser arcade game). Built with Next.js, React, Node.js, Redis, and WebSocket.",
  alternates: { canonical: "https://y1shubham.in/projects" },
  openGraph: {
    title: "Projects | Shubham Yadav",
    description:
      "Real-time systems, AI-powered platforms, and browser games — explore Shubham Yadav's project portfolio.",
    url: "https://y1shubham.in/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
