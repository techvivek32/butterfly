"use client";

import { motion } from "framer-motion";

/** Animated donut/ring chart. */
export function Donut({
  size = 96,
  stroke = 12,
  value = 0.72,
  color = "#10b981",
  track = "#e6f4ee",
  label,
  sub,
}: {
  size?: number;
  stroke?: number;
  value?: number;
  color?: string;
  track?: string;
  label?: string;
  sub?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - value) }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 grid place-items-center text-center leading-none">
          <div>
            <div className="font-display text-base font-extrabold text-ink">{label}</div>
            {sub && <div className="mt-0.5 text-[9px] font-medium text-ink-muted">{sub}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

/** Smooth animated sparkline/area line. */
export function Sparkline({
  data = [8, 14, 10, 18, 13, 22, 17, 26, 21, 30],
  width = 220,
  height = 70,
  color = "#10b981",
  fill = "rgba(16,185,129,0.16)",
}: {
  data?: number[];
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const pts = data.map((d, i) => {
    const x = i * stepX;
    const y = height - ((d - min) / range) * (height - 8) - 4;
    return [x, y] as const;
  });
  const line = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  return (
    <svg width={width} height={height} className="overflow-visible">
      <motion.path
        d={area}
        fill={fill}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      {pts.length > 0 && (
        <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r={3.5} fill={color} />
      )}
    </svg>
  );
}

/** Animated vertical bar chart. */
export function Bars({
  data = [40, 65, 50, 80, 60, 95, 72],
  width = 220,
  height = 90,
  colors = ["#10b981", "#34d399"],
}: {
  data?: number[];
  width?: number;
  height?: number;
  colors?: [string, string] | string[];
}) {
  const max = Math.max(...data) || 1;
  const gap = 8;
  const bw = (width - gap * (data.length - 1)) / data.length;
  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id="barfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1] ?? colors[0]} />
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const h = (d / max) * (height - 6);
        return (
          <motion.rect
            key={i}
            x={i * (bw + gap)}
            width={bw}
            rx={4}
            fill="url(#barfill)"
            initial={{ height: 0, y: height }}
            whileInView={{ height: h, y: height - h }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </svg>
  );
}

/** Five-star rating row. */
export function Stars({ rating = 5, size = 12 }: { rating?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden>
          <path
            d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"
            fill={i < rating ? "#f59e0b" : "#e5e7eb"}
          />
        </svg>
      ))}
    </div>
  );
}
