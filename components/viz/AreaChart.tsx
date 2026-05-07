"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Series = { name: string; points: number[]; stroke: string; fill: string };

type Props = {
  height?: number;
  width?: number;
  series: Series[];
  yLabels?: string[];
  xLabels?: string[];
};

export default function AreaChart({
  height = 220,
  width = 520,
  series,
  yLabels,
  xLabels,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const all = series.flatMap((s) => s.points);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const range = max - min || 1;
  const padX = 24;
  const padY = 14;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;

  const toPath = (points: number[]) => {
    const stepX = innerW / (points.length - 1);
    let d = "";
    points.forEach((p, i) => {
      const x = padX + i * stepX;
      const y = padY + innerH - ((p - min) / range) * innerH;
      d += `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)} `;
    });
    return d.trim();
  };

  const toFill = (points: number[]) => {
    const path = toPath(points);
    const stepX = innerW / (points.length - 1);
    const lastX = padX + (points.length - 1) * stepX;
    return `${path} L ${lastX} ${padY + innerH} L ${padX} ${padY + innerH} Z`;
  };

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="block w-full"
        preserveAspectRatio="none"
      >
        <defs>
          {series.map((s, i) => (
            <linearGradient
              key={i}
              id={`area-fill-${i}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={s.fill} stopOpacity="0.55" />
              <stop offset="100%" stopColor={s.fill} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* y grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line
            key={i}
            x1={padX}
            x2={width - padX}
            y1={padY + innerH * t}
            y2={padY + innerH * t}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        {series.map((s, i) => (
          <g key={s.name}>
            <motion.path
              d={toFill(s.points)}
              fill={`url(#area-fill-${i})`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.15 }}
            />
            <motion.path
              d={toPath(s.points)}
              fill="none"
              stroke={s.stroke}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{
                duration: 1.6,
                delay: 0.1 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </g>
        ))}
      </svg>

      {(yLabels || xLabels) && (
        <div className="mt-2 flex items-center justify-between text-[10px] text-ink-400 num-mono">
          {xLabels?.map((l) => <span key={l}>{l}</span>)}
        </div>
      )}
    </div>
  );
}
