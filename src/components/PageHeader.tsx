interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-4 pt-24 text-center sm:pt-28 lg:pt-32">
      <p className="text-xs uppercase tracking-[0.4em] text-accent">{eyebrow}</p>
      <h1 className="font-display mt-4 text-4xl text-charcoal sm:text-5xl">{title}</h1>
      {intro && <p className="mt-5 text-base leading-relaxed text-charcoal/70">{intro}</p>}
    </div>
  );
}
