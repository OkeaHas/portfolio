import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // biar bisa di-export jadi static file (HTML, CSS, JS)
  output: "export",

  // basePath & assetPrefix = nama repo kamu
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
};

export default nextConfig;
