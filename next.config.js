/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "drive.google.com",
      "dropbox.com",
      "previews.dropbox.com",
      "localhost",
      "www.amazon.com",
    ],
  },
};

module.exports = nextConfig;
