import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <Link href="/" className="brand">
                        Revora<span>.</span>
                    </Link>
                    <p>
                        We turn bold ideas into meaningful digital experiences.
                    </p>
                </div>

                <div className="footer-nav">
                    <p className="footer-heading">Explore</p>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className="footer-contact">
                    <p className="footer-heading">Let&apos;s connect</p>
                    <a href="mailto:revorastudio@gmail.com">
                        revorastudio@gmail.com
                    </a>
                    <p>Jakarta, Indonesia</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Revora Studio.</p>
                <p>Designed with intention</p>
            </div>
        </footer>
    );
}