'use client';

import { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`${styles.loader} ${!isLoading ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <div className={styles.logoMark}>
                    <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="var(--text-primary)" />
                        <text
                            x="20"
                            y="26"
                            textAnchor="middle"
                            fill="white"
                            fontSize="20"
                            fontWeight="700"
                            fontFamily="Inter, sans-serif"
                        >
                            S
                        </text>
                    </svg>
                </div>
                <div className={styles.dots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </div>
    );
}
