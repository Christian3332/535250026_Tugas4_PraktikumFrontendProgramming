import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/project";
import "@/app/styles/project-detail.css";

type ProjectDetailPageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const project = projects.find(
        (item) => item.slug === params.slug
    );

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex(
        (item) => item.slug === project.slug
    );

    const nextProject = projects.length > 1
        ? projects[(currentIndex + 1) % projects.length]
        : null;

    return (
        <main className="project-detail-page">
            <section className="project-detail-hero">
                <div className="project-detail-container">
                    <Link
                        href="/projects"
                        className="project-detail-back"
                    >
                        <span>←</span> Back to projects
                    </Link>

                    <div className="project-detail-heading">
                        <p className="project-detail-label">
                            {project.category} / {project.year}
                        </p>

                        <h1>{project.name}</h1>

                        <p className="project-detail-intro">
                            {project.title}
                        </p>
                    </div>

                    <div
                        className={`project-detail-art ${project.color}`}
                    >
                        <span className="project-detail-art-label">
                            REVORA STUDIO — SELECTED WORK
                        </span>

                        <div className="project-detail-art-shape">
                            {project.shape}
                        </div>

                        <span className="project-detail-art-name">
                            {project.name}
                        </span>
                    </div>
                </div>
            </section>

            <section className="project-detail-overview">
                <div className="project-detail-container project-detail-overview-grid">
                    <div>
                        <p className="project-detail-label">
                            THE PROJECT
                        </p>

                        <h2>
                            Design with
                            <br />
                            <span>purpose.</span>
                        </h2>
                    </div>

                    <div className="project-detail-description">
                        <p>{project.description}</p>

                        <div className="project-detail-services">
                            <p>WHAT WE DID</p>

                            <div className="project-detail-tags">
                                {project.services.map((service) => (
                                    <span key={service}>
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-detail-next">
                <div className="project-detail-container">
                    <p className="project-detail-label">
                        KEEP EXPLORING
                    </p>

                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.slug}`}
                            className="project-detail-next-link"
                        >
                            <div>
                                <p>Next project</p>
                                <h2>{nextProject.name}</h2>
                                <span>{nextProject.category}</span>
                            </div>

                            <span className="project-detail-next-arrow">
                                ↗
                            </span>
                        </Link>
                    ) : (
                        <Link
                            href="/projects"
                            className="project-detail-next-link"
                        >
                            <div>
                                <p>Explore our work</p>
                                <h2>All projects</h2>
                            </div>

                            <span className="project-detail-next-arrow">
                                ↗
                            </span>
                        </Link>
                    )}

                    <Link
                        href="/contact"
                        className="project-detail-contact"
                    >
                        Have a similar project in mind? Let&apos;s talk ↗
                    </Link>
                </div>
            </section>
        </main>
    );
}
