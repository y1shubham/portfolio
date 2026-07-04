import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shubham Yadav — Software Developer open to full-time roles, freelance projects, and collaborations. Based in Gurgaon, India.",
  alternates: { canonical: "https://y1shubham.in/contact" },
  openGraph: {
    title: "Contact | Shubham Yadav",
    description:
      "Reach out to Shubham Yadav for full-time roles, freelance projects, or collaborations.",
    url: "https://y1shubham.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
