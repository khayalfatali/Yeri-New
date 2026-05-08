"use client";

import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import Reveal from "../ui/Reveal";

const CODE = `// Take a contactless payment in any merchant app
import Yeri from "@yeri/sdk";

const yeri = new Yeri(process.env.YERI_KEY);

const charge = await yeri.charges.create({
  amount: 4800,             // $48.00
  currency: "USD",
  source: "contactless",
  metadata: { orderId: "YR-1042" },
});

await charge.confirm();
// → { status: "succeeded", id: "ch_01H..." }`;

export default function Developers() {
  return (
    <section
      id="developers"
      className="relative isolate scroll-mt-24 py-32 sm:py-40"
    >
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="For developers"
            index="11"
            title={
              <>
                A clean API for
                <br /> the whole business.
              </>
            }
            description="One API for payments, orders, customers, stock, schedules, and payroll. Typed schemas. Idempotent by default. SDKs that feel like a library, not a spec."
          />
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {["TypeScript", "Swift", "Kotlin", "Go", "Python", "Ruby"].map(
                (l) => (
                  <span
                    key={l}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-ink-100"
                  >
                    {l}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <GlassCard padded={false}>
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="text-[11px] text-ink-300 font-mono">
                  charges.ts
                </span>
                <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[10px] text-ink-200 ring-1 ring-white/10">
                  v2.4
                </span>
              </div>
              <pre className="overflow-x-auto p-6 text-[12.5px] leading-relaxed font-mono text-ink-100">
                <code>
                  {CODE.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      <span className="mr-4 inline-block w-4 text-ink-500 select-none num-mono">
                        {i + 1}
                      </span>
                      {colorize(line)}
                    </span>
                  ))}
                </code>
              </pre>
            </GlassCard>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.18}>
              <GlassCard>
                <p className="eyebrow">Webhook</p>
                <div className="mt-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 font-mono text-[12px] text-ink-100">
                  <span className="text-emerald-300">POST</span>{" "}
                  /webhooks/yeri
                  <div className="mt-1 text-[11.5px] text-ink-300">
                    Event: <span className="text-white">charge.succeeded</span>
                  </div>
                  <div className="text-[11.5px] text-ink-300">
                    Latency: <span className="text-white num-mono">38ms</span>
                  </div>
                </div>
                <p className="mt-3 text-[13px] text-ink-200">
                  Signed, retried, ordered. Replay any event with one click.
                </p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.26}>
              <GlassCard>
                <p className="eyebrow">SDK ergonomics</p>
                <ul className="mt-3 space-y-2 text-[13px] text-ink-100">
                  <li className="flex gap-2">
                    <Check />
                    Typed schemas with autocomplete on every field
                  </li>
                  <li className="flex gap-2">
                    <Check />
                    Idempotency by default
                  </li>
                  <li className="flex gap-2">
                    <Check />
                    Edge-runtime ready (Node, Bun, Workers)
                  </li>
                  <li className="flex gap-2">
                    <Check />
                    Zero-config CLI + local sandbox
                  </li>
                </ul>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="mt-1 shrink-0 text-emerald-300"
    >
      <path
        d="M3 7.5L6 10.5L11.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function colorize(line: string) {
  // very light, deterministic syntax tinting
  if (/^\/\//.test(line.trim())) {
    return <span className="text-ink-400">{line}</span>;
  }
  return (
    <span>
      {line.split(/(".*?"|\b(?:const|await|new|import|from|process|env)\b)/).map(
        (chunk, i) => {
          if (/^"/.test(chunk))
            return (
              <span key={i} className="text-amber-200/90">
                {chunk}
              </span>
            );
          if (/^(const|await|new|import|from)$/.test(chunk))
            return (
              <span key={i} className="text-sky-300/90">
                {chunk}
              </span>
            );
          if (/^(process|env)$/.test(chunk))
            return (
              <span key={i} className="text-violet-300/90">
                {chunk}
              </span>
            );
          return <span key={i}>{chunk}</span>;
        },
      )}
    </span>
  );
}
