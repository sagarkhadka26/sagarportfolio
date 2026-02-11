'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            {/* Logo removed as requested - handled by parent header */}

            <ul className={styles.navLinks}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.active : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <button className={styles.menuButton} aria-label="Toggle menu" id="nav-menu-toggle">
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
            </button>
        </nav>
    );
}
