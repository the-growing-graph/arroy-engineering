'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function ArroyoLogo({ size = 44, showText = true, className = '' }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <motion.div
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <Image src="/arroyo-logo.png" alt="Arroyo Engineering" width={size} height={size}
          className="object-contain drop-shadow-[0_0_12px_rgba(220,38,38,0.35)]" priority />
      </motion.div>
      {showText && (
        <div className="leading-tight">
          <div className="font-display font-bold text-base md:text-lg tracking-tight text-white">ARROYO</div>
          <div className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/50 font-medium">Engineering & Infrastructure</div>
        </div>
      )}
    </Link>
  );
}
