interface LogoIconProps {
  size?: number;
  className?: string;
  light?: boolean;
}

export function LogoIcon({ size = 40, className = "", light = false }: LogoIconProps) {
  const width = Math.round(size * 2.98);
  const archColor = light ? "rgba(255,255,255,0.7)" : "#1a3d66";
  const goldColor = light ? "#C4A96A" : "#A08B6E";

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 170 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M169.5 56.5004H151.5C143.1 20.5008 102.333 8.50056 83 7.00042C143 6.20042 165.667 39.6671 169.5 56.5004Z"
        fill={archColor}
      />
      <path
        d="M7.62939e-06 57H18.7283C27.4682 15.5576 69.8844 1.74316 90 0.01622C27.5723 -0.90473 3.98844 37.6217 7.62939e-06 57Z"
        fill={archColor}
      />
      <path
        d="M26.5 57H41.0665C47.8642 28.6447 80.8545 19.1927 96.5 18.0111C47.9451 17.381 29.6021 43.7411 26.5 57Z"
        fill={goldColor}
      />
    </svg>
  );
}

interface LogoFullProps {
  className?: string;
  light?: boolean;
  showTagline?: boolean;
}

export function LogoFull({
  className = "",
  light = false,
  showTagline = false,
}: LogoFullProps) {
  const textColor = light ? "text-white" : "text-navy";
  const mutedColor = light ? "text-white/60" : "text-muted";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={20} light={light} />
      <div>
        <p className={`text-sm font-semibold ${textColor} leading-tight`}>
          Centrul Național de Mediere
        </p>
        <p className={`text-xs ${mutedColor} leading-tight`}>
          și Conflict Management
        </p>
        {showTagline && (
          <p className={`text-[10px] italic ${mutedColor} mt-1`}>
            Dialogul, garanția soluțiilor durabile.
          </p>
        )}
      </div>
    </div>
  );
}
