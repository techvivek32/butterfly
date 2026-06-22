import { Sparkles, PartyPopper, TrendingUp, Heart, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/mockups/Frames";
import { MOVEMENT } from "@/lib/data";
import { cn } from "@/lib/utils";

/** A diverse community of members scattered across the collage card. */
const COMMUNITY: {
  name: string;
  color: string;
  size: number;
  pos: string; // absolute positioning utilities
}[] = [
  { name: "Maya Chen", color: "#7c3aed", size: 52, pos: "left-[6%] top-[14%]" },
  { name: "Diego Ramos", color: "#f59e0b", size: 40, pos: "left-[20%] top-[58%]" },
  { name: "Aisha Bello", color: "#d946ef", size: 56, pos: "left-[33%] top-[22%]" },
  { name: "Liam Walsh", color: "#0ea5e9", size: 38, pos: "left-[14%] bottom-[12%]" },
  { name: "Priya Nair", color: "#14b8a6", size: 44, pos: "right-[30%] top-[12%]" },
  { name: "Noah Kim", color: "#10b981", size: 36, pos: "right-[8%] top-[26%]" },
  { name: "Sofia Rossi", color: "#7c3aed", size: 48, pos: "right-[6%] bottom-[16%]" },
  { name: "Kofi Mensah", color: "#f59e0b", size: 42, pos: "right-[22%] bottom-[10%]" },
  { name: "Elena Petrov", color: "#0ea5e9", size: 38, pos: "left-[44%] bottom-[8%]" },
  { name: "Jordan Lee", color: "#d946ef", size: 40, pos: "right-[40%] bottom-[40%]" },
];

const TINTS: Record<string, string> = {
  violet: "bg-wing-violet/10 text-wing-violet",
  amber: "bg-wing-amber/10 text-wing-amber",
  teal: "bg-wing-teal/10 text-wing-teal",
};

const PILL_ICONS = [Users, Sparkles, Heart];

export function Movement() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* subtle backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-light opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-brand-50/60 to-transparent" />

      <div className="section">
        {/* header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="chip mb-5 inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-600" />
            <span className="text-gradient-brand font-semibold">Community</span>
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Join the <span className="text-gradient">movement</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink-muted">
            Our thriving community of the most successful and visionary digital
            marketers on the planet. Get all the training and resources you need
            to start or grow your business.
          </p>
        </Reveal>

        {/* value props grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {MOVEMENT.map((item, i) => {
            const Icon = PILL_ICONS[i % PILL_ICONS.length];
            const tintKey = (["violet", "teal", "amber"] as const)[i % 3];
            return (
              <Reveal
                key={item.title}
                direction="up"
                delay={i * 0.1}
                className="group relative rounded-3xl border border-black/5 bg-white/70 p-7 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-200/70 hover:shadow-card"
              >
                <div
                  className={cn(
                    "mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl",
                    TINTS[tintKey]
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.body}
                </p>
                {/* accent line on hover */}
                <span className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </Reveal>
            );
          })}
        </div>

        {/* community collage card */}
        <Reveal direction="up" delay={0.05} className="mt-14">
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-wing-teal to-wing-sky p-10 shadow-float sm:min-h-[340px]">
            {/* soft texture + glow */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-wing-violet/30 blur-3xl" />

            {/* scattered members */}
            <div className="pointer-events-none absolute inset-0">
              {COMMUNITY.map((m) => (
                <div
                  key={m.name}
                  className={cn(
                    "absolute drop-shadow-lg animate-float-slow",
                    m.pos
                  )}
                  style={{ animationDelay: `${(m.size % 5) * 0.4}s` }}
                >
                  <Avatar name={m.name} color={m.color} size={m.size} ring />
                </div>
              ))}
            </div>

            {/* connecting glow line accents */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
              aria-hidden
            >
              <line x1="12%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="88%" y1="28%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="18%" y1="82%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="84%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
            </svg>

            {/* center member counter */}
            <div className="relative z-10 grid min-h-[180px] place-items-center sm:min-h-[260px]">
              <div className="glass-card rounded-2xl px-6 py-4 text-center shadow-glow">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    60,000+
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-ink-muted sm:text-sm">
                  members &amp; growing
                </p>
                {/* live indicator */}
                <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                  </span>
                  1,240 online now
                </span>
              </div>
            </div>

            {/* floating chat bubbles */}
            <div className="absolute left-4 top-8 z-20 animate-float sm:left-10 sm:top-16">
              <div className="glass-card flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wing-amber/15 text-wing-amber">
                  <PartyPopper className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">Just hit $10k MRR</p>
                  <p className="text-[11px] text-ink-muted">2 min ago</p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-8 right-4 z-20 animate-float sm:bottom-12 sm:right-10"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="glass-card flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">Closed 12 deals this week</p>
                  <p className="text-[11px] text-ink-muted">Aisha B.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
