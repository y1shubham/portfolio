import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Shubham Yadav's resume — Software Developer at LiveLike Sports Technologies with expertise in React.js, Next.js, Node.js, Redis, TypeScript, and real-time systems engineering.",
  alternates: { canonical: "https://y1shubham.in/resume" },
  openGraph: {
    title: "Resume | Shubham Yadav",
    description:
      "Software Developer resume — React.js, Next.js, Node.js, Redis, TypeScript. Download PDF.",
    url: "https://y1shubham.in/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
