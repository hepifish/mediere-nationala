interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({ size = 40, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer arc — dark navy */}
      <path
        d="M8 32C8 32 14 12 24 12C34 12 40 32 40 32"
        stroke="#1a3d66"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner arc — lighter blue */}
      <path
        d="M12 32C12 32 16 16 24 16C32 16 36 32 36 32"
        stroke="#5B86B8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Golden path underneath */}
      <path
        d="M10 34C10 34 16 22 24 22C28 22 31 26 33 30"
        stroke="#B8923E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

interface LogoFullProps {
  className?: string;
  light?: boolean;
}

export function LogoFull({ className = "", light = false }: LogoFullProps) {
  const textColor = light ? "text-white" : "text-navy";
  const mutedColor = light ? "text-white/60" : "text-muted";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={40} />
      <div>
        <p className={`text-sm font-semibold ${textColor} leading-tight`}>
          Centrul Național de Mediere
        </p>
        <p className={`text-xs ${mutedColor} leading-tight`}>
          și Conflict Management
        </p>
      </div>
    </div>
  );
}
