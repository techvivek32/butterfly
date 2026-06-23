"use client";

import { motion, type Variants } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Bell,
  Settings,
  RotateCcw,
  DollarSign,
  MessageCircle,
  Calendar,
  Phone,
  ClipboardCheck,
  FileText,
  Workflow,
  SquarePen,
  Wifi,
  Smartphone,
  TrendingUp,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

const POINTS = [
  { label: "Mobile App:", text: "Run your business from anywhere." },
  { label: "Award-winning support:", text: "Get real help from real people." },
  { label: "Automation:", text: "Set it up once and let it run." },
];

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function AxnixOnTheGo() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* ── ambient background, no box ─────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-300/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-200/30 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dots opacity-[0.5] [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* ── Left — copy ─────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
          className="max-w-xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700"
          >
            <Smartphone className="h-3.5 w-3.5" />
            Axnix Mobile
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 sm:text-[3.1rem]"
          >
            Everything you need to grow your business;{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              even on the go!
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg"
          >
            We make it easy to run your business top to bottom and on the go,
            with real support when you need it.
          </motion.p>

          <motion.ul variants={listVariants} className="mt-9 space-y-5">
            {POINTS.map((p) => (
              <motion.li
                key={p.label}
                variants={itemVariants}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_8px_20px_-6px_rgba(22,189,94,0.6)] transition-transform duration-300 group-hover:scale-110">
                  <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                </span>
                <p className="text-[17px] text-neutral-700">
                  <span className="font-bold text-neutral-900">{p.label}</span>{" "}
                  {p.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#16233a] px-7 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-16px_rgba(13,22,34,0.6)] transition-all duration-200 hover:bg-[#1e3052] active:scale-[0.98]"
            >
              Start 14 Day Free Trial
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right — floating phone + live badges ────────────── */}
        <div className="hidden justify-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* halo behind the device */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl"
            />

            {/* gently floating phone */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[300px] rotate-[-6deg]"
            >
              <PhoneMock />
            </motion.div>

            {/* live notification badges */}
            <FloatBadge
              className="-left-10 top-12"
              delay={0.5}
              dur={3.6}
              icon={<TrendingUp className="h-4 w-4 text-white" />}
              iconBg="bg-brand-gradient"
              title="+5 new leads"
              sub="in the last hour"
            />
            <FloatBadge
              className="-right-8 top-1/2"
              delay={0.75}
              dur={4.2}
              icon={<DollarSign className="h-4 w-4 text-white" />}
              iconBg="bg-emerald-500"
              title="Payment received"
              sub="$890.00"
            />
            <FloatBadge
              className="-left-6 bottom-16"
              delay={1}
              dur={3.9}
              icon={<CalendarCheck className="h-4 w-4 text-white" />}
              iconBg="bg-amber-500"
              title="Appointment booked"
              sub="Tomorrow · 2:00 PM"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** A floating glass notification card that pops in, then drifts. */
function FloatBadge({
  className,
  delay,
  dur,
  icon,
  iconBg,
  title,
  sub,
}: {
  className: string;
  delay: number;
  dur: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/90 px-3.5 py-2.5 shadow-[0_16px_36px_-14px_rgba(13,22,34,0.4)] backdrop-blur"
      >
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${iconBg}`}>
          {icon}
        </span>
        <div className="leading-tight">
          <div className="whitespace-nowrap text-xs font-bold text-neutral-900">{title}</div>
          <div className="whitespace-nowrap text-[10px] font-medium text-neutral-500">{sub}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PhoneMock() {
  return (
    <div className="relative w-full rounded-[46px] border-[11px] border-[#0d1622] bg-[#0d1622] shadow-[0_50px_90px_-30px_rgba(13,22,34,0.55)]">
      {/* dynamic island */}
      <div className="absolute left-1/2 top-2.5 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

      <div className="overflow-hidden rounded-[35px] bg-white">
        {/* status bar */}
        <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[12px] font-semibold text-neutral-900">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="flex items-end gap-[2px]">
              {[5, 7, 9, 11].map((h) => (
                <span
                  key={h}
                  className="w-[3px] rounded-sm bg-neutral-900"
                  style={{ height: h }}
                />
              ))}
            </span>
            <Wifi className="h-3.5 w-3.5" />
            <span className="flex items-center">
              <span className="flex h-3 w-5 items-center rounded-[3px] border border-neutral-900 p-[1.5px]">
                <span className="h-full w-full rounded-[1px] bg-neutral-900" />
              </span>
              <span className="ml-[1px] h-1.5 w-[2px] rounded-r bg-neutral-900" />
            </span>
          </div>
        </div>

        <div className="px-4 pb-4">
          {/* header */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-100 text-[11px] font-bold text-neutral-500">
                RF
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-[15px] font-bold text-neutral-900">
                  Riverfront Spa &amp; Wellness
                  <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
                </div>
                <div className="text-[11px] text-neutral-400">Eugene Valley</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative">
                <Bell className="h-5 w-5 text-neutral-700" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
              </span>
              <Settings className="h-5 w-5 text-neutral-700" />
            </div>
          </div>

          <div className="mt-4 h-px bg-neutral-100" />

          {/* today at a glance */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-neutral-500">
              Today at a Glance
            </span>
            <RotateCcw className="h-4 w-4 text-brand-600" strokeWidth={2.4} />
          </div>

          {/* stat cards */}
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <StatCard
              label="Tasks Due"
              value="12"
              icon={Check}
              tint="bg-brand-50 text-brand-600"
            />
            <StatCard
              label="Pipeline Value"
              value="$24.5K"
              icon={DollarSign}
              tint="bg-emerald-100 text-emerald-600"
            />
            <StatCard
              label="Unread Messages"
              value="12"
              icon={MessageCircle}
              tint="bg-brand-50 text-brand-600"
            />
            <StatCard
              label="Appointments"
              value="12"
              icon={Calendar}
              tint="bg-amber-100 text-amber-500"
            />
          </div>

          {/* pinned apps */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-neutral-500">
              Pinned Apps
            </span>
            <SquarePen className="h-4 w-4 text-brand-600" strokeWidth={2.2} />
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            <AppIcon label="Opportunities" icon={Workflow} />
            <AppIcon label="Dialer" icon={Phone} />
            <AppIcon label="Task Manager" icon={ClipboardCheck} />
            <AppIcon label="Documents & Contracts" icon={FileText} />
          </div>

          {/* quick actions — partially visible */}
          <div className="mt-5 text-[13px] font-semibold text-neutral-500">
            Quick Actions
          </div>
          <div className="mt-3 h-10 rounded-xl bg-neutral-50" />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  tint,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  tint: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-3 shadow-[0_2px_8px_-4px_rgba(13,22,34,0.12)]">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-medium text-neutral-400">{label}</span>
        <span className={`grid h-6 w-6 place-items-center rounded-full ${tint}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
        </span>
      </div>
      <div className="mt-1 font-display text-2xl font-extrabold tracking-tight text-neutral-900">
        {value}
      </div>
    </div>
  );
}

function AppIcon({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 text-neutral-700">
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <span className="text-[9px] font-medium leading-tight text-neutral-500">
        {label}
      </span>
    </div>
  );
}
