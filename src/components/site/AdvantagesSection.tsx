import { advantages } from "@/data/workflow";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/animations/useReveal";

export function AdvantagesSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-[color:var(--paper)] py-24 md:py-36 border-t border-[color:var(--border-grey)]">
      <div className="container-x">
        <SectionHeader
          number="05"
          eyebrow="Mengapa Chandra Teknika"
          title="Pendekatan yang dibangun di atas pemahaman."
        />
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 border-t border-l border-[color:var(--border-grey)]">
          {advantages.map((a) => (
            <article
              key={a.number}
              data-reveal
              className="group relative p-8 md:p-12 border-r border-b border-[color:var(--border-grey)] transition-colors hover:bg-[color:var(--warm)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-[color:var(--muted-grey)]">{a.number}</span>
                <span className="block w-0 group-hover:w-10 transition-all duration-500 h-px bg-[color:var(--amber-lit)]" />
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-[color:var(--ink)] tracking-tight">
                {a.title}
              </h3>
              <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed max-w-md">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
