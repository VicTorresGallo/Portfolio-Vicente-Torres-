"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

// Next.js mantiene la posición de scroll al cambiar de página si la nueva sigue «visible» a esa
// altura, así que un proyecto se abría a media página. Al cambiar de ruta subimos arriba del todo,
// salvo que el enlace lleve un #ancla (p. ej. «← Volver» a /#games), que lleva a su sección.
export default function ScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.location.hash) return;
    // "instant" para que no se anime con el scroll suave del CSS
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    toTop();
    // Next ajusta el scroll después de este efecto; se repite en el siguiente fotograma para que gane el nuestro
    const frame = requestAnimationFrame(toTop);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
