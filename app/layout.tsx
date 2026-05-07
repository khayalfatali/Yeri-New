import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://yeri.com"),
  title: {
    default: "Yeri — The Merchant Operating System",
    template: "%s · Yeri",
  },
  description:
    "Yeri is the Merchant Operating System. Accept contactless payments on iPhone with Tap to Pay, and run checkout, inventory, staff, CRM, and analytics from one mobile-first platform. Authorized PSP on the Apple Acceptance Platform.",
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
    title: "Yeri — The Merchant Operating System",
    description:
      "Tap to Pay on iPhone, plus checkout, inventory, staff, CRM, and analytics in one mobile-first platform.",
    siteName: "Yeri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeri — The Merchant Operating System",
    description:
      "Tap to Pay on iPhone, plus checkout, inventory, staff, CRM, and analytics in one mobile-first platform.",
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
