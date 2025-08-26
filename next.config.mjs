/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // enables static export
  trailingSlash: true,          // ensures URLs end with a slash (good for GitHub Pages)
  basePath: '/website-option2', // set the subpath for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,   // ignore lint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,    // ignore type errors during build
  },
  images: {
    unoptimized: true,          // disables image optimization for static export
  },
}

export default nextConfig
