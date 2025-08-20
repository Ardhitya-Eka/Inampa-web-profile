import { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
};

export default config;
