"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const TEAM = [
  { name: "Mara V.", role: "Barista", shift: "8 — 14", status: "On shift", color: "bg-emerald-400" },
  { name: "Tomás L.", role: "Cashier", shift: "10 — 18", status: "On shift", color: "bg-emerald-400" },
  { name: "Sora K.", role: "Manager", shift: "9 — 17", status: "Break", color: "bg-amber-300" },
  { name: "Wren A.", role: "Barista", shift: "14 — 22", status: "Scheduled", color: "bg-ink-300" },
];

export default function Employees() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Run your team"
          index="09"
          title={
            <>
              Hire fast.
              <br /> Pay easy.
            </>
          }
          description="Schedule shifts, track hours, and run payroll in a couple of taps. Set what each role can do — and what they can&apos;t — without calling support."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <GlassCard>
              <p className="eyebrow">Today · Live roster</p>
              <ul className="mt-4 space-y-3">
                {TEAM.map((m, i) => (
                  <motion.li
                    key={m.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-white/40 to-white/10 text-[11px] font-medium text-white">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] text-white">{m.name}</p>
                      <p className="text-[11px] text-ink-300">{m.role}</p>
                    </div>
                    <span className="text-[11.5px] text-ink-200 num-mono">
                      {m.shift}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10.5px] text-white ring-1 ring-white/10">
                      <span className={`h-1.5 w-1.5 rounded-full ${m.color}`} />
                      {m.status}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Scheduling</p>
                <h3 className="mt-2 text-[18px] font-medium text-white">
                  AI-suggested shifts
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-200">
                  Yeri auto-builds rosters around demand forecasts, time-off
                  requests, and labor budget targets.
                </p>
                <div className="mt-4 grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 * 5 }).map((_, i) => {
                    const lit = [3, 4, 9, 10, 11, 17, 18, 24, 25, 30, 31, 32].includes(i);
                    return (
                      <span
                        key={i}
                        className={`aspect-square rounded-md ${
                          lit ? "bg-white/80" : "bg-white/[0.06]"
                        }`}
                      />
                    );
                  })}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.24}>
              <GlassCard>
                <p className="eyebrow">Payroll</p>
                <h3 className="mt-2 text-[18px] font-medium text-white">
                  Run payroll in 2 taps.
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-200">
                  Tips, taxes, and compliance — all calculated and filed
                  automatically.
                </p>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div>
                    <p className="text-[11px] text-ink-300">Next run · Friday</p>
                    <p className="text-[18px] font-medium text-white num-mono">
                      $4,820.18
                    </p>
                  </div>
                  <button className="rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-ink-950">
                    Run now
                  </button>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.3} className="sm:col-span-2">
              <GlassCard>
                <p className="eyebrow">Roles & permissions</p>
                <p className="mt-2 text-[14px] text-ink-100">
                  Cashier, manager, owner — every role has the right view, the
                  right tools, and the right limits. Adjust on the fly.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Refunds < $25", "Discount up to 15%", "Open register", "Edit menu", "View payroll"].map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11.5px] text-ink-100"
                    >
                      {p}
                    </span>
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
