import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - this config field is often undocumented in type files
  allowedDevOrigins: ["192.168.1.77", "localhost"],
};

export default nextConfig;
