/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.codeforamerica.org",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "www.aclu.org",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
