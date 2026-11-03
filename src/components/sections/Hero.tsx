'use client';

import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/constants';
import Button from '../ui/Button';
import { gsap, useGSAP } from '../../lib/gsap';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Floating ambient background orbs continuous organic movement
      gsap.to('.hero-orb-1', {
        x: '+=35',
        y: '-=30',
        duration: 6.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.hero-orb-2', {
        x: '-=30',
        y: '+=35',
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });

      // Master entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-center-glow',
        { scale: 0.35, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
      )
        .fromTo(
          '.hero-greeting',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=1.0'
        )
        .fromTo(
          '.hero-name-word',
          { y: '115%', opacity: 0, rotateZ: 2 },
          {
            y: '0%',
            opacity: 1,
            rotateZ: 0,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power4.out',
          },
          '-=0.35'
        )
        .fromTo(
          '.hero-subtitle',
          { y: 25, opacity: 0, filter: 'blur(4px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { scale: 0.85, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' },
          '-=0.35'
        )
        .fromTo(
          '.hero-scroll-btn',
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* GPU-Optimized Gradient orbs (radial gradient without heavy blur filter) */}
        <div
          className="hero-orb-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, transparent 68%)',
          }}
        />
        <div
          className="hero-orb-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 68%)',
          }}
        />
        {/* Cinematic Center Ambient Flare */}
        <div
          className="hero-center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(34, 211, 238, 0.08) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.09) 0%, transparent 70%)',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center -mt-8 sm:-mt-12">
        {/* Greeting */}
        <div className="hero-greeting mb-3">
          <span className="inline-block text-base sm:text-lg md:text-xl font-medium text-gray-400 tracking-wide">
            Hi, I&apos;m
          </span>
        </div>

        {/* Name with masked overflow-hidden word reveal */}
        <h1 className="hero-name font-[family-name:var(--font-heading)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-balance leading-[1.12]">
          <span className="inline-block overflow-hidden py-1">
            <span className="hero-name-word inline-block bg-gradient-to-r from-primary-300 via-accent-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(99,102,241,0.25)]">
              Ismi
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden py-1">
            <span className="hero-name-word inline-block bg-gradient-to-r from-primary-300 via-accent-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(99,102,241,0.25)]">
              Nilam
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden py-1">
            <span className="hero-name-word inline-block bg-gradient-to-r from-primary-300 via-accent-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(99,102,241,0.25)]">
              Anggraini
            </span>
          </span>
        </h1>

        {/* Role subtitle */}
        <p className="hero-subtitle font-[family-name:var(--font-heading)] text-base sm:text-lg md:text-xl font-medium tracking-wide text-gray-300 mb-9 max-w-2xl mx-auto">
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="hero-cta">
            <Button href="#projects">
              View My Work
              <ArrowDown size={16} />
            </Button>
          </div>
          <div className="hero-cta">
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll-btn absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce p-2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
