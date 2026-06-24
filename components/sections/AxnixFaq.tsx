"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We provide full-service digital marketing including SEO, paid ads, social media, branding, and web design.",
  },
  {
    q: "How do you work?",
    a: "We start with a quick onboarding, map your goals into Axnix, then automate the busywork — so you can focus on growth instead of juggling tools.",
  },
  {
    q: "What makes you different?",
    a: "Axnix brings capture, nurture, close, evangelize and reactivate into one AI-powered platform, replacing a dozen disconnected tools.",
  },
  {
    q: "Why choose us?",
    a: "Teams trust Axnix to run their entire pipeline with real human support, transparent pricing, and results that scale with the business.",
  },
];

export function AxnixFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — intro */}
        <div className="relative">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-5 py-2 text-sm font-semibold text-brand-700 shadow-sm">
            FAQ
          </span>

          <h2 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl">
            Answers to
            <br />
            common questions.
          </h2>

          <a
            href="#get-started"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand-gradient py-2 pl-2 pr-7 text-white shadow-[0_16px_36px_-14px_rgba(22,189,94,0.7)] transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-900 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="text-[15px] font-bold">Get started</span>
          </a>

          {/* glowing accent dot */}
          <span className="pointer-events-none absolute -bottom-2 right-6 hidden h-3.5 w-3.5 rounded-full bg-brand-400 shadow-[0_0_24px_7px_rgba(61,212,126,0.6)] lg:block" />
        </div>

        {/* Right — accordion */}
        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = i === open;
            return (
              <div
                key={f.q}
                className={
                  "rounded-2xl border transition-colors duration-200 " +
                  (isOpen
                    ? "border-brand-200 bg-brand-50/70"
                    : "border-black/5 bg-white shadow-[0_10px_30px_-24px_rgba(13,22,34,0.4)]")
                }
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-neutral-900">{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-300 text-brand-600">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2.4} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2.4} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-neutral-600">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
