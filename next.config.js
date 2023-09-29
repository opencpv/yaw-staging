/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "flagcdn.com",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig;
