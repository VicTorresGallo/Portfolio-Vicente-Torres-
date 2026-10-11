import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import "./cv.css";
import { GitHubIcon, GlobeIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { tr, type Lang } from "@/data/dictionary";
import { cvEducation, cvExperience, cvLabels, cvProjects, cvSummary } from "@/data/cv";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

// Página A4 imprimible desde la que se generan los PDF de public/cv/ (ver README)
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export const metadata: Metadata = {
  title: "CV | Vicente Torres Gallo",
  robots: { index: false },
};

const short = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default async function CvPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (raw !== "es" && raw !== "en") notFound();
  const lang: Lang = raw;
  const l = cvLabels[lang];
  const [first, ...rest] = profile.name.split(" ");

  return (
    <div className="cv-screen">
      <article className="cv" lang={lang}>
        <aside className="cv-side">
          {profile.photo && (
            <div className="cv-photo">
              <Image src={asset(profile.photo)} alt={profile.name} width={300} height={300} priority />
            </div>
          )}

          <section>
            <h2>{l.contact}</h2>
            <ul className="cv-contact">
              <li>
                <MailIcon size={13} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <PhoneIcon size={13} />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <PinIcon size={13} />
                <span>{profile.location[lang]}</span>
              </li>
              <li>
                <GlobeIcon size={13} />
                <a href={profile.website}>{short(profile.website)}</a>
              </li>
              <li>
                <GitHubIcon size={13} />
                <a href={profile.github}>{short(profile.github)}</a>
              </li>
              <li>
                <LinkedInIcon size={13} />
                <a href={profile.linkedin}>{short(profile.linkedin)}</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>{l.skills}</h2>
            {profile.skills.map((s) => (
              <div key={s.group.en} className="cv-skill">
                <h3>{s.group[lang]}</h3>
                <p>{s.items.join(" · ")}</p>
              </div>
            ))}
          </section>

          <section>
            <h2>{l.languages}</h2>
            <ul className="cv-langs">
              {profile.languages.map((x) => (
                <li key={x.name.en}>
                  <span>{x.name[lang]}</span>
                  <span>{x.level[lang]}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>{l.other}</h2>
            <ul className="cv-plain">
              {l.otherItems.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
        </aside>

        <main className="cv-main">
          <header className="cv-head">
            <h1>
              {first} <span>{rest.join(" ")}</span>
            </h1>
            <p>{l.headline}</p>
          </header>

          <section>
            <h2>{l.profile}</h2>
            <p className="cv-summary">{cvSummary[lang]}</p>
          </section>

          <section>
            <h2>{l.experience}</h2>
            {cvExperience.map((e) => (
              <div key={e.org} className="cv-entry">
                <div className="cv-entry-head">
                  <h3>
                    {e.title[lang]} · <span>{e.org}</span>
                  </h3>
                  <time>{e.period[lang]}</time>
                </div>
                <ul className="cv-bullets">
                  {e.points.map((p) => (
                    <li key={p.es}>{p[lang]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2>{l.projects}</h2>
            <div className="cv-projects">
              {cvProjects.map((p) => (
                <div key={tr(p.name, "es")} className="cv-project">
                  <div className="cv-entry-head">
                    <h3>{tr(p.name, lang)}</h3>
                    <span className="cv-meta">{p.meta[lang]}</span>
                  </div>
                  <p>{p.text[lang]}</p>
                </div>
              ))}
            </div>
            <p className="cv-more">
              {l.portfolio}: <a href={profile.website}>{short(profile.website)}</a>
            </p>
          </section>

          <section>
            <h2>{l.education}</h2>
            {cvEducation.map((e) => (
              <div key={e.org} className="cv-entry">
                <div className="cv-entry-head">
                  <h3>
                    {e.title[lang]} · <span>{e.org}</span>
                  </h3>
                  <time>{e.period[lang]}</time>
                </div>
                {e.detail && <p className="cv-detail">{e.detail[lang]}</p>}
              </div>
            ))}
          </section>
        </main>
      </article>
    </div>
  );
}
