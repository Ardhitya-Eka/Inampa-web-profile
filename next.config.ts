import { NextConfig } from "next";

const config: NextConfig = {
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
};

export default config;
