import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  i18n: {
    locales: ["id", "en"], // ✅ Supported languages
    defaultLocale: "id", // ✅ Default language
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

export default nextConfig;
