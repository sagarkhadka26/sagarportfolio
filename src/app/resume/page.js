'use client';

import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import PageBox from '@/components/PageBox';
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
            institution: 'Nepal College of Information Technology (NCIT), Balkumari',
            period: 'Sep, 2018 - Jan, 2024',
        },
    ];

    const skills = [
        'UI Design', 'UX Research', 'Prototyping', 'Wireframing',
        'Design Systems', 'Responsive Design', 'User Testing', 'Interaction Design',
    ];

    const tools = [
        'Figma', 'Adobe XD', 'Photoshop', 'Canva', 'JavaScript', 'Rive',
    ];

    return (
        <>
            <PageBox>
                <div className={styles.pageHeader}>
                    <ScrollReveal>
                        <h1 className={styles.pageTitle}>Resume</h1>
                        <p className={styles.pageSubtitle}>A summary of my professional journey and capabilities.</p>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <div style={{ marginTop: '24px' }}>
                            <Button
                                href="/resume.pdf"
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
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                        <div className={styles.pdfViewer}>
                            <iframe
                                src="/assets/resume/Sagar_Kumar_Khadka_UIUX_Resume.pdf#toolbar=0"
                                width="100%"
                                height="800px"
                                style={{
                                    border: '1px solid var(--border)',
                                    borderRadius: '12px',
                                    marginTop: '40px'
                                }}
                                title="Sagar Kumar Khadka Resume"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.experienceSectionFull}>
                    <ScrollReveal>
                        <h2 className={`${styles.sectionHeading} ${styles.centeredHeading}`}>Experience</h2>
                        <div className={styles.experienceHorizontal}>
                            {experience.map((item, i) => (
                                <div key={i} className={styles.horizontalEntry}>
                                    <h3 className={styles.entryTitle}>{item.role}</h3>
                                    <p className={styles.entryCompany}>{item.company} • {item.period}</p>
                                    <p className={styles.entryDesc}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.sectionFull}>
                    <ScrollReveal>
                        <h2 className={`${styles.sectionHeading} ${styles.centeredHeading}`}>Education</h2>
                        <div className={styles.educationVertical}>
                            {education.map((item, i) => (
                                <div key={i} className={styles.centeredEntry}>
                                    <h3 className={styles.entryTitle}>{item.degree}</h3>
                                    <p className={styles.entryCompany}>{item.institution} • {item.period}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                <div className={styles.sectionFull}>
                    <ScrollReveal delay={100}>
                        <h2 className={`${styles.sectionHeading} ${styles.centeredHeading}`}>Tools & Skills</h2>
                        <div className={styles.centeredPills}>
                            <div className={styles.pillGridCentered}>
                                {[...skills, ...tools].map((item) => (
                                    <span key={item} className={styles.pill}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </PageBox>

            <Footer />
        </>
    );
}
