/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
