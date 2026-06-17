import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export' // Uncomment if you want to deploy as a Static Site on Render. Leave commented for a Web Service.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
