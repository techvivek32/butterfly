import {
  PanelLeft,
  Shield,
  Lock,
  RotateCw,
  Share,
  Plus,
  Copy,
  Search,
  Bell,
  ChevronDown,
  Plus as PlusIcon,
  MoreHorizontal,
} from "lucide-react";
import { AxnixLogo } from "@/components/brand/AxnixLogo";
import { Avatar } from "@/components/mockups/Frames";

const TABS = ["Dashboard", "Campaign", "Leads", "Content", "Billing", "Analytics"];

/** A faithful, static product screenshot used as the hero visual. */
export function AxnixDashboard() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-white shadow-[0_40px_90px_-30px_rgba(15,30,20,0.35)]">
      {/* ── Browser chrome ───────────────────────────────────────── */}
      <div className="flex items-center gap-3 border-b border-black/[0.06] bg-[#f6f7f5] px-4 py-3 text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <PanelLeft className="ml-2 h-4 w-4" strokeWidth={1.8} />
        <div className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs text-neutral-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <Shield className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.8} />
          <span className="mx-auto inline-flex items-center gap-1">
            <Lock className="h-3 w-3" strokeWidth={2} />
            app.yourapp.io
          </span>
          <RotateCw className="h-3.5 w-3.5 text-neutral-400" strokeWidth={1.8} />
        </div>
        <div className="flex items-center gap-3 text-emerald-600/80">
          <Share className="h-4 w-4" strokeWidth={1.8} />
          <Plus className="h-4 w-4" strokeWidth={1.8} />
          <Copy className="h-4 w-4" strokeWidth={1.8} />
        </div>
      </div>

      {/* ── App body ─────────────────────────────────────────────── */}
      <div className="bg-white px-5 pb-2 pt-5 sm:px-7">
        {/* top app bar */}
        <div className="flex items-center justify-between gap-4">
          <AxnixLogo markSize={26} textClassName="text-lg" />

          <nav className="hidden items-center gap-1 rounded-full md:flex">
            {TABS.map((t) => (
              <span
                key={t}
                className={
                  t === "Dashboard"
                    ? "rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white"
                    : "px-3 py-2 text-xs font-medium text-neutral-500"
                }
              >
                {t}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200">
              <Search className="h-4 w-4 text-neutral-500" strokeWidth={1.9} />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200">
              <Bell className="h-4 w-4 text-neutral-500" strokeWidth={1.9} />
            </span>
            <span className="flex items-center gap-2 rounded-full border border-neutral-200 py-1 pl-1 pr-2.5">
              <Avatar name="Robert Fox" color="#6366f1" size={28} />
              <span className="hidden leading-tight sm:block">
                <span className="block text-xs font-semibold text-neutral-900">Robert Fox</span>
                <span className="block text-[10px] text-neutral-400">robert53@gmail.com</span>
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
            </span>
          </div>
        </div>

        {/* welcome row */}
        <div className="mt-7 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">
              Welcome Back, Robert
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Here&apos;s a quick overview of your marketing performance today.
            </p>
          </div>
          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white">
            <PlusIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
            Create Campaign
          </button>
        </div>

        {/* cards */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
          {/* performance card */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-neutral-900">
                Campaign Performance Overview
              </h4>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-[11px] font-medium text-neutral-500">
                This week
                <ChevronDown className="h-3 w-3" />
              </span>
            </div>
            <AreaChart />
          </div>

          {/* revenue card */}
          <div className="rounded-2xl border border-neutral-200/80 bg-white p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-neutral-900">Revenue by Platform</h4>
              <MoreHorizontal className="h-4 w-4 text-neutral-400" />
            </div>
            <div className="mt-6 grid place-items-center">
              <RevenueDonut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Smooth green area chart with an inline tooltip + marker. */
function AreaChart() {
  const w = 560;
  const h = 190;
  // gentle rolling data that ramps up hard at the right
  const data = [38, 30, 42, 34, 50, 40, 58, 52, 70, 60, 78, 96, 112, 150];
  const max = 160;
  const min = 20;
  const stepX = w / (data.length - 1);
  const pts = data.map((d, i) => {
    const x = i * stepX;
    const y = h - ((d - min) / (max - min)) * (h - 14) - 6;
    return [x, y] as const;
  });
  // smooth path via simple Catmull-Rom → bezier
  const line = smooth(pts);
  const area = `${line} L${w},${h} L0,${h} Z`;
  const markerIdx = 4;
  const [mx, my] = pts[markerIdx];

  return (
    <div className="relative mt-4">
      {/* y labels */}
      <div className="pointer-events-none absolute -top-1 left-0 flex h-full flex-col justify-between py-2 text-[10px] font-medium text-neutral-300">
        <span>100k</span>
        <span>80k</span>
        <span>60k</span>
        <span>40k</span>
      </div>

      <div className="relative ml-8">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7ed957" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7ed957" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* dotted gridlines */}
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={w}
              y1={h * g}
              y2={h * g}
              stroke="#eef0ed"
              strokeWidth="1"
            />
          ))}
          <path d={area} fill="url(#area-fill)" />
          <path
            d={line}
            fill="none"
            stroke="#5bbf3f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* marker vertical guide */}
          <line x1={mx} x2={mx} y1={my} y2={h} stroke="#cfe9bf" strokeWidth="1.5" />
        </svg>

        {/* marker dot */}
        <span
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#5bbf3f] shadow"
          style={{ left: `${(mx / w) * 100}%`, top: `${(my / h) * 100}%` }}
        />

        {/* tooltip */}
        <div
          className="absolute -translate-x-1/2 -translate-y-full rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"
          style={{ left: `${(mx / w) * 100}%`, top: `${(my / h) * 100 - 6}%` }}
        >
          <div className="whitespace-nowrap text-[10px] font-medium text-neutral-400">
            Friday, July 23, 2025
          </div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="text-base font-bold text-neutral-900">10%</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />2% vs last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RevenueDonut() {
  const size = 150;
  const stroke = 26;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const value = 0.41;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eef1ee" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#5bbf3f"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value)}
        />
      </svg>
      <div className="absolute grid place-items-center text-center">
        <span className="font-display text-3xl font-extrabold text-neutral-900">41%</span>
      </div>
    </div>
  );
}

/** Catmull-Rom spline → SVG cubic bezier path for smooth curves. */
function smooth(points: ReadonlyArray<readonly [number, number]>): string {
  if (points.length < 2) return "";
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}
