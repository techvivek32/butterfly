"use client";

import { motion } from "framer-motion";
import { ButterflyMark } from "@/components/brand/ButterflyMark";
import { cn } from "@/lib/utils";

/** Soft animated gradient orbs for section backdrops. */
export function GlowOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-wing-teal/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const flyers = [
  { top: "12%", left: "6%", size: 26, dur: 9, delay: 0 },
  { top: "26%", left: "88%", size: 34, dur: 11, delay: 1.2 },
  { top: "64%", left: "10%", size: 22, dur: 10, delay: 0.6 },
  { top: "78%", left: "82%", size: 30, dur: 12, delay: 0.3 },
  { top: "44%", left: "50%", size: 18, dur: 8, delay: 1.8 },
];

/** Butterflies drifting across the backdrop. */
export function FloatingButterflies({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {flyers.map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: f.top, left: f.left, width: f.size, height: f.size }}
          animate={{
            y: [0, -26, 6, -16, 0],
            x: [0, 14, -8, 10, 0],
            rotate: [0, 8, -6, 5, 0],
          }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <ButterflyMark className="h-full w-full opacity-40" flutter idSuffix={`flyer-${i}`} />
        </motion.div>
      ))}
    </div>
  );
}
