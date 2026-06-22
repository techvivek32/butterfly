import { cn } from "@/lib/utils";
import { ButterflyMark } from "./ButterflyMark";

export function Logo({
  className,
  dark = false,
  flutter = false,
}: {
  className?: string;
  dark?: boolean;
  flutter?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ButterflyMark className="h-8 w-8" flutter={flutter} idSuffix="logo" />
      <span
        className={cn(
          "font-display text-xl font-extrabold tracking-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        Butter<span className="text-gradient-brand">fly</span>
      </span>
    </span>
  );
}
