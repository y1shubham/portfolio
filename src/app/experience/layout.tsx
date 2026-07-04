import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Shubham Yadav — Software Developer at LiveLike Sports Technologies building real-time sports engagement platforms, and Full Stack Developer Intern at Zeepty. React.js, Lit.js, Node.js, Redis, WebSocket.",
  alternates: { canonical: "https://y1shubham.in/experience" },
  openGraph: {
    title: "Experience | Shubham Yadav",
    description:
      "Software Developer at LiveLike Sports Technologies — building real-time sports platforms with React.js, Node.js, and Redis.",
    url: "https://y1shubham.in/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
