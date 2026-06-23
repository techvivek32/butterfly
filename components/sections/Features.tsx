"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHY_STATS, FEATURE_GRID } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { BrowserFrame } from "@/components/mockups/Frames";
import { Mockup } from "@/components/mockups/Mockups";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Per-tint styling map. Drives the soft wash, the glow blob and the label hue. */
const TINTS: Record<
  string,
  { wash: string; blob: string; ring: string; text: string; hex: string; label: string }
> = {
  violet: {
    wash: "from-wing-violet/10",
    blob: "bg-wing-violet/25",
    ring: "ring-wing-violet/20",
    text: "text-wing-violet",
    hex: "#7c3aed",
    label: "Unified Inbox",
  },
  amber: {
    wash: "from-wing-amber/10",
    blob: "bg-wing-amber/25",
    ring: "ring-wing-amber/20",
    text: "text-wing-amber",
    hex: "#f59e0b",
    label: "Live Insights",
  },
  sky: {
    wash: "from-wing-sky/10",
    blob: "bg-wing-sky/25",
    ring: "ring-wing-sky/20",
    text: "text-wing-sky",
    hex: "#0ea5e9",
    label: "No-Code",
  },
  teal: {
    wash: "from-wing-teal/10",
    blob: "bg-wing-teal/25",
    ring: "ring-wing-teal/20",
    text: "text-wing-teal",
    hex: "#14b8a6",
    label: "Broadcast",
  },
};

const CHECKS = [
  "Free Onboarding",
  "Zero Setup Fee",
  "Free Website Widget",
  "Free QR & Link",
  "Free WhatsApp API",
] as const;

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* ----------------------- backdrop wash ----------------------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-wing-violet/10 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-wing-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.18] mask-fade-b" />
      </div>

      <div className="section">
        {/* ============================================================= */}
        {/* PART A — Why Butterfly?                                        */}
        {/* ============================================================= */}
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="chip mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-wing-violet" />
            <span className="font-semibold text-ink-soft">Built to convert</span>
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Why Butterfly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Butterfly brings together actionable notifications, automation and customer
            support in one place.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {WHY_STATS.map((s, i) => (
            <RevealItem key={s.label}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl glass-card p-6 text-center"
              >
                {/* corner glow that brightens on hover */}
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-gradient opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
                <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-sm text-ink-muted">{s.label}</div>
                {/* tiny animated underline */}
                <span className="mx-auto mt-3 block h-0.5 w-6 rounded-full bg-brand-gradient transition-all duration-300 group-hover:w-12" />
                {/* delayed shimmer dot, keeps the tile alive */}
                <motion.span
                  className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-brand-400"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* ============================================================= */}
        {/* PART B — Advanced features that drive conversions             */}
        {/* ============================================================= */}
        <Reveal direction="up" className="mx-auto mt-24 max-w-3xl text-center sm:mt-28">
          <span className="chip mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-wing-violet" />
            <span className="font-semibold text-ink-soft">Advanced features</span>
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink">
            Advanced Features that drive{" "}
            <span className="text-gradient">Conversions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            <span className="font-semibold text-ink">3x</span> your revenue using the
            Butterfly platform
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-2" amount={0.15}>
          {FEATURE_GRID.map((card, i) => {
            const t = TINTS[card.tint] ?? TINTS.teal;
            return (
              <RevealItem key={card.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br to-transparent p-6 shadow-card transition-shadow duration-300 hover:shadow-float sm:p-7",
                    t.wash
                  )}
                >
                  {/* soft tinted glow blob */}
                  <span
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-90",
                      t.blob
                    )}
                  />
                  {/* faint grid overlay for texture */}
                  <span className="pointer-events-none absolute inset-0 bg-dots opacity-[0.4]" />

                  {/* header row */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold ring-1 backdrop-blur",
                          t.text,
                          t.ring
                        )}
                      >
                        <TrendingUp className="h-3 w-3" />
                        {t.label}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
                        {card.body}
                      </p>
                    </div>

                    {/* step index badge */}
                    <span
                      className="hidden h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold text-white shadow-soft sm:grid"
                      style={{ background: t.hex }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* mockup — tilted, floating, in a real browser chrome */}
                  <div className="perspective relative mt-6 flex-1">
                    {/* tinted glow under the frame */}
                    <span
                      className={cn(
                        "pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] opacity-40 blur-2xl",
                        t.blob
                      )}
                    />
                    <motion.div
                      className="preserve-3d relative"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    >
                      <BrowserFrame
                        url={`app.butterfly.io/${card.mock}`}
                        className="shadow-float transition-transform duration-500 group-hover:scale-[1.015]"
                      >
                        <Mockup name={card.mock} />
                      </BrowserFrame>
                    </motion.div>
                  </div>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        {/* ----------------------- feature checks row ----------------------- */}
        <Reveal direction="up" delay={0.05} className="mt-12">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {CHECKS.map((c, i) => (
              <motion.li
                key={c}
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />
                <span className="text-sm font-medium text-ink-soft">{c}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
