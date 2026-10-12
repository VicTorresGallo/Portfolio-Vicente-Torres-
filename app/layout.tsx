import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import ScrollReset from "@/components/ScrollReset";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: "Vicente Torres Gallo | Portfolio",
  description:
    "Ingeniero Multimedia: videojuegos, realidad virtual y desarrollo web. Unity, Unreal Engine, C++, Angular y Node.",
  authors: [{ name: "Vicente Torres Gallo" }],
  openGraph: {
    title: "Vicente Torres Gallo | Portfolio",
    description: "Ingeniero Multimedia: videojuegos, realidad virtual y desarrollo web.",
    type: "website",
    // Imagen que se muestra al compartir el enlace (LinkedIn, WhatsApp...)
    images: [{ url: "/images/projects/portfolio/cover.jpg", width: 1440, height: 810 }],
  },
};

// Antes de pintar: aplica el tema guardado (o el del sistema) y, si hay animaciones,
// oculta la portada hasta que GSAP arranque (a los 3 s se muestra pase lo que pase).
// Al recargar, empieza siempre arriba del todo (sin restaurar el scroll ni saltar al #ancla).
const themeScript = `try{var d=document.documentElement,t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.dataset.theme=t}catch(e){}try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("motion-pending");setTimeout(function(){document.documentElement.classList.remove("motion-pending")},3000)}}catch(e){}try{history.scrollRestoration="manual";var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="reload"){if(location.hash)history.replaceState(null,"",location.pathname+location.search);window.scrollTo(0,0);addEventListener("load",function(){window.scrollTo(0,0)})}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: el script cambia data-theme antes de que React hidrate
    <html lang="es" className={`${inter.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReset />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
