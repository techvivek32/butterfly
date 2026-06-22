import {
  ArrowRight,
  CheckCircle2,
  Check,
  MessageSquare,
  Phone,
  Calendar,
  FileText,
  TrendingUp,
} from "lucide-react";
import { ONTHEGO } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame, Avatar } from "@/components/mockups/Frames";
import { ButterflyMark } from "@/components/brand/ButterflyMark";

const STAT_CARDS = [
  { label: "Tasks Due", value: "12", tint: "text-wing-violet" },
  { label: "Pipeline", value: "$24.5K", tint: "text-brand-600" },
  { label: "Unread", value: "12", tint: "text-wing-sky" },
  { label: "Appointments", value: "8", tint: "text-wing-amber" },
] as const;

const QUICK_ACTIONS = [
  { icon: MessageSquare, label: "Chat", color: "#10b981" },
  { icon: Phone, label: "Call", color: "#0ea5e9" },
  { icon: Calendar, label: "Book", color: "#7c3aed" },
  { icon: FileText, label: "Invoice", color: "#f59e0b" },
] as const;

const ACTIVITY = [
  { name: "Sara Lin", color: "#7c3aed", text: "Booked a discovery call", time: "2m" },
  { name: "Marcus Cole", color: "#0ea5e9", text: "Replied to your SMS", time: "9m" },
  { name: "Priya Nair", color: "#f59e0b", text: "Paid invoice #1042", time: "21m" },
] as const;

export function OnTheGo() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-50/40 px-6 py-16 sm:px-12">
        {/* subtle grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT — copy */}
          <Reveal direction="up">
            <div className="max-w-xl">
              <span className="chip mb-5 inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Butterfly Mobile
              </span>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {ONTHEGO.title}
              </h2>

              <p className="mt-4 text-base text-ink-muted sm:text-lg">
                {ONTHEGO.blurb}
              </p>

              <ul className="mt-8 space-y-5">
                {ONTHEGO.points.map((point) => (
                  <li key={point.title} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      strokeWidth={2.25}
                    />
                    <div>
                      <div className="font-semibold text-ink">{point.title}</div>
                      <div className="text-sm text-ink-muted">{point.body}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <a href="#pricing" className="btn-primary group">
                  Start 14 Day Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — bespoke phone mockup */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative mx-auto flex max-w-md items-center justify-center">
              {/* blurred brand gradient blob */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-25 blur-3xl" />

              {/* floating butterfly accent */}
              <ButterflyMark
                idSuffix="onthego-accent"
                flutter
                className="absolute -left-2 top-6 h-10 w-10 opacity-90 animate-float-slow sm:-left-4"
              />

              {/* floating badge — new leads */}
              <div className="absolute -left-3 top-1/3 z-20 animate-float sm:-left-8">
                <div className="glass-card flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-float">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient text-white">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-ink">+5 new leads</div>
                    <div className="text-[10px] text-ink-muted">in the last hour</div>
                  </div>
                </div>
              </div>

              {/* floating badge — payment received */}
              <div className="absolute -right-2 bottom-12 z-20 animate-float [animation-delay:1.1s] sm:-right-6">
                <div className="glass-card flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-float">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-ink">Payment received</div>
                    <div className="text-[10px] font-semibold text-brand-600">
                      $890.00
                    </div>
                  </div>
                </div>
              </div>

              {/* the phone — slight tilt */}
              <div className="relative z-10 [transform:rotate(-4deg)]">
                <PhoneFrame className="w-[260px] mx-auto">
                  {/* header strip */}
                  <div className="rounded-b-none bg-brand-gradient p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ButterflyMark
                          idSuffix="onthego-header"
                          className="h-5 w-5"
                        />
                        <span className="font-display text-sm font-extrabold tracking-tight">
                          Butterfly
                        </span>
                      </div>
                      <Avatar name="Alex Rivera" color="#0ea5e9" size={28} ring />
                    </div>
                    <div className="mt-3">
                      <div className="text-[11px] text-white/80">Good morning,</div>
                      <div className="text-base font-bold leading-tight">Alex 👋</div>
                    </div>
                  </div>

                  {/* body */}
                  <div className="space-y-3 bg-[#f6faf8] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                        Today at a Glance
                      </span>
                      <span className="text-[10px] font-medium text-brand-600">
                        View all
                      </span>
                    </div>

                    {/* mini stat cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {STAT_CARDS.map((card) => (
                        <div
                          key={card.label}
                          className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.03]"
                        >
                          <div className="text-[10px] text-ink-muted">
                            {card.label}
                          </div>
                          <div
                            className={`font-display text-lg font-extrabold leading-tight ${card.tint}`}
                          >
                            {card.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* quick actions */}
                    <div className="grid grid-cols-4 gap-2">
                      {QUICK_ACTIONS.map((action) => {
                        const Icon = action.icon;
                        return (
                          <div
                            key={action.label}
                            className="flex flex-col items-center gap-1"
                          >
                            <span
                              className="grid h-10 w-full place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/[0.03]"
                              style={{ color: action.color }}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-[9px] font-medium text-ink-muted">
                              {action.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* activity list */}
                    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/[0.03]">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                        Recent Activity
                      </div>
                      <div className="space-y-2.5">
                        {ACTIVITY.map((item) => (
                          <div key={item.name} className="flex items-center gap-2">
                            <Avatar name={item.name} color={item.color} size={24} />
                            <div className="min-w-0 flex-1 leading-tight">
                              <div className="truncate text-[11px] font-semibold text-ink">
                                {item.name}
                              </div>
                              <div className="truncate text-[10px] text-ink-muted">
                                {item.text}
                              </div>
                            </div>
                            <span className="text-[9px] text-ink-muted">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
