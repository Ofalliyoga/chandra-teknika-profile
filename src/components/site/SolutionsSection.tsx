import { useLayoutEffect, useRef } from "react";
import { LayoutGrid } from "lucide-react";
import { solutions } from "@/data/solutions";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";
import { SectionHeader } from "./SectionHeader";

export function SolutionsSection() {
  const root = useRef<HTMLElement | null>(null);

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

      ScrollTrigger.create({
        trigger: pinArea,
        start: "top top",
        end: () => "+=" + window.innerHeight * (total - 1),
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(panels, {
          yPercent: -100 * (total - 1),
          ease: "none",
        }),
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
        <div className="container-x h-full grid grid-cols-12 gap-10 items-center">
          <div className="col-span-5">
            <p className="eyebrow mb-6">Kategori</p>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={s.key} className="flex items-baseline gap-4">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md border border-[color:var(--border-grey)] text-[color:var(--amber-lit)]">{s.icon}</span>
                  <span className="font-display text-2xl font-medium text-[color:var(--ink)]/50">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-7 h-[70vh] relative overflow-hidden bg-[color:var(--ink-soft)]">
            <div data-track className="absolute inset-0">
              {solutions.map((s) => (
                <article
                  key={s.key}
                  data-panel
                  className="absolute inset-0 grid grid-rows-[3fr_2fr]"
                >
                  <img src={s.image} alt={s.title} width={1200} height={900} loading="eager" decoding="async" className="h-full w-full object-cover" />
                  <div className="p-8 bg-[color:var(--paper)]">
                    <h3 className="font-display text-3xl font-semibold text-[color:var(--ink)]">{s.title}</h3>
                    <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">{s.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[color:var(--charcoal)]/75">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[color:var(--amber-lit)]" /> {it}
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
      <div className="lg:hidden container-x space-y-10">
        {solutions.map((s, i) => (
          <article key={s.key} className="border-t border-[color:var(--border-grey)] pt-6">
            <div className="flex items-baseline gap-3 eyebrow">
              <span>0{i + 1}</span><span>{s.title}</span>
            </div>
            <img src={s.image} alt={s.title} width={1200} height={900} loading="lazy" decoding="async" className="mt-5 w-full aspect-[4/3] object-cover" />
            <h3 className="mt-6 font-display text-2xl font-semibold text-[color:var(--ink)]">{s.title}</h3>
            <p className="mt-3 text-[color:var(--muted-foreground)]">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
