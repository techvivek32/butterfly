"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOLUTION_TABS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ButterflyMark } from "@/components/brand/ButterflyMark";
import { BrowserFrame } from "@/components/mockups/Frames";
import { Mockup } from "@/components/mockups/Mockups";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Solution() {
  const [active, setActive] = useState(0);
  const tab = SOLUTION_TABS[active];

  return (
    <section id="solution" className="relative overflow-hidden bg-white py-24">
      {/* subtle backdrop wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.25] mask-fade-b" />
      </div>

      <div className="section">
        {/* ============================= HEADER ============================= */}
        <Reveal className="mx-auto max-w-2xl text-center" direction="up">
          <span className="chip mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-wing-violet" />
            <span className="font-semibold text-ink-soft">All-in-one platform</span>
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Your all-in-one solution for{" "}
            <span className="text-gradient">business growth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-ink-muted">
            All the tools you need in one AI-powered platform.
          </p>
        </Reveal>

        {/* ============================= TAB BAR ============================= */}
        <Reveal direction="up" delay={0.1} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Solution stages"
            className="glass no-scrollbar mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 overflow-x-auto rounded-full p-1.5"
          >
            {SOLUTION_TABS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative z-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-400 sm:px-5",
                    isActive
                      ? "text-white"
                      : "text-ink-soft hover:text-brand-700"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tabHighlight"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-gradient shadow-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ============================= TAB CONTENT ============================= */}
        <div className="relative mt-14 min-h-[30rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
            >
              {/* ----------------------- LEFT ----------------------- */}
              <motion.div
                initial={{ opacity: 0, x: -26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {/* stage marker */}
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700">
                    {active + 1}
                  </span>
                  <span className="uppercase tracking-wide">{tab.label}</span>
                  <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-brand-300 to-transparent" />
                </div>

                <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink">
                  {tab.heading}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted">
                  {tab.blurb}
                </p>

                {/* features */}
                <motion.ul
                  className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.035, delayChildren: 0.12 } },
                  }}
                >
                  {tab.features.map((f) => (
                    <motion.li
                      key={f}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
                      }}
                      className="group flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm text-ink-soft transition-colors duration-300 group-hover:text-ink">
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
                  className="mt-9"
                >
                  <a href="#pricing" className="btn-primary group h-12 px-6 text-base">
                    Start 14 Day Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>

              {/* ----------------------- RIGHT ----------------------- */}
              <motion.div
                initial={{ opacity: 0, x: 32, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.97 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="relative"
              >
                <div className="perspective relative mx-auto w-full max-w-xl">
                  {/* soft brand glow blob behind the frame */}
                  <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl" />
                  <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-wing-violet/20 blur-3xl" />

                  {/* tilted dashboard */}
                  <motion.div
                    className="preserve-3d relative"
                    style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BrowserFrame
                      url={`app.butterfly.io/${tab.key}`}
                      className="shadow-float"
                    >
                      <Mockup name={tab.mock} />
                    </BrowserFrame>
                  </motion.div>

                  {/* floating stage chip */}
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="absolute -bottom-3 -left-3 z-20 sm:-left-5"
                  >
                    <div className="glass-card flex animate-float items-center gap-2 rounded-2xl px-3 py-2 shadow-float">
                      <span className="relative grid h-7 w-7 place-items-center rounded-full bg-wing-violet/10">
                        <span className="absolute inset-0 animate-pulse-ring rounded-full ring-2 ring-brand-400/40" />
                        <ButterflyMark className="h-4 w-4" flutter idSuffix={`solution-${tab.key}`} />
                      </span>
                      <div className="leading-tight">
                        <div className="text-xs font-bold text-ink">{tab.label}</div>
                        <div className="text-[10px] font-medium text-brand-600">AI-powered</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
