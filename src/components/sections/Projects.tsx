'use client';

import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/constants';
import SectionHeading from '../ui/SectionHeading';
import { gsap, useGSAP } from '../../lib/gsap';
import ProjectCard from './projects/ProjectCard';
import ProjectLightbox from './projects/ProjectLightbox';
import ProjectIndexNav from './projects/ProjectIndexNav';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Entrance animation for the Sticky Navigator
  useGSAP(
    () => {
      gsap.fromTo(
        '.projects-index-panel',
        { opacity: 0, x: -25 },
        {
          scrollTrigger: {
            trigger: '.projects-index-panel',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: 'power2.out',
        }
      );
    },
    { scope: projectsRef }
  );

  const isScrollingRef = useRef(false);

  // Track active card via viewport checkpoint calculation as user scrolls
  useEffect(() => {
    const updateActiveIndex = () => {
      if (isScrollingRef.current) return;

      const vh = window.innerHeight;
      const focalLine = vh * 0.38; // Focal reading checkpoint line

      let bestIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        // Exact match: the focal line is inside this card
        if (rect.top <= focalLine && rect.bottom > focalLine) {
          bestIndex = i;
          break;
        }

        // Distance from card center to focal line as fallback
        const cardCenter = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(cardCenter - focalLine);
        if (dist < minDistance) {
          minDistance = dist;
          bestIndex = i;
        }
      }

      // Special check for the last card:
      // If the last card is visible and previous card has scrolled past the focal line
      const lastIndex = cardRefs.current.length - 1;
      const lastEl = cardRefs.current[lastIndex];
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect();
        if (lastRect.top < vh * 0.7 && lastRect.bottom > 0) {
          const prevEl = cardRefs.current[lastIndex - 1];
          if (prevEl) {
            const prevRect = prevEl.getBoundingClientRect();
            if (prevRect.bottom <= focalLine || prevRect.top < 0) {
              bestIndex = lastIndex;
            }
          }
        }
      }

      setActiveIndex(bestIndex);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveIndex();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToProject = (index: number) => {
    setActiveIndex(index);
    isScrollingRef.current = true;
    const element = cardRefs.current[index];
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    } else {
      isScrollingRef.current = false;
    }
  };

  return (
    <section ref={projectsRef} id="projects" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated showcase of projects in data analytics, machine learning, and modern software development."
        />

        {/* Split-Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-8">
          {/* Left Column: Sticky Index & Interactive Navigator */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ProjectIndexNav
              projects={projects}
              activeIndex={activeIndex}
              onSelectProject={scrollToProject}
            />
          </div>

          {/* Right Column: Project Feed */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isActive={activeIndex === index}
                totalProjects={projects.length}
                onZoom={(src, title) => setZoomImage({ src, title })}
                setRef={(el) => {
                  cardRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Zoom Modal */}
      <ProjectLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  );
}
