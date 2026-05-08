"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import { APPLE } from "@/lib/apple-images";

export default function MultiDevice() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative isolate scroll-mt-24 overflow-hidden py-32 sm:py-44"
    >
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Run on every screen"
          index="08"
          title={
            <>
              One business.
              <br /> Every device.
            </>
          }
          description="Add a tablet at the counter. Hand a phone to a runner. Open a laptop to dig into the numbers. Yeri syncs every screen in real time."
        />

        <Reveal delay={0.15} className="mt-14">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.07] shadow-glass-lg">
            <motion.div
              style={{ y }}
              className="relative aspect-[16/9] w-full overflow-hidden"
            >
              <Image
                src={APPLE.businessHero.src}
                alt={APPLE.businessHero.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-cover"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-ink-950/30" />
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0.2}>
            <GlassCard>
              <p className="eyebrow">Phone</p>
              <h3 className="mt-2 text-[18px] font-medium text-white">
                Take payments on the floor.
              </h3>
              <p className="mt-2 text-[13.5px] text-ink-200">
                Walk the line. Run a tab tableside. Close a sale at the door.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.26}>
            <GlassCard>
              <p className="eyebrow">Tablet</p>
              <h3 className="mt-2 text-[18px] font-medium text-white">
                The counter, simplified.
              </h3>
              <p className="mt-2 text-[13.5px] text-ink-200">
                A faster register. Bigger keypad. Built-in customer display.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.32}>
            <GlassCard>
              <p className="eyebrow">Laptop</p>
              <h3 className="mt-2 text-[18px] font-medium text-white">
                The back office, anywhere.
              </h3>
              <p className="mt-2 text-[13.5px] text-ink-200">
                Reports, payroll, inventory, schedules — open it from home.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={0.38} className="mt-10">
          <p className="text-center text-[12.5px] text-ink-300">
            Sub-50ms sync · Zero-config onboarding · Works offline
          </p>
        </Reveal>
      </div>
    </section>
  );
}
