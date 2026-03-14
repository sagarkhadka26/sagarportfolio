'use client';

import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageBox from '@/components/PageBox';
import TextReveal from '@/components/TextReveal';
import styles from './page.module.css';

export default function WorkPage() {
    return (
        <>
            <PageBox>
                <div className={styles.pageHeader}>
                    <TextReveal
                        text="My Projects"
                        tag="h1"
                        className={styles.title}
                        delay={100}
                    />
                    <ScrollReveal delay={300}>
                        <p className={styles.pageSubtitle}>
                            A collection of projects I&apos;ve designed — from web products to mobile experiences.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.projectsWrapper}>
                    {/* Unified component handles filtering and grid */}
                    <ProjectsGrid initialCategory="Web Products" />
                </div>
            </PageBox>

            <Footer />
        </>
    );
}
