"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

/**
 * Imagery sourced from Apple Newsroom press releases for Tap to Pay on iPhone.
 * Use of these images and the "Tap to Pay on iPhone" name follows Apple's
 * Marketing Guidelines for developers integrating the capability.
 *   - https://www.apple.com/newsroom/2022/02/apple-unveils-contactless-payments-via-tap-to-pay-on-iphone/
 *   - https://www.apple.com/uk/newsroom/2023/07/apple-introduces-tap-to-pay-on-iphone-in-the-uk/
 *   - https://www.apple.com/ca/newsroom/2024/05/apple-launches-tap-to-pay-on-iphone-in-canada/
 *   - https://developer.apple.com/tap-to-pay/marketing-guidelines/
 */
const PRESS_IMAGES = {
  hero: {
    src: "https://www.apple.com/newsroom/images/2024/05/apple-launches-tap-to-pay-on-iphone-in-canada/article/ca-en/Apple-Tap-to-Pay-Canada-EN-iPhone-contactless-payments_big.jpg.large.jpg",
    alt: "A customer holds their iPhone next to a merchant's iPhone to complete a Tap to Pay on iPhone transaction.",
    credit: "Apple Newsroom",
  },
  market: {
    src: "https://www.apple.com/newsroom/images/product/apple-pay/Apple_Apple-Pay_Transaction_big.jpg.large.jpg",
    alt: "A customer uses Tap to Pay on iPhone to purchase produce at the farmer's market.",
    credit: "Apple Newsroom",
  },
  inline: {
    src: "https://www.apple.com/newsroom/images/2023/07/Apple-Tap-to-Pay-on-iPhone-avail-UK-payment_inline.jpg.large.jpg",
    alt: "A merchant uses Tap to Pay on iPhone with a customer at a market stall.",
    credit: "Apple Newsroom",
  },
};

export default function TapToPay() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const yIn = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      id="tap-to-pay"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Tap to Pay on iPhone · Authorized PSP"
          index="·"
          title={
            <>
              Your iPhone is now
              <br /> the terminal.
            </>
          }
          description="Yeri is an authorized Payment Service Provider on the Apple Acceptance Platform — bringing Tap to Pay on iPhone to merchants across our markets. No extra hardware. No dongle. No setup. Just your iPhone."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false} className="overflow-hidden">
              <motion.div
                style={{ y }}
                className="relative aspect-[4/3] w-full overflow-hidden"
              >
                <Image
                  src={PRESS_IMAGES.hero.src}
                  alt={PRESS_IMAGES.hero.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-ink-950/30" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                  <div>
                    <p className="eyebrow text-white/80">
                      Apple Acceptance Platform · Authorized PSP
                    </p>
                    <p className="mt-1 text-[18px] font-medium text-white">
                      Yeri × Tap to Pay on iPhone
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] text-white/80 ring-1 ring-white/15 backdrop-blur">
                    Photo: {PRESS_IMAGES.hero.credit}
                  </span>
                </div>
              </motion.div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard padded={false} className="overflow-hidden">
                <motion.div
                  style={{ y: yIn }}
                  className="relative aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={PRESS_IMAGES.market.src}
                    alt={PRESS_IMAGES.market.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/0 to-ink-950/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[13px] text-white">
                      Accept contactless cards, Apple Pay, and digital wallets
                      — at the counter, the table, or curbside.
                    </p>
                  </div>
                </motion.div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard className="flex flex-col gap-3">
                <p className="eyebrow">How it works</p>
                <ul className="space-y-3 text-[14px] text-ink-100">
                  {[
                    "Open Yeri, enter the amount.",
                    "Customer holds their card or device near the top of iPhone.",
                    "Done — receipt sent in milliseconds.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] font-medium text-white ring-1 ring-white/15">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[11.5px] leading-relaxed text-ink-300">
                  Yeri Payment Services LLC is an authorized PSP on the Apple
                  Acceptance Platform. &quot;Tap to Pay on iPhone&quot;, the
                  Apple logo, and related imagery are trademarks of Apple Inc.,
                  used in accordance with Apple&apos;s Marketing Guidelines.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3} className="mt-6">
          <GlassCard padded={false} className="overflow-hidden">
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src={PRESS_IMAGES.inline.src}
                alt={PRESS_IMAGES.inline.alt}
                fill
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-ink-950/0" />
              <div className="absolute inset-0 flex items-center p-8 sm:p-12">
                <div className="max-w-md">
                  <p className="eyebrow text-white/80">Available now</p>
                  <h3 className="mt-3 text-[28px] font-medium tracking-tight text-white sm:text-[34px]">
                    Run your storefront from a phone you already own.
                  </h3>
                  <p className="mt-3 text-[14.5px] text-white/80">
                    Yeri merchants are accepting Tap to Pay across the United
                    States, Canada, the United Kingdom, and 11 European markets
                    — with more rolling out every quarter.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
