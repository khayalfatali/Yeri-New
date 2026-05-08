"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

export default function Security() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Trust, by design"
          index="12"
          title={
            <>
              Bank-grade. Without
              <br /> the bank-grade headache.
            </>
          }
          description="Encryption at the chip, the network, and the database. Keys never leave dedicated hardware modules. Every transaction is signed and verifiable."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <GlassCard className="relative overflow-hidden">
              {/* HSM module */}
              <div className="relative mx-auto h-[300px] w-full">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    className="relative h-44 w-44 rounded-3xl"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.16), rgba(140,140,160,0.04) 60%)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      boxShadow:
                        "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06) inset",
                    }}
                  >
                    {/* circuit lines */}
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 h-full w-full opacity-60"
                    >
                      <g stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" fill="none">
                        <path d="M10 20 H40 V40 H60 V20 H90" />
                        <path d="M10 50 H30 V70 H70 V50 H90" />
                        <path d="M50 10 V30 H70 V50" />
                      </g>
                      {[
                        [40, 40],
                        [60, 20],
                        [30, 70],
                        [70, 50],
                        [50, 30],
                      ].map(([x, y], i) => (
                        <circle
                          key={i}
                          cx={x as number}
                          cy={y as number}
                          r="1.4"
                          fill="white"
                          opacity="0.7"
                        />
                      ))}
                    </svg>
                    {/* lock */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x="5"
                            y="11"
                            width="14"
                            height="9"
                            rx="2"
                            stroke="white"
                            strokeWidth="1.4"
                          />
                          <path
                            d="M8 11V8a4 4 0 1 1 8 0v3"
                            stroke="white"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* outer glow */}
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255,255,255,0.16), transparent 70%)",
                  }}
                />
              </div>
              <p className="mt-2 text-center text-[12px] text-ink-300">
                FIPS 140-3 Level 3 HSM cluster · Multi-region replicated
              </p>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
            {[
              {
                t: "End-to-end encryption",
                d: "Sensitive data is encrypted on iPhone using Secure Enclave keys before it ever touches Yeri infrastructure.",
              },
              {
                t: "Tokenization",
                d: "Card numbers are replaced with single-use, scope-bound tokens — useless if intercepted.",
              },
              {
                t: "Continuous attestation",
                d: "Every device proves its integrity at boot and on every transaction. Tampering is impossible to hide.",
              },
              {
                t: "Zero-trust networking",
                d: "Mutual TLS, signed requests, and per-tenant isolation. There is no implicit trust — anywhere.",
              },
            ].map((it, i) => (
              <Reveal delay={0.15 + i * 0.06} key={it.t}>
                <GlassCard>
                  <p className="eyebrow">Security</p>
                  <h3 className="mt-2 text-[18px] font-medium text-white">
                    {it.t}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-200">
                    {it.d}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
