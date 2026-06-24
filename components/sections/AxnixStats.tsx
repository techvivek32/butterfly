"use client";

import { motion, type Variants } from "framer-motion";
import { STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function AxnixStats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* soft green wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-200/40 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="mx-auto font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:whitespace-nowrap sm:text-5xl">
            Trusted to drive real results, at scale
          </h2>
        </motion.div>

        {/* Stat boxes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white px-6 py-10 text-center shadow-[0_24px_60px_-40px_rgba(15,80,40,0.5)]"
            >
              {/* hover glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-300/0 blur-2xl transition-all duration-500 group-hover:bg-brand-300/40"
              />
              <Counter
                value={s.value}
                prefix={"prefix" in s ? s.prefix : ""}
                suffix={s.suffix}
                className="relative bg-brand-gradient bg-clip-text font-display text-5xl font-extrabold tracking-tight text-transparent"
              />
              <div className="relative mt-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
