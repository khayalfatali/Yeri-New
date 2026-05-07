"use client";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";
import AreaChart from "../viz/AreaChart";

export default function Analytics() {
  return (
    <section
      id="analytics"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Analytics & AI"
            index="03"
            title={
              <>
                Intelligence that runs
                <br /> your business with you.
              </>
            }
            description="Yeri Intelligence learns the rhythm of your store — surfacing forecasts, anomalies, and decisions before you have to ask. Real-time. Private. On-device when possible."
          />
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Tag>Forecasting</Tag>
              <Tag>Anomaly detection</Tag>
              <Tag>Price elasticity</Tag>
              <Tag>Cohorts & LTV</Tag>
              <Tag>Live attribution</Tag>
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
                  xLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                />
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-4">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Insight</p>
                <p className="mt-2 text-[16px] leading-relaxed text-white">
                  Saturday afternoons are your highest-margin window.
                  Recommended: bundle pastries with espresso for a +9.2%
                  basket lift.
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-full bg-white/10 px-3 py-1.5 text-[12px] text-white ring-1 ring-white/15">
                    Apply bundle
                  </button>
                  <button className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[12px] text-ink-200 ring-1 ring-white/10">
                    Why this?
                  </button>
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">Anomaly detected</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-100">
                  3.4× spike in chargebacks from a single BIN range in the last
                  6 hours. Yeri auto-paused affected attempts.
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
