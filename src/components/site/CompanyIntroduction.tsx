import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";

export function CompanyIntroduction() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const line = ref.current!.querySelector<HTMLElement>("[data-hair]");
      const num = ref.current!.querySelector<HTMLElement>("[data-num]");
      const paras = ref.current!.querySelectorAll<HTMLElement>("[data-fade]");
      const big = ref.current!.querySelector<HTMLElement>("[data-big]");

      if (reduced) {
        if (line) gsap.set(line, { scaleX: 1 });
        gsap.set([num, big, ...Array.from(paras)], { opacity: 1, y: 0 });
        return;
      }

      if (line) {
        gsap.fromTo(line, { scaleX: 0, transformOrigin: "left" }, {
          scaleX: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: line, start: "top 85%", once: true },
        });
      }
      if (num) {
        gsap.to(num, {
          y: -30, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
      gsap.fromTo(paras, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });
      if (big) {
        gsap.fromTo(big, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.1, ease: "expo.out",
          scrollTrigger: { trigger: big, start: "top 85%", once: true },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tentang" ref={ref} className="relative bg-[color:var(--warm)] py-24 md:py-36">
      <div className="container-x">
        <div data-hair className="h-px w-full bg-[color:var(--border-grey)] mb-16 origin-left" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span data-num className="font-display block text-[5.5rem] md:text-[7rem] leading-none font-bold text-[color:var(--ink)]/10">
              01
            </span>
            <p data-fade className="eyebrow mt-4">Tentang Perusahaan</p>
            <h2 data-fade className="mt-6 font-display font-semibold text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)]">
              Penyedia kebutuhan lighting dan elektrikal dengan pendekatan yang terarah.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-24">
            <div className="space-y-6 text-[color:var(--charcoal)]/85 text-base md:text-lg leading-[1.75]">
              <p data-fade>
                CV. Chandra Teknika merupakan badan usaha yang berlokasi di Surabaya dan berfokus pada penyediaan produk lighting, lampu LED, perlengkapan elektrikal, pengadaan barang, serta dukungan teknis untuk kebutuhan bisnis dan proyek.
              </p>
              <p data-fade>
                Kami memahami bahwa setiap proyek memiliki kebutuhan yang berbeda. Oleh karena itu, pendekatan kami dimulai dengan memahami kebutuhan pelanggan, menentukan spesifikasi yang relevan, dan membantu proses penyediaan produk secara lebih terarah.
              </p>
            </div>

            <blockquote data-big className="mt-16 border-l-2 border-[color:var(--amber-lit)] pl-6 md:pl-8">
              <p className="font-display text-2xl md:text-[2rem] leading-[1.2] tracking-[-0.02em] text-[color:var(--ink)] font-medium">
                Produk yang tepat. Spesifikasi yang jelas. Proses yang terarah.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
