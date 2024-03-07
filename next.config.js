module.exports = {
  compiler: {
    styledComponents: true,
  },
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
