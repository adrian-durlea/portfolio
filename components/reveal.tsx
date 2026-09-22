"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        element.classList.remove("reveal-pending");
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    element.classList.add("reveal-pending");
    observer.observe(element);
    return () => { observer.disconnect(); element.classList.remove("reveal-pending"); };
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
}
