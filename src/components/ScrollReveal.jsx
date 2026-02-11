'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05, // Lower threshold for easier trigger
                rootMargin: '0px 0px -20px 0px',
            }
        );

        observer.observe(element);

        // Fallback: If for some reason it's not revealed after 2 seconds, reveal it
        const timer = setTimeout(() => setIsVisible(true), 1500 + delay);

        return () => {
            if (element) observer.unobserve(element);
            clearTimeout(timer);
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'revealed' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
