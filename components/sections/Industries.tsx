"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { APPLE } from "@/lib/apple-images";

type Industry = {
  name: string;
  copy: string;
  img: { src: string; alt: string };
  ratio: string;
  span?: "wide" | "tall" | "normal";
};

const INDUSTRIES: Industry[] = [
  {
    name: "Cafés & coffee",
    copy: "Take orders, run tabs, and reward regulars before the espresso pulls.",
    img: APPLE.contactlessTransaction,
    ratio: "16/10",
    span: "wide",
  },
  {
    name: "Markets & makers",
    copy: "Pop up anywhere. Sell anywhere. Settle by morning.",
    img: APPLE.marketScene,
    ratio: "4/3",
  },
  {
    name: "Restaurants",
    copy: "Open checks, split bills, send to kitchen — without leaving the floor.",
    img: APPLE.ukTransaction,
    ratio: "4/3",
  },
  {
    name: "Boutique retail",
    copy: "Catalogs, modifiers, and stock that stays in sync across every till.",
    img: APPLE.ukPayment,
    ratio: "3/4",
    span: "tall",
  },
  {
    name: "Salons & studios",
    copy: "Bookings, deposits, no-shows — handled in the same place you ring up sales.",
    img: APPLE.paymentInline,
    ratio: "4/3",
  },
];

export default function Industries() {
  return (
    <section className="relative isolate scroll-mt-24 py-32 sm:py-40">
      <div className="container-page">
        <SectionHeader
          eyebrow="Made for the way you sell"
          index="03"
          title={
            <>
              From a stall to
              <br /> a chain of stores.
            </>
          }
          description="Yeri adapts to your business — not the other way around. Start with a phone in your pocket. Scale to a hundred locations without changing software."
        />

        <div className="mt-14 grid grid-cols-12 gap-4 sm:gap-5">
          {INDUSTRIES.map((it, i) => (
            <Reveal
              key={it.name}
              delay={0.1 + i * 0.06}
              className={
                it.span === "wide"
                  ? "col-span-12 lg:col-span-8"
                  : it.span === "tall"
                    ? "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2"
                    : "col-span-12 sm:col-span-6 lg:col-span-4"
              }
            >
              <Tile {...it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ name, copy, img, ratio, span }: Industry) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative block h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] shadow-glass-lg ${
        span === "tall" ? "" : ""
      }`}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <p className="eyebrow text-white/80">{name}</p>
        <p className="mt-2 max-w-[28ch] text-[15px] leading-snug text-white">
          {copy}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-white/85 transition-transform duration-500 group-hover:translate-x-0.5">
          Learn more <span aria-hidden>→</span>
        </span>
      </div>
    </motion.a>
  );
}
