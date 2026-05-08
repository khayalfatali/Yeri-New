"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "../ui/MagneticButton";
import Sparkline from "../viz/Sparkline";
import { APPLE } from "@/lib/apple-images";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const sHeroY = useSpring(heroY, { stiffness: 80, damping: 24 });

  return (
    <section
      ref={ref}
      id="main"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <div className="container-page relative z-10">
        {/* Headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-4xl text-center"
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
            One platform. Every part of your business.
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="display mt-6 text-balance text-[44px] font-medium gradient-text sm:text-[64px] lg:text-[80px]"
          >
            Sell anywhere.
            <br className="hidden sm:block" /> Run everything.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance text-[16.5px] leading-[1.6] text-ink-200 sm:text-[18px]"
          >
            Yeri is the all-in-one platform for taking payments, managing
            staff, tracking stock, and growing every kind of business — from
            one place, on the device you already own.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="#get-started" variant="primary">
              Get started
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href="#pricing" variant="ghost">
              See pricing
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Photography stage */}
        <motion.div
          style={{ y: sHeroY, opacity: heroOpacity }}
          className="relative mx-auto mt-14 sm:mt-20"
        >
          <div className="relative mx-auto aspect-[16/10] w-full max-w-[1180px] overflow-hidden rounded-[28px] border border-white/10 shadow-glass-lg">
            <Image
              src={APPLE.contactlessTransaction.src}
              alt={APPLE.contactlessTransaction.alt}
              priority
              fill
              sizes="(max-width: 1280px) 100vw, 1180px"
              className="object-cover"
              unoptimized
            />
            {/* gentle vignette so HTML cards stay legible */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-ink-950/40" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/50 via-transparent to-ink-950/30" />

            {/* floating cards */}
            <FloatCard
              className="absolute left-4 top-6 sm:left-8 sm:top-10 lg:left-12 lg:top-14 max-w-[280px]"
              delay={0.3}
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">Today</p>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] text-ink-300">Live</span>
                </span>
              </div>
              <p className="mt-1 text-[28px] font-medium tracking-tighter text-white num-mono">
                $14,829
              </p>
              <p className="text-[11px] text-emerald-300 num-mono">↑ 12.4% vs last week</p>
              <div className="mt-3">
                <Sparkline
                  points={[12, 16, 13, 19, 17, 22, 21, 28, 26, 30, 33, 38]}
                  height={50}
                />
              </div>
            </FloatCard>

            <FloatCard
              className="absolute right-4 top-6 sm:right-8 sm:top-12 lg:right-12 lg:top-16 max-w-[260px]"
              delay={0.45}
            >
              <p className="eyebrow">Just now</p>
              <p className="mt-1 text-[14px] font-medium text-white">
                Oat latte · 2 · $12.40
              </p>
              <p className="text-[11px] text-ink-300">Counter · Mara V.</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full bg-emerald-400/15 px-2 py-[2px] text-[10px] text-emerald-300 ring-1 ring-emerald-300/20">
                  Paid
                </span>
                <span className="rounded-full bg-white/[0.05] px-2 py-[2px] text-[10px] text-ink-200 ring-1 ring-white/10">
                  Contactless
                </span>
              </div>
            </FloatCard>

            <FloatCard
              className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 max-w-[420px] sm:block"
              delay={0.6}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1.5L7.2 4.8L10.5 6L7.2 7.2L6 10.5L4.8 7.2L1.5 6L4.8 4.8L6 1.5Z"
                      fill="white"
                      fillOpacity="0.85"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-medium text-white">
                    Yeri Intelligence
                  </p>
                  <p className="text-[12px] text-ink-200">
                    Saturdays earn 28% more — bundle pastries with espresso for
                    a +9% lift.
                  </p>
                </div>
              </div>
            </FloatCard>
          </div>

          {/* photo credit */}
          <p className="mt-3 text-center text-[11px] text-ink-400">
            Photo: {APPLE.contactlessTransaction.credit}
          </p>
        </motion.div>

        <LiveTicker />
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-4 shadow-glass-lg ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function LiveTicker() {
  const items = [
    "Cafés",
    "Restaurants",
    "Bakeries",
    "Salons",
    "Boutique retail",
    "Florists",
    "Pop-ups",
    "Markets",
    "Studios",
    "Mobile services",
    "Event vendors",
    "Galleries",
    "Bookstores",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.22em] text-ink-300">
        Built for every kind of business
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
