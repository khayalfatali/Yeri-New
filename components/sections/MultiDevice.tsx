"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function MultiDevice() {
  return (
    <section className="relative isolate scroll-mt-24 overflow-hidden py-32 sm:py-44">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Multi-device merchant architecture"
          index="07"
          title={
            <>
              One platform.
              <br /> Every form factor.
            </>
          }
          description="iPhone, iPad, Mac, smart kiosk, hardware terminals. Yeri runs natively on each device with a unified data model and zero-config sync."
        />

        <Reveal delay={0.15} className="mt-16">
          <div className="relative mx-auto flex h-[440px] max-w-5xl items-end justify-center">
            {/* mac stand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex h-[300px] w-[480px] flex-col rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-3 backdrop-blur"
              style={{
                boxShadow: "0 60px 120px -30px rgba(0,0,0,0.6)",
              }}
            >
              <div className="flex items-center gap-1.5 px-1 pb-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="ml-3 text-[10px] text-ink-300">
                  Yeri Console
                </span>
              </div>
              <div className="grid flex-1 grid-cols-3 gap-2">
                <div className="col-span-1 rounded-lg bg-white/[0.03] p-2">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">
                    Locations
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {["Lower East Side", "Williamsburg", "Soho", "Berlin", "Tokyo"].map(
                      (l) => (
                        <li
                          key={l}
                          className="flex items-center gap-1.5 text-[10.5px] text-ink-100"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {l}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white/[0.03] p-3">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">
                      Today
                    </p>
                    <p className="mt-1 text-[16px] font-medium text-white num-mono">
                      $14,829
                    </p>
                    <p className="text-[9.5px] text-emerald-300 num-mono">
                      ↑ 12.4%
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-3">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">
                      Tickets
                    </p>
                    <p className="mt-1 text-[16px] font-medium text-white num-mono">
                      284
                    </p>
                    <p className="text-[9.5px] text-ink-300 num-mono">
                      Avg $52.20
                    </p>
                  </div>
                  <div className="col-span-2 rounded-lg bg-white/[0.03] p-3">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">
                      Live throughput
                    </p>
                    <div className="mt-2 flex items-end gap-1 h-12">
                      {[6, 8, 5, 9, 7, 11, 9, 13, 12, 16, 14, 19, 17, 22].map(
                        (h, i) => (
                          <motion.span
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h * 4}px` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.05 * i }}
                            className="flex-1 rounded-sm bg-gradient-to-t from-white/30 to-white/90"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* iPad */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-4 left-[18%] z-20 hidden h-[260px] w-[200px] rounded-[22px] border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900 p-2 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] sm:block"
            >
              <div className="h-full w-full rounded-[16px] bg-gradient-to-b from-ink-800 to-ink-950 p-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">
                  Register
                </p>
                <ul className="mt-2 space-y-1">
                  {[
                    { n: "Latte", p: "$5.50" },
                    { n: "Croissant", p: "$4.20" },
                    { n: "Espresso", p: "$3.80" },
                  ].map((i) => (
                    <li
                      key={i.n}
                      className="flex items-center justify-between rounded-md bg-white/[0.04] px-2 py-1.5 text-[10px] text-white"
                    >
                      <span>{i.n}</span>
                      <span className="num-mono">{i.p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 rounded-md bg-white/10 px-2 py-2 text-center text-[10.5px] font-medium text-white">
                  Charge · $13.50
                </div>
              </div>
            </motion.div>

            {/* iPhone */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-2 right-[18%] z-30 hidden h-[260px] w-[130px] rounded-[28px] border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900 p-1.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] sm:block"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-ink-800 to-ink-950 p-2">
                <span className="absolute left-1/2 top-1.5 h-[14px] w-[50px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5" />
                <div className="mt-7">
                  <p className="text-[8.5px] uppercase tracking-[0.18em] text-ink-400">
                    Today
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-white num-mono">
                    $14,829
                  </p>
                  <p className="text-[8px] text-emerald-300 num-mono">
                    ↑ 12.4%
                  </p>
                  <div className="mt-2 h-12 rounded-md bg-white/[0.04]" />
                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="rounded-md bg-white/[0.04] p-1.5">
                      <p className="text-[7.5px] uppercase tracking-[0.18em] text-ink-400">
                        Refunds
                      </p>
                      <p className="text-[10px] text-white num-mono">2</p>
                    </div>
                    <div className="rounded-md bg-white/[0.04] p-1.5">
                      <p className="text-[7.5px] uppercase tracking-[0.18em] text-ink-400">
                        Tips
                      </p>
                      <p className="text-[10px] text-white num-mono">$842</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* connection lines */}
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 30 80 Q 50 60 70 80"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.2"
                fill="none"
                strokeDasharray="0.6 0.8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.5 }}
              />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <p className="text-center text-[12.5px] text-ink-300">
            Sub-50ms sync across devices · Zero-config onboarding · Identity
            inherited from your Apple Business account
          </p>
        </Reveal>
      </div>
    </section>
  );
}
