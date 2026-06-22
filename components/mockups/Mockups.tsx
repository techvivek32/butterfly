"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, Calendar, Star, MessageSquare, Megaphone,
  Workflow, Inbox, Phone, Search, Bell, Plus, Check, Filter, Upload,
  TrendingUp, Mail, Bot, Send,
} from "lucide-react";
import { Donut, Sparkline, Bars, Stars } from "./Charts";
import { Avatar } from "./Frames";

const railIcons = [LayoutDashboard, Users, MessageSquare, Calendar, Megaphone, Workflow];

function Rail({ active = 0 }: { active?: number }) {
  return (
    <div className="hidden w-12 shrink-0 flex-col items-center gap-1 border-r border-black/5 bg-white/70 py-3 sm:flex">
      <div className="mb-2 grid h-7 w-7 place-items-center rounded-lg bg-brand-gradient text-white">
        <Star className="h-3.5 w-3.5" fill="white" />
      </div>
      {railIcons.map((Icon, i) => (
        <div
          key={i}
          className={`grid h-8 w-8 place-items-center rounded-lg ${
            i === active ? "bg-brand-100 text-brand-700" : "text-ink-muted/60"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>
      ))}
    </div>
  );
}

function TopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5">
      <div className="font-display text-sm font-bold text-ink">{title}</div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[10px] text-ink-muted sm:flex">
          <Search className="h-3 w-3" /> Search
        </div>
        <Bell className="h-3.5 w-3.5 text-ink-muted" />
        <Avatar name="A K" color="#7c3aed" size={22} />
      </div>
    </div>
  );
}

function StatTile({ label, value, delta, color }: { label: string; value: string; delta: string; color: string }) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-2.5">
      <div className="text-[9px] font-medium uppercase tracking-wide text-ink-muted">{label}</div>
      <div className="mt-1 font-display text-lg font-extrabold text-ink">{value}</div>
      <div className="mt-0.5 inline-flex items-center gap-0.5 text-[9px] font-semibold" style={{ color }}>
        <TrendingUp className="h-2.5 w-2.5" /> {delta}
      </div>
    </div>
  );
}

/* ---------------- CRM / Overview ---------------- */
function CrmMock() {
  return (
    <div className="flex h-full">
      <Rail active={0} />
      <div className="flex-1">
        <TopBar title="CRM Overview" />
        <div className="space-y-2.5 p-3">
          <div className="grid grid-cols-3 gap-2">
            <StatTile label="Active Leads" value="1,402" delta="+8.1%" color="#10b981" />
            <StatTile label="Reviews" value="1,210" delta="+4.2%" color="#0ea5e9" />
            <StatTile label="Sentiment" value="900" delta="+12%" color="#7c3aed" />
          </div>
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-3 rounded-xl border border-black/5 bg-white p-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-ink">Pipeline value</span>
                <span className="text-[10px] font-bold text-brand-600">$24.5K</span>
              </div>
              <Sparkline />
            </div>
            <div className="col-span-2 grid place-items-center rounded-xl border border-black/5 bg-white p-3">
              <Donut value={0.86} label="4.3" sub="Avg rating" />
            </div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-2.5">
            {["Olivia Carter", "Noah Bennett", "Emma Hughes"].map((n, i) => (
              <div key={n} className={`flex items-center gap-2 py-1.5 ${i < 2 ? "border-b border-black/5" : ""}`}>
                <Avatar name={n} color={["#10b981", "#0ea5e9", "#d946ef"][i]} size={24} />
                <div className="flex-1">
                  <div className="text-[10px] font-semibold text-ink">{n}</div>
                  <div className="text-[9px] text-ink-muted">New lead · just now</div>
                </div>
                <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[8px] font-bold text-brand-700">
                  {["Hot", "Warm", "New"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Conversation / Chat ---------------- */
function ChatMock() {
  return (
    <div className="flex h-full">
      <Rail active={2} />
      <div className="flex-1">
        <TopBar title="Conversations" />
        <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2">
          <Avatar name="Olivia Carter" color="#10b981" size={28} ring />
          <div>
            <div className="text-[11px] font-bold text-ink">Olivia Carter</div>
            <div className="flex items-center gap-1 text-[9px] text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Online · WhatsApp
            </div>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-ink shadow-sm">
            Hi! Is the Riverh​ide Spa package still available this weekend?
          </div>
          <motion.div
            className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-gradient px-3 py-2 text-[10px] text-white shadow"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Yes! I can hold a slot for you. Enjoy 20% off — use code BLOOM20. Place the order now ✨
          </motion.div>
          <div className="ml-auto flex items-center gap-1.5 rounded-xl bg-brand-50 px-2.5 py-1.5">
            <Bot className="h-3 w-3 text-brand-600" />
            <span className="text-[9px] font-semibold text-brand-700">AI replied in 0.4s</span>
          </div>
          <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-ink shadow-sm">
            Perfect, booking now! 🎉
          </div>
        </div>
        <div className="mx-3 mb-3 flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2">
          <span className="flex-1 text-[10px] text-ink-muted">Type a message…</span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-gradient text-white">
            <Send className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Calendar / Booking ---------------- */
function CalendarMock() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const slots = [
    { t: "09:00", n: "Discovery Call", c: "#10b981" },
    { t: "11:30", n: "Strategy Session", c: "#0ea5e9" },
    { t: "14:00", n: "Onboarding", c: "#7c3aed" },
  ];
  return (
    <div className="flex h-full">
      <Rail active={3} />
      <div className="flex-1">
        <TopBar title="Calendars" />
        <div className="grid grid-cols-2 gap-2.5 p-3">
          <div className="rounded-xl border border-black/5 bg-white p-2.5">
            <div className="mb-1.5 text-[10px] font-bold text-ink">June 2026</div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {days.map((d, i) => (
                <div key={i} className="text-[8px] font-semibold text-ink-muted">{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => {
                const active = [9, 14, 17, 22].includes(i);
                const today = i === 14;
                return (
                  <div
                    key={i}
                    className={`grid h-4 place-items-center rounded text-[8px] ${
                      today ? "bg-brand-gradient font-bold text-white" : active ? "bg-brand-100 text-brand-700" : "text-ink-muted"
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-[10px] font-bold text-ink">Today · 3 bookings</div>
            {slots.map((s) => (
              <div key={s.t} className="flex items-center gap-2 rounded-xl border border-black/5 bg-white p-2">
                <div className="h-7 w-1 rounded-full" style={{ background: s.c }} />
                <div className="flex-1">
                  <div className="text-[10px] font-semibold text-ink">{s.n}</div>
                  <div className="text-[9px] text-ink-muted">{s.t} – 30 min</div>
                </div>
                <Check className="h-3 w-3 text-brand-600" />
              </div>
            ))}
            <div className="flex items-center justify-center gap-1 rounded-xl border border-dashed border-brand-300 bg-brand-50/60 py-1.5 text-[9px] font-semibold text-brand-700">
              <Plus className="h-3 w-3" /> New appointment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Reviews / Reputation ---------------- */
function ReviewsMock() {
  const reviews = [
    { n: "Sophie Lane", r: 5, t: "Absolutely seamless experience, booked in seconds!", c: "#f59e0b" },
    { n: "Marcus Webb", r: 5, t: "The follow-up was instant and personal. Love it.", c: "#0ea5e9" },
  ];
  return (
    <div className="flex h-full">
      <Rail active={4} />
      <div className="flex-1">
        <TopBar title="Reputation" />
        <div className="space-y-2.5 p-3">
          <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3">
            <div className="text-center">
              <div className="font-display text-2xl font-extrabold text-ink">4.9</div>
              <Stars rating={5} />
            </div>
            <div className="flex-1 space-y-1">
              {[92, 6, 1, 0, 1].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2 text-[8px] text-ink-muted">{5 - i}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      className="h-full rounded-full bg-amber-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${w}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {reviews.map((rv) => (
            <div key={rv.n} className="rounded-xl border border-black/5 bg-white p-2.5">
              <div className="mb-1 flex items-center gap-2">
                <Avatar name={rv.n} color={rv.c} size={22} />
                <span className="text-[10px] font-semibold text-ink">{rv.n}</span>
                <span className="ml-auto"><Stars rating={rv.r} size={10} /></span>
              </div>
              <p className="text-[9px] leading-relaxed text-ink-muted">{rv.t}</p>
              <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[8px] font-semibold text-brand-700">
                <Bot className="h-2.5 w-2.5" /> AI auto-replied
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Analytics ---------------- */
function AnalyticsMock() {
  return (
    <div className="flex h-full">
      <Rail active={5} />
      <div className="flex-1">
        <TopBar title="Campaign Analytics" />
        <div className="space-y-2.5 p-3">
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { k: "Sent", v: "17.7K", c: "#6b7280" },
              { k: "Delivered", v: "97%", c: "#10b981" },
              { k: "Read", v: "53%", c: "#0ea5e9" },
              { k: "Clicked", v: "48%", c: "#7c3aed" },
            ].map((m) => (
              <div key={m.k} className="rounded-lg border border-black/5 bg-white p-1.5 text-center">
                <div className="font-display text-sm font-extrabold" style={{ color: m.c }}>{m.v}</div>
                <div className="text-[8px] text-ink-muted">{m.k}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-3 rounded-xl border border-black/5 bg-white p-3">
              <div className="mb-2 text-[10px] font-bold text-ink">Audience per day</div>
              <Bars />
            </div>
            <div className="col-span-2 grid place-items-center rounded-xl border border-black/5 bg-white p-3">
              <Donut value={0.48} color="#7c3aed" track="#efe7fb" label="48%" sub="Clicked" />
            </div>
          </div>
          <div className="rounded-xl bg-brand-gradient p-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] opacity-90">Revenue generated</div>
                <div className="font-display text-lg font-extrabold">$15.2K</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] opacity-90">ROAS</div>
                <div className="font-display text-lg font-extrabold">7.5×</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Multi-agent Inbox ---------------- */
function InboxMock() {
  const chats = [
    { n: "Sara Blake", m: "Thanks, that works!", c: "#10b981", u: 2 },
    { n: "Tom Rivera", m: "Can you send the invoice?", c: "#0ea5e9", u: 0 },
    { n: "Mia Chen", m: "Looking forward to it 🎉", c: "#d946ef", u: 1 },
    { n: "Leo Park", m: "Booked for Friday", c: "#f59e0b", u: 0 },
  ];
  return (
    <div className="flex h-full">
      <Rail active={2} />
      <div className="flex w-40 shrink-0 flex-col border-r border-black/5">
        <div className="flex items-center justify-between px-3 py-2.5">
          <span className="font-display text-xs font-bold text-ink">Team Inbox</span>
          <Inbox className="h-3.5 w-3.5 text-ink-muted" />
        </div>
        {chats.map((ch, i) => (
          <div key={ch.n} className={`flex items-center gap-2 px-3 py-2 ${i === 0 ? "bg-brand-50" : ""}`}>
            <Avatar name={ch.n} color={ch.c} size={24} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[10px] font-semibold text-ink">{ch.n}</div>
              <div className="truncate text-[9px] text-ink-muted">{ch.m}</div>
            </div>
            {ch.u > 0 && (
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-500 text-[7px] font-bold text-white">
                {ch.u}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="hidden flex-1 flex-col sm:flex">
        <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2.5">
          <Avatar name="Sara Blake" color="#10b981" size={26} />
          <span className="text-[11px] font-bold text-ink">Sara Blake</span>
          <div className="ml-auto flex -space-x-1.5">
            {["#7c3aed", "#0ea5e9", "#f59e0b"].map((c, i) => (
              <Avatar key={i} name={`A${i}`} color={c} size={18} ring />
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-2 p-3">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-1.5 text-[10px] text-ink shadow-sm">
            Hey, do you ship internationally?
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-gradient px-3 py-1.5 text-[10px] text-white shadow">
            We do! Free over $50 🌍
          </div>
          <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-white px-3 py-1.5 text-[10px] text-ink shadow-sm">
            Thanks, that works!
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Workflow builder ---------------- */
function FlowMock() {
  const nodes = [
    { x: "8%", y: "20%", label: "New Lead", icon: Users, c: "#10b981" },
    { x: "44%", y: "12%", label: "Send SMS", icon: MessageSquare, c: "#0ea5e9" },
    { x: "44%", y: "58%", label: "AI Reply", icon: Bot, c: "#7c3aed" },
    { x: "78%", y: "36%", label: "Book Call", icon: Calendar, c: "#f59e0b" },
  ];
  return (
    <div className="flex h-full">
      <Rail active={5} />
      <div className="flex-1">
        <TopBar title="Workflow Builder" />
        <div className="relative h-[260px] bg-dots p-3">
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            <motion.path
              d="M 80 80 C 150 80, 150 55, 230 55"
              fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            />
            <motion.path
              d="M 80 80 C 150 80, 150 170, 230 170"
              fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            />
          </svg>
          {nodes.map((n) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                className="absolute flex items-center gap-1.5 rounded-xl border border-black/5 bg-white px-2.5 py-2 shadow-card"
                style={{ left: n.x, top: n.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <span className="grid h-5 w-5 place-items-center rounded-md text-white" style={{ background: n.c }}>
                  <Icon className="h-3 w-3" />
                </span>
                <span className="text-[10px] font-semibold text-ink">{n.label}</span>
              </motion.div>
            );
          })}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-brand-gradient px-2.5 py-1 text-[9px] font-bold text-white shadow">
            <Plus className="h-3 w-3" /> Add step
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Import / Broadcast ---------------- */
function ImportMock() {
  return (
    <div className="flex h-full">
      <Rail active={1} />
      <div className="flex-1">
        <TopBar title="Contacts" />
        <div className="space-y-2.5 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-ink">All Contacts · 23,402</span>
            <span className="flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-[9px] font-semibold text-brand-700">
              <Filter className="h-2.5 w-2.5" /> Segments
            </span>
          </div>
          <motion.div
            className="grid place-items-center rounded-xl border-2 border-dashed border-brand-300 bg-brand-50/50 py-5"
            initial={{ opacity: 0.6 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            <Upload className="h-6 w-6 text-brand-500" />
            <div className="mt-1.5 text-[10px] font-semibold text-brand-700">Import Contacts</div>
            <div className="flex items-center gap-1 text-[9px] text-ink-muted">
              <span className="grid h-3.5 w-3.5 place-items-center rounded bg-emerald-600 text-[6px] font-bold text-white">CSV</span>
              contacts.csv · 23,402 rows
            </div>
          </motion.div>
          <div className="rounded-xl border border-black/5 bg-white p-2.5">
            {["Aria Stone", "Ben Cole", "Cara Diaz"].map((n, i) => (
              <div key={n} className={`flex items-center gap-2 py-1.5 ${i < 2 ? "border-b border-black/5" : ""}`}>
                <span className="grid h-3.5 w-3.5 place-items-center rounded bg-brand-500 text-white">
                  <Check className="h-2.5 w-2.5" />
                </span>
                <Avatar name={n} color={["#10b981", "#0ea5e9", "#d946ef"][i]} size={22} />
                <span className="flex-1 text-[10px] font-semibold text-ink">{n}</span>
                <span className="text-[9px] text-ink-muted">Imported</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient py-2 text-[10px] font-bold text-white">
            <Send className="h-3 w-3" /> Broadcast to 23,402
          </div>
        </div>
      </div>
    </div>
  );
}

const MAP: Record<string, () => React.ReactElement> = {
  crm: CrmMock,
  chat: ChatMock,
  calendar: CalendarMock,
  reviews: ReviewsMock,
  analytics: AnalyticsMock,
  inbox: InboxMock,
  flow: FlowMock,
  import: ImportMock,
};

/** Render a named dashboard mock (content only — wrap in a frame yourself). */
export function Mockup({ name }: { name: string }) {
  const Comp = MAP[name] ?? CrmMock;
  return (
    <div className="min-h-[260px] text-ink">
      <Comp />
    </div>
  );
}

export const PhoneIcon = Phone;
export const MailIcon = Mail;
