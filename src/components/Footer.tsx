import Link from "next/link";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-bg-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-text-muted">
          Built by{" "}
          <span className="text-text-primary font-medium">Shubham Yadav</span>{" "}
          · 2025
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </Link>
          <Link
            href={`mailto:${personal.email}`}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
