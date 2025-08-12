import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    additionalData: `@use "src/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;
