import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Temporary photos are served from Wikimedia Commons.
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "thumb.wikimedia.org" },
    ],
  },
};

export default nextConfig;
