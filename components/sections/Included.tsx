import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { ButterflyMark } from "@/components/brand/ButterflyMark";
import { INCLUDED, INCLUDED_TOTAL, INCLUDED_PRICE } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * "What's included with Butterfly" — a clean, light comparison table that
 * stacks every replaced tool against a single all-in-one price.
 */

/** Faux competitor lettermarks shown in the "Replaces" column. */
type Faux = { ch: string; from: string; to: string };

const REPLACES: Faux[][] = [
  [
    { ch: "S", from: "#7c3aed", to: "#0ea5e9" },
    { ch: "H", from: "#f59e0b", to: "#d946ef" },
    { ch: "P", from: "#14b8a6", to: "#10b981" },
  ],
  [
    { ch: "C", from: "#0ea5e9", to: "#14b8a6" },
    { ch: "K", from: "#d946ef", to: "#7c3aed" },
  ],
  [
    { ch: "W", from: "#10b981", to: "#0ea5e9" },
    { ch: "S", from: "#f59e0b", to: "#14b8a6" },
    { ch: "U", from: "#7c3aed", to: "#d946ef" },
  ],
  [
    { ch: "T", from: "#14b8a6", to: "#10b981" },
    { ch: "F", from: "#0ea5e9", to: "#7c3aed" },
  ],
  [
    { ch: "M", from: "#d946ef", to: "#f59e0b" },
    { ch: "A", from: "#10b981", to: "#14b8a6" },
    { ch: "C", from: "#0ea5e9", to: "#7c3aed" },
  ],
  [
    { ch: "Z", from: "#7c3aed", to: "#14b8a6" },
    { ch: "T", from: "#f59e0b", to: "#0ea5e9" },
  ],
];

/** Overlapping gradient lettermark stack for the "Replaces" cell. */
function ReplacesStack({ items }: { items: Faux[] }) {
  return (
    <div className="flex -space-x-2">
      {items.map((m, i) => (
        <span
          key={i}
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-white",
            "ring-2 ring-white shadow-sm transition-transform duration-300",
            "group-hover:translate-x-0 hover:!-translate-y-0.5 hover:!scale-110",
          )}
          style={{
            backgroundImage: `linear-gradient(135deg, ${m.from}, ${m.to})`,
            zIndex: items.length - i,
          }}
          aria-hidden
        >
          {m.ch}
        </span>
      ))}
    </div>
  );
}

export function Included() {
  return (
    <section id="included" className="section py-20 sm:py-28">
      <Reveal direction="up" amount={0.15}>
        <div
          className={cn(
            "relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-6 sm:p-10",
            "border border-black/5 bg-gradient-to-br from-brand-50 via-white to-brand-50/40",
            "shadow-[0_24px_70px_-40px_rgba(10,20,16,0.22)]",
          )}
        >
          {/* ── ambient backdrop ─────────────────────────────────── */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid opacity-50"
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
            <div className="absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
          </div>

          <div className="relative">
            {/* ── heading ─────────────────────────────────────────── */}
            <div className="mx-auto max-w-2xl text-center">
              <span className="chip mx-auto inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-brand-600" />
                One platform, one bill
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                What&apos;s included with{" "}
                <span className="relative inline-flex items-center gap-2">
                  <span className="text-gradient">Butterfly</span>
                  <ButterflyMark
                    className="h-7 w-7 sm:h-8 sm:w-8"
                    flutter
                    idSuffix="included-heading"
                  />
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Replace a stack of pricey point-tools with a single, AI-native
                operating system — and watch the savings add up.
              </p>
            </div>

            {/* ── table card ──────────────────────────────────────── */}
            <div className="mx-auto mt-9 max-w-4xl rounded-2xl border border-black/5 bg-white p-4 shadow-card sm:mt-12 sm:p-6">
              {/* header row */}
              <div className="grid grid-cols-[2fr,1fr,auto] items-center gap-4 px-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted sm:grid-cols-[2fr,1fr,1fr,auto] sm:text-xs">
                <div>Features</div>
                <div className="hidden sm:block">Replaces</div>
                <div className="text-right sm:text-left">Other Tools</div>
                <div className="justify-self-end text-right">Butterfly</div>
              </div>

              {/* rows */}
              <RevealStagger amount={0.05}>
                {INCLUDED.map((row, i) => (
                  <RevealItem key={row.feature}>
                    <div
                      className={cn(
                        "group grid grid-cols-[2fr,1fr,auto] items-center gap-4 rounded-xl px-2 py-3",
                        "border-t border-black/5 transition-colors duration-300 hover:bg-brand-50/60",
                        "sm:grid-cols-[2fr,1fr,1fr,auto]",
                      )}
                    >
                      {/* feature name */}
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient transition-transform duration-300 group-hover:scale-150" />
                        <span className="text-sm font-medium text-ink">
                          {row.feature}
                        </span>
                      </div>

                      {/* replaces — hidden on mobile */}
                      <div className="hidden sm:block">
                        <ReplacesStack items={REPLACES[i % REPLACES.length]} />
                      </div>

                      {/* other tools price */}
                      <div className="text-right text-sm text-ink-muted sm:text-left">
                        <span className="tabular-nums line-through decoration-rose-400/50">
                          ${row.price}
                        </span>
                        <span className="text-xs text-ink-muted/70">/mo</span>
                      </div>

                      {/* butterfly check */}
                      <div className="justify-self-end">
                        <span className="inline-grid place-items-center rounded-full bg-brand-gradient p-1 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                          <CheckCircle2 className="h-4 w-4" strokeWidth={2.4} />
                        </span>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>

              {/* ── highlighted total row ─────────────────────────── */}
              <Reveal direction="up" delay={0.05} amount={0.3}>
                <div
                  className={cn(
                    "mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl px-4 py-5 sm:flex-row sm:px-6",
                    "border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-transparent",
                  )}
                >
                  <div className="text-center sm:text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                      Overall price
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-display text-xl font-bold text-ink-muted line-through decoration-rose-400/60 decoration-2">
                        {INCLUDED_TOTAL}
                      </span>
                      <span className="text-sm text-ink-muted">/mo</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden text-sm text-ink-muted sm:inline">
                      Yours for just
                    </span>
                    <span className="inline-flex items-baseline gap-1 rounded-full bg-brand-gradient px-5 py-2 shadow-glow">
                      <span className="font-display text-2xl font-extrabold text-white">
                        {INCLUDED_PRICE}
                      </span>
                      <span className="text-xs font-semibold text-white/85">
                        /mo
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── CTA ─────────────────────────────────────────────── */}
            <Reveal direction="up" delay={0.1} amount={0.4}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:mt-10">
                <a href="#pricing" className="btn-primary group">
                  Start 14 Day Free Trial
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="text-xs text-ink-muted">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
