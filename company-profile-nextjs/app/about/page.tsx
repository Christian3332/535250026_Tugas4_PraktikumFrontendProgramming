import Link from "next/link";
import "../styles/about.css";

const values = [
    {
        number: "01",
        title: "Purposeful Design",
        description:
        "Every design decision has a purpose. We focus on clarity, usability, and visual consistency.",
    },
    {
        number: "02",
        title: "Thoughtful Development",
        description:
        "We build websites with clean structure, responsive layouts, and attention to detail.",
    },
    {
        number: "03",
        title: "Real Collaboration",
        description:
        "We listen, communicate, and work closely with clients to turn ideas into digital experiences.",
    },
];

const process = [
    {
        number: "01",
        title: "Discover",
        description:
        "We learn about your business, goals, audience, and the problems your website needs to solve.",
    },
    {
        number: "02",
        title: "Design",
        description:
        "We shape the visual direction, content structure, and user experience around your needs.",
    },
    {
        number: "03",
        title: "Build",
        description:
        "We turn the approved direction into a responsive website that works across different screens.",
    },
    {
        number: "04",
        title: "Refine",
        description:
        "We review the details, improve the experience, and prepare the website for its next step.",
    },
];

export default function AboutPage() {
    return (
        <main className="about-page">
            {/* HERO */}
            <section className="about-hero">
                <div className="about-container">
                    <p className="about-eyebrow">
                        <span className="about-eyebrow-dot" />
                        GET TO KNOW US
                    </p>

                    <h1>
                        We make digital
                        <br />
                        <span>feel meaningful.</span>
                    </h1>

                <div className="about-hero-bottom">
                    <p className="about-hero-description">
                        Revora Studio is a digital creative studio focused on building
                        thoughtful websites that help businesses communicate, connect,
                        and grow.
                    </p>

                    <Link href="/contact" className="about-link-button">
                        Let&apos;s work together <span>&#8599;</span>
                    </Link>
                </div>

                <div className="about-hero-visual">
                    <div className="about-visual-top">
                        <span>INDEPENDENT CREATIVE STUDIO</span>
                        <span>JAKARTA, INDONESIA</span>
                    </div>

                    <div className="about-visual-center">
                        <span className="about-visual-orbit orbit-one" />
                        <span className="about-visual-orbit orbit-two" />
                        <span className="about-visual-orbit orbit-three" />
                        <span className="about-visual-core">R<span>.</span></span>
                    </div>

                    <div className="about-visual-bottom">
                        <span>IDEAS INTO EXPERIENCES</span>
                        <span>EST. WITH INTENTION</span>
                    </div>
                </div>
            </div>
        </section>

        {/* OUR STORY */}
        <section className="about-story">
            <div className="about-container about-story-grid">
                <div className="about-section-label">
                    <span>01 / OUR STORY</span>
                    <span className="about-label-line" />
                </div>

                <div className="about-story-content">
                    <h2>
                        Good websites do more than look good. They make things
                        <span> happen.</span>
                    </h2>

                    <div className="about-story-text">
                        <p>
                            We started Revora Studio with a simple idea: businesses deserve
                            digital experiences that represent who they are and where they
                            want to go.
                        </p>

                        <p>
                            We combine thoughtful design with practical development to
                            create websites that are clear, useful, and memorable. From
                            the first idea to the final detail, every part of the process
                            is approached with intention.
                        </p>

                        <p>
                            Our goal is simple: make the online presence of every project
                            feel as considered as the business behind it.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* APPROACH */}
        <section className="about-approach">
            <div className="about-container">
                <div className="about-section-heading">
                    <div className="about-section-label">
                        <span>02 / OUR APPROACH</span>
                        <span className="about-label-line" />
                    </div>

                    <h2>
                        From the first idea
                        <br />
                        to <span>something real.</span>
                    </h2>

                    <p>
                        A clear process helps us turn complex ideas into digital
                        experiences that are easy to understand and use.
                    </p>
                </div>

                <div className="about-process-grid">
                    {process.map((item) => (
                        <article className="about-process-card" key={item.number}>
                            <span className="about-card-number">{item.number}</span>
                            <div className="about-card-arrow">&#8599;</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        {/* VALUES */}
        <section className="about-values">
            <div className="about-container">
                <div className="about-values-heading">
                    <div className="about-section-label">
                        <span>03 / WHAT WE VALUE</span>
                        <span className="about-label-line" />
                    </div>

                    <h2>
                        The details matter.
                        <br />
                        <span>So does the bigger picture.</span>
                    </h2>
                </div>

                <div className="about-values-list">
                    {values.map((value) => (
                        <article className="about-value-row" key={value.number}>
                            <span className="about-value-number">{value.number}</span>

                            <h3>{value.title}</h3>

                            <p>{value.description}</p>

                            <span className="about-value-arrow">&#8599;</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>

        {/* SERVICES SUMMARY */}
        <section className="about-capabilities">
            <div className="about-container about-capabilities-grid">
                <div>
                    <div className="about-section-label">
                        <span>04 / WHAT WE DO</span>
                        <span className="about-label-line" />
                    </div>

                    <h2>
                        Creative thinking.
                        <br />
                        <span>Practical execution.</span>
                    </h2>
                </div>

                <div className="about-capabilities-content">
                    <p>
                        We bring design and development together to help businesses
                        establish a stronger digital presence.
                    </p>

                    <ul className="about-capabilities-list">
                        <li>
                            <span>01</span>
                            <span>Website Development</span>
                            <span>&#8599;</span>
                        </li>
                        <li>
                            <span>02</span>
                            <span>Landing Page Design</span>
                            <span>&#8599;</span>
                        </li>
                        <li>
                            <span>03</span>
                            <span>Responsive Web Design</span>
                            <span>&#8599;</span>
                        </li>
                        <li>
                            <span>04</span>
                            <span>Front-end Development</span>
                            <span>&#8599;</span>
                        </li>
                    </ul>

                    <Link href="/services" className="about-text-link">
                        Explore all services <span>&#8599;</span>
                    </Link>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
            <div className="about-container">
                <div className="about-cta-box">
                    <p className="about-eyebrow">
                        <span className="about-eyebrow-dot" />
                        HAVE SOMETHING IN MIND?
                    </p>

                    <h2>
                        Let&apos;s build
                        <br />
                        <span>something meaningful.</span>
                    </h2>

                    <div className="about-cta-bottom">
                        <p>
                            Have an idea, a business, or a project in mind? We&apos;d love
                            to hear about it.
                        </p>

                        <Link href="/contact" className="about-cta-button">
                            Start a conversation <span>&#8599;</span>
                        </Link>
                    </div>

                    <span className="about-cta-decoration">R.</span>
                </div>
            </div>
        </section>
        </main>
    );
}
