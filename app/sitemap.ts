import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

// Necesario con la exportación estática: se genera como archivo en el build
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, profile.website).toString();
  return [
    { url: url("/"), priority: 1 },
    ...projects.map((p) => ({ url: url(`/proyectos/${p.id}/`), priority: 0.8 })),
  ];
}
