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
      {
        protocol: "https",
        hostname: "optim.tildacdn.com", // Новый хост
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Новый хост
      },
      {
        protocol: "https",
        hostname: "play.tailwindcss.com", // Новый хост
      },
    ],
  },
};

export default nextConfig;
