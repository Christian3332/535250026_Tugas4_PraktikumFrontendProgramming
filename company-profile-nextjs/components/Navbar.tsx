
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Main navigation">
                <Link
                    href="/"
                    className="nav-logo"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className="nav-logo-mark">R</span>
                    REVORA STUDIO
                </Link>

                <button
                    type="button"
                    className="nav-menu-button"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav-links"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    id="main-nav-links"
                    className={`nav-links ${menuOpen ? "nav-open" : ""}`}
                >
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname === link.href ||
                                  pathname.startsWith(`${link.href}/`);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${isActive ? "active" : ""}`}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact"
                        className="nav-contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        Let&apos;s Talk <span>&#8599;</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
