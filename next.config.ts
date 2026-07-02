import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "pub-19ac7a5a7cd44a2eb419ad8517068e68.r2.dev" },
    ],
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;