'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectsGrid from '@/components/ProjectsGrid';
import styles from './page.module.css';

export default function Home() {
  // Tool icons
  const toolIcons = [
    { name: 'Figma', src: '/assets/icon/figma.svg' },
    { name: 'Adobe XD', src: '/assets/icon/xd.svg' },
    { name: 'Photoshop', src: '/assets/icon/photoshop.svg' },
    { name: 'Framer', src: '/assets/icon/framer.svg' },
    { name: 'Canva', src: '/assets/icon/canva.svg' },
    { name: 'JavaScript', src: '/assets/icon/js.svg' },
    { name: 'Flutter', src: '/assets/icon/flutter.svg' },
    { name: 'Rive', src: '/assets/icon/rive.svg' },
  ];

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroCard}>
          <div className={styles.heroInner}>
            {/* Header: Logo and Navbar */}
            <header className={styles.header}>
              <Link href="/" className={styles.logo}>
                <img src="/assets/icon/logo.svg" alt="Sagar Logo" />
              </Link>
              <div className={styles.navbarWrapper}>
                <Navbar />
              </div>
            </header>

            {/* Hero Content Grid */}
            <div className={styles.heroContent}>
              {/* Left: Text & CTA */}
              <div className={styles.heroLeft}>
                <ScrollReveal delay={100}>
                  <h2 className={styles.heroName}>Sagar Kumar Khadka</h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <h1 className={styles.heroTitle}>UI/UX Designer</h1>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <Link href="/resume" className={styles.resumeBtn}>
                    View my Resume
                  </Link>
                </ScrollReveal>
              </div>

              {/* The Overlay Image (Absolute on desktop, relative on mobile) */}
              <div className={styles.heroImage}>
                <ScrollReveal delay={400}>
                  <img
                    src="/assets/images/sagar.png"
                    alt="Sagar Kumar Khadka"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </ScrollReveal>
              </div>

              {/* Spacer for Image */}
              <div className={styles.heroSpacer}></div>

              {/* Right: Icons */}
              <div className={styles.heroRight}>
                <div className={styles.iconLayout}>
                  {/* Top Row: 4 icons */}
                  <div className={styles.iconRow}>
                    {toolIcons.slice(0, 4).map((tool, i) => (
                      <ScrollReveal key={i} delay={500 + i * 50} className={styles.toolIconWrapper}>
                        <img
                          src={tool.src}
                          alt={tool.name}
                          className={styles.toolIconImg}
                        />
                        <span className={styles.tooltip}>{tool.name}</span>
                      </ScrollReveal>
                    ))}
                  </div>
                  {/* Bottom Row: 4 icons */}
                  <div className={styles.iconRow}>
                    {toolIcons.slice(4).map((tool, i) => (
                      <ScrollReveal key={i} delay={700 + i * 50} className={styles.toolIconWrapper}>
                        <img
                          src={tool.src}
                          alt={tool.name}
                          className={styles.toolIconImg}
                        />
                        <span className={styles.tooltip}>{tool.name}</span>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== RECENT WORKS SECTION ===== */}
      <section className={`${styles.worksSection} section`}>
        <div className={styles.worksCard}>
          <div className={styles.worksInner}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>From Idea to Interface</h2>
            </ScrollReveal>

            {/* Unified component handles filtering, grid, and empty states */}
            <ProjectsGrid
              initialCategory="Web Products"
              limit={6}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
