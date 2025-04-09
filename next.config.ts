import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "images.pexels.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
  },
  output: "export",
};

export default nextConfig;
