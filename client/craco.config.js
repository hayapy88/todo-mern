const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "src/assets/scss/variables.scss";`,
      },
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const isProduction = env === "production";

      // Sassのルールを修正
      const sassRule = webpackConfig.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes("scss|sass")
      );
      if (sassRule) {
        sassRule.use = sassRule.use.map((loader) => {
          if (loader.loader && loader.loader.includes("sass-loader")) {
            return {
              ...loader,
              options: {
                ...loader.options,
                sourceMap: !isProduction,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, "src/assets/scss")],
                },
              },
            };
          }
          return loader;
        });
      }

      return webpackConfig;
    },
  },
};
