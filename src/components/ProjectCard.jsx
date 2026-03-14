'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './TextReveal';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index = 0 }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link
            href={`/work/${project.slug}`}
            className={styles.card}
        >
            <div className={styles.imageWrapper}>
                {project.thumbnail ? (
                    <>
                        <div
                            className={`${styles.imagePlaceholder}`}
                            style={{ opacity: imageLoaded ? 0 : 1 }}
                        />
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            onLoad={() => setImageLoaded(true)}
                            className={`${styles.projectImg} ${imageLoaded ? styles.visibleImg : styles.hiddenImg}`}
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                        />
                    </>
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderText}>{project.title}</span>
                    </div>
                )}
            </div>


            <div className={styles.content}>
                <TextReveal text={project.title} tag="h3" className={styles.title} />

                <div className={styles.footer}>
                    <span className={styles.cta}>VIEW PROJECT ↗</span>
                </div>
            </div>
        </Link>
    );
}
