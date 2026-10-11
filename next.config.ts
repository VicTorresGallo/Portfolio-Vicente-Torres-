import type { NextConfig } from "next";

// Ruta base opcional por si algún día se publica en una subcarpeta (p. ej. /portfolio).
// En Vercel no hace falta: se deja vacía.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Exportación estática: la web es HTML/CSS/JS sin servidor
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
