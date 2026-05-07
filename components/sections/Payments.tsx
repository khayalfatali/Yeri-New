"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

export default function Payments() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="payments"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Payments"
          index="01"
          title={
            <>
              Accept any payment.
              <br />
              Anywhere your iPhone goes.
            </>
          }
          description="Tap to Pay on iPhone, Apple Pay, contactless cards, QR, and online checkout — all settled to one balance, with one set of analytics, on one mobile-first platform."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard className="relative overflow-hidden p-0">
              <div className="relative h-[440px]">
                {/* ambient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(160,180,255,0.06), transparent 60%)",
                  }}
                />
                <motion.div
                  style={{ y }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PaymentVisual />
                </motion.div>
              </div>
              <div className="relative flex flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Tap to Pay on iPhone</p>
                  <h3 className="mt-2 text-[22px] font-medium tracking-tight text-white">
                    No terminal. No dongle. No hardware.
                  </h3>
                  <p className="mt-1 max-w-md text-[14px] text-ink-200">
                    Turn iPhone into a contactless terminal in seconds. Accept
                    cards, Apple Pay, and digital wallets — natively.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-white hover:bg-white/10"
                >
                  Learn more →
                </a>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5 lg:grid-rows-2">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Settlement</p>
                <h3 className="mt-2 text-[20px] font-medium text-white">
                  Next-day funding, instant payouts.
                </h3>
                <p className="mt-2 text-[14px] text-ink-200">
                  Move money the moment it&apos;s ready. Auto-payout to bank,
                  card, or Yeri Balance.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Pill>1.4% + 8¢</Pill>
                  <Pill subtle>Tap to Pay</Pill>
                  <Pill subtle>Apple Pay</Pill>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Offline-first</p>
                <h3 className="mt-2 text-[20px] font-medium text-white">
                  Sales never stop, even when networks do.
                </h3>
                <p className="mt-2 text-[14px] text-ink-200">
                  Yeri queues, signs, and syncs transactions automatically the
                  moment connectivity returns.
                </p>
                <OfflineLine />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  children,
  subtle,
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] ring-1 ${
        subtle
          ? "bg-white/[0.04] text-ink-200 ring-white/10"
          : "bg-white/10 text-white ring-white/15"
      }`}
    >
      {children}
    </span>
  );
}

function OfflineLine() {
  return (
    <div className="mt-5 flex items-center gap-2">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-6 w-[3px] rounded-full bg-white/40"
          initial={{ scaleY: 0.3, opacity: 0.3 }}
          animate={{
            scaleY: [0.3, 0.9, 0.4, 1, 0.5],
            opacity: [0.3, 0.9, 0.4, 1, 0.5],
          }}
          transition={{
            duration: 2.4,
            delay: i * 0.06,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PaymentVisual() {
  return (
    <div className="relative h-[300px] w-[440px]">
      {/* card 1 */}
      <motion.div
        initial={{ y: 10, rotate: -10 }}
        animate={{ y: [10, -2, 10], rotate: [-10, -8, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 top-10 h-[180px] w-[300px] rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 60%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="flex items-center justify-between p-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-200">
            Yeri · Black
          </div>
          <div className="flex items-center gap-1">
            <span className="h-3.5 w-3.5 rounded-full bg-red-400/80" />
            <span className="-ml-1.5 h-3.5 w-3.5 rounded-full bg-amber-300/80" />
          </div>
        </div>
        <div className="px-5">
          <div className="mt-10 text-[13px] tracking-[0.18em] text-white num-mono">
            •••• •••• •••• 4071
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-ink-200">
            <span>MAISON VERTE</span>
            <span>09 / 28</span>
          </div>
        </div>
      </motion.div>

      {/* card 2 */}
      <motion.div
        initial={{ y: -8, rotate: 8 }}
        animate={{ y: [-8, 4, -8], rotate: [8, 6, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 top-2 h-[180px] w-[300px] rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,200,255,0.18), rgba(255,255,255,0.04) 60%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="flex items-center justify-between p-5">
          <div className="text-[10px] uppercase tracking-[0.18em] text-ink-200">
            Apple Pay · Wallet
          </div>
          <svg width="24" height="14" viewBox="0 0 40 24" fill="white">
            <path d="M9.6 4.8c.7-.8 1.1-2 1-3.1-1 .1-2.1.7-2.7 1.5-.6.7-1.2 1.9-1 3 1 .1 2-.6 2.7-1.4zm.9 1.4c-1.5-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.7-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.6-.7 2.9-.7 1.4 0 1.8.7 2.9.7 1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8 0-2.4 2-3.5 2-3.6-1.1-1.6-2.7-1.8-3.3-1.8z" />
          </svg>
        </div>
        <div className="px-5">
          <div className="mt-10 text-[16px] font-medium tracking-tight text-white num-mono">
            $48.00
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-ink-200">
            <span>Charged · Maison Verte</span>
            <span>now</span>
          </div>
        </div>
      </motion.div>

      {/* contactless waves */}
      <motion.div
        animate={{ scale: [1, 1.4, 1.7], opacity: [0.5, 0.2, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1.7], opacity: [0.5, 0.2, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.6,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
      />
    </div>
  );
}
