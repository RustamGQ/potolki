import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "src/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;
