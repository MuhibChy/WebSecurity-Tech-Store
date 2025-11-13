/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/WebSecurity-Tech-Store' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/WebSecurity-Tech-Store' : '',
}

module.exports = nextConfig
