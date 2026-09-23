"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import type { ProjectImage } from "@/content/types";

export function ProjectGallery({ images, title, compact = false }: { images: ProjectImage[]; title: string; compact?: boolean }) {
  const id = useId();
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const gesture = useRef<{ x: number; y: number } | null>(null);
  if (!images.length) return null;

  function select(index: number) {
    const input = inputs.current[Math.max(0, Math.min(images.length - 1, index))];
    if (input) input.checked = true;
  }

  return (
    <fieldset className={`project-gallery ${compact ? "mt-6" : "my-8"}`}>
      <legend className="sr-only">{title} photos</legend>
      {images.map((image, index) => (
        <div className="photo-choice" key={image.src}>
          <input ref={element => { inputs.current[index] = element; }} className="photo-selector sr-only" type="radio" name={id} id={`${id}-${index}`} defaultChecked={index === 0} aria-label={`Photo ${index + 1} of ${images.length}: ${image.alt}`} />
          <div className="photo-panel">
            <div className="photo-frame"
              onTouchStart={event => { const touch = event.touches[0]; gesture.current = { x: touch.clientX, y: touch.clientY }; }}
              onTouchCancel={() => { gesture.current = null; }}
              onTouchEnd={event => {
                const start = gesture.current;
                gesture.current = null;
                if (!start) return;
                const touch = event.changedTouches[0];
                const dx = touch.clientX - start.x;
                const dy = touch.clientY - start.y;
                if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(index + (dx < 0 ? 1 : -1));
              }}>
              <Image src={image.src} alt={image.alt} width={image.width ?? 1200} height={image.height ?? 675}
                sizes={compact ? "(max-width: 700px) 80vw, (max-width: 1152px) 40vw, 460px" : "(max-width: 1152px) 100vw, 1088px"}
                className="w-full h-full object-contain" draggable={false} />
            </div>
            {images.length > 1 && <div className="photo-controls">
              <span>{index + 1} / {images.length}</span>
              <div className="flex gap-2">
                {([-1, 1] as const).map(direction => {
                  const target = index + direction;
                  const disabled = target < 0 || target >= images.length;
                  const arrow = direction === -1 ? "\u2190" : "\u2192";
                  return disabled ? <span key={direction} className="rail-button photo-arrow-disabled" aria-hidden="true">{arrow}</span> : (
                    <label key={direction} className="rail-button photo-arrow" htmlFor={`${id}-${target}`} role="button" tabIndex={0}
                      aria-label={`${direction === -1 ? "Previous" : "Next"} photo of ${title}`}
                      onKeyDown={event => {
                        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(target); inputs.current[target]?.focus({ preventScroll: true }); }
                      }}>{arrow}</label>
                  );
                })}
              </div>
            </div>}
          </div>
        </div>
      ))}
    </fieldset>
  );
}
