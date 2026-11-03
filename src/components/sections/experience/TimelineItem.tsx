'use client';

import React, { useRef } from 'react';
import { Briefcase, FlaskConical, Laptop, type LucideIcon } from 'lucide-react';
import { type ExperienceItem } from '../../../data/constants';
import { gsap, useGSAP } from '../../../lib/gsap';

const typeIcons: Record<string, LucideIcon> = {
  work: Briefcase,
  research: FlaskConical,
  freelance: Laptop,
};

const typeColors: Record<string, string> = {
  work: 'from-blue-500 to-cyan-400',
  research: 'from-violet-500 to-purple-400',
  freelance: 'from-emerald-500 to-teal-400',
};

export interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const Icon = typeIcons[experience.type] || Briefcase;
  const color = typeColors[experience.type] || 'from-primary-500 to-accent-400';

  // WOW GSAP Choreographed ScrollTrigger Entrance
  useGSAP(
    () => {
      if (!itemRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out' },
      });

      // 1. Badge radiates & pops in with elastic bounce
      tl.fromTo(
        badgeRef.current,
        { scale: 0.6, opacity: 0, rotation: -12 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.55, ease: 'back.out(2)', force3D: true }
      );

      // 2. Timeline laser beam shoots down to connect to next
      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleY: 0, opacity: 0, transformOrigin: 'top center' },
          { scaleY: 1, opacity: 1, duration: 0.65, ease: 'power2.inOut' },
          '-=0.35'
        );
      }

      // 3. Card glides in with fluid vertical drift
      tl.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, force3D: true },
        '-=0.45'
      );

      // 4. Staggered bullet points reveal
      const bullets = cardRef.current?.querySelectorAll('.timeline-bullet');
      if (bullets && bullets.length > 0) {
        tl.fromTo(
          bullets,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
          '-=0.4'
        );
      }
    },
    { scope: itemRef }
  );

  // Interactive 3D Perspective Tilt on Card Hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    cardRef.current.style.setProperty('--exp-spotlight-x', `${x}px`);
    cardRef.current.style.setProperty('--exp-spotlight-y', `${y}px`);
    cardRef.current.style.setProperty('--exp-spotlight-opacity', '1');

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: 'power1.out',
      transformPerspective: 1000,
      transformOrigin: 'center center',
      force3D: true,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--exp-spotlight-opacity', '0');
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={itemRef}
      className="relative flex gap-5 sm:gap-7 md:gap-8 pb-10 sm:pb-12 last:pb-0"
    >
      {/* Left Timeline Node & Laser Beam */}
      <div className="flex flex-col items-center shrink-0">
        <div
          ref={badgeRef}
          className="relative group/badge z-10"
        >
          {/* Ambient Glow Aura */}
          <div className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-br ${color} opacity-40 blur-md group-hover/badge:opacity-90 transition-opacity duration-300`} />

          {/* Core Icon Box */}
          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-xl shadow-primary-500/20 border border-white/20 group-hover/badge:scale-105 transition-transform duration-300`}>
            <Icon size={20} />
          </div>

          {/* Pulse Halo Ring */}
          <span className="absolute inset-0 rounded-xl border border-white/30 animate-ping opacity-25 pointer-events-none" />
        </div>

        {/* Laser Connector Line */}
        {!isLast && (
          <div className="relative w-0.5 flex-1 mt-3.5 mb-1 bg-white/10 overflow-hidden min-h-[60px]">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-primary-400 via-cyan-400 to-accent-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            />
          </div>
        )}
      </div>

      {/* Right Content Card with 3D Tilt & Spotlight */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="timeline-card glass rounded-2xl p-6 sm:p-7 flex-1 border border-white/10 hover:border-primary-500/40 relative overflow-hidden transition-[border-color,box-shadow] duration-500 will-change-transform shadow-xl shadow-black/20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic Cursor Spotlight Shader */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 z-20 opacity-0"
          style={{
            opacity: 'var(--exp-spotlight-opacity, 0)',
            background:
              'radial-gradient(500px circle at var(--exp-spotlight-x, 0px) var(--exp-spotlight-y, 0px), rgba(99, 102, 241, 0.15), transparent 60%)',
          }}
        />

        {/* Header: Title, Company, Period */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4 pb-3.5 border-b border-white/5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
              {experience.title}
            </h3>
            <p className="text-primary-400 font-semibold text-sm mt-0.5">{experience.company}</p>
          </div>
          <span className="text-xs font-mono text-gray-300 bg-white/5 px-3.5 py-1 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
            {experience.period}
          </span>
        </div>

        {/* Accomplishment Bullets */}
        <ul className="relative z-10 space-y-2.5">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="timeline-bullet flex items-start gap-3 text-gray-300 text-xs sm:text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 shadow-[0_0_6px_rgba(99,102,241,0.8)] mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
