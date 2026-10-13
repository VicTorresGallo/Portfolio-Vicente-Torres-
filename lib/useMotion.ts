"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Animaciones de las tarjetas dentro de `scope` (los textos no se animan):
 * - [data-reveal]: las tarjetas entran desde la derecha con un fundido suave, en tandas escalonadas.
 * Con «reducir movimiento» activado no se anima nada.
 */
export function useMotion(scope: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Solo opacidad (no visibility: hidden): así el navegador pinta y decodifica las portadas con antelación
        // y no tiene que hacerlo todo de golpe cuando entran varias tarjetas a la vez.
        // (Durante la animación GSAP usa translate3d, así que la GPU mueve cada tarjeta sin repintarla.)
        gsap.set("[data-reveal]", { x: 40, opacity: 0 });
        ScrollTrigger.batch("[data-reveal]", {
          // clamp(): ajusta el disparo a los límites de la página para que las tarjetas del final también aparezcan
          start: "clamp(top 90%)",
          once: true,
          interval: 0.15,
          onEnter: (els) =>
            gsap.to(els, {
              x: 0,
              opacity: 1,
              duration: 1.4,
              ease: "power2.out",
              stagger: 0.15,
              overwrite: true,
              // Sin transform en línea: así siguen funcionando los :hover del CSS
              clearProps: "transform,opacity",
            }),
        });
      });

      // El script del <head> oculta las tarjetas hasta que GSAP toma el control (evita un parpadeo)
      document.documentElement.classList.remove("motion-pending");
    },
    { scope },
  );
}
