/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
    unoptimized: true,
  },
  // Set the base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/builtit-template' : '',
  // Disable server-side image optimization for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/builtit-template' : '',
}

module.exports = nextConfig
