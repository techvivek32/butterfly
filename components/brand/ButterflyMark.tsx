import { cn } from "@/lib/utils";

/**
 * The Butterfly mark — a gradient butterfly built from SVG paths.
 * `flutter` toggles a subtle wing animation via CSS transform on the wing groups.
 */
export function ButterflyMark({
  className,
  flutter = false,
  idSuffix = "main",
}: {
  className?: string;
  flutter?: boolean;
  idSuffix?: string;
}) {
  const lg = `bfly-left-${idSuffix}`;
  const rg = `bfly-right-${idSuffix}`;
  const bg = `bfly-body-${idSuffix}`;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("block", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={lg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="55%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id={rg} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
        <linearGradient id={bg} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1410" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>

      {/* Left wings */}
      <g
        style={{ transformOrigin: "32px 32px" }}
        className={flutter ? "origin-center animate-flutter" : ""}
      >
        <path
          d="M31 32C31 32 22 10 11 12C-1 14.2 1.5 30 9 33C16 35.8 24 33 31 32Z"
          fill={`url(#${lg})`}
        />
        <path
          d="M31 32C31 32 21 38 12 41C2.5 44 3 56 13 55C23 54 29 44 31 32Z"
          fill={`url(#${lg})`}
          opacity="0.82"
        />
      </g>

      {/* Right wings */}
      <g
        style={{ transformOrigin: "32px 32px" }}
        className={flutter ? "origin-center animate-flutter [animation-delay:0.05s]" : ""}
      >
        <path
          d="M33 32C33 32 42 10 53 12C65 14.2 62.5 30 55 33C48 35.8 40 33 33 32Z"
          fill={`url(#${rg})`}
        />
        <path
          d="M33 32C33 32 43 38 52 41C61.5 44 61 56 51 55C41 54 35 44 33 32Z"
          fill={`url(#${rg})`}
          opacity="0.82"
        />
      </g>

      {/* Body + antennae */}
      <path
        d="M32 19C33.6 19 35 20.6 35 23V41C35 44 33.6 46 32 46C30.4 46 29 44 29 41V23C29 20.6 30.4 19 32 19Z"
        fill={`url(#${bg})`}
      />
      <path d="M32 20C30 15 27 12 24 11" stroke={`url(#${bg})`} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M32 20C34 15 37 12 40 11" stroke={`url(#${bg})`} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="23.5" cy="10.6" r="1.5" fill="#10b981" />
      <circle cx="40.5" cy="10.6" r="1.5" fill="#7c3aed" />
    </svg>
  );
}
