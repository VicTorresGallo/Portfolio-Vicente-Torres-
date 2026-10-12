"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import { useLanguage } from "@/components/LanguageProvider";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from "@/components/Icons";
import { tr } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Nav />
      <main id="top" className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>
              {profile.name.split(" ")[0]}
              <br />
              <span>{profile.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="role">{t.role}</p>
            <p className="tagline">{t.tagline}</p>
            <div className="actions">
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

          <div className="avatar">
            {profile.photo ? (
              <Image src={asset(profile.photo)} alt={profile.name} fill sizes="260px" priority />
            ) : (
              <span aria-hidden>VT</span>
            )}
          </div>
        </section>

        <section className="section about">
          <h2>{t.aboutTitle}</h2>
          <div className="about-body">
            {profile.about[lang].map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="location">
              <PinIcon /> {profile.location[lang]}
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>{t.nav.experience}</h2>
          <div className="columns">
            <div>
              <h3 className="col-title">{t.experienceTitle}</h3>
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
            <div>
              <h3 className="col-title">{t.educationTitle}</h3>
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
          <h2>{t.skillsTitle}</h2>
          <div className="skills">
            {profile.skills.map((s) => (
              <div key={s.group.en} className="skill-group">
                <h3>{s.group[lang]}</h3>
                <ul className="tags">
                  {s.items.map((i) => {
                    const label = tr(i, lang);
                    return <li key={label}>{label}</li>;
                  })}
                </ul>
              </div>
            ))}
            <div className="skill-group">
              <h3>{t.languagesTitle}</h3>
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
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="actions">
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
          © {new Date().getFullYear()} {profile.name} · {t.footer}
        </div>
      </footer>
    </>
  );
}
