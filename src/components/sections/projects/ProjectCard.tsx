'use client';

import React, { useRef } from 'react';
import {
  ExternalLink,
  Folder,
  Brain,
  BarChart3,
  Code2,
  ZoomIn,
  type LucideIcon,
} from 'lucide-react';
import { GithubIcon } from '../../ui/Icons';
import { TechTagIcon } from '../../ui/TechIcons';
import { type ProjectItem } from '../../../data/constants';
import { gsap, useGSAP } from '../../../lib/gsap';

const categoryIcons: Record<string, LucideIcon> = {
  'Machine Learning': Brain,
  'Deep Learning': Brain,
  'Data Analytics': BarChart3,
  'Software Development': Code2,
  'Web Development': Code2,
};

export interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isActive: boolean;
  totalProjects: number;
  onZoom: (src: string, title: string) => void;
  setRef: (el: HTMLDivElement | null) => void;
}

export default function ProjectCard({
  project,
  index,
  isActive,
  totalProjects,
  onZoom,
  setRef,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const CategoryIcon = categoryIcons[project.category] || Folder;

  // Cinematic GSAP ScrollTrigger Entrance
  useGSAP(
    () => {
      if (!cardRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out' },
      });

      // 1. Card container enters smoothly
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, force3D: true }
      );

      // 2. macOS Window dots pop in with playful stagger
      const dots = cardRef.current.querySelectorAll('.window-dot');
      if (dots.length > 0) {
        tl.fromTo(
          dots,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, stagger: 0.08, ease: 'back.out(2)' },
          '-=0.5'
        );
      }

      // 3. Image subtle zoom reveal
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 1.06, opacity: 0.7 },
          { scale: 1.0, opacity: 1, duration: 0.9 },
          '-=0.6'
        );
      }

      // 4. Tech pills cascade in
      const pills = cardRef.current.querySelectorAll('.project-tag-pill');
      if (pills.length > 0) {
        tl.fromTo(
          pills,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.03 },
          '-=0.5'
        );
      }
    },
    { scope: cardRef }
  );

  // Interactive 3D Tilt & Cursor Spotlight Follow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
    cardRef.current.style.setProperty('--spotlight-y', `${y}px`);
    cardRef.current.style.setProperty('--spotlight-opacity', '1');

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
    cardRef.current.style.setProperty('--spotlight-opacity', '0');

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
  };

  return (
    <div
      id={`project-${index}`}
      data-index={index}
      ref={(el) => {
        cardRef.current = el;
        setRef(el);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`project-main-card group glass rounded-2xl overflow-hidden border relative transition-[border-color,box-shadow] duration-500 will-change-transform ${
        isActive
          ? 'border-primary-500/50 shadow-2xl shadow-primary-500/15 ring-1 ring-primary-500/20'
          : 'border-white/10 hover:border-white/25 hover:shadow-xl hover:shadow-black/40'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 z-30 opacity-0"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          background:
            'radial-gradient(550px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(99, 102, 241, 0.16), transparent 60%)',
        }}
      />

      {/* Browser Mockup Window Preview Frame */}
      <div className="bg-surface-950/70 border-b border-white/10 relative overflow-hidden flex flex-col">
        {/* Window Controls Topbar */}
        <div className="px-3.5 py-2.5 bg-surface-900/80 border-b border-white/5 flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-1.5 min-w-0 shrink">
            <span className="window-dot w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-400/40 shrink-0" />
            <span className="window-dot w-2.5 h-2.5 rounded-full bg-yellow-500/80 border border-yellow-400/40 shrink-0" />
            <span className="window-dot w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40 shrink-0" />
            <span className="ml-2 text-[11px] font-mono text-gray-400 hidden sm:inline-block truncate max-w-[160px]">
              {project.title.toLowerCase().replace(/\s+/g, '-')}.preview
            </span>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/5 text-gray-300 border border-white/10 whitespace-nowrap shrink-0">
              <CategoryIcon size={11} className="text-primary-400 shrink-0" />
              <span>{project.category}</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/25 whitespace-nowrap shrink-0">
              {index + 1 < 10 ? `0${index + 1}` : index + 1} / {totalProjects < 10 ? `0${totalProjects}` : totalProjects}
            </span>
          </div>
        </div>

        {/* Image Container with Full Preview */}
        {project.image ? (
          <div
            onClick={() => onZoom(project.image!, project.title)}
            className="relative aspect-[16/10] sm:aspect-[16/9] max-h-64 sm:max-h-72 w-full bg-[#0b0e14] flex items-center justify-center p-2 sm:p-2.5 cursor-pointer group/preview overflow-hidden"
            title="Click to view full image"
          >
            <img
              ref={imageRef}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover/preview:scale-[1.02]"
            />

            {/* Hover Overlay with Zoom Icon */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/85 text-white border border-white/20 shadow-xl scale-95 group-hover/preview:scale-100 transition-transform">
                <ZoomIn size={14} className="text-primary-400" />
                Click to expand
              </span>
            </div>
          </div>
        ) : (
          <div className="h-40 sm:h-48 bg-gradient-to-br from-surface-800 via-surface-900 to-surface-800 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-accent-500/10 to-primary-600/10 group-hover:from-primary-600/20 group-hover:via-accent-500/15 group-hover:to-primary-600/20 transition-all duration-500" />
            <div className="absolute right-5 -bottom-5 text-5xl sm:text-6xl font-black font-mono text-white/[0.04] select-none pointer-events-none">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <CategoryIcon
              size={44}
              className="text-white/15 group-hover:text-primary-400/40 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags with Official Icons */}
        <div className="flex flex-wrap gap-2 mb-5">
          {Array.from(new Set(project.tags)).map((tag, tagIdx) => (
            <span
              key={`${project.title}-${tag}-${tagIdx}`}
              className="project-tag-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-surface-900/90 text-gray-200 border border-white/10 shadow-sm hover:border-primary-500/40 hover:bg-surface-800 transition-colors duration-200"
            >
              <TechTagIcon name={tag} size={14} />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Action Links */}
        {(project.demo || project.github) && (
          <div className="flex flex-wrap items-center gap-2.5 pt-3.5 border-t border-white/10">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-md shadow-primary-600/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold glass hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <GithubIcon size={13} />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
