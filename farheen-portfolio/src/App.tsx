import { useEffect, useMemo, useState } from "react";
import { profile, roles, skillGroups, strengths } from "./data";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#strengths", label: "Focus" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const ticker = [
  "React",
  "TypeScript",
  "PHP",
  "GraphQL",
  "Node.js",
  "Redux Toolkit",
  "Next.js",
  "Azure",
  "Jest",
  "Cypress",
  "Figma",
  "WCAG",
];

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [openRole, setOpenRole] = useState<string>("intuit");
  const [skillGroup, setSkillGroup] = useState("all");
  const [skillQuery, setSkillQuery] = useState("");
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "";
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#101820" : "#f3efe7"
    );
    try {
      localStorage.setItem("fk-theme", theme);
    } catch {
      /* storage can be unavailable in private modes */
    }
  }, [theme]);

  useEffect(() => {
    if (!contactOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setContactOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [contactOpen]);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((node): node is Element => node instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const skills = useMemo(() => {
    const query = skillQuery.trim().toLowerCase();
    return skillGroups
      .filter((group) => skillGroup === "all" || group.id === skillGroup)
      .flatMap((group) =>
        group.items.map((name) => ({ name, group: group.label }))
      )
      .filter((item) => item.name.toLowerCase().includes(query));
  }, [skillGroup, skillQuery]);

  async function copySnapshot() {
    try {
      await navigator.clipboard.writeText(profile.snapshot);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#top">
          <span>FK</span>
          Farheen Khan
        </a>
        <nav id="primary-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Primary">
          {nav.map((item) =>
            item.href === "#contact" ? (
              <button
                key={item.href}
                type="button"
                className="nav-button"
                aria-haspopup="dialog"
                aria-expanded={contactOpen}
                onClick={() => {
                  setMenuOpen(false);
                  setContactOpen(true);
                }}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href ? "is-active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="text-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? "Light" : "Navy"}
          </button>
          <a className="button button-small" href="/Farheen-Khan-Resume.pdf" download>
            Résumé
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · portfolio</p>
            <h1>Farheen Khan</h1>
            <p className="lede">
              I design and build web applications with React, TypeScript, and
              PHP. For about eight years I have shipped responsive interfaces,
              integrated APIs, and kept the code tested, accessible, and ready
              to grow.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                View experience
              </a>
              <a className="button button-quiet" href="/Farheen-Khan-Resume.pdf" download>
                Download résumé
              </a>
            </div>
            <dl className="facts">
              <div>
                <dt>Experience</dt>
                <dd>About 8 years</dd>
              </div>
              <div>
                <dt>Now</dt>
                <dd>Intuit</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>React and full stack</dd>
              </div>
              <div>
                <dt>Degree</dt>
                <dd>Information Technology</dd>
              </div>
            </dl>
          </div>
          <figure className="portrait">
            <div className="portrait-frame">
              <img
                src="/farheen.jpg"
                width="585"
                height="1024"
                alt="Portrait of Farheen Khan wearing a blue patterned scarf and navy blazer"
              />
            </div>
            <figcaption>
              <strong>Farheen Khan</strong>
              <span>Software Engineer</span>
            </figcaption>
          </figure>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="quote-band" aria-label="Summary">
          <p>
            High-performance, cross-browser applications, with care for
            scalability, accessibility, and code that other people can maintain.
          </p>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="index">01</p>
            <div>
              <h2>Experience</h2>
              <p>Client and company work, newest first.</p>
            </div>
          </div>
          <div className="roles">
            {roles.map((role) => {
              const open = openRole === role.id;
              return (
                <article key={role.id} className={open ? "role is-open" : "role"}>
                  <div className="role-meta">
                    <p>{role.dates}</p>
                    {role.current ? <span className="pill">Present</span> : null}
                  </div>
                  <div className="role-body">
                    <p className="context">
                      {role.context}
                    </p>
                    <h3>
                      {role.title}
                      <span> · {role.org}</span>
                    </h3>
                    {role.id === "ibm" ? (
                      <p className="client-line">Client: Arla Foods, Denmark</p>
                    ) : null}
                    <p>{role.summary}</p>
                    <ul className="skill-row">
                      {role.skills.slice(0, 6).map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="text-button"
                      aria-expanded={open}
                      aria-controls={`${role.id}-details`}
                      onClick={() => setOpenRole(open ? "" : role.id)}
                    >
                      {open ? "Hide responsibilities" : "View responsibilities"}
                    </button>
                    <div
                      id={`${role.id}-details`}
                      className={open ? "details" : "details is-closed"}
                      aria-hidden={!open}
                    >
                      <ul className="points">
                        {role.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="strengths" className="section">
          <div className="section-heading">
            <p className="index">02</p>
            <div>
              <h2>How the work shows up</h2>
              <p>The through-line across Intuit, HitchLine, IBM, and FCS Infotech.</p>
            </div>
          </div>
          <div className="strengths">
            {strengths.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="index">03</p>
            <div>
              <h2>Skills</h2>
              <p>Tools from the résumé. Search or filter by the kind of work.</p>
            </div>
          </div>
          <div className="skill-tools">
            <div className="filters" role="group" aria-label="Skill groups">
              <button
                type="button"
                className={skillGroup === "all" ? "is-selected" : undefined}
                onClick={() => setSkillGroup("all")}
              >
                All
              </button>
              {skillGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={skillGroup === group.id ? "is-selected" : undefined}
                  onClick={() => setSkillGroup(group.id)}
                >
                  {group.label}
                </button>
              ))}
            </div>
            <label className="search">
              <span className="visually-hidden">Search skills</span>
              <input
                type="search"
                value={skillQuery}
                placeholder="Search skills"
                onChange={(event) => setSkillQuery(event.target.value)}
              />
            </label>
          </div>
          <p className="result-count" aria-live="polite">
            {skills.length} {skills.length === 1 ? "skill" : "skills"}
          </p>
          {skills.length === 0 ? (
            <p className="empty">Nothing matches that search.</p>
          ) : (
            <ul className="skill-grid">
              {skills.map((skill) => (
                <li key={`${skill.group}-${skill.name}`}>
                  <span>{skill.group}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section id="education" className="section education">
          <div className="section-heading">
            <p className="index">04</p>
            <div>
              <h2>Education</h2>
              <p>Government Women Engineering College, Ajmer.</p>
            </div>
          </div>
          <article>
            <p className="context">2015 – 2019</p>
            <h3>Bachelor’s in Information Technology</h3>
            <p>Government Women Engineering College Ajmer, Rajasthan, India.</p>
          </article>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading">
            <p className="index">05</p>
            <div>
              <h2>Contact</h2>
              <p>Email, phone, and LinkedIn. Each one opens in your mail, phone, or browser.</p>
            </div>
          </div>
          <div className="contact-panel">
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>Email</span>
              </li>
              <li>
                <a href={profile.phoneHref}>{profile.phone}</a>
                <span>Phone</span>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/farheenkhan78666
                </a>
                <span>LinkedIn</span>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/farheenkhan07
                </a>
                <span>GitHub</span>
              </li>
            </ul>
            <p className="location">{profile.location}</p>
            <div className="contact-actions">
              <button type="button" className="button" onClick={copySnapshot}>
                {copied ? "Copied" : "Copy snapshot"}
              </button>
              <a className="button button-quiet" href="/Farheen-Khan-Resume.pdf" download>
                Download résumé
              </a>
            </div>
          </div>
        </section>
      </main>
      {contactOpen ? (
        <div className="contact-layer" onMouseDown={() => setContactOpen(false)}>
          <div
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="dialog-head">
              <h2 id="contact-title">Contact</h2>
              <button type="button" className="text-button" onClick={() => setContactOpen(false)}>
                Close
              </button>
            </div>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <span>Email</span>
              </li>
              <li>
                <a href={profile.phoneHref}>{profile.phone}</a>
                <span>Phone</span>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span>Profile</span>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span>Code</span>
              </li>
            </ul>
            <p className="location">{profile.location}</p>
          </div>
        </div>
      ) : null}
      <footer className="site-footer">
        <p>Farheen Khan · Software Engineer</p>
        <p>{profile.years}</p>
      </footer>
    </>
  );
}
