import Image from "next/image";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

// Tono estable por proyecto para la portada generada cuando no hay imagen
function hue(id: string) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}

export default function ProjectCover({
  project,
  title,
  sizes,
  priority,
  className = "",
}: {
  project: Project;
  title: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`cover ${project.pixelated ? "cover--pixel" : ""} ${project.coverFit === "contain" ? "cover--contain" : ""} ${className}`}
      style={{ "--h": hue(project.id), background: project.coverBg } as React.CSSProperties}
    >
      {project.cover ? (
        <Image src={asset(project.cover)} alt={title} fill sizes={sizes} priority={priority} />
      ) : (
        <span className="cover-monogram" aria-hidden>
          {title}
        </span>
      )}
    </div>
  );
}
