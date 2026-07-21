"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LiveBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{x: number, y: number, opacity: number, destY: number, duration: number}>>([]);

  useEffect(() => {
    let isActive = true;

    // Use timeout to push state updates outside the synchronous effect body
    setTimeout(() => {
      if (!isActive) return;

      const initialParticles = [...Array(15)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.3,
        destY: Math.random() * -100,
        duration: Math.random() * 10 + 10,
      }));

      setParticles(initialParticles);
      setMounted(true);
    }, 0);

    return () => { isActive = false; };
  }, []);

  if (!mounted || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black/90">
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF5618" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FF5618] rounded-full shadow-[0_0_8px_2px_rgba(255,86,24,0.8)]"
          initial={{ x: p.x, y: p.y, opacity: p.opacity }}
          animate={{ y: [null, p.destY], opacity: [null, p.opacity + 0.5, p.opacity] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
}
