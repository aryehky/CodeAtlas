/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['images.unsplash.com'], // Add any image domains you'll use
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    async redirects() {
      return []
    },
    async rewrites() {
      return []
    },
    env: {
      // Add any public environment variables here
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
  }
  
  module.exports = nextConfig
  