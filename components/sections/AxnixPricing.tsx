"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

const FEATURES = [
  "Limited access to core features.",
  "Basic analytics and reporting.",
  "No additional add-ons.",
  "Web, desktop & mobile apps.",
];

const PLANS = [
  { name: "Starter", price: "$19", highlight: false },
  { name: "Premium", price: "$99", highlight: true },
  { name: "Standard", price: "$119", highlight: false },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function AxnixPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl">
          Flexible pricing plans
          <br />
          choose your best.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
          Select the plan that fits your business needs and scale effortlessly
          with Axnix.
        </p>
      </motion.div>

      {/* Plans */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mx-auto mt-16 grid max-w-5xl items-center gap-6 lg:grid-cols-3"
      >
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </motion.div>
    </section>
  );
}

function PlanCard({
  plan,
}: {
  plan: { name: string; price: string; highlight: boolean };
}) {
  const { highlight } = plan;
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={
        highlight
          ? "relative rounded-[28px] bg-neutral-900 px-7 py-12 text-white shadow-[0_40px_90px_-40px_rgba(13,22,34,0.7)] lg:py-14"
          : "relative rounded-[28px] border border-black/10 bg-white px-7 py-10 text-neutral-900 shadow-[0_24px_60px_-50px_rgba(13,22,34,0.4)]"
      }
    >
      {/* name */}
      <div
        className={`text-center text-base font-semibold ${highlight ? "text-white" : "text-neutral-800"}`}
      >
        {plan.name}
      </div>

      {/* price */}
      <div className="mt-7 text-center">
        <span className="font-display text-5xl font-extrabold tracking-tight">
          {plan.price}
        </span>
        <span
          className={`text-lg font-medium ${highlight ? "text-white/70" : "text-neutral-400"}`}
        >
          /month
        </span>
      </div>
      <div
        className={`mt-2 text-center text-sm ${highlight ? "text-white/60" : "text-neutral-400"}`}
      >
        Billed monthly
      </div>

      {/* CTA */}
      <a
        href="#get-started"
        className={
          highlight
            ? "mt-7 block rounded-full border border-white/40 py-3.5 text-center text-[15px] font-bold text-white transition-colors duration-200 hover:bg-white hover:text-neutral-900"
            : "mt-7 block rounded-full border border-neutral-300 py-3.5 text-center text-[15px] font-bold text-neutral-900 transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
        }
      >
        Get started now
      </a>

      {/* features */}
      <ul className="mt-9 space-y-5">
        {FEATURES.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <Check
              className={`h-4 w-4 shrink-0 ${highlight ? "text-white" : "text-neutral-900"}`}
              strokeWidth={2.5}
            />
            <span
              className={`text-[15px] ${highlight ? "text-white/85" : "text-neutral-600"}`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
