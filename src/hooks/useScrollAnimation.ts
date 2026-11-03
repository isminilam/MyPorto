'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Custom hook that detects when an element enters the viewport
 * and triggers a CSS animation class.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/**
 * Custom hook for tracking active section in the navbar.
 * Uses viewport checkpoint bounding rect to accurately detect both tall and short sections.
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const navSectionIds = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // When at the very bottom of the document, activate 'contact'
      if (scrollY + windowHeight >= docHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // When at the top before the about section
      if (scrollY < 140) {
        setActiveSection('');
        return;
      }

      // Checkpoint line at 38% of viewport height (just below navbar & header area)
      const checkpoint = windowHeight * 0.38;

      let found = '';

      for (const id of navSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Check if the checkpoint falls inside this section's vertical bounds
        if (rect.top <= checkpoint && rect.bottom > checkpoint) {
          found = id;
          break;
        }
      }

      // Fallback: if between sections (e.g. over a divider), pick the latest section that started above checkpoint
      if (!found && scrollY >= 140) {
        for (let i = navSectionIds.length - 1; i >= 0; i--) {
          const id = navSectionIds[i];
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= checkpoint) {
              found = id;
              break;
            }
          }
        }
      }

      setActiveSection(found);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return activeSection;
}
