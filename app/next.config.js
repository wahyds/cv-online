/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "cv-online", // Ganti "repo-name" dengan nama repo GitHub kamu
    images: {
      unoptimized: true, // Hindari error pada image Next.js
    },
  };
  
  module.exports = nextConfig;
  