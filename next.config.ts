import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    prependData: `@import "src/styles/_variables.scss";`,
  },
};

export default nextConfig;
