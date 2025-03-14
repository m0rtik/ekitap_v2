import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillbox.kz",
      },
      {
        protocol: "https",
        hostname: "cdn.stepik.net", // Новый хост
      },
    ],
  },
};

export default nextConfig;
