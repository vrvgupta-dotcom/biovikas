import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS to ./out
  output: "export",
  // Set NEXT_PUBLIC_BASE_PATH=/biovikas when serving from a GitHub Pages project URL
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
};

export default nextConfig;
