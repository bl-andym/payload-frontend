/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '4000',
        pathname: '/media/**',
      }
    ],
  },
};

export default nextConfig;
