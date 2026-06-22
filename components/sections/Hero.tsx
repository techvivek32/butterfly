"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO } from "@/lib/data";
import { GlowOrbs, FloatingButterflies } from "@/components/ui/Decor";
import { ButterflyMark } from "@/components/brand/ButterflyMark";
import { BrowserFrame, Avatar } from "@/components/mockups/Frames";
import { Mockup } from "@/components/mockups/Mockups";
import { Donut, Stars } from "@/components/mockups/Charts";

/* Left-column entrance stagger */
const leftContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const leftItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Small trust avatars — invented people, brand-coherent colors */
const TRUST = [
  { name: "Olivia Carter", color: "#10b981" },
  { name: "Marcus Webb", color: "#0ea5e9" },
  { name: "Priya Nair", color: "#7c3aed" },
  { name: "Diego Sol", color: "#f59e0b" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-mesh-light"
    >
      {/* Animated backdrops */}
      <GlowOrbs />
      <FloatingButterflies />

      {/* subtle grid wash, masked at the bottom for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] mask-fade-b" />

      <div className="section grid items-center gap-12 pt-16 pb-24 lg:grid-cols-2 lg:gap-8 xl:gap-12">
        {/* ============================= LEFT ============================= */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div variants={leftItem}>
            <span className="chip group">
              <span className="relative grid h-4 w-4 place-items-center">
                <Sparkles className="h-3.5 w-3.5 text-wing-violet" />
              </span>
              <span className="bg-gradient-to-r from-wing-violet via-brand-600 to-wing-sky bg-clip-text font-semibold text-transparent">
                {HERO.badge}
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={leftItem}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl"
          >
            {HERO.titleLines.map((line, i) => {
              const isLast = i === HERO.titleLines.length - 1;
              return (
                <span key={line} className="block">
                  {isLast ? (
                    <span className="relative inline-block text-gradient">
                      {line}
                      {/* underline flourish */}
                      <svg
                        className="absolute -bottom-2 left-0 h-3 w-full"
                        viewBox="0 0 300 12"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden
                      >
                        <motion.path
                          d="M2 8C60 3 120 2 180 4C220 5 260 7 298 5"
                          stroke="url(#heroUnderline)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                        />
                        <defs>
                          <linearGradient
                            id="heroUnderline"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="55%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  ) : (
                    line
                  )}
                </span>
              );
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={leftItem}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted"
          >
            {HERO.subtitle}
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={leftItem}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#pricing"
              className="btn-primary group h-12 px-6 text-base"
            >
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#solution" className="btn-ghost group h-12 px-5 text-base">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              {HERO.secondaryCta}
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={leftItem}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {TRUST.map((p) => (
                  <Avatar
                    key={p.name}
                    name={p.name}
                    color={p.color}
                    size={28}
                    ring
                  />
                ))}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-[9px] font-bold text-white ring-2 ring-white">
                  60k
                </span>
              </div>
              <p className="text-sm font-medium text-ink-muted">
                Joined by{" "}
                <span className="font-bold text-ink">60,000+</span> businesses
              </p>
            </div>

            <div className="hidden h-8 w-px bg-black/10 sm:block" />

            <div className="flex items-center gap-2">
              <Stars rating={5} size={14} />
              <span className="text-sm font-semibold text-ink">4.9/5</span>
              <span className="text-sm text-ink-muted">avg rating</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================= RIGHT ============================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-4 lg:mt-0"
        >
          <div className="perspective relative mx-auto w-full max-w-xl">
            {/* glow halo behind the dashboard */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl" />

            {/* Tilted dashboard */}
            <motion.div
              className="preserve-3d relative"
              style={{ transform: "rotateY(-9deg) rotateX(5deg)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BrowserFrame
                url="app.butterfly.io/dashboard"
                className="shadow-float"
              >
                <Mockup name="reviews" />
              </BrowserFrame>
            </motion.div>

            {/* ---- Floating badge: Revenue ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -left-4 top-10 z-20 sm:-left-8"
            >
              <div className="glass-card flex animate-float items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-float">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-ink-muted">
                    Revenue
                  </div>
                  <div className="font-display text-base font-extrabold text-ink">
                    $24.5K
                  </div>
                </div>
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-bold text-brand-700">
                  +18%
                </span>
              </div>
            </motion.div>

            {/* ---- Floating badge: Read rate donut ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -right-3 top-1/3 z-20 sm:-right-7"
            >
              <div className="glass-card flex animate-float-slow items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-float">
                <Donut value={0.92} size={40} stroke={6} color="#0ea5e9" track="#dbeefb" />
                <div className="leading-tight">
                  <div className="font-display text-sm font-extrabold text-ink">
                    92%
                  </div>
                  <div className="text-[10px] font-medium text-ink-muted">
                    Read rate
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- Floating pill: Order Placed ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="absolute -bottom-4 left-6 z-20 sm:left-2"
            >
              <div className="flex animate-float items-center gap-2 rounded-full bg-brand-gradient px-3.5 py-2 text-white shadow-float [animation-delay:0.6s]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-xs font-bold">Order Placed</span>
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-white/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
              </div>
            </motion.div>

            {/* ---- Floating glass mini-card: AI replies ---- */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-2 -right-2 z-20 hidden sm:block"
            >
              <div className="glass-card flex animate-float-slow items-center gap-2 rounded-2xl px-3 py-2 shadow-float [animation-delay:0.3s]">
                <span className="relative grid h-7 w-7 place-items-center rounded-full bg-wing-violet/10">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full ring-2 ring-wing-violet/40" />
                  <ButterflyMark className="h-4 w-4" flutter idSuffix="hero-badge" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-ink">AI replied</div>
                  <div className="text-[10px] font-medium text-brand-600">
                    in 0.4s
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---- Floating standalone butterfly ---- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.35 }}
              className="absolute -right-6 -top-6 z-20 hidden lg:block"
            >
              <ButterflyMark
                className="h-12 w-12 animate-float drop-shadow-lg"
                flutter
                idSuffix="hero-float"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
