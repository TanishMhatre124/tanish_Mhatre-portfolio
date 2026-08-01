import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-panel/60 text-signal border border-signal/30 px-3 py-1 font-mono text-[11px] tracking-wider",
        className
      )}
    >
      {children}
    </span>
  );
}
