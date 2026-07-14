import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./gsapConfig";

/**
 * Splits words inside [data-text-reveal] and reveals per-word with stagger.
 * Runs once on mount.
 */
export function useTextReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const root = ref.current;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const elements = root.querySelectorAll<HTMLElement>("[data-text-reveal]");
      const wordEls: HTMLElement[] = [];

      elements.forEach((el) => {
        if (el.dataset.split === "true") return;
        const text = el.textContent ?? "";
        el.textContent = "";
        text.split(/(\s+)/).forEach((chunk) => {
          if (/^\s+$/.test(chunk)) {
            el.appendChild(document.createTextNode(chunk));
            return;
          }
          const outer = document.createElement("span");
          outer.style.display = "inline-block";
          outer.style.overflow = "hidden";
          outer.style.verticalAlign = "top";
          const inner = document.createElement("span");
          inner.style.display = "inline-block";
          inner.style.willChange = "transform";
          inner.textContent = chunk;
          outer.appendChild(inner);
          el.appendChild(outer);
          wordEls.push(inner);
        });
        el.dataset.split = "true";
      });

      if (!wordEls.length) return;

      if (reduced) {
        gsap.set(wordEls, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        wordEls,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.05,
          delay,
        },
      );
    }, root);

    return () => ctx.revert();
  }, [delay]);

  return ref;
}
