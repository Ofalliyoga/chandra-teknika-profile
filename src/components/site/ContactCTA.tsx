import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { companyData, waLink } from "@/data/company";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/animations/gsapConfig";

export function ContactCTA() {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const els = ref.current!.querySelectorAll<HTMLElement>("[data-fade]");
      const glow = ref.current!.querySelector<HTMLElement>("[data-glow]");
      if (reduced) { gsap.set(els, { opacity: 1, y: 0 }); return; }
      gsap.fromTo(els, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });
      if (glow) {
        gsap.to(glow, {
          x: 40, y: -20, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[color:var(--ink)] text-[color:var(--paper)] overflow-hidden">
      <div
        data-glow
        aria-hidden
        className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(244,166,42,0.7), transparent 60%)" }}
      />
      <div className="relative container-x py-24 md:py-40">
        <div className="max-w-4xl">
          <p data-fade className="eyebrow text-[color:var(--amber-lit)]">Konsultasi</p>
          <h2 data-fade className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] tracking-[-0.03em]">
            Punya kebutuhan lighting atau elektrikal untuk bisnis dan proyek?
          </h2>
          <p data-fade className="mt-8 max-w-2xl text-base md:text-lg text-[color:var(--paper)]/70 leading-relaxed">
            Sampaikan kebutuhan produk, spesifikasi, jumlah, dan lokasi proyek Anda. Tim kami akan membantu mengarahkan proses awal secara lebih jelas.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a data-fade href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Konsultasi via WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
            <a data-fade href={`mailto:${companyData.email}`} className="btn-outline text-[color:var(--paper)]">
              <Mail className="w-4 h-4" /> <span>Kirim Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hair-line" />
    </section>
  );
}
