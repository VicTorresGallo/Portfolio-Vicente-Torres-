"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Animaciones de la página dentro de `scope`:
 * - [data-intro]: entrada escalonada al cargar (portada y cabeceras).
 * - [data-intro-photo]: la foto entra con una ligera escala.
 * - [data-reveal]: aparece al hacer scroll, una sola vez, en grupos escalonados.
 * Con «reducir movimiento» activado no se anima nada.
 */
export function useMotion(scope: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from("[data-intro]", { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.08, clearProps: "transform" })
          .from(
            "[data-intro-photo]",
            { scale: 0.88, autoAlpha: 0, duration: 1.1, ease: "expo.out", clearProps: "transform" },
            0.15,
          );

        gsap.set("[data-reveal]", { y: 40, autoAlpha: 0 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
              // Sin transform en línea: así siguen funcionando los :hover del CSS
              clearProps: "transform",
            }),
        });
      });

      // El script del <head> oculta la portada hasta que GSAP toma el control (evita un parpadeo)
      document.documentElement.classList.remove("motion-pending");
    },
    { scope },
  );
}
