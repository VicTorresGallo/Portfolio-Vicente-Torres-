"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// clamp(): ajusta el disparo a los límites de la página para que los bloques del final también aparezcan
const START = "clamp(top 88%)";

/**
 * Animaciones de la página dentro de `scope`. Todo llega desde la derecha:
 * - [data-mask] > span: el texto entra por una «ranura» (el contenedor recorta lo que sobresale).
 *   Con [data-intro-mask] lo hace al cargar; si no, al llegar con el scroll.
 * - [data-intro]: resto de la portada, escalonado al cargar.
 * - [data-intro-photo]: la foto se descubre de derecha a izquierda.
 * - [data-reveal]: bloques y tarjetas, en tandas al hacer scroll. Las etiquetas de dentro aparecen escalonadas.
 * - .cover dentro de .card: la portada hace un zoom hacia atrás al ritmo del scroll.
 * - .timeline: la línea de la trayectoria se dibuja según se baja.
 * Con «reducir movimiento» activado no se anima nada.
 */
export function useMotion(scope: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = scope.current;
        if (!root) return;
        const introMasks = gsap.utils.toArray<HTMLElement>("[data-intro-mask] > span", root);
        const scrollMasks = gsap.utils.toArray<HTMLElement>("[data-mask]:not([data-intro-mask]) > span", root);

        // Portada
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(introMasks, { xPercent: 105, duration: 1.25, stagger: 0.12, clearProps: "transform" })
          .from("[data-intro]", { x: 60, autoAlpha: 0, duration: 1, stagger: 0.08, clearProps: "transform" }, 0.35)
          .from(
            "[data-intro-photo]",
            { clipPath: "inset(0% 0% 0% 100% round 50%)", duration: 1.4, ease: "power4.inOut", clearProps: "clipPath" },
            0.15,
          );

        // Títulos de sección: entran por la ranura al llegar a ellos
        scrollMasks.forEach((el) => {
          gsap.from(el, {
            xPercent: 105,
            duration: 1.1,
            ease: "expo.out",
            clearProps: "transform",
            scrollTrigger: { trigger: el.parentElement, start: START, once: true },
          });
        });

        // Bloques y tarjetas, en tandas desde la derecha
        gsap.set("[data-reveal]", { x: 70, autoAlpha: 0 });
        ScrollTrigger.batch("[data-reveal]", {
          start: START,
          once: true,
          interval: 0.12,
          onEnter: (els) => {
            gsap.to(els, {
              x: 0,
              autoAlpha: 1,
              duration: 0.95,
              ease: "expo.out",
              stagger: 0.1,
              overwrite: true,
              // Sin transform en línea: así siguen funcionando los :hover del CSS
              clearProps: "transform",
            });
            const chips = (els as HTMLElement[]).flatMap((el) =>
              gsap.utils.toArray<HTMLElement>(".tags li, .skill-icon", el),
            );
            if (chips.length) {
              gsap.from(chips, {
                x: 24,
                autoAlpha: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.025,
                delay: 0.2,
                clearProps: "transform",
              });
            }
          },
        });

        // Portadas de proyecto: zoom hacia atrás mientras la tarjeta entra en pantalla
        gsap.utils.toArray<HTMLElement>(".card .cover", root).forEach((cover) => {
          gsap.fromTo(
            cover,
            { scale: 1.18 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: cover, start: "top bottom", end: "clamp(center 45%)", scrub: 0.8 },
            },
          );
        });

        // Trayectoria: la línea vertical se dibuja al bajar (el CSS la pinta con la variable --draw)
        gsap.utils.toArray<HTMLElement>(".timeline", root).forEach((line) => {
          gsap.fromTo(
            line,
            { "--draw": 0 },
            {
              "--draw": 1,
              ease: "none",
              scrollTrigger: { trigger: line, start: "clamp(top 85%)", end: "clamp(bottom 60%)", scrub: 0.6 },
            },
          );
        });
      });

      // El script del <head> oculta la portada hasta que GSAP toma el control (evita un parpadeo)
      document.documentElement.classList.remove("motion-pending");
    },
    { scope },
  );
}
