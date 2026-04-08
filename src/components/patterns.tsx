export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.03] ${className}`}
      width="400"
      height="400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#dots)" />
    </svg>
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.04] ${className}`}
      width="600"
      height="600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#grid)" />
    </svg>
  );
}

export function BalanceDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Concentric circles — symbolizing dialogue / ripple effect */}
      <circle cx="140" cy="140" r="130" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
      <circle cx="140" cy="140" r="100" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
      <circle cx="140" cy="140" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
      <circle cx="140" cy="140" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.03" />
      {/* Balance line */}
      <line x1="40" y1="140" x2="240" y2="140" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
      <line x1="140" y1="40" x2="140" y2="240" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    </svg>
  );
}

export function DiagonalLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none opacity-[0.03] ${className}`}
      width="400"
      height="400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="diag" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#diag)" />
    </svg>
  );
}

export function SectionDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className={`h-px w-12 ${light ? "bg-white/20" : "bg-accent/20"}`} />
      <div className={`mx-3 w-1.5 h-1.5 rounded-full ${light ? "bg-white/20" : "bg-accent/30"}`} />
      <div className={`h-px w-12 ${light ? "bg-white/20" : "bg-accent/20"}`} />
    </div>
  );
}
