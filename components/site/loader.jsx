'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArroyoLogo } from './logo';

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-blue-950/30" />
          <div className="relative flex flex-col items-center gap-6">
            <ArroyoLogo size={64} showText />
            <motion.div
              className="h-[2px] w-40 bg-white/10 relative overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent"
              />
            </motion.div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Building the future</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
