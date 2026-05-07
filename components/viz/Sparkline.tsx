"use client";

import { motion } from "framer-motion";

type Props = {
  points: number[];
  height?: number;
  width?: number;
  stroke?: string;
  fill?: boolean;
  className?: string;
};

export default function Sparkline({
  points,
  height = 60,
  width = 220,
  stroke = "rgba(255,255,255,0.85)",
  fill = true,
  className,
}: Props) {
  if (!points.length) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - ((p - min) / range) * (height - 6) - 3;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  const fillPath = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`block w-full ${className ?? ""}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {fill && (
        <motion.path
          d={fillPath}
          fill="url(#spark-fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      )}
      <motion.path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx={width}
        cy={
          height -
          ((points[points.length - 1] - min) / range) * (height - 6) -
          3
        }
        r="2.6"
        fill={stroke}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      />
    </svg>
  );
}
