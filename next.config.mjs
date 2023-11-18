/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: './dist',
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    images: { unoptimized: true, loader: 'akamai', path: '' },
    assetPrefix: './',
};

export default nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     images: {
//         loader: 'akamai',
//         path: '',
//     },
//     assetPrefix: './',
// };

// export default nextConfig;
