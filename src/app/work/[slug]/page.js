import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { projects, getProjectBySlug } from '@/data/projects';
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
                <div className={styles.pageCard}>
                    <Navbar />
                    <div className={styles.notFound}>
                        <h1>Project not found</h1>
                        <Button href="/work" variant="primary">
                            Back to Work
                        </Button>
                    </div>
                </div>
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
            <div className={styles.pageCard}>
                <Navbar />
            </div>

            <article className={styles.article}>
                <div className="container">
                    {/* Project Header */}
                    <div className={styles.projectHeader}>
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <div className={styles.meta}>
                            <span>{project.year}</span>
                            <span className={styles.metaDivider}>•</span>
                            <span>{project.tools.join(', ')}</span>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className={styles.heroImage}>
                        <div className={styles.imagePlaceholder}>
                            <span>{project.title}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>

                    {/* External Link */}
                    {project.link && project.link !== '#' && (
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
                    )}

                    {/* Prev / Next Navigation */}
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
                </div>
            </article>

            <Footer />
        </>
    );
}
