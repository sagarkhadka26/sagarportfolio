'use client';

import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import PageBox from '@/components/PageBox';
import TextReveal from '@/components/TextReveal';
import Image from 'next/image';
import Link from 'next/link';
import { toolIcons } from '@/lib/toolIcons';
import { socials } from '@/lib/socials';
import styles from './page.module.css';

function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    }, [started, target, duration]);

    return { count, ref };
}

function StatItem({ number, suffix, label }) {
    const { count, ref } = useCountUp(number);
    return (
        <div className={styles.statItem} ref={ref}>
            <span className={styles.statNumber}>{count}{suffix}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}

export default function AboutPage() {
    const values = [
        {
            emoji: '🎯',
            title: 'User-Centric',
            desc: 'Designing with empathy, ensuring every pixel serves a purpose for the human on the other side.'
        },
        {
            emoji: '💎',
            title: 'Pixel-Perfect',
            desc: 'A relentless obsession with detail, from spacing systems to micro-interactions and motion.'
        },
        {
            emoji: '🧠',
            title: 'Strategic Thinking',
            desc: 'Beyond aesthetics — aligning design goals with business objectives for real-world impact.'
        }
    ];

    const interests = [
        { emoji: '🍵', label: 'Tea Lover' },
        { emoji: '🎵', label: 'Music Lover' },
        { emoji: '🏀', label: 'Basketball' },
        { emoji: '🎬', label: 'Anime & Films' },
        { emoji: '⛰️', label: 'Hiking' },
        { emoji: '🎨', label: 'Drawing' },
    ];

    return (
        <>
            <PageBox>
                {/* === Hero Header === */}
                <div className={styles.pageHeader}>
                    <TextReveal
                        text="Design that speaks, interfaces that feel."
                        tag="h1"
                        className={styles.pageTitle}
                        delay={100}
                    />
                    <ScrollReveal delay={300}>
                        <p className={styles.pageSubtitle}>
                            I&apos;m Sagar, a UI/UX Designer dedicated to crafting digital experiences that are as functional as they are beautiful.
                        </p>
                    </ScrollReveal>
                </div>

                {/* === Main About Card === */}
                <div className={styles.aboutCard}>
                    <div className={styles.glowEffect} />

                    <div className={styles.grid}>
                        {/* Left: Bio/Story */}
                        <div className={styles.mainContent}>
                            <ScrollReveal>
                                <section className={styles.bioSection}>
                                    <TextReveal text="My Story" tag="h3" className={styles.sectionLabel} />
                                    <p className={styles.bioText}>
                                        Based in Kathmandu, Nepal, my journey into design started with a simple curiosity about how technology impacts people. Today, I specialize in creating clean, minimal aesthetics that solve complex problems.
                                    </p>
                                    <p className={styles.bioText}>
                                        I believe the best products aren&apos;t just &quot;used&quot; — they are felt. My work is a balance of rigorous research, intentional design, and a touch of motion magic.
                                    </p>
                                </section>
                            </ScrollReveal>

                            <ScrollReveal delay={100}>
                                <section className={styles.approachSection}>
                                    <TextReveal text="My Approach" tag="h3" className={styles.sectionLabel} />
                                    <div className={styles.valuesGrid}>
                                        {values.map((v, i) => (
                                            <div key={i} className={styles.valueCard}>
                                                <span className={styles.valueEmoji}>{v.emoji}</span>
                                                <h4>{v.title}</h4>
                                                <p>{v.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </ScrollReveal>


                        </div>

                        {/* Right: Visual */}
                        <ScrollReveal>
                            <div className={styles.visualSide}>
                                <div className={styles.photoContainer}>
                                    <Image
                                        src="/assets/images/sagar.png"
                                        alt="Sagar Kumar Khadka"
                                        width={500}
                                        height={600}
                                        className={styles.aboutImage}
                                        priority
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* === Philosophy Quote (Moved Inside) === */}
                    <ScrollReveal>
                        <div className={styles.cardQuote}>
                            <blockquote className={styles.bigQuote}>
                                &ldquo;Good design is invisible. Great design is <em>unforgettable</em>.&rdquo;
                            </blockquote>
                            <p className={styles.quoteAuthor}>— Somewhere on the internet</p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* === Tool Icons Moved Outside === */}
                <ScrollReveal delay={100}>
                    <div className={styles.toolsSection}>
                        <TextReveal text="Current Stack" tag="h3" className={`${styles.sectionLabel} ${styles.cleanLabel}`} />
                        <div className={styles.toolsList}>
                            {toolIcons.map((tool, i) => (
                                <div key={i} className={styles.toolIconWrapper}>
                                    <div className={styles.toolIconInner}>
                                        <Image
                                            src={tool.src}
                                            alt={tool.name}
                                            width={44}
                                            height={44}
                                            className={styles.toolIconImg}
                                        />
                                    </div>
                                    <span className={styles.toolName}>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>



                {/* === Beyond Design === */}
                <ScrollReveal>
                    <div className={styles.beyondSection}>
                        <div className={styles.beyondHeader}>
                            <TextReveal text="Beyond Design" tag="h2" />
                            <p className={styles.beyondSubtitle}>When I&apos;m not pushing pixels, you&apos;ll find me...</p>
                        </div>
                        <div className={styles.interestsGrid}>
                            {interests.map((item, i) => {
                                // Define animation class based on icon
                                let animClass = '';
                                if (item.label === 'Basketball') animClass = styles.bounce;
                                else if (item.label === 'Tea Lover') animClass = styles.sway;
                                else if (item.label === 'Music Lover') animClass = styles.pulse;
                                else if (item.label === 'Drawing') animClass = styles.wiggle;
                                else if (item.label === 'Hiking') animClass = styles.float;
                                else if (item.label === 'Anime & Films') animClass = styles.pulse;

                                return (
                                    <div key={i} className={styles.interestPill}>
                                        <span className={`${styles.interestEmoji} ${animClass}`}>
                                            {item.emoji}
                                        </span>
                                        <span>{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </ScrollReveal>

                {/* === CTA Section === */}
                <ScrollReveal>
                    <div className={styles.ctaSection}>
                        {/* Dispersed Background Icons */}
                        <div className={styles.ctaGridBackground}>
                            {[...socials, ...toolIcons, ...socials, ...toolIcons].slice(0, 18).map((icon, index) => (
                                <div
                                    key={index}
                                    className={`${styles.bgIcon} ${styles[`icon${index}`]}`}
                                >
                                    {icon.icon ? (
                                        icon.icon
                                    ) : (
                                        <Image src={icon.src} alt={icon.name} width={28} height={28} priority={index < 5} />
                                    )}
                                </div>
                            ))}
                        </div>

                        <TextReveal text="Let's build something great together." tag="h2" />
                        <p>I&apos;m always open to new opportunities and exciting projects.</p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get in Touch <span>→</span>
                        </Link>
                    </div>
                </ScrollReveal>
            </PageBox >

            <Footer />
        </>
    );
}
