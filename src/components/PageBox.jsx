'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';
import styles from './PageBox.module.css';

export default function PageBox({ children, className = '' }) {
    return (
        <>
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
