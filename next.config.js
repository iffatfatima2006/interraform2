/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.serviceplusaquatics.com',
      },
    ],
  },
}

module.exports = nextConfig
