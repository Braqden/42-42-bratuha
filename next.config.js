/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/42-bratuha' : '',
}

module.exports = nextConfig 