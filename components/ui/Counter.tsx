"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/** Counts up to `value` when scrolled into view. Supports decimals & affixes. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  duration = 1.8,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const dp = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(dp)),
    });
    return () => controls.stop();
  }, [inView, value, duration, dp, mv]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
