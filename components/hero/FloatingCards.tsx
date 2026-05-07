"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Sparkline from "../viz/Sparkline";

type Props = {
  pointerX: ReturnType<typeof useMotionValue<number>>;
  pointerY: ReturnType<typeof useMotionValue<number>>;
};

export default function FloatingCards({ pointerX, pointerY }: Props) {
  const px = useSpring(pointerX, { stiffness: 50, damping: 18 });
  const py = useSpring(pointerY, { stiffness: 50, damping: 18 });

  const card1X = useTransform(px, [-1, 1], [-22, 22]);
  const card1Y = useTransform(py, [-1, 1], [-12, 12]);
  const card2X = useTransform(px, [-1, 1], [18, -18]);
  const card2Y = useTransform(py, [-1, 1], [-8, 8]);
  const card3X = useTransform(px, [-1, 1], [-14, 14]);
  const card3Y = useTransform(py, [-1, 1], [16, -16]);
  const card4X = useTransform(px, [-1, 1], [12, -12]);
  const card4Y = useTransform(py, [-1, 1], [10, -10]);

  return (
    <>
      {/* Top-left: Live transaction feed */}
      <motion.div
        style={{ x: card1X, y: card1Y }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto absolute -left-4 top-10 hidden w-[268px] sm:block lg:-left-2"
      >
        <FloatCard tilt={-2}>
          <div className="flex items-center justify-between">
            <p className="eyebrow">Live transactions</p>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] text-ink-300">Live</span>
            </span>
          </div>
          <ul className="mt-3 space-y-2.5">
            {[
              { name: "Oat latte · 2", amt: "$12.40", t: "now" },
              { name: "Croissant", amt: "$5.50", t: "1s" },
              { name: "Espresso", amt: "$3.80", t: "4s" },
            ].map((tx) => (
              <li key={tx.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  </span>
                  <div>
                    <p className="text-[12px] text-white">{tx.name}</p>
                    <p className="text-[10px] text-ink-300">Apple Pay · {tx.t}</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-white num-mono">
                  {tx.amt}
                </span>
              </li>
            ))}
          </ul>
        </FloatCard>
      </motion.div>

      {/* Top-right: Today's revenue */}
      <motion.div
        style={{ x: card2X, y: card2Y }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto absolute -right-4 top-2 hidden w-[260px] sm:block lg:-right-2"
      >
        <FloatCard tilt={2.5}>
          <p className="eyebrow">Today</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-[28px] font-medium tracking-tighter text-white num-mono">
              $14,829
            </p>
            <span className="rounded-full bg-emerald-400/15 px-1.5 py-[1px] text-[10px] text-emerald-300 ring-1 ring-emerald-300/20">
              ↑ 12.4%
            </span>
          </div>
          <div className="mt-3">
            <Sparkline
              points={[12, 16, 13, 19, 17, 22, 21, 28, 26, 30, 33, 38]}
              height={56}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-ink-300">
            <span>9 AM</span>
            <span>Now</span>
          </div>
        </FloatCard>
      </motion.div>

      {/* Bottom-left: Inventory */}
      <motion.div
        style={{ x: card3X, y: card3Y }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto absolute -left-2 bottom-6 hidden w-[244px] sm:block"
      >
        <FloatCard tilt={1.5}>
          <p className="eyebrow">Inventory</p>
          <ul className="mt-2.5 space-y-2">
            {[
              { name: "Whole bean — Ethiopia", v: 0.78 },
              { name: "Oat milk · 1L", v: 0.32 },
              { name: "Sourdough loaves", v: 0.55 },
            ].map((it) => (
              <li key={it.name}>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] text-white/90">{it.name}</span>
                  <span className="text-[10px] text-ink-300 num-mono">
                    {Math.round(it.v * 100)}%
                  </span>
                </div>
                <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-white/80 to-white/40"
                    style={{ width: `${it.v * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </FloatCard>
      </motion.div>

      {/* Bottom-right: AI insight */}
      <motion.div
        style={{ x: card4X, y: card4Y }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto absolute -right-2 bottom-12 hidden w-[270px] sm:block"
      >
        <FloatCard tilt={-2}>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1.5L7.2 4.8L10.5 6L7.2 7.2L6 10.5L4.8 7.2L1.5 6L4.8 4.8L6 1.5Z"
                  fill="white"
                  fillOpacity="0.85"
                />
              </svg>
            </span>
            <p className="text-[11.5px] font-medium text-white">Yeri Intelligence</p>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-ink-100">
            Foot traffic is 28% above forecast for a Thursday. Consider opening
            register&nbsp;2.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-full bg-white/[0.08] px-2.5 py-1 text-[10px] text-white/90 ring-1 ring-white/10 hover:bg-white/[0.12]">
              Open register
            </button>
            <button className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[10px] text-ink-200 ring-1 ring-white/10 hover:bg-white/[0.07]">
              Dismiss
            </button>
          </div>
        </FloatCard>
      </motion.div>
    </>
  );
}

function FloatCard({
  children,
  tilt = 0,
}: {
  children: React.ReactNode;
  tilt?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{ rotate: `${tilt}deg` }}
      className="glass rounded-2xl p-4"
    >
      {children}
    </motion.div>
  );
}
