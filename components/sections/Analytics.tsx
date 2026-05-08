"use client";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import AreaChart from "../viz/AreaChart";
import { APPLE } from "@/lib/apple-images";

export default function Analytics() {
  return (
    <section
      id="analytics"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Know your business"
            index="05"
            title={
              <>
                Numbers that tell you
                <br /> what to do next.
              </>
            }
            description="Yeri turns every sale into a signal. See what&apos;s selling, when it&apos;s selling, and what to change — without leaving the app you take payments in."
          />
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Tag>Today vs last week</Tag>
              <Tag>Top sellers</Tag>
              <Tag>Peak hours</Tag>
              <Tag>Repeat customers</Tag>
              <Tag>Recommendations</Tag>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-8">
            <GlassCard padded={false}>
              <div className="flex items-center justify-between p-6 pb-2">
                <div>
                  <p className="eyebrow">Revenue</p>
                  <p className="mt-1 text-[26px] font-medium tracking-tight text-white num-mono">
                    $284,910
                    <span className="ml-2 text-[12px] text-emerald-300">
                      ↑ 18.6% MoM
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-ink-300">
                  <Legend color="rgba(255,255,255,0.95)">Revenue</Legend>
                  <Legend color="rgba(180,200,255,0.85)">Forecast</Legend>
                </div>
              </div>
              <div className="px-6 pb-6">
                <AreaChart
                  height={260}
                  width={620}
                  series={[
                    {
                      name: "Revenue",
                      stroke: "rgba(255,255,255,0.95)",
                      fill: "#ffffff",
                      points: [
                        12, 14, 13, 18, 17, 22, 20, 26, 24, 30, 28, 34, 31, 38,
                        37, 44, 42, 50,
                      ],
                    },
                    {
                      name: "Forecast",
                      stroke: "rgba(180,200,255,0.85)",
                      fill: "#a8b6ff",
                      points: [
                        10, 12, 12, 16, 16, 19, 19, 22, 23, 26, 27, 30, 31, 34,
                        36, 39, 41, 45,
                      ],
                    },
                  ]}
                />
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-4">
            <Reveal delay={0.18}>
              <GlassCard padded={false} className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={APPLE.locationInsights.src}
                    alt={APPLE.locationInsights.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-ink-950/30" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="eyebrow text-white/80">Insight</p>
                    <p className="mt-1 text-[14px] text-white">
                      Saturdays earn 28% more. Bundle pastries with espresso
                      for a +9% basket lift.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Heads up</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-100">
                  3.4× spike in chargebacks from a single card range over the
                  last 6 hours. Yeri auto-paused affected attempts.
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-3/4 bg-gradient-to-r from-rose-300/70 to-rose-500/40" />
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-ink-100 backdrop-blur">
      {children}
    </span>
  );
}

function Legend({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className="h-1.5 w-3 rounded-full"
        style={{ background: color }}
      />
      {children}
    </span>
  );
}
