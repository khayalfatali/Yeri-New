"use client";

import Logo from "./Logo";

const COLS = [
  {
    title: "Products",
    items: [
      "Payments",
      "Tap to Pay on iPhone",
      "Yeri OS",
      "Analytics",
      "CRM",
      "Inventory",
      "Payroll",
      "Hardware",
    ],
  },
  {
    title: "Solutions",
    items: [
      "Cafés & restaurants",
      "Retail",
      "Beauty & wellness",
      "Services",
      "Multi-location",
      "Enterprise chains",
    ],
  },
  {
    title: "Developers",
    items: ["Documentation", "API reference", "SDKs", "Webhooks", "Changelog", "Status"],
  },
  {
    title: "Company",
    items: ["About", "Customers", "Careers", "Press", "Contact", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-12">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-ink-300">
              Yeri is the Merchant Operating System. Payments, operations, and
              intelligence in one mobile-first platform — built around iPhone.
            </p>
            <form
              className="mt-6 flex max-w-sm items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@studio.com"
                className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] text-white placeholder:text-ink-400 focus:border-white/20 focus:outline-none"
              />
              <button className="btn-primary text-[13px]">Subscribe</button>
            </form>
            <p className="mt-3 text-[11px] text-ink-400">
              Quarterly notes from the Yeri team. No spam. Unsubscribe in one
              tap.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="eyebrow">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] text-ink-200 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-soft mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[12px] text-ink-400 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Yeri Payment Services LLC. All rights reserved.</p>
            <p className="text-ink-500">
              Reg. No. 1009415381 · e37, m45, Binagadi District, Baku AZ1130, Azerbaijan
            </p>
            <p className="text-ink-500">
              Authorized Payment Service Provider on the Apple Acceptance
              Platform.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
