import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@bookingengine/ui', '@bookingengine/shared'],
};

export default nextConfig;
