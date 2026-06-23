"use client";

import { motion } from "framer-motion";
import { AxnixDashboard } from "@/components/mockups/AxnixDashboard";

export function AxnixHero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Vivid green glow, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] -top-[22%] h-[760px] w-[760px] rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(150,222,60,0.95) 0%, rgba(110,217,87,0.6) 32%, rgba(150,222,60,0) 66%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#5bbf3f]" />
            Multi-Channel Marketing
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-7 max-w-4xl text-center font-display text-5xl font-bold leading-[1.04] tracking-[-0.02em] text-neutral-900 sm:text-6xl lg:text-7xl"
        >
          Automate workflows
          <br />
          boost conversions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-neutral-500"
        >
          Axnix makes it simple to run email campaigns, trigger workflows, and
          optimize conversions — all in one smart platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-9 flex items-center justify-center gap-3"
        >
          <a
            href="#get-started"
            className="rounded-full bg-neutral-900 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98]"
          >
            Get started free
          </a>
          <a
            href="#demo"
            className="rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-neutral-900 transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98]"
          >
            Watch demo
          </a>
        </motion.div>

        {/* Product shot — cropped at the bottom like the reference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 max-h-[440px] max-w-5xl overflow-hidden px-1"
        >
          <AxnixDashboard />
        </motion.div>
      </div>
    </section>
  );
}
