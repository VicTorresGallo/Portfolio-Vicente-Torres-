"use client";

import Image from "next/image";
import { useRef } from "react";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import TechIcon from "@/components/TechIcon";
import { useLanguage } from "@/components/LanguageProvider";
import {
  BriefcaseIcon,
  CapIcon,
  CodeIcon,
  CubeIcon,
  DatabaseIcon,
  DevicesIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  SparklesIcon,
  TranslateIcon,
} from "@/components/Icons";
import { tr } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";
import { useMotion } from "@/lib/useMotion";

// Icono de cada grupo de habilidades (por su nombre en inglés)
const groupIcon: Record<string, React.ReactNode> = {
  Languages: <CodeIcon size={18} />,
  "Engines & 3D": <CubeIcon size={18} />,
  "Web & mobile": <DevicesIcon size={18} />,
  "Data & systems": <DatabaseIcon size={18} />,
  "Artificial intelligence": <SparklesIcon size={18} />,
};

export default function Home() {
  const { lang, t } = useLanguage();
  const main = useRef<HTMLElement>(null);
  useMotion(main);

  return (
    <>
      <Nav />
      <main id="top" className="container" ref={main}>
        <section className="hero">
          <div className="hero-text">
            <h1>
              <span className="line" data-mask data-intro-mask>
                <span>{profile.name.split(" ")[0]}</span>
              </span>
              <span className="line line--accent" data-mask data-intro-mask>
                <span>{profile.name.split(" ").slice(1).join(" ")}</span>
              </span>
            </h1>
            <p className="role" data-intro>
              {t.role}
            </p>
            <p className="tagline" data-intro>
              {t.tagline}
            </p>
            <div className="actions" data-intro>
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <MailIcon /> {t.nav.contact}
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
              {profile.cv && (
                <a className="btn" href={asset(profile.cv[lang])} download>
                  <DownloadIcon /> {t.downloadCv}
                </a>
              )}
            </div>
          </div>

          <div className="avatar" data-intro-photo>
            {profile.photo ? (
              <Image src={asset(profile.photo)} alt={profile.name} fill sizes="260px" priority />
            ) : (
              <span aria-hidden>VT</span>
            )}
          </div>
        </section>

        <section className="section about">
          <h2 data-mask>
            <span>{t.aboutTitle}</span>
          </h2>
          <div className="about-body" data-reveal>
            {profile.about[lang].map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="location">
              <PinIcon /> {profile.location[lang]}
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 data-mask>
            <span>{t.nav.experience}</span>
          </h2>
          <div className="columns">
            <div data-reveal>
              <h3 className="col-title">
                <BriefcaseIcon /> {t.experienceTitle}
              </h3>
              <ol className="timeline">
                {profile.experience.map((e) => (
                  <li key={e.org}>
                    <span className="period">{e.period[lang]}</span>
                    <h4>{e.title[lang]}</h4>
                    <p className="org">{e.org}</p>
                    <ul>
                      {e.points.map((pt) => (
                        <li key={pt.es}>{pt[lang]}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <h3 className="col-title">
                <CapIcon /> {t.educationTitle}
              </h3>
              <ol className="timeline">
                {profile.education.map((e) => (
                  <li key={e.org}>
                    <span className="period">{e.period[lang]}</span>
                    <h4>{e.title[lang]}</h4>
                    <p className="org">{e.org}</p>
                    {e.detail && <p className="edu-detail">{e.detail[lang]}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 data-mask>
            <span>{t.skillsTitle}</span>
          </h2>
          <div className="skills">
            {profile.skills.map((s) => (
              <div key={s.group.en} className="skill-group" data-reveal>
                <h3>
                  <span className="skill-icon">{groupIcon[s.group.en]}</span>
                  {s.group[lang]}
                </h3>
                <ul className="tags">
                  {s.items.map((i) => {
                    const label = tr(i, lang);
                    return (
                      <li key={label}>
                        <TechIcon label={label} />
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="skill-group" data-reveal>
              <h3>
                <span className="skill-icon">
                  <TranslateIcon size={18} />
                </span>
                {t.languagesTitle}
              </h3>
              <ul className="langs">
                {profile.languages.map((l) => (
                  <li key={l.name.en}>
                    <span>{l.name[lang]}</span>
                    <span className="level">{l.level[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Projects category="web" />
        <Projects category="games" />

        <section id="contact" className="section contact">
          <h2 data-mask>
            <span>{t.contactTitle}</span>
          </h2>
          <a className="contact-mail" href={`mailto:${profile.email}`} data-reveal>
            {profile.email}
          </a>
          <div className="actions" data-reveal>
            {profile.cv && (
              <a className="btn btn--primary" href={asset(profile.cv[lang])} download>
                <DownloadIcon /> {t.downloadCv}
              </a>
            )}
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </>
  );
}
