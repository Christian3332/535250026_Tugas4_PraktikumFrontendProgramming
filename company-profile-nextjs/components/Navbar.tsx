"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="nav-container">
                <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
                    revora<span>.</span>
                </Link>

                <button 
                    className="menu-toogle"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                </button>

                <nav
                    className={`nav-links ${menuOpen ? "nav-open" : ""}`}
                    aria-label="Main navigation"
                >
                    {links.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname === link.href || pathname.startsWith(`${link.href}/`);
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
                        className="nav-cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Let&apos;s Talk <span>↗</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}