import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";
import { SectionHeader } from "./SectionHeader";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const rows = ref.current!.querySelectorAll<HTMLElement>("[data-row]");
      if (reduced) { gsap.set(rows, { opacity: 1, y: 0 }); return; }
      gsap.fromTo(rows, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="layanan" ref={ref} className="bg-[color:var(--ink)] text-[color:var(--paper)] py-24 md:py-36">
      <div className="container-x">
        <SectionHeader
          dark
          number="02"
          eyebrow="Layanan Utama"
          title={<>Layanan yang mendukung <span className="text-[color:var(--amber-lit)]">kebutuhan proyek.</span></>}
          subtitle="Disusun untuk mendukung kebutuhan produk, pengadaan, dan pelaksanaan proyek secara lebih efektif."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ul className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => (
              <li
                key={s.number}
                data-row
                onMouseEnter={() => setActive(i)}
                className="group relative"
              >
                <a
                  href="#kontak"
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 md:gap-10 py-7 md:py-9 transition-colors"
                >
                  <span className="font-mono text-xs md:text-sm tracking-widest text-[color:var(--muted-grey)]">
                    {s.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-[color:var(--paper)] group-hover:text-[color:var(--amber-lit)] transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm md:text-base text-[color:var(--paper)]/60 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 shrink-0 text-[color:var(--muted-grey)] group-hover:text-[color:var(--amber-lit)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            ))}
          </ul>

          <aside className="hidden lg:block lg:col-span-4 sticky top-28 h-[520px]">
            <div className="relative h-full w-full overflow-hidden bg-[color:var(--ink-soft)]">
              {services.map((s, i) => (
                <img
                  key={s.number}
                  src={s.image}
                  alt={s.title}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className={"absolute inset-0 h-full w-full object-cover transition-all duration-700 " +
                    (i === active ? "opacity-100 scale-100" : "opacity-0 scale-105")}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6">
                <span className="eyebrow text-[color:var(--amber-lit)]">{services[active].number}</span>
                <p className="mt-2 font-display text-2xl font-semibold">{services[active].title}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
