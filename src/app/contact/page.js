'use client';

import { socials, contactInfo } from '@/lib/socials';
import { toolIcons } from '@/lib/toolIcons';
import PageBox from '@/components/PageBox';
import ScrollReveal from '@/components/ScrollReveal';
import Footer from '@/components/Footer';
import { useToast } from '@/components/Toast';
import Image from 'next/image';
import styles from './page.module.css';

export default function ContactPage() {
    const { showToast } = useToast();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(contactInfo.email);
        showToast('Email copied to clipboard!');
    };

    return (
        <>
            <PageBox>
                <div className={styles.pageHeader}>
                    <ScrollReveal>
                        <h1 className={styles.pageTitle}>Let&apos;s Connect</h1>
                        <p className={styles.pageSubtitle}>
                            Have a project in mind? Let&apos;s build something meaningful together.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.grid}>
                    {/* Left: Contact Info */}
                    <ScrollReveal>
                        <div className={styles.contactCard}>
                            <div className={styles.locationInfo}>
                                <div className={styles.locationDot}></div>
                                <span>Kathmandu, Nepal</span>
                            </div>

                            <h2 className={styles.contactHeading}>Get in touch</h2>

                            <div className={styles.contactMethods}>
                                <div className={styles.methodItem}>
                                    <span className={styles.methodLabel}>Email</span>
                                    <div className={styles.emailWrapper}>
                                        <a href={`mailto:${contactInfo.email}`} className={styles.emailLink}>
                                            {contactInfo.email}
                                        </a>
                                        <button
                                            className={styles.copyBtn}
                                            onClick={handleCopyEmail}
                                            title="Copy email"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.methodItem}>
                                    <span className={styles.methodLabel}>WhatsApp</span>
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={styles.methodLink}>
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Social Links */}
                    <ScrollReveal delay={100}>
                        <div className={styles.socialCard}>
                            <h3 className={styles.socialHeading}>Socials</h3>
                            <div className={styles.socialGrid}>
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        style={{ '--brand-color': social.color }}
                                    >
                                        <div className={styles.socialIcon} style={{ color: social.color }}>
                                            {social.icon}
                                        </div>
                                        <span className={styles.socialName}>{social.name}</span>
                                        <svg className={styles.arrowIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.servicesGrid}>
                    <ScrollReveal delay={100}>
                        <div className={styles.serviceItem}>
                            <h3>UI/UX Design</h3>
                            <p>Crafting intuitive and visually stunning interfaces for web and mobile products.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className={styles.serviceItem}>
                            <h3>Web Development</h3>
                            <p>Building responsive and high-performance websites using the latest technologies.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <div className={styles.serviceItem}>
                            <h3>Product Strategy</h3>
                            <p>Defining the roadmap and user journey to ensure your product hits the mark.</p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={200}>
                    <div className={styles.ctaSection}>
                        {/* Background Icons Layer */}
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

                        <h2>Have a specific project in mind?</h2>
                        <p>I&apos;m currently available for freelance projects and full-time opportunities.</p>
                        <a href={`mailto:${contactInfo.email}`} className={styles.ctaButton}>
                            Start a Conversation
                        </a>
                    </div>
                </ScrollReveal>
            </PageBox>

            <Footer />
        </>
    );
}
