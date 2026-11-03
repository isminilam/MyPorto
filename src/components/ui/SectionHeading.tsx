'use client';

import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

/**
 * Reusable section heading component with scroll animation
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="h-1 w-8 rounded-full bg-primary-500" />
        <span className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-400" />
        <span className="h-1 w-8 rounded-full bg-accent-400" />
      </div>
    </div>
  );
}
