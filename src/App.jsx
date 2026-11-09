
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import {
  siCss,
  siDjango,
  siDocker,
  siFastapi,
  siFlask,
  siGit,
  siHtml5,
  siJenkins,
  siJavascript,
  siKubernetes,
  siMongodb,
  siMysql,
  siPostgresql,
  siPython,
  siReact,
  siSwagger,
  siTailwindcss,
} from 'simple-icons'

import azureIcon from './assets/azure.svg'
import './App.css'

const skills = [
  { name: 'Python', icon: siPython, color: '#38bdf8' },
  { name: 'Django', icon: siDjango, color: '#34d399' },
  { name: 'Flask', icon: siFlask, color: '#e2e8f0' },
  { name: 'FastAPI', icon: siFastapi, color: '#22d3ee' },
  { name: 'MySQL', icon: siMysql, color: '#38bdf8' },
  { name: 'PostgreSQL', icon: siPostgresql, color: '#60a5fa' },
  { name: 'MongoDB', icon: siMongodb, color: '#4ade80' },
  { name: 'React', icon: siReact, color: '#22d3ee' },
  { name: 'JavaScript', icon: siJavascript, color: '#facc15' },
  { name: 'HTML', icon: siHtml5, color: '#fb923c' },
  { name: 'CSS', icon: siCss, color: '#60a5fa' },
  { name: 'Tailwind CSS', icon: siTailwindcss, color: '#22d3ee' },
  { name: 'Docker', icon: siDocker, color: '#38bdf8' },
  { name: 'Kubernetes', icon: siKubernetes, color: '#818cf8' },
  { name: 'Jenkins', icon: siJenkins, color: '#fb923c' },
  { name: 'Git & GitHub', icon: siGit, color: '#f472b6' },
  { name: 'Azure', iconSrc: azureIcon, color: '#38bdf8' },
  { name: 'REST APIs', icon: siSwagger, color: '#c084fc' },
]

const projects = [
  {
    number: '01',
    category: 'BACKEND DEVELOPMENT',
    title: 'Cab Service Provider',
    description:
      'A backend system connecting cab payments with Mahindra Finance loan collection workflows, with REST APIs and optimized database performance.',
    technologies: ['Python', 'Django', 'React', 'MySQL', 'Docker', 'Jenkins'],
  },
  {
    number: '02',
    category: 'MICROSERVICES ARCHITECTURE',
    title: 'Mahanidhi Loan Application',
    description:
      'Backend APIs for customer onboarding and loan processing, built around microservices and automated CI/CD workflows.',
    technologies: ['Python', 'Django', 'Flask', 'MySQL', 'Docker', 'Kubernetes'],
  },
]

const navigation = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Smooth scroll without showing #section in the URL
  const scrollToSection = (sectionId) => {
    setMenuOpen(false)

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search
    )
  }

  // Reusable click handler for all internal links
  const handleSectionClick = (sectionId) => (event) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            onClick={handleSectionClick('home')}
            aria-label="Shivraj Kokat, home"
          >
            <span className="brand-icon">S.</span>
            <span className="brand-name">
              Developer<span>Portfolio</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div
            className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}
            id="primary-navigation"
          >
            <div className="nav-links">
              {navigation.map(([label, href]) => (
                <a
                  href={`#${href}`}
                  key={href}
                  onClick={handleSectionClick(href)}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              className="nav-button"
              href="#contact"
              onClick={handleSectionClick('contact')}
            >
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME / HERO SECTION */}
        <section className="hero page-width" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Available for opportunities
            </div>

            <p className="eyebrow">HELLO, I&apos;M SHIVRAJ KOKAT</p>

            <h1>
              Building scalable
              <span> digital experiences.</span>
            </h1>

            <p className="hero-description">
              I&apos;m a Python backend developer specializing in Python, Django, Flask,
              and REST APIs. I build reliable applications, scalable services, and
              thoughtful solutions to real-world problems.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="#projects"
                onClick={handleSectionClick('projects')}
              >
                Explore my work <ArrowUpRight size={16} />
              </a>

              <a
                className="secondary-button"
                href="#contact"
                onClick={handleSectionClick('contact')}
              >
                <Mail size={15} /> Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Pune, Maharashtra
              </span>
              <span>
                <Code2 size={14} /> Python backend developer
              </span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="A preview of my developer profile"
          >
            <div className="editor-window">
              <div className="editor-topbar">
                <div className="window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="editor-filename">shivraj.py</span>
                <span className="editor-language">Python</span>
              </div>

              <div className="editor-body" aria-label="Profile code preview">
                <div className="code-line">
                  <span className="line-number">01</span>
                  <code><i>class</i> <b>Developer</b>:</code>
                </div>

                <div className="code-line">
                  <span className="line-number">02</span>
                  <code><span className="indent" /><i>name</i> = <em>&quot;Shivraj Kokat&quot;</em></code>
                </div>

                <div className="code-line">
                  <span className="line-number">03</span>
                  <code><span className="indent" /><i>role</i> = <em>&quot;Python Backend Developer&quot;</em></code>
                </div>

                <div className="code-line">
                  <span className="line-number">04</span>
                  <code><span className="indent" /><i>skills</i> = [</code>
                </div>

                <div className="code-line">
                  <span className="line-number">05</span>
                  <code><span className="indent double-indent" /><em>&quot;Python&quot;</em>, <em>&quot;Django&quot;</em>,</code>
                </div>

                <div className="code-line">
                  <span className="line-number">06</span>
                  <code><span className="indent double-indent" /><em>&quot;REST APIs&quot;</em>, <em>&quot;MySQL&quot;</em></code>
                </div>

                <div className="code-line">
                  <span className="line-number">07</span>
                  <code><span className="indent" />]</code>
                </div>

                <div className="code-line code-line-spacer">
                  <span className="line-number">08</span>
                  <code>&nbsp;</code>
                </div>

                <div className="code-line">
                  <span className="line-number">09</span>
                  <code><i>build</i>(<em>&quot;reliable software&quot;</em>)</code>
                </div>
              </div>

              <div className="editor-status">
                <span>
                  <span className="status-check">✓</span> Ready to build
                </span>
                <span>Python 3</span>
              </div>
            </div>

            <div className="floating-label floating-label-top">
              <span className="floating-icon">
                <Code2 size={15} />
              </span>
              Backend development
            </div>

            <div className="floating-label floating-label-bottom">
              <span className="floating-pulse" />
              Open to opportunities
            </div>
          </div>

          <a
            className="scroll-cue"
            href="#about"
            onClick={handleSectionClick('about')}
          >
            <span>Scroll to explore</span>
            <ArrowDown size={14} />
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <p className="section-kicker">A LITTLE ABOUT ME</p>
            <h2>I build things for the web.</h2>
          </div>

          <div className="about-copy">
            <div className="about-lead">
              I build scalable applications through
              <span> full-stack engineering and intelligent solutions.</span>
            </div>

            <div className="about-details">
              <p>
                I&apos;m a Python backend developer with experience in developing web
                applications using Python, Django, Flask, React, and JavaScript. My
                work includes REST API development, microservices architecture,
                database optimization, and responsive frontend development.
              </p>

              <p>
                I enjoy working with Docker, Kubernetes, CI/CD pipelines, and
                Microsoft Azure for application deployment. I&apos;m currently exploring
                Generative AI, LLM, RAG, and LangChain to build useful, AI-powered
                applications.
              </p>

              <a
                className="text-link"
                href="#contact"
                onClick={handleSectionClick('contact')}
              >
                More about working together <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="highlights-grid">
            <article className="highlight-card">
              <Code2 size={17} />
              <h3>Full Stack</h3>
              <p>Frontend and backend application development</p>
            </article>

            <article className="highlight-card">
              <Database size={17} />
              <h3>Backend</h3>
              <p>REST APIs, microservices, and database optimization</p>
            </article>

            <article className="highlight-card">
              <Sparkles size={17} />
              <h3>GenAI</h3>
              <p>Exploring LLM, RAG, and AI-powered applications</p>
            </article>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section-wrap" id="experience">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">WHERE I&apos;VE WORKED</p>
              <h2>Professional experience.</h2>
            </div>
            <span className="section-index">01 / EXPERIENCE</span>
          </div>

          <article className="experience-card">
            <div className="experience-icon">
              <BriefcaseBusiness size={19} />
            </div>

            <div className="experience-details">
              <div className="experience-title-row">
                <div>
                  <h3>Python Developer</h3>
                  <p className="company-name">
                    Gavkari Agro Producer Company Limited
                  </p>
                </div>
                <span className="experience-period">
                  August 2023 — Present
                </span>
              </div>

              <div className="experience-meta">
                <span>
                  <MapPin size={14} /> Pune, Maharashtra
                </span>
                <span>
                  <CalendarDays size={14} /> Full-time
                </span>
              </div>

              <ul>
                <li>
                  Develop backend services and RESTful APIs using Python,
                  Django, and Flask.
                </li>
                <li>
                  Manage MySQL databases, with attention to performance and
                  reliability.
                </li>
                <li>
                  Contribute to authentication, validation, and role-based
                  access workflows.
                </li>
                <li>
                  Use Docker, Jenkins, and Git across development and
                  deployment workflows.
                </li>
              </ul>
            </div>
          </article>
        </section>

        {/* SKILLS SECTION */}
        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">// TECH STACK</p>
              <h2>
                Technologies <span>I work with.</span>
              </h2>
            </div>
            <a
              className="skills-link"
              href="#skills-grid"
              onClick={handleSectionClick('skills-grid')}
            >
              View all skills <ArrowRight size={17} />
            </a>
          </div>

          <p className="section-description">
            A collection of tools and technologies I use to build reliable,
            scalable, and modern applications.
          </p>

          <div className="skills-grid" id="skills-grid">
            {skills.map((skill) => (
              <div
                className="skill-card"
                key={skill.name}
                style={{ '--skill-accent': skill.color }}
              >
                <span className="skill-mark" aria-hidden="true">
                  {skill.icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: `#${skill.icon.hex}` }}
                    >
                      <path d={skill.icon.path} />
                    </svg>
                  ) : (
                    <img src={skill.iconSrc} alt="" />
                  )}
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2>
                Some things I&apos;ve <span>built.</span>
              </h2>
            </div>
            <span className="section-index">01 / PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>
                    {project.number}{' '}
                    <span className="project-divider">/</span> PROJECT
                  </span>
                  <ArrowUpRight size={25} aria-hidden="true" />
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section-wrap" id="education">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">EDUCATION</p>
              <h2>Always learning.</h2>
            </div>
            <span className="section-index">04 / BACKGROUND</span>
          </div>

          <article className="education-card">
            <div className="education-icon">
              <GraduationCap size={21} />
            </div>

            <div>
              <h3>B.Sc in Computer Science</h3>
              <p>
                J.S.P Mandals Arts and Science College Gadhi(165) Beed,
                Maharashtra
              </p>
            </div>

            <div className="education-result">
              <span>July 2022 — June 2025</span>
              <strong>CGPA 7.31</strong>
            </div>
          </article>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section-wrap" id="contact">
          <p className="section-kicker">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let&apos;s build something <span>great.</span>
          </h2>

          <p className="contact-description">
            Have an opportunity or project in mind? I&apos;d love to hear from
            you.
          </p>

          <a
            className="primary-button"
            href="mailto:shivrajkokat07@gmail.com"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>

          <a
            className="contact-email"
            href="mailto:shivrajkokat07@gmail.com"
          >
            <Mail size={15} /> shivrajkokat07@gmail.com
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a
          className="footer-brand"
          href="#home"
          onClick={handleSectionClick('home')}
        >
          S.
        </a>

        <p>© {new Date().getFullYear()} Shivraj Kokat. Built with care.</p>

        <a
          href="#home"
          className="back-to-top"
          onClick={handleSectionClick('home')}
        >
          Back to top <ArrowUpRight size={13} />
        </a>
      </footer>
    </div>
  )
}

export default App
