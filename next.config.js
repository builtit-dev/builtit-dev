/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
    unoptimized: true,
  },
  // Set the base path for GitHub Pages deployment
  basePath: '/builtit-template',
  // Disable server-side image optimization for static export
  assetPrefix: '/builtit-template',
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
}

module.exports = nextConfig
