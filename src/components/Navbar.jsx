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

export default function Navbar({ forceMobile = false }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const backdrop = menuOpen && mounted ? createPortal(
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />,
        document.body
    ) : null;

    // Portal the dropdown to body so it escapes the navbar's stacking context
    const dropdown = menuOpen && mounted && forceMobile ? createPortal(
        <ul className={`${styles.navLinks} ${styles.forceMobileLinks} ${styles.open}`}>
            {navLinks.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>,
        document.body
    ) : null;

    return (
        <>
            <nav className={`${styles.navbar} ${forceMobile ? styles.forceMobile : ''}`}>
                {/* Only show inline navLinks when NOT in forceMobile mode */}
                {!forceMobile && (
                    <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

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
            {dropdown}
        </>
    );
}

