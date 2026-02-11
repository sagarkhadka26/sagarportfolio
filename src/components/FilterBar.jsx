'use client';

import styles from './FilterBar.module.css';
import { categories, activeCategories } from '@/data/projects';

export default function FilterBar({ selected, onSelect }) {
    return (
        <div className={styles.filterBar}>
            {categories.map((cat) => {
                const isActive = activeCategories.includes(cat);
                const isSelected = selected === cat;

                return (
                    <button
                        key={cat}
                        className={`${styles.pill} ${isSelected ? styles.selected : ''} ${!isActive ? styles.comingSoon : ''
                            }`}
                        onClick={() => isActive && onSelect(cat)}
                        disabled={!isActive}
                        title={!isActive ? 'Coming Soon' : undefined}
                    >
                        {cat}
                        {!isActive && <span className={styles.badge}>Soon</span>}
                    </button>
                );
            })}
        </div>
    );
}
