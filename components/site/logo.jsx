'use client';
import { motion } from 'framer-motion';

export function ArroyoLogo({ size = 40, showText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg viewBox="0 0 64 64" width={size} height={size} className="drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
          <defs>
            <linearGradient id="lg-red" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="lg-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#C9A961" />
            </linearGradient>
          </defs>
          {/* Hex frame */}
          <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="none" stroke="url(#lg-gold)" strokeWidth="1.5" />
          {/* A shape */}
          <path d="M20 46 L32 14 L44 46 M25.5 34 L38.5 34" stroke="url(#lg-red)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="14" r="2.5" fill="url(#lg-blue)" />
        </svg>
      </motion.div>
      {showText && (
        <div className="leading-tight">
          <div className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
            ARROYO
          </div>
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/50 font-medium">
            Engineering · Infrastructure
          </div>
        </div>
      )}
    </div>
  );
}
