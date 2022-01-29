/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://cartassv.herokuapp.com/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
