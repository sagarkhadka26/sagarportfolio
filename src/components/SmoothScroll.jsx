'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const ScrollContext = createContext({ lenis: null });

export const useScroll = () => useContext(ScrollContext);

export default function SmoothScroll({ children }) {
    const [lenis, setLenis] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        setLenis(lenisInstance);

        let rafId;
        function raf(time) {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return (
        <ScrollContext.Provider value={{ lenis }}>
            {children}
        </ScrollContext.Provider>
    );
}
