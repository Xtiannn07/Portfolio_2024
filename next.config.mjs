/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
        unoptimized: true,},
    trailingSlash: true, // For proper routing on static hosting
};

export default nextConfig;
