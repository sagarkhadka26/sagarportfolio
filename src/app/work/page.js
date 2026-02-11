'use client';

import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectsGrid from '@/components/ProjectsGrid';
import PageBox from '@/components/PageBox';
import styles from './page.module.css';

export default function WorkPage() {
    return (
        <>
            <PageBox>
                <div className={styles.pageHeader}>
                    <ScrollReveal>
                        <h1 className={styles.pageTitle}>Work</h1>
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
