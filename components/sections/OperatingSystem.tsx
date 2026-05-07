"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const APPS = [
  { name: "Payments", color: "from-white to-white/40", icon: "Pay" },
  { name: "Register", color: "from-amber-300 to-amber-500/60", icon: "Reg" },
  { name: "CRM", color: "from-rose-300 to-rose-500/60", icon: "Cust" },
  { name: "Inventory", color: "from-emerald-300 to-emerald-500/60", icon: "Inv" },
  { name: "Analytics", color: "from-sky-300 to-sky-500/60", icon: "An" },
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
          eyebrow="Merchant operating system"
          index="02"
          align="center"
          title={
            <>
              One system.
              <br /> Every workflow.
            </>
          }
          description="Yeri OS unifies the apps merchants use every day — payments, register, inventory, CRM, scheduling, accounting, tax — into one fluid mobile-first experience."
        />

        <Reveal delay={0.15} className="mt-14">
          <div className="relative mx-auto max-w-5xl">
            {/* glass dock */}
            <div className="glass-strong relative mx-auto rounded-[36px] p-6 sm:p-10">
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3">
                {APPS.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.05 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-white/15"
                  >
                    <span
                      className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-[11px] font-medium text-ink-950`}
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
                        Native to Yeri OS
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Stat label="Workflows unified" value="42+" />
              <Stat label="Setup time" value="< 8 min" />
              <Stat label="Devices supported" value="iPhone · iPad · Mac" small />
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
