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
                        <ScrollReveal>
                            <span className={styles.category}>{project.category}</span>
                        </ScrollReveal>
                        <TextReveal
                            text={project.title}
                            tag="h1"
                            className={styles.title}
                            delay={100}
                        />
                        <ScrollReveal delay={500}>
                            <div className={styles.meta}>
                                <span>{project.year}</span>
                                <span className={styles.metaDivider}>•</span>
                                <span>{project.tools.join(', ')}</span>
                            </div>
                        </ScrollReveal>
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

                    {/* Description */}
                    <ScrollReveal delay={300}>
                        <div className={styles.description}>
                            <p>{project.description}</p>
                        </div>
                    </ScrollReveal>

                    {/* External Link */}
                    {project.link && project.link !== '#' && (
                        <ScrollReveal delay={400}>
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
