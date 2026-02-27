'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CursorTrail.module.css';

export default function CursorTrail() {
    const [dots, setDots] = useState([]);
    const [mounted, setMounted] = useState(false);
    const idCounter = useRef(0);

    useEffect(() => {
        setMounted(true);
        // Only on desktop with hover
        if (window.matchMedia('(hover: none)').matches || window.innerWidth < 1024) return;

        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e) => {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only create dots when moving fast enough (every ~20px)
            if (dist < 20) return;

            lastX = e.clientX;
            lastY = e.clientY;

            const id = idCounter.current++;
            setDots((prev) => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);

            setTimeout(() => {
                setDots((prev) => prev.filter((d) => d.id !== id));
            }, 600);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!mounted) return null;

    return (
        <div className={styles.trailContainer}>
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className={styles.dot}
                    style={{ left: dot.x, top: dot.y }}
                />
            ))}
        </div>
    );
}
