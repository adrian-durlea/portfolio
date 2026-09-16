import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  id,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Module
        </p>
        <h2 id={id} className="text-2xl font-semibold tracking-normal">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-accent underline">
          {action}
        </div>
      ) : null}
    </div>
  );
}
