"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const COUNTRIES = [
  { code: "US", name: "United States", live: true },
  { code: "CA", name: "Canada", live: true },
  { code: "UK", name: "United Kingdom", live: true },
  { code: "DE", name: "Germany", live: true },
  { code: "FR", name: "France", live: true },
  { code: "ES", name: "Spain", live: true },
  { code: "IT", name: "Italy", live: true },
  { code: "NL", name: "Netherlands", live: true },
  { code: "JP", name: "Japan", live: true },
  { code: "SG", name: "Singapore", live: true },
  { code: "AU", name: "Australia", live: true },
  { code: "AE", name: "UAE", live: false },
  { code: "BR", name: "Brazil", live: false },
  { code: "MX", name: "Mexico", live: false },
  { code: "IN", name: "India", live: false },
  { code: "ZA", name: "South Africa", live: false },
];

export default function GlobalSection() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Sell across borders"
          index="13"
          title={
            <>
              One Yeri,
              <br /> every market.
            </>
          }
          description="Local payment rails. Local currencies. Local tax and compliance. All handled at the platform layer — so you can open a new market without opening a new vendor."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false}>
              <div className="border-b border-white/5 px-6 py-4">
                <p className="eyebrow">Markets · live & rolling out</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 lg:grid-cols-4">
                {COUNTRIES.map((c, i) => (
                  <motion.li
                    key={c.code}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.03 * i }}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  >
                    <span className="flex h-6 w-9 items-center justify-center rounded-md bg-gradient-to-br from-white/10 to-white/[0.02] text-[10px] font-medium text-white ring-1 ring-white/10 num-mono">
                      {c.code}
                    </span>
                    <span className="flex-1 truncate text-[12.5px] text-white">
                      {c.name}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        c.live ? "bg-emerald-400" : "bg-amber-300/80"
                      }`}
                    />
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Native settlement</p>
                <p className="mt-2 text-[15px] text-ink-100 leading-relaxed">
                  Yeri settles in 38 currencies on local rails — with FX
                  optimized at the network edge.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["USD", "EUR", "GBP", "JPY", "SGD", "AUD", "CAD", "CHF"].map(
                    (c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-ink-100 num-mono"
                      >
                        {c}
                      </span>
                    ),
                  )}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Localized everything</p>
                <p className="mt-2 text-[14px] text-ink-100 leading-relaxed">
                  Receipts, tax filings, terms, and dispute flows — all adapted
                  per country, in 24 languages.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-ink-200">
                  {["English", "Français", "Deutsch", "Español", "日本語", "中文"].map(
                    (l) => (
                      <span
                        key={l}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-center"
                      >
                        {l}
                      </span>
                    ),
                  )}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
