import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "", // Leave empty if there's no specific port
        pathname: "/f/**", // Match all paths under `/f/`
      },
      {
        protocol: "https",
        hostname: "yzb3d9o4b3.ufs.sh", // ✅ your specific UTFS subdomain
      },
      {
        protocol: "https",
        hostname: "facebook.com",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;