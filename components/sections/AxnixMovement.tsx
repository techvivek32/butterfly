"use client";

import { motion, type Variants } from "framer-motion";
import { MOVEMENT } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function AxnixMovement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Join the movement
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Our thriving community of the most successful and visionary digital
          marketers on the planet. Get all the training and resources you need to
          start or grow your business.
        </p>
      </motion.div>

      {/* Three columns */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="mx-auto mt-16 grid max-w-6xl gap-10 sm:grid-cols-3 sm:gap-0"
      >
        {MOVEMENT.map((m, i) => (
          <motion.div
            key={m.title}
            variants={item}
            className={i > 0 ? "sm:border-l sm:border-neutral-200 sm:pl-10" : "sm:pr-10"}
          >
            <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-neutral-900">
              {m.title}
            </h3>
            <p className="mt-5 text-[17px] leading-relaxed text-neutral-500">
              {m.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
