"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Products", href: "#payments" },
  { label: "Solutions", href: "#operating-system" },
  { label: "Developers", href: "#developers" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Resources", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3"
    >
      <nav
        className={`relative flex w-full max-w-[1240px] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ease-out-expo ${
          scrolled
            ? "glass-strong"
            : "bg-transparent border border-transparent"
        }`}
        aria-label="Primary"
      >
        <a href="#" className="flex items-center gap-2 px-1">
          <Logo className="h-6 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative rounded-full px-3.5 py-1.5 text-[13.5px] text-ink-200 transition-colors hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.06]" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#login"
            className="rounded-full px-3.5 py-1.5 text-[13.5px] text-ink-200 transition-colors hover:text-white"
          >
            Login
          </a>
          <a href="#get-started" className="btn-primary text-[13.5px]">
            Get started
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full p-2 text-ink-100 hover:bg-white/5"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 6h14M3 14h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-2 right-2 top-[110%] glass-strong rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-ink-100 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-2 px-2">
                <a href="#login" className="btn-ghost flex-1 text-sm">
                  Login
                </a>
                <a href="#get-started" className="btn-primary flex-1 text-sm">
                  Get started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
