import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { waLink } from "@/data/company";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setVisible(scrolled > window.innerHeight * 0.7);
      setProgress(max > 0 ? Math.min(1, scrolled / max) : 0);
      setNearFooter(max - scrolled < 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 20;
  const c = 2 * Math.PI * r;

  return (
    <div
      className={
        "fixed right-5 md:right-8 z-40 flex flex-col gap-3 transition-all duration-500 " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none") +
        (nearFooter ? " bottom-24" : " bottom-6 md:bottom-8")
      }
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[color:var(--amber-lit)] text-[color:var(--ink)] shadow-[0_10px_30px_-5px_rgba(244,166,42,0.5)] flex items-center justify-center hover:bg-[color:var(--amber-soft)] transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:block absolute right-full mr-3 px-3 py-2 bg-[color:var(--ink)] text-[color:var(--paper)] text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat via WhatsApp
        </span>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className="relative w-12 h-12 rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] flex items-center justify-center border border-white/10 hover:bg-[color:var(--ink-soft)] transition-colors"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
          <circle cx="24" cy="24" r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <circle
            cx="24" cy="24" r={r} fill="none"
            stroke="var(--amber-lit)" strokeWidth="2"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - progress)}
            strokeLinecap="round"
          />
        </svg>
        <ArrowUp className="w-4 h-4 relative" />
      </button>
    </div>
  );
}
