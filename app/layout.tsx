import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
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

// Aplica el tema guardado (o el del sistema) antes de pintar, para evitar un parpadeo
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: el script cambia data-theme antes de que React hidrate
    <html lang="es" className={`${inter.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
