"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import BackToTop from "./BackToTop";
import Nav from "./Nav";
import ProjectCover from "./ProjectCover";
import TechIcon from "./TechIcon";
import { useLanguage } from "./LanguageProvider";
import { DocIcon, DownloadIcon, ExternalIcon, GitHubIcon } from "./Icons";
import { tr } from "@/data/dictionary";
import { projects, type FactKey, type LinkKind, type Project } from "@/data/projects";
import { asset } from "@/lib/asset";
import { useMotion } from "@/lib/useMotion";

const linkIcon: Record<LinkKind, React.ReactNode> = {
  repo: <GitHubIcon size={16} />,
  download: <DownloadIcon size={16} />,
  demo: <ExternalIcon />,
  video: <ExternalIcon />,
  itch: <ExternalIcon />,
  web: <ExternalIcon />,
  doc: <DocIcon />,
};

const factOrder: FactKey[] = ["context", "platform", "tech", "team", "duration"];

export default function ProjectDetail({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  const title = tr(project.title, lang);
  const [zoomed, setZoomed] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const main = useRef<HTMLElement>(null);
  useMotion(main);

  // Siguiente proyecto de la misma categoría (vuelve al primero al llegar al final)
  const sameCategory = projects.filter((p) => p.category === project.category);
  // Se busca por id: el proyecto llega serializado desde el servidor y no es el mismo objeto
  const index = sameCategory.findIndex((p) => p.id === project.id);
  const next = sameCategory[(index + 1) % sameCategory.length];

  const openImage = (i: number) => {
    setZoomed(i);
    dialog.current?.showModal();
  };
  const zoomedImage = zoomed !== null ? project.gallery?.[zoomed] : undefined;

  return (
    <>
      <Nav />
      <main className="container detail" ref={main}>
        <Link href={`/#${project.category}`} className="back">
          ← {t.back} · {t.categories[project.category]}
        </Link>

        <header className="detail-head">
          {project.highlight && (
            <p className="card-highlight">
              {project.highlight[lang]}
            </p>
          )}
          <h1>
            <span>{title}</span>
          </h1>
          <p className="detail-summary">{project.summary[lang]}</p>
          <ul className="tags">
            {project.tags.map((tag) => {
              const label = tr(tag, lang);
              return (
                <li key={label}>
                  <TechIcon label={label} />
                  {label}
                </li>
              );
            })}
          </ul>
        </header>

        <div>
          <ProjectCover
            project={project}
            title={title}
            sizes="(max-width: 1080px) 100vw, 1040px"
            priority
            className="detail-cover"
          />
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            {project.body && (
              <section>
                <h2>{t.overview}</h2>
                {project.body[lang].map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            )}

            {project.features && (
              <section>
                <h2>{t.features}</h2>
                <ul className="bullets">
                  {project.features.map((f) => (
                    <li key={f.es}>{f[lang]}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.role && (
              <section>
                <h2>{t.myRole}</h2>
                <p>{project.role[lang]}</p>
                {project.roleDetails && (
                  <ul className="bullets">
                    {project.roleDetails.map((r) => (
                      <li key={r.es}>{r[lang]}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </div>

          <aside className="detail-side">
            <h2>{t.details}</h2>
            <dl>
              <div>
                <dt>{t.year}</dt>
                <dd>{project.year}</dd>
              </div>
              {factOrder.map((key) => {
                const value = project.facts?.[key];
                return value ? (
                  <div key={key}>
                    <dt>{t.facts[key]}</dt>
                    <dd>{tr(value, lang)}</dd>
                  </div>
                ) : null;
              })}
            </dl>
            {project.links && (
              <div className="detail-links">
                {project.links.map((l) => (
                  <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">
                    {linkIcon[l.kind]}
                    {l.label ? tr(l.label, lang) : t.links[l.kind]}
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>

        {project.play && (
          <section className="detail-section">
            <h2>{t.play}</h2>
            <div className="player" style={{ aspectRatio: project.play.aspect ?? "16 / 9" }}>
              {playing ? (
                <iframe
                  src={asset(project.play.src)}
                  title={`${title} – ${t.play}`}
                  allow="autoplay; fullscreen; gamepad"
                  allowFullScreen
                />
              ) : (
                // El emulador solo se descarga cuando alguien decide jugar
                <button className="player-start" onClick={() => setPlaying(true)}>
                  {project.cover && (
                    <Image
                      src={asset(project.cover)}
                      alt=""
                      fill
                      sizes="(max-width: 800px) 100vw, 700px"
                      className={project.pixelated ? "pixel" : undefined}
                    />
                  )}
                  <span className="player-cta">▶ {t.playStart}</span>
                </button>
              )}
            </div>
            {project.play.hint && <p className="player-hint">{project.play.hint[lang]}</p>}
          </section>
        )}

        {project.youtube && (
          <section className="detail-section">
            <h2>{t.video}</h2>
            <div className="video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtube}`}
                title={`${title} – ${t.video}`}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {project.gallery && (
          <section className="detail-section">
            <h2>{t.gallery}</h2>
            <div className={`gallery${project.pixelated ? " cover--pixel" : ""}${project.portraitGallery ? " gallery--portrait" : ""}`}>
              {project.gallery.map((g, i) => (
                <button key={g.src} className="gallery-item" onClick={() => openImage(i)}>
                  <Image
                    src={asset(g.src)}
                    alt={g.caption?.[lang] ?? `${title} ${i + 1}`}
                    fill
                    sizes="(max-width: 800px) 50vw, 340px"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        <Link href={`/proyectos/${next.id}/`} className="next-project" data-reveal>
          <span>{t.next}</span>
          <strong>{tr(next.title, lang)} →</strong>
        </Link>
      </main>

      <BackToTop />


      <dialog
        ref={dialog}
        className={`lightbox${project.pixelated ? " cover--pixel" : ""}`}
        onClick={() => dialog.current?.close()}
        onClose={() => setZoomed(null)}
      >
        {zoomedImage && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(zoomedImage.src)} alt={zoomedImage.caption?.[lang] ?? title} />
            {zoomedImage.caption && <figcaption>{zoomedImage.caption[lang]}</figcaption>}
          </figure>
        )}
        <button className="lightbox-close" aria-label={t.close}>
          ✕
        </button>
      </dialog>
    </>
  );
}
