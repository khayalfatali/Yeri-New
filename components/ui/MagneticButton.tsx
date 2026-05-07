"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

export default function MagneticButton({
  href,
  onClick,
  variant = "primary",
  children,
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const strength = 0.25;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `${
    variant === "primary" ? "btn-primary" : "btn-ghost"
  } magnetic ${className ?? ""}`;

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cls}
    >
      {children}
    </motion.button>
  );
}
