'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { gsap } from '../../../lib/gsap';

export interface ProjectLightboxProps {
  image: { src: string; title: string } | null;
  onClose: () => void;
}

export default function ProjectLightbox({ image, onClose }: ProjectLightboxProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Modal zoom animation when opened
  useEffect(() => {
    if (image && modalContentRef.current) {
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.3)' }
      );
    }
  }, [image]);

  // Close modal on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (image) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={modalContentRef}
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-400 animate-pulse" />
            <h4 className="text-sm sm:text-base font-semibold text-white truncate">
              {image.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X size={20} />
          </button>
        </div>

        {/* Fullscreen Image Container */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface-950/90 p-1 shadow-2xl">
          <img
            src={image.src}
            alt={image.title}
            className="max-h-[73vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Modal Footer Note */}
        <p className="text-[11px] text-gray-400 mt-2.5 font-mono">
          Click outside or press <span className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">ESC</span> to close
        </p>
      </div>
    </div>
  );
}
