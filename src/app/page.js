'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectsGrid from '@/components/ProjectsGrid';
import TextReveal from '@/components/TextReveal';
import { toolIcons } from '@/lib/toolIcons';
import styles from './page.module.css';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export default function Home() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);

  // Easter egg: click logo 5 times
  const handleLogoClick = (e) => {
    e.preventDefault();
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setEasterEgg(true);
      setLogoClicks(0);
      setTimeout(() => setEasterEgg(false), 3000);
    }
  };

  const [greeting, setGreeting] = useState('');



  useEffect(() => {
    setGreeting(getGreeting());
  }, []);


  return (
    <>

      {/* Sticky Hero Section */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroContainer}>
          <div className={styles.heroCard}>
            <div className={styles.glowEffect} />
            <div className={styles.heroInner}>
              {/* Header: Logo and Navbar (Static for initial view) */}
              <header className={styles.header}>
                <a href="/" className={styles.logo} onClick={handleLogoClick}>
                  <Image
                    src="/assets/icon/logo.svg"
                    alt="Sagar Logo"
                    width={40}
                    height={40}
                    className={easterEgg ? styles.easterEggLogo : ''}
                    priority
                  />
                </a>
                <div className={styles.navbarWrapper}>
                  <Navbar />
                </div>
              </header>

              {/* Hero Content Grid */}
              <div className={styles.heroContent}>
                {/* Left: Text & CTA */}
                <div className={styles.heroLeft}>
                  <ScrollReveal delay={100}>
                    <p className={styles.heroGreeting}>{greeting || 'Hello'}, I&apos;m</p>
                  </ScrollReveal>
                  <TextReveal
                    text="Sagar Kumar Khadka"
                    tag="h2"
                    className={styles.heroName}
                  />
                  <TextReveal
                    text="UI/UX Designer"
                    tag="h1"
                    className={styles.heroTitle}
                  />

                  <ScrollReveal>
                    <Link href="/resume" className={styles.resumeBtn}>
                      View my Resume
                    </Link>
                  </ScrollReveal>
                </div>

                {/* The Center Image (PLACEHOLDER FOR GRID) */}
                <div aria-hidden="true" style={{ width: '100%', height: '100%' }} />

                <div className={styles.heroRight}>
                  <div className={styles.iconGrid}>
                    {toolIcons.map((tool, i) => (
                      <ScrollReveal key={i} className={styles.toolIconWrapper}>
                        <div className={styles.toolIconInner}>
                          <Image
                            src={tool.src}
                            alt={tool.name}
                            width={44}
                            height={44}
                            className={styles.toolIconImg}
                          />
                          <span className={styles.tooltip}>{tool.name}</span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.heroImage}>
                <ScrollReveal>
                  <Image
                    src="/assets/images/sagar.png"
                    alt="Sagar Kumar Khadka"
                    width={800}
                    height={800}
                    priority
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Slides over Hero) */}
      <div className={styles.contentWrapper}>
        {/* ===== FROM IDEA TO INTERFACE SECTION ===== */}
        <section className={styles.worksSection} id="work">
          <div className={styles.worksCard}>
            <div className={styles.worksInner}>
              <div className={styles.glowEffect} />
              <div className={styles.worksHeader}>
                <TextReveal
                  text="From Idea to Interface"
                  tag="h2"
                  className={styles.sectionTitle}
                  style={{ color: '#000000' }}
                />
                <TextReveal
                  text="Here are some of my Projects"
                  tag="p"
                  className={styles.sectionSubTitle}
                />
              </div>

              {/* Unified component handles filtering, grid, and empty states */}
              <ProjectsGrid
                initialCategory="All"
                showFilter={false}
                limit={6}
              />

              <ScrollReveal className={styles.viewAllWrapper}>
                <Link href="/work" className={styles.viewAllBtn}>
                  View All Projects <span>→</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Easter Egg Overlay */}
      {easterEgg && (
        <div className={styles.easterEggOverlay}>
          <div className={styles.easterEggContent}>
            <span className={styles.easterEggEmoji}>🎉</span>
            <p>You found the secret! ✨</p>
            <p className={styles.easterEggSub}>Built with passion by Sagar</p>
          </div>
        </div>
      )}
    </>
  );
}
