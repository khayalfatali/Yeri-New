"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import { APPLE } from "@/lib/apple-images";

const APPS = [
  { name: "Checkout", color: "from-white to-white/40", icon: "Pay" },
  { name: "Catalog", color: "from-amber-300 to-amber-500/60", icon: "Cat" },
  { name: "Customers", color: "from-rose-300 to-rose-500/60", icon: "Cust" },
  { name: "Stock", color: "from-emerald-300 to-emerald-500/60", icon: "Stk" },
  { name: "Reports", color: "from-sky-300 to-sky-500/60", icon: "Rep" },
  { name: "Team", color: "from-violet-300 to-violet-500/60", icon: "Team" },
  { name: "Loyalty", color: "from-fuchsia-300 to-fuchsia-500/60", icon: "Loy" },
  { name: "Tax", color: "from-teal-300 to-teal-500/60", icon: "Tax" },
  { name: "Booking", color: "from-orange-300 to-orange-500/60", icon: "Book" },
];

export default function OperatingSystem() {
  return (
    <section
      id="operating-system"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="More than a POS"
          index="04"
          align="center"
          title={
            <>
              All your tools.
              <br /> All in one place.
            </>
          }
          description="Stop stitching apps together. Yeri brings checkout, stock, customers, staff, and reports into a single system — with one login, one bill, one place to look."
        />

        <Reveal delay={0.12} className="mt-14">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.07]">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={APPLE.businessHero.src}
                alt={APPLE.businessHero.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1100px"
                className="object-cover"
                unoptimized
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/40" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="eyebrow text-white/80">One platform</p>
              <h3 className="mt-2 max-w-2xl text-[24px] font-medium tracking-tight text-white sm:text-[32px]">
                The system runs on every screen you already own.
              </h3>
              <p className="mt-2 max-w-xl text-[14px] text-white/85">
                Mac for the back office. iPad on the counter. iPhone for the
                floor. Same data. Same controls. Same Yeri.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-12">
          <div className="glass-strong relative mx-auto max-w-5xl rounded-[36px] p-6 sm:p-10">
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {APPS.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.04 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/15"
                >
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-[10px] font-medium text-ink-950`}
                    style={{
                      boxShadow:
                        "0 1px 0 0 rgba(255,255,255,0.5) inset, 0 8px 24px -8px rgba(0,0,0,0.6)",
                    }}
                  >
                    {a.icon}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-50"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-medium text-white">
                      {a.name}
                    </p>
                    <p className="truncate text-[11.5px] text-ink-300">
                      Built into Yeri
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <Stat label="Apps replaced" value="9+" />
              <Stat label="Setup time" value="< 8 min" />
              <Stat label="Devices" value="Phone · Tablet · Mac" small />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <GlassCard interactive={false} className="p-6">
      <p className="eyebrow">{label}</p>
      <p
        className={`mt-2 font-medium tracking-tight gradient-text ${
          small ? "text-[20px]" : "text-[34px]"
        }`}
      >
        {value}
      </p>
    </GlassCard>
  );
}
