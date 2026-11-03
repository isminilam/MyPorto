'use client';

import React, { useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { gsap, useGSAP } from '../../lib/gsap';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power2.out' },
      });

      tl.fromTo(
        '.contact-heading',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.contact-info-col',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.75, force3D: true },
          '-=0.3'
        )
        .fromTo(
          '.contact-form-box',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.75, force3D: true },
          '-=0.55'
        )
        .fromTo(
          '.contact-info-card',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          '-=0.4'
        );
    },
    { scope: contactRef }
  );

  return (
    <section ref={contactRef} id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="contact-heading">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you."
          />
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8 mt-8 items-stretch">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
