import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { gsap, prefersReducedMotion } from "@/animations/gsapConfig";
import { companyData, waLink } from "@/data/company";

export function HeroSection() {
  const root = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const img = root.current!.querySelector<HTMLElement>("[data-hero-img]");
      const overlay = root.current!.querySelector<HTMLElement>("[data-hero-overlay]");
      const eyebrow = root.current!.querySelector<HTMLElement>("[data-hero-eyebrow]");
      const lines = root.current!.querySelectorAll<HTMLElement>("[data-hero-line]");
      const para = root.current!.querySelectorAll<HTMLElement>("[data-hero-word]");
      const cta = root.current!.querySelectorAll<HTMLElement>("[data-hero-cta]");
      const panel = root.current!.querySelectorAll<HTMLElement>("[data-hero-panel]");

      if (reduced) {
        gsap.set([eyebrow, ...Array.from(para), ...Array.from(cta), ...Array.from(panel)], { opacity: 1, y: 0 });
        gsap.set(lines, { yPercent: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 2, ease: "power2.out" }, 0);
      if (overlay) tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 1 }, 0.1);
      if (eyebrow) tl.fromTo(eyebrow, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.35);
      tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.09 }, 0.45);
      if (para.length) tl.fromTo(para, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.02 }, 0.95);
      tl.fromTo(cta, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 1.15);
      tl.fromTo(panel, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, 1.25);
    }, root);
    return () => ctx.revert();
  }, []);

  const badges = ["Lighting Solutions", "Electrical Supply", "Project Procurement", "Technical Support"];

  return (
    <section
      id="beranda"
      ref={root}
      className="relative min-h-[92vh] w-full overflow-hidden bg-[color:var(--ink)] text-[color:var(--paper)]"
    >
      <div className="absolute inset-0" data-hero-img>
        <img
          src={heroImg}
          alt="Instalasi lighting industrial pada bangunan komersial"
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div
        data-hero-overlay
        className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/85 via-[color:var(--ink)]/60 to-[color:var(--ink)]"
      />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #F4A62A 0%, transparent 40%)" }}
      />

      <div className="relative container-x flex flex-col justify-end min-h-[92vh] pt-32 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-6">
              <p data-hero-eyebrow className="eyebrow text-[color:var(--amber-lit)]">
                Lighting · Electrical · Procurement
              </p>
            </div>

            <h1 className="font-display font-bold text-[2.6rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1.08] tracking-[-0.03em]">
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"><span data-hero-line className="inline-block">Solusi <span className="text-[color:var(--amber-lit)]">Lighting</span></span></span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"><span data-hero-line className="inline-block">dan Elektrikal untuk</span></span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"><span data-hero-line className="inline-block">Kebutuhan Bisnis</span></span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"><span data-hero-line className="inline-block">dan Proyek.</span></span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-[color:var(--paper)]/75 leading-relaxed">
              {`${companyData.name} menyediakan kebutuhan pencahayaan, perlengkapan elektrikal, pengadaan barang, serta dukungan teknis untuk pelanggan bisnis dan berbagai kebutuhan proyek.`.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span data-hero-word className="inline-block">{w}&nbsp;</span>
                </span>
              ))}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a data-hero-cta href="#layanan" className="btn-primary">
                Lihat Layanan <ArrowRight className="w-4 h-4" />
              </a>
              <a data-hero-cta href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-outline text-[color:var(--paper)]">
                <span>Hubungi Kami</span>
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border-t border-white/15 pt-6">
              <p data-hero-panel className="eyebrow text-[color:var(--muted-grey)] mb-5">Cakupan Layanan</p>
              <ul className="divide-y divide-white/10">
                {badges.map((b) => (
                  <li key={b} data-hero-panel className="flex items-center justify-between py-3.5 text-sm">
                    <span className="text-[color:var(--paper)]/90">{b}</span>
                    <span className="w-6 h-px bg-[color:var(--amber-lit)]" aria-hidden />
                  </li>
                ))}
              </ul>
              <p data-hero-panel className="mt-6 text-xs tracking-[0.22em] uppercase text-[color:var(--muted-grey)]">
                Surabaya · Jawa Timur
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[color:var(--muted-grey)]">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="relative block h-8 w-px overflow-hidden bg-white/15" aria-hidden>
            <span className="absolute inset-x-0 top-0 h-3 bg-[color:var(--amber-lit)] animate-[scrollLine_2.4s_ease-in-out_infinite]" />
          </span>
          <ArrowDown className="w-3 h-3" />
        </div>
      </div>

      <style>{`@keyframes scrollLine { 0%{transform:translateY(-100%)} 60%{transform:translateY(200%)} 100%{transform:translateY(200%)} }`}</style>
    </section>
  );
}
