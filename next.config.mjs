/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ye line sabse zaroori hai
  images: {
    unoptimized: true, // Static export ke liye zaroori hai
  },
};

export default nextConfig;