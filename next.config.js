module.exports = {
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
  experimental: {
    appDir: true, // enables the app/ directory routing (App Router)
  },
};
