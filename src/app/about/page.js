'use client';

import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import PageBox from '@/components/PageBox';
import styles from './page.module.css';

export default function AboutPage() {
    const toolIcons = [
        { name: 'Adobe XD', src: '/assets/icon/xd.svg' },
        { name: 'Photoshop', src: '/assets/icon/photoshop.svg' },
        { name: 'Figma', src: '/assets/icon/figma.svg' },
        { name: 'Framer', src: '/assets/icon/framer.svg' },
        { name: 'Canva', src: '/assets/icon/canva.svg' },
        { name: 'JavaScript', src: '/assets/icon/js.svg' },
        { name: 'Flutter', src: '/assets/icon/flutter.svg' },
        { name: 'Rive', src: '/assets/icon/rive.svg' },
    ];

    return (
        <>
            <PageBox>
                <div className={styles.grid}>
                    {/* Left: Bio */}
                    <div className={styles.bio}>
                        <ScrollReveal>
                            <h2 className={styles.bioHeading}>Designer by day, <br />pixel-perfectionist by night. ✨</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={100}>
                            <p className={styles.bioText}>
                                Hi, I&apos;m Sagar. I don&apos;t just design screens; I craft stories that users love to live in.
                                Based in the heart of Nepal, I spend my time balancing clean minimal aesthetics with
                                functional complexity.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className={styles.bioText}>
                                When I&apos;m not pushing pixels in Figma or prototyping slick animations, you&apos;ll probably
                                find me exploring the latest UI trends or geeking out over motion design. I believe
                                the best products aren&apos;t just used — they&apos;re felt.
                            </p>
                        </ScrollReveal>

                        {/* Tools Section Integrated into Bio flow or below */}
                        <ScrollReveal delay={300}>
                            <div className={styles.toolsSection}>
                                <div className={styles.toolsList}>
                                    {toolIcons.map((tool, i) => (
                                        <div key={i} className={styles.toolIconWrapper}>
                                            <img
                                                src={tool.src}
                                                alt={tool.name}
                                                className={styles.toolIconImg}
                                            />
                                            <span className={styles.tooltip}>{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Illustration/Photo */}
                    <ScrollReveal delay={150}>
                        <div className={styles.photoWrapper}>
                            <div className={styles.photoContainer}>
                                <img
                                    src="/assets/images/sagar.png"
                                    alt="Sagar Kumar Khadka"
                                    className={styles.aboutImage}
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </PageBox>

            <Footer />
        </>
    );
}
