import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host: send the bare domain to www, keeping the path.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "propertreat.com" }],
        destination: "https://www.propertreat.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
