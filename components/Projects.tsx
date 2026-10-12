"use client";

import ProjectCard from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";
import { projects, type Project } from "@/data/projects";

export default function Projects({ category }: { category: Project["category"] }) {
  const { t } = useLanguage();
  const visible = projects.filter((p) => p.category === category);

  return (
    <section id={category} className="section">
      <h2 data-mask>
        <span>{t.categories[category]}</span>
      </h2>
      <div className="grid">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
