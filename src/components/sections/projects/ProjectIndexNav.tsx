'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { type ProjectItem } from '../../../data/constants';
import { gsap } from '../../../lib/gsap';

export interface ProjectIndexNavProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
}

export default function ProjectIndexNav({
  projects,
  activeIndex,
  onSelectProject,
}: ProjectIndexNavProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  // Animate counter number when active project changes
  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { y: -14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  const activeProject = projects[activeIndex];

  return (
    <div className="projects-index-panel glass rounded-2xl p-5 sm:p-6 border border-white/10 relative overflow-hidden shadow-xl shadow-black/20">
      {/* Subtle background glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary-500/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Index Counter */}
        <div className="mb-3.5 pb-3.5 border-b border-white/10">
          <div className="flex items-baseline justify-between mb-1.5">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-primary-400 font-mono font-bold block mb-0.5">
                PROJECT INDEX
              </span>
              <div className="flex items-baseline gap-1.5 overflow-hidden">
                <span
                  ref={counterRef}
                  className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight inline-block"
                >
                  {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
                </span>
                <span className="text-sm text-gray-500 font-mono">
                  / {projects.length < 10 ? `0${projects.length}` : projects.length}
                </span>
              </div>
            </div>

            {activeProject && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary-500/15 text-primary-300 border border-primary-500/25 transition-all duration-300">
                {activeProject.category}
              </span>
            )}
          </div>

          {/* Dynamic Scroll Progress Bar */}
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="text-[11px] text-gray-400 mb-4 leading-relaxed">
          Scroll down to explore or click below to jump directly:
        </p>

        {/* Vertical Project Nav List */}
        <div className="space-y-1.5">
          {projects.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.title}
                onClick={() => onSelectProject(idx)}
                className={`w-full text-left py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-primary-600/20 border border-primary-500/40 text-white shadow-sm shadow-primary-500/10'
                    : 'hover:bg-white/5 border border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                {/* Active Neon Accent Bar */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-accent-400 rounded-r shadow-sm shadow-primary-400/50" />
                )}

                <div className="flex items-center gap-2.5 min-w-0 pr-2 pl-1">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive ? 'text-primary-400' : 'text-gray-500 group-hover:text-gray-400'
                    }`}
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 transition-transform duration-300 ${
                    isActive
                      ? 'text-primary-400 translate-x-0.5'
                      : 'text-gray-600 group-hover:text-gray-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
