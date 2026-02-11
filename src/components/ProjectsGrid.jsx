'use client';

import { useState } from 'react';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { getProjectsByCategory } from '@/data/projects';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid({
    initialCategory = 'Web Products',
    limit = null,
    showFilter = true
}) {
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    // Get projects and apply limit if provided
    let projects = getProjectsByCategory(selectedCategory);
    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
        <div className={styles.wrapper}>
            {showFilter && (
                <ScrollReveal delay={100}>
                    <FilterBar
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                </ScrollReveal>
            )}

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>

            {projects.length === 0 && (
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>✦</div>
                    <p>Projects in this category are coming soon.</p>
                    <p className={styles.emptyHint}>Stay tuned for updates!</p>
                </div>
            )}
        </div>
    );
}
