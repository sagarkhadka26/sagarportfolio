import Image from 'next/image';
import PageBox from '@/components/PageBox';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';
import TextReveal from '@/components/TextReveal';
import { projects, getProjectBySlug } from '@/lib/projects';
import styles from './page.module.css';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    return {
        title: project
            ? `${project.title} — Sagar Kumar Khadka`
            : 'Project Not Found',
        description: project?.description,
    };
}

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <>
                <PageBox>
                    <div className={styles.notFound}>
                        <h1>Project not found</h1>
                        <Button href="/work" variant="primary">
                            Back to Work
                        </Button>
                    </div>
                </PageBox>
                <Footer />
            </>
        );
    }

    // Find prev/next projects
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject =
        currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <>
            <PageBox>
                {/* Top Back Button just below logo level */}
                <div className={styles.topNav}>
                    <Button href="/work" variant="ghost" size="sm" className={styles.backLink}>
                        ← Back to Work
                    </Button>
                </div>

                <article className={styles.article}>
                    {/* Project Header */}
                    <div className={styles.projectHeader}>

                        <TextReveal
                            text={project.title}
                            tag="h1"
                            className={styles.title}
                            delay={100}
                        />

                    </div>

                    {/* Hero Image */}
                    <ScrollReveal delay={200}>
                        <div className={styles.heroImage}>
                            {project.thumbnail ? (
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    className={styles.projectImg}
                                    priority
                                />
                            ) : (
                                <div className={styles.imagePlaceholder}>
                                    <span>{project.title}</span>
                                </div>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Figma Link — right below image */}
                    {project.figmaLink && (
                        <ScrollReveal delay={250}>
                            <div className={styles.figmaLinkRow}>
                                <Button href={project.figmaLink} external variant="primary" size="md">
                                    <svg width="16" height="16" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
                                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor"/>
                                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor"/>
                                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor"/>
                                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor"/>
                                    </svg>
                                    Open in Figma
                                </Button>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Project Info */}
                    <ScrollReveal delay={300}>
                        <div className={styles.description}>
                            <p>{project.description}</p>
                        </div>
                    </ScrollReveal>

                    {/* Project Metadata */}
                    {(project.client || project.industry || project.duration) && (
                        <ScrollReveal delay={350}>
                            <div className={styles.metaGrid}>
                                {project.client && (
                                    <div className={styles.metaCard}>
                                        <span className={styles.metaLabel}>Client</span>
                                        <span className={styles.metaValue}>{project.client}</span>
                                    </div>
                                )}
                                {project.industry && (
                                    <div className={styles.metaCard}>
                                        <span className={styles.metaLabel}>Industry</span>
                                        <span className={styles.metaValue}>{project.industry}</span>
                                    </div>
                                )}
                                {project.duration && (
                                    <div className={styles.metaCard}>
                                        <span className={styles.metaLabel}>Duration</span>
                                        <span className={styles.metaValue}>{project.duration}</span>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    )}

                    {/* About / Challenge / Solution */}
                    {project.about && (
                        <ScrollReveal delay={400}>
                            <div className={styles.sectionBlock}>
                                <h3 className={styles.sectionLabel}>About the Client</h3>
                                <p>{project.about}</p>
                            </div>
                        </ScrollReveal>
                    )}

                    {project.challenge && (
                        <ScrollReveal delay={450}>
                            <div className={styles.sectionBlock}>
                                <h3 className={styles.sectionLabel}>The Challenge</h3>
                                <p>{project.challenge}</p>
                            </div>
                        </ScrollReveal>
                    )}

                    {project.solution && (
                        <ScrollReveal delay={500}>
                            <div className={styles.sectionBlock}>
                                <h3 className={styles.sectionLabel}>Our Solution</h3>
                                <p>{project.solution}</p>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Live Project Link */}
                    {project.link && project.link !== '#' && (
                        <ScrollReveal delay={550}>
                            <div className={styles.linkSection}>
                                <Button href={project.link} external variant="primary" size="md">
                                    View Live Project
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M1 13L13 1M13 1H3M13 1V11"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Bottom Back Button */}
                    <div className={styles.bottomSection}>
                        <ScrollReveal>
                            <Button href="/work" variant="primary">
                                Back to Projects
                            </Button>
                        </ScrollReveal>
                    </div>

                    {/* Prev / Next Navigation */}
                    <ScrollReveal delay={500}>
                        <div className={styles.projectNav}>
                            {prevProject ? (
                                <Button href={`/work/${prevProject.slug}`} variant="ghost">
                                    ← {prevProject.title}
                                </Button>
                            ) : (
                                <div />
                            )}
                            {nextProject ? (
                                <Button href={`/work/${nextProject.slug}`} variant="ghost">
                                    {nextProject.title} →
                                </Button>
                            ) : (
                                <div />
                            )}
                        </div>
                    </ScrollReveal>
                </article>
            </PageBox>

            <Footer />
        </>
    );
}
