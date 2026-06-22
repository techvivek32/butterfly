import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A realistic browser chrome wrapper. */
export function BrowserFrame({
  children,
  className,
  url = "app.butterfly.io",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-black/5 bg-white shadow-float",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/5 bg-gradient-to-b from-gray-50 to-white px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-[10px] text-ink-muted">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="5" y="11" width="14" height="9" rx="2" fill="#10b981" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="#10b981" strokeWidth="2" />
          </svg>
          {url}
        </div>
      </div>
      <div className="bg-[#f6faf8]">{children}</div>
    </div>
  );
}

/** A phone bezel wrapper with notch. */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.4rem] border-[10px] border-[#0a1410] bg-[#0a1410] shadow-float",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0a1410]" />
      <div className="relative overflow-hidden rounded-[1.7rem] bg-white">{children}</div>
    </div>
  );
}

/** Gradient avatar with initials — never blank. */
export function Avatar({
  name,
  color = "#10b981",
  size = 36,
  ring = false,
}: {
  name: string;
  color?: string;
  size?: number;
  ring?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full font-semibold text-white",
        ring && "ring-2 ring-white"
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.38,
        background: `linear-gradient(135deg, ${color}, ${shade(color)})`,
      }}
      aria-hidden
    >
      {initials}
    </span>
  );
}

function shade(hex: string): string {
  // darken a hex color ~18%
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, "$1$1") : h, 16);
  const r = Math.max(0, ((n >> 16) & 255) - 46);
  const g = Math.max(0, ((n >> 8) & 255) - 46);
  const b = Math.max(0, (n & 255) - 46);
  return `rgb(${r},${g},${b})`;
}
