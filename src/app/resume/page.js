'use client';

import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import PageBox from '@/components/PageBox';
import TextReveal from '@/components/TextReveal';
import { toolIcons } from '@/lib/toolIcons';
import styles from './page.module.css';

export default function ResumePage() {
    const experience = [
        {
            role: 'UI/UX Designer',
            company: 'AntlrByte Technologies',
            period: 'Jan, 2025 - Nov, 2025',
            description: 'Collaborated with startups and small businesses to design user-friendly websites and mobile apps, ensuring intuitive user flows and appealing interfaces. Conducted user research, created wireframes and prototypes, and implemented user-centered design practices.',
        },
        {
            role: 'Data Annotator',
            company: 'CloudFactory',
            period: 'Oct, 2023 - Apr, 2024',
            description: 'Used different annotation tools for machine learning applications and performed task on different multimedia data. Communicated effectively with team leaders and stakeholders throughout the process.',
        },
    ];

    const education = [
        {
            degree: 'Bachelors in Software Engineering',
            institution: 'Nepal College of Information Technology (NCIT)',
            period: '2018 - 2024',
        },
    ];

    const skills = [
        'UI Design', 'UX Research', 'Prototyping', 'Wireframing',
        'Design Systems', 'Responsive Design', 'User Testing', 'Interaction Design',
    ];

    return (
        <>
            <PageBox>
                <div className={styles.pageHeader}>
                    <TextReveal
                        text="Resume"
                        tag="h1"
                        className={styles.pageTitle}
                        delay={100}
                    />
                    <div className={styles.headerRow}>
                        <ScrollReveal delay={300}>
                            <p className={styles.pageSubtitle}>A summary of my professional journey, expertise, and the tools I use to bring ideas to life.</p>
                        </ScrollReveal>
                        <ScrollReveal delay={400}>
                            <Button
                                href="/assets/resume/Sagar_Kumar_Khadka_UIUX_Resume.pdf"
                                variant="primary"
                                size="md"
                                external
                                icon={
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                }
                            >
                                Download PDF
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* PDF Viewer Section - Prioritized at Top */}
                <section className={styles.downloadSection}>
                    <ScrollReveal>
                        <div className={styles.pdfViewer}>
                            <iframe
                                src="/assets/resume/Sagar_Kumar_Khadka_UIUX_Resume.pdf#view=FitH"
                                width="100%"
                                height="600px"
                                style={{ border: 'none' }}
                                title="Sagar Kumar Khadka Resume"
                            />
                        </div>
                    </ScrollReveal>
                </section>

                <div className={styles.resumeGrid}>
                    {/* Main Content: Experience & Education */}
                    <div className={styles.mainContent}>
                        <section className={styles.section}>
                            <ScrollReveal>
                                <TextReveal text="Professional Experience" tag="h2" className={styles.sectionHeading} />
                                <div className={styles.timeline}>
                                    {experience.map((item, i) => (
                                        <div key={i} className={styles.timelineItem}>
                                            <div className={styles.timelineDot} />
                                            <div className={styles.entryHeader}>
                                                <TextReveal text={item.role} tag="h3" className={styles.entryTitle} />
                                                <span className={styles.entryPeriod}>{item.period}</span>
                                            </div>
                                            <p className={styles.entryCompany}>{item.company}</p>
                                            <p className={styles.entryDesc}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </section>

                        <section className={styles.section}>
                            <ScrollReveal delay={100}>
                                <TextReveal text="Education" tag="h2" className={styles.sectionHeading} />
                                <div className={styles.timeline}>
                                    {education.map((item, i) => (
                                        <div key={i} className={styles.timelineItem}>
                                            <div className={styles.timelineDot} />
                                            <div className={styles.entryHeader}>
                                                <TextReveal text={item.degree} tag="h3" className={styles.entryTitle} />
                                                <span className={styles.entryPeriod}>{item.period}</span>
                                            </div>
                                            <p className={styles.entryCompany}>{item.institution}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </section>
                    </div>

                    {/* Sidebar: Skills, Tools, and Download */}
                    <aside className={styles.sidebar}>
                        <ScrollReveal delay={200}>
                            <div className={styles.sidebarSection}>
                                <TextReveal text="Core Skills" tag="h2" className={styles.sidebarHeading} />
                                <div className={styles.pillGrid}>
                                    {skills.map((skill) => (
                                        <span key={skill} className={styles.pill}>{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.sidebarSection}>
                                <TextReveal text="Software & Tools" tag="h2" className={styles.sidebarHeading} />
                                <div className={styles.toolList}>
                                    {toolIcons.map((tool) => (
                                        <div key={tool.name} className={styles.toolItem}>
                                            <div className={styles.toolIcon}>
                                                <Image
                                                    src={tool.src}
                                                    alt={tool.name}
                                                    width={24}
                                                    height={24}
                                                />
                                            </div>
                                            <span className={styles.toolName}>{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </aside>
                </div>

                <section className={styles.contactSection}>
                    <ScrollReveal>
                        <Button href="/contact" variant="primary" size="lg">
                            Get in Touch <span style={{ marginLeft: '8px', fontSize: '1.2em' }}>↗</span>
                        </Button>
                    </ScrollReveal>
                </section>
            </PageBox>

            <Footer />
        </>
    );
}
