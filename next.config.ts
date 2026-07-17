import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    globalNotFound: true,
  },
    images: {
       remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/400/**',
      },
    ],
  },
};

export default nextConfig;
