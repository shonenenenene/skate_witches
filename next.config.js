/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: './dist',
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    images: { unoptimized: true },
};

export default nextConfig;
