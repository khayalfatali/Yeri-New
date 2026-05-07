type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="-translate-y-[1px]"
      >
        <defs>
          <linearGradient id="yeri-grad" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#a8a8b2" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="yeri-grad2" x1="0" y1="0" x2="0" y2="32">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#cfcfd8" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="8"
          fill="url(#yeri-grad)"
          opacity="0.16"
        />
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="8"
          stroke="url(#yeri-grad2)"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <path
          d="M9.5 9.5L16 17.2L22.5 9.5M16 17.2V23.5"
          stroke="url(#yeri-grad2)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[15px] font-medium tracking-tight text-white">
        Yeri
      </span>
    </span>
  );
}
