'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../../data/constants';
import SectionHeading from '../ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Education() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation in computer science and information technology."
        />

        {education.map((edu) => (
          <div
            key={edu.degree}
            ref={ref}
            className={`glass rounded-2xl p-8 md:p-10 glass-hover
              ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-400 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary-400 font-semibold text-lg mb-1">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Award size={14} />
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <BookOpen size={16} className="text-primary-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
