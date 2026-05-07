/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/newsroom/**",
      },
    ],
  },
  // R3F + three deeply-nested ESM works fine; keep transpilePackages explicit for safety
  transpilePackages: ["three"],
};

export default nextConfig;
