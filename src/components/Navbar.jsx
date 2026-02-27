'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar({ shrinkOnScroll = false, forceMobile = false }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!shrinkOnScroll) return;
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [shrinkOnScroll]);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const backdrop = menuOpen && mounted ? createPortal(
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />,
        document.body
    ) : null;

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${forceMobile ? styles.forceMobile : ''}`}>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''} ${forceMobile ? styles.showHamburger : ''}`}
                    aria-label="Toggle menu"
                    id="nav-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </button>
            </nav>
            {backdrop}
        </>
    );
}
