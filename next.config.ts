import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
};

export default nextConfig;
