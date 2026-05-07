"use client";

import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="relative isolate scroll-mt-24 overflow-hidden py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(40% 40% at 80% 30%, rgba(160,180,255,0.10), transparent 70%), radial-gradient(40% 40% at 20% 70%, rgba(255,200,180,0.07), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{
          background: [
            "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent 70%)",
            "radial-gradient(closest-side, rgba(255,255,255,0.16), transparent 70%)",
            "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />

      <div className="container-page text-center">
        <Reveal>
          <span className="eyebrow">The future of merchant infrastructure</span>
        </Reveal>
        <Reveal delay={0.08} as="h2">
          <span className="display mt-5 block text-balance text-[44px] font-medium gradient-text sm:text-[64px] lg:text-[80px]">
            If Apple designed
            <br /> a merchant platform —
            <br /> this would be it.
          </span>
        </Reveal>
        <Reveal delay={0.16} as="p">
          <span className="mx-auto mt-6 block max-w-2xl text-balance text-[16.5px] leading-[1.6] text-ink-200">
            Join the merchants reimagining what running a business feels like.
            Onboarding takes minutes. Cancellation takes seconds.
          </span>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href="#get-started" variant="primary">
              Get started free
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton href="#enterprise" variant="ghost">
              Talk to sales
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
