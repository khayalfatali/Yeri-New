"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import { APPLE } from "@/lib/apple-images";

export default function Payments() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Sell in person"
          index="02"
          title={
            <>
              Built for the way
              <br /> you work.
            </>
          }
          description="Open a tab. Run a tip. Split a check. Refund a sale. Yeri handles the moments your business actually runs on — without slowing the line down."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <GlassCard padded={false} className="overflow-hidden">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={APPLE.ukPayment.src}
                  alt={APPLE.ukPayment.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-ink-950/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="eyebrow text-white/80">In the wild</p>
                  <h3 className="mt-2 text-[22px] font-medium tracking-tight text-white">
                    Open early. Close late.
                  </h3>
                  <p className="mt-1 text-[13px] text-white/85">
                    Yeri keeps up — at the bar, the booth, and the back of
                    house.
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7">
            <Reveal delay={0.16}>
              <GlassCard>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <p className="eyebrow">Checkout</p>
                    <h3 className="mt-2 text-[22px] font-medium tracking-tight text-white">
                      The cleanest checkout in retail.
                    </h3>
                    <p className="mt-2 text-[14px] text-ink-200">
                      Keypad, catalog, modifiers, discounts, taxes — laid out
                      like the iPhone&apos;s own apps. New staff are productive
                      in minutes.
                    </p>
                  </div>
                  <Keypad />
                </div>
              </GlassCard>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.22}>
                <GlassCard>
                  <p className="eyebrow">Offline-first</p>
                  <h3 className="mt-2 text-[18px] font-medium text-white">
                    Sales never stop.
                  </h3>
                  <p className="mt-2 text-[13.5px] text-ink-200">
                    When the network drops, Yeri queues, signs, and syncs the
                    moment you&apos;re back online.
                  </p>
                  <OfflineLine />
                </GlassCard>
              </Reveal>
              <Reveal delay={0.28}>
                <GlassCard>
                  <p className="eyebrow">Receipts</p>
                  <h3 className="mt-2 text-[18px] font-medium text-white">
                    Digital. Smarter.
                  </h3>
                  <p className="mt-2 text-[13.5px] text-ink-200">
                    Every receipt becomes a customer profile, a feedback prompt,
                    and a repeat-visit signal — without lifting a finger.
                  </p>
                  <Receipt />
                </GlassCard>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Keypad() {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"];
  return (
    <div className="w-[180px] shrink-0 grid grid-cols-3 gap-1.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2.5">
      {keys.map((k) => (
        <span
          key={k}
          className="flex aspect-square items-center justify-center rounded-xl bg-white/[0.04] text-[14px] text-white ring-1 ring-white/[0.06]"
        >
          {k}
        </span>
      ))}
    </div>
  );
}

function OfflineLine() {
  return (
    <div className="mt-4 flex items-center gap-1">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="h-5 w-[3px] rounded-full bg-white/40"
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

function Receipt() {
  return (
    <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-medium text-white">Maison Verte</p>
        <span className="text-[10.5px] text-ink-300 num-mono">#YR-1042</span>
      </div>
      <div className="mt-2 space-y-1 text-[11px] text-ink-200">
        <div className="flex justify-between">
          <span>Oat latte · 2</span>
          <span className="num-mono">$11.00</span>
        </div>
        <div className="flex justify-between">
          <span>Croissant</span>
          <span className="num-mono">$4.20</span>
        </div>
      </div>
      <div className="mt-2 flex justify-between border-t border-white/[0.06] pt-2 text-[12px] text-white">
        <span>Total</span>
        <span className="num-mono">$15.20</span>
      </div>
    </div>
  );
}
