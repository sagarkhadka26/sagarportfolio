'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import styles from './PageBox.module.css';

export default function PageBox({ children, className = '' }) {
    return (
        <div className={styles.container}>
            <div className={`${styles.card} ${className}`}>
                <div className={styles.cardInner}>
                    <header className={styles.header}>
                        <Link href="/" className={styles.logo}>
                            <img src="/assets/icon/logo.svg" alt="Sagar Logo" />
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
    );
}
