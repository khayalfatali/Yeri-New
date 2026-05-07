"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const CUSTOMERS = [
  {
    name: "Naomi Park",
    email: "naomi@hello.com",
    visits: 27,
    spend: "$1,248",
    tag: "Loyal",
    color: "from-rose-300 to-rose-500/60",
  },
  {
    name: "Idris Lin",
    email: "idris@studio.cc",
    visits: 9,
    spend: "$412",
    tag: "Returning",
    color: "from-amber-300 to-amber-500/60",
  },
  {
    name: "Chiara Romano",
    email: "chiara@nuova.co",
    visits: 3,
    spend: "$84",
    tag: "New",
    color: "from-sky-300 to-sky-500/60",
  },
  {
    name: "Jude Okafor",
    email: "jude@labs.io",
    visits: 41,
    spend: "$2,108",
    tag: "VIP",
    color: "from-violet-300 to-violet-500/60",
  },
];

export default function CRM() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="CRM & Customer Insights"
          index="04"
          title={
            <>
              Every transaction is a
              <br /> customer relationship.
            </>
          }
          description="Yeri turns each tap, swipe, and check-in into a living profile. Segment, recognize, and reward — without ever leaving the platform."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false}>
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <p className="text-[13px] font-medium text-white">
                  Top customers · last 30 days
                </p>
                <span className="text-[11px] text-ink-300">Sorted by spend</span>
              </div>
              <ul>
                {CUSTOMERS.map((c, i) => (
                  <motion.li
                    key={c.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-center gap-4 border-b border-white/5 px-6 py-4 last:border-b-0 hover:bg-white/[0.02]"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${c.color} text-[12px] font-medium text-ink-950`}
                    >
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] text-white">
                        {c.name}
                      </p>
                      <p className="truncate text-[11.5px] text-ink-300">
                        {c.email}
                      </p>
                    </div>
                    <div className="hidden text-right sm:block">
                      <p className="text-[13px] text-white num-mono">
                        {c.spend}
                      </p>
                      <p className="text-[11px] text-ink-300 num-mono">
                        {c.visits} visits
                      </p>
                    </div>
                    <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] text-white ring-1 ring-white/10">
                      {c.tag}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Lifetime value</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { l: "Avg LTV", v: "$284" },
                    { l: "Repeat rate", v: "62%" },
                    { l: "Win-back", v: "18%" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
                        {s.l}
                      </p>
                      <p className="mt-1 text-[18px] font-medium text-white num-mono">
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Loyalty</p>
                <p className="mt-2 text-[15px] text-white leading-relaxed">
                  Auto-rewards trigger when Naomi visits her 30th time. No
                  punch cards. No app required.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${
                        i < 27 ? "bg-white/80" : "bg-white/15"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-ink-300 num-mono">
                  27 / 30 visits — free drink unlocking soon
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
