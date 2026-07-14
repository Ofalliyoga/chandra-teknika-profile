import { useEffect, useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/animations/gsapConfig";
import { navigation } from "@/data/navigation";
import { companyData, waLink } from "@/data/company";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const reduced = prefersReducedMotion();
    const items = itemsRef.current?.querySelectorAll("li") ?? [];

    if (open) {
      gsap.set(panelRef.current, { autoAlpha: 1 });
      if (reduced) {
        gsap.set(items, { y: 0, opacity: 1 });
        return;
      }
      gsap.fromTo(panelRef.current, { clipPath: "inset(0 0 100% 0)" }, {
        clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "expo.out",
      });
      gsap.fromTo(items, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06, delay: 0.15,
      });
    }
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    const panel = panelRef.current;
    if (!panel) { onClose(); return; }
    if (prefersReducedMotion()) { onClose(); return; }
    gsap.to(panel, {
      clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "expo.in",
      onComplete: onClose,
    });
  };

  return (
    <div
      ref={panelRef}
      aria-hidden={!open}
      className={"fixed inset-0 z-[60] bg-[color:var(--ink)] text-[color:var(--paper)] " + (open ? "" : "pointer-events-none invisible")}
      style={{ opacity: open ? 1 : 0 }}
    >
      <div className="container-x flex items-center justify-between py-5">
        <span className="font-display text-[13px] tracking-[0.28em] uppercase font-bold">
          Chandra <span className="text-[color:var(--amber-lit)]">Teknika</span>
        </span>
        <button
          type="button"
          onClick={close}
          aria-label="Tutup menu"
          className="w-11 h-11 inline-flex items-center justify-center border border-white/20 rounded-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="container-x pt-6" aria-label="Menu mobile">
        <ul ref={itemsRef} className="flex flex-col divide-y divide-white/10">
          {navigation.map((n, i) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={close}
                className="flex items-baseline justify-between py-6 group"
              >
                <span className="font-display text-[2.2rem] leading-none font-semibold tracking-tight">{n.label}</span>
                <span className="text-[11px] tracking-[0.25em] text-[color:var(--muted-grey)]">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-8 text-sm text-[color:var(--muted-grey)] space-y-2">
          <p className="text-[color:var(--paper)]">{companyData.email}</p>
          <p>{companyData.whatsappDisplay}</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary w-full">
            Konsultasi via WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}
