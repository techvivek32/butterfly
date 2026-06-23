"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PILLARS, BIG_TESTIMONIAL } from "@/lib/data";

export function AxnixMission() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8">
      {/* Dark → green gradient card */}
      <div className="relative rounded-[32px] bg-gradient-to-b from-[#04130c] via-[#0c7242] to-[#bdf0d4] px-6 pt-14 sm:px-12 sm:pt-16">
        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-center font-display text-3xl font-bold leading-[1.18] tracking-tight text-white sm:text-[2.6rem]">
          We exist to remove friction from growth and give business owners the
          systems they need to operate, scale and win
        </h2>

        {/* Three pillars */}
        <div className="relative z-10 mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={
                i > 0 ? "sm:border-l sm:border-white/15 sm:pl-8" : ""
              }
            >
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#0c7242]">
                  <Check className="h-3 w-3" strokeWidth={4} />
                </span>
                <span className="text-sm font-extrabold uppercase tracking-wider text-white">
                  {p.title}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Robot mascot */}
        <div className="relative z-0 mt-2 flex justify-center sm:mt-4">
          <RobotImage className="h-56 w-auto drop-shadow-[0_30px_40px_rgba(4,19,12,0.45)] sm:h-80" />
        </div>

        {/* Testimonial — overlaps the bottom edge */}
        <div className="relative z-10 mx-auto -mt-10 -mb-16 max-w-4xl rounded-2xl bg-white p-6 shadow-[0_40px_90px_-40px_rgba(4,19,12,0.6)] sm:-mt-12 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
            {/* Author */}
            <div className="shrink-0 sm:w-36">
              <div className="h-24 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-sky-300 to-sky-500 sm:h-28 sm:w-28">
                <span className="grid h-full w-full place-items-center font-display text-3xl font-bold text-white">
                  {initials(BIG_TESTIMONIAL.name)}
                </span>
              </div>
              <div className="mt-3">
                <div className="font-display text-base font-bold text-[#0a1f15]">
                  {BIG_TESTIMONIAL.name}
                </div>
                <div className="mt-0.5 text-sm text-neutral-500">
                  {BIG_TESTIMONIAL.role}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <svg
                viewBox="0 0 40 32"
                className="h-7 w-9 fill-sky-400"
                aria-hidden
              >
                <path d="M0 18C0 8 6 1 16 0l2 5C12 7 9 11 9 15h7v17H0V18zm22 0C22 8 28 1 38 0l2 5c-6 2-9 6-9 10h7v17H22V18z" />
              </svg>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-700 sm:text-base">
                {BIG_TESTIMONIAL.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Robot hero image. Falls back to a branded glow until /robot.png is added. */
function RobotImage({ className }: { className?: string }) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div className={`relative grid place-items-center ${className}`}>
        <span className="absolute h-40 w-40 rounded-full bg-white/30 blur-2xl" />
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none" aria-hidden>
          {[
            { cx: 12, top: 17, color: "#f5c518" },
            { cx: 24, top: 9, color: "#3b82f6" },
            { cx: 36, top: 13, color: "#22c55e" },
          ].map((a) => {
            const d = `M${a.cx},${a.top} L${a.cx + 7},${a.top + 7} L${a.cx + 3.5},${a.top + 7} L${a.cx + 3.5},40 L${a.cx - 3.5},40 L${a.cx - 3.5},${a.top + 7} L${a.cx - 7},${a.top + 7} Z`;
            return <path key={a.cx} d={d} fill={a.color} />;
          })}
        </svg>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/robot.png"
      alt="Axnix AI assistant robot"
      className={className}
      onError={() => setOk(false)}
    />
  );
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
