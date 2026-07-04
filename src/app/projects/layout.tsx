import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Play Space Miner — a free browser arcade game by Shubham Yadav. Also explore StreamSync (real-time engagement), DevFlow AI (developer collaboration), and APIFlow (API monitoring). Built with Next.js, React, Node.js, Redis, and WebSocket.",
  alternates: { canonical: "https://y1shubham.in/projects" },
  openGraph: {
    title: "Projects | Shubham Yadav",
    description:
      "Play Space Miner for free in your browser! Plus real-time systems, AI platforms, and API monitoring tools — explore Shubham Yadav's project portfolio.",
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
