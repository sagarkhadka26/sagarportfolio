'use client';

import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import PageBox from '@/components/PageBox';
import TextReveal from '@/components/TextReveal';
import { projects } from '@/lib/projects';
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
                            A collection of my recent projects and design work.
                        </p>
                    </ScrollReveal>
                </div>

                <div className={styles.projectsWrapper}>
                    {/* Reusing the interactive showcase layout from the homepage */}
                    <ProjectsShowcase projects={projects} />
                </div>
            </PageBox>

            <Footer />
        </>
    );
}
