"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Filter,
  MessageCircle,
  Star,
  Trophy,
  MessageCircleReply,
  Check,
  ChevronRight,
  User,
  Clock,
  Mail,
  MessageSquare,
  Tag,
  MoreHorizontal,
  Plus,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { SOLUTION_TABS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  capture: Filter,
  nurture: MessageCircle,
  close: DollarSign,
  evangelize: Trophy,
  reactivate: MessageCircleReply,
};

/** How many features go in the left column (rest fall into the right). */
const SPLITS: Record<string, number> = {
  capture: 9,
  nurture: 6,
  close: 8,
  evangelize: 7,
  reactivate: 6,
};

export function AxnixSolution() {
  const tabs = SOLUTION_TABS;
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const tab = tabs[active];
  const Icon = ICONS[tab.key] ?? Filter;
  const splitAt = SPLITS[tab.key] ?? Math.ceil(tab.features.length / 2);
  const leftFeatures = tab.features.slice(0, splitAt);
  const rightFeatures = tab.features.slice(splitAt);

  const num = String(active + 1).padStart(2, "0");
  const total = String(tabs.length).padStart(2, "0");

  // Auto-advance through the journey; pauses while the user hovers the section.
  const DURATION = 6500;
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = performance.now();
    const id = setInterval(() => {
      const p = Math.min((performance.now() - start) / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        clearInterval(id);
        setActive((a) => (a + 1) % tabs.length);
      }
    }, 60);
    return () => clearInterval(id);
  }, [active, paused, tabs.length]);

  const select = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  // 0–80%: line spans from the first dot (10%) to the last (90%).
  const fill = Math.min((active + progress) / (tabs.length - 1), 1) * 80;

  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-300/20 blur-[90px]"
      />

      {/* Heading */}
      <div className="relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 sm:text-5xl">
          Your all-in-one solution for{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">business growth</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
          Five stages, one platform — guiding every lead from first touch to lifelong fan.
        </p>
      </div>

      {/* Journey stepper */}
      <div className="relative mx-auto mt-14 max-w-3xl">
        <div className="absolute left-[10%] right-[10%] top-6 h-[3px] -translate-y-1/2 rounded-full bg-neutral-200" />
        <div
          className="absolute left-[10%] top-6 h-[3px] -translate-y-1/2 rounded-full bg-brand-gradient transition-[width] duration-150 ease-linear"
          style={{ width: `${fill}%` }}
        />
        <div className="relative flex">
          {tabs.map((t, i) => {
            const done = i < active;
            const isActive = i === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => select(i)}
                className="group flex flex-1 flex-col items-center gap-3"
              >
                <span
                  className={
                    "grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold transition-all duration-300 " +
                    (isActive
                      ? "scale-110 bg-brand-gradient text-white shadow-[0_10px_28px_-6px_rgba(22,189,94,0.6)]"
                      : done
                        ? "bg-brand-500 text-white"
                        : "border border-neutral-200 bg-white text-neutral-400 group-hover:border-brand-300 group-hover:text-brand-600")
                  }
                >
                  {done ? (
                    <Check className="h-5 w-5" strokeWidth={3} />
                  ) : (
                    String(i + 1).padStart(2, "0")
                  )}
                </span>
                <span
                  className={
                    "hidden text-sm transition-colors sm:block " +
                    (isActive
                      ? "font-bold text-neutral-900"
                      : "font-medium text-neutral-400 group-hover:text-neutral-700")
                  }
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel with gradient border */}
      <div className="relative mt-12 rounded-[20px] bg-gradient-to-br from-brand-300/50 via-neutral-200/50 to-brand-500/40 p-px shadow-[0_40px_90px_-60px_rgba(15,80,40,0.4)]">
        <div className="relative overflow-hidden rounded-[19px] bg-gradient-to-br from-white to-brand-50/40 px-6 py-7 sm:px-10 sm:py-9">
          {/* inner glow + watermark step number */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-5 top-0 select-none font-display text-[8rem] font-black leading-none text-brand-500/[0.06] sm:text-[11rem]"
          >
            {num}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]"
            >
              {/* Left — content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3.5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white shadow-[0_12px_30px_-10px_rgba(22,189,94,0.7)]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                      Step {num} / {total} · {tab.label}
                    </div>
                    <div className="mt-1.5 h-1 w-10 rounded-full bg-brand-gradient" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-neutral-900">
                  {tab.heading}
                </h3>
                <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-neutral-500">
                  {tab.blurb}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-8 text-sm leading-snug text-neutral-600 sm:grid-cols-2">
                  {[leftFeatures, rightFeatures].map((col, ci) => (
                    <ul key={ci} className="space-y-2.5">
                      {col.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-grid h-5 w-5 shrink-0 place-items-center rounded-full bg-neutral-900 text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                <div className="mt-7">
                  <a
                    href="#get-started"
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#16233a] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#1e3052] active:scale-[0.98]"
                  >
                    Start 14 Day Free Trial
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right — preview */}
              {tab.key === "capture" ? (
                <ChatMockup />
              ) : tab.key === "nurture" ? (
                <WorkflowMockup />
              ) : tab.key === "close" ? (
                <CloseChatMockup />
              ) : tab.key === "evangelize" ? (
                <ReviewsMockup />
              ) : (
                <ReactivateMockup />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/** Missed-call text-back conversation — used on the Capture card. */
function ChatMockup() {
  return (
    <div className="hidden min-h-[240px] flex-col justify-center gap-4 lg:flex">
      {/* business → customer */}
      <div className="flex items-center gap-2.5">
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

/** Closing conversation — used on the Close card. */
function CloseChatMockup() {
  return (
    <div className="hidden min-h-[240px] flex-col justify-center gap-5 lg:flex">
      {/* customer → business */}
      <div className="flex items-center justify-end gap-3">
        <Bubble side="out">
          <span className="block text-right">
            This looks great.
            <br />
            What&rsquo;s the next step
            <br />
            to get started?
          </span>
        </Bubble>
        <PersonAvatar variant="man" />
      </div>

      {/* business → customer */}
      <div className="flex items-center justify-center gap-3 pr-10">
        <GrowthAvatar />
        <Bubble side="in">
          Awesome!
          <br />
          I&rsquo;ll send over the
          <br />
          payment link now.
        </Bubble>
      </div>
    </div>
  );
}

/** Average-reviews widget — used on the Evangelize card. */
function ReviewsMockup() {
  const bars = [
    { label: 5, pct: 60 },
    { label: 4, pct: 30 },
    { label: 3, pct: 10 },
    { label: 2, pct: 3 },
    { label: 1, pct: 3 },
  ];
  return (
    <div className="hidden min-h-[240px] items-center justify-center lg:flex">
      <div className="w-full max-w-[270px] rounded-2xl bg-white p-5 shadow-[0_30px_70px_-40px_rgba(15,30,20,0.3)]">
        <div className="text-center text-[13px] font-semibold text-neutral-500">Average Reviews</div>
        <div className="mt-1.5 text-center font-display text-3xl font-extrabold text-neutral-900">
          4.3/5
        </div>
        <div className="mt-3 flex justify-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" strokeWidth={0} />
          ))}
          {/* half star */}
          <span className="relative inline-block h-5 w-5">
            <Star className="h-5 w-5 text-neutral-200" fill="currentColor" strokeWidth={0} />
            <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <Star className="h-5 w-5 text-amber-400" fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        </div>

        <div className="my-5 h-px bg-neutral-100" />

        <div className="space-y-3">
          {bars.map((b) => (
            <div key={b.label} className="flex items-center gap-3 text-sm">
              <span className="flex w-7 shrink-0 items-center gap-1 font-medium text-neutral-700">
                {b.label}
                <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" strokeWidth={0} />
              </span>
              <div className="h-2 flex-1 rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: `${b.pct}%` }}
                />
              </div>
              <span className="w-11 shrink-0 text-right text-neutral-500">{b.pct} %</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  return (
    <div
      className={
        side === "in"
          ? "max-w-[80%] rounded-2xl rounded-bl-md bg-[#2f5cf5] px-4 py-2.5 text-[13.5px] font-medium leading-snug text-white"
          : "max-w-[80%] rounded-2xl rounded-br-md border border-neutral-200 bg-white px-4 py-2.5 text-[13.5px] font-medium leading-snug text-neutral-800 shadow-sm"
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
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white shadow-[0_4px_14px_-4px_rgba(15,30,20,0.25)]">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" aria-hidden>
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

function PersonAvatar({ variant = "woman" }: { variant?: "woman" | "man" }) {
  const grad =
    variant === "man"
      ? "from-[#5b6470] to-[#2b3038]"
      : "from-[#e9a06b] to-[#7b3f2a]";
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br ${grad} shadow-[0_4px_14px_-4px_rgba(15,30,20,0.25)]`}
    >
      <User className="h-6 w-6 text-white/90" strokeWidth={2} fill="currentColor" />
    </span>
  );
}

/** Automation flow — used on the Nurture card. */
function WorkflowMockup() {
  return (
    <div className="hidden min-h-[240px] flex-col justify-center lg:flex">
      <div className="mx-auto w-full max-w-[300px]">
        <WfNode
          icon={MessageCircle}
          iconBg="#e7f8ee"
          iconColor="#22c55e"
          title="WhatsApp Welcome Message"
        />
        <WfConnector />
        <WfNode icon={Clock} iconBg="#eef0fe" iconColor="#7c6cf0" title="Wait" sub="30 mins" />
        <WfConnector />
        <WfNode icon={Mail} iconBg="#e7f8ee" iconColor="#22c55e" title="Send Follow-Up Email" />

        {/* trailing line down to the message */}
        <div className="ml-[26px] h-8 w-px bg-neutral-200" />

        <div className="flex items-end gap-2.5">
          <GrowthAvatar />
          <div className="max-w-[230px] rounded-3xl rounded-bl-md bg-[#2f5cf5] px-4 py-3 text-[14px] font-medium leading-snug text-white">
            Hey! Just wanted to make sure you saw our WhatsApp message. Would you like me to get
            you scheduled this week?
          </div>
        </div>
      </div>
    </div>
  );
}

function WfNode({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  sub,
}: {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 shadow-[0_6px_18px_-12px_rgba(15,30,20,0.3)]">
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <div className="flex-1 leading-tight">
        <div className="text-[13px] font-semibold text-neutral-800">{title}</div>
        {sub && <div className="text-[11px] text-neutral-400">{sub}</div>}
      </div>
      <MoreHorizontal className="h-4 w-4 text-neutral-300" />
    </div>
  );
}

function WfConnector() {
  return (
    <div className="ml-[26px] flex flex-col items-center py-1.5">
      <div className="h-3 w-px bg-neutral-200" />
      <span className="grid h-5 w-5 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-300">
        <Plus className="h-3 w-3" strokeWidth={2.5} />
      </span>
      <div className="h-3 w-px bg-neutral-200" />
    </div>
  );
}

/** Trigger → offer flow with reply — used on the Reactivate card. */
function ReactivateMockup() {
  return (
    <div className="hidden min-h-[240px] flex-col justify-center lg:flex">
      <div className="mx-auto w-full max-w-[320px]">
        {/* Trigger node */}
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3.5 py-3 shadow-[0_6px_18px_-12px_rgba(15,30,20,0.3)]">
          <span
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
            style={{ backgroundColor: "#e8edfe", color: "#3b5bf5" }}
          >
            <Tag className="h-4 w-4" strokeWidth={2.2} />
          </span>
          <div className="flex-1 leading-tight">
            <div className="text-[12px] font-semibold text-[#3b5bf5]">Trigger</div>
            <div className="text-[13px] font-semibold text-neutral-800">Contact Tag</div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-neutral-300" />
        </div>

        <WfConnector />

        <WfNode
          icon={MessageSquare}
          iconBg="#e7f8ee"
          iconColor="#22c55e"
          title="Free Whitening Offer"
        />

        {/* trailing line down to the message */}
        <div className="ml-[26px] h-7 w-px bg-neutral-200" />

        <div className="flex items-end gap-2.5">
          <GrowthAvatar />
          <div className="max-w-[240px] rounded-3xl rounded-bl-md bg-[#2f5cf5] px-4 py-3 text-[14px] font-medium leading-snug text-white">
            Hey Liz, we&rsquo;re offering free whitening for past clients. Want to book?
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end gap-2.5">
          <div className="rounded-3xl rounded-br-md border border-neutral-200 bg-white px-4 py-3 text-[14px] font-medium text-neutral-800 shadow-sm">
            Yes, please!
          </div>
          <PersonAvatar />
        </div>
      </div>
    </div>
  );
}
