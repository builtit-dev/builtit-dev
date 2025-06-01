/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for compatibility
  trailingSlash: true,
  // Disable image optimization for static export
  distDir: 'out',
}

module.exports = nextConfig
