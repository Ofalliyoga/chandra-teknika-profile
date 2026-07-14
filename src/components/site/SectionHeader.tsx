interface Props {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ number, eyebrow, title, subtitle, dark }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
      <div className="md:col-span-4 flex items-start gap-6">
        <span
          className={
            "font-display text-4xl md:text-5xl font-bold tracking-tight " +
            (dark ? "text-[color:var(--amber-lit)]" : "text-[color:var(--amber-lit)]")
          }
        >
          {number}
        </span>
        <span className={"eyebrow mt-3 " + (dark ? "text-[color:var(--muted-grey)]" : "")}>{eyebrow}</span>
      </div>
      <div className="md:col-span-8">
        <h2
          className={
            "font-display font-semibold text-[2rem] sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] " +
            (dark ? "text-[color:var(--paper)]" : "text-[color:var(--ink)]")
          }
        >
          {title}
        </h2>
        {subtitle && (
          <p className={"mt-6 max-w-2xl text-base md:text-lg leading-relaxed " + (dark ? "text-[color:var(--paper)]/70" : "text-[color:var(--muted-foreground)]")}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
