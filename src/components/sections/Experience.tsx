'use client';

import React, { useRef } from 'react';
import { experiences } from '../../data/constants';
import SectionHeading from '../ui/SectionHeading';
import { gsap, useGSAP } from '../../lib/gsap';
import TimelineItem from './experience/TimelineItem';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.experience-heading',
        { opacity: 0, y: 25 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-surface-900/30 relative overflow-hidden">
      {/* Background Ambient Glow (radial gradient for instant GPU rasterization) */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="experience-heading">
          <SectionHeading
            title="Experience"
            subtitle="Professional and academic experiences that have shaped my journey in tech."
          />
        </div>

        <div className="relative mt-10 sm:mt-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.title}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
