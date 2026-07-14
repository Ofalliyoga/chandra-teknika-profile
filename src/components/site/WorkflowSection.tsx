import { useLayoutEffect, useRef } from "react";
import { Route } from "lucide-react";
import { workflow } from "@/data/workflow";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";
import { SectionHeader } from "./SectionHeader";

export function WorkflowSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const prog = ref.current!.querySelector<HTMLElement>("[data-progress]");
      if (prog && !reduced) {
        gsap.fromTo(prog, { scaleX: 0 }, {
          scaleX: 1, ease: "none",
          scrollTrigger: {
            trigger: ref.current, start: "top 70%", end: "bottom 70%", scrub: true,
          },
        });
      } else if (prog) {
        gsap.set(prog, { scaleX: 1 });
      }
      const steps = ref.current!.querySelectorAll<HTMLElement>("[data-step]");
      if (reduced) { gsap.set(steps, { opacity: 1, y: 0 }); return; }
      gsap.fromTo(steps, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-[color:var(--warm)] py-24 md:py-36 border-t border-[color:var(--border-grey)]">
      <div className="container-x">
        <SectionHeader
          icon={<Route className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />}
          eyebrow="Proses Kerja"
          title="Proses kerja yang terarah."
          subtitle="Lima tahap yang membantu memastikan kebutuhan pelanggan dipahami sejak awal hingga pemenuhan produk."
        />

        <div className="mt-16 md:mt-24 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[color:var(--border-grey)]" />
          <div data-progress className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[color:var(--amber-lit)] origin-left" />

          <ol className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {workflow.map((w) => (
              <li key={w.title} data-step className="relative">
                <div className="hidden md:block absolute -top-[3px] left-0 w-2 h-2 rounded-full bg-[color:var(--amber-lit)]" />
                <p className="pt-4 md:pt-8"><span className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[color:var(--border-grey)] text-[color:var(--amber-lit)]">{w.icon}</span></p>
                <h3 className="mt-3 font-display text-lg md:text-xl font-semibold text-[color:var(--ink)]">{w.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{w.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
