/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faracha-b3825.appspot.com",
        port: "",
        pathname: "/products/**",
      },
    ],
    domains: ["faracha-b3825.appspot.com", "tailwindui.com"],
  },
};

module.exports = nextConfig;
