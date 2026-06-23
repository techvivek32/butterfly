"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Users, Quote, type LucideIcon } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Avatar } from "@/components/mockups/Frames";
import { PILLARS, BIG_TESTIMONIAL } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  sparkles: Sparkles,
  users: Users,
};

/** A friendly AI robot mascot built entirely from CSS + SVG. */
function RobotMascot() {
  return (
    <div className="relative grid place-items-center">
      {/* Pulsing halo rings */}
      <span className="pointer-events-none absolute h-44 w-44 rounded-full bg-brand-400/20 animate-pulse-ring sm:h-52 sm:w-52" />
      <span
        className="pointer-events-none absolute h-44 w-44 rounded-full bg-wing-teal/15 animate-pulse-ring sm:h-52 sm:w-52"
        style={{ animationDelay: "1s" }}
      />
      {/* Soft glow behind the bot */}
      <span className="pointer-events-none absolute h-36 w-36 rounded-full bg-brand-gradient opacity-30 blur-2xl" />

      {/* The robot itself, gently floating */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <div className="absolute left-1/2 -top-5 flex -translate-x-1/2 flex-col items-center">
          <motion.span
            className="h-2.5 w-2.5 rounded-full bg-wing-teal shadow-[0_0_12px_3px_rgba(20,184,166,0.85)]"
            animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="h-4 w-[3px] rounded-full bg-white/40" />
        </div>

        {/* Head */}
        <div className="relative h-24 w-28 rounded-2xl bg-gradient-to-br from-[#0e3a2c] via-[#0c2e3f] to-[#0a1410] p-[1.5px] shadow-[0_18px_45px_-10px_rgba(16,185,129,0.5)]">
          <div className="relative grid h-full w-full place-items-center rounded-[14px] bg-gradient-to-br from-[#103a4d] via-[#0d2b3a] to-[#0a1410] ring-1 ring-inset ring-white/10">
            {/* subtle screen sheen */}
            <span className="pointer-events-none absolute inset-x-2 top-1.5 h-6 rounded-full bg-white/5 blur-[2px]" />

            {/* Eyes */}
            <div className="flex items-center gap-4">
              {[0, 0.4].map((d, i) => (
                <motion.span
                  key={i}
                  className="block h-5 w-5 rounded-full bg-gradient-to-br from-cyan-300 to-brand-400 shadow-[0_0_14px_3px_rgba(34,211,238,0.7)]"
                  animate={{ scaleY: [1, 1, 0.15, 1, 1], opacity: [1, 1, 0.85, 1, 1] }}
                  transition={{
                    duration: 4,
                    times: [0, 0.45, 0.5, 0.55, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: d,
                  }}
                >
                  <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-white/90" />
                </motion.span>
              ))}
            </div>

            {/* Smile */}
            <svg
              className="mt-2 h-3 w-10 text-brand-300/80"
              viewBox="0 0 40 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 3C9 9 31 9 36 3"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>

            {/* Ear lights */}
            <span className="absolute -left-[5px] top-1/2 h-4 w-[6px] -translate-y-1/2 rounded-full bg-wing-violet/80 shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
            <span className="absolute -right-[5px] top-1/2 h-4 w-[6px] -translate-y-1/2 rounded-full bg-wing-sky/80 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
          </div>
        </div>

        {/* Neck + body */}
        <div className="mx-auto -mt-0.5 h-2 w-7 rounded-b bg-white/15" />
        <div className="relative mx-auto -mt-px h-12 w-24 rounded-2xl bg-gradient-to-br from-[#0d2b3a] to-[#0a1410] ring-1 ring-inset ring-white/10">
          {/* chest light */}
          <motion.span
            className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient"
            animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Arms */}
          <motion.span
            className="absolute -left-3 top-2 h-2 w-5 origin-right rounded-full bg-white/20"
            animate={{ rotate: [0, -14, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute -right-3 top-2 h-2 w-5 origin-left rounded-full bg-white/20"
            animate={{ rotate: [0, 14, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function Pillars() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 p-8 shadow-[0_24px_70px_-40px_rgba(10,20,16,0.22)] sm:p-14">
        {/* Backdrop layers */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
        </div>

        <div className="relative">
          {/* Heading */}
          <Reveal direction="up">
            <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              We exist to remove friction from growth and give business owners the
              systems they need to{" "}
              <span className="text-gradient">operate, scale and win</span>
            </h2>
          </Reveal>

          {/* Mascot */}
          <Reveal direction="none" delay={0.1} className="mt-10 flex justify-center sm:mt-12">
            <RobotMascot />
          </Reveal>

          {/* Pillars grid */}
          <RevealStagger className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">
            {PILLARS.map((p) => {
              const Icon = ICONS[p.icon] ?? Sparkles;
              return (
                <RevealItem key={p.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group h-full rounded-2xl border border-black/5 bg-white p-5 shadow-card transition-all hover:border-brand-200 hover:shadow-soft"
                  >
                    <div className="w-fit rounded-xl bg-brand-gradient p-2 text-white shadow-glow">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {p.body}
                    </p>
                    {/* Accent underline that grows on hover */}
                    <span className="mt-4 block h-0.5 w-8 rounded-full bg-brand-gradient transition-all duration-300 group-hover:w-16" />
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>

          {/* Big testimonial */}
          <Reveal direction="up" delay={0.05} className="mt-12 sm:mt-14">
            <figure className="glass-card mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
              <Quote
                className="h-9 w-9 text-brand-500/30"
                fill="currentColor"
                strokeWidth={0}
                aria-hidden
              />
              <blockquote className="mt-3 text-lg leading-relaxed text-ink-soft sm:text-xl">
                {BIG_TESTIMONIAL.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar
                  name={BIG_TESTIMONIAL.name}
                  color={BIG_TESTIMONIAL.color}
                  size={44}
                  ring
                />
                <div className="leading-tight">
                  <div className="font-semibold text-ink">{BIG_TESTIMONIAL.name}</div>
                  <div className="text-sm text-ink-muted">{BIG_TESTIMONIAL.role}</div>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="chip">Verified customer</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
