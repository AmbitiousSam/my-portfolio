import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for catching React issues early
  reactStrictMode: true,
  // Optimise images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
