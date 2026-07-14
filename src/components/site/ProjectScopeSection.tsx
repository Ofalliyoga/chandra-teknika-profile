import { useLayoutEffect, useRef } from "react";
import { HardHat } from "lucide-react";
import { projectScopes } from "@/data/projectScopes";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";
import { SectionHeader } from "./SectionHeader";

export function ProjectScopeSection() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    if (reduced) return;
    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll<HTMLElement>("[data-tile]");
      items.forEach((el) => {
        const img = el.querySelector<HTMLElement>("img");
        gsap.set(el, { clipPath: "inset(100% 0 0 0)" });
        if (img) gsap.set(img, { scale: 1.15 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(el, { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "expo.out" });
            if (img) gsap.to(img, { scale: 1, duration: 1.4, ease: "power3.out" });
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proyek" ref={ref} className="bg-[color:var(--ink)] text-[color:var(--paper)] py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          dark
          icon={<HardHat className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />}
          eyebrow="Ruang Lingkup"
          title="Ruang lingkup kebutuhan yang kami layani."
          subtitle="Kategori ruang dan pekerjaan yang dapat kami dukung dari sisi pengadaan produk lighting dan elektrikal."
        />

        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {projectScopes.map((p, i) => (
            <figure
              key={p.label}
              data-tile
              className={
                "relative overflow-hidden bg-[color:var(--ink-soft)] group " +
                (p.span === "row" ? "row-span-2 " : "") +
                (p.span === "col" ? "col-span-2 " : "") +
                (i === 0 ? "col-span-2 row-span-2 " : "")
              }
            >
              <img
                src={p.image}
                alt={p.label}
                width={1200}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-base md:text-xl font-semibold truncate">{p.label}</p>
                  <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[color:var(--muted-grey)] mt-1">{p.category}</p>
                </div>
                <span className="w-8 h-px bg-[color:var(--amber-lit)] shrink-0 mb-2" />
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs text-[color:var(--muted-grey)] leading-relaxed">
          Visual digunakan sebagai ilustrasi ruang lingkup kebutuhan. Dokumentasi proyek perusahaan dapat ditambahkan setelah data tersedia.
        </p>
      </div>
    </section>
  );
}
