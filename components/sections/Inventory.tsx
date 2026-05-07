"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const ITEMS = [
  { name: "Espresso · Honduras", sku: "BN-201", stock: 0.78, eta: "On track" },
  { name: "Oat milk 1L", sku: "DR-019", stock: 0.18, eta: "Reorder · 2d" },
  { name: "Sourdough loaves", sku: "BK-064", stock: 0.42, eta: "On track" },
  { name: "Glass cups · 12oz", sku: "WR-330", stock: 0.91, eta: "Surplus" },
  { name: "Filter papers", sku: "WR-118", stock: 0.04, eta: "Critical" },
];

export default function Inventory() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Inventory & Operations"
          index="05"
          title={
            <>
              Every item, every shelf,
              <br /> in real time.
            </>
          }
          description="Yeri tracks supply across every location and channel — auto-reordering, demand-forecasting, and flagging anomalies before they reach the shelf."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false}>
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <p className="text-[13px] font-medium text-white">
                  Live inventory · Lower East Side
                </p>
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] text-emerald-300 ring-1 ring-emerald-300/20">
                  Synced 2s ago
                </span>
              </div>
              <ul>
                {ITEMS.map((it, i) => (
                  <motion.li
                    key={it.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="grid grid-cols-12 items-center gap-3 border-b border-white/5 px-6 py-3 last:border-b-0"
                  >
                    <div className="col-span-5">
                      <p className="text-[13.5px] text-white">{it.name}</p>
                      <p className="text-[10.5px] text-ink-300 num-mono">
                        SKU {it.sku}
                      </p>
                    </div>
                    <div className="col-span-5">
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${it.stock * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.05 }}
                          className={`h-full rounded-full ${
                            it.stock < 0.1
                              ? "bg-rose-400/80"
                              : it.stock < 0.3
                                ? "bg-amber-300/80"
                                : "bg-gradient-to-r from-white/90 to-white/40"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="col-span-2 text-right text-[11px] text-ink-200">
                      {it.eta}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Auto-reorder</p>
                <p className="mt-2 text-[15px] text-white leading-relaxed">
                  Yeri opened a PO for{" "}
                  <span className="font-medium">12 cases of oat milk</span> with
                  your supplier. Arriving Thursday before 11am.
                </p>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-300 to-emerald-500/70 text-[11px] font-medium text-ink-950">
                      OK
                    </span>
                    <div>
                      <p className="text-[12.5px] text-white">
                        Verde Distribution
                      </p>
                      <p className="text-[10.5px] text-ink-300">
                        Order #VD-3922 · $284.40
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white ring-1 ring-white/15">
                    Approved
                  </span>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Multi-location</p>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {[
                    { l: "LES", v: 92 },
                    { l: "Williamsburg", v: 78 },
                    { l: "Soho", v: 64 },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300 truncate">
                        {s.l}
                      </p>
                      <p className="mt-1 text-[18px] font-medium text-white num-mono">
                        {s.v}%
                      </p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full bg-gradient-to-r from-white/90 to-white/30"
                          style={{ width: `${s.v}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
