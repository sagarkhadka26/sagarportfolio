'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects as allProjects } from '@/lib/projects';
import styles from './ProjectsShowcase.module.css';

const DEFAULT_FEATURED_SLUGS = [
  'yewon-education-centre',
  'supadeurali-pet-industries',
  'dolpo-ice-cream',
  'legal-links-consultancy'
];

export default function ProjectsShowcase({ projects: customProjects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const imageRefs = useRef([]);

  // Use custom projects if provided, otherwise fallback to featured defaults
  const showcaseProjects = customProjects || DEFAULT_FEATURED_SLUGS.map(slug => 
    allProjects.find(p => p.slug === slug)
  ).filter(Boolean);

  // Sync scroll position with active index for mobile carousel
  useEffect(() => {
    const options = {
      root: carouselRef.current,
      threshold: 0.6, // Trigger when 60% of the image is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    }, options);

    const currentRefs = imageRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Handle clicking a title (especially useful for vertical stack on mobile)
  const handleTitleClick = (e, index) => {
    // If it's a mobile view (we can detect by checking if the carousel is scrollable)
    if (window.innerWidth <= 1024 && imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  if (showcaseProjects.length === 0) return null;

  return (
    <div className={styles.showcase}>
      {/* LEFT COLUMN: Project Titles */}
      <div className={styles.titleList}>
        {showcaseProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`${styles.titleItem} ${activeIndex === index ? styles.titleItemActive : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={(e) => handleTitleClick(e, index)}
          >
            <span className={styles.titleIndex}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.titleText}>{project.title}</span>
            <span className={styles.titleArrow}>→</span>
          </Link>
        ))}
      </div>

      {/* RIGHT COLUMN: Image Grid / Mobile Carousel */}
      <div className={styles.imageGrid} ref={carouselRef}>
        {showcaseProjects.map((project, index) => (
          <Link
            key={`img-${project.slug}`}
            href={`/work/${project.slug}`}
            className={`${styles.imageCard} ${activeIndex === index ? styles.imageCardActive : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            ref={(el) => (imageRefs.current[index] = el)}
            data-index={index}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.imageInner}
              priority={index === 0}
            />
            <div className={styles.imageLabel}>
              {project.category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
