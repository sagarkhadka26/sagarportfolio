'use client';

import Link from 'next/link';
/* Removed next/image import if not using it, or keep for future */
import ScrollReveal from './ScrollReveal';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index = 0 }) {
    return (
        <ScrollReveal delay={index * 50}>
            <Link
                href={`/work/${project.slug}`}
                className={styles.card}
            >
                <div className={styles.imageWrapper}>
                    {project.thumbnail ? (
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                        /* Style handled by CSS .imageWrapper img */
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <span className={styles.placeholderText}>{project.title}</span>
                        </div>
                    )}
                </div>

                <div className={styles.info}>
                    <h3 className={styles.title}>{project.title}</h3>

                    {/* Restored Link Icon */}
                    <svg
                        className={styles.linkIcon}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 13L13 1M13 1H3M13 1V11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </Link>
        </ScrollReveal>
    );
}
