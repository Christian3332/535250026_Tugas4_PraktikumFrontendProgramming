
import Link from "next/link";
import "../styles/projects.css";
import { projects } from "../../data/project";

export default function ProjectsPage() {
    return (
        <main className="projects-page">
            <section className="projects-hero">
                <div className="projects-container">
                    <p className="projects-label">
                        OUR PORTFOLIO
                    </p>

                    <h1>
                        Selected work.
                        <br />
                        <span>Meaningful impact.</span>
                    </h1>

                    <div className="projects-hero-bottom">
                        <p>
                            A collection of digital experiences and
                            visual identities designed to help brands
                            stand out and connect with their audience.
                        </p>

                        <span className="projects-count">
                            {String(projects.length).padStart(2, "0")} PROJECTS
                        </span>
                    </div>
                </div>
            </section>

            <section className="projects-list-section">
                <div className="projects-container">
                    <div className="projects-list-header">
                        <p>OUR SELECTED PROJECTS</p>
                        <p>2026 — PRESENT</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <Link
                                href={`/projects/${project.slug}`}
                                className="projects-card"
                                key={project.slug}
                            >
                                <div
                                    className={`projects-art ${project.color}`}
                                >
                                    <span className="projects-art-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="projects-art-shape">
                                        {project.shape}
                                    </div>

                                    <span className="projects-art-name">
                                        {project.name}
                                    </span>

                                    <span className="projects-art-arrow">
                                        ↗
                                    </span>
                                </div>

                                <div className="projects-card-info">
                                    <div>
                                        <p className="projects-card-category">
                                            {project.category}
                                        </p>

                                        <h2>{project.name}</h2>

                                        <p className="projects-card-title">
                                            {project.title}
                                        </p>
                                    </div>

                                    <span className="projects-card-link">
                                        View project ↗
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <p className="projects-empty">
                            Our projects will be available soon.
                        </p>
                    )}
                </div>
            </section>

            <section className="projects-cta">
                <div className="projects-container projects-cta-content">
                    <p className="projects-label">
                        HAVE A PROJECT IN MIND?
                    </p>

                    <h2>
                        Let&apos;s create something
                        <span> meaningful.</span>
                    </h2>

                    <Link
                        href="/contact"
                        className="projects-cta-button"
                    >
                        Start a project <span>↗</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
