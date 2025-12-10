/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  experimental: {
    disableRouteAnnouncer: true,   // ← THIS removes the N icon
  },
};

export default nextConfig;
