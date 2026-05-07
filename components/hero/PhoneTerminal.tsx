"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

type Props = {
  pointerX: ReturnType<typeof useMotionValue<number>>;
  pointerY: ReturnType<typeof useMotionValue<number>>;
};

export default function PhoneTerminal({ pointerX, pointerY }: Props) {
  // tilt phone subtly with cursor
  const rotX = useTransform(pointerY, [-1, 1], [6, -6]);
  const rotY = useTransform(pointerX, [-1, 1], [-8, 8]);
  const trX = useTransform(pointerX, [-1, 1], [-6, 6]);
  const trY = useTransform(pointerY, [-1, 1], [-4, 4]);

  const sRotX = useSpring(rotX, { stiffness: 80, damping: 18, mass: 0.8 });
  const sRotY = useSpring(rotY, { stiffness: 80, damping: 18, mass: 0.8 });
  const sTrX = useSpring(trX, { stiffness: 60, damping: 20 });
  const sTrY = useSpring(trY, { stiffness: 60, damping: 20 });

  // amount animation
  const amount = useMotionValue(0);
  useEffect(() => {
    const ctrl = animate(amount);
    return ctrl;
    function animate(mv: typeof amount) {
      let frame: number;
      const start = performance.now();
      const tick = (t: number) => {
        const elapsed = (t - start) / 1000;
        // breathing pulse
        mv.set(48 + Math.sin(elapsed * 1.4) * 0.5);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }
  }, [amount]);

  return (
    <motion.div
      style={{
        rotateX: sRotX,
        rotateY: sRotY,
        x: sTrX,
        y: sTrY,
        transformPerspective: 1400,
      }}
      className="relative mx-auto"
    >
      {/* ambient glow under phone */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(140,160,200,0.10) 40%, transparent 70%)",
        }}
      />

      {/* phone body */}
      <div
        className="relative h-[600px] w-[296px] rounded-[54px] p-[3px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.25), rgba(140,140,160,0.05) 40%, rgba(255,255,255,0.18))",
          boxShadow:
            "0 60px 120px -30px rgba(0,0,0,0.85), 0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        <div
          className="h-full w-full rounded-[51px] p-[1.5px]"
          style={{
            background:
              "linear-gradient(180deg, #1c1c20, #0a0a0c 30%, #07070a 70%, #14141a)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[49px] bg-ink-950">
            {/* dynamic island */}
            <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />

            {/* screen content */}
            <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900 px-5 pt-12">
              {/* status bar */}
              <div className="mb-2 flex items-center justify-between text-[10px] text-ink-300">
                <span className="num-mono">9:41</span>
                <span className="flex items-center gap-1">
                  <span className="h-[6px] w-[14px] rounded-[2px] border border-ink-300/60" />
                  <span className="text-[8px]">5G</span>
                </span>
              </div>

              {/* merchant header */}
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
                    Merchant
                  </p>
                  <p className="text-[13px] font-medium text-white">
                    Maison Verte · Lower East Side
                  </p>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle
                      cx="6"
                      cy="6"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="text-white/70"
                    />
                  </svg>
                </div>
              </div>

              {/* amount card */}
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
                  Amount due
                </p>
                <p className="mt-1 text-[34px] font-medium tracking-tighter text-white num-mono">
                  $48.00
                </p>
                <p className="text-[11px] text-ink-300">
                  Order #YR-1042 · 3 items
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-400/15 px-2 py-[2px] text-[10px] text-emerald-300 ring-1 ring-emerald-300/20">
                    Tap to Pay ready
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-[2px] text-[10px] text-ink-200 ring-1 ring-white/10">
                    Apple Pay
                  </span>
                </div>
                {/* shimmer */}
                <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.07)_50%,transparent_70%)] bg-[length:200%_100%]" />
              </div>

              {/* tap to pay zone */}
              <div className="relative mt-4 flex flex-1 flex-col items-center justify-center">
                <div className="relative h-[150px] w-[150px]">
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-ping rounded-full bg-white/[0.06]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-3 rounded-full border border-white/10"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-7 rounded-full border border-white/15"
                  />
                  <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-white/[0.14] to-white/[0.04] ring-1 ring-white/15">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 11C5 8.79 6.79 7 9 7M19 11C19 6.58 15.42 3 11 3M9 11C9 9.9 9.9 9 11 9M15 11C15 8.79 13.21 7 11 7"
                        stroke="white"
                        strokeOpacity="0.85"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <rect
                        x="9"
                        y="11"
                        width="6"
                        height="10"
                        rx="2"
                        stroke="white"
                        strokeOpacity="0.9"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="mt-1 text-[10px] font-medium text-white/90">
                      Tap to Pay
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center text-[11px] text-ink-300">
                  Hold customer&apos;s card or device near the top of iPhone
                </p>
              </div>

              {/* cancel */}
              <div className="mt-3 mb-5">
                <button className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-2.5 text-[12px] font-medium text-white/80">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* side button + power button */}
      <span
        aria-hidden
        className="absolute -right-[2px] top-[140px] h-[60px] w-[2px] rounded-r bg-gradient-to-b from-white/20 via-white/5 to-transparent"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[110px] h-[36px] w-[2px] rounded-l bg-gradient-to-b from-white/20 via-white/5 to-transparent"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[160px] h-[58px] w-[2px] rounded-l bg-gradient-to-b from-white/20 via-white/5 to-transparent"
      />
    </motion.div>
  );
}
