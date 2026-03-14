'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Navbar from './Navbar';
import styles from './PageBox.module.css';

export default function PageBox({ children, className = '' }) {
    const [showPillNav, setShowPillNav] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let lastState = false;
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            if (isScrolled !== lastState) {
                setShowPillNav(isScrolled);
                lastState = isScrolled;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Portal the floating nav to body so it escapes the container's stacking context
    const floatingNav = mounted ? createPortal(
        <div className={`${styles.fixedPillNav} ${showPillNav ? styles.visible : ''}`}>
            <Navbar forceMobile={true} />
        </div>,
        document.body
    ) : null;

    return (
        <>
            {floatingNav}
            <div className={styles.container}>
                <div className={`${styles.card} ${className}`}>
                    <div className={styles.glowEffect} />
                    <div className={styles.cardInner}>
                        <header className={styles.header}>
                            <Link href="/" className={styles.logo}>
                                <Image src="/assets/icon/logo.svg" alt="Sagar Logo" width={40} height={40} priority />
                            </Link>
                            <div className={styles.navbarWrapper}>
                                <Navbar />
                            </div>
                        </header>
                        <div className={styles.content}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
