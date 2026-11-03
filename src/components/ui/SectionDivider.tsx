import React from 'react';

interface SectionDividerProps {
  className?: string;
}

/**
 * Elegant subtle section divider with a gradient line and soft ambient glow
 */
export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center ${className}`}
    >
      {/* Subtle hairline gradient */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Soft centered glow */}
      <div className="absolute w-48 sm:w-72 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent blur-[1px]" />
      <div className="absolute w-2 h-2 rounded-full bg-primary-400/30 blur-[2px]" />
    </div>
  );
}
