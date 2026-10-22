import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Building memorable brands through strategy, visual identity, and consistency",
    tag: "Branding",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Designing intuitive digital experiences centered around real user needs.",
    tag: "Digital Product",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Turning creative into responsive, functional websites.",
    tag: "Development",
  },
];

const projects = [
  {
    category: "Brand Identity",
    title: "A new identity for modern living.",
    name: "Aurelia",
    color: "project-aurelia",
    shape: "A",
    slug: "aurelia-brand-identity",
  },
  {
    category: "Web Design",
    title: "Digital experience for the next generation.",
    name: "Nuvora",
    color: "project-nuvora",
    shape: "N",
    slug: "nuvora-website",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-container">
        <div className="hero-topline">
          <span>INDEPENDENT CREATIVE STUDIO</span>
          <span>BASED IN INDONESIA</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            DESIGN WITH PURPOSE. BUILD WITH INTENTION
          </p>

          <h1>
            Ideas into
            <br />
            <span>impcatful</span> digital
            <br />
            experiences.
          </h1>

          <div className="hero-bottom">
            <p>
              We help ambitious businesses build meaningful brands and digital experiences that move them forward.
            </p>

            <Link href="/projects" className="round-link">
              <span>Explore our work</span>
              <span className="round-arrow">&#8599;</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-label">
            <span>CREATIVITY MEETS STRATEGY</span>
            <span>EST. 2026</span>
          </div>

          <div className="visual-art">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core">R.</div>
            <span className="art-caption">MAKE IT MATTER.</span>
          </div>

          <div className="visual-bottom">
            <span>STRATEGY / DESIGN / DEVELOPMENT</span>
            <span>01 — 03</span>
          </div>
        </div>
      </section>

      <section className="intro section-container">
        <p className="eyebrow">A LITTLE ABOUT US</p>

        <div className="intro-content">
          <h2>
            Good design looks great.
            <br />
            <span>Great design makes a difference.</span>
          </h2>

          <div className="intro-description">
            <p>
              Revora Studio is an independent creative agency
              combining strategy, design, and technology to help
              brands stand out in a crowded digital world.
            </p>

            <Link href="/about" className="text-link">
              More about us <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>
                Thoughtful work.
                <br />
                <span>Real results.</span>
              </h2>
            </div>

            <Link href="/services" className="text-link">
              All services <span>↗</span>
            </Link>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>

                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <span className="service-tag">{service.tag}</span>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED PROJECTS</p>
            <h2>
              Work that speaks
              <br />
              <span>for itself.</span>
            </h2>
          </div>

          <Link href="/projects" className="text-link">
            View all projects <span>↗</span>
          </Link>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="project-card"
              key={project.slug}
            >
              <div className={`project-art ${project.color}`}>
                <span className="project-brand">{project.name}</span>
                <span className="project-shape">{project.shape}</span>
                <span className="project-view">VIEW PROJECT ↗</span>
              </div>

              <div className="project-meta">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-meta-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div className="section-container contact-banner-inner">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let&apos;s make
            <br />
            something <span>matter.</span>
          </h2>

          <Link href="/contact" className="contact-button">
            Start a conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}