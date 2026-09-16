type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Portfolio node
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">{description}</p>
    </header>
  );
}
