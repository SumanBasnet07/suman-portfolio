import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  sublabel?: string;
  className?: string;
  dotColor?: string;
  icon?: React.ReactNode;
}

export function SectionLabel({
  label,
  sublabel,
  className,
  dotColor = "bg-[#111111]",
  icon,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#666666] bg-white/70 px-3 py-1 rounded-full border border-[#111111]/10 shadow-xs",
        className
      )}
    >
      {icon ? (
        <span className="text-[#2563EB] shrink-0">{icon}</span>
      ) : (
        <span className={cn("w-1.5 h-1.5 rounded-full inline-block shrink-0", dotColor)} />
      )}
      <span className="font-semibold text-[#111111]">{label}</span>
      {sublabel && (
        <>
          <span className="text-[#111111]/25">/</span>
          <span className="text-[#666666]">{sublabel}</span>
        </>
      )}
    </div>
  );
}
