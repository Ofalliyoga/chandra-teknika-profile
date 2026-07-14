import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsapConfig";

/**
 * Reveal children [data-reveal] elements when the container enters viewport.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 32 });
      ScrollTrigger.batch(targets, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
