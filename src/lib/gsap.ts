import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Auto refresh ScrollTrigger when DOM and resources are loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}

export { gsap, ScrollTrigger, useGSAP };
export default gsap;
