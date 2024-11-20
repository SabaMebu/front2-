/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: { domains: ["miviuyvan.s3.amazonaws.com"] },
  i18n: {
    locales: ["ge", "en", "ru"],
    defaultLocale: "ge",
  },
};

export default nextConfig;
