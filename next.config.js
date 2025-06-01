/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path for GitHub Pages deployment
  basePath: '/builtit-template',
  // Set the asset prefix for GitHub Pages deployment
  assetPrefix: '/builtit-template',
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Disable image optimization for static export
  distDir: 'out',
}

module.exports = nextConfig
