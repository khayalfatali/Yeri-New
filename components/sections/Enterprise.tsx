"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

export default function Enterprise() {
  return (
    <section
      id="enterprise"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          eyebrow="Enterprise infrastructure"
          index="08"
          title={
            <>
              Built for the largest
              <br /> merchant networks on Earth.
            </>
          }
          description="From single-store boutiques to 10,000-location chains, Yeri scales horizontally with regional residency, fine-grained roles, and the lowest end-to-end transaction latency in the industry."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false}>
              <div className="px-6 pt-6">
                <p className="eyebrow">Global mesh · live</p>
                <h3 className="mt-2 text-[22px] font-medium text-white">
                  99.999% multi-region uptime
                </h3>
              </div>
              <div className="relative mt-4 h-[280px] w-full overflow-hidden">
                <Globe />
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Performance</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { l: "Auth latency p50", v: "62ms" },
                    { l: "Auth latency p99", v: "180ms" },
                    { l: "Throughput", v: "120k tps" },
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
                <p className="eyebrow">Compliance</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "PCI DSS L1",
                    "SOC 2 Type II",
                    "ISO 27001",
                    "ISO 27017",
                    "FedRAMP Mod.",
                    "GDPR",
                    "PSD2 / SCA",
                    "HIPAA-ready",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-ink-100"
                    >
                      {c}
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

function Globe() {
  // simple animated arcs over globe outline
  return (
    <svg
      viewBox="0 0 600 280"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="gl-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="gl-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="140" r="130" fill="url(#gl-grad)" />
      <circle
        cx="300"
        cy="140"
        r="130"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
        fill="none"
      />
      {/* longitude arcs */}
      {Array.from({ length: 6 }).map((_, i) => {
        const rx = 130 - i * 18;
        return (
          <ellipse
            key={i}
            cx="300"
            cy="140"
            rx={rx}
            ry="130"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.6"
            fill="none"
          />
        );
      })}
      {/* latitude */}
      {[40, 80, 120, 160, 200, 240].map((y) => (
        <line
          key={y}
          x1={300 - Math.sqrt(Math.max(0, 130 * 130 - (y - 140) * (y - 140)))}
          x2={300 + Math.sqrt(Math.max(0, 130 * 130 - (y - 140) * (y - 140)))}
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.6"
        />
      ))}
      {/* nodes */}
      {[
        { x: 220, y: 110 },
        { x: 320, y: 90 },
        { x: 380, y: 150 },
        { x: 280, y: 200 },
        { x: 200, y: 170 },
        { x: 360, y: 220 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="3" fill="white" opacity="0.9" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="3"
            fill="white"
            opacity="0.4"
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: [1, 3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        </g>
      ))}
      {/* arcs */}
      {[
        ["M 220 110 Q 270 40 320 90", 0],
        ["M 320 90 Q 360 100 380 150", 0.6],
        ["M 380 150 Q 360 220 360 220", 1.2],
        ["M 280 200 Q 240 200 200 170", 1.6],
      ].map(([d, delay], i) => (
        <motion.path
          key={i}
          d={d as string}
          stroke="url(#gl-arc)"
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: delay as number,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
