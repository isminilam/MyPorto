'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createStarTexture, createStarfield } from './starfield';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = prefersReducedMotion ? 15 : 24;

    // 2. High-Performance WebGL Renderer (optimized fillrate)
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Shared Soft Star Sprite Texture
    const starTexture = createStarTexture();

    // 4. Calm 3D Starfield System (Clean, Minimalist, ~260 stars)
    const starfield = createStarfield(starTexture);
    scene.add(starfield.points);

    // 5. Interactive Mouse Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Zero-Layout-Thrashing Scroll Tracking
    let maxScroll = 1;
    let currentScrollY = 0;
    let isScrolling = false;
    let scrollStopTimer: ReturnType<typeof setTimeout> | null = null;

    const measureMaxScroll = () => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    measureMaxScroll();

    const handleScroll = () => {
      currentScrollY = window.scrollY;
      isScrolling = true;
      if (scrollStopTimer) clearTimeout(scrollStopTimer);
      scrollStopTimer = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 7. Dynamic Viewport Resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      measureMaxScroll();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // 8. Animation Loop
    let animationFrameId: number;
    const timer = new THREE.Timer();
    timer.connect(document);
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = (timestamp?: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      timer.update(timestamp);
      const elapsed = timer.getElapsed();
      const speedFactor = prefersReducedMotion ? 0.2 : 1.0;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.035;
      mouse.y += (mouse.targetY - mouse.y) * 0.035;

      // Gentle 3D Camera parallax & vertical gliding with scroll
      const scrollProgress = maxScroll > 0 ? currentScrollY / maxScroll : 0;
      const targetCamX = mouse.x * 1.2;
      const targetCamY = -mouse.y * 0.9 - scrollProgress * 10.0;
      camera.position.x += (targetCamX - camera.position.x) * 0.035;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;

      // Smooth initial camera warp glide into deep space on load
      if (camera.position.z > 15.01) {
        camera.position.z += (15 - camera.position.z) * 0.04;
      }

      // Update Starfield rotation & subtle twinkling
      starfield.update(elapsed, speedFactor, scrollProgress, isScrolling);

      renderer.render(scene, camera);
    };

    animate();

    // 9. Memory & GPU Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      timer.dispose();

      starfield.dispose();
      starTexture.dispose();

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        opacity: 0.9,
      }}
    />
  );
}
