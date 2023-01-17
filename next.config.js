import i18n from "./next-i18next.config.js";

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'de'],
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: [],
      // Defaults to ["index"].
      meaninglessFileNames: [],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: '',
      // Not supported yet.
      minify: true,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: true,
    },
  },
}

export default nextConfig