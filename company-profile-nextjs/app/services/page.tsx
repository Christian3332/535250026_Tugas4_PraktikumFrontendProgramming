import Link from "next/link";
import "../styles/services.css";

const services = [
    {
        number: "01",
        title: "Brand Identity",
        category: "BRANDING & STRATEGY",
        description:
            "Build a recognizable brand that communicates your values, connects with your audience, and stands out from the competition.",
        features: [
            "Visual Identity",
            "Brand Color & Typography",
            "Brand Guidelines",
        ],
        tag: "Make your brand memorable.",
    },
    {
        number: "02",
        title: "UI/UX Design",
        category: "DIGITAL EXPERIENCE",
        description:
            "Create digital experiences that feel intuitive, look refined, and help users find what they need without unnecessary friction.",
        features: [
            "User Interface Design",
            "Website Wireframes",
            "Responsive Layout Design",
        ],
        tag: "Designed around people.",
    },
    {
        number: "03",
        title: "Web Development",
        category: "DESIGN & DEVELOPMENT",
        description:
            "Turn your ideas into responsive, functional websites that communicate your business clearly across different screen sizes.",
        features: [
            "Company Profile Websites",
            "Landing Page Development",
            "Responsive Front-end Development",
        ],
        tag: "Built to work everywhere.",
    },
];

const process = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your business, goals, target audience, and what you want to achieve.",
    },
    {
        number: "02",
        title: "Plan & Design",
        description:
            "We define the direction, structure, and visual approach that fits your needs.",
    },
    {
        number: "03",
        title: "Develop",
        description:
            "We turn the approved design into a responsive and functional digital experience.",
    },
    {
        number: "04",
        title: "Review & Refine",
        description:
            "We review the details, test different screen sizes, and refine the final result.",
    },
];

export default function ServicesPage() {
    return (
        <main className="services-page">
            {/* HERO */}
            <section className="services-hero">
                <div className="services-container">
                    <p className="services-eyebrow">
                        <span className="services-eyebrow-dot" />
                        WHAT WE DO
                    </p>

                    <h1>
                        Digital services
                        <br />
                        <span>built with purpose.</span>
                    </h1>

                    <div className="services-hero-bottom">
                        <p>
                            From shaping your brand to building your website,
                            we combine thoughtful design and practical
                            development to help your business move forward.
                        </p>

                        <Link
                            href="/contact"
                            className="services-hero-link"
                        >
                            Discuss your project
                            <span>&#8599;</span>
                        </Link>
                    </div>

                    <div className="services-hero-visual">
                        <div className="services-visual-top">
                            <span>STRATEGY / DESIGN / DEVELOPMENT</span>
                            <span>REVORA STUDIO</span>
                        </div>

                        <div className="services-visual-center">
                            <div className="services-visual-circle circle-one" />
                            <div className="services-visual-circle circle-two" />
                            <div className="services-visual-circle circle-three" />

                            <span className="services-visual-core">
                                R<span>.</span>
                            </span>
                        </div>

                        <span className="services-visual-caption">
                            GOOD IDEAS DESERVE GOOD EXECUTION.
                        </span>

                        <div className="services-visual-bottom">
                            <span>THOUGHTFUL BY DESIGN</span>
                            <span>EST. 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="services-offerings">
                <div className="services-container">
                    <div className="services-section-heading">
                        <div className="services-section-label">
                            <span>01 / OUR SERVICES</span>
                            <span className="services-label-line" />
                        </div>

                        <div className="services-heading-content">
                            <h2>
                                Everything starts
                                <br />
                                with <span>a good idea.</span>
                            </h2>

                            <p>
                                Every project has different needs. Choose a
                                service that fits your goals, or combine
                                services to create a more complete digital
                                experience.
                            </p>
                        </div>
                    </div>

                    <div className="services-list">
                        {services.map((service) => (
                            <article
                                className="services-card"
                                key={service.number}
                            >
                                <div className="services-card-top">
                                    <span className="services-card-number">
                                        {service.number}
                                    </span>

                                    <span className="services-card-category">
                                        {service.category}
                                    </span>

                                    <span className="services-card-arrow">
                                        &#8599;
                                    </span>
                                </div>

                                <div className="services-card-content">
                                    <div className="services-card-main">
                                        <h3>{service.title}</h3>

                                        <p className="services-card-description">
                                            {service.description}
                                        </p>

                                        <p className="services-card-tag">
                                            {service.tag}
                                        </p>
                                    </div>

                                    <div className="services-card-details">
                                        <p className="services-details-label">
                                            WHAT&apos;S INCLUDED
                                        </p>

                                        <ul>
                                            {service.features.map((feature) => (
                                                <li key={feature}>
                                                    <span>{feature}</span>
                                                    <span>&#8599;</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="services-process">
                <div className="services-container">
                    <div className="services-section-heading">
                        <div className="services-section-label">
                            <span>02 / HOW WE WORK</span>
                            <span className="services-label-line" />
                        </div>

                        <div className="services-heading-content">
                            <h2>
                                A clear process.
                                <br />
                                <span>A better result.</span>
                            </h2>

                            <p>
                                Good work comes from a clear direction,
                                thoughtful collaboration, and attention
                                to detail at every stage.
                            </p>
                        </div>
                    </div>

                    <div className="services-process-grid">
                        {process.map((step) => (
                            <article
                                className="services-process-card"
                                key={step.number}
                            >
                                <span className="services-process-number">
                                    {step.number}
                                </span>

                                <div className="services-process-line" />

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="services-cta">
                <div className="services-container">
                    <div className="services-cta-box">
                        <p className="services-eyebrow">
                            <span className="services-eyebrow-dot" />
                            LET&apos;S CREATE SOMETHING
                        </p>

                        <h2>
                            Have an idea?
                            <br />
                            <span>Let&apos;s make it real.</span>
                        </h2>

                        <div className="services-cta-bottom">
                            <p>
                                Tell us about your business, your goals,
                                or the project you have in mind.
                                We&apos;ll figure out the next step together.
                            </p>

                            <Link
                                href="/contact"
                                className="services-cta-button"
                            >
                                Start a conversation
                                <span>&#8599;</span>
                            </Link>
                        </div>

                        <span className="services-cta-decoration">
                            R.
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}
