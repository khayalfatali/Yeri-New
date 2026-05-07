import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yeri.com"),
  title: {
    default: "Yeri — The merchant operating system",
    template: "%s · Yeri",
  },
  description:
    "Yeri combines payments, analytics, operations, CRM, inventory, and merchant workflows into one mobile-first platform. Accept contactless payments on iPhone and run your business from a single system.",
  keywords: [
    "merchant",
    "payments",
    "tap to pay",
    "iPhone",
    "POS",
    "operating system",
    "Yeri",
  ],
  openGraph: {
    type: "website",
    title: "Yeri — Merchant infrastructure, reimagined.",
    description:
      "Payments, operations, analytics, and CRM unified in one mobile-first merchant platform.",
    siteName: "Yeri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeri — Merchant infrastructure, reimagined.",
    description:
      "Payments, operations, analytics, and CRM unified in one mobile-first merchant platform.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-white/20">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
