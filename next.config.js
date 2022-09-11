/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','offingo.herokuapp.com', 'localhost:5000'],
  },
}

module.exports = nextConfig
