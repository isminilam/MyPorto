'use client';

import React, { useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '../ui/Icons';
import { personalInfo, navLinks } from '../../data/constants';
import { gsap, useGSAP } from '../../lib/gsap';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.footer-content',
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    },
    { scope: footerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="border-t border-white/5 bg-surface-900/50">
      <div className="footer-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-white font-bold text-xl">
                {personalInfo.firstName}
                <span className="text-primary-400">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-4">
              Informatics student passionate about data analytics, machine learning,
              and building modern software solutions that make a difference.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
              {personalInfo.social.kaggle && (
                <a
                  href={personalInfo.social.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Kaggle"
                >
                  <KaggleIcon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-600 flex items-center gap-1" suppressHydrationWarning>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg glass text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
