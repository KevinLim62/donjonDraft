/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
          allowFutureImage: true,
        },
      },
    images: {
        domains: ['drive.google.com']
    },
    output: "export",
    reactStrictMode: true,
}

module.exports = nextConfig
