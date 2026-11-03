'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, CheckCircle2, FileText } from 'lucide-react';
import { certifications, type CertificationItem } from '../../data/constants';
import SectionHeading from '../ui/SectionHeading';
import { gsap, useGSAP } from '../../lib/gsap';

interface CertCardProps {
  cert: CertificationItem;
}

function CertCard({ cert }: CertCardProps) {
  const isPdfAvailable = cert.credentialUrl && cert.credentialUrl !== '#';

  return (
    <div
      className="cert-card-item glass rounded-2xl p-4 sm:p-5 glass-hover group relative overflow-hidden flex flex-col justify-between border border-white/10 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 transition-[border-color,box-shadow] duration-500"
    >
      {/* Decorative ambient gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 via-accent-400/0 to-primary-600/0 group-hover:from-primary-600/10 group-hover:to-accent-400/10 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Certificate Preview Frame (Click to open PDF) */}
        <a
          href={isPdfAvailable ? cert.credentialUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-surface-950/80 border border-white/10 group-hover:border-primary-500/30 transition-colors mb-4 flex items-center justify-center cursor-pointer block group/img"
          title={isPdfAvailable ? `Buka PDF ${cert.title}` : cert.title}
        >
          {cert.image ? (
            <>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
              />
              {/* Interactive Hover Overlay with PDF View prompt */}
              <div className="absolute inset-0 bg-surface-950/75 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 z-20">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-400/40 flex items-center justify-center text-primary-300 shadow-lg shadow-primary-500/20 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                  <FileText size={18} />
                </div>
                <span className="text-xs font-semibold text-white tracking-wide">
                  Buka Dokumen PDF ↗
                </span>
              </div>
            </>
          ) : (
            /* Blank empty placeholder area */
            <div className="w-full h-full bg-white/[0.02]" />
          )}

          {/* Date Badge */}
          <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-black/75 backdrop-blur-md text-gray-300 border border-white/10">
              {cert.date}
            </span>
          </div>
        </a>

        {/* Issuer & Title Info */}
        <div className="flex-1 flex flex-col justify-start">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-400 mb-1">
            {cert.issuer}
          </span>
          <h3 className="text-base font-bold text-white group-hover:text-primary-300 transition-colors leading-snug">
            {cert.title}
          </h3>
        </div>
      </div>

      {/* Card Footer: Verified status & direct PDF link */}
      <div className="relative z-10 pt-3.5 mt-4 border-t border-white/5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <CheckCircle2 size={13} className="text-emerald-400" />
          Verified
        </span>

        {isPdfAvailable ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-accent-300 transition-colors group/link px-2 py-1 rounded-lg hover:bg-primary-500/10"
          >
            <FileText size={12} className="text-primary-400 group-hover/link:text-accent-300" />
            <span>Lihat PDF</span>
            <ExternalLink size={11} />
          </a>
        ) : (
          <span className="text-[11px] text-gray-500 font-mono">ID: Credential</span>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const certSectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: certSectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.cert-heading',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 }
      ).fromTo(
        '.cert-card-item',
        { opacity: 0, y: 35, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.3)' },
        '-=0.3'
      );
    },
    { scope: certSectionRef }
  );

  return (
    <section ref={certSectionRef} id="certifications" className="section-padding bg-surface-900/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="cert-heading">
          <SectionHeading
            title="Certifications"
            subtitle="Industry-recognized certifications validating my expertise in Data Science, Machine Learning, and Web Development."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {certifications.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
