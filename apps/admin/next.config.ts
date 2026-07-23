import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@bookingengine/ui', '@bookingengine/shared', '@bookingengine/auth'],
};

export default nextConfig;
