"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import { APPLE } from "@/lib/apple-images";

export default function Acceptance() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section
      ref={ref}
      id="payments"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Take payments"
          index="01"
          title={
            <>
              Get paid in person,
              <br /> on the device you own.
            </>
          }
          description="Accept contactless cards, mobile wallets, and QR — straight from a phone in your hand. No terminal. No dongle. Funds arrive as fast as the next morning."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false} className="overflow-hidden">
              <motion.div
                style={{ y: y1 }}
                className="relative aspect-[16/10] w-full overflow-hidden"
              >
                <Image
                  src={APPLE.contactlessTransaction.src}
                  alt={APPLE.contactlessTransaction.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/65 via-ink-950/0 to-ink-950/30" />
              </motion.div>
              <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Contactless</p>
                  <h3 className="mt-2 text-[22px] font-medium tracking-tight text-white">
                    A tap is all it takes.
                  </h3>
                  <p className="mt-1 max-w-md text-[14px] text-ink-200">
                    Customers tap their card, watch, or phone to yours. The
                    payment clears in seconds. The receipt sends itself.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-white hover:bg-white/10"
                >
                  How it works →
                </a>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Payouts</p>
                <h3 className="mt-2 text-[20px] font-medium text-white">
                  Money in your account by morning.
                </h3>
                <p className="mt-2 text-[14px] text-ink-200">
                  Free standard transfers. Instant transfers when you need
                  them — to your bank, debit card, or Yeri Balance.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Pill>Cards</Pill>
                  <Pill subtle>Mobile wallets</Pill>
                  <Pill subtle>QR</Pill>
                  <Pill subtle>Online checkout</Pill>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard padded={false} className="overflow-hidden">
                <motion.div
                  style={{ y: y2 }}
                  className="relative aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={APPLE.marketScene.src}
                    alt={APPLE.marketScene.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[13px] text-white">
                      Counter, table, or curbside — wherever your customer is.
                    </p>
                  </div>
                </motion.div>
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
