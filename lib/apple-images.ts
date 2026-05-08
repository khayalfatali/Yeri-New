/**
 * Apple Newsroom imagery used under the Apple Marketing Guidelines for
 * Yeri's payments coverage. Every entry is a public press image from
 * an Apple Newsroom press release. Trademark notice lives in the
 * footer / dedicated section.
 */
export type AppleImage = {
  src: string;
  alt: string;
  credit: string;
  ratio?: "4/3" | "16/9" | "21/9" | "3/2" | "1/1";
};

export const APPLE = {
  // 2024 Canada press release — customer holding iPhone next to merchant iPhone
  contactlessTransaction: {
    src: "https://www.apple.com/newsroom/images/2024/05/apple-launches-tap-to-pay-on-iphone-in-canada/article/ca-en/Apple-Tap-to-Pay-Canada-EN-iPhone-contactless-payments_big.jpg.large.jpg",
    alt: "A customer pays a merchant with a contactless tap from one phone to another at a market.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2022 US — produce / farmer's market scene
  marketScene: {
    src: "https://www.apple.com/newsroom/images/product/apple-pay/Apple_Apple-Pay_Transaction_big.jpg.large.jpg",
    alt: "A customer pays for fresh produce at a farmer's market with a contactless tap.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2022 US — payment confirmation inline shot
  paymentInline: {
    src: "https://www.apple.com/newsroom/images/product/apple-pay/Apple_Apple-Pay_Payment_inline.jpg.large.jpg",
    alt: "A merchant confirms a contactless payment on iPhone at a market stall.",
    credit: "Apple Newsroom",
    ratio: "4/3",
  },
  // 2023 UK — transaction
  ukTransaction: {
    src: "https://www.apple.com/newsroom/images/2023/07/Apple-Tap-to-Pay-on-iPhone-avail-UK-transaction_big.jpg.large.jpg",
    alt: "A customer holds their phone near a merchant's phone to complete a contactless payment.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2023 UK — merchant inline
  ukPayment: {
    src: "https://www.apple.com/newsroom/images/2023/07/Apple-Tap-to-Pay-on-iPhone-avail-UK-payment_inline.jpg.large.jpg",
    alt: "A merchant accepts a contactless payment from a customer at a market.",
    credit: "Apple Newsroom",
    ratio: "4/3",
  },
  // 2026 Apple Business — devices showing Yeri-style merchant platform
  businessHero: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-hero_big.jpg.large.jpg",
    alt: "MacBook Air, iPad Pro, and iPhone 17 Pro show a unified business management platform.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2026 — blueprints / product layout
  blueprints: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-Blueprints_big.jpg.large.jpg",
    alt: "Visual blueprints of a business shown on a Mac display.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2026 — config screen on Mac
  configurations: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-configurations_big.jpg.large.jpg",
    alt: "A configuration screen for a business platform on Mac.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2026 — maps / discovery
  mapsDiscovery: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-ads-on-Apple-Maps_big.jpg.large.jpg",
    alt: "Two phones showing a restaurant card with details on a map app.",
    credit: "Apple Newsroom",
    ratio: "4/3",
  },
  // 2026 — location info
  locationInfo: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-brand-management-location-info_big.jpg.large.jpg",
    alt: "Location information management screen on Mac.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
  // 2026 — location insights
  locationInsights: {
    src: "https://www.apple.com/newsroom/images/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/article/Apple-Business-brand-management-location-insights_big.jpg.large.jpg",
    alt: "Customer discovery and interaction insights on a Mac dashboard.",
    credit: "Apple Newsroom",
    ratio: "16/9",
  },
} satisfies Record<string, AppleImage>;

export type AppleImageKey = keyof typeof APPLE;
