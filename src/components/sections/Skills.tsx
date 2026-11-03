'use client';

import React, { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import {
  PythonIcon,
  SqlIcon,
  PowerBiIcon,
  MySqlIcon,
  PostgreSqlIcon,
  MicrosoftOfficeIcon,
  GoogleWorkspaceIcon,
  GitIcon,
  GitHubTechIcon,
} from '../ui/TechIcons';

interface ToolItem {
  name: string;
  subtools?: string;
  icon: React.ReactNode;
  brandGlow: string;
}

const toolsList: ToolItem[] = [
  {
    name: 'Python',
    subtools: 'Pandas · NumPy · Scikit-learn · Keras',
    icon: <PythonIcon size={28} />,
    brandGlow: 'hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(56,126,184,0.18)]',
  },
  {
    name: 'SQL',
    icon: <SqlIcon size={28} />,
    brandGlow: 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,168,205,0.18)]',
  },
  {
    name: 'Power BI',
    icon: <PowerBiIcon size={28} />,
    brandGlow: 'hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(242,200,17,0.18)]',
  },
  {
    name: 'MySQL',
    icon: <MySqlIcon size={28} />,
    brandGlow: 'hover:border-teal-500/30 hover:shadow-[0_0_20px_rgba(0,117,143,0.18)]',
  },
  {
    name: 'PostgreSQL',
    icon: <PostgreSqlIcon size={28} />,
    brandGlow: 'hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(51,103,145,0.18)]',
  },
  {
    name: 'Microsoft Office',
    subtools: 'Word · Excel · PowerPoint',
    icon: <MicrosoftOfficeIcon size={28} />,
    brandGlow: 'hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(216,59,1,0.18)]',
  },
  {
    name: 'Google Workspace',
    subtools: 'Sheets · Docs · Slides',
    icon: <GoogleWorkspaceIcon size={28} />,
    brandGlow: 'hover:border-blue-400/30 hover:shadow-[0_0_20px_rgba(66,133,244,0.18)]',
  },
  {
    name: 'Git / GitHub',
    icon: (
      <div className="flex items-center gap-1.5">
        <GitIcon size={25} />
        <GitHubTechIcon size={23} className="text-white" />
      </div>
    ),
    brandGlow: 'hover:border-rose-500/30 hover:shadow-[0_0_20px_rgba(240,80,50,0.18)]',
  },
];

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        ['.skills-title', '.skills-subtitle'],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
      )
        .fromTo(
          '.skills-card',
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.skills-tool-item',
          { opacity: 0, y: 25, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.4)' },
          '-=0.3'
        );
    },
    { scope: skillsRef }
  );

  return (
    <section ref={skillsRef} id="skills" className="scroll-mt-20 py-20 sm:py-24 lg:py-28 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-7 sm:mb-9">
          <h2 className="skills-title font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="skills-subtitle text-gray-400 text-xs sm:text-sm max-w-md mx-auto mt-2">
            Core technologies and tools I leverage across Data Science, Analytics, and Machine Learning.
          </p>
        </div>

        {/* 1 Single Unified Card (Compact & Clean) */}
        <div className="skills-card glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glows (radial gradient for instant GPU rasterization) */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            }}
          />

          {/* Grid of Tools */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {toolsList.map((tool) => (
              <div
                key={tool.name}
                className={`skills-tool-item group p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all duration-300 flex flex-col items-center justify-center text-center hover:-translate-y-1 cursor-default ${tool.brandGlow}`}
              >
                {/* Official Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:border-white/20 transition-all duration-300 shadow-md">
                  {tool.icon}
                </div>

                {/* Tool Name */}
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-primary-300 transition-colors">
                  {tool.name}
                </h3>

                {/* Sub-tools if applicable */}
                {tool.subtools && (
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium mt-1 leading-tight">
                    {tool.subtools}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
