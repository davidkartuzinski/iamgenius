const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },

  images: {
    domains: ['iamgenius.io'],
  },

  reactStrictMode: true,
  swcMinify: true,
};
const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
