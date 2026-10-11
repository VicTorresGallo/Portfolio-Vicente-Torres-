import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

// Necesario con la exportación estática: se genera como archivo en el build
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/curriculum/" },
    sitemap: new URL("/sitemap.xml", profile.website).toString(),
  };
}
