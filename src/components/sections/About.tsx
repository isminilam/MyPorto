'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/constants';
import { gsap, useGSAP } from '../../lib/gsap';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.about-portrait',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 }
      ).fromTo(
        '.about-content > *',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        '-=0.5'
      );
    },
    { scope: aboutRef }
  );

  return (
    <section
      ref={aboutRef}
      id="about"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        {/* Left Column: Image (~41.7% / 5 cols) */}
        <div className="lg:col-span-5 about-portrait flex flex-col justify-between">
          <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-none mx-auto flex-1 flex flex-col">
            {/* Clean portrait frame */}
            <div className="relative aspect-[4/5] lg:aspect-auto w-full flex-1 min-h-[360px] sm:min-h-[400px] rounded-2xl overflow-hidden bg-surface-900 border border-white/10 shadow-xl shadow-black/30">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 380px"
                className="object-cover object-top"
                priority={false}
              />
            </div>

            {/* Photo metadata caption aligned with frame */}
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500 font-mono tracking-wide px-0.5">
              <span>{personalInfo.name}</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Content (~58.3% / 7 cols) */}
        <div className="lg:col-span-7 about-content flex flex-col justify-between">
          {/* Top: Heading + Original Bio */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              About Me
            </h2>

            <div className="text-gray-300 text-sm sm:text-[15px] leading-relaxed space-y-3">
              <p>
                Bachelor of Informatics graduate from Gunadarma University with experienced in{' '}
                <span className="text-white font-medium">Data Analytics</span>,{' '}
                <span className="text-white font-medium">Data Science</span>,{' '}
                <span className="text-white font-medium">Machine Learning</span>, and{' '}
                <span className="text-white font-medium">Data Engineering</span>.
              </p>
              <p className="text-gray-400">
                Through academic and collaborative projects, I have developed experience in analyzing data, building machine learning models, and contributing to the development of AI-powered applications.
              </p>
            </div>
          </div>

          {/* Middle: Education & Focus (Typography-based, 2-column grid) */}
          <div className="pt-6 mt-6 border-t border-white/[0.08] grid grid-cols-2 gap-4 sm:gap-6">
            {/* Left: Education */}
            <div>
              <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                Education
              </span>
              <p className="text-white text-sm font-medium leading-snug">
                {personalInfo.degree}
              </p>
              <p className="text-gray-400 text-xs mt-1 leading-normal">
                {personalInfo.university}
              </p>
            </div>

            {/* Right: Focus */}
            <div>
              <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                Focus
              </span>
              <p className="text-white text-sm font-medium leading-snug">
                Data Science
              </p>
              <p className="text-gray-400 text-xs mt-1 leading-normal">
                Data Analytics
              </p>
              <p className="text-gray-400 text-xs mt-1 leading-normal">
                Machine Learning
              </p>
            </div>
          </div>

          {/* Bottom: CTA row (aligned with the same 2-column grid) */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left: Download CV (under Education) */}
            <div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs sm:text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Download CV</span>
                <ArrowDown size={14} className="text-gray-300" />
              </a>
            </div>

            {/* Right: LinkedIn & GitHub (under Focus) */}
            <div className="flex items-center gap-5">
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 hover:text-white font-medium transition-colors group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-500 group-hover:text-primary-400 transition-colors"
                  />
                </a>
              )}

              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 hover:text-white font-medium transition-colors group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-500 group-hover:text-primary-400 transition-colors"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
