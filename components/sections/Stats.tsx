"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkline } from "@/components/mockups/Charts";
import { cn } from "@/lib/utils";

/**
 * Animated stats band. Sits in a glass-card that overlaps the hero (-mt-12)
 * with a grid of count-up tiles, soft dividers and tasteful accent glows.
 */
export function Stats() {
  return (
    <section aria-label="Key results" className="section">
      <Reveal direction="up" amount={0.3}>
        <div
          className={cn(
            "glass-card relative z-20 -mt-12 overflow-hidden rounded-3xl px-6 py-8",
            "shadow-float sm:px-8 sm:py-10",
          )}
        >
          {/* ── ambient backdrop ───────────────────────────────── */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-[0.5]"
          />
          {/* top hairline sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
          />
          {/* soft emerald glow, left */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-20 -z-10 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
          />
          {/* soft sky/violet glow, right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-56 w-56 rounded-full bg-wing-sky/15 blur-3xl"
          />

          {/* tiny eyebrow that floats above the grid on larger screens */}
          <div className="mb-7 flex items-center justify-center sm:mb-9">
            <span
              className={cn(
                "chip inline-flex items-center gap-1.5",
                "text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft",
              )}
            >
              <TrendingUp className="h-3.5 w-3.5 text-brand-600" />
              Trusted at scale
            </span>
          </div>

          {/* ── stats grid ─────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-y-9 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-black/5">
            {STATS.map((s, i) => {
              const isFirst = i === 0;
              return (
                <Reveal
                  key={s.label}
                  direction="up"
                  delay={i * 0.08}
                  amount={0.4}
                  className="group relative px-2 sm:px-4 lg:px-6"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* value */}
                    <div className="relative">
                      <span
                        className={cn(
                          "font-display text-4xl font-extrabold tracking-tight sm:text-5xl",
                          isFirst ? "text-gradient" : "text-ink",
                        )}
                      >
                        <Counter
                          value={s.value}
                          prefix={"prefix" in s ? s.prefix : undefined}
                          suffix={s.suffix}
                        />
                      </span>
                      {/* hover underglow accent */}
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute -inset-x-3 -bottom-2 h-2 rounded-full",
                          "bg-brand-gradient opacity-0 blur-md transition-opacity duration-500",
                          "group-hover:opacity-60",
                        )}
                      />
                    </div>

                    {/* animated micro-sparkline that draws a subtle trend */}
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0.5 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.08 + 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-3 origin-center"
                      aria-hidden
                    >
                      <Sparkline
                        data={SPARKS[i % SPARKS.length]}
                        width={76}
                        height={22}
                        color={ACCENTS[i % ACCENTS.length].line}
                        fill={ACCENTS[i % ACCENTS.length].fill}
                      />
                    </motion.div>

                    {/* label */}
                    <span className="mt-2.5 text-xs font-semibold uppercase tracking-wide text-ink-muted sm:text-sm">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ── bottom progress shimmer ────────────────────────── */}
          <div
            aria-hidden
            className="relative mt-8 hidden h-px overflow-hidden sm:mt-10 sm:block"
          >
            <div className="absolute inset-0 bg-black/5" />
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
              animate={{ x: ["-120%", "420%"] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Gentle upward-trending micro-series, one per stat tile. */
const SPARKS: number[][] = [
  [4, 5, 4, 6, 7, 6, 8, 9],
  [3, 4, 4, 5, 5, 7, 8, 9],
  [5, 4, 6, 6, 7, 8, 8, 10],
  [2, 4, 3, 5, 6, 7, 9, 10],
];

/** Butterfly-gradient accents cycled across the sparklines. */
const ACCENTS = [
  { line: "#10b981", fill: "rgba(16,185,129,0.14)" }, // emerald
  { line: "#14b8a6", fill: "rgba(20,184,166,0.14)" }, // teal
  { line: "#0ea5e9", fill: "rgba(14,165,233,0.14)" }, // sky
  { line: "#7c3aed", fill: "rgba(124,58,237,0.14)" }, // violet
];
