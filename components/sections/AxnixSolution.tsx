"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Filter,
  MessageCircle,
  CalendarCheck,
  Star,
  RefreshCw,
  Check,
  ChevronRight,
  User,
  type LucideIcon,
} from "lucide-react";
import { SOLUTION_TABS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  capture: Filter,
  nurture: MessageCircle,
  close: CalendarCheck,
  evangelize: Star,
  reactivate: RefreshCw,
};

const STATS: Record<string, string> = {
  capture: "1,248",
  nurture: "3,920",
  close: "$84.2k",
  evangelize: "4.9★",
  reactivate: "612",
};

export function AxnixSolution() {
  const [active, setActive] = useState(0);
  const tab = SOLUTION_TABS[active];
  const Icon = ICONS[tab.key] ?? Filter;

  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      {/* Heading */}
      <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
        Your all-in-one solution for business growth
      </h2>
      <p className="mt-4 text-center text-lg text-neutral-500">
        All the tools you need in one AI-powered platform
      </p>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {SOLUTION_TABS.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={
                isActive
                  ? "rounded-xl bg-[#fcd34d] px-6 py-2.5 text-[15px] font-bold text-neutral-900 shadow-[0_10px_34px_-6px_rgba(251,191,36,0.75)] ring-1 ring-amber-200/60 transition"
                  : "rounded-xl border border-neutral-200 bg-white px-6 py-2.5 text-[15px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="mt-9 rounded-[28px] bg-[#f4f5f3] p-7 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-stretch gap-10 lg:grid-cols-2"
          >
            {/* Left — content */}
            <div className="flex flex-col">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fcd34d] text-neutral-900">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>

              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-neutral-900">
                {tab.heading}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                {tab.blurb}
              </p>

              <ul className="mt-7 text-[15px] text-neutral-600 sm:columns-2 sm:gap-x-10">
                {tab.features.map((f) => (
                  <li
                    key={f}
                    className="mb-3.5 flex items-start gap-2.5 break-inside-avoid"
                  >
                    <span className="mt-0.5 inline-grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full bg-neutral-900 text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <a
                  href="#get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#16233a] px-7 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#1e3052] active:scale-[0.98]"
                >
                  Start 14 Day Free Trial
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right — preview */}
            {tab.key === "capture" ? (
              <ChatMockup />
            ) : (
              <PreviewPanel stat={STATS[tab.key] ?? "1,248"} Icon={Icon} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** A soft, on-brand product preview shown alongside each tab. */
function PreviewPanel({ stat, Icon }: { stat: string; Icon: LucideIcon }) {
  return (
    <div className="relative hidden min-h-[360px] overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_30px_70px_-40px_rgba(15,30,20,0.3)] lg:block">
      {/* faux window bar */}
      <div className="flex items-center gap-1.5 border-b border-neutral-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fcd34d] text-neutral-900">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <div className="h-2.5 w-28 rounded-full bg-neutral-200" />
            <div className="mt-2 h-2 w-20 rounded-full bg-neutral-100" />
          </div>
        </div>

        {/* skeleton rows */}
        <div className="mt-6 space-y-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 p-3"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fcd34d]/30 text-amber-500">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <div className="flex-1">
                <div className="h-2.5 w-2/3 rounded-full bg-neutral-200" />
                <div className="mt-2 h-2 w-1/3 rounded-full bg-neutral-100" />
              </div>
              <div className="h-6 w-14 rounded-md bg-neutral-100" />
            </div>
          ))}
        </div>

        {/* mini stat / chart */}
        <div className="mt-5 flex items-end justify-between gap-3 rounded-xl bg-neutral-50/70 p-4">
          <div className="leading-tight">
            <div className="h-2.5 w-16 rounded-full bg-neutral-200" />
            <div className="mt-2 font-display text-2xl font-extrabold text-neutral-900">
              {stat}
            </div>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {[40, 62, 48, 80, 58, 92].map((h, i) => (
              <span
                key={i}
                className="w-3 rounded-t bg-gradient-to-t from-[#fcd34d] to-[#fde68a]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Missed-call text-back conversation — used on the Capture card. */
function ChatMockup() {
  return (
    <div className="hidden min-h-[360px] flex-col justify-center gap-6 lg:flex">
      {/* business → customer */}
      <div className="flex items-center gap-3">
        <GrowthAvatar />
        <Bubble side="in">
          Sorry we missed your call!
          <br />
          Want to book an appointment?
        </Bubble>
      </div>

      {/* customer → business */}
      <div className="flex items-center justify-end gap-3">
        <Bubble side="out">Yes, is 2 PM next Tuesday free?</Bubble>
        <PersonAvatar />
      </div>

      {/* business → customer */}
      <div className="flex items-center gap-3">
        <GrowthAvatar />
        <Bubble side="in">
          Yes! You&rsquo;re all set for 2 PM
          <br />
          next Tuesday. Thank you!
        </Bubble>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  return (
    <div
      className={
        side === "in"
          ? "max-w-[78%] rounded-3xl rounded-bl-md bg-[#2f5cf5] px-5 py-3.5 text-[17px] font-medium leading-snug text-white"
          : "max-w-[78%] rounded-3xl rounded-br-md border border-neutral-200 bg-white px-5 py-3.5 text-[17px] font-medium leading-snug text-neutral-800 shadow-sm"
      }
    >
      {children}
    </div>
  );
}

function GrowthAvatar() {
  const arrows = [
    { cx: 12, top: 17, color: "#2f5cf5" },
    { cx: 24, top: 9, color: "#f5c518" },
    { cx: 36, top: 13, color: "#20c45f" },
  ];
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-[0_4px_14px_-4px_rgba(15,30,20,0.25)]">
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden>
        {arrows.map((a) => {
          const half = 7;
          const quarter = 3.5;
          const base = 40;
          const d = `M${a.cx},${a.top} L${a.cx + half},${a.top + half} L${a.cx + quarter},${a.top + half} L${a.cx + quarter},${base} L${a.cx - quarter},${base} L${a.cx - quarter},${a.top + half} L${a.cx - half},${a.top + half} Z`;
          return <path key={a.cx} d={d} fill={a.color} />;
        })}
      </svg>
    </span>
  );
}

function PersonAvatar() {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#e9a06b] to-[#7b3f2a] shadow-[0_4px_14px_-4px_rgba(15,30,20,0.25)]">
      <User className="h-7 w-7 text-white/90" strokeWidth={2} fill="currentColor" />
    </span>
  );
}
