'use client';

import { useState } from 'react';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import { getProjectsByCategory } from '@/lib/projects';
import styles from './ProjectsGrid.module.css';

export default function ProjectsGrid({
    initialCategory = 'All',
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
                <FilterBar
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            )}

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={project.slug}>
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>

            {projects.length === 0 && (
                <div className={styles.emptyState}>
                    <p>Projects in this category are coming soon.</p>
                    <p className={styles.emptyHint}>Stay tuned for updates!</p>
                </div>
            )}
        </div>
    );
}
