"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlowOrbs } from "@/components/ui/Decor";
import { ButterflyMark } from "@/components/brand/ButterflyMark";
import { PRICING } from "@/lib/data";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

/**
 * Pricing — two-card plan grid with a Monthly / Annual billing toggle.
 *
 * Annual billing renders the monthly-equivalent of paying for 10 months
 * across the year (Math.round(price * 10 / 12)) and surfaces a "2 months
 * free" badge. The popular plan is a dark, glowing card with an animated
 * gradient ring; the starter plan is a glass card.
 */
export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const annual = billing === "annual";

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      {/* ── ambient backdrop ──────────────────────────────────────── */}
      <GlowOrbs />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-mesh-light opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent"
      />

      <div className="section">
        {/* ── heading ─────────────────────────────────────────────── */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="down" amount={0.4}>
            <span className="chip mx-auto">
              <Sparkles className="h-3.5 w-3.5 text-brand-600" />
              Simple pricing
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              See Our{" "}
              <span className="relative inline-flex items-center gap-2 whitespace-nowrap">
                <span className="text-gradient">Pricing</span>
                <ButterflyMark
                  className="h-8 w-8 sm:h-9 sm:w-9"
                  flutter
                  idSuffix="pricing-heading"
                />
              </span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className="mt-4 text-base text-ink-muted sm:text-lg">
              Start free for 14 days. No credit card required.
            </p>
          </Reveal>

          {/* ── billing toggle ────────────────────────────────────── */}
          <Reveal direction="up" delay={0.15}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div
                role="tablist"
                aria-label="Billing period"
                className="glass relative inline-flex items-center rounded-full p-1 shadow-soft ring-1 ring-black/5"
              >
                {(
                  [
                    { key: "monthly", label: "Monthly" },
                    { key: "annual", label: "Annual" },
                  ] as const
                ).map((opt) => {
                  const active = billing === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setBilling(opt.key)}
                      className={cn(
                        "relative z-10 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 sm:px-6",
                        active ? "text-white" : "text-ink-muted hover:text-ink",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="billing-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-gradient shadow-glow"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {opt.label}
                      {opt.key === "annual" && (
                        <span
                          className={cn(
                            "rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none transition-colors duration-300",
                            active
                              ? "bg-white/20 text-white"
                              : "bg-wing-amber/15 text-wing-amber",
                          )}
                        >
                          -17%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* contextual savings line */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={billing}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-ink-muted"
                >
                  {annual ? (
                    <>
                      <Zap className="h-3.5 w-3.5 text-wing-amber" />
                      You&apos;re getting 2 months on the house
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-600" />
                      Switch to annual and save 2 months
                    </>
                  )}
                </motion.p>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* ── plan cards ──────────────────────────────────────────── */}
        <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 sm:mt-14 sm:grid-cols-2">
          {PRICING.map((plan, i) => {
            const displayed = annual
              ? Math.round((plan.price * 10) / 12)
              : plan.price;

            return (
              <Reveal
                key={plan.name}
                direction={i === 0 ? "right" : "left"}
                delay={0.05 * i}
                amount={0.2}
              >
                {plan.popular ? (
                  <PopularCard
                    plan={plan}
                    displayed={displayed}
                    annual={annual}
                    billing={billing}
                  />
                ) : (
                  <StarterCard
                    plan={plan}
                    displayed={displayed}
                    annual={annual}
                    billing={billing}
                  />
                )}
              </Reveal>
            );
          })}
        </div>

        {/* ── trust footer ────────────────────────────────────────── */}
        <Reveal direction="up" delay={0.1} amount={0.5}>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted sm:mt-12">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              No credit card required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-500" />
              Free migration support
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Shared types                                                         */
/* ─────────────────────────────────────────────────────────────────── */

type Plan = (typeof PRICING)[number];

type CardProps = {
  plan: Plan;
  displayed: number;
  annual: boolean;
  billing: Billing;
};

/** Animated, key-swapping price number for smooth toggle transitions. */
function AnimatedPrice({
  value,
  billing,
  className,
}: {
  value: number;
  billing: Billing;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-baseline tabular-nums", className)}>
      $
      <span className="relative inline-block overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`${billing}-${value}`}
            initial={{ y: "0.55em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-0.55em", opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Popular (dark) card                                                  */
/* ─────────────────────────────────────────────────────────────────── */

function PopularCard({ plan, displayed, annual, billing }: CardProps) {
  return (
    <div className="relative h-full sm:scale-[1.03]">
      {/* animated gradient ring */}
      <span
        aria-hidden
        className="absolute -inset-px -z-10 rounded-3xl bg-brand-gradient bg-[length:200%_200%] animate-gradient-pan opacity-90 blur-[1px]"
      />
      <span
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-[1.75rem] bg-brand-gradient opacity-25 blur-2xl"
      />

      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white shadow-float",
          "bg-gradient-to-br from-[#06231a] to-[#0a1410]",
        )}
      >
        {/* inner ambient glow + grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/70 to-transparent"
        />

        {/* MOST POPULAR badge */}
        <div className="absolute right-6 top-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-glow">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </span>
        </div>

        <div className="relative flex h-full flex-col">
          {/* name pill */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300 shadow-glow" />
            {plan.name}
          </span>

          {/* price */}
          <div className="mt-6">
            <div className="flex items-end gap-1.5">
              <AnimatedPrice
                value={displayed}
                billing={billing}
                className="font-display text-5xl font-extrabold leading-none text-white"
              />
              <span className="mb-1 text-sm font-medium text-white/55">/mo</span>
            </div>
            <div className="mt-2 h-5">
              {annual && (
                <span className="inline-flex items-center gap-1 rounded-full bg-wing-amber/15 px-2 py-0.5 text-[11px] font-semibold text-wing-amber ring-1 ring-wing-amber/30">
                  <Zap className="h-3 w-3" />
                  2 months free
                </span>
              )}
            </div>
          </div>

          {/* blurb */}
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            {plan.blurb}
          </p>

          {/* divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* features */}
          <ul className="space-y-3.5">
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-300"
                  strokeWidth={2.2}
                />
                <span className="text-sm leading-snug text-white/85">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="#"
              className="btn-primary group w-full bg-brand-gradient bg-[length:200%_200%] animate-gradient-pan"
            >
              Start Your Trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="text-center text-[11px] text-white/45">
              Experience it for 14 Days FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Starter (glass) card                                                 */
/* ─────────────────────────────────────────────────────────────────── */

function StarterCard({ plan, displayed, annual, billing }: CardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-ink glass-card transition-shadow duration-300 hover:shadow-card">
      {/* subtle top sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col">
        {/* name pill */}
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          {plan.name}
        </span>

        {/* price */}
        <div className="mt-6">
          <div className="flex items-end gap-1.5">
            <AnimatedPrice
              value={displayed}
              billing={billing}
              className="font-display text-5xl font-extrabold leading-none text-ink"
            />
            <span className="mb-1 text-sm font-medium text-ink-muted">/mo</span>
          </div>
          <div className="mt-2 h-5">
            {annual && (
              <span className="inline-flex items-center gap-1 rounded-full bg-wing-amber/10 px-2 py-0.5 text-[11px] font-semibold text-wing-amber ring-1 ring-wing-amber/30">
                <Zap className="h-3 w-3" />
                2 months free
              </span>
            )}
          </div>
        </div>

        {/* blurb */}
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {plan.blurb}
        </p>

        {/* divider */}
        <div className="my-6 h-px w-full bg-black/5" />

        {/* features */}
        <ul className="space-y-3.5">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                strokeWidth={2.2}
              />
              <span className="text-sm leading-snug text-ink-soft">{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="#"
            className={cn(
              "group/cta inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 bg-white/60 px-6 py-3",
              "text-sm font-semibold text-brand-700 backdrop-blur transition-all duration-300",
              "hover:border-brand-300 hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-soft",
            )}
          >
            Start Your Trial
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </a>
          <p className="text-center text-[11px] text-ink-muted">
            Experience it for 14 Days FREE
          </p>
        </div>
      </div>
    </div>
  );
}
