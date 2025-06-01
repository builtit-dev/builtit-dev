/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path for both development and production
  basePath: '/builtit-template',
  // Set the asset prefix for both development and production
  assetPrefix: '/builtit-template',
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Disable image optimization for static export
  distDir: 'out',
}

module.exports = nextConfig
