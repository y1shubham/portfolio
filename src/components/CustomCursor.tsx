"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    let ringX = 0, ringY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      if (dot.current) {
        dot.current.style.left  = x + "px";
        dot.current.style.top   = y + "px";
      }
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
    };

    const loop = () => {
      if (ring.current) {
        ring.current.style.left = ringX + "px";
        ring.current.style.top  = ringY + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    const enter = () => {
      if (dot.current)  dot.current.style.opacity  = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };
    const leave = () => {
      if (dot.current)  dot.current.style.opacity  = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  style={{ opacity: 0 }} />
      <div ref={ring} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}
