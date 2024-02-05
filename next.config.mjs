/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export"
};
module.exports = {
    experimental: {
      images: true, // Correct usage of images option
    },
    // other configurations...
  };
export default nextConfig;
