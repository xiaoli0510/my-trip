import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: false,
  /* config options here */
   experimental: {
    globalNotFound: true,
    optimizePackageImports: ['lucide-react'],
  },
    images: {
       remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/*/**',
      },
    ],
  },
};

export default nextConfig;
