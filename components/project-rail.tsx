"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/content/types";

export function ProjectRail({ projects }: { projects: Project[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => setEdges({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { element.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);
  function move(direction: number) {
    const element = rail.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? element.clientWidth) + 20), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <div>
      <div className="rail-toolbar"><p>{String(projects.length).padStart(2, "0")} projects <span className="mx-2" aria-hidden="true">/</span> Scroll to explore</p><div className="flex gap-2"><button type="button" className="rail-button" aria-label="Previous project" aria-controls="project-rail" disabled={edges.start} onClick={() => move(-1)}>←</button><button type="button" className="rail-button" aria-label="Next project" aria-controls="project-rail" disabled={edges.end} onClick={() => move(1)}>→</button></div></div>
      <div id="project-rail" className="project-rail" ref={rail} tabIndex={0} role="region" aria-label="Selected projects, scroll horizontally">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  );
}
