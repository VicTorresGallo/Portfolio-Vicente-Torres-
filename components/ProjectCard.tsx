"use client";

import Link from "next/link";
import ProjectCover from "./ProjectCover";
import { useLanguage } from "./LanguageProvider";
import { tr } from "@/data/dictionary";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  const title = tr(project.title, lang);

  return (
    <article className={`card${project.featured ? " card--featured" : ""}`}>
      <div className="card-media">
        <ProjectCover project={project} title={title} sizes="(max-width: 800px) 100vw, 360px" />
        <span className="card-year">{project.year}</span>
      </div>

      <div className="card-body">
        {project.highlight && <p className="card-highlight">{project.highlight[lang]}</p>}
        <h3>
          {/* El enlace se estira por CSS para que toda la tarjeta sea clicable */}
          <Link href={`/proyectos/${project.id}/`} className="card-link">
            {title}
          </Link>
        </h3>
        <p>{project.summary[lang]}</p>
        <ul className="tags">
          {project.tags.map((tag) => {
            const label = tr(tag, lang);
            return <li key={label}>{label}</li>;
          })}
        </ul>
        <span className="card-more" aria-hidden>
          {t.viewMore} →
        </span>
      </div>
    </article>
  );
}
