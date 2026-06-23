import type { ReactNode } from "react";

/** Muted partner logos — "Logoipsum" placeholders with varied marks. */
export function LogoCloud() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8">
      <p className="text-center text-base font-medium text-neutral-500">
        Trusted by marketing teams globally
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
        {MARKS.map((mark, i) => (
          <Logoipsum key={i} mark={mark} />
        ))}
      </div>
    </section>
  );
}

function Logoipsum({ mark }: { mark: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-neutral-400 opacity-80 grayscale transition hover:opacity-100">
      {mark}
      <span className="text-2xl font-bold tracking-tight text-neutral-400">Logoipsum</span>
    </div>
  );
}

const C = "h-7 w-7";

const MARKS: ReactNode[] = [
  // asterisk / flower
  <svg key="a" viewBox="0 0 24 24" className={C} fill="none" aria-hidden>
    {[0, 45, 90, 135].map((deg) => (
      <rect
        key={deg}
        x="10.5"
        y="3"
        width="3"
        height="18"
        rx="1.5"
        fill="currentColor"
        transform={`rotate(${deg} 12 12)`}
      />
    ))}
  </svg>,
  // sunburst
  <svg key="b" viewBox="0 0 24 24" className={C} fill="none" aria-hidden>
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    {Array.from({ length: 8 }).map((_, i) => (
      <rect
        key={i}
        x="11.2"
        y="0.5"
        width="1.6"
        height="5"
        rx="0.8"
        fill="currentColor"
        transform={`rotate(${i * 45} 12 12)`}
      />
    ))}
  </svg>,
  // rounded square with S
  <svg key="c" viewBox="0 0 24 24" className={C} fill="none" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
    <path
      d="M15 8.5c-2.5-1.6-6-0.8-6 1.6 0 2.6 6 1.4 6 4 0 2.4-3.6 3.1-6 1.4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>,
  // ring + dot
  <svg key="d" viewBox="0 0 24 24" className={C} fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
  </svg>,
  // overlapping chevrons
  <svg key="e" viewBox="0 0 24 24" className={C} fill="none" aria-hidden>
    <path d="M4 7l8 5-8 5V7z" fill="currentColor" />
    <path d="M12 7l8 5-8 5V7z" fill="currentColor" opacity="0.55" />
  </svg>,
];
