'use client';

import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useScroll } from './SmoothScroll';
import Navbar from './Navbar';
import styles from './GlobalNav.module.css';

export default function GlobalNav() {
    const { lenis } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    // Use a ref to track the value for the scroll listener closure
    const lastScrolledRef = useRef(false);

    useEffect(() => {
        setMounted(true);
        if (!lenis) return;

        const handleScroll = ({ scroll }) => {
            const threshold = 400;
            const currentlyScrolled = scroll > threshold;
            
            if (currentlyScrolled !== lastScrolledRef.current) {
                lastScrolledRef.current = currentlyScrolled;
                setIsScrolled(currentlyScrolled);
            }
        };

        lenis.on('scroll', handleScroll);
        return () => {
            lenis.off('scroll', handleScroll);
        };
    }, [lenis]);

    if (!mounted) return null;

    return createPortal(
        <div className={`${styles.fixedPillNav} ${isScrolled ? styles.visible : ''}`}>
            <Navbar forceMobile={true} />
        </div>,
        document.body
    );
}
