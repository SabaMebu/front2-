/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: { domains: ["miviuyvan.s3.amazonaws.com"] },
};

export default nextConfig;
