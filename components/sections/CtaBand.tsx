import { ArrowRight, Sparkles, Clock, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/mockups/Frames";
import { ButterflyMark } from "@/components/brand/ButterflyMark";

/**
 * Big closing CTA band — a bright brand-gradient slab with a left-hand pitch
 * and a floating mock conversation card on the right. Server component
 * (only Reveal wrappers + static markup, no hooks).
 */
export function CtaBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section">
        <Reveal direction="up" amount={0.2}>
          <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-brand-gradient p-10 shadow-float sm:p-16 lg:grid-cols-2">
            {/* ---------- decorative layers ---------- */}
            {/* dotted texture */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
            {/* subtle animated sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            {/* blurred orbs */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-wing-violet/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 top-1/3 h-56 w-56 rounded-full bg-wing-sky/30 blur-3xl" />
            {/* faint big butterfly watermark */}
            <ButterflyMark
              idSuffix="ctaband-watermark"
              className="pointer-events-none absolute -bottom-16 -right-10 h-[28rem] w-[28rem] rotate-12 opacity-10"
            />

            {/* ---------- LEFT: pitch ---------- */}
            <div className="relative z-10">
              <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Start free, no credit card
              </span>

              <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Built to make things easier
              </h2>

              <p className="mt-5 max-w-md text-white/85">
                Butterfly gives you the systems to attract leads, close customers
                and keep them coming back. Less friction. Better follow-up. More
                momentum.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
                >
                  Start 14 Day Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                  <span className="flex -space-x-2">
                    {[
                      { n: "Olivia Park", c: "#7c3aed" },
                      { n: "Marcus Reed", c: "#0ea5e9" },
                      { n: "Ada Lovelace", c: "#f59e0b" },
                    ].map((p) => (
                      <Avatar key={p.n} name={p.n} color={p.c} size={28} ring />
                    ))}
                  </span>
                  Joined this week
                </span>
              </div>
            </div>

            {/* ---------- RIGHT: floating mock conversation ---------- */}
            <div className="relative z-10">
              <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
                {/* main conversation card */}
                <div className="glass-card relative rounded-2xl p-4 shadow-float">
                  {/* header strip */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                      </span>
                      <span className="text-xs font-semibold text-ink">
                        Conversations
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-ink-muted">
                      Today
                    </span>
                  </div>

                  {/* chat row */}
                  <div className="flex items-start gap-3">
                    <Avatar name="Koray Okumus" color="#10b981" size={36} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="truncate text-sm font-semibold text-ink">
                          Koray Okumus
                        </span>
                        <span className="text-[10px] text-ink-muted">9:41 AM</span>
                      </div>
                      <div className="mt-1.5 inline-block rounded-2xl rounded-tl-sm bg-brand-50 px-3.5 py-2 text-sm text-ink-soft">
                        Hi Olivia, how are you?
                      </div>
                    </div>
                  </div>

                  {/* reply bubble */}
                  <div className="mt-3 flex justify-end">
                    <div className="inline-block max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-gradient px-3.5 py-2 text-sm font-medium text-white shadow-soft">
                      Doing great — just booked 3 demos! 🎉
                    </div>
                  </div>

                  {/* divider */}
                  <div className="my-3.5 h-px bg-black/5" />

                  {/* opportunities status pill */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-wing-violet/10 px-3 py-1.5 text-xs font-semibold text-wing-violet">
                      <Target className="h-3.5 w-3.5" />
                      Opportunities
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      Won · $4.2k
                    </span>
                  </div>
                </div>

                {/* floating "+1 new lead" badge */}
                <div className="absolute -left-4 -top-4 animate-float sm:-left-6">
                  <div className="glass-card flex items-center gap-2 rounded-full px-3.5 py-2 shadow-card">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-wing-amber/15 text-wing-amber">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs font-bold text-ink">+1 new lead</span>
                  </div>
                </div>

                {/* floating response-time chip */}
                <div
                  className="absolute -bottom-5 -left-3 animate-float-slow sm:-left-8"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="glass-card flex items-center gap-2 rounded-2xl px-3.5 py-2 shadow-card">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-100 text-brand-700">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-xs font-bold text-ink">2m reply</p>
                      <p className="text-[10px] text-ink-muted">avg. response</p>
                    </div>
                  </div>
                </div>

                {/* decorative floating butterfly */}
                <ButterflyMark
                  idSuffix="ctaband-float"
                  flutter
                  className="absolute -right-6 -top-8 h-16 w-16 animate-float drop-shadow-lg sm:-right-10"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
