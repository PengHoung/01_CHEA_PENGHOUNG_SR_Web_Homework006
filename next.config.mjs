/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'homework-api.noevchanmakara.site',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'laptopmedia.com',
      },
      {
        protocol: 'https',
        hostname: 'photos5.appleinsider.com',
      },
    ],
  },
};

export default nextConfig;