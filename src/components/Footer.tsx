import Link from "next/link";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold gradient-text-accent">SY</span>
          <span className="text-text-muted text-sm">·</span>
          <p className="text-sm text-text-muted">
            Built by <span className="text-text-primary font-semibold">Shubham Yadav</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: personal.github,           icon: <GithubIcon size={16} />,   label: "GitHub" },
            { href: personal.linkedin,          icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
            { href: `mailto:${personal.email}`, icon: <Mail size={16} />,         label: "Email" },
          ].map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted
                hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20
                transition-all duration-200"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
