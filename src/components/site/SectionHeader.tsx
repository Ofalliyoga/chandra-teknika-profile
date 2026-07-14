import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ icon, eyebrow, title, subtitle, dark }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
      <div className="md:col-span-4 flex items-start gap-4">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg border border-[color:var(--amber-lit)]/30 bg-[color:var(--amber-lit)]/10 text-[color:var(--amber-lit)]">
            {icon}
          </div>
        )}
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
