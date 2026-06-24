import { Facebook, Twitter, Linkedin, Youtube, type LucideIcon } from "lucide-react";

const LINKS = ["About", "Case studies", "Contact", "Blog"];
const SOCIALS: LucideIcon[] = [Facebook, Twitter, Linkedin, Youtube];

// fanned hero cards (green gradient stand-ins for the photos)
const CARDS = [
  { grad: "from-[#2f9e74] to-[#0a3320]", rot: "-rotate-[13deg]", extra: "-mr-10 mt-10" },
  { grad: "from-[#3dc888] to-[#0c4d33]", rot: "rotate-0", extra: "z-20 h-72 w-48 sm:h-80 sm:w-52" },
  { grad: "from-[#1f9f8f] to-[#0a3a30]", rot: "rotate-[13deg]", extra: "-ml-10 mt-10" },
];

export function AxnixFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#a4ecc4] via-[#22a06f] to-[#06402b] text-white">
      {/* subtle texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-[0.18]" />
      {/* soft top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-white/30 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">
        {/* Fanned cards */}
        <div className="flex items-start justify-center">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`relative h-64 w-44 origin-bottom overflow-hidden rounded-[1.6rem] bg-gradient-to-b ${c.grad} ${c.rot} ${c.extra} shadow-[0_30px_60px_-25px_rgba(6,21,14,0.6)] ring-1 ring-white/15`}
            >
              {/* sheen */}
              <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent" />
              {i === 1 && (
                <span className="absolute bottom-4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow" />
              )}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-14 max-w-2xl text-center font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          Let&rsquo;s build a growth strategy that drives real results.
        </h2>

        {/* Subscribe */}
        <form
          className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          action="#"
        >
          <input
            type="email"
            placeholder="Your email..."
            aria-label="Your email"
            className="flex-1 rounded-full bg-white px-7 py-4 text-[15px] text-neutral-800 outline-none ring-2 ring-transparent transition placeholder:text-neutral-400 focus:ring-white/60"
          />
          <button
            type="submit"
            className="rounded-full bg-[#06150e] px-8 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#0c2b1c] active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/15 pt-6 text-sm sm:flex-row sm:justify-between">
          <span className="text-white/80">© 2026 Axnix. All rights reserved.</span>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="font-medium text-white/90 transition-colors hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/30 text-white transition-colors hover:bg-white/15"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
