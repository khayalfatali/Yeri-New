"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  padded?: boolean;
};

export default function GlassCard({
  children,
  className,
  interactive = true,
  padded = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [3, -3]);
  const ry = useTransform(mx, [-0.5, 0.5], [-3, 3]);
  const srx = useSpring(rx, { stiffness: 90, damping: 14 });
  const sry = useSpring(ry, { stiffness: 90, damping: 14 });

  const glareX = useTransform(mx, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(my, [-0.5, 0.5], [20, 80]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.10), transparent 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (!interactive) return;
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={
        interactive
          ? { rotateX: srx, rotateY: sry, transformPerspective: 1200 }
          : undefined
      }
      className={`group relative overflow-hidden rounded-3xl glass ${
        padded ? "p-6 sm:p-8" : ""
      } transition-colors duration-500 hover:border-white/15 ${
        className ?? ""
      }`}
    >
      {interactive && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glare }}
        />
      )}
      {children}
    </motion.div>
  );
}
