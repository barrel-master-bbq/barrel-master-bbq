import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "photos.google.com",
      "photos.app.goo.gl",
      "lh3.googleusercontent.com",
      "cdn.sanity.io",
    ],
  },
};

export default nextConfig;
