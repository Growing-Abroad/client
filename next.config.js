/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   // The locales you want to support in your app
  //   // locales: ["de", "en", "pt"],
  //   // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
  //   // defaultLocale: "en",
  //   // localeDetection: false,
  // },
  compiler: {
    styledComponents: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
};


module.exports = nextConfig;
