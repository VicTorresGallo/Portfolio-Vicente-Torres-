"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Animaciones de las tarjetas dentro de `scope` (los textos no se animan):
 * - [data-reveal]: las tarjetas entran desde la derecha con un fundido suave, en tandas escalonadas.
 * - .cover dentro de .card: la portada hace un zoom muy ligero hacia atrás al ritmo del scroll.
 * Con «reducir movimiento» activado no se anima nada.
 */
export function useMotion(scope: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = scope.current;
        if (!root) return;

        gsap.set("[data-reveal]", { x: 40, autoAlpha: 0 });
        ScrollTrigger.batch("[data-reveal]", {
          // clamp(): ajusta el disparo a los límites de la página para que las tarjetas del final también aparezcan
          start: "clamp(top 90%)",
          once: true,
          interval: 0.15,
          onEnter: (els) =>
            gsap.to(els, {
              x: 0,
              autoAlpha: 1,
              duration: 1.4,
              ease: "power2.out",
              stagger: 0.15,
              overwrite: true,
              // Sin transform en línea: así siguen funcionando los :hover del CSS
              clearProps: "transform",
            }),
        });

        gsap.utils.toArray<HTMLElement>(".card .cover", root).forEach((cover) => {
          gsap.fromTo(
            cover,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: cover, start: "top bottom", end: "clamp(center 45%)", scrub: 1.5 },
            },
          );
        });
      });

      // El script del <head> oculta las tarjetas hasta que GSAP toma el control (evita un parpadeo)
      document.documentElement.classList.remove("motion-pending");
    },
    { scope },
  );
}
