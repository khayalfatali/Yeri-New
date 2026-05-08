"use client";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const PLANS = [
  {
    name: "Studio",
    desc: "For independent merchants and ateliers.",
    price: "Free",
    rate: "1.4% + 8¢",
    features: [
      "Contactless payments",
      "Single location",
      "Basic analytics",
      "Up to 3 staff",
    ],
    cta: "Start free",
    primary: false,
  },
  {
    name: "Business",
    desc: "For growing brands across multiple locations.",
    price: "$24",
    rate: "1.2% + 8¢",
    features: [
      "Everything in Studio",
      "Multi-location",
      "CRM, loyalty, gift cards",
      "Inventory + auto-reorder",
      "Yeri Intelligence",
    ],
    cta: "Start trial",
    primary: true,
  },
  {
    name: "Enterprise",
    desc: "For chains and global merchant networks.",
    price: "Custom",
    rate: "Custom",
    features: [
      "Everything in Business",
      "Dedicated infrastructure",
      "SSO, SCIM, audit",
      "24/7 priority support",
      "Solutions architect",
    ],
    cta: "Talk to sales",
    primary: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Pricing"
          title={
            <>
              Simple, by design.
            </>
          }
          description="Pay one rate per sale. No monthly minimums. No setup fees. Cancel any time. Volume? Call us — we&apos;ll talk."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.08}>
              <GlassCard
                className={`flex h-full flex-col ${
                  p.primary ? "ring-2 ring-white/15" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{p.name}</p>
                  {p.primary && (
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white ring-1 ring-white/15">
                      Most popular
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-[28px] font-medium tracking-tight text-white">
                  {p.price}
                  <span className="ml-1 text-[13px] text-ink-300">
                    {p.price === "Free" || p.price === "Custom" ? "" : "/ mo"}
                  </span>
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-200">{p.desc}</p>
                <p className="mt-3 text-[12.5px] text-ink-300">
                  Transactions ·{" "}
                  <span className="text-white num-mono">{p.rate}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-[13px] text-ink-100">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-1 shrink-0 text-white/70"
                      >
                        <path
                          d="M3 7.5L6 10.5L11.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-started"
                  className={`${
                    p.primary ? "btn-primary" : "btn-ghost"
                  } mt-6 w-full justify-center`}
                >
                  {p.cta}
                  <span aria-hidden>→</span>
                </a>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
