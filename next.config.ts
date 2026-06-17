import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Note: If you deploy to a specific repository like https://github.com/NAKME12/portfolio
  // you might need to add: basePath: '/portfolio',
};

export default nextConfig;
