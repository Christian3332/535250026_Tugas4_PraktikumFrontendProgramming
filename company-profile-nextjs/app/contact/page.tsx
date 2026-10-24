
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import "../styles/contact.css";

const WHATSAPP_NUMBER = "6281234567890";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const whatsappMessage = [
            "Halo Revora Studio!",
            "",
            `Nama: ${form.name}`,
            `Email: ${form.email}`,
            `Layanan: ${form.service}`,
            "",
            "Pesan:",
            form.message,
        ].join("\n");

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="contact-container">
                    <p className="contact-eyebrow">
                        LET&apos;S WORK TOGETHER
                    </p>

                    <h1>
                        Have an idea?
                        <br />
                        <span>Let&apos;s make it happen.</span>
                    </h1>

                    <div className="contact-hero-bottom">
                        <p>
                            Tell us about your project. We&apos;ll help you
                            turn your ideas into meaningful digital
                            experiences.
                        </p>

                        <Link
                            href="/projects"
                            className="contact-work-link"
                        >
                            Explore our work <span>↗</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="contact-main">
                <div className="contact-container contact-grid">
                    <div className="contact-information">
                        <p className="contact-eyebrow">
                            GET IN TOUCH
                        </p>

                        <h2>
                            Let&apos;s start
                            <br />
                            a conversation.
                        </h2>

                        <p className="contact-description">
                            Whether you need a new brand identity, a
                            website, or a better digital experience,
                            we&apos;d love to hear what you have in mind.
                        </p>

                        <div className="contact-info-block">
                            <span>01 / THE PROCESS</span>
                            <p>Tell us about your goals and project needs.</p>
                        </div>

                        <div className="contact-info-block">
                            <span>02 / THE DISCUSSION</span>
                            <p>
                                We&apos;ll discuss the scope and next steps
                                together.
                            </p>
                        </div>

                        <div className="contact-info-block">
                            <span>03 / THE CREATION</span>
                            <p>
                                Once everything is clear, we can start
                                building your project.
                            </p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="contact-form-heading">
                            <h2>Tell us about your project.</h2>
                            <p>
                                Fill in the details below to get started.
                            </p>
                        </div>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="contact-field">
                                <label htmlFor="contact-name">
                                    Your name
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={(event) =>
                                        setForm({
                                            ...form,
                                            name: event.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">
                                    Email address
                                </label>

                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={(event) =>
                                        setForm({
                                            ...form,
                                            email: event.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-service">
                                    What do you need?
                                </label>

                                <select
                                    id="contact-service"
                                    value={form.service}
                                    onChange={(event) =>
                                        setForm({
                                            ...form,
                                            service: event.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    <option value="Brand Identity">
                                        Brand Identity
                                    </option>
                                    <option value="UI/UX Design">
                                        UI/UX Design
                                    </option>
                                    <option value="Web Development">
                                        Web Development
                                    </option>
                                    <option value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">
                                    Tell us more
                                </label>

                                <textarea
                                    id="contact-message"
                                    placeholder="Describe your project, goals, or ideas..."
                                    rows={5}
                                    value={form.message}
                                    onChange={(event) =>
                                        setForm({
                                            ...form,
                                            message: event.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="contact-submit"
                            >
                                Send via WhatsApp <span>↗</span>
                            </button>

                            <p className="contact-form-note">
                                Your message will open in WhatsApp for
                                you to review and send.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <section className="contact-bottom-cta">
                <div className="contact-container">
                    <p className="contact-eyebrow">
                        GOOD THINGS START WITH A CONVERSATION
                    </p>

                    <h2>
                        Let&apos;s build something
                        <span> worth remembering.</span>
                    </h2>

                    <Link href="/projects" className="contact-cta-link">
                        View our projects <span>↗</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
