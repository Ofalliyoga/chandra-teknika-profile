import { useLayoutEffect, useRef, useState } from "react";
import { LayoutGrid, ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";
import { SectionHeader } from "./SectionHeader";

export function SolutionsSection() {
  const root = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!root.current) return;
    const reduced = prefersReducedMotion();
    if (reduced) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const ctx = gsap.context(() => {
      const pinArea = root.current!.querySelector<HTMLElement>("[data-pin]")!;
      const track = root.current!.querySelector<HTMLElement>("[data-track]")!;
      const panels = track.querySelectorAll<HTMLElement>("[data-panel]");
      const total = panels.length;

      gsap.set(panels, { yPercent: (i) => i * 100 });

      const scrollTween = gsap.to(panels, {
        yPercent: (i) => (i - (total - 1)) * 100,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: pinArea,
        start: "top top",
        end: () => "+=" + window.innerHeight * (total - 1),
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: scrollTween,
        onUpdate: (self) => {
          const next = Math.min(
            total - 1,
            Math.max(0, Math.round(self.progress * (total - 1)))
          );
          setActiveIndex(next);
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="solusi" ref={root} className="bg-[color:var(--warm)] py-24 md:py-36">
      <div className="container-x mb-12 md:mb-20">
        <SectionHeader
          icon={<LayoutGrid className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />}
          eyebrow="Solusi untuk Kebutuhan"
          title={<>Solusi untuk berbagai <br className="hidden md:inline" />konteks penggunaan.</>}
          subtitle="Setiap kebutuhan memiliki karakter yang berbeda. Pendekatan kami menyesuaikan spesifikasi produk dengan ruang, fungsi, dan tujuan penggunaannya."
        />
      </div>

      {/* Desktop pinned */}
      <div data-pin className="hidden lg:block relative h-screen overflow-hidden">
        <div className="container-x h-full grid grid-cols-12 gap-12 xl:gap-16 items-center">
          <div className="col-span-5 xl:col-span-4">
            <p className="eyebrow mb-8">Kategori</p>
            <ul className="space-y-3">
              {solutions.map((s, i) => (
                <li
                  key={s.key}
                  className={`group flex items-center gap-4 py-3 px-4 rounded-lg border transition-colors duration-300 ${
                    i === activeIndex
                      ? "bg-[color:var(--paper)] border-[color:var(--amber-lit)]/40 shadow-sm"
                      : "bg-transparent border-transparent hover:bg-[color:var(--paper)]/60"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-md border transition-colors duration-300 ${
                      i === activeIndex
                        ? "border-[color:var(--amber-lit)]/40 bg-[color:var(--amber-lit)]/10 text-[color:var(--amber-lit)]"
                        : "border-[color:var(--border-grey)] text-[color:var(--muted-grey)] group-hover:text-[color:var(--amber-lit)]"
                    }`}
                  >
                    {s.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`block font-display text-lg xl:text-xl font-medium transition-colors duration-300 ${
                        i === activeIndex
                          ? "text-[color:var(--ink)]"
                          : "text-[color:var(--charcoal)]/60 group-hover:text-[color:var(--charcoal)]"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      i === activeIndex
                        ? "text-[color:var(--amber-lit)] translate-x-0 opacity-100"
                        : "text-[color:var(--muted-grey)] -translate-x-1 opacity-0 group-hover:opacity-50 group-hover:translate-x-0"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-7 xl:col-span-8 h-[85vh] relative overflow-hidden bg-[color:var(--ink-soft)]">
            <div data-track className="absolute inset-0">
              {solutions.map((s) => (
                <article
                  key={s.key}
                  data-panel
                  className="absolute inset-0 grid grid-rows-[55%_45%]"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="p-6 xl:p-8 bg-[color:var(--paper)] flex flex-col justify-center">
                    <h3 className="font-display text-xl xl:text-2xl font-semibold text-[color:var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[color:var(--muted-foreground)] leading-relaxed max-w-2xl text-sm xl:text-base">
                      {s.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-1.5 text-sm text-[color:var(--charcoal)]/80">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--amber-lit)]" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet stacked */}
      <div className="lg:hidden container-x space-y-14">
        {solutions.map((s) => (
          <article key={s.key} className="border-t border-[color:var(--border-grey)] pt-7">
            <div className="flex items-center gap-3 eyebrow">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[color:var(--amber-lit)]/30 bg-[color:var(--amber-lit)]/10 text-[color:var(--amber-lit)]">
                {s.icon}
              </span>
              <span>{s.title}</span>
            </div>
            <img
              src={s.image}
              alt={s.title}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="mt-6 w-full aspect-[4/3] object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold text-[color:var(--ink)]">{s.title}</h3>
            <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">{s.description}</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 text-sm text-[color:var(--charcoal)]/80">
              {s.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--amber-lit)]" /> {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
