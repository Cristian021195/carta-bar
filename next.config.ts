import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/menu',
        destination: '/menu/info',
        permanent: true, // Use true for 301 redirect, false for 302 redirect
      },
      {
        source: '/',
        destination: '/menu/info',
        permanent: true, // Use true for 301 redirect, false for 302 redirect
      },
    ];
  },
};

export default nextConfig;
