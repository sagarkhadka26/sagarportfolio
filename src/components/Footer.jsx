import Link from 'next/link';
import { socials, contactInfo } from '@/data/socials';
import ScrollReveal from './ScrollReveal';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ScrollReveal delay={100}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>
                            Lets build meaningful digital experiences together
                        </h2>

                        <div className={styles.contactSocialRow}>
                            <div className={styles.leftPillGroup}>
                                <div className={styles.contactPills}>
                                    <a href={`mailto:${contactInfo.email}`} className={styles.contactItem}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="M22 4L12 13L2 4" />
                                        </svg>
                                        {contactInfo.email}
                                    </a>
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                        {contactInfo.phone}
                                    </a>
                                </div>
                                <Link href="/resume" className={styles.resumeButton}>
                                    Check My Resume
                                </Link>
                            </div>

                            <div className={styles.socialLinks}>
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Copyright & Divider with Sparkle */}
                <div className={styles.footerBottom}>
                    <div className={styles.divider}>
                        <div className={styles.sparkle}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <span>© Sagar Kumar Khadka 2026. All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
