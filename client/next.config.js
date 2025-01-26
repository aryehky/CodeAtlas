/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    env: {
      // Add any public environment variables here
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      });
      return config;
    }
  }
  
  module.exports = nextConfig
  