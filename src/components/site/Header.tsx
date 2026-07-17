import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { waLink } from "@/data/company";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
          (scrolled
            ? "bg-[color:var(--ink)]/90 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5")
        }
      >
        <div className="container-x flex items-center justify-between gap-6">
          <a href="#beranda" className="flex items-center gap-3 text-[color:var(--paper)]" aria-label="Chandra Teknika — Beranda">
            <span className="flex flex-col leading-[0.95]">
              <span className="font-display text-[13px] tracking-[0.28em] uppercase font-bold">Chandra</span>
              <span className="font-display text-[13px] tracking-[0.28em] uppercase font-bold text-[color:var(--amber-lit)]">Teknika</span>
            </span>
            <span aria-hidden className="hidden sm:block h-6 w-px bg-white/25" />
            <span aria-hidden className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-grey)]">SBY · EST JAVA</span>
          </a>

          <nav aria-label="Utama" className="hidden lg:flex items-center gap-9">
            {navigation.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="link-underline text-sm font-medium text-[color:var(--paper)]/85 hover:text-[color:var(--paper)] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary py-2.5! px-5! text-[13px]!"
            >
              Konsultasikan Kebutuhan
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[color:var(--paper)] border border-white/20 rounded-sm"
              aria-label="Buka menu"
              aria-expanded={open}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export { X };
