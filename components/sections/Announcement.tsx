"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, ArrowRight, X } from "lucide-react";
import { ANNOUNCEMENT } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Announcement() {
  const [shown, setShown] = useState(true);

  if (!shown) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="announcement"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -32, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative z-40 w-full overflow-hidden",
          "bg-wing-gradient bg-[length:200%_auto] animate-gradient-pan",
          "text-white shadow-soft",
        )}
        role="region"
        aria-label="Promotional announcement"
      >
        {/* subtle top sheen + soft noise via overlay gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/5"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/10 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/10 to-transparent"
        />

        <div className="section relative flex min-h-[2.5rem] items-center justify-center py-2">
          <div className="flex w-full items-center justify-center gap-2 pr-7 sm:gap-3 sm:pr-9">
            {/* flame badge */}
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-white/25 blur-[3px]"
              />
              <motion.span
                animate={{ scale: [1, 1.18, 1], rotate: [0, -6, 6, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Flame className="h-3.5 w-3.5 fill-white/90 text-white drop-shadow-sm" />
              </motion.span>
            </span>

            {/* announcement text */}
            <p className="min-w-0 truncate text-center text-xs font-medium tracking-tight text-white/95 sm:text-sm sm:font-semibold">
              <span className="hidden text-white/80 sm:inline">
                Limited time —{" "}
              </span>
              {ANNOUNCEMENT}
            </p>

            {/* claim pill */}
            <a
              href="#pricing"
              className={cn(
                "group hidden shrink-0 items-center gap-1.5 rounded-full sm:inline-flex",
                "border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-sm",
                "transition-all duration-300 hover:bg-white/30 hover:shadow-glow",
              )}
            >
              <span>Claim 50% off</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            {/* compact claim chip on mobile */}
            <a
              href="#pricing"
              className={cn(
                "inline-flex shrink-0 items-center gap-1 rounded-full sm:hidden",
                "border border-white/30 bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-white",
                "backdrop-blur-sm",
              )}
            >
              <span>Claim</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          {/* dismiss */}
          <button
            type="button"
            onClick={() => setShown(false)}
            aria-label="Dismiss announcement"
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 sm:right-6",
              "flex h-5 w-5 items-center justify-center rounded-full",
              "text-white/80 transition-all duration-200",
              "hover:bg-white/25 hover:text-white active:scale-90",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
            )}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
