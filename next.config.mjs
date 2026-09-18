/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // gramjs (telegram) and websocket must stay as real node_modules at runtime
  serverExternalPackages: ['telegram', 'websocket', 'big-integer'],
  // turbopack: {} would re-enable Turbopack; we use --webpack flag in build script instead
  async rewrites() {
    const sections = ['orders', 'chats', 'clients', 'warehouse', 'analytics', 'transactions', 'settings', 'billing'];
    return sections.map((s) => ({ source: `/${s}`, destination: '/' }));
  },
}

export default nextConfig
