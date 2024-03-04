/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "flagcdn.com",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "cdn.sanity.io",
      "th.bing.com",
      "plus.unsplash.com",
      "avatar.iran.liara.run",
      "cdn.sanity.io"
    ],
  },
};

module.exports = nextConfig;
