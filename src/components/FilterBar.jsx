'use client';

import { categories, activeCategories } from '@/lib/projects';
import styles from './FilterBar.module.css';

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
                        <span className={styles.pillText}>{cat}</span>
                        {!isActive && <span className={styles.badge}>Soon</span>}
                    </button>
                );
            })}
        </div>
    );
}
