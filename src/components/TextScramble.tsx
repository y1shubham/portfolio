"use client";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&";

export default function TextScramble({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 22;

    const tick = () => {
      const locked = Math.floor((frame / totalFrames) * text.length);
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < locked) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      frame++;
      if (frame <= totalFrames) setTimeout(tick, 32);
      else setDisplay(text);
    };

    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className={className}>{display}</span>;
}
