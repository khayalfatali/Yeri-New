"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import FloatingCards from "./FloatingCards";
import MagneticButton from "../ui/MagneticButton";

// R3F is heavy — load it client-side only after first paint.
const Phone3D = dynamic(() => import("./Phone3D").then((m) => m.default), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);
  const sStageY = useSpring(stageY, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointerX.set(Math.max(-1, Math.min(1, x)));
      pointerY.set(Math.max(-1, Math.min(1, y)));
    };
    const onLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };
    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <section
      ref={ref}
      id="main"
      className="relative isolate overflow-hidden pt-28 pb-32 sm:pt-36 lg:pt-40"
    >
      <AmbientBackdrop pointerX={pointerX} pointerY={pointerY} />

      <div className="container-page relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-ink-200 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            Authorized PSP · Apple Acceptance Platform · iOS 17+
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="display mt-6 text-balance text-[44px] font-medium gradient-text sm:text-[64px] lg:text-[84px]"
          >
            The Merchant
            <br className="hidden sm:block" /> Operating System.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance text-[16.5px] leading-[1.6] text-ink-200 sm:text-[18px]"
          >
            Yeri turns every transaction into business intelligence. Accept
            contactless payments on iPhone — and run checkout, inventory, staff,
            CRM, and analytics from the same platform.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="#get-started" variant="primary">
              Get started
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href="#tap-to-pay" variant="ghost">
              See Tap to Pay on iPhone
              <PlayIcon />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* 3D stage */}
        <motion.div
          style={{ y: sStageY, scale: stageScale, opacity: stageOpacity }}
          className="relative mx-auto mt-16 flex h-[640px] max-w-[1100px] items-center justify-center sm:mt-24"
        >
          <div className="absolute inset-x-0 bottom-0 h-[260px] grid-floor opacity-50" />

          {/* WebGL iPhone scene */}
          <div className="absolute inset-0">
            <Phone3D />
          </div>

          {/* HTML floating cards stay on top — crisp typography */}
          <div className="pointer-events-none absolute inset-0">
            <FloatingCards pointerX={pointerX} pointerY={pointerY} />
          </div>
        </motion.div>

        <LiveTicker />
      </div>
    </section>
  );
}

function AmbientBackdrop({
  pointerX,
  pointerY,
}: {
  pointerX: ReturnType<typeof useMotionValue<number>>;
  pointerY: ReturnType<typeof useMotionValue<number>>;
}) {
  const x = useTransform(pointerX, [-1, 1], ["-6%", "6%"]);
  const y = useTransform(pointerY, [-1, 1], ["-4%", "4%"]);
  const sx = useSpring(x, { stiffness: 40, damping: 22 });
  const sy = useSpring(y, { stiffness: 40, damping: 22 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute left-1/2 top-[-10%] h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ x: sy, y: sx }}
        className="absolute left-[8%] top-[20%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(150,170,255,0.18), transparent 70%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ x: sy }}
        className="absolute right-[8%] top-[30%] h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,170,150,0.14), transparent 70%)",
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 30%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 30%, #000 30%, transparent 75%)",
        }}
      />

      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M2 1.5L8.5 5L2 8.5V1.5Z" fill="currentColor" />
    </svg>
  );
}

function LiveTicker() {
  const items = [
    "PSD2 / SCA",
    "PCI DSS Level 1",
    "FedRAMP Moderate",
    "ISO 27001",
    "SOC 2 Type II",
    "Tap to Pay on iPhone",
    "EMV 3DS",
    "Chase",
    "Visa",
    "Mastercard",
    "American Express",
    "Apple Pay",
    "Google Pay",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.22em] text-ink-300">
        Trusted infrastructure · Built on global rails
      </p>
      <div className="flex animate-ticker gap-12 whitespace-nowrap opacity-80">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="text-[13px] font-medium tracking-tight text-ink-200"
          >
            {it}
            <span className="ml-12 text-ink-500">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
