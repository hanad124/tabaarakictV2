/** @type {import('next').NextConfig} */
const nextConfig = {
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
